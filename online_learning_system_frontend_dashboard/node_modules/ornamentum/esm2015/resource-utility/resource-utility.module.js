/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { RequestParamMapperService } from './services/request-param-mapper.service';
import { ResourceUtilityConfigService } from './services/resource-utility-config.service';
/** @type {?} */
const PROVIDERS = [RequestParamMapperService];
/**
 * Resource utility module.
 */
export class ResourceUtilityModule {
    /**
     * Set module root configuration overrides.
     * @return {?} Module with custom providers.
     */
    static forRoot() {
        return {
            ngModule: ResourceUtilityModule,
            providers: [ResourceUtilityConfigService]
        };
    }
}
ResourceUtilityModule.decorators = [
    { type: NgModule, args: [{
                imports: [],
                providers: [...PROVIDERS]
            },] }
];
export { RequestParamMapperService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzb3VyY2UtdXRpbGl0eS5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9vcm5hbWVudHVtLyIsInNvdXJjZXMiOlsicmVzb3VyY2UtdXRpbGl0eS9yZXNvdXJjZS11dGlsaXR5Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUF1QixRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFOUQsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFDcEYsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sNENBQTRDLENBQUM7O01BR3BGLFNBQVMsR0FBRyxDQUFDLHlCQUF5QixDQUFDOzs7O0FBUzdDLE1BQU0sT0FBTyxxQkFBcUI7Ozs7O0lBS3pCLE1BQU0sQ0FBQyxPQUFPO1FBQ25CLE9BQU87WUFDTCxRQUFRLEVBQUUscUJBQXFCO1lBQy9CLFNBQVMsRUFBRSxDQUFDLDRCQUE0QixDQUFDO1NBQzFDLENBQUM7SUFDSixDQUFDOzs7WUFkRixRQUFRLFNBQUM7Z0JBQ1IsT0FBTyxFQUFFLEVBQUU7Z0JBQ1gsU0FBUyxFQUFFLENBQUMsR0FBRyxTQUFTLENBQUM7YUFDMUI7O0FBa0JELE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTW9kdWxlV2l0aFByb3ZpZGVycywgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgUmVxdWVzdFBhcmFtTWFwcGVyU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvcmVxdWVzdC1wYXJhbS1tYXBwZXIuc2VydmljZSc7XG5pbXBvcnQgeyBSZXNvdXJjZVV0aWxpdHlDb25maWdTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9yZXNvdXJjZS11dGlsaXR5LWNvbmZpZy5zZXJ2aWNlJztcblxuXG5jb25zdCBQUk9WSURFUlMgPSBbUmVxdWVzdFBhcmFtTWFwcGVyU2VydmljZV07XG5cbi8qKlxuICogUmVzb3VyY2UgdXRpbGl0eSBtb2R1bGUuXG4gKi9cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtdLFxuICBwcm92aWRlcnM6IFsuLi5QUk9WSURFUlNdXG59KVxuZXhwb3J0IGNsYXNzIFJlc291cmNlVXRpbGl0eU1vZHVsZSB7XG4gIC8qKlxuICAgKiBTZXQgbW9kdWxlIHJvb3QgY29uZmlndXJhdGlvbiBvdmVycmlkZXMuXG4gICAqIEByZXR1cm4gTW9kdWxlIHdpdGggY3VzdG9tIHByb3ZpZGVycy5cbiAgICovXG4gIHB1YmxpYyBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IFJlc291cmNlVXRpbGl0eU1vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW1Jlc291cmNlVXRpbGl0eUNvbmZpZ1NlcnZpY2VdXG4gICAgfTtcbiAgfVxufVxuXG5leHBvcnQgeyBSZXNvdXJjZU9wdGlvbnMgfSBmcm9tICcuL21vZGVscy9yZXNvdXJjZS1vcHRpb25zLm1vZGVsJztcbmV4cG9ydCB7IFJlcXVlc3RPcHRpb25zIH0gZnJvbSAnLi9tb2RlbHMvcmVxdWVzdC1vcHRpb25zLm1vZGVsJztcbmV4cG9ydCB7IEh0dHBSZXF1ZXN0T3B0aW9ucyB9IGZyb20gJy4vbW9kZWxzL2h0dHAtcmVxdWVzdC1vcHRpb25zLm1vZGVsJztcblxuZXhwb3J0IHsgUmVxdWVzdFBhcmFtTWFwcGVyU2VydmljZSB9O1xuIl19