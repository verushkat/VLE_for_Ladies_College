/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
/**
 * Data table HTTP data fetch service.
 * @template T
 */
var /**
 * Data table HTTP data fetch service.
 * @template T
 */
DataTableHttpDataFetchService = /** @class */ (function () {
    function DataTableHttpDataFetchService(http, requestParamMapperService) {
        this.http = http;
        this.requestParamMapperService = requestParamMapperService;
    }
    /**
     * Get data bind event handler.
     * @param options Request options or resource path.
     * @param mapper Response data mapper callback. map source stream format to data table expected stream or apply additional formatting.
     * @return Data table bind event handler.
     */
    /**
     * Get data bind event handler.
     * @param {?} options Request options or resource path.
     * @param {?=} mapper Response data mapper callback. map source stream format to data table expected stream or apply additional formatting.
     * @return {?} Data table bind event handler.
     */
    DataTableHttpDataFetchService.prototype.onDataBind = /**
     * Get data bind event handler.
     * @param {?} options Request options or resource path.
     * @param {?=} mapper Response data mapper callback. map source stream format to data table expected stream or apply additional formatting.
     * @return {?} Data table bind event handler.
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
                params.fields.forEach((/**
                 * @param {?} column
                 * @return {?}
                 */
                function (column) {
                    /** @type {?} */
                    var query = '';
                    if (column.filterable) {
                        if (typeof column.filterValue === 'string') {
                            if (column.filterValue !== '') {
                                query += column.filterValue;
                            }
                        }
                        else if (Array.isArray(column.filterValue) && column.filterValue.length) {
                            query += column.filterValue.join(',');
                        }
                    }
                    if (column.sortable && column.sortOrder !== '') {
                        query += "|" + column.sortOrder + "|" + column.sortPriority;
                    }
                    if (query) {
                        queryParams = queryParams.set(column.field, query);
                    }
                }));
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
    /**
     * Get filter value extract event handler.
     * @param options Request options or resource path.
     * @param mapper Response data mapper callback. map source stream format to data table expected stream or apply additional formatting.
     * @return Data table filter options event handler.
     */
    /**
     * Get filter value extract event handler.
     * @param {?} options Request options or resource path.
     * @param {?=} mapper Response data mapper callback. map source stream format to data table expected stream or apply additional formatting.
     * @return {?} Data table filter options event handler.
     */
    DataTableHttpDataFetchService.prototype.onFilterValueExtract = /**
     * Get filter value extract event handler.
     * @param {?} options Request options or resource path.
     * @param {?=} mapper Response data mapper callback. map source stream format to data table expected stream or apply additional formatting.
     * @return {?} Data table filter options event handler.
     */
    function (options, mapper) {
        var _this = this;
        return (/**
         * @param {?} column
         * @return {?}
         */
        function (column) {
            /** @type {?} */
            var requestOptions = _this.requestParamMapperService.mapRequestOptions(options);
            /** @type {?} */
            var queryParams = _this.requestParamMapperService.mapQueryParams(requestOptions.options);
            /** @type {?} */
            var filterField = column.filterField || column.field;
            queryParams = queryParams.set('field', filterField);
            /** @type {?} */
            var resource = (/** @type {?} */ (_this.http.get(requestOptions.url, tslib_1.__assign({ params: queryParams }, requestOptions))));
            if (mapper) {
                return mapper(resource);
            }
            return resource;
        });
    };
    return DataTableHttpDataFetchService;
}());
/**
 * Data table HTTP data fetch service.
 * @template T
 */
