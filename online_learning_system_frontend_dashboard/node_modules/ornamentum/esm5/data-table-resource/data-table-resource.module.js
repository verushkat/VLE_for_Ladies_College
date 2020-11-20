/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { ResourceUtilityModule } from '../resource-utility/resource-utility.module';
import { DataTableResourceConfigService } from './services/data-table-resource-config.service';
import { DataTableHttpResourceFactoryService } from './services/data-table-http-resource-factory.service';
import { DataTableWebsocketResourceFactoryService } from './services/data-table-websocket-resource-factory.service';
/** @type {?} */
var PROVIDERS = [DataTableHttpResourceFactoryService, DataTableWebsocketResourceFactoryService];
/**
 * Data table data source module.
 */
var DataTableResourceModule = /** @class */ (function () {
    function DataTableResourceModule() {
    }
    /**
     * Set module root configuration overrides
     * @return Module with custom providers
     */
    /**
     * Set module root configuration overrides
     * @return {?} Module with custom providers
     */
    DataTableResourceModule.forRoot = /**
     * Set module root configuration overrides
     * @return {?} Module with custom providers
     */
    function () {
        return {
            ngModule: DataTableResourceModule,
            providers: [DataTableResourceConfigService]
        };
    };
    DataTableResourceModule.decorators = [
        { type: NgModule, args: [{
                    imports: [ResourceUtilityModule],
                    providers: tslib_1.__spread(PROVIDERS)
                },] }
    ];
    return DataTableResourceModule;
}());
export { DataTableResourceModule };
export { DataTableHttpDataFetchService } from './services/data-table-http-data-fetch.service';
export { DataTableHttpResourceFactoryService };
export { DataTableWebsocketDataFetchService } from './services/data-table-websocket-data-fetch.service';
export { DataTableWebsocketResourceFactoryService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS10YWJsZS1yZXNvdXJjZS5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9vcm5hbWVudHVtLyIsInNvdXJjZXMiOlsiZGF0YS10YWJsZS1yZXNvdXJjZS9kYXRhLXRhYmxlLXJlc291cmNlLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBdUIsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTlELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDZDQUE2QyxDQUFDO0FBSXBGLE9BQU8sRUFBRSw4QkFBOEIsRUFBRSxNQUFNLCtDQUErQyxDQUFDO0FBQy9GLE9BQU8sRUFBRSxtQ0FBbUMsRUFBRSxNQUFNLHFEQUFxRCxDQUFDO0FBQzFHLE9BQU8sRUFBRSx3Q0FBd0MsRUFBRSxNQUFNLDBEQUEwRCxDQUFDOztJQUU5RyxTQUFTLEdBQUcsQ0FBQyxtQ0FBbUMsRUFBRSx3Q0FBd0MsQ0FBQzs7OztBQUtqRztJQUFBO0lBZUEsQ0FBQztJQVZDOzs7T0FHRzs7Ozs7SUFDVywrQkFBTzs7OztJQUFyQjtRQUNFLE9BQU87WUFDTCxRQUFRLEVBQUUsdUJBQXVCO1lBQ2pDLFNBQVMsRUFBRSxDQUFDLDhCQUE4QixDQUFDO1NBQzVDLENBQUM7SUFDSixDQUFDOztnQkFkRixRQUFRLFNBQUM7b0JBQ1IsT0FBTyxFQUFFLENBQUMscUJBQXFCLENBQUM7b0JBQ2hDLFNBQVMsbUJBQU0sU0FBUyxDQUFDO2lCQUMxQjs7SUFZRCw4QkFBQztDQUFBLEFBZkQsSUFlQztTQVhZLHVCQUF1QjtBQWFwQyxPQUFPLEVBQUUsNkJBQTZCLEVBQUUsTUFBTSwrQ0FBK0MsQ0FBQztBQUM5RixPQUFPLEVBQUUsbUNBQW1DLEVBQUUsQ0FBQztBQUUvQyxPQUFPLEVBQUUsa0NBQWtDLEVBQUUsTUFBTSxvREFBb0QsQ0FBQztBQUN4RyxPQUFPLEVBQUUsd0NBQXdDLEVBQUUsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1vZHVsZVdpdGhQcm92aWRlcnMsIE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFJlc291cmNlVXRpbGl0eU1vZHVsZSB9IGZyb20gJy4uL3Jlc291cmNlLXV0aWxpdHkvcmVzb3VyY2UtdXRpbGl0eS5tb2R1bGUnO1xuXG5pbXBvcnQgeyBEYXRhVGFibGVIdHRwRGF0YUZldGNoU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvZGF0YS10YWJsZS1odHRwLWRhdGEtZmV0Y2guc2VydmljZSc7XG5pbXBvcnQgeyBEYXRhVGFibGVXZWJzb2NrZXREYXRhRmV0Y2hTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9kYXRhLXRhYmxlLXdlYnNvY2tldC1kYXRhLWZldGNoLnNlcnZpY2UnO1xuaW1wb3J0IHsgRGF0YVRhYmxlUmVzb3VyY2VDb25maWdTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9kYXRhLXRhYmxlLXJlc291cmNlLWNvbmZpZy5zZXJ2aWNlJztcbmltcG9ydCB7IERhdGFUYWJsZUh0dHBSZXNvdXJjZUZhY3RvcnlTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9kYXRhLXRhYmxlLWh0dHAtcmVzb3VyY2UtZmFjdG9yeS5zZXJ2aWNlJztcbmltcG9ydCB7IERhdGFUYWJsZVdlYnNvY2tldFJlc291cmNlRmFjdG9yeVNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL2RhdGEtdGFibGUtd2Vic29ja2V0LXJlc291cmNlLWZhY3Rvcnkuc2VydmljZSc7XG5cbmNvbnN0IFBST1ZJREVSUyA9IFtEYXRhVGFibGVIdHRwUmVzb3VyY2VGYWN0b3J5U2VydmljZSwgRGF0YVRhYmxlV2Vic29ja2V0UmVzb3VyY2VGYWN0b3J5U2VydmljZV07XG5cbi8qKlxuICogRGF0YSB0YWJsZSBkYXRhIHNvdXJjZSBtb2R1bGUuXG4gKi9cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtSZXNvdXJjZVV0aWxpdHlNb2R1bGVdLFxuICBwcm92aWRlcnM6IFsuLi5QUk9WSURFUlNdXG59KVxuZXhwb3J0IGNsYXNzIERhdGFUYWJsZVJlc291cmNlTW9kdWxlIHtcbiAgLyoqXG4gICAqIFNldCBtb2R1bGUgcm9vdCBjb25maWd1cmF0aW9uIG92ZXJyaWRlc1xuICAgKiBAcmV0dXJuIE1vZHVsZSB3aXRoIGN1c3RvbSBwcm92aWRlcnNcbiAgICovXG4gIHB1YmxpYyBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IERhdGFUYWJsZVJlc291cmNlTW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbRGF0YVRhYmxlUmVzb3VyY2VDb25maWdTZXJ2aWNlXVxuICAgIH07XG4gIH1cbn1cblxuZXhwb3J0IHsgRGF0YVRhYmxlSHR0cERhdGFGZXRjaFNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL2RhdGEtdGFibGUtaHR0cC1kYXRhLWZldGNoLnNlcnZpY2UnO1xuZXhwb3J0IHsgRGF0YVRhYmxlSHR0cFJlc291cmNlRmFjdG9yeVNlcnZpY2UgfTtcblxuZXhwb3J0IHsgRGF0YVRhYmxlV2Vic29ja2V0RGF0YUZldGNoU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvZGF0YS10YWJsZS13ZWJzb2NrZXQtZGF0YS1mZXRjaC5zZXJ2aWNlJztcbmV4cG9ydCB7IERhdGFUYWJsZVdlYnNvY2tldFJlc291cmNlRmFjdG9yeVNlcnZpY2UgfTtcbiJdfQ==