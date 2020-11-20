import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SuccessResponse } from '../../../shared/models/common/success-response.model';
import { environment } from '../../../../environments/environment';
import { Report } from '../models/report.model';

@Injectable()
export class ReportsService {
  private static generate_report = '/api/v1/reports/generate';

  constructor(private httpClient: HttpClient) {
  }

  public generateReport(report: Report): Observable<SuccessResponse> {
    return this.httpClient.post<SuccessResponse>(`${environment.baseUrl}${ReportsService.generate_report}`, report);
  }
}
