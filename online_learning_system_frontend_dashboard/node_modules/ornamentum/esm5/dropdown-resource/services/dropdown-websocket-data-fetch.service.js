/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Subject } from 'rxjs';
import { webSocket } from 'rxjs/webSocket';
/**
 * Dropdown websocket data fetch service.
 * @template T
 */
var /**
 * Dropdown websocket data fetch service.
 * @template T
 */
DropdownWebsocketDataFetchService = /** @class */ (function () {
    function DropdownWebsocketDataFetchService() {
    }
    /**
     * Initialize websocket connection.
     * @param config Websocket configuration object reference.
     */
    /**
     * Initialize websocket connection.
     * @param {?=} config Websocket configuration object reference.
     * @return {?}
     */
    DropdownWebsocketDataFetchService.prototype.init = /**
     * Initialize websocket connection.
     * @param {?=} config Websocket configuration object reference.
     * @return {?}
     */
    function (config) {
        this.socket = webSocket(config);
        this.subject = new Subject();
    };
    Object.defineProperty(DropdownWebsocketDataFetchService.prototype, "socketStream", {
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
     * Websocket data bind event handler.
     * Must call init prior to calling this function.
     * @param mapper Response data mapper callback. map source stream format to data table expected stream or apply additional formatting.
     * @return Dropdown bind event handler.
     */
    /**
     * Websocket data bind event handler.
     * Must call init prior to calling this function.
     * @param {?=} mapper Response data mapper callback. map source stream format to data table expected stream or apply additional formatting.
     * @return {?} Dropdown bind event handler.
     */
    DropdownWebsocketDataFetchService.prototype.onDataBind = /**
     * Websocket data bind event handler.
     * Must call init prior to calling this function.
     * @param {?=} mapper Response data mapper callback. map source stream format to data table expected stream or apply additional formatting.
     * @return {?} Dropdown bind event handler.
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
                    filter: params.filter,
                    offset: params.offset,
                    limit: params.limit
                })));
                if (mapper) {
                    return mapper(_this.subject);
                }
                return _this.subject;
            }
        });
    };
    /**
     * Dispose websocket connection.
     */
    /**
     * Dispose websocket connection.
     * @return {?}
     */
    DropdownWebsocketDataFetchService.prototype.dispose = /**
     * Dispose websocket connection.
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
    return DropdownWebsocketDataFetchService;
}());
/**
 * Dropdown websocket data fetch service.
 * @template T
 */
export { DropdownWebsocketDataFetchService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    DropdownWebsocketDataFetchService.prototype.socket;
    /**
     * @type {?}
     * @private
     */
    DropdownWebsocketDataFetchService.prototype.subject;
    /**
     * @type {?}
     * @private
     */
    DropdownWebsocketDataFetchService.prototype.socketSubscription;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcGRvd24td2Vic29ja2V0LWRhdGEtZmV0Y2guc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL29ybmFtZW50dW0vIiwic291cmNlcyI6WyJkcm9wZG93bi1yZXNvdXJjZS9zZXJ2aWNlcy9kcm9wZG93bi13ZWJzb2NrZXQtZGF0YS1mZXRjaC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQWdCLE9BQU8sRUFBYyxNQUFNLE1BQU0sQ0FBQztBQUN6RCxPQUFPLEVBQUUsU0FBUyxFQUE0QyxNQUFNLGdCQUFnQixDQUFDOzs7OztBQVNyRjs7Ozs7SUFLRTtJQUFlLENBQUM7SUFFaEI7OztPQUdHOzs7Ozs7SUFDSSxnREFBSTs7Ozs7SUFBWCxVQUFZLE1BQXVEO1FBQ2pFLElBQUksQ0FBQyxNQUFNLEdBQUcsU0FBUyxDQUFNLE1BQU0sQ0FBQyxDQUFDO1FBQ3JDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxPQUFPLEVBQTBCLENBQUM7SUFDdkQsQ0FBQztJQUtELHNCQUFXLDJEQUFZO1FBSHZCOztXQUVHOzs7OztRQUNIO1lBQ0UsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQ3JCLENBQUM7OztPQUFBO0lBRUQ7Ozs7O09BS0c7Ozs7Ozs7SUFDSSxzREFBVTs7Ozs7O0lBQWpCLFVBQWtCLE1BQTJFO1FBQTdGLGlCQXVCQztRQXRCQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNoQixNQUFNLEtBQUssQ0FBQyxpREFBaUQsQ0FBQyxDQUFDO1NBQ2hFO1FBRUQsSUFBSSxDQUFDLGtCQUFrQixHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUU5RDs7OztRQUFPLFVBQUMsTUFBOEI7WUFDcEMsSUFBSSxNQUFNLEVBQUU7Z0JBQ1YsS0FBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsbUJBQUE7b0JBQ2YsSUFBSSxFQUFFLFlBQVk7b0JBQ2xCLE1BQU0sRUFBRSxNQUFNLENBQUMsTUFBTTtvQkFDckIsTUFBTSxFQUFFLE1BQU0sQ0FBQyxNQUFNO29CQUNyQixLQUFLLEVBQUUsTUFBTSxDQUFDLEtBQUs7aUJBQ3BCLEVBQU8sQ0FBQyxDQUFDO2dCQUVWLElBQUksTUFBTSxFQUFFO29CQUNWLE9BQU8sTUFBTSxDQUFDLEtBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztpQkFDN0I7Z0JBRUQsT0FBTyxLQUFJLENBQUMsT0FBTyxDQUFDO2FBQ3JCO1FBQ0gsQ0FBQyxFQUFDO0lBQ0osQ0FBQztJQUVEOztPQUVHOzs7OztJQUNJLG1EQUFPOzs7O0lBQWQ7UUFDRSxJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDZixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxDQUFDO1NBQ3hCO1FBRUQsSUFBSSxJQUFJLENBQUMsa0JBQWtCLEVBQUU7WUFDM0IsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFdBQVcsRUFBRSxDQUFDO1NBQ3ZDO1FBRUQsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ2hCLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDNUI7SUFDSCxDQUFDO0lBQ0gsd0NBQUM7QUFBRCxDQUFDLEFBdEVELElBc0VDOzs7Ozs7Ozs7OztJQXJFQyxtREFBeUQ7Ozs7O0lBQ3pELG9EQUFpRDs7Ozs7SUFDakQsK0RBQXlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU3Vic2NyaXB0aW9uLCBTdWJqZWN0LCBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyB3ZWJTb2NrZXQsIFdlYlNvY2tldFN1YmplY3QsIFdlYlNvY2tldFN1YmplY3RDb25maWcgfSBmcm9tICdyeGpzL3dlYlNvY2tldCc7XG5cbmltcG9ydCB7IERyb3Bkb3duRGF0YUJpbmRDYWxsYmFjayB9IGZyb20gJy4uLy4uL2Ryb3Bkb3duL21vZGVscy9kcm9wZG93bi1kYXRhLWJpbmQtY2FsbGJhY2subW9kZWwnO1xuaW1wb3J0IHsgRHJvcGRvd25RdWVyeVJlc3VsdCB9IGZyb20gJy4uLy4uL2Ryb3Bkb3duL21vZGVscy9kcm9wZG93bi1xdWVyeS1yZXN1bHQubW9kZWwnO1xuaW1wb3J0IHsgRHJvcGRvd25SZXF1ZXN0UGFyYW1zIH0gZnJvbSAnLi4vLi4vZHJvcGRvd24vbW9kZWxzL2Ryb3Bkb3duLXJlcXVlc3QtcGFyYW1zLm1vZGVsJztcblxuLyoqXG4gKiBEcm9wZG93biB3ZWJzb2NrZXQgZGF0YSBmZXRjaCBzZXJ2aWNlLlxuICovXG5leHBvcnQgY2xhc3MgRHJvcGRvd25XZWJzb2NrZXREYXRhRmV0Y2hTZXJ2aWNlPFQ+IHtcbiAgcHJpdmF0ZSBzb2NrZXQ6IFdlYlNvY2tldFN1YmplY3Q8RHJvcGRvd25RdWVyeVJlc3VsdDxUPj47XG4gIHByaXZhdGUgc3ViamVjdDogU3ViamVjdDxEcm9wZG93blF1ZXJ5UmVzdWx0PFQ+PjtcbiAgcHJpdmF0ZSBzb2NrZXRTdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcblxuICBjb25zdHJ1Y3RvcigpIHt9XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemUgd2Vic29ja2V0IGNvbm5lY3Rpb24uXG4gICAqIEBwYXJhbSBjb25maWcgV2Vic29ja2V0IGNvbmZpZ3VyYXRpb24gb2JqZWN0IHJlZmVyZW5jZS5cbiAgICovXG4gIHB1YmxpYyBpbml0KGNvbmZpZz86IFdlYlNvY2tldFN1YmplY3RDb25maWc8RHJvcGRvd25RdWVyeVJlc3VsdDxUPj4pOiB2b2lkIHtcbiAgICB0aGlzLnNvY2tldCA9IHdlYlNvY2tldDxhbnk+KGNvbmZpZyk7XG4gICAgdGhpcy5zdWJqZWN0ID0gbmV3IFN1YmplY3Q8RHJvcGRvd25RdWVyeVJlc3VsdDxUPj4oKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgc29ja2V0IHN0cmVhbSByZWZlcmVuY2UuXG4gICAqL1xuICBwdWJsaWMgZ2V0IHNvY2tldFN0cmVhbSgpOiBXZWJTb2NrZXRTdWJqZWN0PERyb3Bkb3duUXVlcnlSZXN1bHQ8VD4+IHtcbiAgICByZXR1cm4gdGhpcy5zb2NrZXQ7XG4gIH1cblxuICAvKipcbiAgICogV2Vic29ja2V0IGRhdGEgYmluZCBldmVudCBoYW5kbGVyLlxuICAgKiBNdXN0IGNhbGwgaW5pdCBwcmlvciB0byBjYWxsaW5nIHRoaXMgZnVuY3Rpb24uXG4gICAqIEBwYXJhbSBtYXBwZXIgUmVzcG9uc2UgZGF0YSBtYXBwZXIgY2FsbGJhY2suIG1hcCBzb3VyY2Ugc3RyZWFtIGZvcm1hdCB0byBkYXRhIHRhYmxlIGV4cGVjdGVkIHN0cmVhbSBvciBhcHBseSBhZGRpdGlvbmFsIGZvcm1hdHRpbmcuXG4gICAqIEByZXR1cm4gRHJvcGRvd24gYmluZCBldmVudCBoYW5kbGVyLlxuICAgKi9cbiAgcHVibGljIG9uRGF0YUJpbmQobWFwcGVyPzogPFE+KHJlc3BvbnNlOiBPYnNlcnZhYmxlPFE+KSA9PiBPYnNlcnZhYmxlPERyb3Bkb3duUXVlcnlSZXN1bHQ8VD4+KTogRHJvcGRvd25EYXRhQmluZENhbGxiYWNrPFQ+IHtcbiAgICBpZiAoIXRoaXMuc29ja2V0KSB7XG4gICAgICB0aHJvdyBFcnJvcignSW5pdGlhbGl6ZSBzb2NrZXQgZGF0YSBzb3VyY2UgYmVmb3JlIGRhdGEgYmluZC4nKTtcbiAgICB9XG5cbiAgICB0aGlzLnNvY2tldFN1YnNjcmlwdGlvbiA9IHRoaXMuc29ja2V0LnN1YnNjcmliZSh0aGlzLnN1YmplY3QpO1xuXG4gICAgcmV0dXJuIChwYXJhbXM/OiBEcm9wZG93blJlcXVlc3RQYXJhbXMpOiBPYnNlcnZhYmxlPERyb3Bkb3duUXVlcnlSZXN1bHQ8VD4+ID0+IHtcbiAgICAgIGlmIChwYXJhbXMpIHtcbiAgICAgICAgdGhpcy5zb2NrZXQubmV4dCh7XG4gICAgICAgICAgdHlwZTogJ2RhdGEtZmV0Y2gnLFxuICAgICAgICAgIGZpbHRlcjogcGFyYW1zLmZpbHRlcixcbiAgICAgICAgICBvZmZzZXQ6IHBhcmFtcy5vZmZzZXQsXG4gICAgICAgICAgbGltaXQ6IHBhcmFtcy5saW1pdFxuICAgICAgICB9IGFzIGFueSk7XG5cbiAgICAgICAgaWYgKG1hcHBlcikge1xuICAgICAgICAgIHJldHVybiBtYXBwZXIodGhpcy5zdWJqZWN0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLnN1YmplY3Q7XG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEaXNwb3NlIHdlYnNvY2tldCBjb25uZWN0aW9uLlxuICAgKi9cbiAgcHVibGljIGRpc3Bvc2UoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuc29ja2V0KSB7XG4gICAgICB0aGlzLnNvY2tldC5jb21wbGV0ZSgpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnNvY2tldFN1YnNjcmlwdGlvbikge1xuICAgICAgdGhpcy5zb2NrZXRTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5zdWJqZWN0KSB7XG4gICAgICB0aGlzLnN1YmplY3QudW5zdWJzY3JpYmUoKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==