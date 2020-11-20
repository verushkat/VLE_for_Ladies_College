import {Component, OnInit} from '@angular/core';
import {SocketServiceService} from '../service/socket-service.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-menu-page',
    templateUrl: './menu-page.component.html',
    styleUrls: ['./menu-page.component.css']
})
export class MenuPageComponent implements OnInit {

    constructor(private socketService: SocketServiceService, private router: Router) {
    }

    ngOnInit() {
        this.socketService.getMessage().subscribe((data) => {
            if (data.event === 'START_DRAWING') {
                this.router.navigate(['drawing']);
            } else if (data.event === 'START_MCQ') {
                this.saveQuestions(data);
                this.router.navigate(['mcq']);
            } else if (data.event === 'START_YOUTUBE') {
                this.openYoutube(data.url);
            } else if (data.event === 'START_PDF') {
                this.openURL(data.url);
            } else if (data.event === 'START_SCORM_OBJECT') {
                this.openScormObjectURL(data.url);
            } else if (data.event === 'START_IMAGE') {
                this.openURL(data.url);
            } else if (data.event === 'START_PRESENTATION') {
                this.openURL(data.url);
            } else if (data.event === 'CLOSE') {
                this.navigateToPairMode();
            }
        });
    }

    private saveQuestions(data) {
        localStorage.setItem('paper', JSON.stringify(data));
    }

    navigateToPairMode() {
        this.router.navigate(['app']);
    }

    private openScormObjectURL(url) {
        localStorage.setItem('url', url);
        this.router.navigate(['scorm']);
        this.socketService.sendMessage({event: 'INIT'});
    }

    private sendSuccess() {
        this.socketService.sendMessage({
            // tslint:disable-next-line:radix
            sessionId: parseInt(localStorage.getItem('sessionId')),
            event: 'OTHER_CONTENT_RESULT',
            status: 'receive_success'
        });
    }

    private openYoutube(url) {
        const urlParts = url.split('/');
        console.log(urlParts);
        let processedUrl = '';
        const urlLast = urlParts[urlParts.length - 1].toString();
        if (urlLast.includes('watch?v=')) {
            processedUrl = urlLast.replace('watch?v=', '');
            if (processedUrl.includes('&')) {
                const queryStrings = processedUrl.split('&');
                processedUrl = queryStrings[0];
            }
            processedUrl = processedUrl + '?autoplay=1';
        } else {
            processedUrl = urlLast;
            processedUrl = processedUrl + '?autoplay=1';
        }
        const embedURL = 'https://www.youtube.com/embed/' + processedUrl;
        window.open(embedURL, '_blank');
        this.sendSuccess();
    }

    private openURL(url) {
        window.open(url, '_blank');
        this.sendSuccess();
    }

}
