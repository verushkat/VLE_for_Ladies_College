import { DataTableWebsocketDataFetchService } from './data-table-websocket-data-fetch.service';
/**
 * Data table web socket data fetch service factory.
 */
export declare class DataTableWebsocketResourceFactoryService {
    /**
     * Get new data table websocket fetch service instance.
     */
    getResourceProvider<T>(): DataTableWebsocketDataFetchService<T>;
}
