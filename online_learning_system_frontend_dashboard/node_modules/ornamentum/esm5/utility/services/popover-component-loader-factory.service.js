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
var PopoverComponentLoaderFactoryService = /** @class */ (function () {
    function PopoverComponentLoaderFactoryService(componentFactoryResolver, appRef, globalRefService, resizeService) {
        this.componentFactoryResolver = componentFactoryResolver;
        this.appRef = appRef;
        this.globalRefService = globalRefService;
        this.resizeService = resizeService;
    }
    /**
     * Create new component loader.
     * @param renderer Angular renderer reference.
     * @return Popover component loader reference.
     */
    /**
     * Create new component loader.
     * @template T
     * @param {?} renderer Angular renderer reference.
     * @return {?} Popover component loader reference.
     */
    PopoverComponentLoaderFactoryService.prototype.createLoader = /**
     * Create new component loader.
     * @template T
     * @param {?} renderer Angular renderer reference.
     * @return {?} Popover component loader reference.
     */
    function (renderer) {
        return new PopoverComponentLoader(this.componentFactoryResolver, this.appRef, this.globalRefService, renderer, this.resizeService);
    };
    PopoverComponentLoaderFactoryService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    PopoverComponentLoaderFactoryService.ctorParameters = function () { return [
        { type: ComponentFactoryResolver },
        { type: ApplicationRef },
        { type: GlobalRefService },
        { type: ResizeService }
    ]; };
    return PopoverComponentLoaderFactoryService;
}());
export { PopoverComponentLoaderFactoryService };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9wb3Zlci1jb21wb25lbnQtbG9hZGVyLWZhY3Rvcnkuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL29ybmFtZW50dW0vIiwic291cmNlcyI6WyJ1dGlsaXR5L3NlcnZpY2VzL3BvcG92ZXItY29tcG9uZW50LWxvYWRlci1mYWN0b3J5LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxjQUFjLEVBQUUsd0JBQXdCLEVBQUUsVUFBVSxFQUFhLE1BQU0sZUFBZSxDQUFDO0FBSWhHLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUVqRCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQzs7OztBQUsxRTtJQUVFLDhDQUNVLHdCQUFrRCxFQUNsRCxNQUFzQixFQUN0QixnQkFBa0MsRUFDbEMsYUFBNEI7UUFINUIsNkJBQXdCLEdBQXhCLHdCQUF3QixDQUEwQjtRQUNsRCxXQUFNLEdBQU4sTUFBTSxDQUFnQjtRQUN0QixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQ2xDLGtCQUFhLEdBQWIsYUFBYSxDQUFlO0lBQ25DLENBQUM7SUFFSjs7OztPQUlHOzs7Ozs7O0lBQ0ksMkRBQVk7Ozs7OztJQUFuQixVQUF1QixRQUFtQjtRQUN4QyxPQUFPLElBQUksc0JBQXNCLENBQUksSUFBSSxDQUFDLHdCQUF3QixFQUFFLElBQUksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLGdCQUFnQixFQUFFLFFBQVEsRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDeEksQ0FBQzs7Z0JBaEJGLFVBQVU7Ozs7Z0JBWmMsd0JBQXdCO2dCQUF4QyxjQUFjO2dCQUlkLGdCQUFnQjtnQkFDaEIsYUFBYTs7SUF3QnRCLDJDQUFDO0NBQUEsQUFqQkQsSUFpQkM7U0FoQlksb0NBQW9DOzs7Ozs7SUFFN0Msd0VBQTBEOzs7OztJQUMxRCxzREFBOEI7Ozs7O0lBQzlCLGdFQUEwQzs7Ozs7SUFDMUMsNkRBQW9DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwbGljYXRpb25SZWYsIENvbXBvbmVudEZhY3RvcnlSZXNvbHZlciwgSW5qZWN0YWJsZSwgUmVuZGVyZXIyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IENvbXBvbmVudExvYWRlciB9IGZyb20gJy4vY29tcG9uZW50LWxvYWRlci5pbnRlcmZhY2UnO1xuXG5pbXBvcnQgeyBHbG9iYWxSZWZTZXJ2aWNlIH0gZnJvbSAnLi9nbG9iYWwtcmVmLnNlcnZpY2UnO1xuaW1wb3J0IHsgUmVzaXplU2VydmljZSB9IGZyb20gJy4vcmVzaXplLnNlcnZpY2UnO1xuXG5pbXBvcnQgeyBQb3BvdmVyQ29tcG9uZW50TG9hZGVyIH0gZnJvbSAnLi9wb3BvdmVyLWNvbXBvbmVudC1sb2FkZXIuY2xhc3MnO1xuXG4vKipcbiAqIFBvcG92ZXIgY29tcG9uZW50IGxvYWRlciBmYWN0b3J5IHNlcnZpY2UuXG4gKi9cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBQb3BvdmVyQ29tcG9uZW50TG9hZGVyRmFjdG9yeVNlcnZpY2Uge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGNvbXBvbmVudEZhY3RvcnlSZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxuICAgIHByaXZhdGUgYXBwUmVmOiBBcHBsaWNhdGlvblJlZixcbiAgICBwcml2YXRlIGdsb2JhbFJlZlNlcnZpY2U6IEdsb2JhbFJlZlNlcnZpY2UsXG4gICAgcHJpdmF0ZSByZXNpemVTZXJ2aWNlOiBSZXNpemVTZXJ2aWNlXG4gICkge31cblxuICAvKipcbiAgICogQ3JlYXRlIG5ldyBjb21wb25lbnQgbG9hZGVyLlxuICAgKiBAcGFyYW0gcmVuZGVyZXIgQW5ndWxhciByZW5kZXJlciByZWZlcmVuY2UuXG4gICAqIEByZXR1cm4gUG9wb3ZlciBjb21wb25lbnQgbG9hZGVyIHJlZmVyZW5jZS5cbiAgICovXG4gIHB1YmxpYyBjcmVhdGVMb2FkZXI8VD4ocmVuZGVyZXI6IFJlbmRlcmVyMik6IENvbXBvbmVudExvYWRlcjxUPiB7XG4gICAgcmV0dXJuIG5ldyBQb3BvdmVyQ29tcG9uZW50TG9hZGVyPFQ+KHRoaXMuY29tcG9uZW50RmFjdG9yeVJlc29sdmVyLCB0aGlzLmFwcFJlZiwgdGhpcy5nbG9iYWxSZWZTZXJ2aWNlLCByZW5kZXJlciwgdGhpcy5yZXNpemVTZXJ2aWNlKTtcbiAgfVxufVxuIl19