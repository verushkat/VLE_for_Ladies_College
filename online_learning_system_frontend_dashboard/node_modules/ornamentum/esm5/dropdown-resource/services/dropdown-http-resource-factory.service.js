/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DropdownHttpDataFetchService } from './dropdown-http-data-fetch.service';
import { RequestParamMapperService } from '../../resource-utility/services/request-param-mapper.service';
/**
 * Dropdown HTTP data fetch service factory.
 */
var DropdownHttpResourceFactoryService = /** @class */ (function () {
    function DropdownHttpResourceFactoryService(http, requestParamMapperService) {
        this.http = http;
        this.requestParamMapperService = requestParamMapperService;
    }
    /**
     * Get new dropdown HTTP data fetch service instance.
     */
    /**
     * Get new dropdown HTTP data fetch service instance.
     * @template T
     * @return {?}
     */
    DropdownHttpResourceFactoryService.prototype.getResourceProvider = /**
     * Get new dropdown HTTP data fetch service instance.
     * @template T
     * @return {?}
     */
    function () {
        return new DropdownHttpDataFetchService(this.http, this.requestParamMapperService);
    };
    DropdownHttpResourceFactoryService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    DropdownHttpResourceFactoryService.ctorParameters = function () { return [
        { type: HttpClient },
        { type: RequestParamMapperService }
    ]; };
    return DropdownHttpResourceFactoryService;
}());
export { DropdownHttpResourceFactoryService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    DropdownHttpResourceFactoryService.prototype.http;
    /** @type {?} */
    DropdownHttpResourceFactoryService.prototype.requestParamMapperService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcGRvd24taHR0cC1yZXNvdXJjZS1mYWN0b3J5LnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9vcm5hbWVudHVtLyIsInNvdXJjZXMiOlsiZHJvcGRvd24tcmVzb3VyY2Uvc2VydmljZXMvZHJvcGRvd24taHR0cC1yZXNvdXJjZS1mYWN0b3J5LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBRWxELE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQ2xGLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLDhEQUE4RCxDQUFDOzs7O0FBS3pHO0lBRUUsNENBQW9CLElBQWdCLEVBQVMseUJBQW9EO1FBQTdFLFNBQUksR0FBSixJQUFJLENBQVk7UUFBUyw4QkFBeUIsR0FBekIseUJBQXlCLENBQTJCO0lBQ2pHLENBQUM7SUFFRDs7T0FFRzs7Ozs7O0lBQ0ksZ0VBQW1COzs7OztJQUExQjtRQUNFLE9BQU8sSUFBSSw0QkFBNEIsQ0FBSSxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO0lBQ3hGLENBQUM7O2dCQVZGLFVBQVU7Ozs7Z0JBUkYsVUFBVTtnQkFHVix5QkFBeUI7O0lBZ0JsQyx5Q0FBQztDQUFBLEFBWEQsSUFXQztTQVZZLGtDQUFrQzs7Ozs7O0lBQ2pDLGtEQUF3Qjs7SUFBRSx1RUFBMkQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuXG5pbXBvcnQgeyBEcm9wZG93bkh0dHBEYXRhRmV0Y2hTZXJ2aWNlIH0gZnJvbSAnLi9kcm9wZG93bi1odHRwLWRhdGEtZmV0Y2guc2VydmljZSc7XG5pbXBvcnQgeyBSZXF1ZXN0UGFyYW1NYXBwZXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vcmVzb3VyY2UtdXRpbGl0eS9zZXJ2aWNlcy9yZXF1ZXN0LXBhcmFtLW1hcHBlci5zZXJ2aWNlJztcblxuLyoqXG4gKiBEcm9wZG93biBIVFRQIGRhdGEgZmV0Y2ggc2VydmljZSBmYWN0b3J5LlxuICovXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRHJvcGRvd25IdHRwUmVzb3VyY2VGYWN0b3J5U2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cENsaWVudCwgcHVibGljIHJlcXVlc3RQYXJhbU1hcHBlclNlcnZpY2U6IFJlcXVlc3RQYXJhbU1hcHBlclNlcnZpY2UpIHtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgbmV3IGRyb3Bkb3duIEhUVFAgZGF0YSBmZXRjaCBzZXJ2aWNlIGluc3RhbmNlLlxuICAgKi9cbiAgcHVibGljIGdldFJlc291cmNlUHJvdmlkZXI8VD4oKTogRHJvcGRvd25IdHRwRGF0YUZldGNoU2VydmljZTxUPiB7XG4gICAgcmV0dXJuIG5ldyBEcm9wZG93bkh0dHBEYXRhRmV0Y2hTZXJ2aWNlPFQ+KHRoaXMuaHR0cCwgdGhpcy5yZXF1ZXN0UGFyYW1NYXBwZXJTZXJ2aWNlKTtcbiAgfVxufVxuIl19