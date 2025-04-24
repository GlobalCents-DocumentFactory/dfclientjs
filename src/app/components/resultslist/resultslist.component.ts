import { Component, OnInit } from '@angular/core';
import { CollectresultsService } from '../../services/collectresults.service';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzListModule } from 'ng-zorro-antd/list';
import { Artifact, StatusInfo } from '../../model/model';
import { DfserviceService } from '../../services/dfservice.service';

@Component({
  selector: 'app-resultslist',
  imports: [NzButtonModule, NzListModule],
  templateUrl: './resultslist.component.html',
  styleUrl: './resultslist.component.scss'
})
export class ResultslistComponent implements OnInit {

  artifacts: Artifact[] = [];
  status: StatusInfo | undefined;

  constructor(private cresults: CollectresultsService,
    private dfservice: DfserviceService) { }
  ngOnInit(): void {
    this.cresults.$artifacts.subscribe(o => this.artifacts = o);
    this.cresults.$statusinfo.subscribe(st => this.status = st);

  }

  Download(item: Artifact) {
    this.downloadFile(
      item.asset?.artifactnats?.bucket, 
      item.asset?.artifactnats?.natsid,
      item?.asset?.name
    );
  }

  downloadFile(bucket?: string | null, fileID?: string | null, fileName?:  string | null) {
    if (!bucket || !fileID) return;
    fileName = fileName || "download"
    this.dfservice.DownloadFile(bucket, fileID).then(blob => {
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = fileName; 
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);
    }).catch(err => {
      // handle error
      console.error(err);
    });
  }


}
