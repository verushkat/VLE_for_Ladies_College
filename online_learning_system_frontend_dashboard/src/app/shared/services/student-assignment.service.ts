import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TableData } from '../models/common/table-data.model';
import { StudentAssignmentView } from '../../feature/student-portal/models/student-assignment-view.model';
import { environment } from '../../../environments/environment';
import { User } from '../../@core/models/user-model';

@Injectable()
export class StudentAssignmentService {
  private static get_assignments = '/api/v1/assignments/notes';

  constructor(private httpClient: HttpClient) {
  }

  public getAssignmentsList(user: User): Observable<TableData<StudentAssignmentView>> {
    if (!!user) {
      const params = new HttpParams().set('section', user.section);
      return this.httpClient.get<TableData<StudentAssignmentView>>(`${environment.baseUrl}${StudentAssignmentService.get_assignments}`, {
        params: params
      });
    }
    return this.httpClient.get<TableData<StudentAssignmentView>>(`${environment.baseUrl}${StudentAssignmentService.get_assignments}`);
  }
}
