/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Dropdown HTTP data fetch service.
 * @template T
 */
var /**
 * Dropdown HTTP data fetch service.
 * @template T
 */
DropdownHttpDataFetchService = /** @class */ (function () {
    function DropdownHttpDataFetchService(http, requestParamMapperService) {
        this.http = http;
        this.requestParamMapperService = requestParamMapperService;
    }
    /**
     * Get data bind event handler.
     * @param options Request options or resource path.
     * @param mapper Response data mapper callback. map source stream format to data table expected stream or apply additional formatting.
     * @return Dropdown bind event handler.
     */
    /**
     * Get data bind event handler.
     * @param {?} options Request options or resource path.
     * @param {?=} mapper Response data mapper callback. map source stream format to data table expected stream or apply additional formatting.
     * @return {?} Dropdown bind event handler.
     */
    DropdownHttpDataFetchService.prototype.onDataBind = /**
     * Get data bind event handler.
     * @param {?} options Request options or resource path.
     * @param {?=} mapper Response data mapper callback. map source stream format to data table expected stream or apply additional formatting.
     * @return {?} Dropdown bind event handler.
     */
    function (options, mapper) {
        var _this = this;
        return (/**
         * @param {?=} params
         * @return {?}
         */
        function (params) {
            /** @type {?} */
            var requestOptions = _this.requestParamMapperService.mapRequestOptions(options);
            /** @type {?} */
            var queryParams = _this.requestParamMapperService.mapQueryParams(requestOptions.options);
            if (params) {
                if (params.limit !== undefined) {
                    queryParams = queryParams.set('limit', String(params.limit));
                }
                if (params.offset !== undefined) {
                    queryParams = queryParams.set('offset', String(params.offset));
                }
                if (params.filter && params.filter.value) {
                    queryParams = queryParams.set('field', params.filter.key);
                    queryParams = queryParams.set('filter', params.filter.value);
                }
                requestOptions.options.params = queryParams;
                /** @type {?} */
                var resource = (/** @type {?} */ (_this.http.get(requestOptions.url, (/** @type {?} */ (requestOptions.options)))));
                if (mapper) {
                    return mapper(resource);
                }
                return resource;
            }
        });
    };
    return DropdownHttpDataFetchService;
}());
/**
 * Dropdown HTTP data fetch service.
 * @template T
 */
