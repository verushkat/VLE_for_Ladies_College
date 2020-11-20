/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, EventEmitter, Output } from '@angular/core';
/**
 * Element initialize directive; Notify on target element initialize.
 */
var InitDirective = /** @class */ (function () {
    function InitDirective() {
        this.ngInit = new EventEmitter();
    }
    /**
     * On directive initialize.
     */
    /**
     * On directive initialize.
     * @return {?}
     */
    InitDirective.prototype.ngOnInit = /**
     * On directive initialize.
     * @return {?}
     */
    function () {
        this.ngInit.emit();
    };
    InitDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[ngInit]'
                },] }
    ];
    InitDirective.propDecorators = {
        ngInit: [{ type: Output }]
    };
    return InitDirective;
}());
export { InitDirective };
if (false) {
    /** @type {?} */
    InitDirective.prototype.ngInit;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5pdC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9vcm5hbWVudHVtLyIsInNvdXJjZXMiOlsidXRpbGl0eS9kaXJlY3RpdmVzL2luaXQuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBVSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7QUFLeEU7SUFBQTtRQUtTLFdBQU0sR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO0lBUXJDLENBQUM7SUFOQzs7T0FFRzs7Ozs7SUFDSSxnQ0FBUTs7OztJQUFmO1FBQ0UsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNyQixDQUFDOztnQkFaRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLFVBQVU7aUJBQ3JCOzs7eUJBRUUsTUFBTTs7SUFTVCxvQkFBQztDQUFBLEFBYkQsSUFhQztTQVZZLGFBQWE7OztJQUN4QiwrQkFDbUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEV2ZW50RW1pdHRlciwgT25Jbml0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqXG4gKiBFbGVtZW50IGluaXRpYWxpemUgZGlyZWN0aXZlOyBOb3RpZnkgb24gdGFyZ2V0IGVsZW1lbnQgaW5pdGlhbGl6ZS5cbiAqL1xuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW25nSW5pdF0nXG59KVxuZXhwb3J0IGNsYXNzIEluaXREaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQge1xuICBAT3V0cHV0KClcbiAgcHVibGljIG5nSW5pdCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAvKipcbiAgICogT24gZGlyZWN0aXZlIGluaXRpYWxpemUuXG4gICAqL1xuICBwdWJsaWMgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5uZ0luaXQuZW1pdCgpO1xuICB9XG59XG4iXX0=