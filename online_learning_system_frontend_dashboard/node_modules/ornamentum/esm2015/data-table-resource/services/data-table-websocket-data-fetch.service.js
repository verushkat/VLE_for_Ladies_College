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
export class DataTableWebsocketDataFetchService {
    constructor() { }
    /**
     * Initialize web socket connection.
     * @param {?=} config Socket configuration parameters.
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
     * Web socket data bind event handler.
     * Must call init prior to calling this function.
     * @param {?=} mapper Response data mapper callback. map source stream format to data table expected stream or apply additional formatting.
     * @return {?} Data table bind event handler.
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
                    offset: params.offset,
                    limit: params.limit,
                    fields: params.fields
                })));
                if (mapper) {
                    return mapper(this.subject);
                }
                return this.subject;
            }
        });
    }
    /**
     * Dispose web socket connection.
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS10YWJsZS13ZWJzb2NrZXQtZGF0YS1mZXRjaC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vb3JuYW1lbnR1bS8iLCJzb3VyY2VzIjpbImRhdGEtdGFibGUtcmVzb3VyY2Uvc2VydmljZXMvZGF0YS10YWJsZS13ZWJzb2NrZXQtZGF0YS1mZXRjaC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQWdCLE9BQU8sRUFBYyxNQUFNLE1BQU0sQ0FBQztBQUN6RCxPQUFPLEVBQUUsU0FBUyxFQUE0QyxNQUFNLGdCQUFnQixDQUFDOzs7OztBQVNyRixNQUFNLE9BQU8sa0NBQWtDO0lBSzdDLGdCQUFlLENBQUM7Ozs7OztJQU1ULElBQUksQ0FBQyxNQUF3RDtRQUNsRSxJQUFJLENBQUMsTUFBTSxHQUFHLFNBQVMsQ0FBTSxNQUFNLENBQUMsQ0FBQztRQUNyQyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksT0FBTyxFQUEyQixDQUFDO0lBQ3hELENBQUM7Ozs7O0lBS0QsSUFBVyxZQUFZO1FBQ3JCLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUNyQixDQUFDOzs7Ozs7O0lBUU0sVUFBVSxDQUFDLE1BQTBFO1FBQzFGLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ2hCLE1BQU0sS0FBSyxDQUFDLGlEQUFpRCxDQUFDLENBQUM7U0FDaEU7UUFFRCxJQUFJLENBQUMsa0JBQWtCLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBRTlEOzs7O1FBQU8sQ0FBQyxNQUErQixFQUF1QyxFQUFFO1lBQzlFLElBQUksTUFBTSxFQUFFO2dCQUNWLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLG1CQUFBO29CQUNmLElBQUksRUFBRSxZQUFZO29CQUNsQixNQUFNLEVBQUUsTUFBTSxDQUFDLE1BQU07b0JBQ3JCLEtBQUssRUFBRSxNQUFNLENBQUMsS0FBSztvQkFDbkIsTUFBTSxFQUFFLE1BQU0sQ0FBQyxNQUFNO2lCQUN0QixFQUFPLENBQUMsQ0FBQztnQkFFVixJQUFJLE1BQU0sRUFBRTtvQkFDVixPQUFPLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7aUJBQzdCO2dCQUVELE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQzthQUNyQjtRQUNILENBQUMsRUFBQztJQUNKLENBQUM7Ozs7O0lBS00sT0FBTztRQUNaLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNmLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLENBQUM7U0FDeEI7UUFFRCxJQUFJLElBQUksQ0FBQyxrQkFBa0IsRUFBRTtZQUMzQixJQUFJLENBQUMsa0JBQWtCLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDdkM7UUFFRCxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDaEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsQ0FBQztTQUM1QjtJQUNILENBQUM7Q0FDRjs7Ozs7O0lBckVDLG9EQUEwRDs7Ozs7SUFDMUQscURBQWtEOzs7OztJQUNsRCxnRUFBeUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTdWJzY3JpcHRpb24sIFN1YmplY3QsIE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHdlYlNvY2tldCwgV2ViU29ja2V0U3ViamVjdCwgV2ViU29ja2V0U3ViamVjdENvbmZpZyB9IGZyb20gJ3J4anMvd2ViU29ja2V0JztcblxuaW1wb3J0IHsgRGF0YVRhYmxlUmVxdWVzdFBhcmFtcyB9IGZyb20gJy4uLy4uL2RhdGEtdGFibGUvbW9kZWxzL2RhdGEtdGFibGUtcmVxdWVzdC1wYXJhbXMubW9kZWwnO1xuaW1wb3J0IHsgRGF0YVRhYmxlUXVlcnlSZXN1bHQgfSBmcm9tICcuLi8uLi9kYXRhLXRhYmxlL21vZGVscy9kYXRhLXRhYmxlLXF1ZXJ5LXJlc3VsdC5tb2RlbCc7XG5pbXBvcnQgeyBEYXRhVGFibGVEYXRhQmluZENhbGxiYWNrIH0gZnJvbSAnLi4vLi4vZGF0YS10YWJsZS9tb2RlbHMvZGF0YS10YWJsZS1kYXRhLWJpbmQtY2FsbGJhY2subW9kZWwnO1xuXG4vKipcbiAqIERhdGEgdGFibGUgd2ViIHNvY2tldCBkYXRhIGZldGNoIHNlcnZpY2UuXG4gKi9cbmV4cG9ydCBjbGFzcyBEYXRhVGFibGVXZWJzb2NrZXREYXRhRmV0Y2hTZXJ2aWNlPFQ+IHtcbiAgcHJpdmF0ZSBzb2NrZXQ6IFdlYlNvY2tldFN1YmplY3Q8RGF0YVRhYmxlUXVlcnlSZXN1bHQ8VD4+O1xuICBwcml2YXRlIHN1YmplY3Q6IFN1YmplY3Q8RGF0YVRhYmxlUXVlcnlSZXN1bHQ8VD4+O1xuICBwcml2YXRlIHNvY2tldFN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuXG4gIGNvbnN0cnVjdG9yKCkge31cblxuICAvKipcbiAgICogSW5pdGlhbGl6ZSB3ZWIgc29ja2V0IGNvbm5lY3Rpb24uXG4gICAqIEBwYXJhbSBjb25maWcgU29ja2V0IGNvbmZpZ3VyYXRpb24gcGFyYW1ldGVycy5cbiAgICovXG4gIHB1YmxpYyBpbml0KGNvbmZpZz86IFdlYlNvY2tldFN1YmplY3RDb25maWc8RGF0YVRhYmxlUXVlcnlSZXN1bHQ8VD4+KTogdm9pZCB7XG4gICAgdGhpcy5zb2NrZXQgPSB3ZWJTb2NrZXQ8YW55Pihjb25maWcpO1xuICAgIHRoaXMuc3ViamVjdCA9IG5ldyBTdWJqZWN0PERhdGFUYWJsZVF1ZXJ5UmVzdWx0PFQ+PigpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBzb2NrZXQgc3RyZWFtIHJlZmVyZW5jZS5cbiAgICovXG4gIHB1YmxpYyBnZXQgc29ja2V0U3RyZWFtKCk6IFdlYlNvY2tldFN1YmplY3Q8RGF0YVRhYmxlUXVlcnlSZXN1bHQ8VD4+IHtcbiAgICByZXR1cm4gdGhpcy5zb2NrZXQ7XG4gIH1cblxuICAvKipcbiAgICogV2ViIHNvY2tldCBkYXRhIGJpbmQgZXZlbnQgaGFuZGxlci5cbiAgICogTXVzdCBjYWxsIGluaXQgcHJpb3IgdG8gY2FsbGluZyB0aGlzIGZ1bmN0aW9uLlxuICAgKiBAcGFyYW0gbWFwcGVyIFJlc3BvbnNlIGRhdGEgbWFwcGVyIGNhbGxiYWNrLiBtYXAgc291cmNlIHN0cmVhbSBmb3JtYXQgdG8gZGF0YSB0YWJsZSBleHBlY3RlZCBzdHJlYW0gb3IgYXBwbHkgYWRkaXRpb25hbCBmb3JtYXR0aW5nLlxuICAgKiBAcmV0dXJuIERhdGEgdGFibGUgYmluZCBldmVudCBoYW5kbGVyLlxuICAgKi9cbiAgcHVibGljIG9uRGF0YUJpbmQobWFwcGVyPzogPFE+KHNvdXJjZTogT2JzZXJ2YWJsZTxRPikgPT4gT2JzZXJ2YWJsZTxEYXRhVGFibGVRdWVyeVJlc3VsdDxUPj4pOiBEYXRhVGFibGVEYXRhQmluZENhbGxiYWNrPFQ+IHtcbiAgICBpZiAoIXRoaXMuc29ja2V0KSB7XG4gICAgICB0aHJvdyBFcnJvcignSW5pdGlhbGl6ZSBzb2NrZXQgZGF0YSBzb3VyY2UgYmVmb3JlIGRhdGEgYmluZC4nKTtcbiAgICB9XG5cbiAgICB0aGlzLnNvY2tldFN1YnNjcmlwdGlvbiA9IHRoaXMuc29ja2V0LnN1YnNjcmliZSh0aGlzLnN1YmplY3QpO1xuXG4gICAgcmV0dXJuIChwYXJhbXM/OiBEYXRhVGFibGVSZXF1ZXN0UGFyYW1zKTogT2JzZXJ2YWJsZTxEYXRhVGFibGVRdWVyeVJlc3VsdDxUPj4gPT4ge1xuICAgICAgaWYgKHBhcmFtcykge1xuICAgICAgICB0aGlzLnNvY2tldC5uZXh0KHtcbiAgICAgICAgICB0eXBlOiAnZGF0YS1mZXRjaCcsXG4gICAgICAgICAgb2Zmc2V0OiBwYXJhbXMub2Zmc2V0LFxuICAgICAgICAgIGxpbWl0OiBwYXJhbXMubGltaXQsXG4gICAgICAgICAgZmllbGRzOiBwYXJhbXMuZmllbGRzXG4gICAgICAgIH0gYXMgYW55KTtcblxuICAgICAgICBpZiAobWFwcGVyKSB7XG4gICAgICAgICAgcmV0dXJuIG1hcHBlcih0aGlzLnN1YmplY3QpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuc3ViamVjdDtcbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIERpc3Bvc2Ugd2ViIHNvY2tldCBjb25uZWN0aW9uLlxuICAgKi9cbiAgcHVibGljIGRpc3Bvc2UoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuc29ja2V0KSB7XG4gICAgICB0aGlzLnNvY2tldC5jb21wbGV0ZSgpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnNvY2tldFN1YnNjcmlwdGlvbikge1xuICAgICAgdGhpcy5zb2NrZXRTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5zdWJqZWN0KSB7XG4gICAgICB0aGlzLnN1YmplY3QudW5zdWJzY3JpYmUoKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==