import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Student } from '../../../../../../administration/resources/student/models/student.model';
import { DataFetchMode, DataTableComponent } from 'ornamentum';
import { Subscription } from 'rxjs';
import { AssignmentDetail } from '../../../../../models/assignment-detail.model';
import { FormValidator, StudentService } from '../../../../../../../shared/services';
import { TableData } from '../../../../../../../shared/models/common/table-data.model';

@Component({
  selector: 'drawing-tab-view',
  styleUrls: ['./drawing-tab.component.scss'],
  templateUrl: './drawing-tab.component.html'
})
export class DrawingTabComponent implements OnInit {
  public drawingTabForm: FormGroup;
  public studentData: Student[];
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
    private studentService: StudentService
  ) {
  }

  public ngOnInit(): void {
    this.studentServiceSubscription = this.studentService.getStudentsList()
      .subscribe((students: TableData<Student>) => {
        this.studentData = students.data;
      });

    this.drawingTabForm = this.fb.group({
      assignmentName: [null, Validators.required],
    });
  }

  public onInit(dataTableComponent: DataTableComponent) {
    this.dataTableComponent = dataTableComponent;
  }

  public onRowSelectChange(selectedId: string): void {
    this.selectedStudentId = selectedId;
  }

  public isValidForm() {
    return this.selectedStudentId && this.drawingTabForm.valid;
  }

  public onSubmitClick() {
    const formValue = this.drawingTabForm.value;
    const assignmentData: AssignmentDetail = {
      assignmentId: '-1',
      assignmentName: formValue.assignmentName,
      studentId: this.selectedStudentId
    };
    this.drawingTabForm.reset();
    this.selectedStudentId = null;
    this.dataTableComponent.fetchData(DataFetchMode.HARD_RELOAD);
    this.onSubmit.emit(assignmentData);
  }

  public isInvalidControl(controlName: string): boolean {
    return FormValidator.isInvalidControl(this.drawingTabForm.get(controlName));
  }

  public onCancelClick() {
    this.onCancel.emit();
  }
}
