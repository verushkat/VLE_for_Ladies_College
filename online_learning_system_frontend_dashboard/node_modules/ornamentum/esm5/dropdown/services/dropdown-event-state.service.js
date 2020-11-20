/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { EventEmitter, Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
/**
 * Dropdown event state service; Manage dropdown event handler state.
 */
var DropdownEventStateService = /** @class */ (function () {
    function DropdownEventStateService() {
        this.dataFetchStream = new EventEmitter();
        this.dataBoundStream = new EventEmitter();
        this.selectChangeStream = new EventEmitter();
        this.initStream = new EventEmitter();
        this.staticDataSourceStream = new ReplaySubject(1);
    }
    DropdownEventStateService.decorators = [
        { type: Injectable }
    ];
    return DropdownEventStateService;
}());
export { DropdownEventStateService };
if (false) {
    /** @type {?} */
    DropdownEventStateService.prototype.dataFetchStream;
    /** @type {?} */
    DropdownEventStateService.prototype.dataBoundStream;
    /** @type {?} */
    DropdownEventStateService.prototype.selectChangeStream;
    /** @type {?} */
    DropdownEventStateService.prototype.initStream;
    /** @type {?} */
    DropdownEventStateService.prototype.staticDataSourceStream;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcGRvd24tZXZlbnQtc3RhdGUuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL29ybmFtZW50dW0vIiwic291cmNlcyI6WyJkcm9wZG93bi9zZXJ2aWNlcy9kcm9wZG93bi1ldmVudC1zdGF0ZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV6RCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sTUFBTSxDQUFDOzs7O0FBT3JDO0lBQUE7UUFFUyxvQkFBZSxHQUFHLElBQUksWUFBWSxFQUFXLENBQUM7UUFDOUMsb0JBQWUsR0FBRyxJQUFJLFlBQVksRUFBUSxDQUFDO1FBQzNDLHVCQUFrQixHQUFHLElBQUksWUFBWSxFQUFlLENBQUM7UUFDckQsZUFBVSxHQUFHLElBQUksWUFBWSxFQUFxQixDQUFDO1FBQ25ELDJCQUFzQixHQUFHLElBQUksYUFBYSxDQUFRLENBQUMsQ0FBQyxDQUFDO0lBQzlELENBQUM7O2dCQVBBLFVBQVU7O0lBT1gsZ0NBQUM7Q0FBQSxBQVBELElBT0M7U0FOWSx5QkFBeUI7OztJQUNwQyxvREFBcUQ7O0lBQ3JELG9EQUFrRDs7SUFDbEQsdURBQTREOztJQUM1RCwrQ0FBMEQ7O0lBQzFELDJEQUE0RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEV2ZW50RW1pdHRlciwgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBSZXBsYXlTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IERyb3Bkb3duQ29tcG9uZW50IH0gZnJvbSAnLi4vY29tcG9uZW50cy9kcm9wZG93bi9kcm9wZG93bi5jb21wb25lbnQnO1xuXG4vKipcbiAqIERyb3Bkb3duIGV2ZW50IHN0YXRlIHNlcnZpY2U7IE1hbmFnZSBkcm9wZG93biBldmVudCBoYW5kbGVyIHN0YXRlLlxuICovXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRHJvcGRvd25FdmVudFN0YXRlU2VydmljZSB7XG4gIHB1YmxpYyBkYXRhRmV0Y2hTdHJlYW0gPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XG4gIHB1YmxpYyBkYXRhQm91bmRTdHJlYW0gPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XG4gIHB1YmxpYyBzZWxlY3RDaGFuZ2VTdHJlYW0gPSBuZXcgRXZlbnRFbWl0dGVyPGFueVtdIHwgYW55PigpO1xuICBwdWJsaWMgaW5pdFN0cmVhbSA9IG5ldyBFdmVudEVtaXR0ZXI8RHJvcGRvd25Db21wb25lbnQ+KCk7XG4gIHB1YmxpYyBzdGF0aWNEYXRhU291cmNlU3RyZWFtID0gbmV3IFJlcGxheVN1YmplY3Q8YW55W10+KDEpO1xufVxuIl19