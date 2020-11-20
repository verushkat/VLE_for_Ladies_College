/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, ElementRef, Input } from '@angular/core';
import { Subject } from 'rxjs';
/**
 * Scroll element directive.
 * Used to set scroll position to target element.
 */
export class ScrollElementDirective {
    /**
     * @param {?} el
     */
    constructor(el) {
        this.el = el;
    }
    /**
     * After component initialize lifecycle event handler.
     * @return {?}
     */
    ngAfterViewInit() {
        this.scrollPositionSubscription = this.ngScrollElement.subscribe((/**
         * @param {?} value
         * @return {?}
         */
        value => {
            this.el.nativeElement.scrollLeft = value.scrollLeft;
        }));
    }
    /**
     * Component destroy lifecycle event handler.
     * @return {?}
     */
    ngOnDestroy() {
        if (this.scrollPositionSubscription) {
            this.scrollPositionSubscription.unsubscribe();
        }
    }
}
ScrollElementDirective.decorators = [
    { type: Directive, args: [{
                selector: '[ngScrollElement]'
            },] }
];
/** @nocollapse */
ScrollElementDirective.ctorParameters = () => [
    { type: ElementRef }
];
ScrollElementDirective.propDecorators = {
    ngScrollElement: [{ type: Input }]
};
if (false) {
    /**
     * @type {?}
     * @private
     */
    ScrollElementDirective.prototype.scrollPositionSubscription;
    /** @type {?} */
    ScrollElementDirective.prototype.ngScrollElement;
    /**
     * @type {?}
     * @private
     */
    ScrollElementDirective.prototype.el;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Nyb2xsLWVsZW1lbnQuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vb3JuYW1lbnR1bS8iLCJzb3VyY2VzIjpbImRhdGEtdGFibGUvZGlyZWN0aXZlcy9zY3JvbGwtZWxlbWVudC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBaUIsU0FBUyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQWEsTUFBTSxlQUFlLENBQUM7QUFFdkYsT0FBTyxFQUFnQixPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7Ozs7O0FBVzdDLE1BQU0sT0FBTyxzQkFBc0I7Ozs7SUFNakMsWUFBb0IsRUFBYztRQUFkLE9BQUUsR0FBRixFQUFFLENBQVk7SUFBRyxDQUFDOzs7OztJQUsvQixlQUFlO1FBQ3BCLElBQUksQ0FBQywwQkFBMEIsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLFNBQVM7Ozs7UUFBQyxLQUFLLENBQUMsRUFBRTtZQUN2RSxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDLFVBQVUsQ0FBQztRQUN0RCxDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7O0lBS00sV0FBVztRQUNoQixJQUFJLElBQUksQ0FBQywwQkFBMEIsRUFBRTtZQUNuQyxJQUFJLENBQUMsMEJBQTBCLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDL0M7SUFDSCxDQUFDOzs7WUEzQkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxtQkFBbUI7YUFDOUI7Ozs7WUFaa0MsVUFBVTs7OzhCQWdCMUMsS0FBSzs7Ozs7OztJQUZOLDREQUFpRDs7SUFFakQsaURBQ3NEOzs7OztJQUUxQyxvQ0FBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZnRlclZpZXdJbml0LCBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIElucHV0LCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgU3Vic2NyaXB0aW9uLCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IERhdGFUYWJsZVNjcm9sbFBvaW50IH0gZnJvbSAnLi4vbW9kZWxzL2RhdGEtdGFibGUtc2Nyb2xsLXBvaW50Lm1vZGVsJztcblxuLyoqXG4gKiBTY3JvbGwgZWxlbWVudCBkaXJlY3RpdmUuXG4gKiBVc2VkIHRvIHNldCBzY3JvbGwgcG9zaXRpb24gdG8gdGFyZ2V0IGVsZW1lbnQuXG4gKi9cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tuZ1Njcm9sbEVsZW1lbnRdJ1xufSlcbmV4cG9ydCBjbGFzcyBTY3JvbGxFbGVtZW50RGlyZWN0aXZlIGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95IHtcbiAgcHJpdmF0ZSBzY3JvbGxQb3NpdGlvblN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBuZ1Njcm9sbEVsZW1lbnQ6IFN1YmplY3Q8RGF0YVRhYmxlU2Nyb2xsUG9pbnQ+O1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWw6IEVsZW1lbnRSZWYpIHt9XG5cbiAgLyoqXG4gICAqIEFmdGVyIGNvbXBvbmVudCBpbml0aWFsaXplIGxpZmVjeWNsZSBldmVudCBoYW5kbGVyLlxuICAgKi9cbiAgcHVibGljIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnNjcm9sbFBvc2l0aW9uU3Vic2NyaXB0aW9uID0gdGhpcy5uZ1Njcm9sbEVsZW1lbnQuc3Vic2NyaWJlKHZhbHVlID0+IHtcbiAgICAgIHRoaXMuZWwubmF0aXZlRWxlbWVudC5zY3JvbGxMZWZ0ID0gdmFsdWUuc2Nyb2xsTGVmdDtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb21wb25lbnQgZGVzdHJveSBsaWZlY3ljbGUgZXZlbnQgaGFuZGxlci5cbiAgICovXG4gIHB1YmxpYyBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5zY3JvbGxQb3NpdGlvblN1YnNjcmlwdGlvbikge1xuICAgICAgdGhpcy5zY3JvbGxQb3NpdGlvblN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgIH1cbiAgfVxufVxuIl19