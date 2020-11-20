import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataFetchMode, DataTableComponent } from 'ornamentum';
import { Student } from '../../../../../../administration/resources/student/models/student.model';
import { TableData } from '../../../../../../../shared/models/common/table-data.model';
import { Subscription } from 'rxjs';
import { FormValidator, StudentService } from '../../../../../../../shared/services';
import { Question } from '../../../../../../../shared/models/parent-portal/question.model';
import { AssignmentUtilityService } from '../../../../../services';
import { AssignmentDetail } from '../../../../../models/assignment-detail.model';

@Component({
  selector: 'mcq-tab-view',
  styleUrls: ['./mcq-tab.component.scss'],
  templateUrl: './mcq-tab.component.html'
})
export class McqTabComponent implements OnInit {
  public mcqTabForm: FormGroup;
  public studentData: Student[];
  public questions: Question[] = [];
  public isAssignmentUploaded = false;
  public selectedStudentId: string;
  public dataTableComponent: DataTableComponent;
  public studentServiceSubscription: Subscription;

  @Input()
  public isLoading: boolean;

  @Output()
  public onSubmit: EventEmitter<AssignmentDetail> = new EventEmitter<AssignmentDetail>();

  @Output()
  public onCancel: EventEmitter<void> = new EventEmitter<void>();

  constructor(
    private fb: FormBuilder,
    private studentService: StudentService,
    private assignmentUtilityService: AssignmentUtilityService
  ) {
  }

  public ngOnInit(): void {
    this.studentServiceSubscription = this.studentService.getStudentsList()
      .subscribe((students: TableData<Student>) => {
        this.studentData = students.data;
      });

    this.mcqTabForm = this.fb.group({
      assignmentName: [null, Validators.required],
    });
  }

  public onInit(dataTableComponent: DataTableComponent) {
    this.dataTableComponent = dataTableComponent;
  }

  public onAssignmentUpload(data: any) {
    this.questions = this.assignmentUtilityService.mapAssignment(data);
    if (this.questions.length) {
      this.isAssignmentUploaded = true;
    }
  }

  public onRowSelectChange(selectedId: string): void {
    this.selectedStudentId = selectedId;
  }

  public onFileClear() {
    this.questions = [];
  }

  public isValidForm() {
    return this.selectedStudentId && this.mcqTabForm.valid && this.isAssignmentUploaded;
  }

  public onSubmitClick() {
    const formValue = this.mcqTabForm.value;
    const assignmentData: AssignmentDetail = {
      assignmentId: '-1',
      assignmentName: formValue.assignmentName,
      questions: this.questions,
      studentId: this.selectedStudentId
    };
    this.mcqTabForm.reset();
    this.onFileClear();
    this.selectedStudentId = null;
    this.dataTableComponent.fetchData(DataFetchMode.HARD_RELOAD);
    this.onSubmit.emit(assignmentData);
  }

  public isInvalidControl(controlName: string): boolean {
    return FormValidator.isInvalidControl(this.mcqTabForm.get(controlName));
  }

  public onCancelClick() {
    this.onCancel.emit();
  }
}
