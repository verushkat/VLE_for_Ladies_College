import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SuccessResponse } from '../../../shared/models/common/success-response.model';
import { environment } from '../../../../environments/environment';

@Injectable()
export class NoteService {
  private static notes = '/api/v1/assignments/notes';

  constructor(private httpClient: HttpClient) {
  }

  public uploadNotes(body: any): Observable<SuccessResponse> {
    return this.httpClient.post<SuccessResponse>(`${environment.baseUrl}${NoteService.notes}`, body);
  }

  public deleteNote(noteId: any): Observable<SuccessResponse> {
    return this.httpClient
      .delete<SuccessResponse>(`${environment.baseUrl}${NoteService.notes}/${noteId}`);
  }
}
