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
export class DataTableHttpResourceFactoryService {
    /**
     * @param {?} http
     * @param {?} requestParamMapperService
     */
    constructor(http, requestParamMapperService) {
        this.http = http;
        this.requestParamMapperService = requestParamMapperService;
    }
    /**
     * Get new data table HTTP data fetch service instance.
     * @template T
     * @return {?}
     */
    getResourceProvider() {
        return new DataTableHttpDataFetchService(this.http, this.requestParamMapperService);
    }
}
DataTableHttpResourceFactoryService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
DataTableHttpResourceFactoryService.ctorParameters = () => [
    { type: HttpClient },
    { type: RequestParamMapperService }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    DataTableHttpResourceFactoryService.prototype.http;
    /** @type {?} */
    DataTableHttpResourceFactoryService.prototype.requestParamMapperService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS10YWJsZS1odHRwLXJlc291cmNlLWZhY3Rvcnkuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL29ybmFtZW50dW0vIiwic291cmNlcyI6WyJkYXRhLXRhYmxlLXJlc291cmNlL3NlcnZpY2VzL2RhdGEtdGFibGUtaHR0cC1yZXNvdXJjZS1mYWN0b3J5LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBRWxELE9BQU8sRUFBRSw2QkFBNkIsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBRXJGLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLDhEQUE4RCxDQUFDOzs7O0FBTXpHLE1BQU0sT0FBTyxtQ0FBbUM7Ozs7O0lBQzlDLFlBQW9CLElBQWdCLEVBQVMseUJBQW9EO1FBQTdFLFNBQUksR0FBSixJQUFJLENBQVk7UUFBUyw4QkFBeUIsR0FBekIseUJBQXlCLENBQTJCO0lBQ2pHLENBQUM7Ozs7OztJQUtNLG1CQUFtQjtRQUN4QixPQUFPLElBQUksNkJBQTZCLENBQUksSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMseUJBQXlCLENBQUMsQ0FBQztJQUN6RixDQUFDOzs7WUFWRixVQUFVOzs7O1lBVEYsVUFBVTtZQUlWLHlCQUF5Qjs7Ozs7OztJQU9wQixtREFBd0I7O0lBQUUsd0VBQTJEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcblxuaW1wb3J0IHsgRGF0YVRhYmxlSHR0cERhdGFGZXRjaFNlcnZpY2UgfSBmcm9tICcuL2RhdGEtdGFibGUtaHR0cC1kYXRhLWZldGNoLnNlcnZpY2UnO1xuXG5pbXBvcnQgeyBSZXF1ZXN0UGFyYW1NYXBwZXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vcmVzb3VyY2UtdXRpbGl0eS9zZXJ2aWNlcy9yZXF1ZXN0LXBhcmFtLW1hcHBlci5zZXJ2aWNlJztcblxuLyoqXG4gKiBEYXRhIHRhYmxlIEhUVFAgZGF0YSBmZXRjaCBzZXJ2aWNlIGZhY3RvcnkuXG4gKi9cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBEYXRhVGFibGVIdHRwUmVzb3VyY2VGYWN0b3J5U2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cENsaWVudCwgcHVibGljIHJlcXVlc3RQYXJhbU1hcHBlclNlcnZpY2U6IFJlcXVlc3RQYXJhbU1hcHBlclNlcnZpY2UpIHtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgbmV3IGRhdGEgdGFibGUgSFRUUCBkYXRhIGZldGNoIHNlcnZpY2UgaW5zdGFuY2UuXG4gICAqL1xuICBwdWJsaWMgZ2V0UmVzb3VyY2VQcm92aWRlcjxUPigpOiBEYXRhVGFibGVIdHRwRGF0YUZldGNoU2VydmljZTxUPiB7XG4gICAgcmV0dXJuIG5ldyBEYXRhVGFibGVIdHRwRGF0YUZldGNoU2VydmljZTxUPih0aGlzLmh0dHAsIHRoaXMucmVxdWVzdFBhcmFtTWFwcGVyU2VydmljZSk7XG4gIH1cbn1cbiJdfQ==