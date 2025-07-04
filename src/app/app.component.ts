import { AfterViewInit, Component, OnDestroy } from '@angular/core';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzUploadFile, NzUploadModule } from 'ng-zorro-antd/upload';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { DfserviceService } from './services/dfservice.service';
import { Utils } from './utils/utils';
import { Artifact, Asset, Convert, Pipeline, Status, Storetype } from './model/model';
import { FormsModule } from '@angular/forms';
import { NzCodeEditorModule } from 'ng-zorro-antd/code-editor';
import { ResultslistComponent } from './components/resultslist/resultslist.component';
import { Subscription } from 'rxjs';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { CollectresultsService } from './services/collectresults.service';

@Component({
  selector: 'app-root',
  imports: [NzButtonModule, NzUploadModule, NzIconModule, NzGridModule, FormsModule, NzCodeEditorModule, ResultslistComponent, NzTagModule],

  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements AfterViewInit, OnDestroy {
  serverStatus: 'connected' | 'connecting' | 'error' = 'connecting';
  private serverStatusSubscription: Subscription;
  private pipelineStatusSubscription: Subscription;

  constructor(private messageService: NzMessageService, private dfsvc: DfserviceService, private cresultsvc: CollectresultsService) {
    this.serverStatusSubscription = this.dfsvc.serverStatus$.subscribe(status => {
      this.serverStatus = status;
    });

    this.pipelineStatusSubscription = this.cresultsvc.$statusinfo.subscribe(statusinfo => {
      if (statusinfo.status === Status.Processing) {
        this.pipelining = true;
      } else if (statusinfo.status === Status.Completed || statusinfo.status === Status.Errored || statusinfo.status === Status.Canceled) {
        this.pipelining = false;
      }
    });
  }
  ngOnDestroy(): void {
    this.serverStatusSubscription.unsubscribe();
    this.pipelineStatusSubscription.unsubscribe();
  }

  ngAfterViewInit(): void {

    setTimeout(() => {
      Utils.SetMonacoSchema();
    }, 1000)

  }

  fileList: NzUploadFile[] = []
  pipelining = false;

  editorOptions = {
    language: 'json',
    theme: 'vs-dark'
  }

  pipeline = `{
    "processors": [
        {
            "actionconvert": true,
            "settingsconvert": {
                "saveformat": "pdf"
            }
        }
    ]
}`;

  beforeUpload = (file: NzUploadFile): boolean => {
    this.fileList = this.fileList.concat(file);
    return false;
  };

  async Process(event: Event): Promise<void> {
    event.preventDefault();
    this.messageService.success('Pipeline started!');
    await this.handleUpload();
  }

  async handleUpload(): Promise<void> {
    this.pipelining = true;
    const pplid = Utils.getId();
    let artifacts: Artifact[] = [];
    for (const file of this.fileList) {
      const fileid = Utils.getId();
      console.log(file);
      file.status = 'uploading';
      const oinfo = await this.dfsvc.UploadFile(pplid, fileid, file as unknown as File, file.type);
      file.status = "success";
      console.log(oinfo);
      artifacts.push(Utils.GetArtifact(pplid, fileid, file.name!, file.type!));
    }
    console.log(artifacts);

    const container: Artifact ={
      id: Utils.getId(),
      pplid,
      clientinfo: {
        iscontainer: true
      },
      children : artifacts
    }

    let ppl = Convert.toPipeline(this.pipeline);
    ppl.id = pplid;
    ppl.inputs = container;

    ppl.output = {
      asset: {
        storetype: Storetype.Nats
      }
    }

    await this.dfsvc.StartPipeline(ppl);
  }
}
