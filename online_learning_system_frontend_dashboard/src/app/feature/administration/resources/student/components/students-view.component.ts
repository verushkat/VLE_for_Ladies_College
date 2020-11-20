import { Component, OnDestroy, OnInit, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { NbDialogService } from '@nebular/theme';
import { Observable, Subscription } from 'rxjs';
import { ResponseStatus } from '../../../../../shared/models/common/response-status.model';
import { SuccessResponse } from '../../../../../shared/models/common/success-response.model';
import { Student } from '../models/student.model';
import { StudentService } from '../../../../../shared/services';
import { NotificationService } from '../../../../../shared/services/notification.service';
import { DataFetchMode, DataTableComponent } from 'ornamentum';
import { map } from 'rxjs/operators';
import Swal from "sweetalert2";

@Component({
  selector: 'app-students-view',
  styleUrls: ['./students-view.component.scss'],
  templateUrl: './students-view.component.html'
})
export class StudentsViewComponent implements OnInit, OnDestroy {
  public dataSource: Observable<Student[]>;
  private studentServiceSubscription: Subscription;
  public student: Student;
  public dataTable: DataTableComponent;

  constructor(private studentService: StudentService,
              private router: Router,
              private dialogService: NbDialogService,
              private notificationService: NotificationService
  ) {
  }

  public ngOnInit(): void {
    this.dataSource = this.studentService.getStudentsList().pipe(
      map(resource => {
        return resource.data;
      }));
  }

  public ngOnDestroy(): void {
    if (this.studentServiceSubscription) {
      this.studentServiceSubscription.unsubscribe();
    }
  }

  public onAddButtonClick() {
    this.router.navigate(['/administration/students/list/add']).catch((err) => {
      this.notificationService.showToast('danger', 'Add Student', err.message);
    });
  }

  public onStudentEdit(id: number) {
    this.router.navigate(['/administration/students/list/edit', id]).catch((err) => {
      this.notificationService.showToast('danger', 'Edit Student', err.message);
    });
  }

  public onStudentDelete(dialog: TemplateRef<any>, data: Student) {
    this.student = data;
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
        this.studentService.deleteStudent(this.student.id).subscribe((response: SuccessResponse) => {
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
            'Student has been deleted.',
            'success'
          );
        });
      }
    });
  }

  public onInit(dataTable: DataTableComponent) {
    this.dataTable = dataTable;
  }
}
