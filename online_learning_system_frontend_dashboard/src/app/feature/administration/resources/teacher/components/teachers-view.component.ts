import { Component, OnDestroy, OnInit, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { NbDialogService } from '@nebular/theme';
import { Observable, Subscription } from 'rxjs';
import { ResponseStatus } from '../../../../../shared/models/common/response-status.model';
import { SuccessResponse } from '../../../../../shared/models/common/success-response.model';
import { Teacher } from '../models/teacher.model';
import { TeacherService } from '../services/teacher.service';
import { NotificationService } from '../../../../../shared/services/notification.service';
import { DataFetchMode, DataTableComponent } from 'ornamentum';
import Swal from 'sweetalert2';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-teachers-view',
  styleUrls: ['./teachers-view.component.scss'],
  templateUrl: './teachers-view.component.html'
})
export class TeachersViewComponent implements OnInit, OnDestroy {
  public dataSource: Observable<Teacher[]>;
  private teachersServiceSubscription: Subscription;
  private teacher: Teacher;
  private dataTable: DataTableComponent;

  constructor(private teacherService: TeacherService,
              private dialogService: NbDialogService,
              private router: Router,
              private notificationService: NotificationService
  ) {
  }

  public onAddButtonClick() {
    this.router.navigate(['/administration/teachers/list/add']).catch((err) => {
      this.notificationService.showToast('danger', 'Add Teacher', err.message);
    });
  }

  public onTeacherEdit(id: number) {
    this.router.navigate(['/administration/teachers/list/edit', id]).catch((err) => {
      this.notificationService.showToast('danger', 'Edit Teacher', err.message);
    });
  }

  public onInit(dataTable: DataTableComponent): void {
    this.dataTable = dataTable;
  }

  public onTeacherDelete(data: Teacher) {
    this.teacher = data;
    Swal.fire({
      title: 'Are you sure?',
      text: 'You won\'t be able to revert this!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.value) {
        this.teacherService.deleteTeacher(this.teacher.id).subscribe((response: SuccessResponse) => {
          if (response.status === ResponseStatus.FAIL) {
            Swal.fire(
              'Delete Failed!',
              'Delete Failed.',
              'error'
            );
            return;
          }
          this.dataTable.fetchData(DataFetchMode.HARD_RELOAD);
          Swal.fire(
            'Deleted!',
            'Teacher has been deleted.',
            'success'
          );
        });
      }
    });
  }

  public ngOnInit(): void {
    this.dataSource = this.teacherService.getTeachersList().pipe(
      map(resource => {
        return resource.data;
      }));
  }

  public ngOnDestroy(): void {
    if (this.teachersServiceSubscription) {
      this.teachersServiceSubscription.unsubscribe();
    }
  }
}
