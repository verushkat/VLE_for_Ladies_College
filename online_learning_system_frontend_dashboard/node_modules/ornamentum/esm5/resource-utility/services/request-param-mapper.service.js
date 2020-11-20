/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
/**
 * Request parameter mapper service.
 */
var RequestParamMapperService = /** @class */ (function () {
    function RequestParamMapperService() {
    }
    /**
     * Map HTTP query parameters by request options.
     * @param requestOptions Request options object reference.
     */
    /**
     * Map HTTP query parameters by request options.
     * @param {?} requestOptions Request options object reference.
     * @return {?}
     */
    RequestParamMapperService.prototype.mapQueryParams = /**
     * Map HTTP query parameters by request options.
     * @param {?} requestOptions Request options object reference.
     * @return {?}
     */
    function (requestOptions) {
        if (requestOptions && requestOptions.params) {
            if (requestOptions.params instanceof HttpParams) {
                return requestOptions.params;
            }
            else {
                /** @type {?} */
                var queryParams = new HttpParams();
                for (var key in requestOptions.params) {
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
    };
    /**
     * Map request options by http request data.
     * @param options Request options object reference.
     */
    /**
     * Map request options by http request data.
     * @param {?} options Request options object reference.
     * @return {?}
     */
    RequestParamMapperService.prototype.mapRequestOptions = /**
     * Map request options by http request data.
     * @param {?} options Request options object reference.
     * @return {?}
     */
    function (options) {
        /** @type {?} */
        var requestOptions = {
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
    };
    RequestParamMapperService.decorators = [
        { type: Injectable }
    ];
    return RequestParamMapperService;
}());
export { RequestParamMapperService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVxdWVzdC1wYXJhbS1tYXBwZXIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL29ybmFtZW50dW0vIiwic291cmNlcyI6WyJyZXNvdXJjZS11dGlsaXR5L3NlcnZpY2VzL3JlcXVlc3QtcGFyYW0tbWFwcGVyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNsRCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7O0FBUTNDO0lBQUE7SUE0Q0EsQ0FBQztJQTFDQzs7O09BR0c7Ozs7OztJQUNJLGtEQUFjOzs7OztJQUFyQixVQUFzQixjQUFrQztRQUN0RCxJQUFJLGNBQWMsSUFBSSxjQUFjLENBQUMsTUFBTSxFQUFFO1lBQzNDLElBQUksY0FBYyxDQUFDLE1BQU0sWUFBWSxVQUFVLEVBQUU7Z0JBQy9DLE9BQU8sY0FBYyxDQUFDLE1BQU0sQ0FBQzthQUM5QjtpQkFBTTs7b0JBQ0QsV0FBVyxHQUFHLElBQUksVUFBVSxFQUFFO2dCQUNsQyxLQUFLLElBQU0sR0FBRyxJQUFJLGNBQWMsQ0FBQyxNQUFNLEVBQUU7b0JBQ3ZDLElBQUksY0FBYyxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLEVBQUU7d0JBQzdDLFdBQVcsR0FBRyxXQUFXLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxjQUFjLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7cUJBQ2hFO2lCQUNGO2dCQUVELE9BQU8sV0FBVyxDQUFDO2FBQ3BCO1NBQ0Y7YUFBTTtZQUNMLE9BQU8sSUFBSSxVQUFVLEVBQUUsQ0FBQztTQUN6QjtJQUNILENBQUM7SUFFRDs7O09BR0c7Ozs7OztJQUNJLHFEQUFpQjs7Ozs7SUFBeEIsVUFBeUIsT0FBK0I7O1lBQ2hELGNBQWMsR0FBbUI7WUFDckMsR0FBRyxFQUFFLEVBQUU7WUFDUCxPQUFPLEVBQUUsRUFBRTtTQUNaO1FBRUQsSUFBSSxPQUFPLE9BQU8sS0FBSyxRQUFRLEVBQUU7WUFDL0IsY0FBYyxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7WUFDakMsY0FBYyxDQUFDLEdBQUcsR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDO1NBQ2xDO2FBQU07WUFDTCxjQUFjLENBQUMsR0FBRyxHQUFHLE9BQU8sQ0FBQztTQUM5QjtRQUVELE9BQU8sY0FBYyxDQUFDO0lBQ3hCLENBQUM7O2dCQTNDRixVQUFVOztJQTRDWCxnQ0FBQztDQUFBLEFBNUNELElBNENDO1NBM0NZLHlCQUF5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEh0dHBQYXJhbXMgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwUmVxdWVzdE9wdGlvbnMgfSBmcm9tICcuLi9tb2RlbHMvaHR0cC1yZXF1ZXN0LW9wdGlvbnMubW9kZWwnO1xuaW1wb3J0IHsgUmVxdWVzdE9wdGlvbnMgfSBmcm9tICcuLi9tb2RlbHMvcmVxdWVzdC1vcHRpb25zLm1vZGVsJztcbmltcG9ydCB7IFJlc291cmNlT3B0aW9ucyB9IGZyb20gJy4uL21vZGVscy9yZXNvdXJjZS1vcHRpb25zLm1vZGVsJztcblxuLyoqXG4gKiBSZXF1ZXN0IHBhcmFtZXRlciBtYXBwZXIgc2VydmljZS5cbiAqL1xuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFJlcXVlc3RQYXJhbU1hcHBlclNlcnZpY2Uge1xuICAvKipcbiAgICogTWFwIEhUVFAgcXVlcnkgcGFyYW1ldGVycyBieSByZXF1ZXN0IG9wdGlvbnMuXG4gICAqIEBwYXJhbSByZXF1ZXN0T3B0aW9ucyBSZXF1ZXN0IG9wdGlvbnMgb2JqZWN0IHJlZmVyZW5jZS5cbiAgICovXG4gIHB1YmxpYyBtYXBRdWVyeVBhcmFtcyhyZXF1ZXN0T3B0aW9uczogSHR0cFJlcXVlc3RPcHRpb25zKTogSHR0cFBhcmFtcyB7XG4gICAgaWYgKHJlcXVlc3RPcHRpb25zICYmIHJlcXVlc3RPcHRpb25zLnBhcmFtcykge1xuICAgICAgaWYgKHJlcXVlc3RPcHRpb25zLnBhcmFtcyBpbnN0YW5jZW9mIEh0dHBQYXJhbXMpIHtcbiAgICAgICAgcmV0dXJuIHJlcXVlc3RPcHRpb25zLnBhcmFtcztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxldCBxdWVyeVBhcmFtcyA9IG5ldyBIdHRwUGFyYW1zKCk7XG4gICAgICAgIGZvciAoY29uc3Qga2V5IGluIHJlcXVlc3RPcHRpb25zLnBhcmFtcykge1xuICAgICAgICAgIGlmIChyZXF1ZXN0T3B0aW9ucy5wYXJhbXMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgcXVlcnlQYXJhbXMgPSBxdWVyeVBhcmFtcy5zZXQoa2V5LCByZXF1ZXN0T3B0aW9ucy5wYXJhbXNba2V5XSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHF1ZXJ5UGFyYW1zO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gbmV3IEh0dHBQYXJhbXMoKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogTWFwIHJlcXVlc3Qgb3B0aW9ucyBieSBodHRwIHJlcXVlc3QgZGF0YS5cbiAgICogQHBhcmFtIG9wdGlvbnMgUmVxdWVzdCBvcHRpb25zIG9iamVjdCByZWZlcmVuY2UuXG4gICAqL1xuICBwdWJsaWMgbWFwUmVxdWVzdE9wdGlvbnMob3B0aW9uczogc3RyaW5nfFJlc291cmNlT3B0aW9ucyk6IFJlcXVlc3RPcHRpb25zIHtcbiAgICBjb25zdCByZXF1ZXN0T3B0aW9uczogUmVxdWVzdE9wdGlvbnMgPSB7XG4gICAgICB1cmw6ICcnLFxuICAgICAgb3B0aW9uczoge31cbiAgICB9O1xuXG4gICAgaWYgKHR5cGVvZiBvcHRpb25zID09PSAnb2JqZWN0Jykge1xuICAgICAgcmVxdWVzdE9wdGlvbnMub3B0aW9ucyA9IG9wdGlvbnM7XG4gICAgICByZXF1ZXN0T3B0aW9ucy51cmwgPSBvcHRpb25zLnVybDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVxdWVzdE9wdGlvbnMudXJsID0gb3B0aW9ucztcbiAgICB9XG5cbiAgICByZXR1cm4gcmVxdWVzdE9wdGlvbnM7XG4gIH1cbn1cbiJdfQ==