import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SuccessResponse } from '../../../shared/models/common/success-response.model';
import { environment } from '../../../../environments/environment';

@Injectable()
export class AssignmentService {
  private static assignments = '/api/v1/assignments/marks';

  constructor(private httpClient: HttpClient) {
  }

  public submitMarks(assignmentData: any): Observable<SuccessResponse> {
    return this.httpClient
      .post<SuccessResponse>(`${environment.baseUrl}${AssignmentService.assignments}`, assignmentData);
  }
}
