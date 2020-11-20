import { Component, OnInit } from '@angular/core';
import { StudentAssignmentView } from '../../models/student-assignment-view.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { StudentAssignmentService } from '../../../../shared/services/student-assignment.service';
import { LocalStorageService } from '../../../../@core/services';
import { User } from '../../../../@core/models/user-model';

@Component({
  selector: 'app-student-assigment-view',
  styleUrls: ['./student-assignment-view.component.scss'],
  templateUrl: './student-assignment-view.component.html'
})
export class StudentAssignmentViewComponent implements OnInit {
  public dataSource: Observable<StudentAssignmentView[]>;

  constructor(
    private assignmentService: StudentAssignmentService,
    private localStorageService: LocalStorageService
  ) {
  }

  public ngOnInit(): void {
    const user: User = JSON.parse(this.localStorageService.getData('user') as string);
    this.dataSource = this.assignmentService.getAssignmentsList(user).pipe(
      map(resource => {
        return resource.data;
      }));
  }
}
