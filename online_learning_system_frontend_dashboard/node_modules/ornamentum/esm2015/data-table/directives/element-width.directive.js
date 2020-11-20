/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, ElementRef, EventEmitter, Output } from '@angular/core';
/**
 * Element width directive.
 * Used to emit target element width after view init.
 */
export class ElementWidthDirective {
    /**
     * @param {?} el
     */
    constructor(el) {
        this.el = el;
        this.ngElementWidth = new EventEmitter();
    }
    /**
     * After component view initialize lifecycle event handler.
     * @return {?}
     */
    ngAfterViewInit() {
        this.ngElementWidth.emit(this.el.nativeElement.clientWidth);
    }
}
ElementWidthDirective.decorators = [
    { type: Directive, args: [{
                selector: '[ngElementWidth]'
            },] }
];
/** @nocollapse */
ElementWidthDirective.ctorParameters = () => [
    { type: ElementRef }
];
ElementWidthDirective.propDecorators = {
    ngElementWidth: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    ElementWidthDirective.prototype.ngElementWidth;
    /**
     * @type {?}
     * @private
     */
    ElementWidthDirective.prototype.el;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWxlbWVudC13aWR0aC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9vcm5hbWVudHVtLyIsInNvdXJjZXMiOlsiZGF0YS10YWJsZS9kaXJlY3RpdmVzL2VsZW1lbnQtd2lkdGguZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQWlCLFNBQVMsRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQzs7Ozs7QUFTM0YsTUFBTSxPQUFPLHFCQUFxQjs7OztJQUloQyxZQUFvQixFQUFjO1FBQWQsT0FBRSxHQUFGLEVBQUUsQ0FBWTtRQUYzQixtQkFBYyxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7SUFFTixDQUFDOzs7OztJQUsvQixlQUFlO1FBQ3BCLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQzlELENBQUM7OztZQWRGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsa0JBQWtCO2FBQzdCOzs7O1lBUmtDLFVBQVU7Ozs2QkFVMUMsTUFBTTs7OztJQUFQLCtDQUMyQzs7Ozs7SUFFL0IsbUNBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWZ0ZXJWaWV3SW5pdCwgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKipcbiAqIEVsZW1lbnQgd2lkdGggZGlyZWN0aXZlLlxuICogVXNlZCB0byBlbWl0IHRhcmdldCBlbGVtZW50IHdpZHRoIGFmdGVyIHZpZXcgaW5pdC5cbiAqL1xuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW25nRWxlbWVudFdpZHRoXSdcbn0pXG5leHBvcnQgY2xhc3MgRWxlbWVudFdpZHRoRGlyZWN0aXZlIGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XG4gIEBPdXRwdXQoKVxuICBwdWJsaWMgbmdFbGVtZW50V2lkdGggPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbDogRWxlbWVudFJlZikge31cblxuICAvKipcbiAgICogQWZ0ZXIgY29tcG9uZW50IHZpZXcgaW5pdGlhbGl6ZSBsaWZlY3ljbGUgZXZlbnQgaGFuZGxlci5cbiAgICovXG4gIHB1YmxpYyBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgdGhpcy5uZ0VsZW1lbnRXaWR0aC5lbWl0KHRoaXMuZWwubmF0aXZlRWxlbWVudC5jbGllbnRXaWR0aCk7XG4gIH1cbn1cbiJdfQ==