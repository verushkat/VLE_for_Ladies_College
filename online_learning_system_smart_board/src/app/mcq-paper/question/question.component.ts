import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
    selector: 'app-question',
    templateUrl: './question.component.html',
    styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

    public questionVal = '';
    public answer1Val = '';
    public answer2Val = '';
    public answer3Val = '';
    public answer4Val = '';
    public correctAnswerVal = '';

    @Output()
    public result = new EventEmitter<boolean>();

    @Input()
    set question(question: string) {
        this.questionVal = question;
    }

    @Input()
    set answer1(answer: string) {
        this.answer1Val = answer;
    }

    @Input()
    set answer2(answer: string) {
        this.answer2Val = answer;
    }

    @Input()
    set answer3(answer: string) {
        this.answer3Val = answer;
    }

    @Input()
    set answer4(answer: string) {
        this.answer4Val = answer;
    }

    @Input()
    set correctAnswer(answer: string) {
        this.correctAnswerVal = answer;
    }

    constructor() {
    }

    ngOnInit() {
    }

    handleAnswer(answer: number) {
        // tslint:disable-next-line:radix
        this.result.emit(parseInt(this.correctAnswerVal) === answer);

    }
}
