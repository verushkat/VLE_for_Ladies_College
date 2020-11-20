/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Directive, ElementRef, NgZone, Input } from '@angular/core';
import { fromEvent, Subject } from 'rxjs';
import { map, pairwise } from 'rxjs/operators';
/**
 * Scroll position directive.
 * Track current scroll position of target element.
 */
var ScrollPositionDirective = /** @class */ (function () {
    function ScrollPositionDirective(el, zone) {
        this.el = el;
        this.zone = zone;
    }
    /**
     * After component initialize lifecycle event handler.
     */
    /**
     * After component initialize lifecycle event handler.
     * @return {?}
     */
    ScrollPositionDirective.prototype.ngAfterViewInit = /**
     * After component initialize lifecycle event handler.
     * @return {?}
     */
    function () {
        var _this = this;
        this.zone.runOutsideAngular((/**
         * @return {?}
         */
        function () {
            _this.scrollEventSubscription = fromEvent(_this.el.nativeElement, 'scroll')
                .pipe(map((/**
             * @return {?}
             */
            function () {
                return {
                    scrollLeft: _this.el.nativeElement.scrollLeft,
                    scrollTop: _this.el.nativeElement.scrollTop,
                    scrollHeight: _this.el.nativeElement.scrollHeight,
                    scrollWidth: _this.el.nativeElement.scrollWidth,
                    clientHeight: _this.el.nativeElement.clientHeight,
                    clientWidth: _this.el.nativeElement.clientWidth,
                };
            })), pairwise(), map((/**
             * @param {?} pair
             * @return {?}
             */
            function (pair) {
                var _a = tslib_1.__read(pair, 2), previous = _a[0], current = _a[1];
                return tslib_1.__assign({}, current, { isHorizontal: previous.scrollLeft !== current.scrollLeft, isVertical: previous.scrollTop !== current.scrollTop });
            })))
                .subscribe((/**
             * @param {?} pos
             * @return {?}
             */
            function (pos) {
                _this.ngScrollPosition.next(pos);
            }));
        }));
    };
    /**
     * Component destroy lifecycle event handler.
     */
    /**
     * Component destroy lifecycle event handler.
     * @return {?}
     */
    ScrollPositionDirective.prototype.ngOnDestroy = /**
     * Component destroy lifecycle event handler.
     * @return {?}
     */
    function () {
        if (this.scrollEventSubscription) {
            this.scrollEventSubscription.unsubscribe();
        }
        this.ngScrollPosition.complete();
    };
    ScrollPositionDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[ngScrollPosition]'
                },] }
    ];
    /** @nocollapse */
    ScrollPositionDirective.ctorParameters = function () { return [
        { type: ElementRef },
        { type: NgZone }
    ]; };
    ScrollPositionDirective.propDecorators = {
        ngScrollPosition: [{ type: Input }]
    };
    return ScrollPositionDirective;
}());
export { ScrollPositionDirective };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Nyb2xsLXBvc2l0aW9uLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL29ybmFtZW50dW0vIiwic291cmNlcyI6WyJkYXRhLXRhYmxlL2RpcmVjdGl2ZXMvc2Nyb2xsLXBvc2l0aW9uLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFpQixNQUFNLEVBQWEsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRS9GLE9BQU8sRUFBZ0IsU0FBUyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN4RCxPQUFPLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7OztBQVEvQztJQVNFLGlDQUFvQixFQUFjLEVBQVUsSUFBWTtRQUFwQyxPQUFFLEdBQUYsRUFBRSxDQUFZO1FBQVUsU0FBSSxHQUFKLElBQUksQ0FBUTtJQUFHLENBQUM7SUFFNUQ7O09BRUc7Ozs7O0lBQ0ksaURBQWU7Ozs7SUFBdEI7UUFBQSxpQkE2QkM7UUE1QkMsSUFBSSxDQUFDLElBQUksQ0FBQyxpQkFBaUI7OztRQUFDO1lBQzFCLEtBQUksQ0FBQyx1QkFBdUIsR0FBRyxTQUFTLENBQUMsS0FBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsUUFBUSxDQUFDO2lCQUN0RSxJQUFJLENBQ0gsR0FBRzs7O1lBQUM7Z0JBQ0YsT0FBTztvQkFDTCxVQUFVLEVBQUUsS0FBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsVUFBVTtvQkFDNUMsU0FBUyxFQUFFLEtBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLFNBQVM7b0JBQzFDLFlBQVksRUFBRSxLQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxZQUFZO29CQUNoRCxXQUFXLEVBQUUsS0FBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsV0FBVztvQkFDOUMsWUFBWSxFQUFFLEtBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLFlBQVk7b0JBQ2hELFdBQVcsRUFBRSxLQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxXQUFXO2lCQUMvQyxDQUFDO1lBQ0osQ0FBQyxFQUFDLEVBQ0YsUUFBUSxFQUFFLEVBQ1YsR0FBRzs7OztZQUFDLFVBQUMsSUFBNEI7Z0JBQ3pCLElBQUEsNEJBQTRCLEVBQTFCLGdCQUFRLEVBQUUsZUFBZ0I7Z0JBRWxDLDRCQUNLLE9BQU8sSUFDVixZQUFZLEVBQUUsUUFBUSxDQUFDLFVBQVUsS0FBSyxPQUFPLENBQUMsVUFBVSxFQUN4RCxVQUFVLEVBQUUsUUFBUSxDQUFDLFNBQVMsS0FBSyxPQUFPLENBQUMsU0FBUyxJQUNwRDtZQUNKLENBQUMsRUFBQyxDQUNIO2lCQUNBLFNBQVM7Ozs7WUFBQyxVQUFDLEdBQXlCO2dCQUNuQyxLQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ2xDLENBQUMsRUFBQyxDQUFDO1FBQ1AsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQ7O09BRUc7Ozs7O0lBQ0ksNkNBQVc7Ozs7SUFBbEI7UUFDRSxJQUFJLElBQUksQ0FBQyx1QkFBdUIsRUFBRTtZQUNoQyxJQUFJLENBQUMsdUJBQXVCLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDNUM7UUFFRCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDbkMsQ0FBQzs7Z0JBdERGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsb0JBQW9CO2lCQUMvQjs7OztnQkFibUIsVUFBVTtnQkFBaUIsTUFBTTs7O21DQWlCbEQsS0FBSzs7SUFpRFIsOEJBQUM7Q0FBQSxBQXZERCxJQXVEQztTQXBEWSx1QkFBdUI7Ozs7OztJQUNsQywwREFBOEM7O0lBRTlDLG1EQUN1RDs7Ozs7SUFFM0MscUNBQXNCOzs7OztJQUFFLHVDQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgQWZ0ZXJWaWV3SW5pdCwgTmdab25lLCBPbkRlc3Ryb3ksIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFN1YnNjcmlwdGlvbiwgZnJvbUV2ZW50LCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXAsIHBhaXJ3aXNlIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBEYXRhVGFibGVTY3JvbGxQb2ludCB9IGZyb20gJy4uL21vZGVscy9kYXRhLXRhYmxlLXNjcm9sbC1wb2ludC5tb2RlbCc7XG5cbi8qKlxuICogU2Nyb2xsIHBvc2l0aW9uIGRpcmVjdGl2ZS5cbiAqIFRyYWNrIGN1cnJlbnQgc2Nyb2xsIHBvc2l0aW9uIG9mIHRhcmdldCBlbGVtZW50LlxuICovXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbbmdTY3JvbGxQb3NpdGlvbl0nXG59KVxuZXhwb3J0IGNsYXNzIFNjcm9sbFBvc2l0aW9uRGlyZWN0aXZlIGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95IHtcbiAgcHJpdmF0ZSBzY3JvbGxFdmVudFN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBuZ1Njcm9sbFBvc2l0aW9uOiBTdWJqZWN0PERhdGFUYWJsZVNjcm9sbFBvaW50PjtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsOiBFbGVtZW50UmVmLCBwcml2YXRlIHpvbmU6IE5nWm9uZSkge31cblxuICAvKipcbiAgICogQWZ0ZXIgY29tcG9uZW50IGluaXRpYWxpemUgbGlmZWN5Y2xlIGV2ZW50IGhhbmRsZXIuXG4gICAqL1xuICBwdWJsaWMgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgIHRoaXMuem9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XG4gICAgICB0aGlzLnNjcm9sbEV2ZW50U3Vic2NyaXB0aW9uID0gZnJvbUV2ZW50KHRoaXMuZWwubmF0aXZlRWxlbWVudCwgJ3Njcm9sbCcpXG4gICAgICAgIC5waXBlKFxuICAgICAgICAgIG1hcCgoKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICBzY3JvbGxMZWZ0OiB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuc2Nyb2xsTGVmdCxcbiAgICAgICAgICAgICAgc2Nyb2xsVG9wOiB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuc2Nyb2xsVG9wLFxuICAgICAgICAgICAgICBzY3JvbGxIZWlnaHQ6IHRoaXMuZWwubmF0aXZlRWxlbWVudC5zY3JvbGxIZWlnaHQsXG4gICAgICAgICAgICAgIHNjcm9sbFdpZHRoOiB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuc2Nyb2xsV2lkdGgsXG4gICAgICAgICAgICAgIGNsaWVudEhlaWdodDogdGhpcy5lbC5uYXRpdmVFbGVtZW50LmNsaWVudEhlaWdodCxcbiAgICAgICAgICAgICAgY2xpZW50V2lkdGg6IHRoaXMuZWwubmF0aXZlRWxlbWVudC5jbGllbnRXaWR0aCxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgfSksXG4gICAgICAgICAgcGFpcndpc2UoKSxcbiAgICAgICAgICBtYXAoKHBhaXI6IERhdGFUYWJsZVNjcm9sbFBvaW50W10pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IFsgcHJldmlvdXMsIGN1cnJlbnQgXSA9IHBhaXI7XG5cbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgIC4uLmN1cnJlbnQsXG4gICAgICAgICAgICAgIGlzSG9yaXpvbnRhbDogcHJldmlvdXMuc2Nyb2xsTGVmdCAhPT0gY3VycmVudC5zY3JvbGxMZWZ0LFxuICAgICAgICAgICAgICBpc1ZlcnRpY2FsOiBwcmV2aW91cy5zY3JvbGxUb3AgIT09IGN1cnJlbnQuc2Nyb2xsVG9wXG4gICAgICAgICAgICB9O1xuICAgICAgICAgIH0pXG4gICAgICAgIClcbiAgICAgICAgLnN1YnNjcmliZSgocG9zOiBEYXRhVGFibGVTY3JvbGxQb2ludCkgPT4ge1xuICAgICAgICAgIHRoaXMubmdTY3JvbGxQb3NpdGlvbi5uZXh0KHBvcyk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIENvbXBvbmVudCBkZXN0cm95IGxpZmVjeWNsZSBldmVudCBoYW5kbGVyLlxuICAgKi9cbiAgcHVibGljIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnNjcm9sbEV2ZW50U3Vic2NyaXB0aW9uKSB7XG4gICAgICB0aGlzLnNjcm9sbEV2ZW50U3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuXG4gICAgdGhpcy5uZ1Njcm9sbFBvc2l0aW9uLmNvbXBsZXRlKCk7XG4gIH1cbn1cbiJdfQ==