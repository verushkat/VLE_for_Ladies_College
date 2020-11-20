import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Assignment} from '../models/assignment.model';
import {SocketServiceService} from '../service/socket-service.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-mcq-paper',
    templateUrl: './mcq-paper.component.html',
    styleUrls: ['./mcq-paper.component.css']
})
export class McqPaperComponent implements OnInit {

    public currentQuestion = 0;

    public totalQuestion = 0;

    public questionVal = '';
    public answer1Val = '';
    public answer2Val = '';
    public answer3Val = '';
    public answer4Val = '';
    public correctAnswer = '';

    private marks = 0;

    @ViewChild('doneSwal', {static: false})
    public doneSwal: any;

    @ViewChild('suspend', {static: false})
    public suspendSwal: any;


    constructor(private socketService: SocketServiceService, private router: Router) {
    }


    ngOnInit() {
        this.processNextQuestion();
        this.socketService.getMessage().subscribe((data) => {
            if (data.event === 'CLOSE') {
                this.suspendSwal.fire();
            }
        });
    }

    private processNextQuestion(): void {

        this.currentQuestion += 1;
        const dataset = JSON.parse(localStorage.getItem('paper')).paperData;
        this.totalQuestion = dataset.questions.length;
        const question = dataset.questions[this.currentQuestion - 1];
        this.questionVal = question.description;
        this.answer1Val = question.answer1;
        this.answer2Val = question.answer2;
        this.answer3Val = question.answer3;
        this.answer4Val = question.answer4;
        this.correctAnswer = question.correctAnswer;
    }

    handleResult(result: boolean) {
        if (result) {
            this.marks += 1;
        }
        console.log(this.marks);
        if ((this.currentQuestion) !== this.totalQuestion) {
            this.processNextQuestion();
        } else {
            this.completePaper();
        }
    }

    completePaper() {
        this.socketService.sendMessage({
            // tslint:disable-next-line:radix
            sessionId: parseInt(localStorage.getItem('sessionId')),
            event: 'MCQ_RESULT',
            marks: this.marks + ' out of ' + this.totalQuestion,
        });
        this.doneSwal.fire();

    }

    navigateToHome() {
        this.router.navigate(['home']);
    }

    navigateToPairMode() {
        this.router.navigate(['app']);
    }
}
