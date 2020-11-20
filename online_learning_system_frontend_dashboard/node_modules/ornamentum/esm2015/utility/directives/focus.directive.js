/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, ElementRef } from '@angular/core';
/**
 * Element focus directive; Set focus to target element on initialize.
 */
export class FocusDirective {
    /**
     * @param {?} el
     */
    constructor(el) {
        this.el = el;
    }
    /**
     * On directive initialize.
     * @return {?}
     */
    ngOnInit() {
        this.el.nativeElement.focus();
    }
}
FocusDirective.decorators = [
    { type: Directive, args: [{
                selector: '[ngFocus]'
            },] }
];
/** @nocollapse */
FocusDirective.ctorParameters = () => [
    { type: ElementRef }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    FocusDirective.prototype.el;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9jdXMuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vb3JuYW1lbnR1bS8iLCJzb3VyY2VzIjpbInV0aWxpdHkvZGlyZWN0aXZlcy9mb2N1cy5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFVLE1BQU0sZUFBZSxDQUFDOzs7O0FBUTlELE1BQU0sT0FBTyxjQUFjOzs7O0lBQ3pCLFlBQW9CLEVBQWM7UUFBZCxPQUFFLEdBQUYsRUFBRSxDQUFZO0lBQUcsQ0FBQzs7Ozs7SUFLL0IsUUFBUTtRQUNiLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ2hDLENBQUM7OztZQVhGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsV0FBVzthQUN0Qjs7OztZQVBtQixVQUFVOzs7Ozs7O0lBU2hCLDRCQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKlxuICogRWxlbWVudCBmb2N1cyBkaXJlY3RpdmU7IFNldCBmb2N1cyB0byB0YXJnZXQgZWxlbWVudCBvbiBpbml0aWFsaXplLlxuICovXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbbmdGb2N1c10nXG59KVxuZXhwb3J0IGNsYXNzIEZvY3VzRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0IHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbDogRWxlbWVudFJlZikge31cblxuICAvKipcbiAgICogT24gZGlyZWN0aXZlIGluaXRpYWxpemUuXG4gICAqL1xuICBwdWJsaWMgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5lbC5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XG4gIH1cbn1cbiJdfQ==