import { Injectable } from '@angular/core';
import { nanos, NatsConnection, nkeyAuthenticator } from "@nats-io/nats-core";
import { wsconnect } from "@nats-io/nats-core";
import { ObjectInfo, ObjectStore, ObjectStoreMeta, Objm } from "@nats-io/obj";
import { jetstream, JetStreamClient, JetStreamManager, jetstreamManager, RetentionPolicy, StorageType, StreamConfig } from "@nats-io/jetstream";
import { Kvm } from "@nats-io/kv";
import { Convert, Pipeline } from '../model/model';
import { CollectresultsService } from './collectresults.service';

const creds = `SUAMCB5PRHKKQ44QS674C3UDVUHF2RTPTT2JM3KW4KMDKLYVMN2XQNQYVQ`;
const servername = "nats-server";

@Injectable({
  providedIn: 'root'
})
export class DfserviceService {
  private _nc: NatsConnection | undefined;
  private _objm: Objm | undefined;
  private _js: JetStreamClient | undefined;
  private _jsm: JetStreamManager | undefined;
  private _kv: Kvm | undefined;

  constructor(private cresultsvc: CollectresultsService) {
    const auth = nkeyAuthenticator(new TextEncoder().encode(creds));
    wsconnect({
      name: 'app',
      servers: ['ws://localhost:8088'],
      authenticator: auth,
    }).then((nc) => {
      console.log("Connected to NATS server");
      this._nc = nc;
      this._objm = new Objm(this._nc);
      this._js = jetstream(this._nc);
      jetstreamManager(this._nc).then((jsm) => {
        this._jsm = jsm;
      });
      this._kv = new Kvm(this._nc);

    }).catch((err) => {
      console.error("Error connecting to NATS server", err);
      return undefined;
    });
  }

  ping(): void {
    if (this._nc) {
      console.log(this._nc.info)
    }
  }
  async UploadFile(bucket: string, fileID: string, file: File, mimetype?: string): Promise<ObjectInfo> {
    if (!this._objm) {
      throw new Error("NATS Object Manager not initialized");
    }
    let store: ObjectStore;
    try {
      store = await this._objm.open(bucket);
    } catch {
      store = await this._objm.create(bucket, {
        description: "Auto-created bucket",
        ttl: nanos(1000 * 60 * 60), //1hr
        storage: "memory",
      });
    }
    const meta: ObjectStoreMeta = {
      name: fileID,
      metadata: mimetype ? { mimetype } : undefined
    };
    // Convert File to ReadableStream<Uint8Array>
    const dataStream = this.fileToReadableStream(file);
    return await store.put(meta, dataStream);
  }

  // Equivalent to Go's GetFile
  async DownloadFile(bucket: string, fileID: string): Promise<Blob> {
    if (!this._objm) {
      throw new Error("NATS Object Manager not initialized");
    }
    // Open existing object store
    const store = await this._objm.open(bucket);

    // Fetch object data by name (fileID)
    const obj = await store.get(fileID);
    if (!obj) {
      throw new Error("File not found in bucket");
    }

    // obj.data is Uint8Array, convert to Blob
    const mimetype = obj.info.metadata?.['mimetype'] || "application/octet-stream";
    const uint8 = await this.streamToUint8Array(obj.data);
    return new Blob([uint8], { type: mimetype });
  }


  async streamToUint8Array(stream: ReadableStream<Uint8Array>): Promise<Uint8Array> {
    const reader = stream.getReader();
    const chunks: Uint8Array[] = [];
    let totalLength = 0;

    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      if (value) {
        chunks.push(value);
        totalLength += value.length;
      }
    }
    // Concatenate all chunks
    const result = new Uint8Array(totalLength);
    let offset = 0;
    for (const chunk of chunks) {
      result.set(chunk, offset);
      offset += chunk.length;
    }
    return result;
  }

  fileToReadableStream(file: File): ReadableStream<Uint8Array> {
    return new ReadableStream<Uint8Array>({
      async start(controller) {
        const reader = new FileReader();
        reader.onload = () => {
          const arrayBuffer = reader.result as ArrayBuffer;
          controller.enqueue(new Uint8Array(arrayBuffer));
          controller.close();
        };
        reader.onerror = (e) => {
          controller.error(e);
        };
        reader.readAsArrayBuffer(file);
      }
    });
  }

  async addStream(name: string, inmemory: boolean): Promise<void> {

    const conf =
    {
      name,
      subjects: [`${name}.>`],
      storage: inmemory ? StorageType.Memory : StorageType.File,
      retention: RetentionPolicy.Workqueue,
      max_msgs: -1,
      max_msg_size: -1,
      max_bytes: -1
    };

    try {

      await this._jsm?.streams.add(conf)
    } catch (err: any) {
      if (err.code === "503" || err.message?.includes("already in use") || err.message?.includes("exists")) {
        await this._jsm?.streams.update(name, conf);
        console.debug("Updated stream", "name", name);
      } else {
        throw err;
      }
    }


  }

  getPipelineRunName(): string {

    return `pplrun_${servername}_pipeline`;
  }

  getPipelineStatusKVName(pipelineId: string): string {
    return `pplstatus_${pipelineId}`;
  }

  async StartPipeline(pipeline: Pipeline) {
    const strname = this.getPipelineRunName();
    try {
      await this.addStream(strname, true);
    } catch (error) {
      console.error("Could not add or update stream", error);
    }

    try {
      const pplj = Convert.pipelineToJson(pipeline);
      //console.log(pplj);
      await this._js?.publish(`${strname}.${pipeline.id}`, pplj, { msgID: pipeline.id!, retries: 3 });

      const pplkvname = this.getPipelineStatusKVName(pipeline.id!);
      const kv = await this._kv?.create(pplkvname);
      const watch = await kv?.watch();
      if (!!watch) {
        (async () => {
          for await (const e of watch) {
            if (!!e && e.value) {
              try {
                this.cresultsvc.UpdateResults(JSON.parse(e.string()));
              } catch (error) {

              }

            }
            // console.log(
            //   `watch: ${e.key}: ${e.operation} ${e.value ? e.string() : ""}`,
            // );
          }
        })().then();

      }


    } catch (error) {
      console.error(error);
    }


  }

}
