/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
/**
 * Request parameter mapper service.
 */
export class RequestParamMapperService {
    /**
     * Map HTTP query parameters by request options.
     * @param {?} requestOptions Request options object reference.
     * @return {?}
     */
    mapQueryParams(requestOptions) {
        if (requestOptions && requestOptions.params) {
            if (requestOptions.params instanceof HttpParams) {
                return requestOptions.params;
            }
            else {
                /** @type {?} */
                let queryParams = new HttpParams();
                for (const key in requestOptions.params) {
                    if (requestOptions.params.hasOwnProperty(key)) {
                        queryParams = queryParams.set(key, requestOptions.params[key]);
                    }
                }
                return queryParams;
            }
        }
        else {
            return new HttpParams();
        }
    }
    /**
     * Map request options by http request data.
     * @param {?} options Request options object reference.
     * @return {?}
     */
    mapRequestOptions(options) {
        /** @type {?} */
        const requestOptions = {
            url: '',
            options: {}
        };
        if (typeof options === 'object') {
            requestOptions.options = options;
            requestOptions.url = options.url;
        }
        else {
            requestOptions.url = options;
        }
        return requestOptions;
    }
}
RequestParamMapperService.decorators = [
    { type: Injectable }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVxdWVzdC1wYXJhbS1tYXBwZXIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL29ybmFtZW50dW0vIiwic291cmNlcyI6WyJyZXNvdXJjZS11dGlsaXR5L3NlcnZpY2VzL3JlcXVlc3QtcGFyYW0tbWFwcGVyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNsRCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7O0FBUzNDLE1BQU0sT0FBTyx5QkFBeUI7Ozs7OztJQUs3QixjQUFjLENBQUMsY0FBa0M7UUFDdEQsSUFBSSxjQUFjLElBQUksY0FBYyxDQUFDLE1BQU0sRUFBRTtZQUMzQyxJQUFJLGNBQWMsQ0FBQyxNQUFNLFlBQVksVUFBVSxFQUFFO2dCQUMvQyxPQUFPLGNBQWMsQ0FBQyxNQUFNLENBQUM7YUFDOUI7aUJBQU07O29CQUNELFdBQVcsR0FBRyxJQUFJLFVBQVUsRUFBRTtnQkFDbEMsS0FBSyxNQUFNLEdBQUcsSUFBSSxjQUFjLENBQUMsTUFBTSxFQUFFO29CQUN2QyxJQUFJLGNBQWMsQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxFQUFFO3dCQUM3QyxXQUFXLEdBQUcsV0FBVyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsY0FBYyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO3FCQUNoRTtpQkFDRjtnQkFFRCxPQUFPLFdBQVcsQ0FBQzthQUNwQjtTQUNGO2FBQU07WUFDTCxPQUFPLElBQUksVUFBVSxFQUFFLENBQUM7U0FDekI7SUFDSCxDQUFDOzs7Ozs7SUFNTSxpQkFBaUIsQ0FBQyxPQUErQjs7Y0FDaEQsY0FBYyxHQUFtQjtZQUNyQyxHQUFHLEVBQUUsRUFBRTtZQUNQLE9BQU8sRUFBRSxFQUFFO1NBQ1o7UUFFRCxJQUFJLE9BQU8sT0FBTyxLQUFLLFFBQVEsRUFBRTtZQUMvQixjQUFjLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztZQUNqQyxjQUFjLENBQUMsR0FBRyxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUM7U0FDbEM7YUFBTTtZQUNMLGNBQWMsQ0FBQyxHQUFHLEdBQUcsT0FBTyxDQUFDO1NBQzlCO1FBRUQsT0FBTyxjQUFjLENBQUM7SUFDeEIsQ0FBQzs7O1lBM0NGLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIdHRwUGFyYW1zIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cFJlcXVlc3RPcHRpb25zIH0gZnJvbSAnLi4vbW9kZWxzL2h0dHAtcmVxdWVzdC1vcHRpb25zLm1vZGVsJztcbmltcG9ydCB7IFJlcXVlc3RPcHRpb25zIH0gZnJvbSAnLi4vbW9kZWxzL3JlcXVlc3Qtb3B0aW9ucy5tb2RlbCc7XG5pbXBvcnQgeyBSZXNvdXJjZU9wdGlvbnMgfSBmcm9tICcuLi9tb2RlbHMvcmVzb3VyY2Utb3B0aW9ucy5tb2RlbCc7XG5cbi8qKlxuICogUmVxdWVzdCBwYXJhbWV0ZXIgbWFwcGVyIHNlcnZpY2UuXG4gKi9cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBSZXF1ZXN0UGFyYW1NYXBwZXJTZXJ2aWNlIHtcbiAgLyoqXG4gICAqIE1hcCBIVFRQIHF1ZXJ5IHBhcmFtZXRlcnMgYnkgcmVxdWVzdCBvcHRpb25zLlxuICAgKiBAcGFyYW0gcmVxdWVzdE9wdGlvbnMgUmVxdWVzdCBvcHRpb25zIG9iamVjdCByZWZlcmVuY2UuXG4gICAqL1xuICBwdWJsaWMgbWFwUXVlcnlQYXJhbXMocmVxdWVzdE9wdGlvbnM6IEh0dHBSZXF1ZXN0T3B0aW9ucyk6IEh0dHBQYXJhbXMge1xuICAgIGlmIChyZXF1ZXN0T3B0aW9ucyAmJiByZXF1ZXN0T3B0aW9ucy5wYXJhbXMpIHtcbiAgICAgIGlmIChyZXF1ZXN0T3B0aW9ucy5wYXJhbXMgaW5zdGFuY2VvZiBIdHRwUGFyYW1zKSB7XG4gICAgICAgIHJldHVybiByZXF1ZXN0T3B0aW9ucy5wYXJhbXM7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsZXQgcXVlcnlQYXJhbXMgPSBuZXcgSHR0cFBhcmFtcygpO1xuICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiByZXF1ZXN0T3B0aW9ucy5wYXJhbXMpIHtcbiAgICAgICAgICBpZiAocmVxdWVzdE9wdGlvbnMucGFyYW1zLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgIHF1ZXJ5UGFyYW1zID0gcXVlcnlQYXJhbXMuc2V0KGtleSwgcmVxdWVzdE9wdGlvbnMucGFyYW1zW2tleV0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBxdWVyeVBhcmFtcztcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIG5ldyBIdHRwUGFyYW1zKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIE1hcCByZXF1ZXN0IG9wdGlvbnMgYnkgaHR0cCByZXF1ZXN0IGRhdGEuXG4gICAqIEBwYXJhbSBvcHRpb25zIFJlcXVlc3Qgb3B0aW9ucyBvYmplY3QgcmVmZXJlbmNlLlxuICAgKi9cbiAgcHVibGljIG1hcFJlcXVlc3RPcHRpb25zKG9wdGlvbnM6IHN0cmluZ3xSZXNvdXJjZU9wdGlvbnMpOiBSZXF1ZXN0T3B0aW9ucyB7XG4gICAgY29uc3QgcmVxdWVzdE9wdGlvbnM6IFJlcXVlc3RPcHRpb25zID0ge1xuICAgICAgdXJsOiAnJyxcbiAgICAgIG9wdGlvbnM6IHt9XG4gICAgfTtcblxuICAgIGlmICh0eXBlb2Ygb3B0aW9ucyA9PT0gJ29iamVjdCcpIHtcbiAgICAgIHJlcXVlc3RPcHRpb25zLm9wdGlvbnMgPSBvcHRpb25zO1xuICAgICAgcmVxdWVzdE9wdGlvbnMudXJsID0gb3B0aW9ucy51cmw7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlcXVlc3RPcHRpb25zLnVybCA9IG9wdGlvbnM7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlcXVlc3RPcHRpb25zO1xuICB9XG59XG4iXX0=