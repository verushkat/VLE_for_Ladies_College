import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AssignmentDetail } from '../../../../../models/assignment-detail.model';
import { CustomValidator, FormValidator } from '../../../../../../../shared/services';

@Component({
  selector: 'scrom-obj-view',
  styleUrls: ['./scrom-object-tab.component.scss'],
  templateUrl: './scrom-object-tab.component.html'
})
export class ScromObjectTabComponent {
  public scromObjectForm: FormGroup;

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
    this.scromObjectForm = this.fb.group({
      url:  [null, Validators.compose([
        Validators.required,
        CustomValidator.matchRegexpPattern(CustomValidator.url_regexp)
      ])]
    });
  }

  public isValidForm() {
    return this.scromObjectForm.valid;
  }

  public onSubmitClick() {
    const formValue = this.scromObjectForm.value;
    const assignmentData: AssignmentDetail = {
      assignmentId: '-1',
      url: formValue.url
    };
    this.scromObjectForm.reset();
    this.onSubmit.emit(assignmentData);
  }

  public isInvalidControl(controlName: string): boolean {
    return FormValidator.isInvalidControl(this.scromObjectForm.get(controlName));
  }

  public onCancelClick() {
    this.onCancel.emit();
  }

  public onPreviewClick() {
    window.open(this.scromObjectForm.get('url').value);
  }
}
