import { Injectable } from '@angular/core';
import { Artifact, PipelineStatus, Status, StatusInfo } from '../model/model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CollectresultsService {

  _artifacts: Artifact[] | undefined = [];
  _statusinfo: StatusInfo | undefined;

  $artifacts: BehaviorSubject<Artifact[]> = new BehaviorSubject<Artifact[]>([]);
  $statusinfo: BehaviorSubject<StatusInfo> = new BehaviorSubject<StatusInfo>({ status: Status.Pending });

  constructor() { }


  UpdateResults(pplstatus: PipelineStatus) {
    try {
      this._artifacts = pplstatus.output?.children?.filter(o => !!o);
      if (this._artifacts) {
        this.$artifacts.next(this._artifacts);
      }
    } catch (error) {

    }

    try {
      this._statusinfo = pplstatus.statusinfo!;
      this.$statusinfo.next(this._statusinfo );
      
    } catch (error) {
      
    }


  }

}
