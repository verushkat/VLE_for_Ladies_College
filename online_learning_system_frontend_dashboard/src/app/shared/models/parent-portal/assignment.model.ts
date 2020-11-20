import { Question } from './question.model';

export class Assignment {
  id: string;
  name: string;
  questions: Question[];
}
