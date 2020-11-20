/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InitDirective } from './directives/init.directive';
import { FocusDirective } from './directives/focus.directive';
import { PixelConverterPipe } from './pipes/pixel-converter.pipe';
import { UtilityConfigService } from './services/utility-config.service';
import { DragAndDropService } from './services/drag-and-drop.service';
import { GlobalRefService } from './services/global-ref.service';
import { PopoverComponentLoaderFactoryService } from './services/popover-component-loader-factory.service';
import { ResizeService } from './services/resize.service';
import { ValidatorService } from './services/validator.service';
/** @type {?} */
var DIRECTIVES = [InitDirective, FocusDirective];
/** @type {?} */
var PIPES = [PixelConverterPipe];
/** @type {?} */
var PROVIDERS = [DragAndDropService, GlobalRefService, PopoverComponentLoaderFactoryService, ResizeService, ValidatorService];
/**
 * Module representing utility providers, directives and pipes.
 */
var UtilityModule = /** @class */ (function () {
    function UtilityModule() {
    }
    /**
     * Set module root configuration overrides.
     * @return Module with custom providers.
     */
    /**
     * Set module root configuration overrides.
     * @return {?} Module with custom providers.
     */
    UtilityModule.forRoot = /**
     * Set module root configuration overrides.
     * @return {?} Module with custom providers.
     */
    function () {
        return {
            ngModule: UtilityModule,
            providers: [UtilityConfigService]
        };
    };
    UtilityModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule],
                    declarations: tslib_1.__spread(DIRECTIVES, PIPES),
                    providers: tslib_1.__spread(PROVIDERS),
                    exports: tslib_1.__spread(DIRECTIVES, PIPES)
                },] }
    ];
    return UtilityModule;
}());
export { UtilityModule };
export { DragAndDropService } from './services/drag-and-drop.service';
export { GlobalRefService } from './services/global-ref.service';
export { UtilityConfigService } from './services/utility-config.service';
export { PopoverComponentLoaderFactoryService } from './services/popover-component-loader-factory.service';
export { PopoverComponentLoader } from './services/popover-component-loader.class';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbGl0eS5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9vcm5hbWVudHVtLyIsInNvdXJjZXMiOlsidXRpbGl0eS91dGlsaXR5Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBdUIsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzlELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUvQyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDNUQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBRTlELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBRWxFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQ3pFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ3RFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQ2pFLE9BQU8sRUFBRSxvQ0FBb0MsRUFBRSxNQUFNLHFEQUFxRCxDQUFDO0FBQzNHLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUMxRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQzs7SUFFMUQsVUFBVSxHQUFHLENBQUMsYUFBYSxFQUFFLGNBQWMsQ0FBQzs7SUFFNUMsS0FBSyxHQUFHLENBQUMsa0JBQWtCLENBQUM7O0lBRTVCLFNBQVMsR0FBRyxDQUFDLGtCQUFrQixFQUFFLGdCQUFnQixFQUFFLG9DQUFvQyxFQUFFLGFBQWEsRUFBRSxnQkFBZ0IsQ0FBQzs7OztBQUsvSDtJQUFBO0lBaUJBLENBQUM7SUFWQzs7O09BR0c7Ozs7O0lBQ1cscUJBQU87Ozs7SUFBckI7UUFDRSxPQUFPO1lBQ0wsUUFBUSxFQUFFLGFBQWE7WUFDdkIsU0FBUyxFQUFFLENBQUMsb0JBQW9CLENBQUM7U0FDbEMsQ0FBQztJQUNKLENBQUM7O2dCQWhCRixRQUFRLFNBQUM7b0JBQ1IsT0FBTyxFQUFFLENBQUMsWUFBWSxDQUFDO29CQUN2QixZQUFZLG1CQUFNLFVBQVUsRUFBSyxLQUFLLENBQUM7b0JBQ3ZDLFNBQVMsbUJBQU0sU0FBUyxDQUFDO29CQUN6QixPQUFPLG1CQUFNLFVBQVUsRUFBSyxLQUFLLENBQUM7aUJBQ25DOztJQVlELG9CQUFDO0NBQUEsQUFqQkQsSUFpQkM7U0FYWSxhQUFhO0FBZTFCLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ3RFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQ2pFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQ3pFLE9BQU8sRUFBRSxvQ0FBb0MsRUFBRSxNQUFNLHFEQUFxRCxDQUFDO0FBRTNHLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDJDQUEyQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTW9kdWxlV2l0aFByb3ZpZGVycywgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmltcG9ydCB7IEluaXREaXJlY3RpdmUgfSBmcm9tICcuL2RpcmVjdGl2ZXMvaW5pdC5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgRm9jdXNEaXJlY3RpdmUgfSBmcm9tICcuL2RpcmVjdGl2ZXMvZm9jdXMuZGlyZWN0aXZlJztcblxuaW1wb3J0IHsgUGl4ZWxDb252ZXJ0ZXJQaXBlIH0gZnJvbSAnLi9waXBlcy9waXhlbC1jb252ZXJ0ZXIucGlwZSc7XG5cbmltcG9ydCB7IFV0aWxpdHlDb25maWdTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy91dGlsaXR5LWNvbmZpZy5zZXJ2aWNlJztcbmltcG9ydCB7IERyYWdBbmREcm9wU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvZHJhZy1hbmQtZHJvcC5zZXJ2aWNlJztcbmltcG9ydCB7IEdsb2JhbFJlZlNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL2dsb2JhbC1yZWYuc2VydmljZSc7XG5pbXBvcnQgeyBQb3BvdmVyQ29tcG9uZW50TG9hZGVyRmFjdG9yeVNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL3BvcG92ZXItY29tcG9uZW50LWxvYWRlci1mYWN0b3J5LnNlcnZpY2UnO1xuaW1wb3J0IHsgUmVzaXplU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvcmVzaXplLnNlcnZpY2UnO1xuaW1wb3J0IHsgVmFsaWRhdG9yU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvdmFsaWRhdG9yLnNlcnZpY2UnO1xuXG5jb25zdCBESVJFQ1RJVkVTID0gW0luaXREaXJlY3RpdmUsIEZvY3VzRGlyZWN0aXZlXTtcblxuY29uc3QgUElQRVMgPSBbUGl4ZWxDb252ZXJ0ZXJQaXBlXTtcblxuY29uc3QgUFJPVklERVJTID0gW0RyYWdBbmREcm9wU2VydmljZSwgR2xvYmFsUmVmU2VydmljZSwgUG9wb3ZlckNvbXBvbmVudExvYWRlckZhY3RvcnlTZXJ2aWNlLCBSZXNpemVTZXJ2aWNlLCBWYWxpZGF0b3JTZXJ2aWNlXTtcblxuLyoqXG4gKiBNb2R1bGUgcmVwcmVzZW50aW5nIHV0aWxpdHkgcHJvdmlkZXJzLCBkaXJlY3RpdmVzIGFuZCBwaXBlcy5cbiAqL1xuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZV0sXG4gIGRlY2xhcmF0aW9uczogWy4uLkRJUkVDVElWRVMsIC4uLlBJUEVTXSxcbiAgcHJvdmlkZXJzOiBbLi4uUFJPVklERVJTXSxcbiAgZXhwb3J0czogWy4uLkRJUkVDVElWRVMsIC4uLlBJUEVTXVxufSlcbmV4cG9ydCBjbGFzcyBVdGlsaXR5TW9kdWxlIHtcbiAgLyoqXG4gICAqIFNldCBtb2R1bGUgcm9vdCBjb25maWd1cmF0aW9uIG92ZXJyaWRlcy5cbiAgICogQHJldHVybiBNb2R1bGUgd2l0aCBjdXN0b20gcHJvdmlkZXJzLlxuICAgKi9cbiAgcHVibGljIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogVXRpbGl0eU1vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW1V0aWxpdHlDb25maWdTZXJ2aWNlXVxuICAgIH07XG4gIH1cbn1cblxuZXhwb3J0IHsgQ29tcG9uZW50TG9hZGVyIH0gZnJvbSAnLi9zZXJ2aWNlcy9jb21wb25lbnQtbG9hZGVyLmludGVyZmFjZSc7XG5cbmV4cG9ydCB7IERyYWdBbmREcm9wU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvZHJhZy1hbmQtZHJvcC5zZXJ2aWNlJztcbmV4cG9ydCB7IEdsb2JhbFJlZlNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL2dsb2JhbC1yZWYuc2VydmljZSc7XG5leHBvcnQgeyBVdGlsaXR5Q29uZmlnU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvdXRpbGl0eS1jb25maWcuc2VydmljZSc7XG5leHBvcnQgeyBQb3BvdmVyQ29tcG9uZW50TG9hZGVyRmFjdG9yeVNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL3BvcG92ZXItY29tcG9uZW50LWxvYWRlci1mYWN0b3J5LnNlcnZpY2UnO1xuXG5leHBvcnQgeyBQb3BvdmVyQ29tcG9uZW50TG9hZGVyIH0gZnJvbSAnLi9zZXJ2aWNlcy9wb3BvdmVyLWNvbXBvbmVudC1sb2FkZXIuY2xhc3MnO1xuIl19