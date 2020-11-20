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
export class DropdownHttpResourceFactoryService {
    /**
     * @param {?} http
     * @param {?} requestParamMapperService
     */
    constructor(http, requestParamMapperService) {
        this.http = http;
        this.requestParamMapperService = requestParamMapperService;
    }
    /**
     * Get new dropdown HTTP data fetch service instance.
     * @template T
     * @return {?}
     */
    getResourceProvider() {
        return new DropdownHttpDataFetchService(this.http, this.requestParamMapperService);
    }
}
DropdownHttpResourceFactoryService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
DropdownHttpResourceFactoryService.ctorParameters = () => [
    { type: HttpClient },
    { type: RequestParamMapperService }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    DropdownHttpResourceFactoryService.prototype.http;
    /** @type {?} */
    DropdownHttpResourceFactoryService.prototype.requestParamMapperService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcGRvd24taHR0cC1yZXNvdXJjZS1mYWN0b3J5LnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9vcm5hbWVudHVtLyIsInNvdXJjZXMiOlsiZHJvcGRvd24tcmVzb3VyY2Uvc2VydmljZXMvZHJvcGRvd24taHR0cC1yZXNvdXJjZS1mYWN0b3J5LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBRWxELE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQ2xGLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLDhEQUE4RCxDQUFDOzs7O0FBTXpHLE1BQU0sT0FBTyxrQ0FBa0M7Ozs7O0lBQzdDLFlBQW9CLElBQWdCLEVBQVMseUJBQW9EO1FBQTdFLFNBQUksR0FBSixJQUFJLENBQVk7UUFBUyw4QkFBeUIsR0FBekIseUJBQXlCLENBQTJCO0lBQ2pHLENBQUM7Ozs7OztJQUtNLG1CQUFtQjtRQUN4QixPQUFPLElBQUksNEJBQTRCLENBQUksSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMseUJBQXlCLENBQUMsQ0FBQztJQUN4RixDQUFDOzs7WUFWRixVQUFVOzs7O1lBUkYsVUFBVTtZQUdWLHlCQUF5Qjs7Ozs7OztJQU9wQixrREFBd0I7O0lBQUUsdUVBQTJEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcblxuaW1wb3J0IHsgRHJvcGRvd25IdHRwRGF0YUZldGNoU2VydmljZSB9IGZyb20gJy4vZHJvcGRvd24taHR0cC1kYXRhLWZldGNoLnNlcnZpY2UnO1xuaW1wb3J0IHsgUmVxdWVzdFBhcmFtTWFwcGVyU2VydmljZSB9IGZyb20gJy4uLy4uL3Jlc291cmNlLXV0aWxpdHkvc2VydmljZXMvcmVxdWVzdC1wYXJhbS1tYXBwZXIuc2VydmljZSc7XG5cbi8qKlxuICogRHJvcGRvd24gSFRUUCBkYXRhIGZldGNoIHNlcnZpY2UgZmFjdG9yeS5cbiAqL1xuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIERyb3Bkb3duSHR0cFJlc291cmNlRmFjdG9yeVNlcnZpY2Uge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQsIHB1YmxpYyByZXF1ZXN0UGFyYW1NYXBwZXJTZXJ2aWNlOiBSZXF1ZXN0UGFyYW1NYXBwZXJTZXJ2aWNlKSB7XG4gIH1cblxuICAvKipcbiAgICogR2V0IG5ldyBkcm9wZG93biBIVFRQIGRhdGEgZmV0Y2ggc2VydmljZSBpbnN0YW5jZS5cbiAgICovXG4gIHB1YmxpYyBnZXRSZXNvdXJjZVByb3ZpZGVyPFQ+KCk6IERyb3Bkb3duSHR0cERhdGFGZXRjaFNlcnZpY2U8VD4ge1xuICAgIHJldHVybiBuZXcgRHJvcGRvd25IdHRwRGF0YUZldGNoU2VydmljZTxUPih0aGlzLmh0dHAsIHRoaXMucmVxdWVzdFBhcmFtTWFwcGVyU2VydmljZSk7XG4gIH1cbn1cbiJdfQ==