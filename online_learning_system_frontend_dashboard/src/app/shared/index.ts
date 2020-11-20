import { FormValidator, CustomValidator, MenuManagerService, StudentService, PaymentService } from './services';
import {
  AssignmentDetailViewComponent,
  CsvUploaderComponent, FileUploaderComponent, LinkUploaderComponent, LoadingOverlayComponent,
  QuestionViewComponent, ShowcaseDialogComponent,
  StudentDetailViewComponent,
} from './components';
import { NotificationService } from './services/notification.service';
import { StudentAssignmentService } from './services/student-assignment.service';

export const SERVICES = [
  FormValidator,
  CustomValidator,
  MenuManagerService,
  StudentService,
  NotificationService,
  StudentAssignmentService,
  PaymentService
];

export const COMPONENTS = [
  AssignmentDetailViewComponent,
  QuestionViewComponent,
  CsvUploaderComponent,
  FileUploaderComponent,
  StudentDetailViewComponent,
  ShowcaseDialogComponent,
  LoadingOverlayComponent,
  LinkUploaderComponent
];
