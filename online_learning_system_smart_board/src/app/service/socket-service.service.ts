import {Injectable} from '@angular/core';
import {Socket} from 'ng-socket-io';
import {map} from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class SocketServiceService {

    constructor(private socket: Socket) {
    }

    removeAllSubscribers() {
        this.socket.removeAllListeners('smartBoard');
    }

    sendMessage(msg) {
        this.socket.emit('smartBoard', msg);
    }

    getMessage() {
        return this.socket.fromEvent<any>('smartBoard')
            .pipe(
                map(data => data)
            );
    }

    close() {
        this.socket.disconnect();
    }
}
