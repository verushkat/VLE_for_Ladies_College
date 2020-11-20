import { AbstractControl } from '@angular/forms';

export class FormValidator {
  public static isInvalidControl(abstractControl: AbstractControl): boolean {
    return (abstractControl.dirty || abstractControl.touched) && abstractControl.invalid;
  }
}
