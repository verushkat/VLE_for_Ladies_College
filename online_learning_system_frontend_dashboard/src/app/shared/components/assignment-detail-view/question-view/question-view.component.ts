import { Component, Input } from '@angular/core';
import { Question } from '../../../models/parent-portal/question.model';
import { NbComponentStatus } from '@nebular/theme';

@Component({
  selector: 'app-question-view',
  styleUrls: ['./question-view.component.scss'],
  templateUrl: './question-view.component.html'
})
export class QuestionViewComponent {
  @Input()
  public question: Question;

  @Input()
  public number: number;

  public checkAnswer(question: Question): NbComponentStatus {
    if (question.correctAnswer === question.givenAnswer) {
      return 'success';
    }
    return 'danger';
  }
}
