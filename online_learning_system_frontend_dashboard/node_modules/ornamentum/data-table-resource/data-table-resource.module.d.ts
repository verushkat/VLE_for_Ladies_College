import { ModuleWithProviders } from '@angular/core';
import { DataTableHttpResourceFactoryService } from './services/data-table-http-resource-factory.service';
import { DataTableWebsocketResourceFactoryService } from './services/data-table-websocket-resource-factory.service';
/**
 * Data table data source module.
 */
export declare class DataTableResourceModule {
    /**
     * Set module root configuration overrides
     * @return Module with custom providers
     */
    static forRoot(): ModuleWithProviders;
}
export { DataTableHttpDataFetchService } from './services/data-table-http-data-fetch.service';
export { DataTableHttpResourceFactoryService };
export { DataTableWebsocketDataFetchService } from './services/data-table-websocket-data-fetch.service';
export { DataTableWebsocketResourceFactoryService };
