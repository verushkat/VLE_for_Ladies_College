/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Subject } from 'rxjs';
import { webSocket } from 'rxjs/webSocket';
/**
 * Data table web socket data fetch service.
 * @template T
 */
var /**
 * Data table web socket data fetch service.
 * @template T
 */
DataTableWebsocketDataFetchService = /** @class */ (function () {
    function DataTableWebsocketDataFetchService() {
    }
    /**
     * Initialize web socket connection.
     * @param config Socket configuration parameters.
     */
    /**
     * Initialize web socket connection.
     * @param {?=} config Socket configuration parameters.
     * @return {?}
     */
    DataTableWebsocketDataFetchService.prototype.init = /**
     * Initialize web socket connection.
     * @param {?=} config Socket configuration parameters.
     * @return {?}
     */
    function (config) {
        this.socket = webSocket(config);
        this.subject = new Subject();
    };
    Object.defineProperty(DataTableWebsocketDataFetchService.prototype, "socketStream", {
        /**
         * Get socket stream reference.
         */
        get: /**
         * Get socket stream reference.
         * @return {?}
         */
        function () {
            return this.socket;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Web socket data bind event handler.
     * Must call init prior to calling this function.
     * @param mapper Response data mapper callback. map source stream format to data table expected stream or apply additional formatting.
     * @return Data table bind event handler.
     */
    /**
     * Web socket data bind event handler.
     * Must call init prior to calling this function.
     * @param {?=} mapper Response data mapper callback. map source stream format to data table expected stream or apply additional formatting.
     * @return {?} Data table bind event handler.
     */
    DataTableWebsocketDataFetchService.prototype.onDataBind = /**
     * Web socket data bind event handler.
     * Must call init prior to calling this function.
     * @param {?=} mapper Response data mapper callback. map source stream format to data table expected stream or apply additional formatting.
     * @return {?} Data table bind event handler.
     */
    function (mapper) {
        var _this = this;
        if (!this.socket) {
            throw Error('Initialize socket data source before data bind.');
        }
        this.socketSubscription = this.socket.subscribe(this.subject);
        return (/**
         * @param {?=} params
         * @return {?}
         */
        function (params) {
            if (params) {
                _this.socket.next((/** @type {?} */ ({
                    type: 'data-fetch',
                    offset: params.offset,
                    limit: params.limit,
                    fields: params.fields
                })));
                if (mapper) {
                    return mapper(_this.subject);
                }
                return _this.subject;
            }
        });
    };
    /**
     * Dispose web socket connection.
     */
    /**
     * Dispose web socket connection.
     * @return {?}
     */
    DataTableWebsocketDataFetchService.prototype.dispose = /**
     * Dispose web socket connection.
     * @return {?}
     */
    function () {
        if (this.socket) {
            this.socket.complete();
        }
        if (this.socketSubscription) {
            this.socketSubscription.unsubscribe();
        }
        if (this.subject) {
            this.subject.unsubscribe();
        }
    };
    return DataTableWebsocketDataFetchService;
}());
/**
 * Data table web socket data fetch service.
 * @template T
 */
export { DataTableWebsocketDataFetchService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    DataTableWebsocketDataFetchService.prototype.socket;
    /**
     * @type {?}
     * @private
     */
    DataTableWebsocketDataFetchService.prototype.subject;
    /**
     * @type {?}
     * @private
     */
    DataTableWebsocketDataFetchService.prototype.socketSubscription;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS10YWJsZS13ZWJzb2NrZXQtZGF0YS1mZXRjaC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vb3JuYW1lbnR1bS8iLCJzb3VyY2VzIjpbImRhdGEtdGFibGUtcmVzb3VyY2Uvc2VydmljZXMvZGF0YS10YWJsZS13ZWJzb2NrZXQtZGF0YS1mZXRjaC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQWdCLE9BQU8sRUFBYyxNQUFNLE1BQU0sQ0FBQztBQUN6RCxPQUFPLEVBQUUsU0FBUyxFQUE0QyxNQUFNLGdCQUFnQixDQUFDOzs7OztBQVNyRjs7Ozs7SUFLRTtJQUFlLENBQUM7SUFFaEI7OztPQUdHOzs7Ozs7SUFDSSxpREFBSTs7Ozs7SUFBWCxVQUFZLE1BQXdEO1FBQ2xFLElBQUksQ0FBQyxNQUFNLEdBQUcsU0FBUyxDQUFNLE1BQU0sQ0FBQyxDQUFDO1FBQ3JDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxPQUFPLEVBQTJCLENBQUM7SUFDeEQsQ0FBQztJQUtELHNCQUFXLDREQUFZO1FBSHZCOztXQUVHOzs7OztRQUNIO1lBQ0UsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQ3JCLENBQUM7OztPQUFBO0lBRUQ7Ozs7O09BS0c7Ozs7Ozs7SUFDSSx1REFBVTs7Ozs7O0lBQWpCLFVBQWtCLE1BQTBFO1FBQTVGLGlCQXVCQztRQXRCQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNoQixNQUFNLEtBQUssQ0FBQyxpREFBaUQsQ0FBQyxDQUFDO1NBQ2hFO1FBRUQsSUFBSSxDQUFDLGtCQUFrQixHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUU5RDs7OztRQUFPLFVBQUMsTUFBK0I7WUFDckMsSUFBSSxNQUFNLEVBQUU7Z0JBQ1YsS0FBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsbUJBQUE7b0JBQ2YsSUFBSSxFQUFFLFlBQVk7b0JBQ2xCLE1BQU0sRUFBRSxNQUFNLENBQUMsTUFBTTtvQkFDckIsS0FBSyxFQUFFLE1BQU0sQ0FBQyxLQUFLO29CQUNuQixNQUFNLEVBQUUsTUFBTSxDQUFDLE1BQU07aUJBQ3RCLEVBQU8sQ0FBQyxDQUFDO2dCQUVWLElBQUksTUFBTSxFQUFFO29CQUNWLE9BQU8sTUFBTSxDQUFDLEtBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztpQkFDN0I7Z0JBRUQsT0FBTyxLQUFJLENBQUMsT0FBTyxDQUFDO2FBQ3JCO1FBQ0gsQ0FBQyxFQUFDO0lBQ0osQ0FBQztJQUVEOztPQUVHOzs7OztJQUNJLG9EQUFPOzs7O0lBQWQ7UUFDRSxJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDZixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxDQUFDO1NBQ3hCO1FBRUQsSUFBSSxJQUFJLENBQUMsa0JBQWtCLEVBQUU7WUFDM0IsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFdBQVcsRUFBRSxDQUFDO1NBQ3ZDO1FBRUQsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ2hCLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDNUI7SUFDSCxDQUFDO0lBQ0gseUNBQUM7QUFBRCxDQUFDLEFBdEVELElBc0VDOzs7Ozs7Ozs7OztJQXJFQyxvREFBMEQ7Ozs7O0lBQzFELHFEQUFrRDs7Ozs7SUFDbEQsZ0VBQXlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU3Vic2NyaXB0aW9uLCBTdWJqZWN0LCBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyB3ZWJTb2NrZXQsIFdlYlNvY2tldFN1YmplY3QsIFdlYlNvY2tldFN1YmplY3RDb25maWcgfSBmcm9tICdyeGpzL3dlYlNvY2tldCc7XG5cbmltcG9ydCB7IERhdGFUYWJsZVJlcXVlc3RQYXJhbXMgfSBmcm9tICcuLi8uLi9kYXRhLXRhYmxlL21vZGVscy9kYXRhLXRhYmxlLXJlcXVlc3QtcGFyYW1zLm1vZGVsJztcbmltcG9ydCB7IERhdGFUYWJsZVF1ZXJ5UmVzdWx0IH0gZnJvbSAnLi4vLi4vZGF0YS10YWJsZS9tb2RlbHMvZGF0YS10YWJsZS1xdWVyeS1yZXN1bHQubW9kZWwnO1xuaW1wb3J0IHsgRGF0YVRhYmxlRGF0YUJpbmRDYWxsYmFjayB9IGZyb20gJy4uLy4uL2RhdGEtdGFibGUvbW9kZWxzL2RhdGEtdGFibGUtZGF0YS1iaW5kLWNhbGxiYWNrLm1vZGVsJztcblxuLyoqXG4gKiBEYXRhIHRhYmxlIHdlYiBzb2NrZXQgZGF0YSBmZXRjaCBzZXJ2aWNlLlxuICovXG5leHBvcnQgY2xhc3MgRGF0YVRhYmxlV2Vic29ja2V0RGF0YUZldGNoU2VydmljZTxUPiB7XG4gIHByaXZhdGUgc29ja2V0OiBXZWJTb2NrZXRTdWJqZWN0PERhdGFUYWJsZVF1ZXJ5UmVzdWx0PFQ+PjtcbiAgcHJpdmF0ZSBzdWJqZWN0OiBTdWJqZWN0PERhdGFUYWJsZVF1ZXJ5UmVzdWx0PFQ+PjtcbiAgcHJpdmF0ZSBzb2NrZXRTdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcblxuICBjb25zdHJ1Y3RvcigpIHt9XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemUgd2ViIHNvY2tldCBjb25uZWN0aW9uLlxuICAgKiBAcGFyYW0gY29uZmlnIFNvY2tldCBjb25maWd1cmF0aW9uIHBhcmFtZXRlcnMuXG4gICAqL1xuICBwdWJsaWMgaW5pdChjb25maWc/OiBXZWJTb2NrZXRTdWJqZWN0Q29uZmlnPERhdGFUYWJsZVF1ZXJ5UmVzdWx0PFQ+Pik6IHZvaWQge1xuICAgIHRoaXMuc29ja2V0ID0gd2ViU29ja2V0PGFueT4oY29uZmlnKTtcbiAgICB0aGlzLnN1YmplY3QgPSBuZXcgU3ViamVjdDxEYXRhVGFibGVRdWVyeVJlc3VsdDxUPj4oKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgc29ja2V0IHN0cmVhbSByZWZlcmVuY2UuXG4gICAqL1xuICBwdWJsaWMgZ2V0IHNvY2tldFN0cmVhbSgpOiBXZWJTb2NrZXRTdWJqZWN0PERhdGFUYWJsZVF1ZXJ5UmVzdWx0PFQ+PiB7XG4gICAgcmV0dXJuIHRoaXMuc29ja2V0O1xuICB9XG5cbiAgLyoqXG4gICAqIFdlYiBzb2NrZXQgZGF0YSBiaW5kIGV2ZW50IGhhbmRsZXIuXG4gICAqIE11c3QgY2FsbCBpbml0IHByaW9yIHRvIGNhbGxpbmcgdGhpcyBmdW5jdGlvbi5cbiAgICogQHBhcmFtIG1hcHBlciBSZXNwb25zZSBkYXRhIG1hcHBlciBjYWxsYmFjay4gbWFwIHNvdXJjZSBzdHJlYW0gZm9ybWF0IHRvIGRhdGEgdGFibGUgZXhwZWN0ZWQgc3RyZWFtIG9yIGFwcGx5IGFkZGl0aW9uYWwgZm9ybWF0dGluZy5cbiAgICogQHJldHVybiBEYXRhIHRhYmxlIGJpbmQgZXZlbnQgaGFuZGxlci5cbiAgICovXG4gIHB1YmxpYyBvbkRhdGFCaW5kKG1hcHBlcj86IDxRPihzb3VyY2U6IE9ic2VydmFibGU8UT4pID0+IE9ic2VydmFibGU8RGF0YVRhYmxlUXVlcnlSZXN1bHQ8VD4+KTogRGF0YVRhYmxlRGF0YUJpbmRDYWxsYmFjazxUPiB7XG4gICAgaWYgKCF0aGlzLnNvY2tldCkge1xuICAgICAgdGhyb3cgRXJyb3IoJ0luaXRpYWxpemUgc29ja2V0IGRhdGEgc291cmNlIGJlZm9yZSBkYXRhIGJpbmQuJyk7XG4gICAgfVxuXG4gICAgdGhpcy5zb2NrZXRTdWJzY3JpcHRpb24gPSB0aGlzLnNvY2tldC5zdWJzY3JpYmUodGhpcy5zdWJqZWN0KTtcblxuICAgIHJldHVybiAocGFyYW1zPzogRGF0YVRhYmxlUmVxdWVzdFBhcmFtcyk6IE9ic2VydmFibGU8RGF0YVRhYmxlUXVlcnlSZXN1bHQ8VD4+ID0+IHtcbiAgICAgIGlmIChwYXJhbXMpIHtcbiAgICAgICAgdGhpcy5zb2NrZXQubmV4dCh7XG4gICAgICAgICAgdHlwZTogJ2RhdGEtZmV0Y2gnLFxuICAgICAgICAgIG9mZnNldDogcGFyYW1zLm9mZnNldCxcbiAgICAgICAgICBsaW1pdDogcGFyYW1zLmxpbWl0LFxuICAgICAgICAgIGZpZWxkczogcGFyYW1zLmZpZWxkc1xuICAgICAgICB9IGFzIGFueSk7XG5cbiAgICAgICAgaWYgKG1hcHBlcikge1xuICAgICAgICAgIHJldHVybiBtYXBwZXIodGhpcy5zdWJqZWN0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLnN1YmplY3Q7XG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEaXNwb3NlIHdlYiBzb2NrZXQgY29ubmVjdGlvbi5cbiAgICovXG4gIHB1YmxpYyBkaXNwb3NlKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnNvY2tldCkge1xuICAgICAgdGhpcy5zb2NrZXQuY29tcGxldGUoKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5zb2NrZXRTdWJzY3JpcHRpb24pIHtcbiAgICAgIHRoaXMuc29ja2V0U3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuc3ViamVjdCkge1xuICAgICAgdGhpcy5zdWJqZWN0LnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuICB9XG59XG4iXX0=