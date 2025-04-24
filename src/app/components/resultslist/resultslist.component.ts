import { Component, OnInit } from '@angular/core';
import { CollectresultsService } from '../../services/collectresults.service';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzListModule } from 'ng-zorro-antd/list';
import { Artifact, StatusInfo } from '../../model/model';

@Component({
  selector: 'app-resultslist',
  imports: [NzButtonModule, NzListModule],
  templateUrl: './resultslist.component.html',
  styleUrl: './resultslist.component.scss'
})
export class ResultslistComponent implements OnInit {

  artifacts: Artifact[] = [];
  status: StatusInfo | undefined;

  constructor(private cresults: CollectresultsService) { }
  ngOnInit(): void {
    this.cresults.$artifacts.subscribe(o => this.artifacts = o);
    this.cresults.$statusinfo.subscribe(st => this.status = st);

  }


}
