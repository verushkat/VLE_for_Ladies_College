import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SuccessResponse } from '../models/common/success-response.model';
import { TableData } from '../models/common/table-data.model';
import { Student } from '../../feature/administration/resources/student/models/student.model';
import { environment } from '../../../environments/environment';

@Injectable()
export class StudentService {
  private static get_students = '/api/v1/students';

  constructor(private httpClient: HttpClient) {
  }

  public addStudent(student: Student): Observable<SuccessResponse> {
    return this.httpClient.post<SuccessResponse>(`${environment.baseUrl}${StudentService.get_students}`, student);
  }

  public updateStudent(student: Student): Observable<SuccessResponse> {
    return this.httpClient.put<SuccessResponse>(`${environment.baseUrl}${StudentService.get_students}`, student);
  }

  public getStudentsList(): Observable<TableData<Student>> {
    return this.httpClient.get<TableData<Student>>(`${environment.baseUrl}${StudentService.get_students}`);
  }

  public getStudent(id: string): Observable<Student> {
    return this.httpClient.get<Student>(`${environment.baseUrl}${StudentService.get_students}/${id}`);
  }

  public deleteStudent(id: string): Observable<SuccessResponse> {
    return this.httpClient.delete<SuccessResponse>(`${environment.baseUrl}${StudentService.get_students}/${id}`);
  }
}
