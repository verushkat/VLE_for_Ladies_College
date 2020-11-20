import { TeachersViewComponent, TeacherUpsertComponent } from './components';
import { TeacherResolver } from './resolvers';
import { TeacherService } from './services/teacher.service';

export const COMPONENTS = [
  TeachersViewComponent,
  TeacherUpsertComponent
];

export const SERVICES = [
  TeacherService,
  TeacherResolver
];
