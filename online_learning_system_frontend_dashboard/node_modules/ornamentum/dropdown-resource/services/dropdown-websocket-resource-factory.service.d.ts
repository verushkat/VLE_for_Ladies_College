import { DropdownWebsocketDataFetchService } from './dropdown-websocket-data-fetch.service';
/**
 * Dropdown web socket data fetch service factory.
 */
export declare class DropdownWebsocketResourceFactoryService {
    /**
     * Get new dropdown websocket fetch service instance.
     */
    getResourceProvider<T>(): DropdownWebsocketDataFetchService<T>;
}
