/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ContentChild, Input, TemplateRef } from '@angular/core';
import { DataTableConfigService } from '../../services/data-table-config.service';
import { DataTableEventStateService } from '../../services/data-table-event.service';
import { DataTableDataStateService } from '../../services/data-table-data-state.service';
/**
 * Data table column component. Data table columns associated data is captured via this component.
 */
export class DataTableColumnComponent {
    /**
     * @param {?} dataTableConfigService
     * @param {?} eventStateService
     * @param {?} dataStateService
     */
    constructor(dataTableConfigService, eventStateService, dataStateService) {
        this.dataTableConfigService = dataTableConfigService;
        this.eventStateService = eventStateService;
        this.dataStateService = dataStateService;
        this.currentSortOrder = '';
        this.baseSortOrder = '';
        /**
         * Show filed in column selector popup if true.
         */
        this.showInColumnSelector = true; // TODO: move to base conf
        // Table column config
        this.sortable = dataTableConfigService.sortable;
        this.currentSortOrder = dataTableConfigService.sortOrder;
        this.filterable = dataTableConfigService.filterable;
        this.filterPlaceholder = dataTableConfigService.filterPlaceholder;
        this.resizable = dataTableConfigService.columnResizable;
        this.visible = dataTableConfigService.columnVisible;
        this.showDropdownFilter = dataTableConfigService.showDropdownFilter;
        this.showFilterClearButton = dataTableConfigService.showFilterClearButton;
        // Dropdown filter config
        this.dropdownFilterMenuPosition = dataTableConfigService.dropdownFilterMenuPosition;
        this.dropdownFilterSelectMode = dataTableConfigService.dropdownFilterSelectMode;
        this.dropdownFilterSearchable = dataTableConfigService.dropdownFilterSearchable;
        this.dropdownFilterSearchDebounceTime = dataTableConfigService.dropdownFilterSearchDebounceTime;
        this.dropdownFilterSearchDebounce = dataTableConfigService.dropdownFilterSearchDebounce;
        this.dropdownFilterWrapDisplaySelectLimit = dataTableConfigService.dropdownFilterWrapDisplaySelectLimit;
        this.dropdownFilterGroupByField = dataTableConfigService.dropdownFilterGroupByField;
        this.dropdownFilterShowSelectedOptionRemoveButton = dataTableConfigService.dropdownFilterShowSelectedOptionRemoveButton;
        this.dropdownFilterShowClearSelectionButton = dataTableConfigService.dropdownFilterShowClearSelectionButton;
        this.dropdownFilterMenuWidth = dataTableConfigService.dropdownFilterMenuWidth;
        this.dropdownFilterMenuHeight = dataTableConfigService.dropdownFilterMenuHeight;
        this.dropdownFilterMultiSelectOptionMaxWidth = dataTableConfigService.dropdownFilterMultiSelectOptionMaxWidth;
        this.dropdownFilterCloseMenuOnSelect = dataTableConfigService.dropdownFilterCloseMenuOnSelect;
        this.dropdownFilterDynamicDimensionCalculation = dataTableConfigService.dropdownFilterDynamicDimensionCalculation;
        this.dropdownFilterDynamicWidthRatio = dataTableConfigService.dropdownFilterDynamicWidthRatio;
        this.dropdownFilterDynamicHeightRatio = dataTableConfigService.dropdownFilterDynamicHeightRatio;
    }
    /**
     * Set initial column sort order.
     * @param {?} value
     * @return {?}
     */
    set sortOrder(value) {
        this.currentSortOrder = value;
        this.baseSortOrder = value;
    }
    /**
     * Get initial column sort order.
     * @return {?}
     */
    get sortOrder() {
        return this.currentSortOrder;
    }
    /**
     * Reset data sort order.
     * @return {?}
     */
    resetSortOrder() {
        this.currentSortOrder = this.baseSortOrder;
    }
    /**
     * Get dynamic cell color.
     * @param {?} row Data row object.
     * @return {?} Cell color string.
     */
    getCellColor(row) {
        if (this.onCellColorRender !== undefined) {
            return this.onCellColorRender(row, this);
        }
    }
    /**
     * Get new sort order upon sort click.
     * @return {?} New sort order enum value.
     */
    getNewSortOrder() {
        /** @type {?} */
        let newSortOrder;
        switch (this.sortOrder) {
            case 'asc':
                newSortOrder = 'desc';
                break;
            case 'desc':
                newSortOrder = '';
                break;
            case '':
                newSortOrder = 'asc';
                break;
        }
        return newSortOrder;
    }
    /**
     * Get current sort state icon css class enabled state.
     * @return {?} Sort order icon css class collection object.
     */
    getSortIconClass() {
        return {
            'sort-asc': this.sortOrder === 'asc',
            'sort-dsc': this.sortOrder === 'desc',
            'sort-reset': !this.sortOrder
        };
    }
    /**
     * Component destroy lifecycle event handler.
     * @return {?}
     */
    ngOnDestroy() {
        if (this.filterValueExtractorSubscription) {
            this.filterValueExtractorSubscription.unsubscribe();
        }
    }
    /**
     * Component initialize lifecycle event handler.
     * @return {?}
     */
    ngOnInit() {
        if (!this.cssClass && this.field) {
            if (/^[a-zA-Z0-9_]+$/.test(this.field)) {
                this.cssClass = 'column-' + this.field;
            }
            else {
                this.cssClass = 'column-' + this.field.replace(/[^a-zA-Z0-9_]/g, '');
            }
        }
        this.eventStateService.columnBind.emit(this);
        if (this.dataTableConfigService.multiColumnSortable && this.sortable) {
            if (this.sortOrder === '') {
                if (this.sortPriority !== undefined) {
                    throw Error('[sortPriority] should be ignored when multi column sorting is enabled with natural sort order.');
                }
            }
            else {
                if (this.sortPriority === undefined) {
                    throw Error('[sortPriority] is required when multi column sorting is enabled with an explicit sort order.');
                }
            }
            if (this.sortPriority < 1) {
                throw Error('[sortPriority] must be greater than 1.');
            }
            if (this.dataStateService.currentSortPriority < this.sortPriority) {
                this.dataStateService.currentSortPriority = this.sortPriority;
            }
        }
    }
}
DataTableColumnComponent.decorators = [
    { type: Component, args: [{
                selector: 'ng-data-table-column',
                template: ''
            }] }
];
/** @nocollapse */
DataTableColumnComponent.ctorParameters = () => [
    { type: DataTableConfigService },
    { type: DataTableEventStateService },
    { type: DataTableDataStateService }
];
DataTableColumnComponent.propDecorators = {
    cellTemplate: [{ type: ContentChild, args: ['ngDataTableCell', { static: true },] }],
    headerTemplate: [{ type: ContentChild, args: ['ngDataTableHeader', { static: true },] }],
    filterTemplate: [{ type: ContentChild, args: ['ngDataTableFilter', { static: true },] }],
    dropdownFilterLoadingSpinnerTemplate: [{ type: ContentChild, args: ['ngFilterDropdownLoadingSpinner', { static: true },] }],
    dropdownFilterOptionTemplate: [{ type: ContentChild, args: ['ngFilterDropdownOption', { static: true },] }],
    dropdownFilterOptionGroupHeaderTemplate: [{ type: ContentChild, args: ['ngFilterDropdownOptionGroupHeader', { static: true },] }],
    filterExpression: [{ type: Input }],
    filterFieldMapper: [{ type: Input }],
    onCellColorRender: [{ type: Input }],
    title: [{ type: Input }],
    sortable: [{ type: Input }],
    sortPriority: [{ type: Input }],
    sortOrder: [{ type: Input }],
    filterable: [{ type: Input }],
    resizable: [{ type: Input }],
    field: [{ type: Input }],
    filterField: [{ type: Input }],
    sortField: [{ type: Input }],
    cssClass: [{ type: Input }],
    width: [{ type: Input }],
    visible: [{ type: Input }],
    showInColumnSelector: [{ type: Input }],
    filterPlaceholder: [{ type: Input }],
    filter: [{ type: Input }],
    showFilterClearButton: [{ type: Input }],
    resizeMinLimit: [{ type: Input }],
    showDropdownFilter: [{ type: Input }],
    dropdownFilterMenuPosition: [{ type: Input }],
    dropdownFilterSelectMode: [{ type: Input }],
    dropdownFilterSearchable: [{ type: Input }],
    dropdownFilterSearchDebounceTime: [{ type: Input }],
    dropdownFilterSearchDebounce: [{ type: Input }],
    dropDownFilterShowOptionSelectCheckbox: [{ type: Input }],
    dropdownFilterWrapDisplaySelectLimit: [{ type: Input }],
    dropdownFilterGroupByField: [{ type: Input }],
    dropdownFilterShowSelectedOptionRemoveButton: [{ type: Input }],
    dropdownFilterShowClearSelectionButton: [{ type: Input }],
    dropdownFilterMenuWidth: [{ type: Input }],
    dropdownFilterMenuHeight: [{ type: Input }],
    dropdownFilterMultiSelectOptionMaxWidth: [{ type: Input }],
    dropdownFilterCloseMenuOnSelect: [{ type: Input }],
    dropdownFilterDynamicDimensionCalculation: [{ type: Input }],
    dropdownFilterDynamicWidthRatio: [{ type: Input }],
    dropdownFilterDynamicHeightRatio: [{ type: Input }]
};
if (false) {
    /**
     * @type {?}
     * @private
     */
    DataTableColumnComponent.prototype.filterValueExtractorSubscription;
    /**
     * @type {?}
     * @private
     */
    DataTableColumnComponent.prototype.currentSortOrder;
    /**
     * @type {?}
     * @private
     */
    DataTableColumnComponent.prototype.baseSortOrder;
    /** @type {?} */
    DataTableColumnComponent.prototype.actualWidth;
    /** @type {?} */
    DataTableColumnComponent.prototype.cellTemplate;
    /** @type {?} */
    DataTableColumnComponent.prototype.headerTemplate;
    /** @type {?} */
    DataTableColumnComponent.prototype.filterTemplate;
    /** @type {?} */
    DataTableColumnComponent.prototype.dropdownFilterLoadingSpinnerTemplate;
    /** @type {?} */
    DataTableColumnComponent.prototype.dropdownFilterOptionTemplate;
    /** @type {?} */
    DataTableColumnComponent.prototype.dropdownFilterOptionGroupHeaderTemplate;
    /**
     * Filter expression event handler callback. Used to apply custom data filter expression logic.
     * @type {?}
     */
    DataTableColumnComponent.prototype.filterExpression;
    /**
     * Custom filter field map event handler callback. Used to extract filter field when showDropdownFilter option is true.
     * @type {?}
     */
    DataTableColumnComponent.prototype.filterFieldMapper;
    /**
     * Cell color render event handler callback.
     * @type {?}
     */
    DataTableColumnComponent.prototype.onCellColorRender;
    /**
     * Column display title.
     * @type {?}
     */
    DataTableColumnComponent.prototype.title;
    /**
     * Columns sortable if true. Show sort indicator on column title.
     * @type {?}
     */
    DataTableColumnComponent.prototype.sortable;
    /**
     * Multi column sort priority. Lowest number will get the height precedence. Usage of same precedence number in
     * multiple columns may lead to unexpected behaviors. This priority number will be displayed in the column header
     * when multi column sorting is enabled hence, consider indexing accordingly.
     * @type {?}
     */
    DataTableColumnComponent.prototype.sortPriority;
    /**
     * Column filterable if true. Show filter options on filter header row when enabled.
     * @type {?}
     */
    DataTableColumnComponent.prototype.filterable;
    /**
     * Column resizeable if true. Show column resize indicator on column right corner.
     * @type {?}
     */
    DataTableColumnComponent.prototype.resizable;
    /**
     * Data item mapping field name.
     * @type {?}
     */
    DataTableColumnComponent.prototype.field;
    /**
     * Filter field identifier. Fallback to field if not provided.
     * @type {?}
     */
    DataTableColumnComponent.prototype.filterField;
    /**
     * Sort field identifier. Fallback to field if not provided.
     * @type {?}
     */
    DataTableColumnComponent.prototype.sortField;
    /**
     * Column title CSS class names. Use space delimiter to separate class names.
     * @type {?}
     */
    DataTableColumnComponent.prototype.cssClass;
    /**
     * Static column width in pixels or percentage.
     * @type {?}
     */
    DataTableColumnComponent.prototype.width;
    /**
     * Render column if true. Else include in column selector but not rendered.
     * @type {?}
     */
    DataTableColumnComponent.prototype.visible;
    /**
     * Show filed in column selector popup if true.
     * @type {?}
     */
    DataTableColumnComponent.prototype.showInColumnSelector;
    /**
     * Filter placeholder value. Placeholder text to show on filter text box. Applicable only for none dropdown filter mode.
     * @type {?}
     */
    DataTableColumnComponent.prototype.filterPlaceholder;
    /**
     * Applied filter value on initialize.
     * @type {?}
     */
    DataTableColumnComponent.prototype.filter;
    /**
     * Show filter clear button if true. Applicable only for none dropdown filter mode.
     * @type {?}
     */
    DataTableColumnComponent.prototype.showFilterClearButton;
    /**
     * Resize minimum limit. Column cannot be resized to fit less than the number of pixels specified here.
     * @type {?}
     */
    DataTableColumnComponent.prototype.resizeMinLimit;
    /**
     * Show dropdown filter if true. Filter data using dropdown filter.
     * @type {?}
     */
    DataTableColumnComponent.prototype.showDropdownFilter;
    /**
     * Dropdown filter menu position. Placement of filter popup menu.
     * @type {?}
     */
    DataTableColumnComponent.prototype.dropdownFilterMenuPosition;
    /**
     * Dropdown select mode. Filter option select mode.
     * @type {?}
     */
    DataTableColumnComponent.prototype.dropdownFilterSelectMode;
    /**
     * Dropdown filter searchable if true. Display search box within filter option menu.
     * @type {?}
     */
    DataTableColumnComponent.prototype.dropdownFilterSearchable;
    /**
     * Dropdown filter search debounce time in milliseconds. Applicable only when dropdownFilterSearchDebounce is true.
     * @type {?}
     */
    DataTableColumnComponent.prototype.dropdownFilterSearchDebounceTime;
    /**
     * Enable dropdown filter data search debounce with provided dropdownFilterSearchDebounceTime if true.
     * @type {?}
     */
    DataTableColumnComponent.prototype.dropdownFilterSearchDebounce;
    /**
     * Dropdown filter show option select checkbox.
     * @type {?}
     */
    DataTableColumnComponent.prototype.dropDownFilterShowOptionSelectCheckbox;
    /**
     * Dropdown filter selected items display limit.
     * @type {?}
     */
    DataTableColumnComponent.prototype.dropdownFilterWrapDisplaySelectLimit;
    /**
     * Dropdown filter group by field name in item schema.
     * @type {?}
     */
    DataTableColumnComponent.prototype.dropdownFilterGroupByField;
    /**
     * Dropdown filter show selected option remove button if true.
     * @type {?}
     */
    DataTableColumnComponent.prototype.dropdownFilterShowSelectedOptionRemoveButton;
    /**
     * Dropdown filter show all select options clear button if true.
     * @type {?}
     */
    DataTableColumnComponent.prototype.dropdownFilterShowClearSelectionButton;
    /**
     * Dropdown filter menu width in pixels.
     * @type {?}
     */
    DataTableColumnComponent.prototype.dropdownFilterMenuWidth;
    /**
     * Dropdown filter menu height in pixels.
     * @type {?}
     */
    DataTableColumnComponent.prototype.dropdownFilterMenuHeight;
    /**
     * Dropdown filter multi select option max width.
     * @type {?}
     */
    DataTableColumnComponent.prototype.dropdownFilterMultiSelectOptionMaxWidth;
    /**
     * Dropdown filter close menu on select if true.
     * @type {?}
     */
    DataTableColumnComponent.prototype.dropdownFilterCloseMenuOnSelect;
    /**
     * Dynamically calculate Dropdown filter menu dimensions relative to column width; dropdownFilterMenuWidth and
     * dropdownFilterMenuHeight configuration are ignored when true.
     * @type {?}
     */
    DataTableColumnComponent.prototype.dropdownFilterDynamicDimensionCalculation;
    /**
     * Dynamic dropdown view width ratio. Used for dynamic dimension calculation.
     * @type {?}
     */
    DataTableColumnComponent.prototype.dropdownFilterDynamicWidthRatio;
    /**
     * Dynamic dropdown view height ratio. Used for dynamic dimension calculation.
     * @type {?}
     */
    DataTableColumnComponent.prototype.dropdownFilterDynamicHeightRatio;
    /**
     * @type {?}
     * @private
     */
    DataTableColumnComponent.prototype.dataTableConfigService;
    /**
     * @type {?}
     * @private
     */
    DataTableColumnComponent.prototype.eventStateService;
    /**
     * @type {?}
     * @private
     */
    DataTableColumnComponent.prototype.dataStateService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS10YWJsZS1jb2x1bW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vb3JuYW1lbnR1bS8iLCJzb3VyY2VzIjpbImRhdGEtdGFibGUvY29tcG9uZW50cy9kYXRhLXRhYmxlLWNvbHVtbi9kYXRhLXRhYmxlLWNvbHVtbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBcUIsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBWS9GLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBQ2xGLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBRXJGLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLDhDQUE4QyxDQUFDOzs7O0FBU3pGLE1BQU0sT0FBTyx3QkFBd0I7Ozs7OztJQW1SbkMsWUFDVSxzQkFBOEMsRUFDOUMsaUJBQTZDLEVBQzdDLGdCQUEyQztRQUYzQywyQkFBc0IsR0FBdEIsc0JBQXNCLENBQXdCO1FBQzlDLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBNEI7UUFDN0MscUJBQWdCLEdBQWhCLGdCQUFnQixDQUEyQjtRQW5SN0MscUJBQWdCLEdBQXVCLEVBQUUsQ0FBQztRQUMxQyxrQkFBYSxHQUF1QixFQUFFLENBQUM7Ozs7UUFzSXhDLHlCQUFvQixHQUFHLElBQUksQ0FBQyxDQUFDLDBCQUEwQjtRQTZJNUQsc0JBQXNCO1FBQ3RCLElBQUksQ0FBQyxRQUFRLEdBQUcsc0JBQXNCLENBQUMsUUFBUSxDQUFDO1FBQ2hELElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxzQkFBc0IsQ0FBQyxTQUFTLENBQUM7UUFDekQsSUFBSSxDQUFDLFVBQVUsR0FBRyxzQkFBc0IsQ0FBQyxVQUFVLENBQUM7UUFDcEQsSUFBSSxDQUFDLGlCQUFpQixHQUFHLHNCQUFzQixDQUFDLGlCQUFpQixDQUFDO1FBQ2xFLElBQUks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O0lBRzlDLDBEQUFzRDs7Ozs7SUFDdEQscURBQXFEOzs7OztJQUNyRCxvREFBbUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIENvbnRlbnRDaGlsZCwgSW5wdXQsIE9uRGVzdHJveSwgT25Jbml0LCBUZW1wbGF0ZVJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgRGF0YVRhYmxlQ2VsbENvbG9yUmVuZGVyQ2FsbGJhY2sgfSBmcm9tICcuLi8uLi9tb2RlbHMvZGF0YS10YWJsZS1jZWxsLWNvbG9yLXJlbmRlci1jYWxsYmFjay5tb2RlbCc7XG5pbXBvcnQgeyBEYXRhVGFibGVSb3cgfSBmcm9tICcuLi8uLi9tb2RlbHMvZGF0YS10YWJsZS1yb3cubW9kZWwnO1xuaW1wb3J0IHsgRGF0YVRhYmxlRmlsdGVyRmllbGRNYXBwZXJDYWxsYmFjayB9IGZyb20gJy4uLy4uL21vZGVscy9kYXRhLXRhYmxlLWZpbHRlci1maWVsZC1tYXBwZXItY2FsbGJhY2subW9kZWwnO1xuaW1wb3J0IHsgRGF0YVRhYmxlRmlsdGVyRXhwcmVzc2lvbkNhbGxiYWNrIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2RhdGEtdGFibGUtZmlsdGVyLWV4cHJlc3Npb24tY2FsbGJhY2subW9kZWwnO1xuXG5pbXBvcnQgeyBEcm9wZG93blNlbGVjdE1vZGUgfSBmcm9tICcuLi8uLi8uLi9kcm9wZG93bi9kcm9wZG93bi5tb2R1bGUnO1xuaW1wb3J0IHsgRGF0YVRhYmxlU29ydE9yZGVyIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2RhdGEtdGFibGUtc29ydC1vcmRlci5tb2RlbCc7XG5cbmltcG9ydCB7IERhdGFUYWJsZUNvbmZpZ1NlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9kYXRhLXRhYmxlLWNvbmZpZy5zZXJ2aWNlJztcbmltcG9ydCB7IERhdGFUYWJsZUV2ZW50U3RhdGVTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvZGF0YS10YWJsZS1ldmVudC5zZXJ2aWNlJztcbmltcG9ydCB7IFZpZXdQb3NpdGlvbiB9IGZyb20gJy4uLy4uLy4uL3V0aWxpdHkvbW9kZWxzL3ZpZXctcG9zaXRpb24ubW9kZWwnO1xuaW1wb3J0IHsgRGF0YVRhYmxlRGF0YVN0YXRlU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2RhdGEtdGFibGUtZGF0YS1zdGF0ZS5zZXJ2aWNlJztcblxuLyoqXG4gKiBEYXRhIHRhYmxlIGNvbHVtbiBjb21wb25lbnQuIERhdGEgdGFibGUgY29sdW1ucyBhc3NvY2lhdGVkIGRhdGEgaXMgY2FwdHVyZWQgdmlhIHRoaXMgY29tcG9uZW50LlxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduZy1kYXRhLXRhYmxlLWNvbHVtbicsXG4gIHRlbXBsYXRlOiAnJ1xufSlcbmV4cG9ydCBjbGFzcyBEYXRhVGFibGVDb2x1bW5Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIHByaXZhdGUgZmlsdGVyVmFsdWVFeHRyYWN0b3JTdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcblxuICBwcml2YXRlIGN1cnJlbnRTb3J0T3JkZXI6IERhdGFUYWJsZVNvcnRPcmRlciA9ICcnO1xuICBwcml2YXRlIGJhc2VTb3J0T3JkZXI6IERhdGFUYWJsZVNvcnRPcmRlciA9ICcnO1xuXG4gIHB1YmxpYyBhY3R1YWxXaWR0aDogbnVtYmVyO1xuXG4gIC8vIENvbnRlbnQgQ2hpbGQgUHJvcGVydGllc1xuXG4gIEBDb250ZW50Q2hpbGQoJ25nRGF0YVRhYmxlQ2VsbCcsIHsgc3RhdGljOiB0cnVlIH0pXG4gIHB1YmxpYyBjZWxsVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgQENvbnRlbnRDaGlsZCgnbmdEYXRhVGFibGVIZWFkZXInLCB7IHN0YXRpYzogdHJ1ZSB9KVxuICBwdWJsaWMgaGVhZGVyVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgQENvbnRlbnRDaGlsZCgnbmdEYXRhVGFibGVGaWx0ZXInLCB7IHN0YXRpYzogdHJ1ZSB9KVxuICBwdWJsaWMgZmlsdGVyVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgQENvbnRlbnRDaGlsZCgnbmdGaWx0ZXJEcm9wZG93bkxvYWRpbmdTcGlubmVyJywgeyBzdGF0aWM6IHRydWUgfSlcbiAgcHVibGljIGRyb3Bkb3duRmlsdGVyTG9hZGluZ1NwaW5uZXJUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcblxuICBAQ29udGVudENoaWxkKCduZ0ZpbHRlckRyb3Bkb3duT3B0aW9uJywgeyBzdGF0aWM6IHRydWUgfSlcbiAgcHVibGljIGRyb3Bkb3duRmlsdGVyT3B0aW9uVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgQENvbnRlbnRDaGlsZCgnbmdGaWx0ZXJEcm9wZG93bk9wdGlvbkdyb3VwSGVhZGVyJywgeyBzdGF0aWM6IHRydWUgfSlcbiAgcHVibGljIGRyb3Bkb3duRmlsdGVyT3B0aW9uR3JvdXBIZWFkZXJUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcblxuICAvLyBDYWxsYmFjayBldmVudCBoYW5kbGVyc1xuXG4gIC8qKlxuICAgKiBGaWx0ZXIgZXhwcmVzc2lvbiBldmVudCBoYW5kbGVyIGNhbGxiYWNrLiBVc2VkIHRvIGFwcGx5IGN1c3RvbSBkYXRhIGZpbHRlciBleHByZXNzaW9uIGxvZ2ljLlxuICAgKi9cbiAgQElucHV0KClcbiAgcHVibGljIGZpbHRlckV4cHJlc3Npb246IERhdGFUYWJsZUZpbHRlckV4cHJlc3Npb25DYWxsYmFjaztcblxuICAvKipcbiAgICogQ3VzdG9tIGZpbHRlciBmaWVsZCBtYXAgZXZlbnQgaGFuZGxlciBjYWxsYmFjay4gVXNlZCB0byBleHRyYWN0IGZpbHRlciBmaWVsZCB3aGVuIHNob3dEcm9wZG93bkZpbHRlciBvcHRpb24gaXMgdHJ1ZS5cbiAgICovXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBmaWx0ZXJGaWVsZE1hcHBlcjogRGF0YVRhYmxlRmlsdGVyRmllbGRNYXBwZXJDYWxsYmFjaztcblxuICAvKipcbiAgICogQ2VsbCBjb2xvciByZW5kZXIgZXZlbnQgaGFuZGxlciBjYWxsYmFjay5cbiAgICovXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBvbkNlbGxDb2xvclJlbmRlcjogRGF0YVRhYmxlQ2VsbENvbG9yUmVuZGVyQ2FsbGJhY2s8YW55PjtcblxuICAvLyBJbnB1dHNcblxuICAvKipcbiAgICogQ29sdW1uIGRpc3BsYXkgdGl0bGUuXG4gICAqL1xuICBASW5wdXQoKVxuICBwdWJsaWMgdGl0bGU6IHN0cmluZztcblxuICAvKipcbiAgICogQ29sdW1ucyBzb3J0YWJsZSBpZiB0cnVlLiBTaG93IHNvcnQgaW5kaWNhdG9yIG9uIGNvbHVtbiB0aXRsZS5cbiAgICovXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzb3J0YWJsZTogYm9vbGVhbjtcblxuICAvKipcbiAgICogTXVsdGkgY29sdW1uIHNvcnQgcHJpb3JpdHkuIExvd2VzdCBudW1iZXIgd2lsbCBnZXQgdGhlIGhlaWdodCBwcmVjZWRlbmNlLiBVc2FnZSBvZiBzYW1lIHByZWNlZGVuY2UgbnVtYmVyIGluXG4gICAqIG11bHRpcGxlIGNvbHVtbnMgbWF5IGxlYWQgdG8gdW5leHBlY3RlZCBiZWhhdmlvcnMuIFRoaXMgcHJpb3JpdHkgbnVtYmVyIHdpbGwgYmUgZGlzcGxheWVkIGluIHRoZSBjb2x1bW4gaGVhZGVyXG4gICAqIHdoZW4gbXVsdGkgY29sdW1uIHNvcnRpbmcgaXMgZW5hYmxlZCBoZW5jZSwgY29uc2lkZXIgaW5kZXhpbmcgYWNjb3JkaW5nbHkuXG4gICAqL1xuICBASW5wdXQoKVxuICBwdWJsaWMgc29ydFByaW9yaXR5OiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIFNldCBpbml0aWFsIGNvbHVtbiBzb3J0IG9yZGVyLlxuICAgKi9cbiAgQElucHV0KClcbiAgcHVibGljIHNldCBzb3J0T3JkZXIodmFsdWU6IERhdGFUYWJsZVNvcnRPcmRlcikge1xuICAgIHRoaXMuY3VycmVudFNvcnRPcmRlciA9IHZhbHVlO1xuICAgIHRoaXMuYmFzZVNvcnRPcmRlciA9IHZhbHVlO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBpbml0aWFsIGNvbHVtbiBzb3J0IG9yZGVyLlxuICAgKi9cbiAgcHVibGljIGdldCBzb3J0T3JkZXIoKTogRGF0YVRhYmxlU29ydE9yZGVyIHtcbiAgICByZXR1cm4gdGhpcy5jdXJyZW50U29ydE9yZGVyO1xuICB9XG5cbiAgLyoqXG4gICAqIENvbHVtbiBmaWx0ZXJhYmxlIGlmIHRydWUuIFNob3cgZmlsdGVyIG9wdGlvbnMgb24gZmlsdGVyIGhlYWRlciByb3cgd2hlbiBlbmFibGVkLlxuICAgKi9cbiAgQElucHV0KClcbiAgcHVibGljIGZpbHRlcmFibGU6IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIENvbHVtbiByZXNpemVhYmxlIGlmIHRydWUuIFNob3cgY29sdW1uIHJlc2l6ZSBpbmRpY2F0b3Igb24gY29sdW1uIHJpZ2h0IGNvcm5lci5cbiAgICovXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyByZXNpemFibGU6IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIERhdGEgaXRlbSBtYXBwaW5nIGZpZWxkIG5hbWUuXG4gICAqL1xuICBASW5wdXQoKVxuICBwdWJsaWMgZmllbGQ6IHN0cmluZztcblxuICAvKipcbiAgICogRmlsdGVyIGZpZWxkIGlkZW50aWZpZXIuIEZhbGxiYWNrIHRvIGZpZWxkIGlmIG5vdCBwcm92aWRlZC5cbiAgICovXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBmaWx0ZXJGaWVsZDogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBTb3J0IGZpZWxkIGlkZW50aWZpZXIuIEZhbGxiYWNrIHRvIGZpZWxkIGlmIG5vdCBwcm92aWRlZC5cbiAgICovXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzb3J0RmllbGQ6IHN0cmluZztcblxuICAvKipcbiAgICogQ29sdW1uIHRpdGxlIENTUyBjbGFzcyBuYW1lcy4gVXNlIHNwYWNlIGRlbGltaXRlciB0byBzZXBhcmF0ZSBjbGFzcyBuYW1lcy5cbiAgICovXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBjc3NDbGFzczogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBTdGF0aWMgY29sdW1uIHdpZHRoIGluIHBpeGVscyBvciBwZXJjZW50YWdlLlxuICAgKi9cbiAgQElucHV0KClcbiAgcHVibGljIHdpZHRoOiBudW1iZXIgfCBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFJlbmRlciBjb2x1bW4gaWYgdHJ1ZS4gRWxzZSBpbmNsdWRlIGluIGNvbHVtbiBzZWxlY3RvciBidXQgbm90IHJlbmRlcmVkLlxuICAgKi9cbiAgQElucHV0KClcbiAgcHVibGljIHZpc2libGU6IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIFNob3cgZmlsZWQgaW4gY29sdW1uIHNlbGVjdG9yIHBvcHVwIGlmIHRydWUuXG4gICAqL1xuICBASW5wdXQoKVxuICBwdWJsaWMgc2hvd0luQ29sdW1uU2VsZWN0b3IgPSB0cnVlOyAvLyBUT0RPOiBtb3ZlIHRvIGJhc2UgY29uZlxuXG4gIC8qKlxuICAgKiBGaWx0ZXIgcGxhY2Vob2xkZXIgdmFsdWUuIFBsYWNlaG9sZGVyIHRleHQgdG8gc2hvdyBvbiBmaWx0ZXIgdGV4dCBib3guIEFwcGxpY2FibGUgb25seSBmb3Igbm9uZSBkcm9wZG93biBmaWx0ZXIgbW9kZS5cbiAgICovXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBmaWx0ZXJQbGFjZWhvbGRlcjogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBBcHBsaWVkIGZpbHRlciB2YWx1ZSBvbiBpbml0aWFsaXplLlxuICAgKi9cbiAgQElucHV0KClcbiAgcHVibGljIGZpbHRlcjogYW55O1xuXG4gIC8qKlxuICAgKiBTaG93IGZpbHRlciBjbGVhciBidXR0b24gaWYgdHJ1ZS4gQXBwbGljYWJsZSBvbmx5IGZvciBub25lIGRyb3Bkb3duIGZpbHRlciBtb2RlLlxuICAgKi9cbiAgQElucHV0KClcbiAgcHVibGljIHNob3dGaWx0ZXJDbGVhckJ1dHRvbjogYW55O1xuXG4gIC8qKlxuICAgKiBSZXNpemUgbWluaW11bSBsaW1pdC4gQ29sdW1uIGNhbm5vdCBiZSByZXNpemVkIHRvIGZpdCBsZXNzIHRoYW4gdGhlIG51bWJlciBvZiBwaXhlbHMgc3BlY2lmaWVkIGhlcmUuXG4gICAqL1xuICBASW5wdXQoKVxuICBwdWJsaWMgcmVzaXplTWluTGltaXQ6IG51bWJlcjtcblxuICAvLyBEcm9wZG93biBmaWx0ZXIgcHJvcGVydGllc1xuXG4gIC8qKlxuICAgKiBTaG93IGRyb3Bkb3duIGZpbHRlciBpZiB0cnVlLiBGaWx0ZXIgZGF0YSB1c2luZyBkcm9wZG93biBmaWx0ZXIuXG4gICAqL1xuICBASW5wdXQoKVxuICBwdWJsaWMgc2hvd0Ryb3Bkb3duRmlsdGVyOiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBEcm9wZG93biBmaWx0ZXIgbWVudSBwb3NpdGlvbi4gUGxhY2VtZW50IG9mIGZpbHRlciBwb3B1cCBtZW51LlxuICAgKi9cbiAgQElucHV0KClcbiAgcHVibGljIGRyb3Bkb3duRmlsdGVyTWVudVBvc2l0aW9uOiBWaWV3UG9zaXRpb247XG5cbiAgLyoqXG4gICAqIERyb3Bkb3duIHNlbGVjdCBtb2RlLiBGaWx0ZXIgb3B0aW9uIHNlbGVjdCBtb2RlLlxuICAgKi9cbiAgQElucHV0KClcbiAgcHVibGljIGRyb3Bkb3duRmlsdGVyU2VsZWN0TW9kZTogRHJvcGRvd25TZWxlY3RNb2RlO1xuXG4gIC8qKlxuICAgKiBEcm9wZG93biBmaWx0ZXIgc2VhcmNoYWJsZSBpZiB0cnVlLiBEaXNwbGF5IHNlYXJjaCBib3ggd2l0aGluIGZpbHRlciBvcHRpb24gbWVudS5cbiAgICovXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBkcm9wZG93bkZpbHRlclNlYXJjaGFibGU6IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIERyb3Bkb3duIGZpbHRlciBzZWFyY2ggZGVib3VuY2UgdGltZSBpbiBtaWxsaXNlY29uZHMuIEFwcGxpY2FibGUgb25seSB3aGVuIGRyb3Bkb3duRmlsdGVyU2VhcmNoRGVib3VuY2UgaXMgdHJ1ZS5cbiAgICovXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBkcm9wZG93bkZpbHRlclNlYXJjaERlYm91bmNlVGltZTogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBFbmFibGUgZHJvcGRvd24gZmlsdGVyIGRhdGEgc2VhcmNoIGRlYm91bmNlIHdpdGggcHJvdmlkZWQgZHJvcGRvd25GaWx0ZXJTZWFyY2hEZWJvdW5jZVRpbWUgaWYgdHJ1ZS5cbiAgICovXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBkcm9wZG93bkZpbHRlclNlYXJjaERlYm91bmNlOiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBEcm9wZG93biBmaWx0ZXIgc2hvdyBvcHRpb24gc2VsZWN0IGNoZWNrYm94LlxuICAgKi9cbiAgQElucHV0KClcbiAgcHVibGljIGRyb3BEb3duRmlsdGVyU2hvd09wdGlvblNlbGVjdENoZWNrYm94OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBEcm9wZG93biBmaWx0ZXIgc2VsZWN0ZWQgaXRlbXMgZGlzcGxheSBsaW1pdC5cbiAgICovXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBkcm9wZG93bkZpbHRlcldyYXBEaXNwbGF5U2VsZWN0TGltaXQ6IG51bWJlcjtcblxuICAvKipcbiAgICogRHJvcGRvd24gZmlsdGVyIGdyb3VwIGJ5IGZpZWxkIG5hbWUgaW4gaXRlbSBzY2hlbWEuXG4gICAqL1xuICBASW5wdXQoKVxuICBwdWJsaWMgZHJvcGRvd25GaWx0ZXJHcm91cEJ5RmllbGQ6IHN0cmluZztcblxuICAvKipcbiAgICogRHJvcGRvd24gZmlsdGVyIHNob3cgc2VsZWN0ZWQgb3B0aW9uIHJlbW92ZSBidXR0b24gaWYgdHJ1ZS5cbiAgICovXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBkcm9wZG93bkZpbHRlclNob3dTZWxlY3RlZE9wdGlvblJlbW92ZUJ1dHRvbjogYm9vbGVhbjtcblxuICAvKipcbiAgICogRHJvcGRvd24gZmlsdGVyIHNob3cgYWxsIHNlbGVjdCBvcHRpb25zIGNsZWFyIGJ1dHRvbiBpZiB0cnVlLlxuICAgKi9cbiAgQElucHV0KClcbiAgcHVibGljIGRyb3Bkb3duRmlsdGVyU2hvd0NsZWFyU2VsZWN0aW9uQnV0dG9uOiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBEcm9wZG93biBmaWx0ZXIgbWVudSB3aWR0aCBpbiBwaXhlbHMuXG4gICAqL1xuICBASW5wdXQoKVxuICBwdWJsaWMgZHJvcGRvd25GaWx0ZXJNZW51V2lkdGg6IG51bWJlcjtcblxuICAvKipcbiAgICogRHJvcGRvd24gZmlsdGVyIG1lbnUgaGVpZ2h0IGluIHBpeGVscy5cbiAgICovXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBkcm9wZG93bkZpbHRlck1lbnVIZWlnaHQ6IG51bWJlcjtcblxuICAvKipcbiAgICogRHJvcGRvd24gZmlsdGVyIG11bHRpIHNlbGVjdCBvcHRpb24gbWF4IHdpZHRoLlxuICAgKi9cbiAgQElucHV0KClcbiAgcHVibGljIGRyb3Bkb3duRmlsdGVyTXVsdGlTZWxlY3RPcHRpb25NYXhXaWR0aDogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBEcm9wZG93biBmaWx0ZXIgY2xvc2UgbWVudSBvbiBzZWxlY3QgaWYgdHJ1ZS5cbiAgICovXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBkcm9wZG93bkZpbHRlckNsb3NlTWVudU9uU2VsZWN0OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBEeW5hbWljYWxseSBjYWxjdWxhdGUgRHJvcGRvd24gZmlsdGVyIG1lbnUgZGltZW5zaW9ucyByZWxhdGl2ZSB0byBjb2x1bW4gd2lkdGg7IGRyb3Bkb3duRmlsdGVyTWVudVdpZHRoIGFuZFxuICAgKiBkcm9wZG93bkZpbHRlck1lbnVIZWlnaHQgY29uZmlndXJhdGlvbiBhcmUgaWdub3JlZCB3aGVuIHRydWUuXG4gICAqL1xuICBASW5wdXQoKVxuICBwdWJsaWMgZHJvcGRvd25GaWx0ZXJEeW5hbWljRGltZW5zaW9uQ2FsY3VsYXRpb246IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIER5bmFtaWMgZHJvcGRvd24gdmlldyB3aWR0aCByYXRpby4gVXNlZCBmb3IgZHluYW1pYyBkaW1lbnNpb24gY2FsY3VsYXRpb24uXG4gICAqL1xuICBASW5wdXQoKVxuICBwdWJsaWMgZHJvcGRvd25GaWx0ZXJEeW5hbWljV2lkdGhSYXRpbzogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBEeW5hbWljIGRyb3Bkb3duIHZpZXcgaGVpZ2h0IHJhdGlvLiBVc2VkIGZvciBkeW5hbWljIGRpbWVuc2lvbiBjYWxjdWxhdGlvbi5cbiAgICovXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBkcm9wZG93bkZpbHRlckR5bmFtaWNIZWlnaHRSYXRpbzogbnVtYmVyO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgZGF0YVRhYmxlQ29uZmlnU2VydmljZTogRGF0YVRhYmxlQ29uZmlnU2VydmljZSxcbiAgICBwcml2YXRlIGV2ZW50U3RhdGVTZXJ2aWNlOiBEYXRhVGFibGVFdmVudFN0YXRlU2VydmljZSxcbiAgICBwcml2YXRlIGRhdGFTdGF0ZVNlcnZpY2U6IERhdGFUYWJsZURhdGFTdGF0ZVNlcnZpY2UpIHtcbiAgICAvLyBUYWJsZSBjb2x1bW4gY29uZmlnXG4gICAgdGhpcy5zb3J0YWJsZSA9IGRhdGFUYWJsZUNvbmZpZ1NlcnZpY2Uuc29ydGFibGU7XG4gICAgdGhpcy5jdXJyZW50U29ydE9yZGVyID0gZGF0YVRhYmxlQ29uZmlnU2VydmljZS5zb3J0T3JkZXI7XG4gICAgdGhpcy5maWx0ZXJhYmxlID0gZGF0YVRhYmxlQ29uZmlnU2VydmljZS5maWx0ZXJhYmxlO1xuICAgIHRoaXMuZmlsdGVyUGxhY2Vob2xkZXIgPSBkYXRhVGFibGVDb25maWdTZXJ2aWNlLmZpbHRlclBsYWNlaG9sZGVyO1xuICAgIHRoaXMucmVzaXphYmxlID0gZGF0YVRhYmxlQ29uZmlnU2VydmljZS5jb2x1bW5SZXNpemFibGU7XG4gICAgdGhpcy52aXNpYmxlID0gZGF0YVRhYmxlQ29uZmlnU2VydmljZS5jb2x1bW5WaXNpYmxlO1xuICAgIHRoaXMuc2hvd0Ryb3Bkb3duRmlsdGVyID0gZGF0YVRhYmxlQ29uZmlnU2VydmljZS5zaG93RHJvcGRvd25GaWx0ZXI7XG4gICAgdGhpcy5zaG93RmlsdGVyQ2xlYXJCdXR0b24gPSBkYXRhVGFibGVDb25maWdTZXJ2aWNlLnNob3dGaWx0ZXJDbGVhckJ1dHRvbjtcblxuICAgIC8vIERyb3Bkb3duIGZpbHRlciBjb25maWdcbiAgICB0aGlzLmRyb3Bkb3duRmlsdGVyTWVudVBvc2l0aW9uID0gZGF0YVRhYmxlQ29uZmlnU2VydmljZS5kcm9wZG93bkZpbHRlck1lbnVQb3NpdGlvbjtcbiAgICB0aGlzLmRyb3Bkb3duRmlsdGVyU2VsZWN0TW9kZSA9IGRhdGFUYWJsZUNvbmZpZ1NlcnZpY2UuZHJvcGRvd25GaWx0ZXJTZWxlY3RNb2RlO1xuICAgIHRoaXMuZHJvcGRvd25GaWx0ZXJTZWFyY2hhYmxlID0gZGF0YVRhYmxlQ29uZmlnU2VydmljZS5kcm9wZG93bkZpbHRlclNlYXJjaGFibGU7XG4gICAgdGhpcy5kcm9wZG93bkZpbHRlclNlYXJjaERlYm91bmNlVGltZSA9IGRhdGFUYWJsZUNvbmZpZ1NlcnZpY2UuZHJvcGRvd25GaWx0ZXJTZWFyY2hEZWJvdW5jZVRpbWU7XG4gICAgdGhpcy5kcm9wZG93bkZpbHRlclNlYXJjaERlYm91bmNlID0gZGF0YVRhYmxlQ29uZmlnU2VydmljZS5kcm9wZG93bkZpbHRlclNlYXJjaERlYm91bmNlO1xuICAgIHRoaXMuZHJvcGRvd25GaWx0ZXJXcmFwRGlzcGxheVNlbGVjdExpbWl0ID0gZGF0YVRhYmxlQ29uZmlnU2VydmljZS5kcm9wZG93bkZpbHRlcldyYXBEaXNwbGF5U2VsZWN0TGltaXQ7XG4gICAgdGhpcy5kcm9wZG93bkZpbHRlckdyb3VwQnlGaWVsZCA9IGRhdGFUYWJsZUNvbmZpZ1NlcnZpY2UuZHJvcGRvd25GaWx0ZXJHcm91cEJ5RmllbGQ7XG4gICAgdGhpcy5kcm9wZG93bkZpbHRlclNob3dTZWxlY3RlZE9wdGlvblJlbW92ZUJ1dHRvbiA9IGRhdGFUYWJsZUNvbmZpZ1NlcnZpY2UuZHJvcGRvd25GaWx0ZXJTaG93U2VsZWN0ZWRPcHRpb25SZW1vdmVCdXR0b247XG4gICAgdGhpcy5kcm9wZG93bkZpbHRlclNob3dDbGVhclNlbGVjdGlvbkJ1dHRvbiA9IGRhdGFUYWJsZUNvbmZpZ1NlcnZpY2UuZHJvcGRvd25GaWx0ZXJTaG93Q2xlYXJTZWxlY3Rpb25CdXR0b247XG4gICAgdGhpcy5kcm9wZG93bkZpbHRlck1lbnVXaWR0aCA9IGRhdGFUYWJsZUNvbmZpZ1NlcnZpY2UuZHJvcGRvd25GaWx0ZXJNZW51V2lkdGg7XG4gICAgdGhpcy5kcm9wZG93bkZpbHRlck1lbnVIZWlnaHQgPSBkYXRhVGFibGVDb25maWdTZXJ2aWNlLmRyb3Bkb3duRmlsdGVyTWVudUhlaWdodDtcbiAgICB0aGlzLmRyb3Bkb3duRmlsdGVyTXVsdGlTZWxlY3RPcHRpb25NYXhXaWR0aCA9IGRhdGFUYWJsZUNvbmZpZ1NlcnZpY2UuZHJvcGRvd25GaWx0ZXJNdWx0aVNlbGVjdE9wdGlvbk1heFdpZHRoO1xuICAgIHRoaXMuZHJvcGRvd25GaWx0ZXJDbG9zZU1lbnVPblNlbGVjdCA9IGRhdGFUYWJsZUNvbmZpZ1NlcnZpY2UuZHJvcGRvd25GaWx0ZXJDbG9zZU1lbnVPblNlbGVjdDtcbiAgICB0aGlzLmRyb3Bkb3duRmlsdGVyRHluYW1pY0RpbWVuc2lvbkNhbGN1bGF0aW9uID0gZGF0YVRhYmxlQ29uZmlnU2VydmljZS5kcm9wZG93bkZpbHRlckR5bmFtaWNEaW1lbnNpb25DYWxjdWxhdGlvbjtcbiAgICB0aGlzLmRyb3Bkb3duRmlsdGVyRHluYW1pY1dpZHRoUmF0aW8gPSBkYXRhVGFibGVDb25maWdTZXJ2aWNlLmRyb3Bkb3duRmlsdGVyRHluYW1pY1dpZHRoUmF0aW87XG4gICAgdGhpcy5kcm9wZG93bkZpbHRlckR5bmFtaWNIZWlnaHRSYXRpbyA9IGRhdGFUYWJsZUNvbmZpZ1NlcnZpY2UuZHJvcGRvd25GaWx0ZXJEeW5hbWljSGVpZ2h0UmF0aW87XG4gIH1cblxuICAvKipcbiAgICogUmVzZXQgZGF0YSBzb3J0IG9yZGVyLlxuICAgKi9cbiAgcHVibGljIHJlc2V0U29ydE9yZGVyKCk6IHZvaWQge1xuICAgIHRoaXMuY3VycmVudFNvcnRPcmRlciA9IHRoaXMuYmFzZVNvcnRPcmRlcjtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgZHluYW1pYyBjZWxsIGNvbG9yLlxuICAgKiBAcGFyYW0gcm93IERhdGEgcm93IG9iamVjdC5cbiAgICogQHJldHVybiBDZWxsIGNvbG9yIHN0cmluZy5cbiAgICovXG4gIHB1YmxpYyBnZXRDZWxsQ29sb3Iocm93OiBEYXRhVGFibGVSb3c8YW55Pikge1xuICAgIGlmICh0aGlzLm9uQ2VsbENvbG9yUmVuZGVyICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiB0aGlzLm9uQ2VsbENvbG9yUmVuZGVyKHJvdywgdGhpcyk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEdldCBuZXcgc29ydCBvcmRlciB1cG9uIHNvcnQgY2xpY2suXG4gICAqIEByZXR1cm4gTmV3IHNvcnQgb3JkZXIgZW51bSB2YWx1ZS5cbiAgICovXG4gIHB1YmxpYyBnZXROZXdTb3J0T3JkZXIoKTogRGF0YVRhYmxlU29ydE9yZGVyIHtcbiAgICBsZXQgbmV3U29ydE9yZGVyOiBEYXRhVGFibGVTb3J0T3JkZXI7XG4gICAgc3dpdGNoICh0aGlzLnNvcnRPcmRlcikge1xuICAgICAgY2FzZSAnYXNjJzpcbiAgICAgICAgbmV3U29ydE9yZGVyID0gJ2Rlc2MnO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2Rlc2MnOlxuICAgICAgICBuZXdTb3J0T3JkZXIgPSAnJztcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICcnOlxuICAgICAgICBuZXdTb3J0T3JkZXIgPSAnYXNjJztcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5ld1NvcnRPcmRlcjtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgY3VycmVudCBzb3J0IHN0YXRlIGljb24gY3NzIGNsYXNzIGVuYWJsZWQgc3RhdGUuXG4gICAqIEByZXR1cm4gU29ydCBvcmRlciBpY29uIGNzcyBjbGFzcyBjb2xsZWN0aW9uIG9iamVjdC5cbiAgICovXG4gIHB1YmxpYyBnZXRTb3J0SWNvbkNsYXNzKCk6IGFueSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICdzb3J0LWFzYyc6IHRoaXMuc29ydE9yZGVyID09PSAnYXNjJyxcbiAgICAgICdzb3J0LWRzYyc6IHRoaXMuc29ydE9yZGVyID09PSAnZGVzYycsXG4gICAgICAnc29ydC1yZXNldCc6ICF0aGlzLnNvcnRPcmRlclxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogQ29tcG9uZW50IGRlc3Ryb3kgbGlmZWN5Y2xlIGV2ZW50IGhhbmRsZXIuXG4gICAqL1xuICBwdWJsaWMgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuZmlsdGVyVmFsdWVFeHRyYWN0b3JTdWJzY3JpcHRpb24pIHtcbiAgICAgIHRoaXMuZmlsdGVyVmFsdWVFeHRyYWN0b3JTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ29tcG9uZW50IGluaXRpYWxpemUgbGlmZWN5Y2xlIGV2ZW50IGhhbmRsZXIuXG4gICAqL1xuICBwdWJsaWMgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLmNzc0NsYXNzICYmIHRoaXMuZmllbGQpIHtcbiAgICAgIGlmICgvXlthLXpBLVowLTlfXSskLy50ZXN0KHRoaXMuZmllbGQpKSB7XG4gICAgICAgIHRoaXMuY3NzQ2xhc3MgPSAnY29sdW1uLScgKyB0aGlzLmZpZWxkO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5jc3NDbGFzcyA9ICdjb2x1bW4tJyArIHRoaXMuZmllbGQucmVwbGFjZSgvW15hLXpBLVowLTlfXS9nLCAnJyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5ldmVudFN0YXRlU2VydmljZS5jb2x1bW5CaW5kLmVtaXQodGhpcyk7XG5cbiAgICBpZiAodGhpcy5kYXRhVGFibGVDb25maWdTZXJ2aWNlLm11bHRpQ29sdW1uU29ydGFibGUgJiYgdGhpcy5zb3J0YWJsZSkge1xuICAgICAgaWYgKHRoaXMuc29ydE9yZGVyID09PSAnJykge1xuICAgICAgICBpZiAodGhpcy5zb3J0UHJpb3JpdHkgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRocm93IEVycm9yKCdbc29ydFByaW9yaXR5XSBzaG91bGQgYmUgaWdub3JlZCB3aGVuIG11bHRpIGNvbHVtbiBzb3J0aW5nIGlzIGVuYWJsZWQgd2l0aCBuYXR1cmFsIHNvcnQgb3JkZXIuJyk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmICh0aGlzLnNvcnRQcmlvcml0eSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhyb3cgRXJyb3IoJ1tzb3J0UHJpb3JpdHldIGlzIHJlcXVpcmVkIHdoZW4gbXVsdGkgY29sdW1uIHNvcnRpbmcgaXMgZW5hYmxlZCB3aXRoIGFuIGV4cGxpY2l0IHNvcnQgb3JkZXIuJyk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuc29ydFByaW9yaXR5IDwgMSkge1xuICAgICAgICB0aHJvdyBFcnJvcignW3NvcnRQcmlvcml0eV0gbXVzdCBiZSBncmVhdGVyIHRoYW4gMS4nKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuZGF0YVN0YXRlU2VydmljZS5jdXJyZW50U29ydFByaW9yaXR5IDwgdGhpcy5zb3J0UHJpb3JpdHkpIHtcbiAgICAgICAgdGhpcy5kYXRhU3RhdGVTZXJ2aWNlLmN1cnJlbnRTb3J0UHJpb3JpdHkgPSB0aGlzLnNvcnRQcmlvcml0eTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiJdfQ==