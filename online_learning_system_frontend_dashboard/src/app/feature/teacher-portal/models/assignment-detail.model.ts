import { Question } from '../../../shared/models/parent-portal/question.model';

export interface AssignmentDetail {
  assignmentId?: string;
  type?: string;
  assignmentName?: string;
  studentId?: string;
  questions?:Question[];
  url?: string;
}
