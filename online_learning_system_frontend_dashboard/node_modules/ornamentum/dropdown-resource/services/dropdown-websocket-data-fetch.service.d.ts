import { Observable } from 'rxjs';
import { WebSocketSubject, WebSocketSubjectConfig } from 'rxjs/webSocket';
import { DropdownDataBindCallback } from '../../dropdown/models/dropdown-data-bind-callback.model';
import { DropdownQueryResult } from '../../dropdown/models/dropdown-query-result.model';
/**
 * Dropdown websocket data fetch service.
 */
export declare class DropdownWebsocketDataFetchService<T> {
    private socket;
    private subject;
    private socketSubscription;
    constructor();
    /**
     * Initialize websocket connection.
     * @param config Websocket configuration object reference.
     */
    init(config?: WebSocketSubjectConfig<DropdownQueryResult<T>>): void;
    /**
     * Get socket stream reference.
     */
    readonly socketStream: WebSocketSubject<DropdownQueryResult<T>>;
    /**
     * Websocket data bind event handler.
     * Must call init prior to calling this function.
     * @param mapper Response data mapper callback. map source stream format to data table expected stream or apply additional formatting.
     * @return Dropdown bind event handler.
     */
    onDataBind(mapper?: <Q>(response: Observable<Q>) => Observable<DropdownQueryResult<T>>): DropdownDataBindCallback<T>;
    /**
     * Dispose websocket connection.
     */
    dispose(): void;
}
