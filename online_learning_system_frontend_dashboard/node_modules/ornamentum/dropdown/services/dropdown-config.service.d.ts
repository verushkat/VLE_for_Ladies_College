import { InjectionToken } from '@angular/core';
import { DropdownConfig } from '../models/dropdown-config.model';
import { DropdownTranslations } from '../models/dropdown-translations.model';
import { DataTableConfig } from '../../data-table/models/data-table-config.model';
import { DropdownSelectMode } from '../models/dropdown-select-mode.model';
import { ViewPosition } from '../../utility/models/view-position.model';
export declare const DROPDOWN_CONFIG: InjectionToken<DataTableConfig>;
/**
 * Dropdown config service. Holds all the global configurations of dropdown which can be overridden while importing the module.
 * Used to manage dropdown base configuration state.
 */
export declare class DropdownConfigService implements DropdownConfig {
    private dropdownConfig;
    baseTranslations: DropdownTranslations;
    selectTrackBy: string;
    displayTrackBy: string;
    disabledTrackBy: string;
    menuPosition: ViewPosition;
    selectMode: DropdownSelectMode;
    filterable: boolean;
    filterDebounce: boolean;
    filterDebounceTime: number;
    groupByField: string;
    wrapDisplaySelectLimit: number;
    showSelectedOptionRemoveButton: boolean;
    showClearSelectionButton: boolean;
    menuWidth: number;
    menuHeight: number;
    loadOnScroll: boolean;
    loadViewDistanceRatio: number;
    limit: number;
    loadDataOnInit: boolean;
    closeMenuOnSelect: boolean;
    showOptionSelectCheckbox: boolean;
    showOptionIndex: boolean;
    showOptionTrackBy: boolean;
    multiSelectOptionMaxWidth: number;
    setFirstOptionSelected: boolean;
    triggerSelectChangeOnInit: boolean;
    triggerSelectChangeOnModelUpdate: boolean;
    triggerSelectChangeOnFirstOptionSelect: boolean;
    dynamicDimensionCalculation: boolean;
    dynamicWidthRatio: number;
    dynamicHeightRatio: number;
    relativeParentElement: any;
    constructor(dropdownConfig: DropdownConfig);
    /**
     * Set dropdown translations.
     * @param value Dropdown translations object.
     */
    /**
    * Get dropdown translations.
    * @return Dropdown translations.
    */
    translations: DropdownTranslations;
    /**
     * Get display text by source option.
     * @param option Source option object.
     * @return Display text.
     */
    getDisplayText(option: any): string;
}
