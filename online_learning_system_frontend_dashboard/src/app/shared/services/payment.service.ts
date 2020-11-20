import { Payment } from '../../feature/administration/resources/payment/models/payment.model';
import { Observable } from 'rxjs';
import { SuccessResponse } from '../models/common/success-response.model';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Injectable } from '@angular/core';
import { ParentPayment } from "../models/parent-portal/parent-payment.model";

@Injectable()
export class PaymentService {
  private static admin_payment_get = '/api/v1/payment/admin';
  private static parent_payment_get = '/api/v1/payment/parent';

  constructor(private httpClient: HttpClient) {
  }

  public saveParentPayment(payment: ParentPayment): Observable<SuccessResponse> {
    return this.httpClient.post<SuccessResponse>(`${environment.baseUrl}${PaymentService.parent_payment_get}`, payment);
  }

  public savePayment(payment: Payment): Observable<SuccessResponse> {
    return this.httpClient.post<SuccessResponse>(`${environment.baseUrl}${PaymentService.admin_payment_get}`, payment);
  }

  public getPaymentDetails(): Observable<Payment> {
    return this.httpClient.get<Payment>(`${environment.baseUrl}${PaymentService.admin_payment_get}`);
  }
}
