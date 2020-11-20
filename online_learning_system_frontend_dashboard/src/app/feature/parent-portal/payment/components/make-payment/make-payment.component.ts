import { Component } from '@angular/core';
import { CustomValidator, FormValidator, PaymentService } from '../../../../../shared/services';
import { Payment } from '../../../../administration/resources/payment/models/payment.model';
import { LocalStorageService } from '../../../../../@core/services';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NotificationService } from '../../../../../shared/services/notification.service';
import { User } from '../../../../../@core/models/user-model';
import { ParentPayment } from "../../../../../shared/models/parent-portal/parent-payment.model";
import { SuccessResponse } from "../../../../../shared/models/common/success-response.model";
import { ResponseStatus } from "../../../../../shared/models/common/response-status.model";

@Component({
  selector: 'make-payment-view',
  templateUrl: './make-payment.component.html',
  styleUrls: ['./make-payment.component.scss']
})
export class MakePaymentComponent {
  public isPayClicked = false;
  public isLoading: boolean;
  public paymentAmount: string;
  public user: User;
  public isPaid = false;
  public paymentsList = [];
  public paymentFormGroup: FormGroup;

  constructor(
    private paymentService: PaymentService,
    private localStorageService: LocalStorageService,
    private fb: FormBuilder,
    private notificationService: NotificationService
  ) {
    this.user = JSON.parse(this.localStorageService.getData('user') as string) as User;
    const userSection: string = this.user.section;
    this.paymentService.getPaymentDetails().subscribe((payment: Payment) => {
      this.paymentAmount = payment[userSection];
      this.updatePaymentStatus();
    });
    this.buildFormGroup();
    this.paymentsList = this.getPaymentsList();
  }

  public updatePaymentStatus(): void {
    if (this.paymentsList.length > 0 && this.paymentsList.includes(this.user.refId)) {
      this.paymentAmount = '0';
      this.isPaid = true;
    }
  }

  public buildFormGroup(): void {
    this.paymentFormGroup = this.fb.group({
      cardNumber: [null, Validators.compose([
        Validators.required,
        CustomValidator.matchRegexpPattern(CustomValidator.credit_card_number_regexp)
      ])],
      expDate: [null, Validators.compose([
        Validators.required,
        CustomValidator.matchRegexpPattern(CustomValidator.credit_card_exp_date_regexp)
      ])],
      cvCode: [null, Validators.compose([
        Validators.required,
        CustomValidator.matchRegexpPattern(CustomValidator.credit_card_cvv_number_regexp)
      ])],
      amount: [null]
    });
  }

  public onPayNowClick() {
    this.isLoading = true;
    this.isPayClicked = true;
  }

  public onCancelClick() {
    this.isPayClicked = false;
    this.paymentFormGroup.reset();
  }

  public isInvalidControl(controlName: string): boolean {
    return FormValidator.isInvalidControl(this.paymentFormGroup.get(controlName));
  }

  public onPayClick(): void {
    const user = JSON.parse(this.localStorageService.getData('user'));
    const formValue = this.paymentFormGroup.value;
    const payment: ParentPayment = {
      uid: user.refId,
      cardNumber: formValue.cardNumber,
      expDate: formValue.expDate,
      amount: this.paymentAmount,
    };
    this.paymentService.saveParentPayment(payment).subscribe((response: SuccessResponse) => {
      if (response.status === ResponseStatus.FAIL) {
        this.notificationService.showToast('danger', 'Payment', 'Failed to make payment.');
        return;
      }
      this.paymentFormGroup.markAsPristine();
      this.notificationService.showToast('success', 'Payment', 'Payment successful.');
      this.paymentsList.push(this.user.refId);
      this.localStorageService.setData('payments', JSON.stringify(this.paymentsList));
      this.updatePaymentStatus();
    });
    this.onCancelClick();
  }

  private getPaymentsList() {
    const payments = JSON.parse(this.localStorageService.getData('payments'));
    if (!payments) {
      this.localStorageService.setData('payments', JSON.stringify([]));
      return [];
    }
    return payments;
  }
}
