/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Data table HTTP data fetch service.
 * @template T
 */
export class DataTableHttpDataFetchService {
    /**
     * @param {?} http
     * @param {?} requestParamMapperService
     */
    constructor(http, requestParamMapperService) {
        this.http = http;
        this.requestParamMapperService = requestParamMapperService;
    }
    /**
     * Get data bind event handler.
     * @param {?} options Request options or resource path.
     * @param {?=} mapper Response data mapper callback. map source stream format to data table expected stream or apply additional formatting.
     * @return {?} Data table bind event handler.
     */
    onDataBind(options, mapper) {
        return (/**
         * @param {?=} params
         * @return {?}
         */
        (params) => {
            /** @type {?} */
            const requestOptions = this.requestParamMapperService.mapRequestOptions(options);
            /** @type {?} */
            let queryParams = this.requestParamMapperService.mapQueryParams(requestOptions.options);
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
                (column) => {
                    /** @type {?} */
                    let query = '';
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
                        query += `|${column.sortOrder}|${column.sortPriority}`;
                    }
                    if (query) {
                        queryParams = queryParams.set(column.field, query);
                    }
                }));
                requestOptions.options.params = queryParams;
                /** @type {?} */
                const resource = (/** @type {?} */ (this.http.get(requestOptions.url, (/** @type {?} */ (requestOptions.options)))));
                if (mapper) {
                    return mapper(resource);
                }
                return resource;
            }
        });
    }
    /**
     * Get filter value extract event handler.
     * @param {?} options Request options or resource path.
     * @param {?=} mapper Response data mapper callback. map source stream format to data table expected stream or apply additional formatting.
     * @return {?} Data table filter options event handler.
     */
    onFilterValueExtract(options, mapper) {
        return (/**
         * @param {?} column
         * @return {?}
         */
        (column) => {
            /** @type {?} */
            const requestOptions = this.requestParamMapperService.mapRequestOptions(options);
            /** @type {?} */
            let queryParams = this.requestParamMapperService.mapQueryParams(requestOptions.options);
            /** @type {?} */
            const filterField = column.filterField || column.field;
            queryParams = queryParams.set('field', filterField);
            /** @type {?} */
            const resource = (/** @type {?} */ (this.http.get(requestOptions.url, Object.assign({ params: queryParams }, requestOptions))));
            if (mapper) {
                return mapper(resource);
            }
            return resource;
        });
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    DataTableHttpDataFetchService.prototype.http;
    /** @type {?} */
    DataTableHttpDataFetchService.prototype.requestParamMapperService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS10YWJsZS1odHRwLWRhdGEtZmV0Y2guc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL29ybmFtZW50dW0vIiwic291cmNlcyI6WyJkYXRhLXRhYmxlLXJlc291cmNlL3NlcnZpY2VzL2RhdGEtdGFibGUtaHR0cC1kYXRhLWZldGNoLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFvQkEsTUFBTSxPQUFPLDZCQUE2Qjs7Ozs7SUFDeEMsWUFBb0IsSUFBZ0IsRUFBUyx5QkFBb0Q7UUFBN0UsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUFTLDhCQUF5QixHQUF6Qix5QkFBeUIsQ0FBMkI7SUFBRyxDQUFDOzs7Ozs7O0lBUTlGLFVBQVUsQ0FDZixPQUErQixFQUMvQixNQUE0RTtRQUU1RTs7OztRQUFPLENBQUMsTUFBK0IsRUFBdUMsRUFBRTs7a0JBQ3hFLGNBQWMsR0FBRyxJQUFJLENBQUMseUJBQXlCLENBQUMsaUJBQWlCLENBQUMsT0FBTyxDQUFDOztnQkFDNUUsV0FBVyxHQUFHLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxjQUFjLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQztZQUV2RixJQUFJLE1BQU0sRUFBRTtnQkFDVixJQUFJLE1BQU0sQ0FBQyxLQUFLLEtBQUssU0FBUyxFQUFFO29CQUM5QixXQUFXLEdBQUcsV0FBVyxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO2lCQUM5RDtnQkFFRCxJQUFJLE1BQU0sQ0FBQyxNQUFNLEtBQUssU0FBUyxFQUFFO29CQUMvQixXQUFXLEdBQUcsV0FBVyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO2lCQUNoRTtnQkFFRCxNQUFNLENBQUMsTUFBTSxDQUFDLE9BQU87Ozs7Z0JBQUMsQ0FBQyxNQUEyQixFQUFFLEVBQUU7O3dCQUNoRCxLQUFLLEdBQUcsRUFBRTtvQkFFZCxJQUFJLE1BQU0sQ0FBQyxVQUFVLEVBQUU7d0JBQ3JCLElBQUksT0FBTyxNQUFNLENBQUMsV0FBVyxLQUFLLFFBQVEsRUFBRTs0QkFDMUMsSUFBSSxNQUFNLENBQUMsV0FBVyxLQUFLLEVBQUUsRUFBRTtnQ0FDN0IsS0FBSyxJQUFJLE1BQU0sQ0FBQyxXQUFXLENBQUM7NkJBQzdCO3lCQUNGOzZCQUFNLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLElBQUksTUFBTSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEVBQUU7NEJBQ3pFLEtBQUssSUFBSSxNQUFNLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQzt5QkFDdkM7cUJBQ0Y7b0JBRUQsSUFBSSxNQUFNLENBQUMsUUFBUSxJQUFJLE1BQU0sQ0FBQyxTQUFTLEtBQUssRUFBRSxFQUFFO3dCQUM5QyxLQUFLLElBQUksSUFBSSxNQUFNLENBQUMsU0FBUyxJQUFJLE1BQU0sQ0FBQyxZQUFZLEVBQUUsQ0FBQztxQkFDeEQ7b0JBRUQsSUFBSSxLQUFLLEVBQUU7d0JBQ1QsV0FBVyxHQUFHLFdBQVcsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQztxQkFDcEQ7Z0JBQ0gsQ0FBQyxFQUFDLENBQUM7Z0JBRUgsY0FBYyxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsV0FBVyxDQUFDOztzQkFFdEMsUUFBUSxHQUFHLG1CQUFBLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFNLGNBQWMsQ0FBQyxHQUFHLEVBQUUsbUJBQUEsY0FBYyxDQUFDLE9BQU8sRUFBTyxDQUFDLEVBQW1CO2dCQUV6RyxJQUFJLE1BQU0sRUFBRTtvQkFDVixPQUFPLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztpQkFDekI7Z0JBRUQsT0FBTyxRQUFRLENBQUM7YUFDakI7UUFDSCxDQUFDLEVBQUM7SUFDSixDQUFDOzs7Ozs7O0lBUU0sb0JBQW9CLENBQ3pCLE9BQWtDLEVBQ2xDLE1BQTRFO1FBRTVFOzs7O1FBQU8sQ0FBQyxNQUFnQyxFQUF1QyxFQUFFOztrQkFDekUsY0FBYyxHQUFHLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLENBQUM7O2dCQUM1RSxXQUFXLEdBQUcsSUFBSSxDQUFDLHlCQUF5QixDQUFDLGNBQWMsQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDOztrQkFFakYsV0FBVyxHQUFHLE1BQU0sQ0FBQyxXQUFXLElBQUksTUFBTSxDQUFDLEtBQUs7WUFDdEQsV0FBVyxHQUFHLFdBQVcsQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLFdBQVcsQ0FBQyxDQUFDOztrQkFFOUMsUUFBUSxHQUFHLG1CQUFBLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFNLGNBQWMsQ0FBQyxHQUFHLGtCQUFJLE1BQU0sRUFBRSxXQUFXLElBQUssY0FBYyxFQUFHLEVBQW1CO1lBRXRILElBQUksTUFBTSxFQUFFO2dCQUNWLE9BQU8sTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2FBQ3pCO1lBRUQsT0FBTyxRQUFRLENBQUM7UUFDbEIsQ0FBQyxFQUFDO0lBQ0osQ0FBQztDQUNGOzs7Ozs7SUF0RmEsNkNBQXdCOztJQUFFLGtFQUEyRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5cbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgRGF0YVRhYmxlUmVxdWVzdFBhcmFtcyB9IGZyb20gJy4uLy4uL2RhdGEtdGFibGUvbW9kZWxzL2RhdGEtdGFibGUtcmVxdWVzdC1wYXJhbXMubW9kZWwnO1xuaW1wb3J0IHsgRGF0YVRhYmxlUXVlcnlSZXN1bHQgfSBmcm9tICcuLi8uLi9kYXRhLXRhYmxlL21vZGVscy9kYXRhLXRhYmxlLXF1ZXJ5LXJlc3VsdC5tb2RlbCc7XG5pbXBvcnQgeyBEYXRhVGFibGVRdWVyeUZpZWxkIH0gZnJvbSAnLi4vLi4vZGF0YS10YWJsZS9tb2RlbHMvZGF0YS10YWJsZS1xdWVyeS1maWVsZC5tb2RlbCc7XG5pbXBvcnQgeyBEYXRhVGFibGVEYXRhQmluZENhbGxiYWNrIH0gZnJvbSAnLi4vLi4vZGF0YS10YWJsZS9tb2RlbHMvZGF0YS10YWJsZS1kYXRhLWJpbmQtY2FsbGJhY2subW9kZWwnO1xuaW1wb3J0IHsgRGF0YVRhYmxlRmlsdGVyVmFsdWVFeHRyYWN0Q2FsbGJhY2sgfSBmcm9tICcuLi8uLi9kYXRhLXRhYmxlL21vZGVscy9kYXRhLXRhYmxlLWZpbHRlci12YWx1ZS1leHRyYWN0LWNhbGxiYWNrLm1vZGVsJztcbmltcG9ydCB7IERhdGFUYWJsZUZpbHRlck9wdGlvbiB9IGZyb20gJy4uLy4uL2RhdGEtdGFibGUvbW9kZWxzL2RhdGEtdGFibGUtZmlsdGVyLW9wdGlvbi5tb2RlbCc7XG5pbXBvcnQgeyBIdHRwUmVxdWVzdE9wdGlvbnMgfSBmcm9tICcuLi8uLi9yZXNvdXJjZS11dGlsaXR5L21vZGVscy9odHRwLXJlcXVlc3Qtb3B0aW9ucy5tb2RlbCc7XG5pbXBvcnQgeyBSZXNvdXJjZU9wdGlvbnMgfSBmcm9tICcuLi8uLi9yZXNvdXJjZS11dGlsaXR5L21vZGVscy9yZXNvdXJjZS1vcHRpb25zLm1vZGVsJztcblxuaW1wb3J0IHsgRGF0YVRhYmxlQ29sdW1uQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vZGF0YS10YWJsZS9jb21wb25lbnRzL2RhdGEtdGFibGUtY29sdW1uL2RhdGEtdGFibGUtY29sdW1uLmNvbXBvbmVudCc7XG5cbmltcG9ydCB7IFJlcXVlc3RQYXJhbU1hcHBlclNlcnZpY2UgfSBmcm9tICcuLi8uLi9yZXNvdXJjZS11dGlsaXR5L3NlcnZpY2VzL3JlcXVlc3QtcGFyYW0tbWFwcGVyLnNlcnZpY2UnO1xuXG4vKipcbiAqIERhdGEgdGFibGUgSFRUUCBkYXRhIGZldGNoIHNlcnZpY2UuXG4gKi9cbmV4cG9ydCBjbGFzcyBEYXRhVGFibGVIdHRwRGF0YUZldGNoU2VydmljZTxUPiB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cENsaWVudCwgcHVibGljIHJlcXVlc3RQYXJhbU1hcHBlclNlcnZpY2U6IFJlcXVlc3RQYXJhbU1hcHBlclNlcnZpY2UpIHt9XG5cbiAgLyoqXG4gICAqIEdldCBkYXRhIGJpbmQgZXZlbnQgaGFuZGxlci5cbiAgICogQHBhcmFtIG9wdGlvbnMgUmVxdWVzdCBvcHRpb25zIG9yIHJlc291cmNlIHBhdGguXG4gICAqIEBwYXJhbSBtYXBwZXIgUmVzcG9uc2UgZGF0YSBtYXBwZXIgY2FsbGJhY2suIG1hcCBzb3VyY2Ugc3RyZWFtIGZvcm1hdCB0byBkYXRhIHRhYmxlIGV4cGVjdGVkIHN0cmVhbSBvciBhcHBseSBhZGRpdGlvbmFsIGZvcm1hdHRpbmcuXG4gICAqIEByZXR1cm4gRGF0YSB0YWJsZSBiaW5kIGV2ZW50IGhhbmRsZXIuXG4gICAqL1xuICBwdWJsaWMgb25EYXRhQmluZChcbiAgICBvcHRpb25zOiBzdHJpbmd8UmVzb3VyY2VPcHRpb25zLFxuICAgIG1hcHBlcj86IDxRPihyZXNwb25zZTogT2JzZXJ2YWJsZTxRPikgPT4gT2JzZXJ2YWJsZTxEYXRhVGFibGVRdWVyeVJlc3VsdDxUPj4sXG4gICk6IERhdGFUYWJsZURhdGFCaW5kQ2FsbGJhY2s8VD4ge1xuICAgIHJldHVybiAocGFyYW1zPzogRGF0YVRhYmxlUmVxdWVzdFBhcmFtcyk6IE9ic2VydmFibGU8RGF0YVRhYmxlUXVlcnlSZXN1bHQ8VD4+ID0+IHtcbiAgICAgIGNvbnN0IHJlcXVlc3RPcHRpb25zID0gdGhpcy5yZXF1ZXN0UGFyYW1NYXBwZXJTZXJ2aWNlLm1hcFJlcXVlc3RPcHRpb25zKG9wdGlvbnMpO1xuICAgICAgbGV0IHF1ZXJ5UGFyYW1zID0gdGhpcy5yZXF1ZXN0UGFyYW1NYXBwZXJTZXJ2aWNlLm1hcFF1ZXJ5UGFyYW1zKHJlcXVlc3RPcHRpb25zLm9wdGlvbnMpO1xuXG4gICAgICBpZiAocGFyYW1zKSB7XG4gICAgICAgIGlmIChwYXJhbXMubGltaXQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHF1ZXJ5UGFyYW1zID0gcXVlcnlQYXJhbXMuc2V0KCdsaW1pdCcsIFN0cmluZyhwYXJhbXMubGltaXQpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwYXJhbXMub2Zmc2V0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBxdWVyeVBhcmFtcyA9IHF1ZXJ5UGFyYW1zLnNldCgnb2Zmc2V0JywgU3RyaW5nKHBhcmFtcy5vZmZzZXQpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHBhcmFtcy5maWVsZHMuZm9yRWFjaCgoY29sdW1uOiBEYXRhVGFibGVRdWVyeUZpZWxkKSA9PiB7XG4gICAgICAgICAgbGV0IHF1ZXJ5ID0gJyc7XG5cbiAgICAgICAgICBpZiAoY29sdW1uLmZpbHRlcmFibGUpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29sdW1uLmZpbHRlclZhbHVlID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBpZiAoY29sdW1uLmZpbHRlclZhbHVlICE9PSAnJykge1xuICAgICAgICAgICAgICAgIHF1ZXJ5ICs9IGNvbHVtbi5maWx0ZXJWYWx1ZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KGNvbHVtbi5maWx0ZXJWYWx1ZSkgJiYgY29sdW1uLmZpbHRlclZhbHVlLmxlbmd0aCkge1xuICAgICAgICAgICAgICBxdWVyeSArPSBjb2x1bW4uZmlsdGVyVmFsdWUuam9pbignLCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChjb2x1bW4uc29ydGFibGUgJiYgY29sdW1uLnNvcnRPcmRlciAhPT0gJycpIHtcbiAgICAgICAgICAgIHF1ZXJ5ICs9IGB8JHtjb2x1bW4uc29ydE9yZGVyfXwke2NvbHVtbi5zb3J0UHJpb3JpdHl9YDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAocXVlcnkpIHtcbiAgICAgICAgICAgIHF1ZXJ5UGFyYW1zID0gcXVlcnlQYXJhbXMuc2V0KGNvbHVtbi5maWVsZCwgcXVlcnkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmVxdWVzdE9wdGlvbnMub3B0aW9ucy5wYXJhbXMgPSBxdWVyeVBhcmFtcztcblxuICAgICAgICBjb25zdCByZXNvdXJjZSA9IHRoaXMuaHR0cC5nZXQ8YW55PihyZXF1ZXN0T3B0aW9ucy51cmwsIHJlcXVlc3RPcHRpb25zLm9wdGlvbnMgYXMgYW55KSBhcyBPYnNlcnZhYmxlPGFueT47XG5cbiAgICAgICAgaWYgKG1hcHBlcikge1xuICAgICAgICAgIHJldHVybiBtYXBwZXIocmVzb3VyY2UpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlc291cmNlO1xuICAgICAgfVxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogR2V0IGZpbHRlciB2YWx1ZSBleHRyYWN0IGV2ZW50IGhhbmRsZXIuXG4gICAqIEBwYXJhbSBvcHRpb25zIFJlcXVlc3Qgb3B0aW9ucyBvciByZXNvdXJjZSBwYXRoLlxuICAgKiBAcGFyYW0gbWFwcGVyIFJlc3BvbnNlIGRhdGEgbWFwcGVyIGNhbGxiYWNrLiBtYXAgc291cmNlIHN0cmVhbSBmb3JtYXQgdG8gZGF0YSB0YWJsZSBleHBlY3RlZCBzdHJlYW0gb3IgYXBwbHkgYWRkaXRpb25hbCBmb3JtYXR0aW5nLlxuICAgKiBAcmV0dXJuIERhdGEgdGFibGUgZmlsdGVyIG9wdGlvbnMgZXZlbnQgaGFuZGxlci5cbiAgICovXG4gIHB1YmxpYyBvbkZpbHRlclZhbHVlRXh0cmFjdChcbiAgICBvcHRpb25zOiBzdHJpbmd8SHR0cFJlcXVlc3RPcHRpb25zLFxuICAgIG1hcHBlcj86IDxRPihyZXNwb25zZTogT2JzZXJ2YWJsZTxRPikgPT4gT2JzZXJ2YWJsZTxEYXRhVGFibGVGaWx0ZXJPcHRpb25bXT4sXG4gICk6IERhdGFUYWJsZUZpbHRlclZhbHVlRXh0cmFjdENhbGxiYWNrIHtcbiAgICByZXR1cm4gKGNvbHVtbjogRGF0YVRhYmxlQ29sdW1uQ29tcG9uZW50KTogT2JzZXJ2YWJsZTxEYXRhVGFibGVGaWx0ZXJPcHRpb25bXT4gPT4ge1xuICAgICAgY29uc3QgcmVxdWVzdE9wdGlvbnMgPSB0aGlzLnJlcXVlc3RQYXJhbU1hcHBlclNlcnZpY2UubWFwUmVxdWVzdE9wdGlvbnMob3B0aW9ucyk7XG4gICAgICBsZXQgcXVlcnlQYXJhbXMgPSB0aGlzLnJlcXVlc3RQYXJhbU1hcHBlclNlcnZpY2UubWFwUXVlcnlQYXJhbXMocmVxdWVzdE9wdGlvbnMub3B0aW9ucyk7XG5cbiAgICAgIGNvbnN0IGZpbHRlckZpZWxkID0gY29sdW1uLmZpbHRlckZpZWxkIHx8IGNvbHVtbi5maWVsZDtcbiAgICAgIHF1ZXJ5UGFyYW1zID0gcXVlcnlQYXJhbXMuc2V0KCdmaWVsZCcsIGZpbHRlckZpZWxkKTtcblxuICAgICAgY29uc3QgcmVzb3VyY2UgPSB0aGlzLmh0dHAuZ2V0PGFueT4ocmVxdWVzdE9wdGlvbnMudXJsLCB7IHBhcmFtczogcXVlcnlQYXJhbXMsIC4uLnJlcXVlc3RPcHRpb25zIH0pIGFzIE9ic2VydmFibGU8YW55PjtcblxuICAgICAgaWYgKG1hcHBlcikge1xuICAgICAgICByZXR1cm4gbWFwcGVyKHJlc291cmNlKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHJlc291cmNlO1xuICAgIH07XG4gIH1cbn1cbiJdfQ==