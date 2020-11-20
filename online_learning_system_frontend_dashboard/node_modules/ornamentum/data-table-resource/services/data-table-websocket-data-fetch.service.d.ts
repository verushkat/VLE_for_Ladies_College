import { Observable } from 'rxjs';
import { WebSocketSubject, WebSocketSubjectConfig } from 'rxjs/webSocket';
import { DataTableQueryResult } from '../../data-table/models/data-table-query-result.model';
import { DataTableDataBindCallback } from '../../data-table/models/data-table-data-bind-callback.model';
/**
 * Data table web socket data fetch service.
 */
export declare class DataTableWebsocketDataFetchService<T> {
    private socket;
    private subject;
    private socketSubscription;
    constructor();
    /**
     * Initialize web socket connection.
     * @param config Socket configuration parameters.
     */
    init(config?: WebSocketSubjectConfig<DataTableQueryResult<T>>): void;
    /**
     * Get socket stream reference.
     */
    readonly socketStream: WebSocketSubject<DataTableQueryResult<T>>;
    /**
     * Web socket data bind event handler.
     * Must call init prior to calling this function.
     * @param mapper Response data mapper callback. map source stream format to data table expected stream or apply additional formatting.
     * @return Data table bind event handler.
     */
    onDataBind(mapper?: <Q>(source: Observable<Q>) => Observable<DataTableQueryResult<T>>): DataTableDataBindCallback<T>;
    /**
     * Dispose web socket connection.
     */
    dispose(): void;
}
