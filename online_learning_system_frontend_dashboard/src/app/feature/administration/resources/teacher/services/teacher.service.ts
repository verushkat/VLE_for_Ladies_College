import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SuccessResponse } from '../../../../../shared/models/common/success-response.model';
import { TableData } from '../../../../../shared/models/common/table-data.model';
import { Teacher } from '../models/teacher.model';
import { environment } from '../../../../../../environments/environment';

@Injectable()
export class TeacherService {
  private static get_teachers = '/api/v1/teachers';

  constructor(private httpClient: HttpClient) {
  }

  public addTeacher(student: Teacher): Observable<SuccessResponse> {
    return this.httpClient.post<SuccessResponse>(`${environment.baseUrl}${TeacherService.get_teachers}`, student);
  }

  public getTeachersList(): Observable<TableData<Teacher>> {
    return this.httpClient.get<TableData<Teacher>>(`${environment.baseUrl}${TeacherService.get_teachers}`);
  }

  public getTeacher(id: string): Observable<Teacher> {
    return this.httpClient.get<Teacher>(`${environment.baseUrl}${TeacherService.get_teachers}/${id}`);
  }

  public deleteTeacher(id: string): Observable<SuccessResponse> {
    return this.httpClient.delete<SuccessResponse>(`${environment.baseUrl}${TeacherService.get_teachers}/${id}`);
  }

  public updateTeacher(teacher: Teacher) {
    return this.httpClient.put<SuccessResponse>(`${environment.baseUrl}${TeacherService.get_teachers}`, teacher);
  }
}
