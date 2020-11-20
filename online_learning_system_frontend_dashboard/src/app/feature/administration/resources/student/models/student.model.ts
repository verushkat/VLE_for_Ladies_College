import { Parent } from './parent.model';

export interface Student {
  id: string;
  name: string;
  gender: string;
  email: string;
  grade: string;
  parent: Parent;
}
