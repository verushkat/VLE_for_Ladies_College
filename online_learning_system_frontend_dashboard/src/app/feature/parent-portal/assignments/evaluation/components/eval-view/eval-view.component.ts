import { Component, OnInit } from '@angular/core';
import { StudentEvaluation } from '../../../../../../shared/models/parent-portal/student-eval.model';
import { EvalService } from '../../services';
import { Observable } from 'rxjs';
import {UserProfileService} from '../../../../../../@core/services';
import {User} from '../../../../../../@core/models/user-model';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-eval-view',
  styleUrls: ['./eval-view.component.scss'],
  templateUrl: './eval-view.component.html'
})
export class EvalViewComponent implements OnInit {
  public dataSource: Observable<StudentEvaluation[]>;
  private parentId: string;

  constructor(private evalService: EvalService,
              private userProfileService: UserProfileService
  ) {
    userProfileService.userProfile.subscribe((user: User) => {
      this.parentId = user.refId;
    })
  }

  public ngOnInit(): void {
    this.dataSource = this.evalService.getEvaluationList(this.parentId).pipe(
      map(resource => {
        return resource.data;
      }));
  }
}
