import { InjectionToken } from '@angular/core';
import { DataTableTranslations } from '../models/data-table-translations.model';
import { DataTableConfig } from '../models/data-table-config.model';
import { DataTableStorageMode } from '../models/data-table-storage-mode.model';
import { DataTableSortOrder } from '../models/data-table-sort-order.model';
import { DataTableSelectMode } from '../models/data-table-select-mode.model';
import { DropdownSelectMode } from '../../dropdown/dropdown.module';
import { ViewPosition } from '../../utility/models/view-position.model';
export declare const DATA_TABLE_CONFIG: InjectionToken<DataTableConfig>;
/**
 * Data table config service
 * Manage all the global configurations of grid which can be overridden while importing the module.
 */
export declare class DataTableConfigService implements DataTableConfig {
    private dataTableConfig;
    persistTableState: boolean;
    storageMode: DataTableStorageMode;
    multiColumnSortable: boolean;
    showHeader: boolean;
    title: string;
    width: any;
    minContentHeight: string | number;
    minContentWidth: any;
    contentHeight: any;
    pageable: boolean;
    loadOnScroll: boolean;
    loadViewDistanceRatio: number;
    showIndexColumn: boolean;
    indexColumnTitle: string;
    rowSelectable: boolean;
    selectMode: DataTableSelectMode;
    showRowSelectCheckbox: boolean;
    showRowSelectAllCheckbox: boolean;
    showSubstituteRows: boolean;
    expandableRows: boolean;
    selectOnRowClick: boolean;
    expandOnRowClick: boolean;
    autoFetch: boolean;
    showLoadingSpinner: boolean;
    selectTrackBy: string;
    filterDebounceTime: number;
    filterDebounce: boolean;
    showRefreshButton: boolean;
    showColumnSelector: boolean;
    columnSelectorWidth: number;
    expanderColumnWidth: string | number;
    indexColumnWidth: string | number;
    selectionColumnWidth: string | number;
    showRowExpandLoadingSpinner: boolean;
    offset: number;
    limit: number;
    maxLimit: number;
    stateKeyPrefix: string;
    baseTranslations: DataTableTranslations;
    sortable: boolean;
    sortOrder: DataTableSortOrder;
    filterable: boolean;
    filterPlaceholder: string;
    columnResizable: boolean;
    columnVisible: boolean;
    showDropdownFilter: boolean;
    showFilterClearButton: boolean;
    dropdownFilterMenuPosition: ViewPosition;
    dropdownFilterSelectMode: DropdownSelectMode;
    dropdownFilterSearchable: boolean;
    dropdownFilterSearchDebounceTime: number;
    dropdownFilterSearchDebounce: boolean;
    dropdownFilterWrapDisplaySelectLimit: number;
    dropdownFilterGroupByField: any;
    dropdownFilterShowSelectedOptionRemoveButton: boolean;
    dropdownFilterShowClearSelectionButton: boolean;
    dropdownFilterMenuWidth: number;
    dropdownFilterMenuHeight: number;
    dropdownFilterMultiSelectOptionMaxWidth: number;
    dropdownFilterCloseMenuOnSelect: boolean;
    dropdownFilterDynamicDimensionCalculation: boolean;
    dropdownFilterDynamicWidthRatio: number;
    dropdownFilterDynamicHeightRatio: number;
    constructor(dataTableConfig: DataTableConfig);
    /**
    * Returns translations.
    */
    translations: DataTableTranslations;
    /**
     * Get row select checkbox column.
     */
    readonly showRowSelectCheckboxColumn: boolean;
}
