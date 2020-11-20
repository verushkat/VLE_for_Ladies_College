import { ModuleWithProviders } from '@angular/core';
import { DropdownHttpResourceFactoryService } from './services/dropdown-http-resource-factory.service';
import { DropdownWebsocketResourceFactoryService } from './services/dropdown-websocket-resource-factory.service';
/**
 * Dropdown data source module.
 */
export declare class DropdownResourceModule {
    /**
     * Set module root configuration overrides.
     * @return Module with custom providers.
     */
    static forRoot(): ModuleWithProviders;
}
export { DropdownHttpDataFetchService } from './services/dropdown-http-data-fetch.service';
export { DropdownHttpResourceFactoryService };
export { DropdownWebsocketDataFetchService } from './services/dropdown-websocket-data-fetch.service';
export { DropdownWebsocketResourceFactoryService };
