import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormValidator, PaymentService } from '../../../../../../shared/services';
import { Payment } from '../../models/payment.model';
import { Subscription } from 'rxjs';
import { SuccessResponse } from '../../../../../../shared/models/common/success-response.model';
import { ResponseStatus } from '../../../../../../shared/models/common/response-status.model';
import { NotificationService } from '../../../../../../shared/services/notification.service';

@Component({
  selector: 'app-payment-view',
  styleUrls: ['./payment-view.component.scss'],
  templateUrl: './payment-view.component.html'
})
export class PaymentViewComponent implements OnInit, OnDestroy {
  public paymentForm: FormGroup;
  private paymentServiceSubscription: Subscription;

  constructor(
    private fb: FormBuilder,
    private paymentService: PaymentService,
    private notificationService: NotificationService
  ) {
  }

  public isInvalidControl(controlName: string): boolean {
    return FormValidator.isInvalidControl(this.paymentForm.get(controlName));
  }

  public onSave(): void {
    const formValue = this.paymentForm.value;
    const payment: Payment = {
      primary: formValue.primary,
      middle: formValue.middle,
      upper: formValue.upper,
    };
    this.paymentService.savePayment(payment).subscribe((response: SuccessResponse) => {
      if (response.status === ResponseStatus.FAIL) {
        this.notificationService.showToast('danger', 'Students', response.message);
        return;
      }
      this.paymentForm.markAsPristine();
      this.notificationService.showToast('success', 'Students', response.message);
    });
  }

  public ngOnInit(): void {
    this.paymentServiceSubscription = this.paymentService.getPaymentDetails().subscribe((payment: Payment) => {
      if (!!payment) {
        this.paymentForm = this.initFormGroup(payment);
        return;
      }
    });
    this.paymentForm = this.initFormGroup();
  }

  public initFormGroup(payment?: Payment): FormGroup {
    if (payment) {
      return this.fb.group({
        primary: [payment.primary, Validators.compose([
          Validators.required]
        )],
        middle: [payment.middle, Validators.compose([
          Validators.required]
        )],
        upper: [payment.upper, Validators.compose([
          Validators.required]
        )]
      });
    }
    return this.fb.group({
      primary: [null, Validators.compose([
        Validators.required]
      )],
      middle: [null, Validators.compose([
        Validators.required]
      )],
      upper: [null, Validators.compose([
        Validators.required]
      )]
    });
  }

  public ngOnDestroy(): void {
    if (!!this.paymentServiceSubscription) {
      this.paymentServiceSubscription.unsubscribe();
    }
  }
}
