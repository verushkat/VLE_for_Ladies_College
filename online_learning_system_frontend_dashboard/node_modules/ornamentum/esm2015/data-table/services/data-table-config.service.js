/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Inject, Injectable, InjectionToken } from '@angular/core';
/** @type {?} */
export const DATA_TABLE_CONFIG = new InjectionToken('dataTableConfig');
/**
 * Data table config service
 * Manage all the global configurations of grid which can be overridden while importing the module.
 */
export class DataTableConfigService {
    /**
     * @param {?} dataTableConfig
     */
    constructor(dataTableConfig) {
        this.dataTableConfig = dataTableConfig;
        // Table base config
        this.persistTableState = false;
        this.storageMode = 'session';
        this.multiColumnSortable = false;
        this.showHeader = false;
        this.title = '';
        this.width = undefined;
        this.minContentHeight = 200;
        this.minContentWidth = undefined;
        this.contentHeight = undefined;
        this.pageable = false;
        this.loadOnScroll = false;
        this.loadViewDistanceRatio = 1;
        this.showIndexColumn = false;
        this.indexColumnTitle = '#';
        this.rowSelectable = false;
        this.selectMode = 'single';
        this.showRowSelectCheckbox = true;
        this.showRowSelectAllCheckbox = false;
        this.showSubstituteRows = false;
        this.expandableRows = false;
        this.selectOnRowClick = false;
        this.expandOnRowClick = false;
        this.autoFetch = true;
        this.showLoadingSpinner = true;
        this.selectTrackBy = 'id';
        this.filterDebounceTime = 500;
        this.filterDebounce = true;
        this.showRefreshButton = false;
        this.showColumnSelector = false;
        this.columnSelectorWidth = 240;
        this.expanderColumnWidth = 30;
        this.indexColumnWidth = 30;
        this.selectionColumnWidth = 30;
        this.showRowExpandLoadingSpinner = false;
        this.offset = 0;
        this.limit = 10;
        this.maxLimit = 100;
        this.stateKeyPrefix = 'grid_state_';
        this.baseTranslations = {
            noDataMessage: {
                header: 'Whoops!',
                body: 'No data to display. Added data will appear here.',
            },
            pagination: {
                limit: 'Limit:',
                rangeKey: 'Results:',
                rangeSeparator: 'of',
                nextTooltip: 'Next',
                previousTooltip: 'Previous',
                lastTooltip: 'Last',
                firstTooltip: 'First'
            },
            columnSelector: {
                header: 'Show/Hide Column'
            },
            dropdownFilter: {
                noDataMessage: 'No Results Available',
                filterPlaceholder: 'Search',
                selectedOptionWrapPlaceholder: 'Options',
                selectPlaceholder: 'Select'
            }
        };
        // Table column config
        this.sortable = false;
        this.sortOrder = '';
        this.filterable = false;
        this.filterPlaceholder = 'Search';
        this.columnResizable = false;
        this.columnVisible = true;
        this.showDropdownFilter = false;
        this.showFilterClearButton = true;
        // Column dropdown filter options
        this.dropdownFilterMenuPosition = 'bottom-left';
        this.dropdownFilterSelectMode = 'multi';
        this.dropdownFilterSearchable = true;
        this.dropdownFilterSearchDebounceTime = 500;
        this.dropdownFilterSearchDebounce = true;
        this.dropdownFilterWrapDisplaySelectLimit = 1;
        this.dropdownFilterGroupByField = undefined;
        this.dropdownFilterShowSelectedOptionRemoveButton = false;
        this.dropdownFilterShowClearSelectionButton = true;
        this.dropdownFilterMenuWidth = 320;
        this.dropdownFilterMenuHeight = 250;
        this.dropdownFilterMultiSelectOptionMaxWidth = 135;
        this.dropdownFilterCloseMenuOnSelect = true;
        this.dropdownFilterDynamicDimensionCalculation = true;
        this.dropdownFilterDynamicWidthRatio = 1.25;
        this.dropdownFilterDynamicHeightRatio = 1.25;
        if (dataTableConfig) {
            Object.assign(this, dataTableConfig);
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set translations(value) {
        if (!value) {
            return;
        }
        // all keys are object type.
        for (const [key, val] of Object.entries(value)) {
            this.baseTranslations[key] = Object.assign({}, this.baseTranslations[key], val);
        }
    }
    /**
     * Returns translations.
     * @return {?}
     */
    get translations() {
        return this.baseTranslations;
    }
    /**
     * Get row select checkbox column.
     * @return {?}
     */
    get showRowSelectCheckboxColumn() {
        return this.rowSelectable && this.showRowSelectCheckbox;
    }
}
DataTableConfigService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
DataTableConfigService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [DATA_TABLE_CONFIG,] }] }
];
if (false) {
    /** @type {?} */
    DataTableConfigService.prototype.persistTableState;
    /** @type {?} */
    DataTableConfigService.prototype.storageMode;
    /** @type {?} */
    DataTableConfigService.prototype.multiColumnSortable;
    /** @type {?} */
    DataTableConfigService.prototype.showHeader;
    /** @type {?} */
    DataTableConfigService.prototype.title;
    /** @type {?} */
    DataTableConfigService.prototype.width;
    /** @type {?} */
    DataTableConfigService.prototype.minContentHeight;
    /** @type {?} */
    DataTableConfigService.prototype.minContentWidth;
    /** @type {?} */
    DataTableConfigService.prototype.contentHeight;
    /** @type {?} */
    DataTableConfigService.prototype.pageable;
    /** @type {?} */
    DataTableConfigService.prototype.loadOnScroll;
    /** @type {?} */
    DataTableConfigService.prototype.loadViewDistanceRatio;
    /** @type {?} */
    DataTableConfigService.prototype.showIndexColumn;
    /** @type {?} */
    DataTableConfigService.prototype.indexColumnTitle;
    /** @type {?} */
    DataTableConfigService.prototype.rowSelectable;
    /** @type {?} */
    DataTableConfigService.prototype.selectMode;
    /** @type {?} */
    DataTableConfigService.prototype.showRowSelectCheckbox;
    /** @type {?} */
    DataTableConfigService.prototype.showRowSelectAllCheckbox;
    /** @type {?} */
    DataTableConfigService.prototype.showSubstituteRows;
    /** @type {?} */
    DataTableConfigService.prototype.expandableRows;
    /** @type {?} */
    DataTableConfigService.prototype.selectOnRowClick;
    /** @type {?} */
    DataTableConfigService.prototype.expandOnRowClick;
    /** @type {?} */
    DataTableConfigService.prototype.autoFetch;
    /** @type {?} */
    DataTableConfigService.prototype.showLoadingSpinner;
    /** @type {?} */
    DataTableConfigService.prototype.selectTrackBy;
    /** @type {?} */
    DataTableConfigService.prototype.filterDebounceTime;
    /** @type {?} */
    DataTableConfigService.prototype.filterDebounce;
    /** @type {?} */
    DataTableConfigService.prototype.showRefreshButton;
    /** @type {?} */
    DataTableConfigService.prototype.showColumnSelector;
    /** @type {?} */
    DataTableConfigService.prototype.columnSelectorWidth;
    /** @type {?} */
    DataTableConfigService.prototype.expanderColumnWidth;
    /** @type {?} */
    DataTableConfigService.prototype.indexColumnWidth;
    /** @type {?} */
    DataTableConfigService.prototype.selectionColumnWidth;
    /** @type {?} */
    DataTableConfigService.prototype.showRowExpandLoadingSpinner;
    /** @type {?} */
    DataTableConfigService.prototype.offset;
    /** @type {?} */
    DataTableConfigService.prototype.limit;
    /** @type {?} */
    DataTableConfigService.prototype.maxLimit;
    /** @type {?} */
    DataTableConfigService.prototype.stateKeyPrefix;
    /** @type {?} */
    DataTableConfigService.prototype.baseTranslations;
    /** @type {?} */
    DataTableConfigService.prototype.sortable;
    /** @type {?} */
    DataTableConfigService.prototype.sortOrder;
    /** @type {?} */
    DataTableConfigService.prototype.filterable;
    /** @type {?} */
    DataTableConfigService.prototype.filterPlaceholder;
    /** @type {?} */
    DataTableConfigService.prototype.columnResizable;
    /** @type {?} */
    DataTableConfigService.prototype.columnVisible;
    /** @type {?} */
    DataTableConfigService.prototype.showDropdownFilter;
    /** @type {?} */
    DataTableConfigService.prototype.showFilterClearButton;
    /** @type {?} */
    DataTableConfigService.prototype.dropdownFilterMenuPosition;
    /** @type {?} */
    DataTableConfigService.prototype.dropdownFilterSelectMode;
    /** @type {?} */
    DataTableConfigService.prototype.dropdownFilterSearchable;
    /** @type {?} */
    DataTableConfigService.prototype.dropdownFilterSearchDebounceTime;
    /** @type {?} */
    DataTableConfigService.prototype.dropdownFilterSearchDebounce;
    /** @type {?} */
    DataTableConfigService.prototype.dropdownFilterWrapDisplaySelectLimit;
    /** @type {?} */
    DataTableConfigService.prototype.dropdownFilterGroupByField;
    /** @type {?} */
    DataTableConfigService.prototype.dropdownFilterShowSelectedOptionRemoveButton;
    /** @type {?} */
    DataTableConfigService.prototype.dropdownFilterShowClearSelectionButton;
    /** @type {?} */
    DataTableConfigService.prototype.dropdownFilterMenuWidth;
    /** @type {?} */
    DataTableConfigService.prototype.dropdownFilterMenuHeight;
    /** @type {?} */
    DataTableConfigService.prototype.dropdownFilterMultiSelectOptionMaxWidth;
    /** @type {?} */
    DataTableConfigService.prototype.dropdownFilterCloseMenuOnSelect;
    /** @type {?} */
    DataTableConfigService.prototype.dropdownFilterDynamicDimensionCalculation;
    /** @type {?} */
    DataTableConfigService.prototype.dropdownFilterDynamicWidthRatio;
    /** @type {?} */
    DataTableConfigService.prototype.dropdownFilterDynamicHeightRatio;
    /**
     * @type {?}
     * @private
     */
    DataTableConfigService.prototype.dataTableConfig;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS10YWJsZS1jb25maWcuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL29ybmFtZW50dW0vIiwic291cmNlcyI6WyJkYXRhLXRhYmxlL3NlcnZpY2VzL2RhdGEtdGFibGUtY29uZmlnLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLGNBQWMsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFXbkUsTUFBTSxPQUFPLGlCQUFpQixHQUFHLElBQUksY0FBYyxDQUFrQixpQkFBaUIsQ0FBQzs7Ozs7QUFPdkYsTUFBTSxPQUFPLHNCQUFzQjs7OztJQTZGakMsWUFBK0MsZUFBZ0M7UUFBaEMsb0JBQWUsR0FBZixlQUFlLENBQWlCOztRQTNGeEUsc0JBQWlCLEdBQUcsS0FBSyxDQUFDO1FBQzFCLGdCQUFXLEdBQXlCLFNBQVMsQ0FBQztRQUM5Qyx3QkFBbUIsR0FBRyxLQUFLLENBQUM7UUFDNUIsZUFBVSxHQUFHLEtBQUssQ0FBQztRQUNuQixVQUFLLEdBQUcsRUFBRSxDQUFDO1FBQ1gsVUFBSyxHQUFHLFNBQVMsQ0FBQztRQUNsQixxQkFBZ0IsR0FBb0IsR0FBRyxDQUFDO1FBQ3hDLG9CQUFlLEdBQUcsU0FBUyxDQUFDO1FBQzVCLGtCQUFhLEdBQUcsU0FBUyxDQUFDO1FBQzFCLGFBQVEsR0FBRyxLQUFLLENBQUM7UUFDakIsaUJBQVksR0FBRyxLQUFLLENBQUM7UUFDckIsMEJBQXFCLEdBQUcsQ0FBQyxDQUFDO1FBQzFCLG9CQUFlLEdBQUcsS0FBSyxDQUFDO1FBQ3hCLHFCQUFnQixHQUFHLEdBQUcsQ0FBQztRQUN2QixrQkFBYSxHQUFHLEtBQUssQ0FBQztRQUN0QixlQUFVLEdBQXdCLFFBQVEsQ0FBQztRQUMzQywwQkFBcUIsR0FBRyxJQUFJLENBQUM7UUFDN0IsNkJBQXdCLEdBQUcsS0FBSyxDQUFDO1FBQ2pDLHVCQUFrQixHQUFHLEtBQUssQ0FBQztRQUMzQixtQkFBYyxH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QXVCRTs7SUFHRiwwQ0FBd0I7O0lBQ3hCLDJDQUEwQzs7SUFDMUMsNENBQTBCOztJQUMxQixtREFBb0M7O0lBQ3BDLGlEQUErQjs7SUFDL0IsK0NBQTRCOztJQUM1QixvREFBa0M7O0lBQ2xDLHVEQUFvQzs7SUFHcEMsNERBQWdFOztJQUNoRSwwREFBOEQ7O0lBQzlELDBEQUF1Qzs7SUFDdkMsa0VBQThDOztJQUM5Qyw4REFBMkM7O0lBQzNDLHNFQUFnRDs7SUFDaEQsNERBQThDOztJQUM5Qyw4RUFBNEQ7O0lBQzVELHdFQUFxRDs7SUFDckQseURBQXFDOztJQUNyQywwREFBc0M7O0lBQ3RDLHlFQUFxRDs7SUFDckQsaUVBQThDOztJQUM5QywyRUFBd0Q7O0lBQ3hELGlFQUE4Qzs7SUFDOUMsa0VBQStDOzs7OztJQUVuQyxpREFBbUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUsIEluamVjdGlvblRva2VuIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IERhdGFUYWJsZVRyYW5zbGF0aW9ucyB9IGZyb20gJy4uL21vZGVscy9kYXRhLXRhYmxlLXRyYW5zbGF0aW9ucy5tb2RlbCc7XG5pbXBvcnQgeyBEYXRhVGFibGVDb25maWcgfSBmcm9tICcuLi9tb2RlbHMvZGF0YS10YWJsZS1jb25maWcubW9kZWwnO1xuXG5pbXBvcnQgeyBEYXRhVGFibGVTdG9yYWdlTW9kZSB9IGZyb20gJy4uL21vZGVscy9kYXRhLXRhYmxlLXN0b3JhZ2UtbW9kZS5tb2RlbCc7XG5pbXBvcnQgeyBEYXRhVGFibGVTb3J0T3JkZXIgfSBmcm9tICcuLi9tb2RlbHMvZGF0YS10YWJsZS1zb3J0LW9yZGVyLm1vZGVsJztcbmltcG9ydCB7IERhdGFUYWJsZVNlbGVjdE1vZGUgfSBmcm9tICcuLi9tb2RlbHMvZGF0YS10YWJsZS1zZWxlY3QtbW9kZS5tb2RlbCc7XG5pbXBvcnQgeyBEcm9wZG93blNlbGVjdE1vZGUgfSBmcm9tICcuLi8uLi9kcm9wZG93bi9kcm9wZG93bi5tb2R1bGUnO1xuaW1wb3J0IHsgVmlld1Bvc2l0aW9uIH0gZnJvbSAnLi4vLi4vdXRpbGl0eS9tb2RlbHMvdmlldy1wb3NpdGlvbi5tb2RlbCc7XG5cbmV4cG9ydCBjb25zdCBEQVRBX1RBQkxFX0NPTkZJRyA9IG5ldyBJbmplY3Rpb25Ub2tlbjxEYXRhVGFibGVDb25maWc+KCdkYXRhVGFibGVDb25maWcnKTtcblxuLyoqXG4gKiBEYXRhIHRhYmxlIGNvbmZpZyBzZXJ2aWNlXG4gKiBNYW5hZ2UgYWxsIHRoZSBnbG9iYWwgY29uZmlndXJhdGlvbnMgb2YgZ3JpZCB3aGljaCBjYW4gYmUgb3ZlcnJpZGRlbiB3aGlsZSBpbXBvcnRpbmcgdGhlIG1vZHVsZS5cbiAqL1xuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIERhdGFUYWJsZUNvbmZpZ1NlcnZpY2UgaW1wbGVtZW50cyBEYXRhVGFibGVDb25maWcge1xuICAvLyBUYWJsZSBiYXNlIGNvbmZpZ1xuICBwdWJsaWMgcGVyc2lzdFRhYmxlU3RhdGUgPSBmYWxzZTtcbiAgcHVibGljIHN0b3JhZ2VNb2RlOiBEYXRhVGFibGVTdG9yYWdlTW9kZSA9ICdzZXNzaW9uJztcbiAgcHVibGljIG11bHRpQ29sdW1uU29ydGFibGUgPSBmYWxzZTtcbiAgcHVibGljIHNob3dIZWFkZXIgPSBmYWxzZTtcbiAgcHVibGljIHRpdGxlID0gJyc7XG4gIHB1YmxpYyB3aWR0aCA9IHVuZGVmaW5lZDtcbiAgcHVibGljIG1pbkNvbnRlbnRIZWlnaHQ6IHN0cmluZyB8IG51bWJlciA9IDIwMDtcbiAgcHVibGljIG1pbkNvbnRlbnRXaWR0aCA9IHVuZGVmaW5lZDtcbiAgcHVibGljIGNvbnRlbnRIZWlnaHQgPSB1bmRlZmluZWQ7XG4gIHB1YmxpYyBwYWdlYWJsZSA9IGZhbHNlO1xuICBwdWJsaWMgbG9hZE9uU2Nyb2xsID0gZmFsc2U7XG4gIHB1YmxpYyBsb2FkVmlld0Rpc3RhbmNlUmF0aW8gPSAxO1xuICBwdWJsaWMgc2hvd0luZGV4Q29sdW1uID0gZmFsc2U7XG4gIHB1YmxpYyBpbmRleENvbHVtblRpdGxlID0gJyMnO1xuICBwdWJsaWMgcm93U2VsZWN0YWJsZSA9IGZhbHNlO1xuICBwdWJsaWMgc2VsZWN0TW9kZTogRGF0YVRhYmxlU2VsZWN0TW9kZSA9ICdzaW5nbGUnO1xuICBwdWJsaWMgc2hvd1Jvd1NlbGVjdENoZWNrYm94ID0gdHJ1ZTtcbiAgcHVibGljIHNob3dSb3dTZWxlY3RBbGxDaGVja2JveCA9IGZhbHNlO1xuICBwdWJsaWMgc2hvd1N1YnN0aXR1dGVSb3dzID0gZmFsc2U7XG4gIHB1YmxpYyBleHBhbmRhYmxlUm93cyA9IGZhbHNlO1xuICBwdWJsaWMgc2VsZWN0T25Sb3dDbGljayA9IGZhbHNlO1xuICBwdWJsaWMgZXhwYW5kT25Sb3dDbGljayA9IGZhbHNlO1xuICBwdWJsaWMgYXV0b0ZldGNoID0gdHJ1ZTtcbiAgcHVibGljIHNob3dMb2FkaW5nU3Bpbm5lciA9IHRydWU7XG4gIHB1YmxpYyBzZWxlY3RUcmFja0J5ID0gJ2lkJztcbiAgcHVibGljIGZpbHRlckRlYm91bmNlVGltZSA9IDUwMDtcbiAgcHVibGljIGZpbHRlckRlYm91bmNlID0gdHJ1ZTtcbiAgcHVibGljIHNob3dSZWZyZXNoQnV0dG9uID0gZmFsc2U7XG4gIHB1YmxpYyBzaG93Q29sdW1uU2VsZWN0b3IgPSBmYWxzZTtcbiAgcHVibGljIGNvbHVtblNlbGVjdG9yV2lkdGggPSAyNDA7XG4gIHB1YmxpYyBleHBhbmRlckNvbHVtbldpZHRoOiBzdHJpbmcgfCBudW1iZXIgPSAzMDtcbiAgcHVibGljIGluZGV4Q29sdW1uV2lkdGg6IHN0cmluZyB8IG51bWJlciA9IDMwO1xuICBwdWJsaWMgc2VsZWN0aW9uQ29sdW1uV2lkdGg6IHN0cmluZyB8IG51bWJlciA9IDMwO1xuICBwdWJsaWMgc2hvd1Jvd0V4cGFuZExvYWRpbmdTcGlubmVyID0gZmFsc2U7XG4gIHB1YmxpYyBvZmZzZXQgPSAwO1xuICBwdWJsaWMgbGltaXQgPSAxMDtcbiAgcHVibGljIG1heExpbWl0ID0gMTAwO1xuICBwdWJsaWMgc3RhdGVLZXlQcmVmaXggPSAnZ3JpZF9zdGF0ZV8nO1xuICBwdWJsaWMgYmFzZVRyYW5zbGF0aW9uczogRGF0YVRhYmxlVHJhbnNsYXRpb25zID0ge1xuICAgIG5vRGF0YU1lc3NhZ2U6IHtcbiAgICAgIGhlYWRlcjogJ1dob29wcyEnLFxuICAgICAgYm9keTogJ05vIGRhdGEgdG8gZGlzcGxheS4gQWRkZWQgZGF0YSB3aWxsIGFwcGVhciBoZXJlLicsXG4gICAgfSxcbiAgICBwYWdpbmF0aW9uOiB7XG4gICAgICBsaW1pdDogJ0xpbWl0OicsXG4gICAgICByYW5nZUtleTogJ1Jlc3VsdHM6JyxcbiAgICAgIHJhbmdlU2VwYXJhdG9yOiAnb2YnLFxuICAgICAgbmV4dFRvb2x0aXA6ICdOZXh0JyxcbiAgICAgIHByZXZpb3VzVG9vbHRpcDogJ1ByZXZpb3VzJyxcbiAgICAgIGxhc3RUb29sdGlwOiAnTGFzdCcsXG4gICAgICBmaXJzdFRvb2x0aXA6ICdGaXJzdCdcbiAgICB9LFxuICAgIGNvbHVtblNlbGVjdG9yOiB7XG4gICAgICBoZWFkZXI6ICdTaG93L0hpZGUgQ29sdW1uJ1xuICAgIH0sXG4gICAgZHJvcGRvd25GaWx0ZXI6IHtcbiAgICAgIG5vRGF0YU1lc3NhZ2U6ICdObyBSZXN1bHRzIEF2YWlsYWJsZScsXG4gICAgICBmaWx0ZXJQbGFjZWhvbGRlcjogJ1NlYXJjaCcsXG4gICAgICBzZWxlY3RlZE9wdGlvbldyYXBQbGFjZWhvbGRlcjogJ09wdGlvbnMnLFxuICAgICAgc2VsZWN0UGxhY2Vob2xkZXI6ICdTZWxlY3QnXG4gICAgfVxuICB9O1xuXG4gIC8vIFRhYmxlIGNvbHVtbiBjb25maWdcbiAgcHVibGljIHNvcnRhYmxlID0gZmFsc2U7XG4gIHB1YmxpYyBzb3J0T3JkZXI6IERhdGFUYWJsZVNvcnRPcmRlciA9ICcnO1xuICBwdWJsaWMgZmlsdGVyYWJsZSA9IGZhbHNlO1xuICBwdWJsaWMgZmlsdGVyUGxhY2Vob2xkZXIgPSAnU2VhcmNoJztcbiAgcHVibGljIGNvbHVtblJlc2l6YWJsZSA9IGZhbHNlO1xuICBwdWJsaWMgY29sdW1uVmlzaWJsZSA9IHRydWU7XG4gIHB1YmxpYyBzaG93RHJvcGRvd25GaWx0ZXIgPSBmYWxzZTtcbiAgcHVibGljIHNob3dGaWx0ZXJDbGVhckJ1dHRvbiA9IHRydWU7XG5cbiAgLy8gQ29sdW1uIGRyb3Bkb3duIGZpbHRlciBvcHRpb25zXG4gIHB1YmxpYyBkcm9wZG93bkZpbHRlck1lbnVQb3NpdGlvbjogVmlld1Bvc2l0aW9uID0gJ2JvdHRvbS1sZWZ0JztcbiAgcHVibGljIGRyb3Bkb3duRmlsdGVyU2VsZWN0TW9kZTogRHJvcGRvd25TZWxlY3RNb2RlID0gJ211bHRpJztcbiAgcHVibGljIGRyb3Bkb3duRmlsdGVyU2VhcmNoYWJsZSA9IHRydWU7XG4gIHB1YmxpYyBkcm9wZG93bkZpbHRlclNlYXJjaERlYm91bmNlVGltZSA9IDUwMDtcbiAgcHVibGljIGRyb3Bkb3duRmlsdGVyU2VhcmNoRGVib3VuY2UgPSB0cnVlO1xuICBwdWJsaWMgZHJvcGRvd25GaWx0ZXJXcmFwRGlzcGxheVNlbGVjdExpbWl0ID0gMTtcbiAgcHVibGljIGRyb3Bkb3duRmlsdGVyR3JvdXBCeUZpZWxkID0gdW5kZWZpbmVkO1xuICBwdWJsaWMgZHJvcGRvd25GaWx0ZXJTaG93U2VsZWN0ZWRPcHRpb25SZW1vdmVCdXR0b24gPSBmYWxzZTtcbiAgcHVibGljIGRyb3Bkb3duRmlsdGVyU2hvd0NsZWFyU2VsZWN0aW9uQnV0dG9uID0gdHJ1ZTtcbiAgcHVibGljIGRyb3Bkb3duRmlsdGVyTWVudVdpZHRoID0gMzIwO1xuICBwdWJsaWMgZHJvcGRvd25GaWx0ZXJNZW51SGVpZ2h0ID0gMjUwO1xuICBwdWJsaWMgZHJvcGRvd25GaWx0ZXJNdWx0aVNlbGVjdE9wdGlvbk1heFdpZHRoID0gMTM1O1xuICBwdWJsaWMgZHJvcGRvd25GaWx0ZXJDbG9zZU1lbnVPblNlbGVjdCA9IHRydWU7XG4gIHB1YmxpYyBkcm9wZG93bkZpbHRlckR5bmFtaWNEaW1lbnNpb25DYWxjdWxhdGlvbiA9IHRydWU7XG4gIHB1YmxpYyBkcm9wZG93bkZpbHRlckR5bmFtaWNXaWR0aFJhdGlvID0gMS4yNTtcbiAgcHVibGljIGRyb3Bkb3duRmlsdGVyRHluYW1pY0hlaWdodFJhdGlvID0gMS4yNTtcblxuICBjb25zdHJ1Y3RvcihASW5qZWN0KERBVEFfVEFCTEVfQ09ORklHKSBwcml2YXRlIGRhdGFUYWJsZUNvbmZpZzogRGF0YVRhYmxlQ29uZmlnKSB7XG4gICAgaWYgKGRhdGFUYWJsZUNvbmZpZykge1xuICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLCBkYXRhVGFibGVDb25maWcpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBzZXQgdHJhbnNsYXRpb25zKHZhbHVlOiBEYXRhVGFibGVUcmFuc2xhdGlvbnMpIHtcbiAgICBpZiAoIXZhbHVlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gYWxsIGtleXMgYXJlIG9iamVjdCB0eXBlLlxuICAgIGZvciAoY29uc3QgW2tleSwgdmFsXSBvZiBPYmplY3QuZW50cmllcyh2YWx1ZSkpIHtcbiAgICAgIHRoaXMuYmFzZVRyYW5zbGF0aW9uc1trZXldID0geyAuLi50aGlzLmJhc2VUcmFuc2xhdGlvbnNba2V5XSwgLi4udmFsIH07XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdHJhbnNsYXRpb25zLlxuICAgKi9cbiAgcHVibGljIGdldCB0cmFuc2xhdGlvbnMoKTogRGF0YVRhYmxlVHJhbnNsYXRpb25zIHtcbiAgICByZXR1cm4gdGhpcy5iYXNlVHJhbnNsYXRpb25zO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCByb3cgc2VsZWN0IGNoZWNrYm94IGNvbHVtbi5cbiAgICovXG4gIHB1YmxpYyBnZXQgc2hvd1Jvd1NlbGVjdENoZWNrYm94Q29sdW1uKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnJvd1NlbGVjdGFibGUgJiYgdGhpcy5zaG93Um93U2VsZWN0Q2hlY2tib3g7XG4gIH1cbn1cblxuIl19