import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AssignmentService, AssignmentUtilityService } from '../../../services';
import { Subscription } from 'rxjs';
import { FormValidator, StudentService } from '../../../../../shared/services';
import { NbDialogService } from '@nebular/theme';
import { NotificationService } from '../../../../../shared/services/notification.service';
import { SocketService } from '../../../../../shared/services/socket.service';
import { SocketEventType } from '../../../../../shared/models/common/socket-event-type.enum';
import Swal from 'sweetalert2';
import { AngularFireAuth } from '@angular/fire/auth';
import { SuccessResponse } from '../../../../../shared/models/common/success-response.model';
import { ResponseStatus } from '../../../../../shared/models/common/response-status.model';
import { AssignmentType } from '../../../../../shared/models/teacher-portal/assignment-type.enum';
import { AssignmentDetail } from '../../../models/assignment-detail.model';
import { LocalStorageService } from '../../../../../@core/services';

@Component({
  selector: 'app-add-assignment',
  styleUrls: ['./assignment-assigner-view.component.scss'],
  templateUrl: './assignment-assigner-view.component.html'
})
export class AssignmentAssignerViewComponent implements OnInit, OnDestroy {
  public addAssignmentFormGroup: FormGroup;
  public assignmentsServiceSubscription: Subscription;
  public isLoading: boolean = false;
  public tabLoading = false;
  public currentResults: any;
  public teacherName: string;
  public points: string;

  public currentSessionId: number;
  public currentAssignment: AssignmentDetail;
  public selectedAssignmentType: AssignmentType;

  constructor(private fb: FormBuilder,
              private assignmentUtilityService: AssignmentUtilityService,
              private studentService: StudentService,
              private assignmentService: AssignmentService,
              private dialogService: NbDialogService,
              private notificationService: NotificationService,
              private socketService: SocketService,
              private angularFireAuth: AngularFireAuth,
              private localStorageService: LocalStorageService
  ) {
    this.selectedAssignmentType = AssignmentType.MCQ;
    angularFireAuth.user.subscribe((user: firebase.User) => {
      this.teacherName = user.displayName;
    });

    this.closeExistingConnections();
  }

  public ngOnInit(): void {
    this.addAssignmentFormGroup = this.fb.group({
      sessionId: [null, Validators.required]
    });
  }

  public onSubmit(assignmentDetails: AssignmentDetail) {
    this.isLoading = true;
    assignmentDetails.type = this.selectedAssignmentType;
    this.onConnect();
    this.sendStartMessage(assignmentDetails);
    this.currentAssignment = assignmentDetails;
  }

  public sendStartMessage(data: AssignmentDetail): void {
    switch (this.selectedAssignmentType) {
      case AssignmentType.DRAWING:
        // send start drawing message
        this.socketService.sendMessage({
          event: SocketEventType.START_DRAWING,
          sessionId: this.currentSessionId
        });
        break;
      case AssignmentType.MCQ:
        // send start mcq message
        this.socketService.sendMessage({
          event: SocketEventType.START_MCQ,
          sessionId: this.currentSessionId,
          paperData: data
        });
        break;
      case AssignmentType.PDF:
        // send start note message
        this.socketService.sendMessage({
          event: SocketEventType.START_PDF,
          sessionId: this.currentSessionId,
          url: data.url
        });
        break;
      case AssignmentType.IMAGE:
        // send start note message
        this.socketService.sendMessage({
          event: SocketEventType.START_IMAGE,
          sessionId: this.currentSessionId,
          url: data.url
        });
        break;
      case AssignmentType.PRESENTATION:
      case AssignmentType.SCROM_OBJECT:
        // send start presentation message
        this.socketService.sendMessage({
          event: SocketEventType.START_PRESENTATION,
          sessionId: this.currentSessionId,
          url: data.url
        });
        break;
      case AssignmentType.YOUTUBE:
        // send start youtube message
        this.socketService.sendMessage({
          event: SocketEventType.START_YOUTUBE,
          sessionId: this.currentSessionId,
          url: data.url
        });
        break;
    }
  }

