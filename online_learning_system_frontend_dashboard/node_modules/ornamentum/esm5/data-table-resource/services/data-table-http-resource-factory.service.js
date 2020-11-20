/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataTableHttpDataFetchService } from './data-table-http-data-fetch.service';
import { RequestParamMapperService } from '../../resource-utility/services/request-param-mapper.service';
/**
 * Data table HTTP data fetch service factory.
 */
var DataTableHttpResourceFactoryService = /** @class */ (function () {
    function DataTableHttpResourceFactoryService(http, requestParamMapperService) {
        this.http = http;
        this.requestParamMapperService = requestParamMapperService;
    }
    /**
     * Get new data table HTTP data fetch service instance.
     */
    /**
     * Get new data table HTTP data fetch service instance.
     * @template T
     * @return {?}
     */
    DataTableHttpResourceFactoryService.prototype.getResourceProvider = /**
     * Get new data table HTTP data fetch service instance.
     * @template T
     * @return {?}
     */
    function () {
        return new DataTableHttpDataFetchService(this.http, this.requestParamMapperService);
    };
    DataTableHttpResourceFactoryService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    DataTableHttpResourceFactoryService.ctorParameters = function () { return [
        { type: HttpClient },
        { type: RequestParamMapperService }
    ]; };
    return DataTableHttpResourceFactoryService;
}());
export { DataTableHttpResourceFactoryService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    DataTableHttpResourceFactoryService.prototype.http;
    /** @type {?} */
    DataTableHttpResourceFactoryService.prototype.requestParamMapperService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS10YWJsZS1odHRwLXJlc291cmNlLWZhY3Rvcnkuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL29ybmFtZW50dW0vIiwic291cmNlcyI6WyJkYXRhLXRhYmxlLXJlc291cmNlL3NlcnZpY2VzL2RhdGEtdGFibGUtaHR0cC1yZXNvdXJjZS1mYWN0b3J5LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBRWxELE9BQU8sRUFBRSw2QkFBNkIsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBRXJGLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLDhEQUE4RCxDQUFDOzs7O0FBS3pHO0lBRUUsNkNBQW9CLElBQWdCLEVBQVMseUJBQW9EO1FBQTdFLFNBQUksR0FBSixJQUFJLENBQVk7UUFBUyw4QkFBeUIsR0FBekIseUJBQXlCLENBQTJCO0lBQ2pHLENBQUM7SUFFRDs7T0FFRzs7Ozs7O0lBQ0ksaUVBQW1COzs7OztJQUExQjtRQUNFLE9BQU8sSUFBSSw2QkFBNkIsQ0FBSSxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO0lBQ3pGLENBQUM7O2dCQVZGLFVBQVU7Ozs7Z0JBVEYsVUFBVTtnQkFJVix5QkFBeUI7O0lBZ0JsQywwQ0FBQztDQUFBLEFBWEQsSUFXQztTQVZZLG1DQUFtQzs7Ozs7O0lBQ2xDLG1EQUF3Qjs7SUFBRSx3RUFBMkQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuXG5pbXBvcnQgeyBEYXRhVGFibGVIdHRwRGF0YUZldGNoU2VydmljZSB9IGZyb20gJy4vZGF0YS10YWJsZS1odHRwLWRhdGEtZmV0Y2guc2VydmljZSc7XG5cbmltcG9ydCB7IFJlcXVlc3RQYXJhbU1hcHBlclNlcnZpY2UgfSBmcm9tICcuLi8uLi9yZXNvdXJjZS11dGlsaXR5L3NlcnZpY2VzL3JlcXVlc3QtcGFyYW0tbWFwcGVyLnNlcnZpY2UnO1xuXG4vKipcbiAqIERhdGEgdGFibGUgSFRUUCBkYXRhIGZldGNoIHNlcnZpY2UgZmFjdG9yeS5cbiAqL1xuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIERhdGFUYWJsZUh0dHBSZXNvdXJjZUZhY3RvcnlTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50LCBwdWJsaWMgcmVxdWVzdFBhcmFtTWFwcGVyU2VydmljZTogUmVxdWVzdFBhcmFtTWFwcGVyU2VydmljZSkge1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBuZXcgZGF0YSB0YWJsZSBIVFRQIGRhdGEgZmV0Y2ggc2VydmljZSBpbnN0YW5jZS5cbiAgICovXG4gIHB1YmxpYyBnZXRSZXNvdXJjZVByb3ZpZGVyPFQ+KCk6IERhdGFUYWJsZUh0dHBEYXRhRmV0Y2hTZXJ2aWNlPFQ+IHtcbiAgICByZXR1cm4gbmV3IERhdGFUYWJsZUh0dHBEYXRhRmV0Y2hTZXJ2aWNlPFQ+KHRoaXMuaHR0cCwgdGhpcy5yZXF1ZXN0UGFyYW1NYXBwZXJTZXJ2aWNlKTtcbiAgfVxufVxuIl19