export { DataTableHttpDataFetchService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    DataTableHttpDataFetchService.prototype.http;
    /** @type {?} */
    DataTableHttpDataFetchService.prototype.requestParamMapperService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS10YWJsZS1odHRwLWRhdGEtZmV0Y2guc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL29ybmFtZW50dW0vIiwic291cmNlcyI6WyJkYXRhLXRhYmxlLXJlc291cmNlL3NlcnZpY2VzL2RhdGEtdGFibGUtaHR0cC1kYXRhLWZldGNoLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBb0JBOzs7OztJQUNFLHVDQUFvQixJQUFnQixFQUFTLHlCQUFvRDtRQUE3RSxTQUFJLEdBQUosSUFBSSxDQUFZO1FBQVMsOEJBQXlCLEdBQXpCLHlCQUF5QixDQUEyQjtJQUFHLENBQUM7SUFFckc7Ozs7O09BS0c7Ozs7Ozs7SUFDSSxrREFBVTs7Ozs7O0lBQWpCLFVBQ0UsT0FBK0IsRUFDL0IsTUFBNEU7UUFGOUUsaUJBa0RDO1FBOUNDOzs7O1FBQU8sVUFBQyxNQUErQjs7Z0JBQy9CLGNBQWMsR0FBRyxLQUFJLENBQUMseUJBQXlCLENBQUMsaUJBQWlCLENBQUMsT0FBTyxDQUFDOztnQkFDNUUsV0FBVyxHQUFHLEtBQUksQ0FBQyx5QkFBeUIsQ0FBQyxjQUFjLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQztZQUV2RixJQUFJLE1BQU0sRUFBRTtnQkFDVixJQUFJLE1BQU0sQ0FBQyxLQUFLLEtBQUssU0FBUyxFQUFFO29CQUM5QixXQUFXLEdBQUcsV0FBVyxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO2lCQUM5RDtnQkFFRCxJQUFJLE1BQU0sQ0FBQyxNQUFNLEtBQUssU0FBUyxFQUFFO29CQUMvQixXQUFXLEdBQUcsV0FBVyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO2lCQUNoRTtnQkFFRCxNQUFNLENBQUMsTUFBTSxDQUFDLE9BQU87Ozs7Z0JBQUMsVUFBQyxNQUEyQjs7d0JBQzVDLEtBQUssR0FBRyxFQUFFO29CQUVkLElBQUksTUFBTSxDQUFDLFVBQVUsRUFBRTt3QkFDckIsSUFBSSxPQUFPLE1BQU0sQ0FBQyxXQUFXLEtBQUssUUFBUSxFQUFFOzRCQUMxQyxJQUFJLE1BQU0sQ0FBQyxXQUFXLEtBQUssRUFBRSxFQUFFO2dDQUM3QixLQUFLLElBQUksTUFBTSxDQUFDLFdBQVcsQ0FBQzs2QkFDN0I7eUJBQ0Y7NkJBQU0sSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsSUFBSSxNQUFNLENBQUMsV0FBVyxDQUFDLE1BQU0sRUFBRTs0QkFDekUsS0FBSyxJQUFJLE1BQU0sQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO3lCQUN2QztxQkFDRjtvQkFFRCxJQUFJLE1BQU0sQ0FBQyxRQUFRLElBQUksTUFBTSxDQUFDLFNBQVMsS0FBSyxFQUFFLEVBQUU7d0JBQzlDLEtBQUssSUFBSSxNQUFJLE1BQU0sQ0FBQyxTQUFTLFNBQUksTUFBTSxDQUFDLFlBQWMsQ0FBQztxQkFDeEQ7b0JBRUQsSUFBSSxLQUFLLEVBQUU7d0JBQ1QsV0FBVyxHQUFHLFdBQVcsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQztxQkFDcEQ7Z0JBQ0gsQ0FBQyxFQUFDLENBQUM7Z0JBRUgsY0FBYyxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsV0FBVyxDQUFDOztvQkFFdEMsUUFBUSxHQUFHLG1CQUFBLEtBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFNLGNBQWMsQ0FBQyxHQUFHLEVBQUUsbUJBQUEsY0FBYyxDQUFDLE9BQU8sRUFBTyxDQUFDLEVBQW1CO2dCQUV6RyxJQUFJLE1BQU0sRUFBRTtvQkFDVixPQUFPLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztpQkFDekI7Z0JBRUQsT0FBTyxRQUFRLENBQUM7YUFDakI7UUFDSCxDQUFDLEVBQUM7SUFDSixDQUFDO0lBRUQ7Ozs7O09BS0c7Ozs7Ozs7SUFDSSw0REFBb0I7Ozs7OztJQUEzQixVQUNFLE9BQWtDLEVBQ2xDLE1BQTRFO1FBRjlFLGlCQW1CQztRQWZDOzs7O1FBQU8sVUFBQyxNQUFnQzs7Z0JBQ2hDLGNBQWMsR0FBRyxLQUFJLENBQUMseUJBQXlCLENBQUMsaUJBQWlCLENBQUMsT0FBTyxDQUFDOztnQkFDNUUsV0FBVyxHQUFHLEtBQUksQ0FBQyx5QkFBeUIsQ0FBQyxjQUFjLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQzs7Z0JBRWpGLFdBQVcsR0FBRyxNQUFNLENBQUMsV0FBVyxJQUFJLE1BQU0sQ0FBQyxLQUFLO1lBQ3RELFdBQVcsR0FBRyxXQUFXLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxXQUFXLENBQUMsQ0FBQzs7Z0JBRTlDLFFBQVEsR0FBRyxtQkFBQSxLQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBTSxjQUFjLENBQUMsR0FBRyxxQkFBSSxNQUFNLEVBQUUsV0FBVyxJQUFLLGNBQWMsRUFBRyxFQUFtQjtZQUV0SCxJQUFJLE1BQU0sRUFBRTtnQkFDVixPQUFPLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQzthQUN6QjtZQUVELE9BQU8sUUFBUSxDQUFDO1FBQ2xCLENBQUMsRUFBQztJQUNKLENBQUM7SUFDSCxvQ0FBQztBQUFELENBQUMsQUF2RkQsSUF1RkM7Ozs7Ozs7Ozs7O0lBdEZhLDZDQUF3Qjs7SUFBRSxrRUFBMkQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IERhdGFUYWJsZVJlcXVlc3RQYXJhbXMgfSBmcm9tICcuLi8uLi9kYXRhLXRhYmxlL21vZGVscy9kYXRhLXRhYmxlLXJlcXVlc3QtcGFyYW1zLm1vZGVsJztcbmltcG9ydCB7IERhdGFUYWJsZVF1ZXJ5UmVzdWx0IH0gZnJvbSAnLi4vLi4vZGF0YS10YWJsZS9tb2RlbHMvZGF0YS10YWJsZS1xdWVyeS1yZXN1bHQubW9kZWwnO1xuaW1wb3J0IHsgRGF0YVRhYmxlUXVlcnlGaWVsZCB9IGZyb20gJy4uLy4uL2RhdGEtdGFibGUvbW9kZWxzL2RhdGEtdGFibGUtcXVlcnktZmllbGQubW9kZWwnO1xuaW1wb3J0IHsgRGF0YVRhYmxlRGF0YUJpbmRDYWxsYmFjayB9IGZyb20gJy4uLy4uL2RhdGEtdGFibGUvbW9kZWxzL2RhdGEtdGFibGUtZGF0YS1iaW5kLWNhbGxiYWNrLm1vZGVsJztcbmltcG9ydCB7IERhdGFUYWJsZUZpbHRlclZhbHVlRXh0cmFjdENhbGxiYWNrIH0gZnJvbSAnLi4vLi4vZGF0YS10YWJsZS9tb2RlbHMvZGF0YS10YWJsZS1maWx0ZXItdmFsdWUtZXh0cmFjdC1jYWxsYmFjay5tb2RlbCc7XG5pbXBvcnQgeyBEYXRhVGFibGVGaWx0ZXJPcHRpb24gfSBmcm9tICcuLi8uLi9kYXRhLXRhYmxlL21vZGVscy9kYXRhLXRhYmxlLWZpbHRlci1vcHRpb24ubW9kZWwnO1xuaW1wb3J0IHsgSHR0cFJlcXVlc3RPcHRpb25zIH0gZnJvbSAnLi4vLi4vcmVzb3VyY2UtdXRpbGl0eS9tb2RlbHMvaHR0cC1yZXF1ZXN0LW9wdGlvbnMubW9kZWwnO1xuaW1wb3J0IHsgUmVzb3VyY2VPcHRpb25zIH0gZnJvbSAnLi4vLi4vcmVzb3VyY2UtdXRpbGl0eS9tb2RlbHMvcmVzb3VyY2Utb3B0aW9ucy5tb2RlbCc7XG5cbmltcG9ydCB7IERhdGFUYWJsZUNvbHVtbkNvbXBvbmVudCB9IGZyb20gJy4uLy4uL2RhdGEtdGFibGUvY29tcG9uZW50cy9kYXRhLXRhYmxlLWNvbHVtbi9kYXRhLXRhYmxlLWNvbHVtbi5jb21wb25lbnQnO1xuXG5pbXBvcnQgeyBSZXF1ZXN0UGFyYW1NYXBwZXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vcmVzb3VyY2UtdXRpbGl0eS9zZXJ2aWNlcy9yZXF1ZXN0LXBhcmFtLW1hcHBlci5zZXJ2aWNlJztcblxuLyoqXG4gKiBEYXRhIHRhYmxlIEhUVFAgZGF0YSBmZXRjaCBzZXJ2aWNlLlxuICovXG5leHBvcnQgY2xhc3MgRGF0YVRhYmxlSHR0cERhdGFGZXRjaFNlcnZpY2U8VD4ge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQsIHB1YmxpYyByZXF1ZXN0UGFyYW1NYXBwZXJTZXJ2aWNlOiBSZXF1ZXN0UGFyYW1NYXBwZXJTZXJ2aWNlKSB7fVxuXG4gIC8qKlxuICAgKiBHZXQgZGF0YSBiaW5kIGV2ZW50IGhhbmRsZXIuXG4gICAqIEBwYXJhbSBvcHRpb25zIFJlcXVlc3Qgb3B0aW9ucyBvciByZXNvdXJjZSBwYXRoLlxuICAgKiBAcGFyYW0gbWFwcGVyIFJlc3BvbnNlIGRhdGEgbWFwcGVyIGNhbGxiYWNrLiBtYXAgc291cmNlIHN0cmVhbSBmb3JtYXQgdG8gZGF0YSB0YWJsZSBleHBlY3RlZCBzdHJlYW0gb3IgYXBwbHkgYWRkaXRpb25hbCBmb3JtYXR0aW5nLlxuICAgKiBAcmV0dXJuIERhdGEgdGFibGUgYmluZCBldmVudCBoYW5kbGVyLlxuICAgKi9cbiAgcHVibGljIG9uRGF0YUJpbmQoXG4gICAgb3B0aW9uczogc3RyaW5nfFJlc291cmNlT3B0aW9ucyxcbiAgICBtYXBwZXI/OiA8UT4ocmVzcG9uc2U6IE9ic2VydmFibGU8UT4pID0+IE9ic2VydmFibGU8RGF0YVRhYmxlUXVlcnlSZXN1bHQ8VD4+LFxuICApOiBEYXRhVGFibGVEYXRhQmluZENhbGxiYWNrPFQ+IHtcbiAgICByZXR1cm4gKHBhcmFtcz86IERhdGFUYWJsZVJlcXVlc3RQYXJhbXMpOiBPYnNlcnZhYmxlPERhdGFUYWJsZVF1ZXJ5UmVzdWx0PFQ+PiA9PiB7XG4gICAgICBjb25zdCByZXF1ZXN0T3B0aW9ucyA9IHRoaXMucmVxdWVzdFBhcmFtTWFwcGVyU2VydmljZS5tYXBSZXF1ZXN0T3B0aW9ucyhvcHRpb25zKTtcbiAgICAgIGxldCBxdWVyeVBhcmFtcyA9IHRoaXMucmVxdWVzdFBhcmFtTWFwcGVyU2VydmljZS5tYXBRdWVyeVBhcmFtcyhyZXF1ZXN0T3B0aW9ucy5vcHRpb25zKTtcblxuICAgICAgaWYgKHBhcmFtcykge1xuICAgICAgICBpZiAocGFyYW1zLmxpbWl0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBxdWVyeVBhcmFtcyA9IHF1ZXJ5UGFyYW1zLnNldCgnbGltaXQnLCBTdHJpbmcocGFyYW1zLmxpbWl0KSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocGFyYW1zLm9mZnNldCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgcXVlcnlQYXJhbXMgPSBxdWVyeVBhcmFtcy5zZXQoJ29mZnNldCcsIFN0cmluZyhwYXJhbXMub2Zmc2V0KSk7XG4gICAgICAgIH1cblxuICAgICAgICBwYXJhbXMuZmllbGRzLmZvckVhY2goKGNvbHVtbjogRGF0YVRhYmxlUXVlcnlGaWVsZCkgPT4ge1xuICAgICAgICAgIGxldCBxdWVyeSA9ICcnO1xuXG4gICAgICAgICAgaWYgKGNvbHVtbi5maWx0ZXJhYmxlKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbHVtbi5maWx0ZXJWYWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgaWYgKGNvbHVtbi5maWx0ZXJWYWx1ZSAhPT0gJycpIHtcbiAgICAgICAgICAgICAgICBxdWVyeSArPSBjb2x1bW4uZmlsdGVyVmFsdWU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShjb2x1bW4uZmlsdGVyVmFsdWUpICYmIGNvbHVtbi5maWx0ZXJWYWx1ZS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgcXVlcnkgKz0gY29sdW1uLmZpbHRlclZhbHVlLmpvaW4oJywnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoY29sdW1uLnNvcnRhYmxlICYmIGNvbHVtbi5zb3J0T3JkZXIgIT09ICcnKSB7XG4gICAgICAgICAgICBxdWVyeSArPSBgfCR7Y29sdW1uLnNvcnRPcmRlcn18JHtjb2x1bW4uc29ydFByaW9yaXR5fWA7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHF1ZXJ5KSB7XG4gICAgICAgICAgICBxdWVyeVBhcmFtcyA9IHF1ZXJ5UGFyYW1zLnNldChjb2x1bW4uZmllbGQsIHF1ZXJ5KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJlcXVlc3RPcHRpb25zLm9wdGlvbnMucGFyYW1zID0gcXVlcnlQYXJhbXM7XG5cbiAgICAgICAgY29uc3QgcmVzb3VyY2UgPSB0aGlzLmh0dHAuZ2V0PGFueT4ocmVxdWVzdE9wdGlvbnMudXJsLCByZXF1ZXN0T3B0aW9ucy5vcHRpb25zIGFzIGFueSkgYXMgT2JzZXJ2YWJsZTxhbnk+O1xuXG4gICAgICAgIGlmIChtYXBwZXIpIHtcbiAgICAgICAgICByZXR1cm4gbWFwcGVyKHJlc291cmNlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXNvdXJjZTtcbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBmaWx0ZXIgdmFsdWUgZXh0cmFjdCBldmVudCBoYW5kbGVyLlxuICAgKiBAcGFyYW0gb3B0aW9ucyBSZXF1ZXN0IG9wdGlvbnMgb3IgcmVzb3VyY2UgcGF0aC5cbiAgICogQHBhcmFtIG1hcHBlciBSZXNwb25zZSBkYXRhIG1hcHBlciBjYWxsYmFjay4gbWFwIHNvdXJjZSBzdHJlYW0gZm9ybWF0IHRvIGRhdGEgdGFibGUgZXhwZWN0ZWQgc3RyZWFtIG9yIGFwcGx5IGFkZGl0aW9uYWwgZm9ybWF0dGluZy5cbiAgICogQHJldHVybiBEYXRhIHRhYmxlIGZpbHRlciBvcHRpb25zIGV2ZW50IGhhbmRsZXIuXG4gICAqL1xuICBwdWJsaWMgb25GaWx0ZXJWYWx1ZUV4dHJhY3QoXG4gICAgb3B0aW9uczogc3RyaW5nfEh0dHBSZXF1ZXN0T3B0aW9ucyxcbiAgICBtYXBwZXI/OiA8UT4ocmVzcG9uc2U6IE9ic2VydmFibGU8UT4pID0+IE9ic2VydmFibGU8RGF0YVRhYmxlRmlsdGVyT3B0aW9uW10+LFxuICApOiBEYXRhVGFibGVGaWx0ZXJWYWx1ZUV4dHJhY3RDYWxsYmFjayB7XG4gICAgcmV0dXJuIChjb2x1bW46IERhdGFUYWJsZUNvbHVtbkNvbXBvbmVudCk6IE9ic2VydmFibGU8RGF0YVRhYmxlRmlsdGVyT3B0aW9uW10+ID0+IHtcbiAgICAgIGNvbnN0IHJlcXVlc3RPcHRpb25zID0gdGhpcy5yZXF1ZXN0UGFyYW1NYXBwZXJTZXJ2aWNlLm1hcFJlcXVlc3RPcHRpb25zKG9wdGlvbnMpO1xuICAgICAgbGV0IHF1ZXJ5UGFyYW1zID0gdGhpcy5yZXF1ZXN0UGFyYW1NYXBwZXJTZXJ2aWNlLm1hcFF1ZXJ5UGFyYW1zKHJlcXVlc3RPcHRpb25zLm9wdGlvbnMpO1xuXG4gICAgICBjb25zdCBmaWx0ZXJGaWVsZCA9IGNvbHVtbi5maWx0ZXJGaWVsZCB8fCBjb2x1bW4uZmllbGQ7XG4gICAgICBxdWVyeVBhcmFtcyA9IHF1ZXJ5UGFyYW1zLnNldCgnZmllbGQnLCBmaWx0ZXJGaWVsZCk7XG5cbiAgICAgIGNvbnN0IHJlc291cmNlID0gdGhpcy5odHRwLmdldDxhbnk+KHJlcXVlc3RPcHRpb25zLnVybCwgeyBwYXJhbXM6IHF1ZXJ5UGFyYW1zLCAuLi5yZXF1ZXN0T3B0aW9ucyB9KSBhcyBPYnNlcnZhYmxlPGFueT47XG5cbiAgICAgIGlmIChtYXBwZXIpIHtcbiAgICAgICAgcmV0dXJuIG1hcHBlcihyZXNvdXJjZSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiByZXNvdXJjZTtcbiAgICB9O1xuICB9XG59XG4iXX0=