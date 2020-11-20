import { Teacher } from '../../../feature/administration/resources/teacher/models/teacher.model';

export class StudentEvaluation {
  id: string;
  assignmentName: string;
  submittedDate: string;
  marks: string;
  status: string;
  evaluator: Teacher;
}
