/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { fromEvent, Subject } from 'rxjs';
import { GlobalRefService } from './global-ref.service';
/**
 * Resize handler service; Window resize global event handler.
 */
export class ResizeService {
    /**
     * @param {?} globalRefService
     */
    constructor(globalRefService) {
        this.globalRefService = globalRefService;
        if (this.globalRefService.isBrowser) {
            this.resize = fromEvent(this.globalRefService.window, 'resize');
        }
        else {
            this.resize = new Subject();
        }
    }
}
ResizeService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
ResizeService.ctorParameters = () => [
    { type: GlobalRefService }
];
if (false) {
    /** @type {?} */
    ResizeService.prototype.resize;
    /**
     * @type {?}
     * @private
     */
    ResizeService.prototype.globalRefService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzaXplLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9vcm5hbWVudHVtLyIsInNvdXJjZXMiOlsidXRpbGl0eS9zZXJ2aWNlcy9yZXNpemUuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsU0FBUyxFQUFFLE9BQU8sRUFBYyxNQUFNLE1BQU0sQ0FBQztBQUV0RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQzs7OztBQU14RCxNQUFNLE9BQU8sYUFBYTs7OztJQUd4QixZQUFvQixnQkFBa0M7UUFBbEMscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUNwRCxJQUFJLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLEVBQUU7WUFDbkMsSUFBSSxDQUFDLE1BQU0sR0FBRyxTQUFTLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sRUFBRSxRQUFRLENBQUMsQ0FBQztTQUNqRTthQUFNO1lBQ0wsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLE9BQU8sRUFBRSxDQUFDO1NBQzdCO0lBQ0gsQ0FBQzs7O1lBVkYsVUFBVTs7OztZQUxGLGdCQUFnQjs7OztJQU92QiwrQkFBaUM7Ozs7O0lBRXJCLHlDQUEwQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgZnJvbUV2ZW50LCBTdWJqZWN0LCBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IEdsb2JhbFJlZlNlcnZpY2UgfSBmcm9tICcuL2dsb2JhbC1yZWYuc2VydmljZSc7XG5cbi8qKlxuICogUmVzaXplIGhhbmRsZXIgc2VydmljZTsgV2luZG93IHJlc2l6ZSBnbG9iYWwgZXZlbnQgaGFuZGxlci5cbiAqL1xuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFJlc2l6ZVNlcnZpY2Uge1xuICBwdWJsaWMgcmVzaXplOiBPYnNlcnZhYmxlPEV2ZW50PjtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGdsb2JhbFJlZlNlcnZpY2U6IEdsb2JhbFJlZlNlcnZpY2UpIHtcbiAgICBpZiAodGhpcy5nbG9iYWxSZWZTZXJ2aWNlLmlzQnJvd3Nlcikge1xuICAgICAgdGhpcy5yZXNpemUgPSBmcm9tRXZlbnQodGhpcy5nbG9iYWxSZWZTZXJ2aWNlLndpbmRvdywgJ3Jlc2l6ZScpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnJlc2l6ZSA9IG5ldyBTdWJqZWN0KCk7XG4gICAgfVxuICB9XG59XG4iXX0=