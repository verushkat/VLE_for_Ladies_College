import { Component, OnInit } from '@angular/core';
import {SocketServiceService} from '../service/socket-service.service';

@Component({
  selector: 'app-scorm-panel',
  templateUrl: './scorm-panel.component.html',
  styleUrls: ['./scorm-panel.component.css']
})
export class ScormPanelComponent implements OnInit {

  private downloadUrl;
  constructor(private socketService: SocketServiceService) { }

  ngOnInit() {
    this.downloadUrl = localStorage.getItem('url');
    this.socketService.sendMessage({
      // tslint:disable-next-line:radix
      sessionId: parseInt(localStorage.getItem('sessionId')),
      event: 'OTHER_CONTENT_RESULT',
      status: 'receive_success'
    });
  }

}
