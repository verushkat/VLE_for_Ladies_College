import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';
import { TableData } from '../../../../../shared/models/common/table-data.model';
import { StudentEvaluation } from '../../../../../shared/models/parent-portal/student-eval.model';
import { environment } from '../../../../../../environments/environment';

@Injectable()
export class EvalService {
  private static get_evaluations = '/api/v1/assignments/evaluations';

  constructor(private httpClient: HttpClient) {
  }

  public getEvaluationList(parentId: string): Observable<TableData<StudentEvaluation>> {
    const params = new HttpParams().set('studentId', parentId);
    return this.httpClient.get<TableData<StudentEvaluation>>(`${environment.baseUrl}${EvalService.get_evaluations}`, {
      params: params
    });
  }
}
