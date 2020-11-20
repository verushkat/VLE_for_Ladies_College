/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RequestParamMapperService } from './services/request-param-mapper.service';
import { ResourceUtilityConfigService } from './services/resource-utility-config.service';
/** @type {?} */
var PROVIDERS = [RequestParamMapperService];
/**
 * Resource utility module.
 */
var ResourceUtilityModule = /** @class */ (function () {
    function ResourceUtilityModule() {
    }
    /**
     * Set module root configuration overrides.
     * @return Module with custom providers.
     */
    /**
     * Set module root configuration overrides.
     * @return {?} Module with custom providers.
     */
    ResourceUtilityModule.forRoot = /**
     * Set module root configuration overrides.
     * @return {?} Module with custom providers.
     */
    function () {
        return {
            ngModule: ResourceUtilityModule,
            providers: [ResourceUtilityConfigService]
        };
    };
    ResourceUtilityModule.decorators = [
        { type: NgModule, args: [{
                    imports: [],
                    providers: tslib_1.__spread(PROVIDERS)
                },] }
    ];
    return ResourceUtilityModule;
}());
export { ResourceUtilityModule };
export { RequestParamMapperService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzb3VyY2UtdXRpbGl0eS5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9vcm5hbWVudHVtLyIsInNvdXJjZXMiOlsicmVzb3VyY2UtdXRpbGl0eS9yZXNvdXJjZS11dGlsaXR5Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBdUIsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTlELE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBQ3BGLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLDRDQUE0QyxDQUFDOztJQUdwRixTQUFTLEdBQUcsQ0FBQyx5QkFBeUIsQ0FBQzs7OztBQUs3QztJQUFBO0lBZUEsQ0FBQztJQVZDOzs7T0FHRzs7Ozs7SUFDVyw2QkFBTzs7OztJQUFyQjtRQUNFLE9BQU87WUFDTCxRQUFRLEVBQUUscUJBQXFCO1lBQy9CLFNBQVMsRUFBRSxDQUFDLDRCQUE0QixDQUFDO1NBQzFDLENBQUM7SUFDSixDQUFDOztnQkFkRixRQUFRLFNBQUM7b0JBQ1IsT0FBTyxFQUFFLEVBQUU7b0JBQ1gsU0FBUyxtQkFBTSxTQUFTLENBQUM7aUJBQzFCOztJQVlELDRCQUFDO0NBQUEsQUFmRCxJQWVDO1NBWFkscUJBQXFCO0FBaUJsQyxPQUFPLEVBQUUseUJBQXlCLEVBQUUsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1vZHVsZVdpdGhQcm92aWRlcnMsIE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFJlcXVlc3RQYXJhbU1hcHBlclNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL3JlcXVlc3QtcGFyYW0tbWFwcGVyLnNlcnZpY2UnO1xuaW1wb3J0IHsgUmVzb3VyY2VVdGlsaXR5Q29uZmlnU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvcmVzb3VyY2UtdXRpbGl0eS1jb25maWcuc2VydmljZSc7XG5cblxuY29uc3QgUFJPVklERVJTID0gW1JlcXVlc3RQYXJhbU1hcHBlclNlcnZpY2VdO1xuXG4vKipcbiAqIFJlc291cmNlIHV0aWxpdHkgbW9kdWxlLlxuICovXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXSxcbiAgcHJvdmlkZXJzOiBbLi4uUFJPVklERVJTXVxufSlcbmV4cG9ydCBjbGFzcyBSZXNvdXJjZVV0aWxpdHlNb2R1bGUge1xuICAvKipcbiAgICogU2V0IG1vZHVsZSByb290IGNvbmZpZ3VyYXRpb24gb3ZlcnJpZGVzLlxuICAgKiBAcmV0dXJuIE1vZHVsZSB3aXRoIGN1c3RvbSBwcm92aWRlcnMuXG4gICAqL1xuICBwdWJsaWMgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBSZXNvdXJjZVV0aWxpdHlNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtSZXNvdXJjZVV0aWxpdHlDb25maWdTZXJ2aWNlXVxuICAgIH07XG4gIH1cbn1cblxuZXhwb3J0IHsgUmVzb3VyY2VPcHRpb25zIH0gZnJvbSAnLi9tb2RlbHMvcmVzb3VyY2Utb3B0aW9ucy5tb2RlbCc7XG5leHBvcnQgeyBSZXF1ZXN0T3B0aW9ucyB9IGZyb20gJy4vbW9kZWxzL3JlcXVlc3Qtb3B0aW9ucy5tb2RlbCc7XG5leHBvcnQgeyBIdHRwUmVxdWVzdE9wdGlvbnMgfSBmcm9tICcuL21vZGVscy9odHRwLXJlcXVlc3Qtb3B0aW9ucy5tb2RlbCc7XG5cbmV4cG9ydCB7IFJlcXVlc3RQYXJhbU1hcHBlclNlcnZpY2UgfTtcbiJdfQ==