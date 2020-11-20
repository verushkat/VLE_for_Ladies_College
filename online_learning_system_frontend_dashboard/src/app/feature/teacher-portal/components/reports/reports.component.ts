import { Component } from '@angular/core';
import { Report } from '../../models/report.model';
import { LocalStorageService } from '../../../../@core/services';
import { ReportMark } from '../../models/report-mark.model';
import { Student } from '../../../administration/resources/student/models/student.model';
import { ReportsService } from '../../services';
import { TableData } from '../../../../shared/models/common/table-data.model';
import { Subscription } from 'rxjs';
import { CustomValidator, FormValidator, StudentService } from '../../../../shared/services';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataFetchMode, DataTableComponent } from 'ornamentum';
import { ResponseStatus } from '../../../../shared/models/common/response-status.model';
import { NotificationService } from '../../../../shared/services/notification.service';

@Component({
  selector: 'reports-view',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss']
})
export class ReportsComponent {
  public source: ReportMark[] = [];
  public studentData: Student[];
  public selectedStudentId: string;
  private studentServiceSubscription: Subscription;
  public marksForm: FormGroup;
  private marksDataTable: DataTableComponent;
  private studentsDataTable: DataTableComponent;
  public average: number;
  public selectedStudent: Student;
  public subjects = [
    {
      name: 'Religion',
      value: 'Religion'
    },
    {
      name: 'Sinhala Language',
      value: 'Sinhala Language'
    },
    {
      name: 'English Language',
      value: 'English Language'
    },
    {
      name: 'Mathematics',
      value: 'Mathematics'
    },
    {
      name: 'Tamil',
      value: 'Tamil'
    },
    {
      name: 'ICT',
      value: 'ICT'
    },
    {
      name: 'Dancing',
      value: 'Dancing'
    },
    {
      name: 'Science',
      value: 'Science'
    },
    {
      name: 'Social studies',
      value: 'Social studies'
    }
  ];
  public selectedSubject = this.subjects[1].value;

  constructor(
    private localStorageService: LocalStorageService,
    private reportsService: ReportsService,
    private studentService: StudentService,
    private fb: FormBuilder,
    private notificationService: NotificationService
  ) {
  }

  public ngOnInit(): void {
    this.marksForm = this.fb.group({
      mark: [null, Validators.compose([
        Validators.required,
        CustomValidator.matchRegexpPattern(CustomValidator.number_between_zero_to_hundred_with_two_decimals_regexp)
      ])]
    });

    this.studentServiceSubscription = this.studentService.getStudentsList()
      .subscribe((students: TableData<Student>) => {
        this.studentData = students.data;
      });
  }

  public onMarksDelete(data: ReportMark) {
    this.source = this.source.filter((row: any) => {
      return row.subject !== data.subject && row.marks !== data.mark;
    });
    this.calculateAvg();
  }

  public onGenerate() {
    const student = this.studentData.find(student => student.id === this.selectedStudentId);
    const report: Report = {
      parentEmail: student.parent.email,
      studentName: student.name,
      marks: this.source
    };

    this.reportsService.generateReport(report).subscribe((response) => {
      if (response.status === ResponseStatus.FAIL) {
        this.notificationService.showToast('danger', 'Generate report', 'Report generation failed.');
        return;
      }
      this.marksForm.markAsPristine();
      this.notificationService.showToast('success', 'Generate report', 'Report generated successfully and report sent to parent.');
      this.onGoBack();
    });
  };

  public onRowSelectChange(selectedId: string): void {
    this.selectedStudentId = selectedId;
    this.selectedStudent = this.studentData.find((student: Student) => student.id === selectedId);
  }

  public onAdd() {
    const formValue = this.marksForm.value;
    if (!this.source.find(mark => mark.subject === this.selectedSubject)) {
      this.source.push({
        subject: this.selectedSubject,
        mark: formValue.mark,
      });
      this.marksDataTable.fetchData(DataFetchMode.HARD_RELOAD);
    } else {
      this.notificationService.showToast('danger', 'Marks', `${this.selectedSubject} is already exists.`);
    }
    this.calculateAvg();
    this.marksForm.reset();
  }

  public onMarksTableInit(dataTable: DataTableComponent) {
    this.marksDataTable = dataTable;
  }

  public onGoBack() {
    this.selectedStudentId = null;
    this.average = 0;
    this.source = [];
    this.studentsDataTable.fetchData(DataFetchMode.HARD_RELOAD);
  }

  public isInvalidControl(controlName: string): boolean {
    return FormValidator.isInvalidControl(this.marksForm.get(controlName));
  }

  public onStudentsTableInit(dataTable: DataTableComponent) {
    this.studentsDataTable = dataTable;
  }

  private calculateAvg(): void {
    let total: number = 0;
    this.source.map((mark: ReportMark) => {
      total += +mark.mark;
    });
    this.average = +(total / this.source.length).toFixed(2);
  }
}
