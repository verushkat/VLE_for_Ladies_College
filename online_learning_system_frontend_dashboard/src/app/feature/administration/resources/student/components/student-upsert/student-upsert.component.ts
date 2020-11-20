import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FormTask } from '../../../../../../shared/models/common/form-task';
import { ResponseStatus } from '../../../../../../shared/models/common/response-status.model';
import { SuccessResponse } from '../../../../../../shared/models/common/success-response.model';
import { Student } from '../../models/student.model';
import { StudentService } from '../../../../../../shared/services';
import { CustomValidator, FormValidator } from '../../../../../../shared/services';
import { NotificationService } from '../../../../../../shared/services/notification.service';
import { Parent } from '../../models/parent.model';

@Component({
  selector: 'app-student-upsert',
  styleUrls: ['./student-upsert.component.scss'],
  templateUrl: './student-upsert.component.html'
})
export class StudentUpsertComponent implements OnInit {
  public studentForm: FormGroup;
  public isEdit = false;
  public student: Student;
  public formTask: FormTask;

  constructor(private fb: FormBuilder,
              private route: ActivatedRoute,
              private studentService: StudentService,
              private router: Router,
              private notificationService: NotificationService
  ) {
  }

  public ngOnInit(): void {
    this.route.data.subscribe((data: { student: Student; formTask: FormTask }) => {
      if (data && data.student) {
        this.student = data.student;
      }

      this.formTask = data.formTask;
      switch (this.formTask) {
        case FormTask.EDIT:
          if (!this.student) {
            break;
          }

          this.isEdit = true;
          this.initFormGroup(this.student);

          break;
        case FormTask.ADD:
          this.initFormGroup();
          break;
      }
    });
  }

  private initFormGroup(student?: Student): void {
    if (student) {
      this.studentForm = this.fb.group({
        studentName: [student.name, Validators.required],
        parentName: [student.parent.name, Validators.required],
        gender: [student.gender, Validators.required],
        stdEmail: [student.email, Validators.required],
        email: [student.parent.email, Validators.required],
        phone: [student.parent.phone,
          Validators.compose([
            Validators.required,
            CustomValidator.phoneNumberRegexPattern(CustomValidator.phone_number_regexp),
          ])],
        grade: [student.grade, Validators.compose([
          Validators.required,
          CustomValidator.matchRegexpPattern(CustomValidator.number_between_one_to_thirteen)
        ])]
      });
    } else {
      this.studentForm = this.fb.group({
        studentName: [null, Validators.required],
        parentName: [null, Validators.required],
        gender: ['Male', Validators.required],
        stdEmail: [null, Validators.required],
        email: [null, Validators.required],
        phone: [null,
          Validators.compose([
            Validators.required,
            CustomValidator.phoneNumberRegexPattern(CustomValidator.phone_number_regexp),
          ])],
        grade: [null, Validators.compose([
          Validators.required,
          CustomValidator.matchRegexpPattern(CustomValidator.number_between_one_to_thirteen)
        ])]
      });
    }
  }

  public onSubmit(): void {
    const formValue = this.studentForm.value;
    const student: Student = {
      id: '-1',
      name: formValue.studentName,
      gender: formValue.gender,
      grade: formValue.grade,
      email: formValue.stdEmail,
      parent: {
        name: formValue.parentName,
        email: formValue.email,
        phone: formValue.phone
      } as Parent
    };

    if (this.isEdit) {
      student.id = this.student.id;
      this.studentService.updateStudent(student).subscribe((response: SuccessResponse) => {
        if (response.status === ResponseStatus.FAIL) {
          this.notificationService.showToast('danger', 'Students', response.message);
          return;
        }
        this.studentForm.markAsPristine();
        this.notificationService.showToast('success', 'Students', response.message);
        this.redirectToStudentsPage();
      });
    } else {
      this.studentService.addStudent(student).subscribe((response: SuccessResponse) => {
        if (response.status === ResponseStatus.FAIL) {
          this.notificationService.showToast('danger', 'Students', response.message);
          return;
        }
        this.studentForm.markAsPristine();
        this.notificationService.showToast('success', 'Students', response.message);
        this.redirectToStudentsPage();
      });
    }
  }

  public redirectToStudentsPage(): void {
    this.router.navigate(['/administration/students/list']);
  }

  public isInvalidDigitCount(controlName: string): boolean {
    if (FormValidator.isInvalidControl(this.studentForm.get(controlName))) {
      return this.studentForm.get(controlName).hasError('digitLimit');
    }
    return false;
  }

  public isInvalidControl(controlName: string): boolean {
    return FormValidator.isInvalidControl(this.studentForm.get(controlName));
  }
}