export { DropdownHttpDataFetchService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    DropdownHttpDataFetchService.prototype.http;
    /** @type {?} */
    DropdownHttpDataFetchService.prototype.requestParamMapperService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcGRvd24taHR0cC1kYXRhLWZldGNoLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9vcm5hbWVudHVtLyIsInNvdXJjZXMiOlsiZHJvcGRvd24tcmVzb3VyY2Uvc2VydmljZXMvZHJvcGRvd24taHR0cC1kYXRhLWZldGNoLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFjQTs7Ozs7SUFDRSxzQ0FBb0IsSUFBZ0IsRUFBUyx5QkFBb0Q7UUFBN0UsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUFTLDhCQUF5QixHQUF6Qix5QkFBeUIsQ0FBMkI7SUFBRyxDQUFDO0lBRXJHOzs7OztPQUtHOzs7Ozs7O0lBQ0ksaURBQVU7Ozs7OztJQUFqQixVQUNFLE9BQStCLEVBQy9CLE1BQTJFO1FBRjdFLGlCQWlDQztRQTdCQzs7OztRQUFPLFVBQUMsTUFBOEI7O2dCQUM5QixjQUFjLEdBQUcsS0FBSSxDQUFDLHlCQUF5QixDQUFDLGlCQUFpQixDQUFDLE9BQU8sQ0FBQzs7Z0JBQzVFLFdBQVcsR0FBRyxLQUFJLENBQUMseUJBQXlCLENBQUMsY0FBYyxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUM7WUFFdkYsSUFBSSxNQUFNLEVBQUU7Z0JBQ1YsSUFBSSxNQUFNLENBQUMsS0FBSyxLQUFLLFNBQVMsRUFBRTtvQkFDOUIsV0FBVyxHQUFHLFdBQVcsQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztpQkFDOUQ7Z0JBRUQsSUFBSSxNQUFNLENBQUMsTUFBTSxLQUFLLFNBQVMsRUFBRTtvQkFDL0IsV0FBVyxHQUFHLFdBQVcsQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztpQkFDaEU7Z0JBRUQsSUFBSSxNQUFNLENBQUMsTUFBTSxJQUFJLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFO29CQUN4QyxXQUFXLEdBQUcsV0FBVyxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsTUFBTSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztvQkFDMUQsV0FBVyxHQUFHLFdBQVcsQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7aUJBQzlEO2dCQUVELGNBQWMsQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLFdBQVcsQ0FBQzs7b0JBRXRDLFFBQVEsR0FBRyxtQkFBQSxLQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBTSxjQUFjLENBQUMsR0FBRyxFQUFFLG1CQUFBLGNBQWMsQ0FBQyxPQUFPLEVBQU8sQ0FBQyxFQUFtQjtnQkFFekcsSUFBSSxNQUFNLEVBQUU7b0JBQ1YsT0FBTyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7aUJBQ3pCO2dCQUVELE9BQU8sUUFBUSxDQUFDO2FBQ2pCO1FBQ0gsQ0FBQyxFQUFDO0lBQ0osQ0FBQztJQUNILG1DQUFDO0FBQUQsQ0FBQyxBQTNDRCxJQTJDQzs7Ozs7Ozs7Ozs7SUExQ2EsNENBQXdCOztJQUFFLGlFQUEyRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5cbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgRHJvcGRvd25EYXRhQmluZENhbGxiYWNrIH0gZnJvbSAnLi4vLi4vZHJvcGRvd24vbW9kZWxzL2Ryb3Bkb3duLWRhdGEtYmluZC1jYWxsYmFjay5tb2RlbCc7XG5pbXBvcnQgeyBEcm9wZG93blF1ZXJ5UmVzdWx0IH0gZnJvbSAnLi4vLi4vZHJvcGRvd24vbW9kZWxzL2Ryb3Bkb3duLXF1ZXJ5LXJlc3VsdC5tb2RlbCc7XG5pbXBvcnQgeyBEcm9wZG93blJlcXVlc3RQYXJhbXMgfSBmcm9tICcuLi8uLi9kcm9wZG93bi9tb2RlbHMvZHJvcGRvd24tcmVxdWVzdC1wYXJhbXMubW9kZWwnO1xuXG5pbXBvcnQgeyBSZXF1ZXN0UGFyYW1NYXBwZXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vcmVzb3VyY2UtdXRpbGl0eS9zZXJ2aWNlcy9yZXF1ZXN0LXBhcmFtLW1hcHBlci5zZXJ2aWNlJztcbmltcG9ydCB7IFJlc291cmNlT3B0aW9ucyB9IGZyb20gJy4uLy4uL3Jlc291cmNlLXV0aWxpdHkvbW9kZWxzL3Jlc291cmNlLW9wdGlvbnMubW9kZWwnO1xuXG4vKipcbiAqIERyb3Bkb3duIEhUVFAgZGF0YSBmZXRjaCBzZXJ2aWNlLlxuICovXG5leHBvcnQgY2xhc3MgRHJvcGRvd25IdHRwRGF0YUZldGNoU2VydmljZTxUPiB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cENsaWVudCwgcHVibGljIHJlcXVlc3RQYXJhbU1hcHBlclNlcnZpY2U6IFJlcXVlc3RQYXJhbU1hcHBlclNlcnZpY2UpIHt9XG5cbiAgLyoqXG4gICAqIEdldCBkYXRhIGJpbmQgZXZlbnQgaGFuZGxlci5cbiAgICogQHBhcmFtIG9wdGlvbnMgUmVxdWVzdCBvcHRpb25zIG9yIHJlc291cmNlIHBhdGguXG4gICAqIEBwYXJhbSBtYXBwZXIgUmVzcG9uc2UgZGF0YSBtYXBwZXIgY2FsbGJhY2suIG1hcCBzb3VyY2Ugc3RyZWFtIGZvcm1hdCB0byBkYXRhIHRhYmxlIGV4cGVjdGVkIHN0cmVhbSBvciBhcHBseSBhZGRpdGlvbmFsIGZvcm1hdHRpbmcuXG4gICAqIEByZXR1cm4gRHJvcGRvd24gYmluZCBldmVudCBoYW5kbGVyLlxuICAgKi9cbiAgcHVibGljIG9uRGF0YUJpbmQoXG4gICAgb3B0aW9uczogc3RyaW5nfFJlc291cmNlT3B0aW9ucyxcbiAgICBtYXBwZXI/OiA8UT4ocmVzcG9uc2U6IE9ic2VydmFibGU8UT4pID0+IE9ic2VydmFibGU8RHJvcGRvd25RdWVyeVJlc3VsdDxUPj4sXG4gICk6IERyb3Bkb3duRGF0YUJpbmRDYWxsYmFjazxUPiB7XG4gICAgcmV0dXJuIChwYXJhbXM/OiBEcm9wZG93blJlcXVlc3RQYXJhbXMpOiBPYnNlcnZhYmxlPERyb3Bkb3duUXVlcnlSZXN1bHQ8VD4+ID0+IHtcbiAgICAgIGNvbnN0IHJlcXVlc3RPcHRpb25zID0gdGhpcy5yZXF1ZXN0UGFyYW1NYXBwZXJTZXJ2aWNlLm1hcFJlcXVlc3RPcHRpb25zKG9wdGlvbnMpO1xuICAgICAgbGV0IHF1ZXJ5UGFyYW1zID0gdGhpcy5yZXF1ZXN0UGFyYW1NYXBwZXJTZXJ2aWNlLm1hcFF1ZXJ5UGFyYW1zKHJlcXVlc3RPcHRpb25zLm9wdGlvbnMpO1xuXG4gICAgICBpZiAocGFyYW1zKSB7XG4gICAgICAgIGlmIChwYXJhbXMubGltaXQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHF1ZXJ5UGFyYW1zID0gcXVlcnlQYXJhbXMuc2V0KCdsaW1pdCcsIFN0cmluZyhwYXJhbXMubGltaXQpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwYXJhbXMub2Zmc2V0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBxdWVyeVBhcmFtcyA9IHF1ZXJ5UGFyYW1zLnNldCgnb2Zmc2V0JywgU3RyaW5nKHBhcmFtcy5vZmZzZXQpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwYXJhbXMuZmlsdGVyICYmIHBhcmFtcy5maWx0ZXIudmFsdWUpIHtcbiAgICAgICAgICBxdWVyeVBhcmFtcyA9IHF1ZXJ5UGFyYW1zLnNldCgnZmllbGQnLCBwYXJhbXMuZmlsdGVyLmtleSk7XG4gICAgICAgICAgcXVlcnlQYXJhbXMgPSBxdWVyeVBhcmFtcy5zZXQoJ2ZpbHRlcicsIHBhcmFtcy5maWx0ZXIudmFsdWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmVxdWVzdE9wdGlvbnMub3B0aW9ucy5wYXJhbXMgPSBxdWVyeVBhcmFtcztcblxuICAgICAgICBjb25zdCByZXNvdXJjZSA9IHRoaXMuaHR0cC5nZXQ8YW55PihyZXF1ZXN0T3B0aW9ucy51cmwsIHJlcXVlc3RPcHRpb25zLm9wdGlvbnMgYXMgYW55KSBhcyBPYnNlcnZhYmxlPGFueT47XG5cbiAgICAgICAgaWYgKG1hcHBlcikge1xuICAgICAgICAgIHJldHVybiBtYXBwZXIocmVzb3VyY2UpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlc291cmNlO1xuICAgICAgfVxuICAgIH07XG4gIH1cbn1cbiJdfQ==