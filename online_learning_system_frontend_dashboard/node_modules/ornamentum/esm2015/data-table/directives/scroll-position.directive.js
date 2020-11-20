/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, ElementRef, NgZone, Input } from '@angular/core';
import { fromEvent, Subject } from 'rxjs';
import { map, pairwise } from 'rxjs/operators';
/**
 * Scroll position directive.
 * Track current scroll position of target element.
 */
export class ScrollPositionDirective {
    /**
     * @param {?} el
     * @param {?} zone
     */
    constructor(el, zone) {
        this.el = el;
        this.zone = zone;
    }
    /**
     * After component initialize lifecycle event handler.
     * @return {?}
     */
    ngAfterViewInit() {
        this.zone.runOutsideAngular((/**
         * @return {?}
         */
        () => {
            this.scrollEventSubscription = fromEvent(this.el.nativeElement, 'scroll')
                .pipe(map((/**
             * @return {?}
             */
            () => {
                return {
                    scrollLeft: this.el.nativeElement.scrollLeft,
                    scrollTop: this.el.nativeElement.scrollTop,
                    scrollHeight: this.el.nativeElement.scrollHeight,
                    scrollWidth: this.el.nativeElement.scrollWidth,
                    clientHeight: this.el.nativeElement.clientHeight,
                    clientWidth: this.el.nativeElement.clientWidth,
                };
            })), pairwise(), map((/**
             * @param {?} pair
             * @return {?}
             */
            (pair) => {
                const [previous, current] = pair;
                return Object.assign({}, current, { isHorizontal: previous.scrollLeft !== current.scrollLeft, isVertical: previous.scrollTop !== current.scrollTop });
            })))
                .subscribe((/**
             * @param {?} pos
             * @return {?}
             */
            (pos) => {
                this.ngScrollPosition.next(pos);
            }));
        }));
    }
    /**
     * Component destroy lifecycle event handler.
     * @return {?}
     */
    ngOnDestroy() {
        if (this.scrollEventSubscription) {
            this.scrollEventSubscription.unsubscribe();
        }
        this.ngScrollPosition.complete();
    }
}
ScrollPositionDirective.decorators = [
    { type: Directive, args: [{
                selector: '[ngScrollPosition]'
            },] }
];
/** @nocollapse */
ScrollPositionDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: NgZone }
];
ScrollPositionDirective.propDecorators = {
    ngScrollPosition: [{ type: Input }]
};
if (false) {
    /**
     * @type {?}
     * @private
     */
    ScrollPositionDirective.prototype.scrollEventSubscription;
    /** @type {?} */
    ScrollPositionDirective.prototype.ngScrollPosition;
    /**
     * @type {?}
     * @private
     */
    ScrollPositionDirective.prototype.el;
    /**
     * @type {?}
     * @private
     */
    ScrollPositionDirective.prototype.zone;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Nyb2xsLXBvc2l0aW9uLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL29ybmFtZW50dW0vIiwic291cmNlcyI6WyJkYXRhLXRhYmxlL2RpcmVjdGl2ZXMvc2Nyb2xsLXBvc2l0aW9uLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQWlCLE1BQU0sRUFBYSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFL0YsT0FBTyxFQUFnQixTQUFTLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3hELE9BQU8sRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7Ozs7O0FBVy9DLE1BQU0sT0FBTyx1QkFBdUI7Ozs7O0lBTWxDLFlBQW9CLEVBQWMsRUFBVSxJQUFZO1FBQXBDLE9BQUUsR0FBRixFQUFFLENBQVk7UUFBVSxTQUFJLEdBQUosSUFBSSxDQUFRO0lBQUcsQ0FBQzs7Ozs7SUFLckQsZUFBZTtRQUNwQixJQUFJLENBQUMsSUFBSSxDQUFDLGlCQUFpQjs7O1FBQUMsR0FBRyxFQUFFO1lBQy9CLElBQUksQ0FBQyx1QkFBdUIsR0FBRyxTQUFTLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsUUFBUSxDQUFDO2lCQUN0RSxJQUFJLENBQ0gsR0FBRzs7O1lBQUMsR0FBRyxFQUFFO2dCQUNQLE9BQU87b0JBQ0wsVUFBVSxFQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLFVBQVU7b0JBQzVDLFNBQVMsRUFBRSxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxTQUFTO29CQUMxQyxZQUFZLEVBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsWUFBWTtvQkFDaEQsV0FBVyxFQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLFdBQVc7b0JBQzlDLFlBQVksRUFBRSxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxZQUFZO29CQUNoRCxXQUFXLEVBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsV0FBVztpQkFDL0MsQ0FBQztZQUNKLENBQUMsRUFBQyxFQUNGLFFBQVEsRUFBRSxFQUNWLEdBQUc7Ozs7WUFBQyxDQUFDLElBQTRCLEVBQUUsRUFBRTtzQkFDN0IsQ0FBRSxRQUFRLEVBQUUsT0FBTyxDQUFFLEdBQUcsSUFBSTtnQkFFbEMseUJBQ0ssT0FBTyxJQUNWLFlBQVksRUFBRSxRQUFRLENBQUMsVUFBVSxLQUFLLE9BQU8sQ0FBQyxVQUFVLEVBQ3hELFVBQVUsRUFBRSxRQUFRLENBQUMsU0FBUyxLQUFLLE9BQU8sQ0FBQyxTQUFTLElBQ3BEO1lBQ0osQ0FBQyxFQUFDLENBQ0g7aUJBQ0EsU0FBUzs7OztZQUFDLENBQUMsR0FBeUIsRUFBRSxFQUFFO2dCQUN2QyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ2xDLENBQUMsRUFBQyxDQUFDO1FBQ1AsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7OztJQUtNLFdBQVc7UUFDaEIsSUFBSSxJQUFJLENBQUMsdUJBQXVCLEVBQUU7WUFDaEMsSUFBSSxDQUFDLHVCQUF1QixDQUFDLFdBQVcsRUFBRSxDQUFDO1NBQzVDO1FBRUQsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ25DLENBQUM7OztZQXRERixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLG9CQUFvQjthQUMvQjs7OztZQWJtQixVQUFVO1lBQWlCLE1BQU07OzsrQkFpQmxELEtBQUs7Ozs7Ozs7SUFGTiwwREFBOEM7O0lBRTlDLG1EQUN1RDs7Ozs7SUFFM0MscUNBQXNCOzs7OztJQUFFLHVDQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgQWZ0ZXJWaWV3SW5pdCwgTmdab25lLCBPbkRlc3Ryb3ksIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFN1YnNjcmlwdGlvbiwgZnJvbUV2ZW50LCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXAsIHBhaXJ3aXNlIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBEYXRhVGFibGVTY3JvbGxQb2ludCB9IGZyb20gJy4uL21vZGVscy9kYXRhLXRhYmxlLXNjcm9sbC1wb2ludC5tb2RlbCc7XG5cbi8qKlxuICogU2Nyb2xsIHBvc2l0aW9uIGRpcmVjdGl2ZS5cbiAqIFRyYWNrIGN1cnJlbnQgc2Nyb2xsIHBvc2l0aW9uIG9mIHRhcmdldCBlbGVtZW50LlxuICovXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbbmdTY3JvbGxQb3NpdGlvbl0nXG59KVxuZXhwb3J0IGNsYXNzIFNjcm9sbFBvc2l0aW9uRGlyZWN0aXZlIGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95IHtcbiAgcHJpdmF0ZSBzY3JvbGxFdmVudFN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBuZ1Njcm9sbFBvc2l0aW9uOiBTdWJqZWN0PERhdGFUYWJsZVNjcm9sbFBvaW50PjtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsOiBFbGVtZW50UmVmLCBwcml2YXRlIHpvbmU6IE5nWm9uZSkge31cblxuICAvKipcbiAgICogQWZ0ZXIgY29tcG9uZW50IGluaXRpYWxpemUgbGlmZWN5Y2xlIGV2ZW50IGhhbmRsZXIuXG4gICAqL1xuICBwdWJsaWMgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgIHRoaXMuem9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XG4gICAgICB0aGlzLnNjcm9sbEV2ZW50U3Vic2NyaXB0aW9uID0gZnJvbUV2ZW50KHRoaXMuZWwubmF0aXZlRWxlbWVudCwgJ3Njcm9sbCcpXG4gICAgICAgIC5waXBlKFxuICAgICAgICAgIG1hcCgoKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICBzY3JvbGxMZWZ0OiB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuc2Nyb2xsTGVmdCxcbiAgICAgICAgICAgICAgc2Nyb2xsVG9wOiB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuc2Nyb2xsVG9wLFxuICAgICAgICAgICAgICBzY3JvbGxIZWlnaHQ6IHRoaXMuZWwubmF0aXZlRWxlbWVudC5zY3JvbGxIZWlnaHQsXG4gICAgICAgICAgICAgIHNjcm9sbFdpZHRoOiB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuc2Nyb2xsV2lkdGgsXG4gICAgICAgICAgICAgIGNsaWVudEhlaWdodDogdGhpcy5lbC5uYXRpdmVFbGVtZW50LmNsaWVudEhlaWdodCxcbiAgICAgICAgICAgICAgY2xpZW50V2lkdGg6IHRoaXMuZWwubmF0aXZlRWxlbWVudC5jbGllbnRXaWR0aCxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgfSksXG4gICAgICAgICAgcGFpcndpc2UoKSxcbiAgICAgICAgICBtYXAoKHBhaXI6IERhdGFUYWJsZVNjcm9sbFBvaW50W10pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IFsgcHJldmlvdXMsIGN1cnJlbnQgXSA9IHBhaXI7XG5cbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgIC4uLmN1cnJlbnQsXG4gICAgICAgICAgICAgIGlzSG9yaXpvbnRhbDogcHJldmlvdXMuc2Nyb2xsTGVmdCAhPT0gY3VycmVudC5zY3JvbGxMZWZ0LFxuICAgICAgICAgICAgICBpc1ZlcnRpY2FsOiBwcmV2aW91cy5zY3JvbGxUb3AgIT09IGN1cnJlbnQuc2Nyb2xsVG9wXG4gICAgICAgICAgICB9O1xuICAgICAgICAgIH0pXG4gICAgICAgIClcbiAgICAgICAgLnN1YnNjcmliZSgocG9zOiBEYXRhVGFibGVTY3JvbGxQb2ludCkgPT4ge1xuICAgICAgICAgIHRoaXMubmdTY3JvbGxQb3NpdGlvbi5uZXh0KHBvcyk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIENvbXBvbmVudCBkZXN0cm95IGxpZmVjeWNsZSBldmVudCBoYW5kbGVyLlxuICAgKi9cbiAgcHVibGljIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnNjcm9sbEV2ZW50U3Vic2NyaXB0aW9uKSB7XG4gICAgICB0aGlzLnNjcm9sbEV2ZW50U3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuXG4gICAgdGhpcy5uZ1Njcm9sbFBvc2l0aW9uLmNvbXBsZXRlKCk7XG4gIH1cbn1cbiJdfQ==