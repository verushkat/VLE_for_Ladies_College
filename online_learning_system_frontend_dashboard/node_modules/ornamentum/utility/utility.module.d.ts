import { ModuleWithProviders } from '@angular/core';
/**
 * Module representing utility providers, directives and pipes.
 */
export declare class UtilityModule {
    /**
     * Set module root configuration overrides.
     * @return Module with custom providers.
     */
    static forRoot(): ModuleWithProviders;
}
export { ComponentLoader } from './services/component-loader.interface';
export { DragAndDropService } from './services/drag-and-drop.service';
export { GlobalRefService } from './services/global-ref.service';
export { UtilityConfigService } from './services/utility-config.service';
export { PopoverComponentLoaderFactoryService } from './services/popover-component-loader-factory.service';
export { PopoverComponentLoader } from './services/popover-component-loader.class';
