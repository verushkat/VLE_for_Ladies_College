import { Component, Input } from '@angular/core';
import { DataTableRow } from 'ornamentum';
import { Assignment } from '../../models/parent-portal/assignment.model';

@Component({
  selector: 'app-assignment-detail-view',
  styleUrls: ['./assignment-detail-view.component.scss'],
  templateUrl: './assignment-detail-view.component.html'
})
export class AssignmentDetailViewComponent {
  @Input()
  public dataRow: DataTableRow<Assignment>;
}
