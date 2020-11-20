import {
    Component, Input, ElementRef, AfterViewInit, ViewChild, Output, EventEmitter
} from '@angular/core';
import {fromEvent} from 'rxjs';
import {switchMap, takeUntil, pairwise} from 'rxjs/operators';
import * as firebase from 'firebase';
import * as uuid from 'uuid';
import {environment} from '../../environments/environment';

@Component({
    selector: 'app-canvas',
    template: '<canvas #canvas></canvas>',
    styles: ['canvas { border: 1px solid #000; }']
})
export class CanvasComponent implements AfterViewInit {

    @ViewChild('canvas', {static: false}) public canvas: ElementRef;

    @Input() public width = 1920;
    @Input() public height = 1080;

    private strokeColor = '#f00';

    @Output()
    public onSuccess = new EventEmitter<string>();

    @Input()
    set color(color) {
        this.strokeColor = color;
    }

    @Input()
    set getBlob(isFinished: boolean) {
        if (isFinished === true) {
            this.canvas.nativeElement.toBlob((blob) => {
                console.log(blob);
                const id = uuid.v4();
                const storageRef = firebase.storage().ref();
                const uploadTask = storageRef.child('images/' + id).put(blob);
                uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
                    (snapshot) => {
                        // upload in progress
                    },
                    (error) => {
                        // upload failed
                        console.log(error);
                    },
                    () => {
                        // upload success
                        storageRef.child('images/' + id).getDownloadURL().then(ref => {
                            console.log(ref);
                            this.onSuccess.emit(ref.toString());
                        });
                        // this.saveFileData(upload);
                    }
                );
            });
        }
    }


    private cx: CanvasRenderingContext2D;

    public ngAfterViewInit() {

        const canvasEl: HTMLCanvasElement = this.canvas.nativeElement;
        this.cx = canvasEl.getContext('2d');

        canvasEl.width = this.width;
        canvasEl.height = this.height;

        this.cx.lineWidth = 3;
        this.cx.lineCap = 'round';
        this.cx.strokeStyle = '#000';

        this.captureEvents(canvasEl);
        firebase.initializeApp(environment.firebaseConfig);
    }

    private captureEvents(canvasEl: HTMLCanvasElement) {
        // this will capture all mousedown events from the canvas element
        fromEvent(canvasEl, 'mousedown')
            .pipe(
                switchMap((e) => {
                    // after a mouse down, we'll record all mouse moves
                    return fromEvent(canvasEl, 'mousemove')
                        .pipe(
                            // we'll stop (and unsubscribe) once the user releases the mouse
                            // this will trigger a 'mouseup' event
                            takeUntil(fromEvent(canvasEl, 'mouseup')),
                            // we'll also stop (and unsubscribe) once the mouse leaves the canvas (mouseleave event)
                            takeUntil(fromEvent(canvasEl, 'mouseleave')),
                            // pairwise lets us get the previous value to draw a line from
                            // the previous point to the current point
                            pairwise()
                        );
                })
            )
            .subscribe((res: [MouseEvent, MouseEvent]) => {
                const rect = canvasEl.getBoundingClientRect();

                // previous and current position with the offset
                const prevPos = {
                    x: res[0].clientX - rect.left,
                    y: res[0].clientY - rect.top
                };

                const currentPos = {
                    x: res[1].clientX - rect.left,
                    y: res[1].clientY - rect.top
                };

                // this method we'll implement soon to do the actual drawing
                this.drawOnCanvas(prevPos, currentPos);
            });
    }

    private drawOnCanvas(prevPos: { x: number, y: number }, currentPos: { x: number, y: number }) {
        if (!this.cx) {
            return;
        }

        this.cx.beginPath();

        if (prevPos) {
            this.cx.strokeStyle = this.strokeColor;
            this.cx.moveTo(prevPos.x, prevPos.y); // from
            this.cx.lineTo(currentPos.x, currentPos.y);
            this.cx.stroke();
        }
    }

}
