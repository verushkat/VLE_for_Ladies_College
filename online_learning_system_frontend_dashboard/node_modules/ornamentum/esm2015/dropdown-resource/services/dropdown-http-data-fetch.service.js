/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Dropdown HTTP data fetch service.
 * @template T
 */
export class DropdownHttpDataFetchService {
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
     * @return {?} Dropdown bind event handler.
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
                if (params.filter && params.filter.value) {
                    queryParams = queryParams.set('field', params.filter.key);
                    queryParams = queryParams.set('filter', params.filter.value);
                }
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
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    DropdownHttpDataFetchService.prototype.http;
    /** @type {?} */
    DropdownHttpDataFetchService.prototype.requestParamMapperService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcGRvd24taHR0cC1kYXRhLWZldGNoLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9vcm5hbWVudHVtLyIsInNvdXJjZXMiOlsiZHJvcGRvd24tcmVzb3VyY2Uvc2VydmljZXMvZHJvcGRvd24taHR0cC1kYXRhLWZldGNoLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFjQSxNQUFNLE9BQU8sNEJBQTRCOzs7OztJQUN2QyxZQUFvQixJQUFnQixFQUFTLHlCQUFvRDtRQUE3RSxTQUFJLEdBQUosSUFBSSxDQUFZO1FBQVMsOEJBQXlCLEdBQXpCLHlCQUF5QixDQUEyQjtJQUFHLENBQUM7Ozs7Ozs7SUFROUYsVUFBVSxDQUNmLE9BQStCLEVBQy9CLE1BQTJFO1FBRTNFOzs7O1FBQU8sQ0FBQyxNQUE4QixFQUFzQyxFQUFFOztrQkFDdEUsY0FBYyxHQUFHLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLENBQUM7O2dCQUM1RSxXQUFXLEdBQUcsSUFBSSxDQUFDLHlCQUF5QixDQUFDLGNBQWMsQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDO1lBRXZGLElBQUksTUFBTSxFQUFFO2dCQUNWLElBQUksTUFBTSxDQUFDLEtBQUssS0FBSyxTQUFTLEVBQUU7b0JBQzlCLFdBQVcsR0FBRyxXQUFXLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxNQUFNLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7aUJBQzlEO2dCQUVELElBQUksTUFBTSxDQUFDLE1BQU0sS0FBSyxTQUFTLEVBQUU7b0JBQy9CLFdBQVcsR0FBRyxXQUFXLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7aUJBQ2hFO2dCQUVELElBQUksTUFBTSxDQUFDLE1BQU0sSUFBSSxNQUFNLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRTtvQkFDeEMsV0FBVyxHQUFHLFdBQVcsQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLE1BQU0sQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7b0JBQzFELFdBQVcsR0FBRyxXQUFXLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxNQUFNLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO2lCQUM5RDtnQkFFRCxjQUFjLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxXQUFXLENBQUM7O3NCQUV0QyxRQUFRLEdBQUcsbUJBQUEsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQU0sY0FBYyxDQUFDLEdBQUcsRUFBRSxtQkFBQSxjQUFjLENBQUMsT0FBTyxFQUFPLENBQUMsRUFBbUI7Z0JBRXpHLElBQUksTUFBTSxFQUFFO29CQUNWLE9BQU8sTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2lCQUN6QjtnQkFFRCxPQUFPLFFBQVEsQ0FBQzthQUNqQjtRQUNILENBQUMsRUFBQztJQUNKLENBQUM7Q0FDRjs7Ozs7O0lBMUNhLDRDQUF3Qjs7SUFBRSxpRUFBMkQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IERyb3Bkb3duRGF0YUJpbmRDYWxsYmFjayB9IGZyb20gJy4uLy4uL2Ryb3Bkb3duL21vZGVscy9kcm9wZG93bi1kYXRhLWJpbmQtY2FsbGJhY2subW9kZWwnO1xuaW1wb3J0IHsgRHJvcGRvd25RdWVyeVJlc3VsdCB9IGZyb20gJy4uLy4uL2Ryb3Bkb3duL21vZGVscy9kcm9wZG93bi1xdWVyeS1yZXN1bHQubW9kZWwnO1xuaW1wb3J0IHsgRHJvcGRvd25SZXF1ZXN0UGFyYW1zIH0gZnJvbSAnLi4vLi4vZHJvcGRvd24vbW9kZWxzL2Ryb3Bkb3duLXJlcXVlc3QtcGFyYW1zLm1vZGVsJztcblxuaW1wb3J0IHsgUmVxdWVzdFBhcmFtTWFwcGVyU2VydmljZSB9IGZyb20gJy4uLy4uL3Jlc291cmNlLXV0aWxpdHkvc2VydmljZXMvcmVxdWVzdC1wYXJhbS1tYXBwZXIuc2VydmljZSc7XG5pbXBvcnQgeyBSZXNvdXJjZU9wdGlvbnMgfSBmcm9tICcuLi8uLi9yZXNvdXJjZS11dGlsaXR5L21vZGVscy9yZXNvdXJjZS1vcHRpb25zLm1vZGVsJztcblxuLyoqXG4gKiBEcm9wZG93biBIVFRQIGRhdGEgZmV0Y2ggc2VydmljZS5cbiAqL1xuZXhwb3J0IGNsYXNzIERyb3Bkb3duSHR0cERhdGFGZXRjaFNlcnZpY2U8VD4ge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQsIHB1YmxpYyByZXF1ZXN0UGFyYW1NYXBwZXJTZXJ2aWNlOiBSZXF1ZXN0UGFyYW1NYXBwZXJTZXJ2aWNlKSB7fVxuXG4gIC8qKlxuICAgKiBHZXQgZGF0YSBiaW5kIGV2ZW50IGhhbmRsZXIuXG4gICAqIEBwYXJhbSBvcHRpb25zIFJlcXVlc3Qgb3B0aW9ucyBvciByZXNvdXJjZSBwYXRoLlxuICAgKiBAcGFyYW0gbWFwcGVyIFJlc3BvbnNlIGRhdGEgbWFwcGVyIGNhbGxiYWNrLiBtYXAgc291cmNlIHN0cmVhbSBmb3JtYXQgdG8gZGF0YSB0YWJsZSBleHBlY3RlZCBzdHJlYW0gb3IgYXBwbHkgYWRkaXRpb25hbCBmb3JtYXR0aW5nLlxuICAgKiBAcmV0dXJuIERyb3Bkb3duIGJpbmQgZXZlbnQgaGFuZGxlci5cbiAgICovXG4gIHB1YmxpYyBvbkRhdGFCaW5kKFxuICAgIG9wdGlvbnM6IHN0cmluZ3xSZXNvdXJjZU9wdGlvbnMsXG4gICAgbWFwcGVyPzogPFE+KHJlc3BvbnNlOiBPYnNlcnZhYmxlPFE+KSA9PiBPYnNlcnZhYmxlPERyb3Bkb3duUXVlcnlSZXN1bHQ8VD4+LFxuICApOiBEcm9wZG93bkRhdGFCaW5kQ2FsbGJhY2s8VD4ge1xuICAgIHJldHVybiAocGFyYW1zPzogRHJvcGRvd25SZXF1ZXN0UGFyYW1zKTogT2JzZXJ2YWJsZTxEcm9wZG93blF1ZXJ5UmVzdWx0PFQ+PiA9PiB7XG4gICAgICBjb25zdCByZXF1ZXN0T3B0aW9ucyA9IHRoaXMucmVxdWVzdFBhcmFtTWFwcGVyU2VydmljZS5tYXBSZXF1ZXN0T3B0aW9ucyhvcHRpb25zKTtcbiAgICAgIGxldCBxdWVyeVBhcmFtcyA9IHRoaXMucmVxdWVzdFBhcmFtTWFwcGVyU2VydmljZS5tYXBRdWVyeVBhcmFtcyhyZXF1ZXN0T3B0aW9ucy5vcHRpb25zKTtcblxuICAgICAgaWYgKHBhcmFtcykge1xuICAgICAgICBpZiAocGFyYW1zLmxpbWl0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBxdWVyeVBhcmFtcyA9IHF1ZXJ5UGFyYW1zLnNldCgnbGltaXQnLCBTdHJpbmcocGFyYW1zLmxpbWl0KSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocGFyYW1zLm9mZnNldCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgcXVlcnlQYXJhbXMgPSBxdWVyeVBhcmFtcy5zZXQoJ29mZnNldCcsIFN0cmluZyhwYXJhbXMub2Zmc2V0KSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocGFyYW1zLmZpbHRlciAmJiBwYXJhbXMuZmlsdGVyLnZhbHVlKSB7XG4gICAgICAgICAgcXVlcnlQYXJhbXMgPSBxdWVyeVBhcmFtcy5zZXQoJ2ZpZWxkJywgcGFyYW1zLmZpbHRlci5rZXkpO1xuICAgICAgICAgIHF1ZXJ5UGFyYW1zID0gcXVlcnlQYXJhbXMuc2V0KCdmaWx0ZXInLCBwYXJhbXMuZmlsdGVyLnZhbHVlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJlcXVlc3RPcHRpb25zLm9wdGlvbnMucGFyYW1zID0gcXVlcnlQYXJhbXM7XG5cbiAgICAgICAgY29uc3QgcmVzb3VyY2UgPSB0aGlzLmh0dHAuZ2V0PGFueT4ocmVxdWVzdE9wdGlvbnMudXJsLCByZXF1ZXN0T3B0aW9ucy5vcHRpb25zIGFzIGFueSkgYXMgT2JzZXJ2YWJsZTxhbnk+O1xuXG4gICAgICAgIGlmIChtYXBwZXIpIHtcbiAgICAgICAgICByZXR1cm4gbWFwcGVyKHJlc291cmNlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXNvdXJjZTtcbiAgICAgIH1cbiAgICB9O1xuICB9XG59XG4iXX0=