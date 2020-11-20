import {
  AssignmentAssignerViewComponent,
  McqTabComponent,
  NotesAddViewComponent,
  ReportsComponent,
  PresentationTabComponent,
  PdfTabComponent,
  ScromObjectTabComponent,
  YoutubeTabComponent,
  DrawingTabComponent, ImageTabComponent
} from './components';
import { AssignmentUtilityService, NoteService, ReportsService } from './services';
import { AssignmentService } from './services';
import { SweetAlert2LoaderService } from '@sweetalert2/ngx-sweetalert2';

export const COMPONENTS = [
  AssignmentAssignerViewComponent,
  ReportsComponent,
  NotesAddViewComponent,
  McqTabComponent,
  PresentationTabComponent,
  PdfTabComponent,
  ScromObjectTabComponent,
  YoutubeTabComponent,
  DrawingTabComponent,
  ImageTabComponent
];

export const SERVICES = [
  AssignmentUtilityService,
  AssignmentService,
  SweetAlert2LoaderService,
  NoteService,
  ReportsService
];
