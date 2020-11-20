/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, ElementRef, EventEmitter, Output } from '@angular/core';
/**
 * Element width directive.
 * Used to emit target element width after view init.
 */
var ElementWidthDirective = /** @class */ (function () {
    function ElementWidthDirective(el) {
        this.el = el;
        this.ngElementWidth = new EventEmitter();
    }
    /**
     * After component view initialize lifecycle event handler.
     */
    /**
     * After component view initialize lifecycle event handler.
     * @return {?}
     */
    ElementWidthDirective.prototype.ngAfterViewInit = /**
     * After component view initialize lifecycle event handler.
     * @return {?}
     */
    function () {
        this.ngElementWidth.emit(this.el.nativeElement.clientWidth);
    };
    ElementWidthDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[ngElementWidth]'
                },] }
    ];
    /** @nocollapse */
    ElementWidthDirective.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    ElementWidthDirective.propDecorators = {
        ngElementWidth: [{ type: Output }]
    };
    return ElementWidthDirective;
}());
export { ElementWidthDirective };
if (false) {
    /** @type {?} */
    ElementWidthDirective.prototype.ngElementWidth;
    /**
     * @type {?}
     * @private
     */
    ElementWidthDirective.prototype.el;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWxlbWVudC13aWR0aC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9vcm5hbWVudHVtLyIsInNvdXJjZXMiOlsiZGF0YS10YWJsZS9kaXJlY3RpdmVzL2VsZW1lbnQtd2lkdGguZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQWlCLFNBQVMsRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQzs7Ozs7QUFNM0Y7SUFPRSwrQkFBb0IsRUFBYztRQUFkLE9BQUUsR0FBRixFQUFFLENBQVk7UUFGM0IsbUJBQWMsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO0lBRU4sQ0FBQztJQUV0Qzs7T0FFRzs7Ozs7SUFDSSwrQ0FBZTs7OztJQUF0QjtRQUNFLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQzlELENBQUM7O2dCQWRGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsa0JBQWtCO2lCQUM3Qjs7OztnQkFSa0MsVUFBVTs7O2lDQVUxQyxNQUFNOztJQVdULDRCQUFDO0NBQUEsQUFmRCxJQWVDO1NBWlkscUJBQXFCOzs7SUFDaEMsK0NBQzJDOzs7OztJQUUvQixtQ0FBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZnRlclZpZXdJbml0LCBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIEV2ZW50RW1pdHRlciwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKlxuICogRWxlbWVudCB3aWR0aCBkaXJlY3RpdmUuXG4gKiBVc2VkIHRvIGVtaXQgdGFyZ2V0IGVsZW1lbnQgd2lkdGggYWZ0ZXIgdmlldyBpbml0LlxuICovXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbbmdFbGVtZW50V2lkdGhdJ1xufSlcbmV4cG9ydCBjbGFzcyBFbGVtZW50V2lkdGhEaXJlY3RpdmUgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcbiAgQE91dHB1dCgpXG4gIHB1YmxpYyBuZ0VsZW1lbnRXaWR0aCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsOiBFbGVtZW50UmVmKSB7fVxuXG4gIC8qKlxuICAgKiBBZnRlciBjb21wb25lbnQgdmlldyBpbml0aWFsaXplIGxpZmVjeWNsZSBldmVudCBoYW5kbGVyLlxuICAgKi9cbiAgcHVibGljIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLm5nRWxlbWVudFdpZHRoLmVtaXQodGhpcy5lbC5uYXRpdmVFbGVtZW50LmNsaWVudFdpZHRoKTtcbiAgfVxufVxuIl19