  public isInvalidControl(controlName: string): boolean {
    return FormValidator.isInvalidControl(this.addAssignmentFormGroup.get(controlName));
  }

  public onConnect() {
    // send connect message
    this.socketService.sendMessage({
      event: SocketEventType.CONNECT,
      sessionId: parseInt(this.addAssignmentFormGroup.value.sessionId)
    });

    // listening to web socket
    this.socketService.getMessage().subscribe((data) => {
      if (data) {
        // switch between websocket events
        switch (data.event) {
          case SocketEventType.PAIRED_SUCCESS:
            // assign sessionId
            this.currentSessionId = parseInt(this.addAssignmentFormGroup.value.sessionId);
            this.localStorageService.setData('sessionId', this.currentSessionId.toString());
            break;
          case SocketEventType.MCQ_RESULT:
            this.currentResults = data;
            Swal.fire({
              title: 'Here are the marks for the MCQ',
              text: data.marks,
              confirmButtonText: 'Submit'
            }).then((result) => {
                this.onResultSubmit();
            });
            this.isLoading = false;
            break;
          case SocketEventType.DRAWING_RESULTS:
            this.currentResults = data;
            this.isLoading = false;
            Swal.fire({
              title: 'Here is the drawing!',
              text: 'Wait some time until it gets visible.',
              imageUrl: this.currentResults.drawing,
              input: 'text',
              inputPlaceholder: 'Input marks',
              imageWidth: 400,
              preConfirm: (marks) => {
                this.points = marks;
              },
              imageHeight: 200,
              imageAlt: 'Drawing',
              confirmButtonText: 'Submit'
            }).then((result) => {
                this.onResultSubmit();
            });
            break;
          case SocketEventType.OTHER_CONTENT_RESULT:
            this.isLoading = false;
            if (data.status === 'receive_success') {
              Swal.fire(
                'Success!',
                'Content delivered successfully!',
                'success'
              );
              return;
            }
            Swal.fire(
              'Failed!',
              'Content delivery failed! Please try again.',
              'error'
            );
            break;
        }
      }
    });
    this.isLoading = false;
  }

  public onCancel() {
    this.isLoading = false;
    this.socketService.sendMessage({
      event: SocketEventType.CLOSE,
      sessionId: this.currentSessionId
    });
    this.currentSessionId = null;
    this.addAssignmentFormGroup.reset();
  }

  public isSessionIdNotExists() {
    return !!this.addAssignmentFormGroup.value.sessionId;
  }

  public ngOnDestroy(): void {
    this.socketService.sendMessage({
      event: SocketEventType.CLOSE,
      sessionId: this.currentSessionId
    });
    this.currentSessionId = null;
  }

  public onResultSubmit() {
    const resultData = {
      studentId: this.currentAssignment.studentId,
      type: this.selectedAssignmentType,
      drawing: this.currentResults.drawing,
      marks: this.currentResults.marks ? this.currentResults.marks : this.points,
      evaluator: this.teacherName,
      assignmentName: this.currentAssignment.assignmentName
    };
    this.assignmentsServiceSubscription = this.assignmentService.submitMarks(resultData)
      .subscribe((response: SuccessResponse) => {
        if (response.status === ResponseStatus.FAIL) {
          Swal.fire(
            'Failed!',
            'Result submit failed!',
            'error'
          );
          return;
        }
        Swal.fire(
          'Submitted!',
          'Result successfully submitted!',
          'success'
        );
        this.currentResults = null;
      });
  }

  public onTabChange(event: Event) {
    this.tabLoading = true;
    this.selectedAssignmentType = event['tabId'];
    setTimeout(() => this.tabLoading = false, 500);
  }

  private closeExistingConnections(): void {
    const lastSessionId = this.localStorageService.getData('sessionId');
    if (!!lastSessionId) {
      this.socketService.sendMessage({
        event: SocketEventType.CLOSE,
        sessionId: Number(lastSessionId)
      });
    }
  }
}
