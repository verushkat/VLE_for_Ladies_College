/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ApplicationRef, ComponentFactoryResolver, Injectable } from '@angular/core';
import { GlobalRefService } from './global-ref.service';
import { ResizeService } from './resize.service';
import { PopoverComponentLoader } from './popover-component-loader.class';
/**
 * Popover component loader factory service.
 */
export class PopoverComponentLoaderFactoryService {
    /**
     * @param {?} componentFactoryResolver
     * @param {?} appRef
     * @param {?} globalRefService
     * @param {?} resizeService
     */
    constructor(componentFactoryResolver, appRef, globalRefService, resizeService) {
        this.componentFactoryResolver = componentFactoryResolver;
        this.appRef = appRef;
        this.globalRefService = globalRefService;
        this.resizeService = resizeService;
    }
    /**
     * Create new component loader.
     * @template T
     * @param {?} renderer Angular renderer reference.
     * @return {?} Popover component loader reference.
     */
    createLoader(renderer) {
        return new PopoverComponentLoader(this.componentFactoryResolver, this.appRef, this.globalRefService, renderer, this.resizeService);
    }
}
PopoverComponentLoaderFactoryService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
PopoverComponentLoaderFactoryService.ctorParameters = () => [
    { type: ComponentFactoryResolver },
    { type: ApplicationRef },
    { type: GlobalRefService },
    { type: ResizeService }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    PopoverComponentLoaderFactoryService.prototype.componentFactoryResolver;
    /**
     * @type {?}
     * @private
     */
    PopoverComponentLoaderFactoryService.prototype.appRef;
    /**
     * @type {?}
     * @private
     */
    PopoverComponentLoaderFactoryService.prototype.globalRefService;
    /**
     * @type {?}
     * @private
     */
    PopoverComponentLoaderFactoryService.prototype.resizeService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9wb3Zlci1jb21wb25lbnQtbG9hZGVyLWZhY3Rvcnkuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL29ybmFtZW50dW0vIiwic291cmNlcyI6WyJ1dGlsaXR5L3NlcnZpY2VzL3BvcG92ZXItY29tcG9uZW50LWxvYWRlci1mYWN0b3J5LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxjQUFjLEVBQUUsd0JBQXdCLEVBQUUsVUFBVSxFQUFhLE1BQU0sZUFBZSxDQUFDO0FBSWhHLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUVqRCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQzs7OztBQU0xRSxNQUFNLE9BQU8sb0NBQW9DOzs7Ozs7O0lBQy9DLFlBQ1Usd0JBQWtELEVBQ2xELE1BQXNCLEVBQ3RCLGdCQUFrQyxFQUNsQyxhQUE0QjtRQUg1Qiw2QkFBd0IsR0FBeEIsd0JBQXdCLENBQTBCO1FBQ2xELFdBQU0sR0FBTixNQUFNLENBQWdCO1FBQ3RCLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFDbEMsa0JBQWEsR0FBYixhQUFhLENBQWU7SUFDbkMsQ0FBQzs7Ozs7OztJQU9HLFlBQVksQ0FBSSxRQUFtQjtRQUN4QyxPQUFPLElBQUksc0JBQXNCLENBQUksSUFBSSxDQUFDLHdCQUF3QixFQUFFLElBQUksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLGdCQUFnQixFQUFFLFFBQVEsRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDeEksQ0FBQzs7O1lBaEJGLFVBQVU7Ozs7WUFaYyx3QkFBd0I7WUFBeEMsY0FBYztZQUlkLGdCQUFnQjtZQUNoQixhQUFhOzs7Ozs7O0lBVWxCLHdFQUEwRDs7Ozs7SUFDMUQsc0RBQThCOzs7OztJQUM5QixnRUFBMEM7Ozs7O0lBQzFDLDZEQUFvQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcGxpY2F0aW9uUmVmLCBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsIEluamVjdGFibGUsIFJlbmRlcmVyMiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBDb21wb25lbnRMb2FkZXIgfSBmcm9tICcuL2NvbXBvbmVudC1sb2FkZXIuaW50ZXJmYWNlJztcblxuaW1wb3J0IHsgR2xvYmFsUmVmU2VydmljZSB9IGZyb20gJy4vZ2xvYmFsLXJlZi5zZXJ2aWNlJztcbmltcG9ydCB7IFJlc2l6ZVNlcnZpY2UgfSBmcm9tICcuL3Jlc2l6ZS5zZXJ2aWNlJztcblxuaW1wb3J0IHsgUG9wb3ZlckNvbXBvbmVudExvYWRlciB9IGZyb20gJy4vcG9wb3Zlci1jb21wb25lbnQtbG9hZGVyLmNsYXNzJztcblxuLyoqXG4gKiBQb3BvdmVyIGNvbXBvbmVudCBsb2FkZXIgZmFjdG9yeSBzZXJ2aWNlLlxuICovXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgUG9wb3ZlckNvbXBvbmVudExvYWRlckZhY3RvcnlTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBjb21wb25lbnRGYWN0b3J5UmVzb2x2ZXI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcbiAgICBwcml2YXRlIGFwcFJlZjogQXBwbGljYXRpb25SZWYsXG4gICAgcHJpdmF0ZSBnbG9iYWxSZWZTZXJ2aWNlOiBHbG9iYWxSZWZTZXJ2aWNlLFxuICAgIHByaXZhdGUgcmVzaXplU2VydmljZTogUmVzaXplU2VydmljZVxuICApIHt9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBuZXcgY29tcG9uZW50IGxvYWRlci5cbiAgICogQHBhcmFtIHJlbmRlcmVyIEFuZ3VsYXIgcmVuZGVyZXIgcmVmZXJlbmNlLlxuICAgKiBAcmV0dXJuIFBvcG92ZXIgY29tcG9uZW50IGxvYWRlciByZWZlcmVuY2UuXG4gICAqL1xuICBwdWJsaWMgY3JlYXRlTG9hZGVyPFQ+KHJlbmRlcmVyOiBSZW5kZXJlcjIpOiBDb21wb25lbnRMb2FkZXI8VD4ge1xuICAgIHJldHVybiBuZXcgUG9wb3ZlckNvbXBvbmVudExvYWRlcjxUPih0aGlzLmNvbXBvbmVudEZhY3RvcnlSZXNvbHZlciwgdGhpcy5hcHBSZWYsIHRoaXMuZ2xvYmFsUmVmU2VydmljZSwgcmVuZGVyZXIsIHRoaXMucmVzaXplU2VydmljZSk7XG4gIH1cbn1cbiJdfQ==