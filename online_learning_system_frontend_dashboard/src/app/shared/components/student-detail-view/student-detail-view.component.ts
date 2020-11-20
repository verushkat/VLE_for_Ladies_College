import { Component, Input } from '@angular/core';
import { DataTableRow } from 'ornamentum';
import { Student } from '../../../feature/administration/resources/student/models/student.model';

@Component({
  selector: 'app-students-detail',
  styleUrls: ['./student-detail-view.component.scss'],
  templateUrl: './student-detail-view.component.html'
})
export class StudentDetailViewComponent {
  @Input()
  public dataRow: DataTableRow<Student>;
}
