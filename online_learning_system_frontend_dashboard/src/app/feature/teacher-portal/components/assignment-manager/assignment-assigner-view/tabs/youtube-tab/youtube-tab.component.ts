import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AssignmentDetail } from '../../../../../models/assignment-detail.model';
import { CustomValidator, FormValidator } from '../../../../../../../shared/services';

@Component({
  selector: 'youtube-tab-view',
  styleUrls: ['./youtube-tab.component.scss'],
  templateUrl: './youtube-tab.component.html'
})
export class YoutubeTabComponent {
  public youtubeTabForm: FormGroup;

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
    this.youtubeTabForm = this.fb.group({
      url: [null, Validators.compose([
        Validators.required,
        CustomValidator.matchRegexpPattern(CustomValidator.url_regexp)
      ])]
    });
  }

  public isValidForm() {
    return this.youtubeTabForm.valid;
  }

  public onSubmitClick() {
    const formValue = this.youtubeTabForm.value;
    const assignmentData: AssignmentDetail = {
      assignmentId: '-1',
      url: formValue.url
    };
    this.youtubeTabForm.reset();
    this.onSubmit.emit(assignmentData);
  }

  public isInvalidControl(controlName: string): boolean {
    return FormValidator.isInvalidControl(this.youtubeTabForm.get(controlName));
  }

  public onCancelClick() {
    this.onCancel.emit();
  }

  public onPreviewClick() {
    window.open(this.youtubeTabForm.get('url').value);
  }
}
