import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FormTask } from '../../../../../../shared/models/common/form-task';
import { ResponseStatus } from '../../../../../../shared/models/common/response-status.model';
import { SuccessResponse } from '../../../../../../shared/models/common/success-response.model';
import { Teacher } from '../../models/teacher.model';
import { TeacherService } from '../../services/teacher.service';
import { CustomValidator, FormValidator } from '../../../../../../shared/services';
import { NotificationService } from '../../../../../../shared/services/notification.service';

@Component({
  selector: 'app-teacher-upsert',
  styleUrls: ['./teacher-upsert.component.scss'],
  templateUrl: './teacher-upsert.component.html'
})
export class TeacherUpsertComponent implements OnInit {
  public teachersForm: FormGroup;
  public isEdit = false;
  public teacher: Teacher;
  public formTask: FormTask;

  constructor(private fb: FormBuilder,
              private route: ActivatedRoute,
              private teacherService: TeacherService,
              private router: Router,
              private notificationService: NotificationService
  ) {
  }

  public ngOnInit(): void {
    this.route.data.subscribe((data: { teacher: Teacher; formTask: FormTask }) => {
      if (data && data.teacher) {
        this.teacher = data.teacher;
      }

      this.formTask = data.formTask;
      switch (this.formTask) {
        case FormTask.EDIT:
          if (!this.teacher) {
            break;
          }

          this.isEdit = true;
          this.initFormGroup(this.teacher);

          break;
        case FormTask.ADD:
          this.initFormGroup();
          break;
      }
    });
  }

  private initFormGroup(teacher?: Teacher): void {
    if (teacher) {
      this.teachersForm = this.fb.group({
        name: [teacher.name, Validators.required],
        email: [teacher.email, Validators.required],
        phone: [teacher.phone,
          Validators.compose([
            Validators.required,
            CustomValidator.phoneNumberRegexPattern(CustomValidator.phone_number_regexp),
          ])],
        subject: [teacher.subject, Validators.required]
      });
    } else {
      this.teachersForm = this.fb.group({
        name: [null, Validators.required],
        email: [null, Validators.required],
        phone: [null,
          Validators.compose([
            Validators.required,
            CustomValidator.phoneNumberRegexPattern(CustomValidator.phone_number_regexp),
          ])],
        subject: [null, Validators.required]
      });
    }
  }

  public onSubmit() {
    const formValue = this.teachersForm.value;

    const teacher: Teacher = {
      id: '-1',
      name: formValue.name,
      email: formValue.email,
      phone: formValue.phone,
      subject: formValue.subject
    };

    if (this.isEdit) {
      teacher.id = this.teacher.id;
      this.teacherService.updateTeacher(teacher).subscribe((response: SuccessResponse) => {
        if (response.status === ResponseStatus.FAIL) {
          this.notificationService.showToast('danger', 'Teacher', response.message);
          return;
        }
        this.teachersForm.markAsPristine();
        this.notificationService.showToast('success', 'Teacher', response.message);
        this.redirectToTeachersPage();
      });
    } else {
      this.teacherService.addTeacher(teacher).subscribe((response: SuccessResponse) => {
        if (response.status === ResponseStatus.FAIL) {
          this.notificationService.showToast('danger', 'Teacher', response.message);
          return;
        }
        this.teachersForm.markAsPristine();
        this.notificationService.showToast('success', 'Teacher', response.message);
        this.redirectToTeachersPage();
      });
    }
  }

  public isInvalidControl(controlName: string): boolean {
    return FormValidator.isInvalidControl(this.teachersForm.get(controlName));
  }

  public isInvalidDigitCount(controlName: string): boolean {
    if (FormValidator.isInvalidControl(this.teachersForm.get(controlName))) {
      return this.teachersForm.get(controlName).hasError('digitLimit');
    }
    return false;
  }

  public redirectToTeachersPage() {
    this.router.navigate(['/administration/teachers/list']);
  }
}
