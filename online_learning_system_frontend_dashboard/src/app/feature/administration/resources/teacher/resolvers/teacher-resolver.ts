import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { Teacher } from '../models/teacher.model';
import { TeacherService } from '../services/teacher.service';

@Injectable()
export class TeacherResolver implements Resolve<Teacher> {
  constructor(private teacherService: TeacherService) {}

  public resolve(route: ActivatedRouteSnapshot): Observable<Teacher> {
    return this.teacherService.getTeacher(route.params.id);
  }
}
