import { Injectable } from '@angular/core';
import { Question } from '../../../shared/models/parent-portal/question.model';

@Injectable()
export class AssignmentUtilityService {
  public mapAssignment(assignmentCSVData: any[][]): Question[] {
    const questions: Question[] = [];
    if (!assignmentCSVData && assignmentCSVData.length === 0) {
      return null;
    } else {
      for (let i = 0; i < assignmentCSVData.length; i++) {
        const desc = assignmentCSVData[i][0];
        const answer1 = assignmentCSVData[i][1];
        const answer2 = assignmentCSVData[i][2];
        const answer3 = assignmentCSVData[i][3];
        const answer4 = assignmentCSVData[i][4];
        const correctAnswer = assignmentCSVData[i][5];

        if (desc && answer1 && answer2 && answer3 && answer4) {
          questions.push(
            {
              description: desc,
              answer1: answer1,
              answer2: answer2,
              answer3: answer3,
              answer4: answer4,
              correctAnswer: correctAnswer,
            }
          );
        }
      }
    }
    return questions;
  }
}
