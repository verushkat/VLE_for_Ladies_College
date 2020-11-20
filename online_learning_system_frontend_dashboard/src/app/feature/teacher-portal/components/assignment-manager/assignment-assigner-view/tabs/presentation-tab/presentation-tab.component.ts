import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AssignmentDetail } from '../../../../../models/assignment-detail.model';
import { CustomValidator, FormValidator } from '../../../../../../../shared/services';

@Component({
  selector: 'presentation-tab-view',
  styleUrls: ['./presentation-tab.component.scss'],
  templateUrl: './presentation-tab.component.html'
})
export class PresentationTabComponent {
  public presentationTabForm: FormGroup;

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

  public ngOnInit(): void {
    this.presentationTabForm = this.fb.group({
      url:  [null, Validators.compose([
        Validators.required,
        CustomValidator.matchRegexpPattern(CustomValidator.url_regexp)
      ])]
    });
  }

  public isValidForm() {
    return this.presentationTabForm.valid;
  }

  public onSubmitClick() {
    const formValue = this.presentationTabForm.value;
    const assignmentData: AssignmentDetail = {
      assignmentId: '-1',
      url: formValue.url
    };
    this.presentationTabForm.reset();
    this.onSubmit.emit(assignmentData);
  }

  public isInvalidControl(controlName: string): boolean {
    return FormValidator.isInvalidControl(this.presentationTabForm.get(controlName));
  }

  public onCancelClick() {
    this.onCancel.emit();
  }

  public onPreviewClick() {
    window.open(this.presentationTabForm.get('url').value);
  }
}
