import { AbstractControl, ValidatorFn } from '@angular/forms';

export class CustomValidator {

  // regex
  public static phone_number_regexp = /^\+?\d{2}[- ]?\d{3}[- ]?\d{5}$/;
  public static number_between_zero_to_hundred_with_two_decimals_regexp = /^[0-9]{1,2}(\.[0-9]{1,2})?$|^100$/;
  public static number_between_one_to_thirteen = /^(1[0-3]|[1-9])$/;
  public static credit_card_number_regexp = /^(?:(5[1-5]\d{14})|(4\d{12}(\d{3})?)|(3[47]\d{13})|(6011\d{14})|((30[0-5]|36\d|38\d)\d{11}))$/;
  public static credit_card_cvv_number_regexp = /^[0-9]{3}$/;
  public static number_with_two_decimals_regexp = /^\d+(\.\d{1,2})?$/;
  public static credit_card_exp_date_regexp = /\b(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})\b/;
  public static url_regexp = /^(http[s]?:\/\/){0,1}(www\.){0,1}[a-zA-Z0-9\.\-]+\.[a-zA-Z]{2,5}[\.]{0,1}/;

  public static matchRegexpPattern(regex: RegExp): ValidatorFn {
    return (control: AbstractControl) => {
      const regexp = regex.test(control.value);
      return !regexp ? { value: control.value } : null;
    };
  }

  public static phoneNumberRegexPattern(regex: RegExp): ValidatorFn {
    return (control: AbstractControl) => {
      const regexp = regex.test(control.value);
      return !regexp ? { digitLimit: control.value } : null;
    };
  }
}
