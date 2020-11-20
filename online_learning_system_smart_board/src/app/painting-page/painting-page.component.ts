import {Component, OnInit, ViewChild} from '@angular/core';
import {SocketServiceService} from '../service/socket-service.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-painting-page',
    templateUrl: './painting-page.component.html',
    styleUrls: ['./painting-page.component.css']
})
export class PaintingPageComponent implements OnInit {

    public isFinished = false;

    public drawColor = '#000000';

    @ViewChild('doneSwal', {static: false})
    public doneSwal: any;

    @ViewChild('suspend', {static: false})
    public suspendSwal: any;

    constructor(private socketService: SocketServiceService, private router: Router) {
    }

    ngOnInit() {
        this.socketService.getMessage().subscribe((data) => {
            if (data.event === 'CLOSE') {
                this.suspendSwal.fire();
            }
        });
    }

    handlePublishClick() {
        this.isFinished = true;
    }

    handleDrawingUpload(path: string) {
        this.socketService.sendMessage({
            event: 'DRAWING_RESULTS',
            // tslint:disable-next-line:radix
            sessionId: parseInt(localStorage.getItem('sessionId')),
            drawing: path
        });
        this.doneSwal.fire();
    }

    handleRedClick() {
        this.drawColor = '#eb4034';
    }

    handleGreenClick() {
        this.drawColor = '#2ef007';
    }

    handleBlueClick() {
        this.drawColor = '#007bff';
    }

    handleBlackClick() {
        this.drawColor = '#000000';
    }

    navigateToHome() {
        this.router.navigate(['home']);
    }

    navigateToPairMode() {
        this.router.navigate(['app']);
    }
}
