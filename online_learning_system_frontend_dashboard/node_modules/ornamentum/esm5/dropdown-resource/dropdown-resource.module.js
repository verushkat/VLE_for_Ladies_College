/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { ResourceUtilityModule } from '../resource-utility/resource-utility.module';
import { DropdownResourceConfigService } from './services/dropdown-resource-config.service';
import { DropdownHttpResourceFactoryService } from './services/dropdown-http-resource-factory.service';
import { DropdownWebsocketResourceFactoryService } from './services/dropdown-websocket-resource-factory.service';
/** @type {?} */
var PROVIDERS = [DropdownHttpResourceFactoryService, DropdownWebsocketResourceFactoryService];
/**
 * Dropdown data source module.
 */
var DropdownResourceModule = /** @class */ (function () {
    function DropdownResourceModule() {
    }
    /**
     * Set module root configuration overrides.
     * @return Module with custom providers.
     */
    /**
     * Set module root configuration overrides.
     * @return {?} Module with custom providers.
     */
    DropdownResourceModule.forRoot = /**
     * Set module root configuration overrides.
     * @return {?} Module with custom providers.
     */
    function () {
        return {
            ngModule: DropdownResourceModule,
            providers: [DropdownResourceConfigService]
        };
    };
    DropdownResourceModule.decorators = [
        { type: NgModule, args: [{
                    imports: [ResourceUtilityModule],
                    providers: tslib_1.__spread(PROVIDERS)
                },] }
    ];
    return DropdownResourceModule;
}());
export { DropdownResourceModule };
export { DropdownHttpDataFetchService } from './services/dropdown-http-data-fetch.service';
export { DropdownHttpResourceFactoryService };
export { DropdownWebsocketDataFetchService } from './services/dropdown-websocket-data-fetch.service';
export { DropdownWebsocketResourceFactoryService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcGRvd24tcmVzb3VyY2UubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vb3JuYW1lbnR1bS8iLCJzb3VyY2VzIjpbImRyb3Bkb3duLXJlc291cmNlL2Ryb3Bkb3duLXJlc291cmNlLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBdUIsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTlELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDZDQUE2QyxDQUFDO0FBSXBGLE9BQU8sRUFBRSw2QkFBNkIsRUFBRSxNQUFNLDZDQUE2QyxDQUFDO0FBQzVGLE9BQU8sRUFBRSxrQ0FBa0MsRUFBRSxNQUFNLG1EQUFtRCxDQUFDO0FBQ3ZHLE9BQU8sRUFBRSx1Q0FBdUMsRUFBRSxNQUFNLHdEQUF3RCxDQUFDOztJQUUzRyxTQUFTLEdBQUcsQ0FBQyxrQ0FBa0MsRUFBRSx1Q0FBdUMsQ0FBQzs7OztBQUsvRjtJQUFBO0lBZUEsQ0FBQztJQVZDOzs7T0FHRzs7Ozs7SUFDVyw4QkFBTzs7OztJQUFyQjtRQUNFLE9BQU87WUFDTCxRQUFRLEVBQUUsc0JBQXNCO1lBQ2hDLFNBQVMsRUFBRSxDQUFDLDZCQUE2QixDQUFDO1NBQzNDLENBQUM7SUFDSixDQUFDOztnQkFkRixRQUFRLFNBQUM7b0JBQ1IsT0FBTyxFQUFFLENBQUMscUJBQXFCLENBQUM7b0JBQ2hDLFNBQVMsbUJBQU0sU0FBUyxDQUFDO2lCQUMxQjs7SUFZRCw2QkFBQztDQUFBLEFBZkQsSUFlQztTQVhZLHNCQUFzQjtBQWFuQyxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUMzRixPQUFPLEVBQUUsa0NBQWtDLEVBQUUsQ0FBQztBQUU5QyxPQUFPLEVBQUUsaUNBQWlDLEVBQUUsTUFBTSxrREFBa0QsQ0FBQztBQUNyRyxPQUFPLEVBQUUsdUNBQXVDLEVBQUUsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1vZHVsZVdpdGhQcm92aWRlcnMsIE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFJlc291cmNlVXRpbGl0eU1vZHVsZSB9IGZyb20gJy4uL3Jlc291cmNlLXV0aWxpdHkvcmVzb3VyY2UtdXRpbGl0eS5tb2R1bGUnO1xuXG5pbXBvcnQgeyBEcm9wZG93bkh0dHBEYXRhRmV0Y2hTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9kcm9wZG93bi1odHRwLWRhdGEtZmV0Y2guc2VydmljZSc7XG5pbXBvcnQgeyBEcm9wZG93bldlYnNvY2tldERhdGFGZXRjaFNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL2Ryb3Bkb3duLXdlYnNvY2tldC1kYXRhLWZldGNoLnNlcnZpY2UnO1xuaW1wb3J0IHsgRHJvcGRvd25SZXNvdXJjZUNvbmZpZ1NlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL2Ryb3Bkb3duLXJlc291cmNlLWNvbmZpZy5zZXJ2aWNlJztcbmltcG9ydCB7IERyb3Bkb3duSHR0cFJlc291cmNlRmFjdG9yeVNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL2Ryb3Bkb3duLWh0dHAtcmVzb3VyY2UtZmFjdG9yeS5zZXJ2aWNlJztcbmltcG9ydCB7IERyb3Bkb3duV2Vic29ja2V0UmVzb3VyY2VGYWN0b3J5U2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvZHJvcGRvd24td2Vic29ja2V0LXJlc291cmNlLWZhY3Rvcnkuc2VydmljZSc7XG5cbmNvbnN0IFBST1ZJREVSUyA9IFtEcm9wZG93bkh0dHBSZXNvdXJjZUZhY3RvcnlTZXJ2aWNlLCBEcm9wZG93bldlYnNvY2tldFJlc291cmNlRmFjdG9yeVNlcnZpY2VdO1xuXG4vKipcbiAqIERyb3Bkb3duIGRhdGEgc291cmNlIG1vZHVsZS5cbiAqL1xuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1Jlc291cmNlVXRpbGl0eU1vZHVsZV0sXG4gIHByb3ZpZGVyczogWy4uLlBST1ZJREVSU11cbn0pXG5leHBvcnQgY2xhc3MgRHJvcGRvd25SZXNvdXJjZU1vZHVsZSB7XG4gIC8qKlxuICAgKiBTZXQgbW9kdWxlIHJvb3QgY29uZmlndXJhdGlvbiBvdmVycmlkZXMuXG4gICAqIEByZXR1cm4gTW9kdWxlIHdpdGggY3VzdG9tIHByb3ZpZGVycy5cbiAgICovXG4gIHB1YmxpYyBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IERyb3Bkb3duUmVzb3VyY2VNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtEcm9wZG93blJlc291cmNlQ29uZmlnU2VydmljZV1cbiAgICB9O1xuICB9XG59XG5cbmV4cG9ydCB7IERyb3Bkb3duSHR0cERhdGFGZXRjaFNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL2Ryb3Bkb3duLWh0dHAtZGF0YS1mZXRjaC5zZXJ2aWNlJztcbmV4cG9ydCB7IERyb3Bkb3duSHR0cFJlc291cmNlRmFjdG9yeVNlcnZpY2UgfTtcblxuZXhwb3J0IHsgRHJvcGRvd25XZWJzb2NrZXREYXRhRmV0Y2hTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9kcm9wZG93bi13ZWJzb2NrZXQtZGF0YS1mZXRjaC5zZXJ2aWNlJztcbmV4cG9ydCB7IERyb3Bkb3duV2Vic29ja2V0UmVzb3VyY2VGYWN0b3J5U2VydmljZSB9O1xuIl19