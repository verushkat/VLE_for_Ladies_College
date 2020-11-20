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
export class DropdownWebsocketDataFetchService {
    constructor() { }
    /**
     * Initialize websocket connection.
     * @param {?=} config Websocket configuration object reference.
     * @return {?}
     */
    init(config) {
        this.socket = webSocket(config);
        this.subject = new Subject();
    }
    /**
     * Get socket stream reference.
     * @return {?}
     */
    get socketStream() {
        return this.socket;
    }
    /**
     * Websocket data bind event handler.
     * Must call init prior to calling this function.
     * @param {?=} mapper Response data mapper callback. map source stream format to data table expected stream or apply additional formatting.
     * @return {?} Dropdown bind event handler.
     */
    onDataBind(mapper) {
        if (!this.socket) {
            throw Error('Initialize socket data source before data bind.');
        }
        this.socketSubscription = this.socket.subscribe(this.subject);
        return (/**
         * @param {?=} params
         * @return {?}
         */
        (params) => {
            if (params) {
                this.socket.next((/** @type {?} */ ({
                    type: 'data-fetch',
                    filter: params.filter,
                    offset: params.offset,
                    limit: params.limit
                })));
                if (mapper) {
                    return mapper(this.subject);
                }
                return this.subject;
            }
        });
    }
    /**
     * Dispose websocket connection.
     * @return {?}
     */
    dispose() {
        if (this.socket) {
            this.socket.complete();
        }
        if (this.socketSubscription) {
            this.socketSubscription.unsubscribe();
        }
        if (this.subject) {
            this.subject.unsubscribe();
        }
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcGRvd24td2Vic29ja2V0LWRhdGEtZmV0Y2guc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL29ybmFtZW50dW0vIiwic291cmNlcyI6WyJkcm9wZG93bi1yZXNvdXJjZS9zZXJ2aWNlcy9kcm9wZG93bi13ZWJzb2NrZXQtZGF0YS1mZXRjaC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQWdCLE9BQU8sRUFBYyxNQUFNLE1BQU0sQ0FBQztBQUN6RCxPQUFPLEVBQUUsU0FBUyxFQUE0QyxNQUFNLGdCQUFnQixDQUFDOzs7OztBQVNyRixNQUFNLE9BQU8saUNBQWlDO0lBSzVDLGdCQUFlLENBQUM7Ozs7OztJQU1ULElBQUksQ0FBQyxNQUF1RDtRQUNqRSxJQUFJLENBQUMsTUFBTSxHQUFHLFNBQVMsQ0FBTSxNQUFNLENBQUMsQ0FBQztRQUNyQyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksT0FBTyxFQUEwQixDQUFDO0lBQ3ZELENBQUM7Ozs7O0lBS0QsSUFBVyxZQUFZO1FBQ3JCLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUNyQixDQUFDOzs7Ozs7O0lBUU0sVUFBVSxDQUFDLE1BQTJFO1FBQzNGLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ2hCLE1BQU0sS0FBSyxDQUFDLGlEQUFpRCxDQUFDLENBQUM7U0FDaEU7UUFFRCxJQUFJLENBQUMsa0JBQWtCLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBRTlEOzs7O1FBQU8sQ0FBQyxNQUE4QixFQUFzQyxFQUFFO1lBQzVFLElBQUksTUFBTSxFQUFFO2dCQUNWLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLG1CQUFBO29CQUNmLElBQUksRUFBRSxZQUFZO29CQUNsQixNQUFNLEVBQUUsTUFBTSxDQUFDLE1BQU07b0JBQ3JCLE1BQU0sRUFBRSxNQUFNLENBQUMsTUFBTTtvQkFDckIsS0FBSyxFQUFFLE1BQU0sQ0FBQyxLQUFLO2lCQUNwQixFQUFPLENBQUMsQ0FBQztnQkFFVixJQUFJLE1BQU0sRUFBRTtvQkFDVixPQUFPLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7aUJBQzdCO2dCQUVELE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQzthQUNyQjtRQUNILENBQUMsRUFBQztJQUNKLENBQUM7Ozs7O0lBS00sT0FBTztRQUNaLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNmLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLENBQUM7U0FDeEI7UUFFRCxJQUFJLElBQUksQ0FBQyxrQkFBa0IsRUFBRTtZQUMzQixJQUFJLENBQUMsa0JBQWtCLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDdkM7UUFFRCxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDaEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsQ0FBQztTQUM1QjtJQUNILENBQUM7Q0FDRjs7Ozs7O0lBckVDLG1EQUF5RDs7Ozs7SUFDekQsb0RBQWlEOzs7OztJQUNqRCwrREFBeUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTdWJzY3JpcHRpb24sIFN1YmplY3QsIE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHdlYlNvY2tldCwgV2ViU29ja2V0U3ViamVjdCwgV2ViU29ja2V0U3ViamVjdENvbmZpZyB9IGZyb20gJ3J4anMvd2ViU29ja2V0JztcblxuaW1wb3J0IHsgRHJvcGRvd25EYXRhQmluZENhbGxiYWNrIH0gZnJvbSAnLi4vLi4vZHJvcGRvd24vbW9kZWxzL2Ryb3Bkb3duLWRhdGEtYmluZC1jYWxsYmFjay5tb2RlbCc7XG5pbXBvcnQgeyBEcm9wZG93blF1ZXJ5UmVzdWx0IH0gZnJvbSAnLi4vLi4vZHJvcGRvd24vbW9kZWxzL2Ryb3Bkb3duLXF1ZXJ5LXJlc3VsdC5tb2RlbCc7XG5pbXBvcnQgeyBEcm9wZG93blJlcXVlc3RQYXJhbXMgfSBmcm9tICcuLi8uLi9kcm9wZG93bi9tb2RlbHMvZHJvcGRvd24tcmVxdWVzdC1wYXJhbXMubW9kZWwnO1xuXG4vKipcbiAqIERyb3Bkb3duIHdlYnNvY2tldCBkYXRhIGZldGNoIHNlcnZpY2UuXG4gKi9cbmV4cG9ydCBjbGFzcyBEcm9wZG93bldlYnNvY2tldERhdGFGZXRjaFNlcnZpY2U8VD4ge1xuICBwcml2YXRlIHNvY2tldDogV2ViU29ja2V0U3ViamVjdDxEcm9wZG93blF1ZXJ5UmVzdWx0PFQ+PjtcbiAgcHJpdmF0ZSBzdWJqZWN0OiBTdWJqZWN0PERyb3Bkb3duUXVlcnlSZXN1bHQ8VD4+O1xuICBwcml2YXRlIHNvY2tldFN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuXG4gIGNvbnN0cnVjdG9yKCkge31cblxuICAvKipcbiAgICogSW5pdGlhbGl6ZSB3ZWJzb2NrZXQgY29ubmVjdGlvbi5cbiAgICogQHBhcmFtIGNvbmZpZyBXZWJzb2NrZXQgY29uZmlndXJhdGlvbiBvYmplY3QgcmVmZXJlbmNlLlxuICAgKi9cbiAgcHVibGljIGluaXQoY29uZmlnPzogV2ViU29ja2V0U3ViamVjdENvbmZpZzxEcm9wZG93blF1ZXJ5UmVzdWx0PFQ+Pik6IHZvaWQge1xuICAgIHRoaXMuc29ja2V0ID0gd2ViU29ja2V0PGFueT4oY29uZmlnKTtcbiAgICB0aGlzLnN1YmplY3QgPSBuZXcgU3ViamVjdDxEcm9wZG93blF1ZXJ5UmVzdWx0PFQ+PigpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBzb2NrZXQgc3RyZWFtIHJlZmVyZW5jZS5cbiAgICovXG4gIHB1YmxpYyBnZXQgc29ja2V0U3RyZWFtKCk6IFdlYlNvY2tldFN1YmplY3Q8RHJvcGRvd25RdWVyeVJlc3VsdDxUPj4ge1xuICAgIHJldHVybiB0aGlzLnNvY2tldDtcbiAgfVxuXG4gIC8qKlxuICAgKiBXZWJzb2NrZXQgZGF0YSBiaW5kIGV2ZW50IGhhbmRsZXIuXG4gICAqIE11c3QgY2FsbCBpbml0IHByaW9yIHRvIGNhbGxpbmcgdGhpcyBmdW5jdGlvbi5cbiAgICogQHBhcmFtIG1hcHBlciBSZXNwb25zZSBkYXRhIG1hcHBlciBjYWxsYmFjay4gbWFwIHNvdXJjZSBzdHJlYW0gZm9ybWF0IHRvIGRhdGEgdGFibGUgZXhwZWN0ZWQgc3RyZWFtIG9yIGFwcGx5IGFkZGl0aW9uYWwgZm9ybWF0dGluZy5cbiAgICogQHJldHVybiBEcm9wZG93biBiaW5kIGV2ZW50IGhhbmRsZXIuXG4gICAqL1xuICBwdWJsaWMgb25EYXRhQmluZChtYXBwZXI/OiA8UT4ocmVzcG9uc2U6IE9ic2VydmFibGU8UT4pID0+IE9ic2VydmFibGU8RHJvcGRvd25RdWVyeVJlc3VsdDxUPj4pOiBEcm9wZG93bkRhdGFCaW5kQ2FsbGJhY2s8VD4ge1xuICAgIGlmICghdGhpcy5zb2NrZXQpIHtcbiAgICAgIHRocm93IEVycm9yKCdJbml0aWFsaXplIHNvY2tldCBkYXRhIHNvdXJjZSBiZWZvcmUgZGF0YSBiaW5kLicpO1xuICAgIH1cblxuICAgIHRoaXMuc29ja2V0U3Vic2NyaXB0aW9uID0gdGhpcy5zb2NrZXQuc3Vic2NyaWJlKHRoaXMuc3ViamVjdCk7XG5cbiAgICByZXR1cm4gKHBhcmFtcz86IERyb3Bkb3duUmVxdWVzdFBhcmFtcyk6IE9ic2VydmFibGU8RHJvcGRvd25RdWVyeVJlc3VsdDxUPj4gPT4ge1xuICAgICAgaWYgKHBhcmFtcykge1xuICAgICAgICB0aGlzLnNvY2tldC5uZXh0KHtcbiAgICAgICAgICB0eXBlOiAnZGF0YS1mZXRjaCcsXG4gICAgICAgICAgZmlsdGVyOiBwYXJhbXMuZmlsdGVyLFxuICAgICAgICAgIG9mZnNldDogcGFyYW1zLm9mZnNldCxcbiAgICAgICAgICBsaW1pdDogcGFyYW1zLmxpbWl0XG4gICAgICAgIH0gYXMgYW55KTtcblxuICAgICAgICBpZiAobWFwcGVyKSB7XG4gICAgICAgICAgcmV0dXJuIG1hcHBlcih0aGlzLnN1YmplY3QpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuc3ViamVjdDtcbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIERpc3Bvc2Ugd2Vic29ja2V0IGNvbm5lY3Rpb24uXG4gICAqL1xuICBwdWJsaWMgZGlzcG9zZSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5zb2NrZXQpIHtcbiAgICAgIHRoaXMuc29ja2V0LmNvbXBsZXRlKCk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuc29ja2V0U3Vic2NyaXB0aW9uKSB7XG4gICAgICB0aGlzLnNvY2tldFN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnN1YmplY3QpIHtcbiAgICAgIHRoaXMuc3ViamVjdC51bnN1YnNjcmliZSgpO1xuICAgIH1cbiAgfVxufVxuIl19