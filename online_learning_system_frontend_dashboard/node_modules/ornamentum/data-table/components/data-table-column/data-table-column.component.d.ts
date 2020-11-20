import { OnDestroy, OnInit, TemplateRef } from '@angular/core';
import { DataTableCellColorRenderCallback } from '../../models/data-table-cell-color-render-callback.model';
import { DataTableRow } from '../../models/data-table-row.model';
import { DataTableFilterFieldMapperCallback } from '../../models/data-table-filter-field-mapper-callback.model';
import { DataTableFilterExpressionCallback } from '../../models/data-table-filter-expression-callback.model';
import { DropdownSelectMode } from '../../../dropdown/dropdown.module';
import { DataTableSortOrder } from '../../models/data-table-sort-order.model';
import { DataTableConfigService } from '../../services/data-table-config.service';
import { DataTableEventStateService } from '../../services/data-table-event.service';
import { ViewPosition } from '../../../utility/models/view-position.model';
import { DataTableDataStateService } from '../../services/data-table-data-state.service';
/**
 * Data table column component. Data table columns associated data is captured via this component.
 */
export declare class DataTableColumnComponent implements OnInit, OnDestroy {
    private dataTableConfigService;
    private eventStateService;
    private dataStateService;
    private filterValueExtractorSubscription;
    private currentSortOrder;
    private baseSortOrder;
    actualWidth: number;
    cellTemplate: TemplateRef<any>;
    headerTemplate: TemplateRef<any>;
    filterTemplate: TemplateRef<any>;
    dropdownFilterLoadingSpinnerTemplate: TemplateRef<any>;
    dropdownFilterOptionTemplate: TemplateRef<any>;
    dropdownFilterOptionGroupHeaderTemplate: TemplateRef<any>;
    /**
     * Filter expression event handler callback. Used to apply custom data filter expression logic.
     */
    filterExpression: DataTableFilterExpressionCallback;
    /**
     * Custom filter field map event handler callback. Used to extract filter field when showDropdownFilter option is true.
     */
    filterFieldMapper: DataTableFilterFieldMapperCallback;
    /**
     * Cell color render event handler callback.
     */
    onCellColorRender: DataTableCellColorRenderCallback<any>;
    /**
     * Column display title.
     */
    title: string;
    /**
     * Columns sortable if true. Show sort indicator on column title.
     */
    sortable: boolean;
    /**
     * Multi column sort priority. Lowest number will get the height precedence. Usage of same precedence number in
     * multiple columns may lead to unexpected behaviors. This priority number will be displayed in the column header
     * when multi column sorting is enabled hence, consider indexing accordingly.
     */
    sortPriority: number;
    /**
     * Set initial column sort order.
     */
    /**
    * Get initial column sort order.
    */
    sortOrder: DataTableSortOrder;
    /**
     * Column filterable if true. Show filter options on filter header row when enabled.
     */
    filterable: boolean;
    /**
     * Column resizeable if true. Show column resize indicator on column right corner.
     */
    resizable: boolean;
    /**
     * Data item mapping field name.
     */
    field: string;
    /**
     * Filter field identifier. Fallback to field if not provided.
     */
    filterField: string;
    /**
     * Sort field identifier. Fallback to field if not provided.
     */
    sortField: string;
    /**
     * Column title CSS class names. Use space delimiter to separate class names.
     */
    cssClass: string;
    /**
     * Static column width in pixels or percentage.
     */
    width: number | string;
    /**
     * Render column if true. Else include in column selector but not rendered.
     */
    visible: boolean;
    /**
     * Show filed in column selector popup if true.
     */
    showInColumnSelector: boolean;
    /**
     * Filter placeholder value. Placeholder text to show on filter text box. Applicable only for none dropdown filter mode.
     */
    filterPlaceholder: string;
    /**
     * Applied filter value on initialize.
     */
    filter: any;
    /**
     * Show filter clear button if true. Applicable only for none dropdown filter mode.
     */
    showFilterClearButton: any;
    /**
     * Resize minimum limit. Column cannot be resized to fit less than the number of pixels specified here.
     */
    resizeMinLimit: number;
    /**
     * Show dropdown filter if true. Filter data using dropdown filter.
     */
    showDropdownFilter: boolean;
    /**
     * Dropdown filter menu position. Placement of filter popup menu.
     */
    dropdownFilterMenuPosition: ViewPosition;
    /**
     * Dropdown select mode. Filter option select mode.
     */
    dropdownFilterSelectMode: DropdownSelectMode;
    /**
     * Dropdown filter searchable if true. Display search box within filter option menu.
     */
    dropdownFilterSearchable: boolean;
    /**
     * Dropdown filter search debounce time in milliseconds. Applicable only when dropdownFilterSearchDebounce is true.
     */
    dropdownFilterSearchDebounceTime: number;
    /**
     * Enable dropdown filter data search debounce with provided dropdownFilterSearchDebounceTime if true.
     */
    dropdownFilterSearchDebounce: boolean;
    /**
     * Dropdown filter show option select checkbox.
     */
    dropDownFilterShowOptionSelectCheckbox: boolean;
    /**
     * Dropdown filter selected items display limit.
     */
    dropdownFilterWrapDisplaySelectLimit: number;
    /**
     * Dropdown filter group by field name in item schema.
     */
    dropdownFilterGroupByField: string;
    /**
     * Dropdown filter show selected option remove button if true.
     */
    dropdownFilterShowSelectedOptionRemoveButton: boolean;
    /**
     * Dropdown filter show all select options clear button if true.
     */
    dropdownFilterShowClearSelectionButton: boolean;
    /**
     * Dropdown filter menu width in pixels.
     */
    dropdownFilterMenuWidth: number;
    /**
     * Dropdown filter menu height in pixels.
     */
    dropdownFilterMenuHeight: number;
    /**
     * Dropdown filter multi select option max width.
     */
    dropdownFilterMultiSelectOptionMaxWidth: number;
    /**
     * Dropdown filter close menu on select if true.
     */
    dropdownFilterCloseMenuOnSelect: boolean;
    /**
     * Dynamically calculate Dropdown filter menu dimensions relative to column width; dropdownFilterMenuWidth and
     * dropdownFilterMenuHeight configuration are ignored when true.
     */
    dropdownFilterDynamicDimensionCalculation: boolean;
    /**
     * Dynamic dropdown view width ratio. Used for dynamic dimension calculation.
     */
    dropdownFilterDynamicWidthRatio: number;
    /**
     * Dynamic dropdown view height ratio. Used for dynamic dimension calculation.
     */
    dropdownFilterDynamicHeightRatio: number;
    constructor(dataTableConfigService: DataTableConfigService, eventStateService: DataTableEventStateService, dataStateService: DataTableDataStateService);
    /**
     * Reset data sort order.
     */
    resetSortOrder(): void;
    /**
     * Get dynamic cell color.
     * @param row Data row object.
     * @return Cell color string.
     */
    getCellColor(row: DataTableRow<any>): string;
    /**
     * Get new sort order upon sort click.
     * @return New sort order enum value.
     */
    getNewSortOrder(): DataTableSortOrder;
    /**
     * Get current sort state icon css class enabled state.
     * @return Sort order icon css class collection object.
     */
    getSortIconClass(): any;
    /**
     * Component destroy lifecycle event handler.
     */
    ngOnDestroy(): void;
    /**
     * Component initialize lifecycle event handler.
     */
    ngOnInit(): void;
}
