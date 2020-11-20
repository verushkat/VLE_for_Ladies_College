import { Injectable } from '@angular/core';
import { Socket } from 'ng-socket-io';
import { map } from 'rxjs/operators';
import { SocketEvent } from '../models/common/socket-event.model';

@Injectable({
  providedIn: 'root'
})
export class SocketService {

  constructor(private socket: Socket) {
  }

  public sendMessage(msg: SocketEvent) {
    this.socket.emit('dashboard', msg);
  }

  public getMessage() {
    return this.socket.fromEvent<any>('dashboard')
      .pipe(
        map(data => data)
      );
  }

  public close() {
    this.socket.disconnect();
  }
}
