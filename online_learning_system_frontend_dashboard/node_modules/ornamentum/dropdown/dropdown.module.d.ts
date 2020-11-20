import { ModuleWithProviders } from '@angular/core';
import { DropdownConfig } from './models/dropdown-config.model';
/**
 * Module representing dropdown component.
 */
export declare class DropdownModule {
    /**
     * Set module root configuration overrides.
     * @param dropdownConfig Dropdown configuration object.
     * @return Module with custom providers.
     */
    static forRoot(dropdownConfig?: DropdownConfig): ModuleWithProviders;
}
export { DropdownTranslations } from './models/dropdown-translations.model';
export { DropdownOption } from './models/dropdown-option.model';
export { DropdownRequestParams } from './models/dropdown-request-params.model';
export { DropdownFilter } from './models/dropdown-filter.model';
export { DropdownDataBindCallback } from './models/dropdown-data-bind-callback.model';
export { DropdownQueryResult } from './models/dropdown-query-result.model';
export { DropdownConfig } from './models/dropdown-config.model';
export { DropdownSelectMode } from './models/dropdown-select-mode.model';
export { DropdownComponent } from './components/dropdown/dropdown.component';
