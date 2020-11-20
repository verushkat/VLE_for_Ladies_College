import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AssignmentDetail } from '../../../../../models/assignment-detail.model';

@Component({
  selector: 'pdf-tab-view',
  styleUrls: ['./pdf-tab.component.scss'],
  templateUrl: './pdf-tab.component.html'
})
export class PdfTabComponent {
  public isFileUploaded = false;
  public url: string;

  @Input()
  public isLoading: boolean = false;

  @Output()
  public onSubmit: EventEmitter<AssignmentDetail> = new EventEmitter<AssignmentDetail>();

  @Output()
  public onCancel: EventEmitter<void> = new EventEmitter<void>();

  constructor(
    private fb: FormBuilder
  ) {
  }

  public isValidForm() {
    return !!this.url;
  }

  public onSubmitClick() {
    const assignmentData: AssignmentDetail = {
      assignmentId: '-1',
      url: this.url
    };
    this.onSubmit.emit(assignmentData);
  }

  public onCancelClick() {
    this.onCancel.emit();
  }

  public handleUploadSuccess(url: string) {
    this.isFileUploaded = true;
    this.url = url;
  }

  public viewReport() {
    window.open(this.url, '_blank');
  }
}
