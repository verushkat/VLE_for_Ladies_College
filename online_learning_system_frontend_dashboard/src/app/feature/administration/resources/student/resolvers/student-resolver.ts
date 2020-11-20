import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { Student } from '../models/student.model';
import { StudentService } from '../../../../../shared/services/student.service';

@Injectable()
export class StudentResolver implements Resolve<Student> {
  constructor(private studentService: StudentService) {}

  public resolve(route: ActivatedRouteSnapshot): Observable<Student> {
    return this.studentService.getStudent(route.params.id);
  }
}
