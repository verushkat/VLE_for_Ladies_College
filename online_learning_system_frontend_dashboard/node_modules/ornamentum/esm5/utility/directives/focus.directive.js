/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, ElementRef } from '@angular/core';
/**
 * Element focus directive; Set focus to target element on initialize.
 */
var FocusDirective = /** @class */ (function () {
    function FocusDirective(el) {
        this.el = el;
    }
    /**
     * On directive initialize.
     */
    /**
     * On directive initialize.
     * @return {?}
     */
    FocusDirective.prototype.ngOnInit = /**
     * On directive initialize.
     * @return {?}
     */
    function () {
        this.el.nativeElement.focus();
    };
    FocusDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[ngFocus]'
                },] }
    ];
    /** @nocollapse */
    FocusDirective.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    return FocusDirective;
}());
export { FocusDirective };
if (false) {
    /**
     * @type {?}
     * @private
     */
    FocusDirective.prototype.el;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9jdXMuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vb3JuYW1lbnR1bS8iLCJzb3VyY2VzIjpbInV0aWxpdHkvZGlyZWN0aXZlcy9mb2N1cy5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFVLE1BQU0sZUFBZSxDQUFDOzs7O0FBSzlEO0lBSUUsd0JBQW9CLEVBQWM7UUFBZCxPQUFFLEdBQUYsRUFBRSxDQUFZO0lBQUcsQ0FBQztJQUV0Qzs7T0FFRzs7Ozs7SUFDSSxpQ0FBUTs7OztJQUFmO1FBQ0UsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDaEMsQ0FBQzs7Z0JBWEYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxXQUFXO2lCQUN0Qjs7OztnQkFQbUIsVUFBVTs7SUFpQjlCLHFCQUFDO0NBQUEsQUFaRCxJQVlDO1NBVFksY0FBYzs7Ozs7O0lBQ2IsNEJBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqXG4gKiBFbGVtZW50IGZvY3VzIGRpcmVjdGl2ZTsgU2V0IGZvY3VzIHRvIHRhcmdldCBlbGVtZW50IG9uIGluaXRpYWxpemUuXG4gKi9cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tuZ0ZvY3VzXSdcbn0pXG5leHBvcnQgY2xhc3MgRm9jdXNEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsOiBFbGVtZW50UmVmKSB7fVxuXG4gIC8qKlxuICAgKiBPbiBkaXJlY3RpdmUgaW5pdGlhbGl6ZS5cbiAgICovXG4gIHB1YmxpYyBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcbiAgfVxufVxuIl19