import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SuccessResponse } from '../../../../shared/models/common/success-response.model';
import { ResponseStatus } from '../../../../shared/models/common/response-status.model';
import { NotificationService } from '../../../../shared/services/notification.service';
import { Router } from '@angular/router';
import { StudentAssignmentService } from '../../../../shared/services/student-assignment.service';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { StudentAssignmentView } from '../../../student-portal/models/student-assignment-view.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { DataFetchMode, DataTableComponent } from 'ornamentum';
import { NoteService } from '../../services';

@Component({
  selector: 'ngx-notes-add-view',
  templateUrl: './notes-add-view.component.html',
  styleUrls: ['./notes-add-view.component.scss']
})
export class NotesAddViewComponent implements OnInit {
  public dataSource: Observable<StudentAssignmentView[]>;
  private dataTable: DataTableComponent;
  public uploadForm: FormGroup;
  public selectedMaterialType = 'note';
  public isFileUploaded = false;
  private url = '';
  public materialTypes = [
    {
      name: 'Note',
      value: 'note'
    },
    {
      name: 'Voice clip',
      value: 'voice_clip'
    },
    {
      name: 'Past Paper',
      value: 'past_paper'
    }
  ];

  constructor(private fb: FormBuilder,
              private http: HttpClient,
              private notificationService: NotificationService,
              private router: Router,
              private studentAssignmentService: StudentAssignmentService,
              private noteService: NoteService) {

  }


  public ngOnInit() {
    this.dataSource = this.studentAssignmentService.getAssignmentsList(null).pipe(
      map(resource => {
        return resource.data;
      }));

    this.uploadForm = this.fb.group({
      noteName: [null, Validators.required],
      grade: [null, Validators.required],
      subject: [null, Validators.required],
    });
  }

  public onInit(dataTable: DataTableComponent): void {
    this.dataTable = dataTable;
  }

  public submitAssignment() {
    const fromValue = this.uploadForm.value;
    let body = {
      url: this.url,
      name: fromValue.noteName,
      grade: fromValue.grade,
      subject: fromValue.subject,
      type: this.selectedMaterialType
    };
    this.noteService.uploadNotes(body).subscribe((response: SuccessResponse) => {
      if (response.status === ResponseStatus.FAIL) {
        this.notificationService.showToast('danger', 'Notes', response.message);
        return;
      }
      this.uploadForm.reset();
      this.dataTable.fetchData(DataFetchMode.HARD_RELOAD);
      this.notificationService.showToast('success', 'Notes', response.message);
    });
  }

  public handleUploadSuccess(url: string) {
    this.isFileUploaded = true;
    this.url = url;
  }

  public onMaterialDelete(item: StudentAssignmentView) {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You won\'t be able to revert this!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.value) {
        this.noteService.deleteNote(item.id).subscribe((response: SuccessResponse) => {
          if (response.status === ResponseStatus.FAIL) {
            Swal.fire(
              'Delete Failed!',
              'Delete Failed.',
              'error'
            );
            return;
          }
          this.dataTable.fetchData(DataFetchMode.HARD_RELOAD);
          Swal.fire(
            'Deleted!',
            'Material has been deleted.',
            'success'
          );
        });
      }
    });
  }

  public isValidForm() {
    return this.isFileUploaded && this.uploadForm.valid;
  }

  public viewReport() {
    window.open(this.url, '_blank');
  }
}
