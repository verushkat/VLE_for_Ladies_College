/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Data table configuration model.
 * @record
 */
export function DataTableConfig() { }
if (false) {
    /**
     * Persist table state on provided storage mode if true. Depends on storageMode property.
     * @type {?|undefined}
     */
    DataTableConfig.prototype.persistTableState;
    /**
     * Storage mode to persist table state. Only applicable when persistTableState is true.
     * @type {?|undefined}
     */
    DataTableConfig.prototype.storageMode;
    /**
     * Set multiple column sortable if true. Only applicable for sortable true columns.
     * @type {?|undefined}
     */
    DataTableConfig.prototype.multiColumnSortable;
    /**
     * Show table header bar if true.
     * @type {?|undefined}
     */
    DataTableConfig.prototype.showHeader;
    /**
     * Show refresh button if true. Only applicable when showHeader is true.
     * @type {?|undefined}
     */
    DataTableConfig.prototype.showRefreshButton;
    /**
     * Show column selector if true; Only applicable when showHeader is true.
     * @type {?|undefined}
     */
    DataTableConfig.prototype.showColumnSelector;
    /**
     * Column selector dropdown width in pixels. Only applicable when showColumnSelector is true.
     * @type {?|undefined}
     */
    DataTableConfig.prototype.columnSelectorWidth;
    /**
     * .
     * Title to be shown in the header. Only applicable when showHeader is true.
     * @type {?|undefined}
     */
    DataTableConfig.prototype.title;
    /**
     * Width value in pixels. Can be used to set the width of teh table (responsive if not set).
     * @type {?|undefined}
     */
    DataTableConfig.prototype.width;
    /**
     * Minimum table content width value in pixels. Can be used to set the minimum width of the table content area.
     * @type {?|undefined}
     */
    DataTableConfig.prototype.minContentWidth;
    /**
     * Minimum table content height value in pixels. Can be used to set the minimum height of the table content area.
     * @type {?|undefined}
     */
    DataTableConfig.prototype.minContentHeight;
    /**
     * Table content height value in pixels. This configuration can be used to enable table content vertical scrolling for responsive design.
     * @type {?|undefined}
     */
    DataTableConfig.prototype.contentHeight;
    /**
     * Show pagination bar if true. Depends on offset and limit values. Trigger dataLoad event with offset and limit values.
     * @type {?|undefined}
     */
    DataTableConfig.prototype.pageable;
    /**
     * Enable scrolling based on-demand data loading functionality if true. Trigger dataLoad event with offset
     * and limit values when scroll to bottom until data source exhaust.
     * @type {?|undefined}
     */
    DataTableConfig.prototype.loadOnScroll;
    /**
     * View height distance ratio to trigger data fetch on scroll.
     * Applicable only when load on scroll mode is enabled.
     * @type {?|undefined}
     */
    DataTableConfig.prototype.loadViewDistanceRatio;
    /**
     * Show auto generated index column with row numbering if true.
     * @type {?|undefined}
     */
    DataTableConfig.prototype.showIndexColumn;
    /**
     * Index column header title; Applicable when showIndexColumn is true.
     * @type {?|undefined}
     */
    DataTableConfig.prototype.indexColumnTitle;
    /**
     * Show row select checkbox and select state if true.
     * @type {?|undefined}
     */
    DataTableConfig.prototype.rowSelectable;
    /**
     * Trigger row select on click event if true. Applicable only when rowSelectable is true.
     * @type {?|undefined}
     */
    DataTableConfig.prototype.selectOnRowClick;
    /**
     * Data table row select mode. Applicable only when rowSelectable is true.
     * @type {?|undefined}
     */
    DataTableConfig.prototype.selectMode;
    /**
     * Show row select checkbox column if true; Only applicable when rowSelectable is true.
     * @type {?|undefined}
     */
    DataTableConfig.prototype.showRowSelectCheckbox;
    /**
     * Show select all row checkbox on column header if true.
     * Only applicable when showRowSelectCheckbox, rowSelectable is true & item selectMode is  multi.
     * @type {?|undefined}
     */
    DataTableConfig.prototype.showRowSelectAllCheckbox;
    /**
     * Show substitute rows if true;=. Fill with empty rows when row count < limit.
     * @type {?|undefined}
     */
    DataTableConfig.prototype.showSubstituteRows;
    /**
     * Show row expander if true. Render ngDataTableExpand template on expand click.
     * @type {?|undefined}
     */
    DataTableConfig.prototype.expandableRows;
    /**
     * Expand and render expand template on row click if true. Only applicable when expandableRows is true.
     * @type {?|undefined}
     */
    DataTableConfig.prototype.expandOnRowClick;
    /**
     * Auto trigger dataLoad event on initialization if true.
     * @type {?|undefined}
     */
    DataTableConfig.prototype.autoFetch;
    /**
     * Show loading spinner if true.
     * @type {?|undefined}
     */
    DataTableConfig.prototype.showLoadingSpinner;
    /**
     * Set select option track by field path which is used to uniquely identify row for selection tracking.
     * This field support object paths expressions 'root[0].nest'.
     * @type {?|undefined}
     */
    DataTableConfig.prototype.selectTrackBy;
    /**
     * Enable filter data debounce with provided filterDebounceTime if true.
     * @type {?|undefined}
     */
    DataTableConfig.prototype.filterDebounce;
    /**
     * Filter debounce time in milliseconds. Applicable only when filterDebounce is true.
     * @type {?|undefined}
     */
    DataTableConfig.prototype.filterDebounceTime;
    /**
     * Expander column width in pixels. Applicable only when expandableRows is true.
     * @type {?|undefined}
     */
    DataTableConfig.prototype.expanderColumnWidth;
    /**
     * Index column width in pixels. Applicable only when showIndexColumn is true.
     * @type {?|undefined}
     */
    DataTableConfig.prototype.indexColumnWidth;
    /**
     * Row selector column width in pixels. Applicable only when showColumnSelector is true.
     * @type {?|undefined}
     */
    DataTableConfig.prototype.selectionColumnWidth;
    /**
     * Data offset value (start offset index); Applicable only when pageable is true.
     * @type {?|undefined}
     */
    DataTableConfig.prototype.offset;
    /**
     * Data limit value (page size). Applicable only when pageable is true.
     * @type {?|undefined}
     */
    DataTableConfig.prototype.limit;
    /**
     * Data max limit value (max page size); Applicable only when pageable is true.
     * @type {?|undefined}
     */
    DataTableConfig.prototype.maxLimit;
    /**
     * Base translation data object. Used to localize table static label text.
     * @type {?|undefined}
     */
    DataTableConfig.prototype.baseTranslations;
    /**
     * State persistence key prefix.
     * @type {?|undefined}
     */
    DataTableConfig.prototype.stateKeyPrefix;
    /**
     * Show row expand loading spinner if true. Applicable only when row expand is enabled.
     * @type {?|undefined}
     */
    DataTableConfig.prototype.showRowExpandLoadingSpinner;
    /**
     * Columns sortable if true; Show sort indicator on column title.
     * @type {?|undefined}
     */
    DataTableConfig.prototype.sortable;
    /**
     * Initial column sort order.
     * @type {?|undefined}
     */
    DataTableConfig.prototype.sortOrder;
    /**
     * Column filterable if true; Show filter options bar when enabled.
     * @type {?|undefined}
     */
    DataTableConfig.prototype.filterable;
    /**
     * Filter placeholder string; Applicable only when showDropdownFilter is false.
     * @type {?|undefined}
     */
    DataTableConfig.prototype.filterPlaceholder;
    /**
     * Column resizeable if true; Show column resize indicator on column right corner.
     * @type {?|undefined}
     */
    DataTableConfig.prototype.columnResizable;
    /**
     * Render column if true.
     * @type {?|undefined}
     */
    DataTableConfig.prototype.columnVisible;
    /**
     * Show dropdown filter if true.
     * @type {?|undefined}
     */
    DataTableConfig.prototype.showDropdownFilter;
    /**
     * Show filter clear button if true; Applicable only for none dropdown filter mode.
     * @type {?|undefined}
     */
    DataTableConfig.prototype.showFilterClearButton;
    /**
     * Dropdown filter menu position; Applicable only when showDropdownFilter is true.
     * @type {?|undefined}
     */
    DataTableConfig.prototype.dropdownFilterMenuPosition;
    /**
     * Dropdown select mode; Applicable only when showDropdownFilter is true.
     * @type {?|undefined}
     */
    DataTableConfig.prototype.dropdownFilterSelectMode;
    /**
     * Dropdown filter searchable if true; Show dropdown filter search input.
     * @type {?|undefined}
     */
    DataTableConfig.prototype.dropdownFilterSearchable;
    /**
     * Enable dropdown filter data search debounce with provided dropdownFilterSearchDebounceTime if true.
     * @type {?|undefined}
     */
    DataTableConfig.prototype.dropdownFilterSearchDebounce;
    /**
     * Dropdown filter search debounce time in milliseconds; Applicable only when dropdownFilterSearchDebounce is true.
     * @type {?|undefined}
     */
    DataTableConfig.prototype.dropdownFilterSearchDebounceTime;
    /**
     * Dropdown filter group by field name in item schema.
     * @type {?|undefined}
     */
    DataTableConfig.prototype.dropdownFilterGroupByField;
    /**
     * Dropdown filter wrap display selected limit; Wrap selected items when limit exceeded.
     * @type {?|undefined}
     */
    DataTableConfig.prototype.dropdownFilterWrapDisplaySelectLimit;
    /**
     * Dropdown filter show selected option remove button if true.
     * @type {?|undefined}
     */
    DataTableConfig.prototype.dropdownFilterShowSelectedOptionRemoveButton;
    /**
     * Dropdown filter show all select options clear button if true.
     * @type {?|undefined}
     */
    DataTableConfig.prototype.dropdownFilterShowClearSelectionButton;
    /**
     * Dropdown filter menu width in pixels.
     * @type {?|undefined}
     */
    DataTableConfig.prototype.dropdownFilterMenuWidth;
    /**
     * Dropdown filter menu height in pixels.
     * @type {?|undefined}
     */
    DataTableConfig.prototype.dropdownFilterMenuHeight;
    /**
     * Dropdown filter multi select option max width.
     * @type {?|undefined}
     */
    DataTableConfig.prototype.dropdownFilterMultiSelectOptionMaxWidth;
    /**
     * Dropdown filter close menu on select if true.
     * @type {?|undefined}
     */
    DataTableConfig.prototype.dropdownFilterCloseMenuOnSelect;
    /**
     * Dynamically calculate Dropdown filter menu dimensions relative to column width.
     * DropdownFilterMenuWidth and dropdownFilterMenuHeight configuration are ignored when true.
     * @type {?|undefined}
     */
    DataTableConfig.prototype.dropdownFilterDynamicDimensionCalculation;
    /**
     * Dynamic dropdown view width ratio; Used for dynamic dimension calculation.
     * @type {?|undefined}
     */
    DataTableConfig.prototype.dropdownFilterDynamicWidthRatio;
    /**
     * Dynamic dropdown view height ratio; Used for dynamic dimension calculation.
     * @type {?|undefined}
     */
    DataTableConfig.prototype.dropdownFilterDynamicHeightRatio;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS10YWJsZS1jb25maWcubW9kZWwuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9vcm5hbWVudHVtLyIsInNvdXJjZXMiOlsiZGF0YS10YWJsZS9tb2RlbHMvZGF0YS10YWJsZS1jb25maWcubW9kZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFXQSxxQ0FzVUM7Ozs7OztJQWhVQyw0Q0FBNEI7Ozs7O0lBSzVCLHNDQUFtQzs7Ozs7SUFLbkMsOENBQThCOzs7OztJQUs5QixxQ0FBcUI7Ozs7O0lBS3JCLDRDQUE0Qjs7Ozs7SUFLNUIsNkNBQTZCOzs7OztJQUs3Qiw4Q0FBc0M7Ozs7OztJQUt0QyxnQ0FBZTs7Ozs7SUFLZixnQ0FBd0I7Ozs7O0lBS3hCLDBDQUFrQzs7Ozs7SUFLbEMsMkNBQW1DOzs7OztJQUtuQyx3Q0FBZ0M7Ozs7O0lBS2hDLG1DQUFtQjs7Ozs7O0lBTW5CLHVDQUF1Qjs7Ozs7O0lBTXZCLGdEQUErQjs7Ozs7SUFLL0IsMENBQTBCOzs7OztJQUsxQiwyQ0FBMEI7Ozs7O0lBSzFCLHdDQUF3Qjs7Ozs7SUFLeEIsMkNBQTJCOzs7OztJQUszQixxQ0FBaUM7Ozs7O0lBS2pDLGdEQUFnQzs7Ozs7O0lBTWhDLG1EQUFtQzs7Ozs7SUFLbkMsNkNBQTZCOzs7OztJQUs3Qix5Q0FBeUI7Ozs7O0lBS3pCLDJDQUEyQjs7Ozs7SUFLM0Isb0NBQW9COzs7OztJQUtwQiw2Q0FBNkI7Ozs7OztJQU03Qix3Q0FBdUI7Ozs7O0lBS3ZCLHlDQUF5Qjs7Ozs7SUFLekIsNkNBQTRCOzs7OztJQUs1Qiw4Q0FBc0M7Ozs7O0lBS3RDLDJDQUFtQzs7Ozs7SUFLbkMsK0NBQXVDOzs7OztJQUt2QyxpQ0FBZ0I7Ozs7O0lBS2hCLGdDQUFlOzs7OztJQUtmLG1DQUFrQjs7Ozs7SUFLbEIsMkNBQXlDOzs7OztJQUt6Qyx5Q0FBd0I7Ozs7O0lBS3hCLHNEQUFzQzs7Ozs7SUFPdEMsbUNBQW1COzs7OztJQUtuQixvQ0FBK0I7Ozs7O0lBSy9CLHFDQUFxQjs7Ozs7SUFLckIsNENBQTJCOzs7OztJQUszQiwwQ0FBMEI7Ozs7O0lBSzFCLHdDQUF3Qjs7Ozs7SUFLeEIsNkNBQTZCOzs7OztJQUs3QixnREFBZ0M7Ozs7O0lBT2hDLHFEQUEwQzs7Ozs7SUFLMUMsbURBQThDOzs7OztJQUs5QyxtREFBbUM7Ozs7O0lBS25DLHVEQUF1Qzs7Ozs7SUFLdkMsMkRBQTBDOzs7OztJQUsxQyxxREFBb0M7Ozs7O0lBS3BDLCtEQUE4Qzs7Ozs7SUFLOUMsdUVBQXVEOzs7OztJQUt2RCxpRUFBaUQ7Ozs7O0lBS2pELGtEQUFpQzs7Ozs7SUFLakMsbURBQWtDOzs7OztJQUtsQyxrRUFBaUQ7Ozs7O0lBS2pELDBEQUEwQzs7Ozs7O0lBTTFDLG9FQUFvRDs7Ozs7SUFLcEQsMERBQXlDOzs7OztJQUt6QywyREFBMEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEYXRhVGFibGVUcmFuc2xhdGlvbnMgfSBmcm9tICcuL2RhdGEtdGFibGUtdHJhbnNsYXRpb25zLm1vZGVsJztcblxuaW1wb3J0IHsgRGF0YVRhYmxlU3RvcmFnZU1vZGUgfSBmcm9tICcuL2RhdGEtdGFibGUtc3RvcmFnZS1tb2RlLm1vZGVsJztcbmltcG9ydCB7IERhdGFUYWJsZVNvcnRPcmRlciB9IGZyb20gJy4vZGF0YS10YWJsZS1zb3J0LW9yZGVyLm1vZGVsJztcbmltcG9ydCB7IERhdGFUYWJsZVNlbGVjdE1vZGUgfSBmcm9tICcuL2RhdGEtdGFibGUtc2VsZWN0LW1vZGUubW9kZWwnO1xuaW1wb3J0IHsgRHJvcGRvd25TZWxlY3RNb2RlIH0gZnJvbSAnLi4vLi4vZHJvcGRvd24vZHJvcGRvd24ubW9kdWxlJztcbmltcG9ydCB7IFZpZXdQb3NpdGlvbiB9IGZyb20gJy4uLy4uL3V0aWxpdHkvbW9kZWxzL3ZpZXctcG9zaXRpb24ubW9kZWwnO1xuXG4vKipcbiAqIERhdGEgdGFibGUgY29uZmlndXJhdGlvbiBtb2RlbC5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBEYXRhVGFibGVDb25maWcge1xuICAvLyBUYWJsZSBiYXNlIGNvbmZpZ1xuXG4gIC8qKlxuICAgKiBQZXJzaXN0IHRhYmxlIHN0YXRlIG9uIHByb3ZpZGVkIHN0b3JhZ2UgbW9kZSBpZiB0cnVlLiBEZXBlbmRzIG9uIHN0b3JhZ2VNb2RlIHByb3BlcnR5LlxuICAgKi9cbiAgcGVyc2lzdFRhYmxlU3RhdGU/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBTdG9yYWdlIG1vZGUgdG8gcGVyc2lzdCB0YWJsZSBzdGF0ZS4gT25seSBhcHBsaWNhYmxlIHdoZW4gcGVyc2lzdFRhYmxlU3RhdGUgaXMgdHJ1ZS5cbiAgICovXG4gIHN0b3JhZ2VNb2RlPzogRGF0YVRhYmxlU3RvcmFnZU1vZGU7XG5cbiAgLyoqXG4gICAqIFNldCBtdWx0aXBsZSBjb2x1bW4gc29ydGFibGUgaWYgdHJ1ZS4gT25seSBhcHBsaWNhYmxlIGZvciBzb3J0YWJsZSB0cnVlIGNvbHVtbnMuXG4gICAqL1xuICBtdWx0aUNvbHVtblNvcnRhYmxlPzogYm9vbGVhbjtcblxuICAvKipcbiAgICogU2hvdyB0YWJsZSBoZWFkZXIgYmFyIGlmIHRydWUuXG4gICAqL1xuICBzaG93SGVhZGVyPzogYm9vbGVhbjtcblxuICAvKipcbiAgICogU2hvdyByZWZyZXNoIGJ1dHRvbiBpZiB0cnVlLiBPbmx5IGFwcGxpY2FibGUgd2hlbiBzaG93SGVhZGVyIGlzIHRydWUuXG4gICAqL1xuICBzaG93UmVmcmVzaEJ1dHRvbj86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIFNob3cgY29sdW1uIHNlbGVjdG9yIGlmIHRydWU7IE9ubHkgYXBwbGljYWJsZSB3aGVuIHNob3dIZWFkZXIgaXMgdHJ1ZS5cbiAgICovXG4gIHNob3dDb2x1bW5TZWxlY3Rvcj86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIENvbHVtbiBzZWxlY3RvciBkcm9wZG93biB3aWR0aCBpbiBwaXhlbHMuIE9ubHkgYXBwbGljYWJsZSB3aGVuIHNob3dDb2x1bW5TZWxlY3RvciBpcyB0cnVlLlxuICAgKi9cbiAgY29sdW1uU2VsZWN0b3JXaWR0aD86IHN0cmluZyB8IG51bWJlcjtcblxuICAvKiouXG4gICAqIFRpdGxlIHRvIGJlIHNob3duIGluIHRoZSBoZWFkZXIuIE9ubHkgYXBwbGljYWJsZSB3aGVuIHNob3dIZWFkZXIgaXMgdHJ1ZS5cbiAgICovXG4gIHRpdGxlPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBXaWR0aCB2YWx1ZSBpbiBwaXhlbHMuIENhbiBiZSB1c2VkIHRvIHNldCB0aGUgd2lkdGggb2YgdGVoIHRhYmxlIChyZXNwb25zaXZlIGlmIG5vdCBzZXQpLlxuICAgKi9cbiAgd2lkdGg/OiBzdHJpbmcgfCBudW1iZXI7XG5cbiAgLyoqXG4gICAqIE1pbmltdW0gdGFibGUgY29udGVudCB3aWR0aCB2YWx1ZSBpbiBwaXhlbHMuIENhbiBiZSB1c2VkIHRvIHNldCB0aGUgbWluaW11bSB3aWR0aCBvZiB0aGUgdGFibGUgY29udGVudCBhcmVhLlxuICAgKi9cbiAgbWluQ29udGVudFdpZHRoPzogc3RyaW5nIHwgbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBNaW5pbXVtIHRhYmxlIGNvbnRlbnQgaGVpZ2h0IHZhbHVlIGluIHBpeGVscy4gQ2FuIGJlIHVzZWQgdG8gc2V0IHRoZSBtaW5pbXVtIGhlaWdodCBvZiB0aGUgdGFibGUgY29udGVudCBhcmVhLlxuICAgKi9cbiAgbWluQ29udGVudEhlaWdodD86IHN0cmluZyB8IG51bWJlcjtcblxuICAvKipcbiAgICogVGFibGUgY29udGVudCBoZWlnaHQgdmFsdWUgaW4gcGl4ZWxzLiBUaGlzIGNvbmZpZ3VyYXRpb24gY2FuIGJlIHVzZWQgdG8gZW5hYmxlIHRhYmxlIGNvbnRlbnQgdmVydGljYWwgc2Nyb2xsaW5nIGZvciByZXNwb25zaXZlIGRlc2lnbi5cbiAgICovXG4gIGNvbnRlbnRIZWlnaHQ/OiBzdHJpbmcgfCBudW1iZXI7XG5cbiAgLyoqXG4gICAqIFNob3cgcGFnaW5hdGlvbiBiYXIgaWYgdHJ1ZS4gRGVwZW5kcyBvbiBvZmZzZXQgYW5kIGxpbWl0IHZhbHVlcy4gVHJpZ2dlciBkYXRhTG9hZCBldmVudCB3aXRoIG9mZnNldCBhbmQgbGltaXQgdmFsdWVzLlxuICAgKi9cbiAgcGFnZWFibGU/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBFbmFibGUgc2Nyb2xsaW5nIGJhc2VkIG9uLWRlbWFuZCBkYXRhIGxvYWRpbmcgZnVuY3Rpb25hbGl0eSBpZiB0cnVlLiBUcmlnZ2VyIGRhdGFMb2FkIGV2ZW50IHdpdGggb2Zmc2V0XG4gICAqIGFuZCBsaW1pdCB2YWx1ZXMgd2hlbiBzY3JvbGwgdG8gYm90dG9tIHVudGlsIGRhdGEgc291cmNlIGV4aGF1c3QuXG4gICAqL1xuICBsb2FkT25TY3JvbGw/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBWaWV3IGhlaWdodCBkaXN0YW5jZSByYXRpbyB0byB0cmlnZ2VyIGRhdGEgZmV0Y2ggb24gc2Nyb2xsLlxuICAgKiBBcHBsaWNhYmxlIG9ubHkgd2hlbiBsb2FkIG9uIHNjcm9sbCBtb2RlIGlzIGVuYWJsZWQuXG4gICAqL1xuICBsb2FkVmlld0Rpc3RhbmNlUmF0aW8/OiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIFNob3cgYXV0byBnZW5lcmF0ZWQgaW5kZXggY29sdW1uIHdpdGggcm93IG51bWJlcmluZyBpZiB0cnVlLlxuICAgKi9cbiAgc2hvd0luZGV4Q29sdW1uPzogYm9vbGVhbjtcblxuICAvKipcbiAgICogSW5kZXggY29sdW1uIGhlYWRlciB0aXRsZTsgQXBwbGljYWJsZSB3aGVuIHNob3dJbmRleENvbHVtbiBpcyB0cnVlLlxuICAgKi9cbiAgaW5kZXhDb2x1bW5UaXRsZT86IHN0cmluZztcblxuICAvKipcbiAgICogU2hvdyByb3cgc2VsZWN0IGNoZWNrYm94IGFuZCBzZWxlY3Qgc3RhdGUgaWYgdHJ1ZS5cbiAgICovXG4gIHJvd1NlbGVjdGFibGU/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBUcmlnZ2VyIHJvdyBzZWxlY3Qgb24gY2xpY2sgZXZlbnQgaWYgdHJ1ZS4gQXBwbGljYWJsZSBvbmx5IHdoZW4gcm93U2VsZWN0YWJsZSBpcyB0cnVlLlxuICAgKi9cbiAgc2VsZWN0T25Sb3dDbGljaz86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIERhdGEgdGFibGUgcm93IHNlbGVjdCBtb2RlLiBBcHBsaWNhYmxlIG9ubHkgd2hlbiByb3dTZWxlY3RhYmxlIGlzIHRydWUuXG4gICAqL1xuICBzZWxlY3RNb2RlPzogRGF0YVRhYmxlU2VsZWN0TW9kZTtcblxuICAvKipcbiAgICogU2hvdyByb3cgc2VsZWN0IGNoZWNrYm94IGNvbHVtbiBpZiB0cnVlOyBPbmx5IGFwcGxpY2FibGUgd2hlbiByb3dTZWxlY3RhYmxlIGlzIHRydWUuXG4gICAqL1xuICBzaG93Um93U2VsZWN0Q2hlY2tib3g/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBTaG93IHNlbGVjdCBhbGwgcm93IGNoZWNrYm94IG9uIGNvbHVtbiBoZWFkZXIgaWYgdHJ1ZS5cbiAgICogT25seSBhcHBsaWNhYmxlIHdoZW4gc2hvd1Jvd1NlbGVjdENoZWNrYm94LCByb3dTZWxlY3RhYmxlIGlzIHRydWUgJiBpdGVtIHNlbGVjdE1vZGUgaXMgIG11bHRpLlxuICAgKi9cbiAgc2hvd1Jvd1NlbGVjdEFsbENoZWNrYm94PzogYm9vbGVhbjtcblxuICAvKipcbiAgICogU2hvdyBzdWJzdGl0dXRlIHJvd3MgaWYgdHJ1ZTs9LiBGaWxsIHdpdGggZW1wdHkgcm93cyB3aGVuIHJvdyBjb3VudCA8IGxpbWl0LlxuICAgKi9cbiAgc2hvd1N1YnN0aXR1dGVSb3dzPzogYm9vbGVhbjtcblxuICAvKipcbiAgICogU2hvdyByb3cgZXhwYW5kZXIgaWYgdHJ1ZS4gUmVuZGVyIG5nRGF0YVRhYmxlRXhwYW5kIHRlbXBsYXRlIG9uIGV4cGFuZCBjbGljay5cbiAgICovXG4gIGV4cGFuZGFibGVSb3dzPzogYm9vbGVhbjtcblxuICAvKipcbiAgICogRXhwYW5kIGFuZCByZW5kZXIgZXhwYW5kIHRlbXBsYXRlIG9uIHJvdyBjbGljayBpZiB0cnVlLiBPbmx5IGFwcGxpY2FibGUgd2hlbiBleHBhbmRhYmxlUm93cyBpcyB0cnVlLlxuICAgKi9cbiAgZXhwYW5kT25Sb3dDbGljaz86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIEF1dG8gdHJpZ2dlciBkYXRhTG9hZCBldmVudCBvbiBpbml0aWFsaXphdGlvbiBpZiB0cnVlLlxuICAgKi9cbiAgYXV0b0ZldGNoPzogYm9vbGVhbjtcblxuICAvKipcbiAgICogU2hvdyBsb2FkaW5nIHNwaW5uZXIgaWYgdHJ1ZS5cbiAgICovXG4gIHNob3dMb2FkaW5nU3Bpbm5lcj86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIFNldCBzZWxlY3Qgb3B0aW9uIHRyYWNrIGJ5IGZpZWxkIHBhdGggd2hpY2ggaXMgdXNlZCB0byB1bmlxdWVseSBpZGVudGlmeSByb3cgZm9yIHNlbGVjdGlvbiB0cmFja2luZy5cbiAgICogVGhpcyBmaWVsZCBzdXBwb3J0IG9iamVjdCBwYXRocyBleHByZXNzaW9ucyAncm9vdFswXS5uZXN0Jy5cbiAgICovXG4gIHNlbGVjdFRyYWNrQnk/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIEVuYWJsZSBmaWx0ZXIgZGF0YSBkZWJvdW5jZSB3aXRoIHByb3ZpZGVkIGZpbHRlckRlYm91bmNlVGltZSBpZiB0cnVlLlxuICAgKi9cbiAgZmlsdGVyRGVib3VuY2U/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBGaWx0ZXIgZGVib3VuY2UgdGltZSBpbiBtaWxsaXNlY29uZHMuIEFwcGxpY2FibGUgb25seSB3aGVuIGZpbHRlckRlYm91bmNlIGlzIHRydWUuXG4gICAqL1xuICBmaWx0ZXJEZWJvdW5jZVRpbWU/OiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIEV4cGFuZGVyIGNvbHVtbiB3aWR0aCBpbiBwaXhlbHMuIEFwcGxpY2FibGUgb25seSB3aGVuIGV4cGFuZGFibGVSb3dzIGlzIHRydWUuXG4gICAqL1xuICBleHBhbmRlckNvbHVtbldpZHRoPzogc3RyaW5nIHwgbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBJbmRleCBjb2x1bW4gd2lkdGggaW4gcGl4ZWxzLiBBcHBsaWNhYmxlIG9ubHkgd2hlbiBzaG93SW5kZXhDb2x1bW4gaXMgdHJ1ZS5cbiAgICovXG4gIGluZGV4Q29sdW1uV2lkdGg/OiBzdHJpbmcgfCBudW1iZXI7XG5cbiAgLyoqXG4gICAqIFJvdyBzZWxlY3RvciBjb2x1bW4gd2lkdGggaW4gcGl4ZWxzLiBBcHBsaWNhYmxlIG9ubHkgd2hlbiBzaG93Q29sdW1uU2VsZWN0b3IgaXMgdHJ1ZS5cbiAgICovXG4gIHNlbGVjdGlvbkNvbHVtbldpZHRoPzogc3RyaW5nIHwgbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBEYXRhIG9mZnNldCB2YWx1ZSAoc3RhcnQgb2Zmc2V0IGluZGV4KTsgQXBwbGljYWJsZSBvbmx5IHdoZW4gcGFnZWFibGUgaXMgdHJ1ZS5cbiAgICovXG4gIG9mZnNldD86IG51bWJlcjtcblxuICAvKipcbiAgICogRGF0YSBsaW1pdCB2YWx1ZSAocGFnZSBzaXplKS4gQXBwbGljYWJsZSBvbmx5IHdoZW4gcGFnZWFibGUgaXMgdHJ1ZS5cbiAgICovXG4gIGxpbWl0PzogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBEYXRhIG1heCBsaW1pdCB2YWx1ZSAobWF4IHBhZ2Ugc2l6ZSk7IEFwcGxpY2FibGUgb25seSB3aGVuIHBhZ2VhYmxlIGlzIHRydWUuXG4gICAqL1xuICBtYXhMaW1pdD86IG51bWJlcjtcblxuICAvKipcbiAgICogQmFzZSB0cmFuc2xhdGlvbiBkYXRhIG9iamVjdC4gVXNlZCB0byBsb2NhbGl6ZSB0YWJsZSBzdGF0aWMgbGFiZWwgdGV4dC5cbiAgICovXG4gIGJhc2VUcmFuc2xhdGlvbnM/OiBEYXRhVGFibGVUcmFuc2xhdGlvbnM7XG5cbiAgLyoqXG4gICAqIFN0YXRlIHBlcnNpc3RlbmNlIGtleSBwcmVmaXguXG4gICAqL1xuICBzdGF0ZUtleVByZWZpeD86IHN0cmluZztcblxuICAvKipcbiAgICogU2hvdyByb3cgZXhwYW5kIGxvYWRpbmcgc3Bpbm5lciBpZiB0cnVlLiBBcHBsaWNhYmxlIG9ubHkgd2hlbiByb3cgZXhwYW5kIGlzIGVuYWJsZWQuXG4gICAqL1xuICBzaG93Um93RXhwYW5kTG9hZGluZ1NwaW5uZXI/OiBib29sZWFuO1xuXG4gIC8vIFRhYmxlIGNvbHVtbiBjb25maWdcblxuICAvKipcbiAgICogQ29sdW1ucyBzb3J0YWJsZSBpZiB0cnVlOyBTaG93IHNvcnQgaW5kaWNhdG9yIG9uIGNvbHVtbiB0aXRsZS5cbiAgICovXG4gIHNvcnRhYmxlPzogYm9vbGVhbjtcblxuICAvKipcbiAgICogSW5pdGlhbCBjb2x1bW4gc29ydCBvcmRlci5cbiAgICovXG4gIHNvcnRPcmRlcj86IERhdGFUYWJsZVNvcnRPcmRlcjtcblxuICAvKipcbiAgICogQ29sdW1uIGZpbHRlcmFibGUgaWYgdHJ1ZTsgU2hvdyBmaWx0ZXIgb3B0aW9ucyBiYXIgd2hlbiBlbmFibGVkLlxuICAgKi9cbiAgZmlsdGVyYWJsZT86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIEZpbHRlciBwbGFjZWhvbGRlciBzdHJpbmc7IEFwcGxpY2FibGUgb25seSB3aGVuIHNob3dEcm9wZG93bkZpbHRlciBpcyBmYWxzZS5cbiAgICovXG4gIGZpbHRlclBsYWNlaG9sZGVyPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBDb2x1bW4gcmVzaXplYWJsZSBpZiB0cnVlOyBTaG93IGNvbHVtbiByZXNpemUgaW5kaWNhdG9yIG9uIGNvbHVtbiByaWdodCBjb3JuZXIuXG4gICAqL1xuICBjb2x1bW5SZXNpemFibGU/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBSZW5kZXIgY29sdW1uIGlmIHRydWUuXG4gICAqL1xuICBjb2x1bW5WaXNpYmxlPzogYm9vbGVhbjtcblxuICAvKipcbiAgICogU2hvdyBkcm9wZG93biBmaWx0ZXIgaWYgdHJ1ZS5cbiAgICovXG4gIHNob3dEcm9wZG93bkZpbHRlcj86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIFNob3cgZmlsdGVyIGNsZWFyIGJ1dHRvbiBpZiB0cnVlOyBBcHBsaWNhYmxlIG9ubHkgZm9yIG5vbmUgZHJvcGRvd24gZmlsdGVyIG1vZGUuXG4gICAqL1xuICBzaG93RmlsdGVyQ2xlYXJCdXR0b24/OiBib29sZWFuO1xuXG4gIC8vIENvbHVtbiBkcm9wZG93biBmaWx0ZXIgb3B0aW9uc1xuXG4gIC8qKlxuICAgKiBEcm9wZG93biBmaWx0ZXIgbWVudSBwb3NpdGlvbjsgQXBwbGljYWJsZSBvbmx5IHdoZW4gc2hvd0Ryb3Bkb3duRmlsdGVyIGlzIHRydWUuXG4gICAqL1xuICBkcm9wZG93bkZpbHRlck1lbnVQb3NpdGlvbj86IFZpZXdQb3NpdGlvbjtcblxuICAvKipcbiAgICogRHJvcGRvd24gc2VsZWN0IG1vZGU7IEFwcGxpY2FibGUgb25seSB3aGVuIHNob3dEcm9wZG93bkZpbHRlciBpcyB0cnVlLlxuICAgKi9cbiAgZHJvcGRvd25GaWx0ZXJTZWxlY3RNb2RlPzogRHJvcGRvd25TZWxlY3RNb2RlO1xuXG4gIC8qKlxuICAgKiBEcm9wZG93biBmaWx0ZXIgc2VhcmNoYWJsZSBpZiB0cnVlOyBTaG93IGRyb3Bkb3duIGZpbHRlciBzZWFyY2ggaW5wdXQuXG4gICAqL1xuICBkcm9wZG93bkZpbHRlclNlYXJjaGFibGU/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBFbmFibGUgZHJvcGRvd24gZmlsdGVyIGRhdGEgc2VhcmNoIGRlYm91bmNlIHdpdGggcHJvdmlkZWQgZHJvcGRvd25GaWx0ZXJTZWFyY2hEZWJvdW5jZVRpbWUgaWYgdHJ1ZS5cbiAgICovXG4gIGRyb3Bkb3duRmlsdGVyU2VhcmNoRGVib3VuY2U/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBEcm9wZG93biBmaWx0ZXIgc2VhcmNoIGRlYm91bmNlIHRpbWUgaW4gbWlsbGlzZWNvbmRzOyBBcHBsaWNhYmxlIG9ubHkgd2hlbiBkcm9wZG93bkZpbHRlclNlYXJjaERlYm91bmNlIGlzIHRydWUuXG4gICAqL1xuICBkcm9wZG93bkZpbHRlclNlYXJjaERlYm91bmNlVGltZT86IG51bWJlcjtcblxuICAvKipcbiAgICogRHJvcGRvd24gZmlsdGVyIGdyb3VwIGJ5IGZpZWxkIG5hbWUgaW4gaXRlbSBzY2hlbWEuXG4gICAqL1xuICBkcm9wZG93bkZpbHRlckdyb3VwQnlGaWVsZD86IHN0cmluZztcblxuICAvKipcbiAgICogRHJvcGRvd24gZmlsdGVyIHdyYXAgZGlzcGxheSBzZWxlY3RlZCBsaW1pdDsgV3JhcCBzZWxlY3RlZCBpdGVtcyB3aGVuIGxpbWl0IGV4Y2VlZGVkLlxuICAgKi9cbiAgZHJvcGRvd25GaWx0ZXJXcmFwRGlzcGxheVNlbGVjdExpbWl0PzogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBEcm9wZG93biBmaWx0ZXIgc2hvdyBzZWxlY3RlZCBvcHRpb24gcmVtb3ZlIGJ1dHRvbiBpZiB0cnVlLlxuICAgKi9cbiAgZHJvcGRvd25GaWx0ZXJTaG93U2VsZWN0ZWRPcHRpb25SZW1vdmVCdXR0b24/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBEcm9wZG93biBmaWx0ZXIgc2hvdyBhbGwgc2VsZWN0IG9wdGlvbnMgY2xlYXIgYnV0dG9uIGlmIHRydWUuXG4gICAqL1xuICBkcm9wZG93bkZpbHRlclNob3dDbGVhclNlbGVjdGlvbkJ1dHRvbj86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIERyb3Bkb3duIGZpbHRlciBtZW51IHdpZHRoIGluIHBpeGVscy5cbiAgICovXG4gIGRyb3Bkb3duRmlsdGVyTWVudVdpZHRoPzogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBEcm9wZG93biBmaWx0ZXIgbWVudSBoZWlnaHQgaW4gcGl4ZWxzLlxuICAgKi9cbiAgZHJvcGRvd25GaWx0ZXJNZW51SGVpZ2h0PzogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBEcm9wZG93biBmaWx0ZXIgbXVsdGkgc2VsZWN0IG9wdGlvbiBtYXggd2lkdGguXG4gICAqL1xuICBkcm9wZG93bkZpbHRlck11bHRpU2VsZWN0T3B0aW9uTWF4V2lkdGg/OiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIERyb3Bkb3duIGZpbHRlciBjbG9zZSBtZW51IG9uIHNlbGVjdCBpZiB0cnVlLlxuICAgKi9cbiAgZHJvcGRvd25GaWx0ZXJDbG9zZU1lbnVPblNlbGVjdD86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIER5bmFtaWNhbGx5IGNhbGN1bGF0ZSBEcm9wZG93biBmaWx0ZXIgbWVudSBkaW1lbnNpb25zIHJlbGF0aXZlIHRvIGNvbHVtbiB3aWR0aC5cbiAgICogRHJvcGRvd25GaWx0ZXJNZW51V2lkdGggYW5kIGRyb3Bkb3duRmlsdGVyTWVudUhlaWdodCBjb25maWd1cmF0aW9uIGFyZSBpZ25vcmVkIHdoZW4gdHJ1ZS5cbiAgICovXG4gIGRyb3Bkb3duRmlsdGVyRHluYW1pY0RpbWVuc2lvbkNhbGN1bGF0aW9uPzogYm9vbGVhbjtcblxuICAvKipcbiAgICogRHluYW1pYyBkcm9wZG93biB2aWV3IHdpZHRoIHJhdGlvOyBVc2VkIGZvciBkeW5hbWljIGRpbWVuc2lvbiBjYWxjdWxhdGlvbi5cbiAgICovXG4gIGRyb3Bkb3duRmlsdGVyRHluYW1pY1dpZHRoUmF0aW8/OiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIER5bmFtaWMgZHJvcGRvd24gdmlldyBoZWlnaHQgcmF0aW87IFVzZWQgZm9yIGR5bmFtaWMgZGltZW5zaW9uIGNhbGN1bGF0aW9uLlxuICAgKi9cbiAgZHJvcGRvd25GaWx0ZXJEeW5hbWljSGVpZ2h0UmF0aW8/OiBudW1iZXI7XG59XG4iXX0=