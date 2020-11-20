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
var ScrollElementDirective = /** @class */ (function () {
    function ScrollElementDirective(el) {
        this.el = el;
    }
    /**
     * After component initialize lifecycle event handler.
     */
    /**
     * After component initialize lifecycle event handler.
     * @return {?}
     */
    ScrollElementDirective.prototype.ngAfterViewInit = /**
     * After component initialize lifecycle event handler.
     * @return {?}
     */
    function () {
        var _this = this;
        this.scrollPositionSubscription = this.ngScrollElement.subscribe((/**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            _this.el.nativeElement.scrollLeft = value.scrollLeft;
        }));
    };
    /**
     * Component destroy lifecycle event handler.
     */
    /**
     * Component destroy lifecycle event handler.
     * @return {?}
     */
    ScrollElementDirective.prototype.ngOnDestroy = /**
     * Component destroy lifecycle event handler.
     * @return {?}
     */
    function () {
        if (this.scrollPositionSubscription) {
            this.scrollPositionSubscription.unsubscribe();
        }
    };
    ScrollElementDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[ngScrollElement]'
                },] }
    ];
    /** @nocollapse */
    ScrollElementDirective.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    ScrollElementDirective.propDecorators = {
        ngScrollElement: [{ type: Input }]
    };
    return ScrollElementDirective;
}());
export { ScrollElementDirective };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Nyb2xsLWVsZW1lbnQuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vb3JuYW1lbnR1bS8iLCJzb3VyY2VzIjpbImRhdGEtdGFibGUvZGlyZWN0aXZlcy9zY3JvbGwtZWxlbWVudC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBaUIsU0FBUyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQWEsTUFBTSxlQUFlLENBQUM7QUFFdkYsT0FBTyxFQUFnQixPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7Ozs7O0FBUTdDO0lBU0UsZ0NBQW9CLEVBQWM7UUFBZCxPQUFFLEdBQUYsRUFBRSxDQUFZO0lBQUcsQ0FBQztJQUV0Qzs7T0FFRzs7Ozs7SUFDSSxnREFBZTs7OztJQUF0QjtRQUFBLGlCQUlDO1FBSEMsSUFBSSxDQUFDLDBCQUEwQixHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsU0FBUzs7OztRQUFDLFVBQUEsS0FBSztZQUNwRSxLQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDLFVBQVUsQ0FBQztRQUN0RCxDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7SUFFRDs7T0FFRzs7Ozs7SUFDSSw0Q0FBVzs7OztJQUFsQjtRQUNFLElBQUksSUFBSSxDQUFDLDBCQUEwQixFQUFFO1lBQ25DLElBQUksQ0FBQywwQkFBMEIsQ0FBQyxXQUFXLEVBQUUsQ0FBQztTQUMvQztJQUNILENBQUM7O2dCQTNCRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLG1CQUFtQjtpQkFDOUI7Ozs7Z0JBWmtDLFVBQVU7OztrQ0FnQjFDLEtBQUs7O0lBc0JSLDZCQUFDO0NBQUEsQUE1QkQsSUE0QkM7U0F6Qlksc0JBQXNCOzs7Ozs7SUFDakMsNERBQWlEOztJQUVqRCxpREFDc0Q7Ozs7O0lBRTFDLG9DQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFmdGVyVmlld0luaXQsIERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgSW5wdXQsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBTdWJzY3JpcHRpb24sIFN1YmplY3QgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgRGF0YVRhYmxlU2Nyb2xsUG9pbnQgfSBmcm9tICcuLi9tb2RlbHMvZGF0YS10YWJsZS1zY3JvbGwtcG9pbnQubW9kZWwnO1xuXG4vKipcbiAqIFNjcm9sbCBlbGVtZW50IGRpcmVjdGl2ZS5cbiAqIFVzZWQgdG8gc2V0IHNjcm9sbCBwb3NpdGlvbiB0byB0YXJnZXQgZWxlbWVudC5cbiAqL1xuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW25nU2Nyb2xsRWxlbWVudF0nXG59KVxuZXhwb3J0IGNsYXNzIFNjcm9sbEVsZW1lbnREaXJlY3RpdmUgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3kge1xuICBwcml2YXRlIHNjcm9sbFBvc2l0aW9uU3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XG5cbiAgQElucHV0KClcbiAgcHVibGljIG5nU2Nyb2xsRWxlbWVudDogU3ViamVjdDxEYXRhVGFibGVTY3JvbGxQb2ludD47XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbDogRWxlbWVudFJlZikge31cblxuICAvKipcbiAgICogQWZ0ZXIgY29tcG9uZW50IGluaXRpYWxpemUgbGlmZWN5Y2xlIGV2ZW50IGhhbmRsZXIuXG4gICAqL1xuICBwdWJsaWMgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgIHRoaXMuc2Nyb2xsUG9zaXRpb25TdWJzY3JpcHRpb24gPSB0aGlzLm5nU2Nyb2xsRWxlbWVudC5zdWJzY3JpYmUodmFsdWUgPT4ge1xuICAgICAgdGhpcy5lbC5uYXRpdmVFbGVtZW50LnNjcm9sbExlZnQgPSB2YWx1ZS5zY3JvbGxMZWZ0O1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIENvbXBvbmVudCBkZXN0cm95IGxpZmVjeWNsZSBldmVudCBoYW5kbGVyLlxuICAgKi9cbiAgcHVibGljIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnNjcm9sbFBvc2l0aW9uU3Vic2NyaXB0aW9uKSB7XG4gICAgICB0aGlzLnNjcm9sbFBvc2l0aW9uU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuICB9XG59XG4iXX0=