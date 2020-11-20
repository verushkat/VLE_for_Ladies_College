import {Component, OnInit} from '@angular/core';
import {Socket} from 'ng-socket-io';
import {SocketServiceService} from '../service/socket-service.service';
import {Router} from '@angular/router';
import {environment} from '../../environments/environment';
import * as firebase from 'firebase';

@Component({
    selector: 'app-welcome-page',
    templateUrl: './welcome-page.component.html',
    styleUrls: ['./welcome-page.component.css']
})
export class WelcomePageComponent implements OnInit {

    private sessionId = '';
    public pairingContainerStyle = 'hide_div';
    public paringLoadingContainer = 'loading_screen';

    constructor(private socketService: SocketServiceService, private router: Router) {
    }

    ngOnInit() {
        this.socketService.removeAllSubscribers();
        this.socketService.sendMessage({event: 'INIT'});
        this.socketService.getMessage().subscribe((data) => {
            console.log(data);
            if (data.event === 'INIT_REPLY') {
                this.sessionId = data.sessionId;
                this.pairingContainerStyle = 'pairing_container_style';
                this.paringLoadingContainer = 'hide_div';
                localStorage.setItem('sessionId', this.sessionId);
            } else if (data.event === 'CONNECT') {
                this.router.navigate(['home']);
            }
        });
    }

}
