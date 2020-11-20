import { InjectionToken, Injectable, Inject, EventEmitter, Component, ContentChild, Input, Output, Directive, ElementRef, Pipe, ComponentFactoryResolver, ApplicationRef, ɵɵdefineInjectable, NgModule, Injector, Renderer2, ViewChild, forwardRef, NgZone, ContentChildren } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NG_VALUE_ACCESSOR, FormsModule } from '@angular/forms';
import { ReplaySubject, Subject, fromEvent, of } from 'rxjs';
import { debounceTime, switchMap, take, catchError, map, pairwise } from 'rxjs/operators';
import { HttpParams, HttpClient } from '@angular/common/http';
import { webSocket } from 'rxjs/webSocket';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const DATA_TABLE_CONFIG = new InjectionToken('dataTableConfig');
/**
 * Data table config service
 * Manage all the global configurations of grid which can be overridden while importing the module.
 */
class DataTableConfigService {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Data table event state service; Manage all internal data tale event streams.
 */
class DataTableEventStateService {
    constructor() {
        this.allRowSelectChangeStream = new EventEmitter();
        this.dataFetchStream = new EventEmitter();
        this.headerClickStream = new EventEmitter();
        this.rowBindStream = new EventEmitter();
        this.rowClickStream = new EventEmitter();
        this.rowDoubleClickStream = new EventEmitter();
        this.rowSelectChangeStream = new EventEmitter();
        this.cellBindStream = new EventEmitter();
        this.cellClickStream = new EventEmitter();
        this.initStream = new EventEmitter();
        this.dataBoundStream = new EventEmitter();
        this.columnBind = new EventEmitter();
        this.fetchFilterOptionsStream = new ReplaySubject(1);
        this.staticDataSourceStream = new ReplaySubject(1);
    }
}
DataTableEventStateService.decorators = [
    { type: Injectable }
];
if (false) {
    /** @type {?} */
    DataTableEventStateService.prototype.allRowSelectChangeStream;
    /** @type {?} */
    DataTableEventStateService.prototype.dataFetchStream;
    /** @type {?} */
    DataTableEventStateService.prototype.headerClickStream;
    /** @type {?} */
    DataTableEventStateService.prototype.rowBindStream;
    /** @type {?} */
    DataTableEventStateService.prototype.rowClickStream;
    /** @type {?} */
    DataTableEventStateService.prototype.rowDoubleClickStream;
    /** @type {?} */
    DataTableEventStateService.prototype.rowSelectChangeStream;
    /** @type {?} */
    DataTableEventStateService.prototype.cellBindStream;
    /** @type {?} */
    DataTableEventStateService.prototype.cellClickStream;
    /** @type {?} */
    DataTableEventStateService.prototype.initStream;
    /** @type {?} */
    DataTableEventStateService.prototype.dataBoundStream;
    /** @type {?} */
    DataTableEventStateService.prototype.columnBind;
    /** @type {?} */
    DataTableEventStateService.prototype.fetchFilterOptionsStream;
    /** @type {?} */
    DataTableEventStateService.prototype.staticDataSourceStream;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Data table state manager service; Manage current data table state snapshot.
 */
class DataTableDataStateService {
    constructor() {
        this.allRowSelected = false;
        this.selectedRows = [];
        this.dataRows = [];
        this.dataLoading = true;
        this.substituteRows = [];
        this.heardReload = false;
        this.currentSortPriority = 0;
        this.onDynamicRowSpanExtract = (/**
         * @return {?}
         */
        () => 1);
    }
    /**
     * Get show no data overlay status.
     * @return {?} True if no data overlay should be shown.
     */
    get showNoDataOverlay() {
        return !this.dataRows.length && !this.dataLoading;
    }
    /**
     * Get data table row unique id.
     * @param {?} append Target identifier.
     * @param {?} index Target index.
     * @return {?}
     */
    getUniqueId(append, index) {
        return `${this.id}-dt-${append}-${index}`;
    }
}
DataTableDataStateService.decorators = [
    { type: Injectable }
];
if (false) {
    /** @type {?} */
    DataTableDataStateService.prototype.id;
    /** @type {?} */
    DataTableDataStateService.prototype.allRowSelected;
    /** @type {?} */
    DataTableDataStateService.prototype.selectedRow;
    /** @type {?} */
    DataTableDataStateService.prototype.selectedRows;
    /** @type {?} */
    DataTableDataStateService.prototype.dataRows;
    /** @type {?} */
    DataTableDataStateService.prototype.itemCount;
    /** @type {?} */
    DataTableDataStateService.prototype.tableWidth;
    /** @type {?} */
    DataTableDataStateService.prototype.dataLoading;
    /** @type {?} */
    DataTableDataStateService.prototype.substituteRows;
    /** @type {?} */
    DataTableDataStateService.prototype.heardReload;
    /** @type {?} */
    DataTableDataStateService.prototype.currentSortPriority;
    /** @type {?} */
    DataTableDataStateService.prototype.relativeParentElement;
    /** @type {?} */
    DataTableDataStateService.prototype.onFilterValueExtract;
    /** @type {?} */
    DataTableDataStateService.prototype.onDataBind;
    /** @type {?} */
    DataTableDataStateService.prototype.onDynamicRowSpanExtract;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Data table column component. Data table columns associated data is captured via this component.
 */
class DataTableColumnComponent {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {number} */
const DataFetchMode = {
    /**
     * Re-fetch data from source and load data after resetting table state.
     */
    HARD_RELOAD: 0,
    /**
     * Re-fetch data from source and load data without resetting table state.
     */
    SOFT_RELOAD: 1,
    /**
     * Load data without changing table state state.
     */
    SOFT_LOAD: 2,
};
DataFetchMode[DataFetchMode.HARD_RELOAD] = 'HARD_RELOAD';
DataFetchMode[DataFetchMode.SOFT_RELOAD] = 'SOFT_RELOAD';
DataFetchMode[DataFetchMode.SOFT_LOAD] = 'SOFT_LOAD';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Data table column filter header component. Apply columns associated data filtering.
 */
class DataTableColumnFilterHeaderComponent {
    /**
     * @param {?} config
     * @param {?} eventStateService
     */
    constructor(config, eventStateService) {
        this.config = config;
        this.eventStateService = eventStateService;
        this.columnFilterStream = new Subject();
        this.customFilterStream = new EventEmitter();
    }
    /**
     * Component initialize lifecycle event handler.
     * @return {?}
     */
    ngOnInit() {
        this.initCustomFilterEvent();
        this.initDebounceDefaultFilterEvent();
    }
    /**
     * Component destroy lifecycle event handler.
     * @return {?}
     */
    ngOnDestroy() {
        if (this.customFilterSubscription) {
            this.customFilterSubscription.unsubscribe();
        }
        if (this.columnFilterSubscription) {
            this.columnFilterSubscription.unsubscribe();
        }
    }
    /**
     * Initialize custom filter event.
     * @private
     * @return {?}
     */
    initCustomFilterEvent() {
        this.customFilterSubscription = this.customFilterStream.subscribe((/**
         * @param {?} filterEventArgs
         * @return {?}
         */
        (filterEventArgs) => {
            filterEventArgs.column.filter = filterEventArgs.filter;
            this.onFilter();
        }));
    }
    /**
     * Initialize debounce default filtering logic.
     * @private
     * @return {?}
     */
    initDebounceDefaultFilterEvent() {
        this.columnFilterSubscription = this.columnFilterStream.pipe(debounceTime(this.config.filterDebounceTime)).subscribe((/**
         * @return {?}
         */
        () => {
            this.eventStateService.dataFetchStream.next(DataFetchMode.SOFT_LOAD);
        }));
    }
    /**
     * Filter event handler.
     * @return {?}
     */
    onFilter() {
        if (this.config.filterDebounce) {
            this.columnFilterStream.next();
        }
        else {
            this.eventStateService.dataFetchStream.next(DataFetchMode.SOFT_LOAD);
        }
    }
}
DataTableColumnFilterHeaderComponent.decorators = [
    { type: Component, args: [{
                exportAs: 'ngDataTableColumnFilterHeader',
                // tslint:disable-next-line
                selector: '[ngDataTableColumnFilterHeader]',
                template: "<th *ngIf=\"config.expandableRows\" class=\"ng-data-table-expand-column-header\"></th>\n<th *ngIf=\"config.showIndexColumn\" class=\"ng-data-table-index-column-header\"></th>\n<th *ngIf=\"config.showRowSelectCheckboxColumn\" class=\"ng-data-table-select-column-header\"></th>\n<ng-container *ngFor=\"let column of columns; index as i;\">\n  <th *ngIf=\"column.visible\">\n    <ng-data-table-column-filter-template [column]=\"column\"\n                                          [customFilterStream]=\"customFilterStream\"\n                                          [index]=\"i\"\n                                          (filter)=\"onFilter()\">\n    </ng-data-table-column-filter-template>\n  </th>\n</ng-container>\n"
            }] }
];
/** @nocollapse */
DataTableColumnFilterHeaderComponent.ctorParameters = () => [
    { type: DataTableConfigService },
    { type: DataTableEventStateService }
];
DataTableColumnFilterHeaderComponent.propDecorators = {
    columns: [{ type: Input }]
};
if (false) {
    /**
     * @type {?}
     * @private
     */
    DataTableColumnFilterHeaderComponent.prototype.columnFilterStream;
    /**
     * @type {?}
     * @private
     */
    DataTableColumnFilterHeaderComponent.prototype.customFilterSubscription;
    /**
     * @type {?}
     * @private
     */
    DataTableColumnFilterHeaderComponent.prototype.columnFilterSubscription;
    /** @type {?} */
    DataTableColumnFilterHeaderComponent.prototype.customFilterStream;
    /** @type {?} */
    DataTableColumnFilterHeaderComponent.prototype.columns;
    /** @type {?} */
    DataTableColumnFilterHeaderComponent.prototype.config;
    /**
     * @type {?}
     * @private
     */
    DataTableColumnFilterHeaderComponent.prototype.eventStateService;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Scroll position stream service; Manage common scroll position observable.
 */
class DataTableScrollPositionService {
    constructor() {
        this.scrollPositionStream = new Subject();
    }
}
DataTableScrollPositionService.decorators = [
    { type: Injectable }
];
if (false) {
    /** @type {?} */
    DataTableScrollPositionService.prototype.scrollPositionStream;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Column filter template component. Render column filter template via this component.
 */
class DataTableColumnFilterTemplateComponent {
    /**
     * @param {?} config
     * @param {?} dataStateService
     * @param {?} eventStateService
     * @param {?} scrollPositionService
     */
    constructor(config, dataStateService, eventStateService, scrollPositionService) {
        this.config = config;
        this.dataStateService = dataStateService;
        this.eventStateService = eventStateService;
        this.scrollPositionService = scrollPositionService;
        this.filter = new EventEmitter();
        this.filterDataStream = new Subject();
    }
    /**
     * Component initialize lifecycle event.
     * @return {?}
     */
    ngOnInit() {
        if (this.column.showDropdownFilter) {
            this.scrollPositionStreamSubscription = this.scrollPositionService.scrollPositionStream
                .subscribe((/**
             * @param {?} pos
             * @return {?}
             */
            (pos) => {
                if (pos.isHorizontal) {
                    this.filterDropdown.close();
                }
            }));
            if (this.dataStateService.onFilterValueExtract) {
                this.fetchFilterOptionsStreamSubscription = this.eventStateService.fetchFilterOptionsStream
                    .pipe(switchMap((/**
                 * @return {?}
                 */
                () => {
                    return this.dataStateService.onFilterValueExtract(this.column);
                })))
                    .subscribe((/**
                 * @param {?} options
                 * @return {?}
                 */
                (options) => {
                    setTimeout((/**
                     * @return {?}
                     */
                    () => this.filterDataStream.next(options)), 0); // TODO: remove the timeout
                }));
            }
        }
    }
    /**
     * Component destroy lifecycle event.
     * @return {?}
     */
    ngOnDestroy() {
        if (this.fetchFilterOptionsStreamSubscription) {
            this.fetchFilterOptionsStreamSubscription.unsubscribe();
        }
        if (this.scrollPositionStreamSubscription) {
            this.scrollPositionStreamSubscription.unsubscribe();
        }
        this.filterDataStream.complete();
    }
    /**
     * @param {?} filterDropdown
     * @return {?}
     */
    onFilterDropdownInit(filterDropdown) {
        this.filterDropdown = filterDropdown;
    }
    /**
     * Clear current column filter value.
     * @return {?}
     */
    clearFilter() {
        this.column.filter = '';
        this.filter.emit();
    }
}
DataTableColumnFilterTemplateComponent.decorators = [
    { type: Component, args: [{
                selector: 'ng-data-table-column-filter-template',
                template: "<ng-container *ngIf=\"column.filterable\">\n  <ng-container\n    *ngIf=\"column.filterTemplate\"\n    [ngTemplateOutlet]=\"column.filterTemplate\"\n    [ngTemplateOutletContext]=\"{ column: column, filter: customFilterStream }\"\n  >\n  </ng-container>\n  <ng-container *ngIf=\"!column.filterTemplate\">\n    <div class=\"ng-data-table-header-input-box\" *ngIf=\"!column.showDropdownFilter\">\n      <input\n        type=\"text\"\n        class=\"ng-data-table-header-input\"\n        [(ngModel)]=\"column.filter\"\n        [class.ng-data-table-clear-filter]=\"column.showFilterClearButton\"\n        (keyup)=\"filter.emit()\"\n        [placeholder]=\"column.filterPlaceholder\"\n      />\n      <span class=\"ng-data-table-input-group-btn\">\n        <button\n          *ngIf=\"column.showFilterClearButton\"\n          [hidden]=\"!column.filter\"\n          class=\"ng-data-table-delete-button\"\n          type=\"button\"\n          (click)=\"clearFilter()\"\n        ></button>\n      </span>\n    </div>\n    <ng-dropdown\n      *ngIf=\"column.showDropdownFilter\"\n      [id]=\"dataStateService.getUniqueId('col', index)\"\n      [relativeParentElement]=\"dataStateService.relativeParentElement\"\n      [dataSource]=\"filterDataStream\"\n      [menuPosition]=\"column.dropdownFilterMenuPosition\"\n      [filterable]=\"column.dropdownFilterSearchable\"\n      [filterDebounceTime]=\"column.dropdownFilterSearchDebounceTime\"\n      [filterDebounce]=\"column.dropdownFilterSearchDebounce\"\n      [selectMode]=\"column.dropdownFilterSelectMode\"\n      [showSelectedOptionRemoveButton]=\"column.dropdownFilterShowSelectedOptionRemoveButton\"\n      [showClearSelectionButton]=\"column.dropdownFilterShowClearSelectionButton\"\n      [wrapDisplaySelectLimit]=\"column.dropdownFilterWrapDisplaySelectLimit\"\n      [groupByField]=\"column.dropdownFilterGroupByField\"\n      [showOptionSelectCheckbox]=\"column.dropDownFilterShowOptionSelectCheckbox\"\n      [menuHeight]=\"column.dropdownFilterMenuHeight\"\n      [menuWidth]=\"column.dropdownFilterMenuWidth\"\n      [multiSelectOptionMaxWidth]=\"column.dropdownFilterMultiSelectOptionMaxWidth\"\n      [closeMenuOnSelect]=\"column.dropdownFilterCloseMenuOnSelect\"\n      [dynamicDimensionCalculation]=\"column.dropdownFilterDynamicDimensionCalculation\"\n      [dynamicWidthRatio]=\"column.dropdownFilterDynamicWidthRatio\"\n      [dynamicHeightRatio]=\"column.dropdownFilterDynamicHeightRatio\"\n      [loadingSpinnerTemplateRef]=\"column.dropdownFilterLoadingSpinnerTemplate\"\n      [optionTemplateRef]=\"column.dropdownFilterOptionTemplate\"\n      [optionGroupHeaderTemplateRef]=\"column.dropdownFilterOptionGroupHeaderTemplate\"\n      [translations]=\"config.translations.dropdownFilter\"\n      [(ngModel)]=\"column.filter\"\n      (selectChange)=\"filter.emit()\"\n      (init)=\"onFilterDropdownInit($event)\"\n    >\n    </ng-dropdown>\n  </ng-container>\n</ng-container>\n"
            }] }
];
/** @nocollapse */
DataTableColumnFilterTemplateComponent.ctorParameters = () => [
    { type: DataTableConfigService },
    { type: DataTableDataStateService },
    { type: DataTableEventStateService },
    { type: DataTableScrollPositionService }
];
DataTableColumnFilterTemplateComponent.propDecorators = {
    column: [{ type: Input }],
    customFilterStream: [{ type: Input }],
    index: [{ type: Input }],
    filter: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    DataTableColumnFilterTemplateComponent.prototype.column;
    /** @type {?} */
    DataTableColumnFilterTemplateComponent.prototype.customFilterStream;
    /** @type {?} */
    DataTableColumnFilterTemplateComponent.prototype.index;
    /** @type {?} */
    DataTableColumnFilterTemplateComponent.prototype.filter;
    /** @type {?} */
    DataTableColumnFilterTemplateComponent.prototype.filterDataStream;
    /**
     * @type {?}
     * @private
     */
    DataTableColumnFilterTemplateComponent.prototype.fetchFilterOptionsStreamSubscription;
    /**
     * @type {?}
     * @private
     */
    DataTableColumnFilterTemplateComponent.prototype.scrollPositionStreamSubscription;
    /**
     * @type {?}
     * @private
     */
    DataTableColumnFilterTemplateComponent.prototype.filterDropdown;
    /** @type {?} */
    DataTableColumnFilterTemplateComponent.prototype.config;
    /** @type {?} */
    DataTableColumnFilterTemplateComponent.prototype.dataStateService;
    /**
     * @type {?}
     * @private
     */
    DataTableColumnFilterTemplateComponent.prototype.eventStateService;
    /**
     * @type {?}
     * @private
     */
    DataTableColumnFilterTemplateComponent.prototype.scrollPositionService;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const splitPathExpression = /[,[\].]+?/;
/**
 * @param {?} obj
 * @param {?} path
 * @return {?}
 */
function get(obj, path) {
    if (obj === null || obj === undefined) {
        return obj;
    }
    return String.prototype.split.call(path, splitPathExpression)
        .filter(Boolean)
        .reduce((/**
     * @param {?} res
     * @param {?} key
     * @return {?}
     */
    (res, key) => {
        if (res !== null && typeof res === 'object') {
            return res[key];
        }
        return undefined;
    }), obj);
}
/**
 * @param {?} collection
 * @param {?} fields
 * @param {?} orders
 * @return {?}
 */
function orderBy(collection, fields, orders) {
    console.log(fields);
    return collection.concat().sort((/**
     * @param {?} a
     * @param {?} b
     * @return {?}
     */
    (a, b) => {
        for (let i = 0; i < fields.length; i++) {
            /** @type {?} */
            const field = fields[i];
            /** @type {?} */
            const order = orders[i];
            if (a[field] > b[field]) {
                return order === 'asc' ? 1 : -1;
            }
            if (a[field] < b[field]) {
                return order === 'asc' ? -1 : 1;
            }
        }
        return 0;
    }));
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Element initialize directive; Notify on target element initialize.
 */
class InitDirective {
    constructor() {
        this.ngInit = new EventEmitter();
    }
    /**
     * On directive initialize.
     * @return {?}
     */
    ngOnInit() {
        this.ngInit.emit();
    }
}
InitDirective.decorators = [
    { type: Directive, args: [{
                selector: '[ngInit]'
            },] }
];
InitDirective.propDecorators = {
    ngInit: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    InitDirective.prototype.ngInit;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Element focus directive; Set focus to target element on initialize.
 */
class FocusDirective {
    /**
     * @param {?} el
     */
    constructor(el) {
        this.el = el;
    }
    /**
     * On directive initialize.
     * @return {?}
     */
    ngOnInit() {
        this.el.nativeElement.focus();
    }
}
FocusDirective.decorators = [
    { type: Directive, args: [{
                selector: '[ngFocus]'
            },] }
];
/** @nocollapse */
FocusDirective.ctorParameters = () => [
    { type: ElementRef }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    FocusDirective.prototype.el;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Pixel converter pipe.
 * Append 'px' if value is number type, else return the same.
 */
class PixelConverterPipe {
    /**
     * Pipe transform implementation.
     * @param {?} value Source value.
     * @return {?} Converted pixel value.
     */
    transform(value) {
        if (value === undefined) {
            return;
        }
        if (typeof value === 'string') {
            return value;
        }
        if (typeof value === 'number') {
            return `${value}px`;
        }
    }
}
PixelConverterPipe.decorators = [
    { type: Pipe, args: [{
                name: 'ngPx'
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Utility config service holds all the global configurations of utility which can be overridden while
 * importing the module.
 */
class UtilityConfigService {
}
UtilityConfigService.decorators = [
    { type: Injectable }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Element drag and drop service.
 */
class DragAndDropService {
    /**
     * Register drag and drop event.
     * @param {?} event Mouse event reference.
     * @param {?} __1
     * @return {?}
     */
    drag(event, { move, up }) {
        /** @type {?} */
        const startX = event.pageX;
        /** @type {?} */
        const startY = event.pageY;
        /** @type {?} */
        let x = startX;
        /** @type {?} */
        let y = startY;
        /** @type {?} */
        let moved = false;
        /** @type {?} */
        const mouseMoveHandler = (/**
         * @param {?} mouseMoveEvent
         * @return {?}
         */
        (mouseMoveEvent) => {
            /** @type {?} */
            const dx = mouseMoveEvent.pageX - x;
            /** @type {?} */
            const dy = mouseMoveEvent.pageY - y;
            x = mouseMoveEvent.pageX;
            y = mouseMoveEvent.pageY;
            if (dx || dy) {
                moved = true;
            }
            move(mouseMoveEvent, dx, dy, x, y);
            mouseMoveEvent.preventDefault(); // to avoid text selection
        });
        /** @type {?} */
        const mouseUpHandler = (/**
         * @param {?} mouseUpEvent
         * @return {?}
         */
        (mouseUpEvent) => {
            x = mouseUpEvent.pageX;
            y = mouseUpEvent.pageY;
            document.removeEventListener('mousemove', mouseMoveHandler);
            document.removeEventListener('mouseup', mouseUpHandler);
            if (up) {
                up(mouseUpEvent, x, y, moved);
            }
        });
        document.addEventListener('mousemove', mouseMoveHandler);
        document.addEventListener('mouseup', mouseUpHandler);
    }
}
DragAndDropService.decorators = [
    { type: Injectable }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Global reference service; List all global javascript references here.
 */
class GlobalRefService {
    constructor() {
        this.setScrollbarWidth();
    }
    /**
     * Set scrollbar width of current browser environment; Ony set on browser environment to support SSR.
     * @return {?}
     */
    setScrollbarWidth() {
        if (this.scrollbarWidthValue !== undefined) {
            return;
        }
        if (this.isBrowser) {
            /** @type {?} */
            const outer = document.createElement('div');
            outer.style.visibility = 'hidden';
            outer.style.width = '100px';
            outer.style.msOverflowStyle = 'scrollbar'; // needed for WinJS apps
            document.body.appendChild(outer);
            /** @type {?} */
            const widthNoScroll = outer.offsetWidth;
            // force scrollbars
            outer.style.overflow = 'scroll';
            // add inner div
            /** @type {?} */
            const inner = document.createElement('div');
            inner.style.width = '100%';
            outer.appendChild(inner);
            /** @type {?} */
            const widthWithScroll = inner.offsetWidth;
            // remove divs
            outer.parentNode.removeChild(outer);
            this.scrollbarWidthValue = widthNoScroll - widthWithScroll;
        }
    }
    /**
     * Get scrollbar width.
     * @return {?} Scroll bar width.
     */
    get scrollbarWidth() {
        return this.scrollbarWidthValue;
    }
    /**
     * Get window reference.
     * @return {?} Window reference.
     */
    get window() {
        return window;
    }
    /**
     * Is browser environment.
     * @return {?} True if current environment is browser.
     */
    get isBrowser() {
        return typeof window !== 'undefined';
    }
}
GlobalRefService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
GlobalRefService.ctorParameters = () => [];
if (false) {
    /**
     * @type {?}
     * @private
     */
    GlobalRefService.prototype.scrollbarWidthValue;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Resize handler service; Window resize global event handler.
 */
class ResizeService {
    /**
     * @param {?} globalRefService
     */
    constructor(globalRefService) {
        this.globalRefService = globalRefService;
        if (this.globalRefService.isBrowser) {
            this.resize = fromEvent(this.globalRefService.window, 'resize');
        }
        else {
            this.resize = new Subject();
        }
    }
}
ResizeService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
ResizeService.ctorParameters = () => [
    { type: GlobalRefService }
];
if (false) {
    /** @type {?} */
    ResizeService.prototype.resize;
    /**
     * @type {?}
     * @private
     */
    ResizeService.prototype.globalRefService;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Popover dynamic component loader; Responsible of dynamically rendering angular components to show popover layout.
 * @template T
 */
class PopoverComponentLoader {
    /**
     * @param {?} componentFactoryResolver
     * @param {?} appRef
     * @param {?} globalRefService
     * @param {?} renderer
     * @param {?} resizeService
     */
    constructor(componentFactoryResolver, appRef, globalRefService, renderer, resizeService) {
        this.componentFactoryResolver = componentFactoryResolver;
        this.appRef = appRef;
        this.globalRefService = globalRefService;
        this.renderer = renderer;
        this.resizeService = resizeService;
        this.isVisible = false;
    }
    /**
     * Register close on click outside event; Hide event is triggered only if click target is not included in
     * exclusion elements collection.
     * @private
     * @param {...?} exclude - Exclude DOM element reference collection.
     * @return {?}
     */
    registerClickOutside(...exclude) {
        /** @type {?} */
        const trackOutsideClick = (/**
         * @param {?} event
         * @return {?}
         */
        (event) => {
            if (!exclude.some((/**
             * @param {?} el
             * @return {?}
             */
            el => {
                return el.contains((/** @type {?} */ (event.target)));
            }))) {
                this.hide();
            }
        });
        this.clickListener = this.renderer.listen('document', 'click', trackOutsideClick);
        this.touchStartListener = this.renderer.listen('document', 'touchstart', trackOutsideClick);
    }
    /**
     * Set dynamic popover position relative to parent.
     * @private
     * @param {?} parentElement Parent element reference.
     * @param {?} options Component loader options.
     * @return {?}
     */
    setPosition(parentElement, options) {
        /** @type {?} */
        const holderElement = options.relativeParentElement || parentElement;
        /** @type {?} */
        const bodyClientRect = holderElement.getBoundingClientRect();
        /** @type {?} */
        const elementClientRect = parentElement.getBoundingClientRect();
        /** @type {?} */
        let left = 0;
        /** @type {?} */
        let top = 0;
        if (options.position.includes('right')) {
            left = parentElement.offsetWidth;
        }
        if (options.position.includes('bottom')) {
            top = parentElement.offsetHeight;
        }
        /** @type {?} */
        const componentElement = (/** @type {?} */ (this.componentReference.location.nativeElement));
        componentElement.style.top = `${elementClientRect.top - bodyClientRect.top + top + options.floatTop}px`;
        componentElement.style.left = `${elementClientRect.left - bodyClientRect.left + left + options.floatLeft}px`;
        componentElement.style.position = 'absolute';
        componentElement.style.display = 'block';
        /** @type {?} */
        const childElement = (/** @type {?} */ (componentElement.firstElementChild));
        if (childElement) {
            if (options.position.includes('right')) {
                childElement.style.right = '0px';
            }
            if (options.position.includes('top')) {
                childElement.style.bottom = '0px';
            }
            childElement.style.position = 'absolute';
        }
        this.resizeEventSubscription = this.resizeService.resize.pipe(take(1)).subscribe((/**
         * @return {?}
         */
        () => {
            this.hide();
        }));
    }
    /**
     * Render component if not available, else display hidden component.
     * @param {?} component Component class type.
     * @param {?} parentElement Parent element to append the target component.
     * @param {?} injector Component injector reference.
     * @param {?} options Component loader options object.
     * @return {?} Rendered component reference.
     */
    show(component, parentElement, injector, options) {
        options = Object.assign({
            closeOnOutsideClick: true,
            floatLeft: 0,
            floatTop: 0,
            position: 'bottom-left'
        }, options);
        if (this.componentReference) {
            this.setPosition(parentElement, options);
            this.isVisible = true;
            return;
        }
        // 1. Create a component reference from the component
        this.componentReference = this.componentFactoryResolver.resolveComponentFactory(component).create(injector);
        if (options.context) {
            Object.assign(this.componentReference.instance, options.context);
        }
        // 2. Attach component to the appRef so that it's inside the ng component tree
        this.appRef.attachView(this.componentReference.hostView);
        // 3. Get DOM element from component
        /** @type {?} */
        const domElem = (/** @type {?} */ (((/** @type {?} */ (this.componentReference.hostView))).rootNodes[0]));
        this.setPosition(parentElement, options);
        // 4. Append DOM element to the body
        (options.relativeParentElement || parentElement).appendChild(domElem);
        // Trigger change detection
        this.componentReference.changeDetectorRef.markForCheck();
        this.componentReference.changeDetectorRef.detectChanges();
        this.isVisible = true;
        if (options.closeOnOutsideClick) {
            this.registerClickOutside(parentElement, this.componentReference.location.nativeElement);
        }
        return this.componentReference.instance;
    }
    /**
     * Hide component if visible.
     * @return {?} Rendered component reference.
     */
    hide() {
        if (this.componentReference) {
            this.componentReference.location.nativeElement.style.display = 'none';
            this.isVisible = false;
            return this.componentReference.instance;
        }
    }
    /**
     * Toggle component display state or render if not available.
     * @param {?} component Component class type.
     * @param {?} parentElement Parent element to append the target component.
     * @param {?} injector Component injector reference.
     * @param {?=} options Component loader options object.
     * @return {?} Rendered component reference.
     */
    toggle(component, parentElement, injector, options) {
        return this.isVisible ? this.hide() : this.show(component, parentElement, injector, options);
    }
    /**
     * Dispose rendered component reference and bindings.
     * @return {?}
     */
    dispose() {
        if (this.resizeEventSubscription) {
            this.resizeEventSubscription.unsubscribe();
        }
        if (this.componentReference) {
            this.appRef.detachView(this.componentReference.hostView);
            this.componentReference.destroy();
        }
        if (this.clickListener) {
            this.clickListener();
            this.clickListener = null;
        }
        if (this.touchStartListener) {
            this.touchStartListener();
            this.touchStartListener = null;
        }
        this.componentReference = null;
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    PopoverComponentLoader.prototype.componentReference;
    /**
     * @type {?}
     * @private
     */
    PopoverComponentLoader.prototype.isVisible;
    /**
     * @type {?}
     * @private
     */
    PopoverComponentLoader.prototype.clickListener;
    /**
     * @type {?}
     * @private
     */
    PopoverComponentLoader.prototype.touchStartListener;
    /**
     * @type {?}
     * @private
     */
    PopoverComponentLoader.prototype.resizeEventSubscription;
    /**
     * @type {?}
     * @private
     */
    PopoverComponentLoader.prototype.componentFactoryResolver;
    /**
     * @type {?}
     * @private
     */
    PopoverComponentLoader.prototype.appRef;
    /**
     * @type {?}
     * @private
     */
    PopoverComponentLoader.prototype.globalRefService;
    /**
     * @type {?}
     * @private
     */
    PopoverComponentLoader.prototype.renderer;
    /**
     * @type {?}
     * @private
     */
    PopoverComponentLoader.prototype.resizeService;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Popover component loader factory service.
 */
class PopoverComponentLoaderFactoryService {
    /**
     * @param {?} componentFactoryResolver
     * @param {?} appRef
     * @param {?} globalRefService
     * @param {?} resizeService
     */
    constructor(componentFactoryResolver, appRef, globalRefService, resizeService) {
        this.componentFactoryResolver = componentFactoryResolver;
        this.appRef = appRef;
        this.globalRefService = globalRefService;
        this.resizeService = resizeService;
    }
    /**
     * Create new component loader.
     * @template T
     * @param {?} renderer Angular renderer reference.
     * @return {?} Popover component loader reference.
     */
    createLoader(renderer) {
        return new PopoverComponentLoader(this.componentFactoryResolver, this.appRef, this.globalRefService, renderer, this.resizeService);
    }
}
PopoverComponentLoaderFactoryService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
PopoverComponentLoaderFactoryService.ctorParameters = () => [
    { type: ComponentFactoryResolver },
    { type: ApplicationRef },
    { type: GlobalRefService },
    { type: ResizeService }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    PopoverComponentLoaderFactoryService.prototype.componentFactoryResolver;
    /**
     * @type {?}
     * @private
     */
    PopoverComponentLoaderFactoryService.prototype.appRef;
    /**
     * @type {?}
     * @private
     */
    PopoverComponentLoaderFactoryService.prototype.globalRefService;
    /**
     * @type {?}
     * @private
     */
    PopoverComponentLoaderFactoryService.prototype.resizeService;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Common validation regular expressions.
 */
class ValidatorService {
}
/**
 * Unique id value validation patten expression.
 */
ValidatorService.idPatternValidatorExpression = new RegExp('^[A-Za-z]+[\\w\\-]*$');
ValidatorService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */ ValidatorService.ngInjectableDef = ɵɵdefineInjectable({ factory: function ValidatorService_Factory() { return new ValidatorService(); }, token: ValidatorService, providedIn: "root" });
if (false) {
    /**
     * Unique id value validation patten expression.
     * @type {?}
     */
    ValidatorService.idPatternValidatorExpression;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const DIRECTIVES = [InitDirective, FocusDirective];
/** @type {?} */
const PIPES = [PixelConverterPipe];
/** @type {?} */
const PROVIDERS = [DragAndDropService, GlobalRefService, PopoverComponentLoaderFactoryService, ResizeService, ValidatorService];
/**
 * Module representing utility providers, directives and pipes.
 */
class UtilityModule {
    /**
     * Set module root configuration overrides.
     * @return {?} Module with custom providers.
     */
    static forRoot() {
        return {
            ngModule: UtilityModule,
            providers: [UtilityConfigService]
        };
    }
}
UtilityModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: [...DIRECTIVES, ...PIPES],
                providers: [...PROVIDERS],
                exports: [...DIRECTIVES, ...PIPES]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Column title header component. Render data table column headers.
 */
class DataTableColumnTitleHeaderComponent {
    /**
     * @param {?} dragAndDropService
     * @param {?} eventStateService
     * @param {?} dataStateService
     * @param {?} config
     */
    constructor(dragAndDropService, eventStateService, dataStateService, config) {
        this.dragAndDropService = dragAndDropService;
        this.eventStateService = eventStateService;
        this.dataStateService = dataStateService;
        this.config = config;
        this.resizeInProgress = false;
    }
    /**
     * Header click event handler.
     * @param {?} column Data table column component reference.
     * @param {?} event Mouse event arguments object.
     * @return {?}
     */
    onHeaderClick(column, event) {
        if (!this.resizeInProgress) {
            this.sortData(column);
            this.eventStateService.headerClickStream.emit({ column, event });
        }
        else {
            this.resizeInProgress = false; // this is because I can't prevent click from mousup of the drag end
        }
    }
    /**
     * Sort data event handler.
     * @private
     * @param {?} column Data table column component reference.
     * @return {?}
     */
    sortData(column) {
        if (column.sortable) {
            /** @type {?} */
            const prevSortOrder = column.sortOrder;
            if (column.sortOrder) {
                column.sortOrder = column.getNewSortOrder();
            }
            else {
                if (!this.config.multiColumnSortable) {
                    /** @type {?} */
                    const sortColumns = this.columns.filter((/**
                     * @param {?} item
                     * @return {?}
                     */
                    item => item.sortable));
                    sortColumns.forEach((/**
                     * @param {?} sortColumn
                     * @return {?}
                     */
                    (sortColumn) => {
                        if (sortColumn !== column) {
                            sortColumn.sortOrder = '';
                        }
                    }));
                }
                column.sortOrder = 'asc';
            }
            if (this.config.multiColumnSortable) {
                if (column.sortOrder === '') {
                    /** @type {?} */
                    const sortColumns = this.columns.filter((/**
                     * @param {?} item
                     * @return {?}
                     */
                    item => item.sortable));
                    sortColumns.forEach((/**
                     * @param {?} sortColumn
                     * @return {?}
                     */
                    (sortColumn) => {
                        if (sortColumn !== column && sortColumn.sortPriority > column.sortPriority) {
                            --sortColumn.sortPriority;
                        }
                    }));
                    column.sortPriority = undefined;
                    --this.dataStateService.currentSortPriority;
                }
                else {
                    if (!prevSortOrder) {
                        column.sortPriority = ++this.dataStateService.currentSortPriority;
                    }
                }
            }
            this.eventStateService.dataFetchStream.next(DataFetchMode.SOFT_LOAD);
        }
    }
    /**
     * Set column width.
     * @param {?} width Width value in pixels.
     * @param {?} column Data table column component reference.
     * @return {?}
     */
    setColumnWidth(width, column) {
        column.actualWidth = width;
    }
    /**
     * Column resize event handler.
     * @param {?} event Resize mouse event.
     * @param {?} column Data table column component.
     * @param {?} columnElement Table header cell element DOM reference.
     * @return {?}
     */
    onColumnResize(event, column, columnElement) {
        this.resizeInProgress = true;
        this.dragAndDropService.drag(event, {
            move: (/**
             * @param {?} moveEvent
             * @param {?} dx
             * @return {?}
             */
            (moveEvent, dx) => {
                /** @type {?} */
                const newWidth = columnElement.offsetWidth + dx;
                if (column.resizeMinLimit !== undefined && newWidth < column.resizeMinLimit) {
                    return;
                }
                column.actualWidth = newWidth;
                /** @type {?} */
                let totalWidth = 0;
                this.columns.forEach((/**
                 * @param {?} col
                 * @return {?}
                 */
                col => {
                    col.width = col.actualWidth;
                    totalWidth += col.width;
                }));
                this.dataStateService.tableWidth = totalWidth;
            })
        });
    }
    /**
     * Set all row selected state.
     * @param {?} value All row selected status.
     * @return {?}
     */
    set allRowSelected(value) {
        this.dataStateService.allRowSelected = value;
        this.allRowSelectedChanged(this.dataStateService.allRowSelected);
        this.eventStateService.allRowSelectChangeStream.emit(this.dataStateService.allRowSelected);
    }
    /**
     * Get all row selected state.
     * @return {?}
     */
    get allRowSelected() {
        return this.dataStateService.allRowSelected;
    }
    /**
     * All row select change event handler.
     * @private
     * @param {?} selectedState Row selected status.
     * @return {?}
     */
    allRowSelectedChanged(selectedState) {
        this.dataStateService.dataRows.forEach((/**
         * @param {?} row
         * @return {?}
         */
        row => {
            /** @type {?} */
            const id = get(row.item, this.config.selectTrackBy);
            /** @type {?} */
            const index = this.dataStateService.selectedRows.indexOf(id);
            if (selectedState && index < 0) {
                this.dataStateService.selectedRows.push(id);
            }
            else if (!selectedState && index > -1) {
                this.dataStateService.selectedRows.splice(index, 1);
            }
            row.selected = selectedState;
        }));
        this.eventStateService.rowSelectChangeStream.emit(this.dataStateService.selectedRows);
    }
    /**
     * Get all row select checkbox display status.
     * @return {?} True if all row select checkbox should be displayed.
     */
    get showAllRowSelectCheckbox() {
        return this.config.selectMode === 'multi' && this.config.showRowSelectAllCheckbox;
    }
    /**
     * @param {?} column
     * @return {?}
     */
    showSortPriorityLabel(column) {
        return !!(this.config.multiColumnSortable && this.dataStateService.currentSortPriority > 1 && column.sortPriority);
    }
}
DataTableColumnTitleHeaderComponent.decorators = [
    { type: Component, args: [{
                exportAs: 'ngDataTableColumnTitleHeader',
                // tslint:disable-next-line
                selector: '[ngDataTableColumnTitleHeader]',
                template: "<th class=\"ng-data-table-expand-column-header\" *ngIf=\"config.expandableRows\"></th>\n<th class=\"ng-data-table-index-column-header\" *ngIf=\"config.showIndexColumn\">\n  <span [textContent]=\"config.indexColumnTitle\"></span>\n</th>\n<th class=\"ng-data-table-select-column-header\" *ngIf=\"config.showRowSelectCheckboxColumn\">\n  <div class=\"ng-data-table-checkbox-container\" *ngIf=\"showAllRowSelectCheckbox\">\n    <input class=\"ng-data-table-checkbox-input\" type=\"checkbox\"\n           [id]=\"dataStateService.getUniqueId('rsa', 0)\" [(ngModel)]=\"allRowSelected\"/>\n    <label [for]=\"dataStateService.getUniqueId('rsa', 0)\"></label>\n  </div>\n</th>\n<ng-container *ngFor=\"let column of columns\">\n  <th class=\"ng-data-table-column-header\"\n    #columnHeader\n    *ngIf=\"column.visible\"\n    (click)=\"onHeaderClick(column, $event)\"\n    (ngElementWidth)=\"setColumnWidth($event, column)\"\n    [class.sortable]=\"column.sortable\"\n    [class.resizable]=\"column.resizable\"\n    [ngClass]=\"column.cssClass\">\n    <span class=\"ng-data-table-column-sort-priority\" *ngIf=\"showSortPriorityLabel(column)\"><small>{{column.sortPriority}}</small></span>\n    <span *ngIf=\"!column.headerTemplate\" [textContent]=\"column.title\" class=\"ng-data-table-column-header-label\"></span>\n    <ng-container *ngIf=\"column.headerTemplate\" [ngTemplateOutlet]=\"column.headerTemplate\" [ngTemplateOutletContext]=\"{ column: column }\">\n    </ng-container>\n    <span class=\"ng-data-table-column-sort-icon\" [hidden]=\"!column.sortable\" [ngClass]=\"column.getSortIconClass()\"></span>\n    <span class=\"ng-data-table-column-resize-handle\" *ngIf=\"column.resizable\" (mousedown)=\"onColumnResize($event, column, columnHeader)\"> </span>\n  </th>\n</ng-container>\n"
            }] }
];
/** @nocollapse */
DataTableColumnTitleHeaderComponent.ctorParameters = () => [
    { type: DragAndDropService },
    { type: DataTableEventStateService },
    { type: DataTableDataStateService },
    { type: DataTableConfigService }
];
DataTableColumnTitleHeaderComponent.propDecorators = {
    columns: [{ type: Input }]
};
if (false) {
    /**
     * @type {?}
     * @private
     */
    DataTableColumnTitleHeaderComponent.prototype.resizeInProgress;
    /** @type {?} */
    DataTableColumnTitleHeaderComponent.prototype.columns;
    /**
     * @type {?}
     * @private
     */
    DataTableColumnTitleHeaderComponent.prototype.dragAndDropService;
    /**
     * @type {?}
     * @private
     */
    DataTableColumnTitleHeaderComponent.prototype.eventStateService;
    /** @type {?} */
    DataTableColumnTitleHeaderComponent.prototype.dataStateService;
    /** @type {?} */
    DataTableColumnTitleHeaderComponent.prototype.config;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Data table column selector component. Toggle display state of columns via this popup component.
 */
class DataTableColumnSelectorComponent {
    /**
     * @param {?} dataStateService
     * @param {?} config
     */
    constructor(dataStateService, config) {
        this.dataStateService = dataStateService;
        this.config = config;
    }
}
DataTableColumnSelectorComponent.decorators = [
    { type: Component, args: [{
                selector: 'ng-data-table-column-selector',
                template: "<div class=\"ng-data-table-column-selector-wrapper\" [style.width]=\"width | ngPx\">\n  <div class=\"ng-data-table-column-selector-box-heading\">{{ config.translations.columnSelector.header }}</div>\n  <div class=\"ng-data-table-column-selector-box\">\n    <ng-container *ngFor=\"let column of columns; index as i;\">\n      <div class=\"ng-data-table-column-selector-column ng-data-table-column-selector-checkbox\" *ngIf=\"column.showInColumnSelector\">\n        <div class=\"ng-data-table-checkbox-container\">\n          <input class=\"ng-data-table-checkbox-input\" type=\"checkbox\"\n                 [id]=\"dataStateService.getUniqueId('cs', i)\" [(ngModel)]=\"column.visible\"/>\n          <label [for]=\"dataStateService.getUniqueId('cs', i)\"><span [textContent]=\"column.title\"></span></label>\n        </div>\n      </div>\n    </ng-container>\n  </div>\n</div>\n"
            }] }
];
/** @nocollapse */
DataTableColumnSelectorComponent.ctorParameters = () => [
    { type: DataTableDataStateService },
    { type: DataTableConfigService }
];
DataTableColumnSelectorComponent.propDecorators = {
    columns: [{ type: Input }],
    width: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    DataTableColumnSelectorComponent.prototype.columns;
    /** @type {?} */
    DataTableColumnSelectorComponent.prototype.width;
    /** @type {?} */
    DataTableColumnSelectorComponent.prototype.dataStateService;
    /** @type {?} */
    DataTableColumnSelectorComponent.prototype.config;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Data table header component. Render table title header with column selector widget.
 */
class DataTableHeaderComponent {
    /**
     * @param {?} componentLoaderFactory
     * @param {?} injector
     * @param {?} eventStateService
     * @param {?} renderer
     * @param {?} dataStateService
     * @param {?} config
     */
    constructor(componentLoaderFactory, injector, eventStateService, renderer, dataStateService, config) {
        this.componentLoaderFactory = componentLoaderFactory;
        this.injector = injector;
        this.eventStateService = eventStateService;
        this.renderer = renderer;
        this.dataStateService = dataStateService;
        this.config = config;
        this.componentLoader = this.componentLoaderFactory.createLoader(this.renderer);
    }
    /**
     * Toggle column selector.
     * @param {?} element DOM element reference.
     * @return {?}
     */
    toggleColumnSelector(element) {
        this.componentLoader.toggle(DataTableColumnSelectorComponent, element, this.injector, {
            // relativeParent: element, // this.dataStateService.relativeParentElement,
            context: {
                columns: this.columns,
                width: this.config.columnSelectorWidth,
            },
            position: 'bottom-right'
        });
    }
    /**
     * On data reload click event handler.
     * @return {?}
     */
    onReload() {
        this.eventStateService.dataFetchStream.next(DataFetchMode.HARD_RELOAD);
    }
    /**
     * Component destroy lifecycle event handler.
     * @return {?}
     */
    ngOnDestroy() {
        this.componentLoader.dispose();
    }
}
DataTableHeaderComponent.decorators = [
    { type: Component, args: [{
                selector: 'ng-data-table-header',
                template: "<div class=\"ng-data-table-top-header-container\" #header>\n  <h4 class=\"ng-data-table-top-header-title\" [textContent]=\"config.title\"></h4>\n  <div class=\"ng-data-table-top-header-button-container\">\n    <button\n      title=\"Refresh\"\n      type=\"button\"\n      class=\"ng-data-table-action-button ng-data-table-refresh-button\"\n      (click)=\"onReload()\"\n      *ngIf=\"config.showRefreshButton\"\n      [disabled]=\"dataStateService.dataLoading\"></button>\n    <button\n      title=\"Select Column\"\n      type=\"button\"\n      class=\"ng-data-table-action-button ng-data-table-column-selector-button\"\n      (click)=\"toggleColumnSelector(header)\"\n      *ngIf=\"config.showColumnSelector\"></button>\n  </div>\n</div>\n"
            }] }
];
/** @nocollapse */
DataTableHeaderComponent.ctorParameters = () => [
    { type: PopoverComponentLoaderFactoryService },
    { type: Injector },
    { type: DataTableEventStateService },
    { type: Renderer2 },
    { type: DataTableDataStateService },
    { type: DataTableConfigService }
];
DataTableHeaderComponent.propDecorators = {
    columns: [{ type: Input }]
};
if (false) {
    /**
     * @type {?}
     * @private
     */
    DataTableHeaderComponent.prototype.componentLoader;
    /** @type {?} */
    DataTableHeaderComponent.prototype.columns;
    /**
     * @type {?}
     * @private
     */
    DataTableHeaderComponent.prototype.componentLoaderFactory;
    /**
     * @type {?}
     * @private
     */
    DataTableHeaderComponent.prototype.injector;
    /**
     * @type {?}
     * @private
     */
    DataTableHeaderComponent.prototype.eventStateService;
    /**
     * @type {?}
     * @private
     */
    DataTableHeaderComponent.prototype.renderer;
    /** @type {?} */
    DataTableHeaderComponent.prototype.dataStateService;
    /** @type {?} */
    DataTableHeaderComponent.prototype.config;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Data table column group component. This component wraps data table column groups.
 */
class DataTableColGroupComponent {
    /**
     * @param {?} config
     */
    constructor(config) {
        this.config = config;
    }
}
DataTableColGroupComponent.decorators = [
    { type: Component, args: [{
                exportAs: 'ngDataTableColGroup',
                // tslint:disable-next-line
                selector: '[ngDataTableColGroup]',
                template: "<col *ngIf=\"config.expandableRows\" [style.width]=\"config.expanderColumnWidth | ngPx\" />\n<col *ngIf=\"config.showIndexColumn\" [style.width]=\"config.indexColumnWidth | ngPx\" />\n<col *ngIf=\"config.showRowSelectCheckboxColumn\" [style.width]=\"config.selectionColumnWidth | ngPx\" />\n<ng-container *ngFor=\"let column of columns\">\n  <col [style.width]=\"column.width | ngPx\" *ngIf=\"column.visible\" />\n</ng-container>\n"
            }] }
];
/** @nocollapse */
DataTableColGroupComponent.ctorParameters = () => [
    { type: DataTableConfigService }
];
DataTableColGroupComponent.propDecorators = {
    columns: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    DataTableColGroupComponent.prototype.columns;
    /** @type {?} */
    DataTableColGroupComponent.prototype.config;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Data table pagination component. Render data table paginator widget.
 */
class DataTablePaginationComponent {
    /**
     * @param {?} config
     * @param {?} dataStateService
     * @param {?} eventStateService
     * @param {?} resizeService
     */
    constructor(config, dataStateService, eventStateService, resizeService) {
        this.config = config;
        this.dataStateService = dataStateService;
        this.eventStateService = eventStateService;
        this.resizeService = resizeService;
        this.isMobile = false;
    }
    /**
     * Set mobile mode state.
     * @private
     * @return {?}
     */
    setMobileModeState() {
        this.isMobile = this.paginationContainer.nativeElement.clientWidth < 767;
    }
    /**
     * First page click event handler.
     * @return {?}
     */
    firstPageClick() {
        this.config.offset = 0;
        this.eventStateService.dataFetchStream.emit(DataFetchMode.SOFT_LOAD);
    }
    /**
     * Previous page click event handler.
     * @return {?}
     */
    previousPageClick() {
        this.config.offset = this.config.offset - Math.min(this.config.limit, this.config.offset);
        this.eventStateService.dataFetchStream.emit(DataFetchMode.SOFT_LOAD);
    }
    /**
     * Next page click event handler.
     * @return {?}
     */
    nextPageClick() {
        this.config.offset = this.config.offset + this.config.limit;
        this.eventStateService.dataFetchStream.emit(DataFetchMode.SOFT_LOAD);
    }
    /**
     * Last page click event handler.
     * @return {?}
     */
    lastPageClick() {
        this.config.offset = (this.maxPage - 1) * this.config.limit;
        this.eventStateService.dataFetchStream.emit(DataFetchMode.SOFT_LOAD);
    }
    /**
     * Get maximum page count.
     * @return {?}
     */
    get maxPage() {
        return Math.ceil(this.dataStateService.itemCount / this.config.limit);
    }
    /**
     * Get page number.
     * @return {?}
     */
    get page() {
        return Math.floor(this.config.offset / this.config.limit) + 1;
    }
    /**
     * Check limit invalid status. True if limit is invalid.
     * @param {?} element Limit input DOM element.
     * @return {?} Invalid status.
     */
    isInvalidLimit(element) {
        /** @type {?} */
        const limit = Number(element.value);
        return element.value === '' || limit > this.config.maxLimit || limit < 1;
    }
    /**
     * On page size change event handler.
     * @param {?} element HTML input element.
     * @return {?}
     */
    onPageSizeChange(element) {
        if (this.isInvalidLimit(element)) {
            element.value = String(this.config.limit);
            return;
        }
        /** @type {?} */
        const limit = Number(element.value);
        if (this.config.limit !== limit) {
            this.config.offset = 0;
            this.config.limit = limit;
            this.eventStateService.dataFetchStream.emit(DataFetchMode.SOFT_LOAD);
        }
    }
    /**
     * On page size revert event handler.
     * @param {?} element HTML input element.
     * @return {?}
     */
    onPageSizeRevert(element) {
        element.value = String(this.config.limit);
    }
    /**
     * Is invalid page index; True if page index is invalid.
     * @param {?} element Page index DOM element.
     * @return {?} Invalid status.
     */
    isInvalidPageIndex(element) {
        /** @type {?} */
        const page = Number(element.value);
        return element.value === '' || page > this.maxPage || page < 1;
    }
    /**
     * On page size change event handler.
     * @param {?} element HTML input element.
     * @return {?}
     */
    onPageIndexChange(element) {
        if (this.isInvalidPageIndex(element)) {
            element.value = String(this.page);
            return;
        }
        /** @type {?} */
        const page = Number(element.value);
        if (this.page !== page) {
            this.config.offset = (page - 1) * this.config.limit;
            this.eventStateService.dataFetchStream.emit(DataFetchMode.SOFT_LOAD);
        }
    }
    /**
     * On page size revert event handler.
     * @param {?} element HTML input element.
     * @return {?}
     */
    onPageIndexRevert(element) {
        element.value = String(this.page);
    }
    /**
     * Get previous page availability status.
     * @return {?}
     */
    get hasPrevious() {
        return this.config.offset <= 0;
    }
    /**
     * Get next page availability status.
     * @return {?}
     */
    get hasNext() {
        return this.config.offset + this.config.limit >= this.dataStateService.itemCount;
    }
    /**
     * Get start row index.
     * @return {?}
     */
    get startRowIndex() {
        return this.config.offset + 1;
    }
    /**
     * Get end row index.
     * @return {?}
     */
    get endRowIndex() {
        return Math.min(this.config.offset + this.config.limit, this.dataStateService.itemCount);
    }
    /**
     * Prevent invalid key press.
     * @param {?} event Keyboard event argument object.
     * @return {?}
     */
    preventInvalidKeyPress(event) {
        if ((event.key >= '0' && event.key <= '9') ||
            event.key === 'ArrowLeft' ||
            event.key === 'ArrowRight' ||
            event.key === 'Delete' ||
            event.key === 'Backspace' ||
            event.key === 'Escape' ||
            event.key === 'Enter') {
            return;
        }
        else {
            event.preventDefault();
        }
    }
    /**
     * component init lifecycle event handler.
     * @return {?}
     */
    ngOnInit() {
        this.setMobileModeState();
        this.resizeService.resize.pipe(debounceTime(200)).subscribe((/**
         * @return {?}
         */
        () => {
            this.setMobileModeState();
        }));
    }
}
DataTablePaginationComponent.decorators = [
    { type: Component, args: [{
                selector: 'ng-data-table-pagination',
                template: "<div class=\"ng-data-table-pagination-container\" #paginationContainer>\n  <div class=\"ng-data-table-pagination-range\" [hidden]=\"isMobile\">\n    {{ config.translations.pagination.rangeKey }} <span [textContent]=\"startRowIndex\"></span>\n    -<span [textContent]=\"endRowIndex\"></span>\n    {{ config.translations.pagination.rangeSeparator }}\n    <span [textContent]=\"dataStateService.itemCount\"></span>\n  </div>\n  <div class=\"ng-data-table-pagination-controllers\" [class.sm-controllers]=\"isMobile\">\n    <div class=\"ng-data-table-pagination-limit\">\n      <div class=\"ng-data-table-pagination-input-container\">\n        <label class=\"ng-data-table-pagination-input-label\">{{ config.translations.pagination.limit }}</label>\n        <input\n          #limitInput\n          type=\"number\"\n          class=\"ng-data-table-pagination-input\"\n          min=\"1\"\n          step=\"1\"\n          [attr.max]=\"config.maxLimit\"\n          [class.ng-data-table-input-error]=\"isInvalidLimit(limitInput)\"\n          [ngModel]=\"config.limit\"\n          required\n          (keypress)=\"preventInvalidKeyPress($event)\"\n          (keyup.enter)=\"onPageSizeChange(limitInput)\"\n          (keyup.esc)=\"onPageSizeRevert(limitInput)\"\n        />\n      </div>\n    </div>\n    <div class=\"ng-data-table-pagination-pages\">\n      <button\n        [disabled]=\"hasPrevious\"\n        (click)=\"firstPageClick()\"\n        [title]=\"config.translations.pagination.firstTooltip\"\n        class=\"ng-data-table-action-button ng-data-table-pagination-firstpage\"\n      ></button>\n      <button\n        [disabled]=\"hasPrevious\"\n        (click)=\"previousPageClick()\"\n        [title]=\"config.translations.pagination.previousTooltip\"\n        class=\"ng-data-table-action-button ng-data-table-pagination-prevpage\"\n      ></button>\n      <div class=\"ng-data-table-pagination-page\">\n        <div class=\"ng-data-table-pagination-input-container\">\n          <input\n            #pageInput\n            type=\"number\"\n            class=\"ng-data-table-pagination-input\"\n            min=\"1\"\n            step=\"1\"\n            [attr.max]=\"maxPage\"\n            [class.ng-data-table-input-error]=\"isInvalidPageIndex(pageInput)\"\n            [ngModel]=\"page\"\n            required\n            (keypress)=\"preventInvalidKeyPress($event)\"\n            (keyup.enter)=\"onPageIndexChange(pageInput)\"\n            (keyup.esc)=\"onPageIndexRevert(pageInput)\"\n          />\n          <div class=\"ng-data-table-pagination-input-label\">\n            <span>/ </span>\n            <span [textContent]=\"maxPage\"></span>\n          </div>\n        </div>\n      </div>\n      <button\n        [disabled]=\"hasNext\"\n        (click)=\"nextPageClick()\"\n        [title]=\"config.translations.pagination.nextTooltip\"\n        class=\"ng-data-table-action-button ng-data-table-pagination-nextpage\"\n      ></button>\n      <button\n        [disabled]=\"hasNext\"\n        (click)=\"lastPageClick()\"\n        [title]=\"config.translations.pagination.lastTooltip\"\n        class=\"ng-data-table-action-button ng-data-table-pagination-lastpage\"\n      ></button>\n    </div>\n  </div>\n</div>\n"
            }] }
];
/** @nocollapse */
DataTablePaginationComponent.ctorParameters = () => [
    { type: DataTableConfigService },
    { type: DataTableDataStateService },
    { type: DataTableEventStateService },
    { type: ResizeService }
];
DataTablePaginationComponent.propDecorators = {
    paginationContainer: [{ type: ViewChild, args: ['paginationContainer', { static: true },] }]
};
if (false) {
    /**
     * @type {?}
     * @private
     */
    DataTablePaginationComponent.prototype.paginationContainer;
    /** @type {?} */
    DataTablePaginationComponent.prototype.isMobile;
    /** @type {?} */
    DataTablePaginationComponent.prototype.config;
    /** @type {?} */
    DataTablePaginationComponent.prototype.dataStateService;
    /**
     * @type {?}
     * @private
     */
    DataTablePaginationComponent.prototype.eventStateService;
    /**
     * @type {?}
     * @private
     */
    DataTablePaginationComponent.prototype.resizeService;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Data table persistence service; Manage data table state when persist state options is enabled.
 */
class DataTablePersistenceService {
    /**
     * @param {?} globalRefService
     * @param {?} config
     */
    constructor(globalRefService, config) {
        this.globalRefService = globalRefService;
        this.config = config;
    }
    /**
     * Set table state storage mode.
     * @param {?} value Storage mode.
     * @return {?}
     */
    set storageMode(value) {
        if (this.globalRefService.isBrowser) {
            if (value === 'local') {
                this.storage = this.globalRefService.window.localStorage;
            }
            else {
                this.storage = this.globalRefService.window.sessionStorage;
            }
        }
    }
    /**
     * Set table state by identifier.
     * @param {?} id Table identifier.
     * @param {?} value Data table request parameters object.
     * @param {?=} version Data version.
     * @return {?}
     */
    setState(id, value, version = 'v1') {
        if (this.globalRefService.isBrowser) {
            /** @type {?} */
            const data = {
                ver: version,
                val: value
            };
            this.storage.setItem(`${this.config.stateKeyPrefix}${id}`, JSON.stringify(data));
        }
    }
    /**
     * Get table state by identifier.
     * @param {?} id Table identifier.
     * @param {?=} version Data version.
     * @return {?} Data table request params object.
     */
    getState(id, version = 'v1') {
        if (this.globalRefService.isBrowser) {
            /** @type {?} */
            const data = JSON.parse(this.storage.getItem(`${this.config.stateKeyPrefix}${id}`));
            if (data && data.ver === version) {
                return data.val;
            }
        }
        return null;
    }
}
DataTablePersistenceService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
DataTablePersistenceService.ctorParameters = () => [
    { type: GlobalRefService },
    { type: DataTableConfigService }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    DataTablePersistenceService.prototype.storage;
    /**
     * @type {?}
     * @private
     */
    DataTablePersistenceService.prototype.globalRefService;
    /**
     * @type {?}
     * @private
     */
    DataTablePersistenceService.prototype.config;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Data table resource service; Manage data table client side data querying.
 * @template T
 */
class DataTableResourceService {
    /**
     * Set data source stream to query.
     * @param {?} dataSource Data source stream.
     * @return {?}
     */
    setDataSource(dataSource) {
        this.dispose();
        if (this.itemDataStream && !this.itemDataStream.closed) {
            this.itemDataStream.complete();
        }
        this.itemDataStream = new ReplaySubject(1);
        this.dataSourceSubscription = dataSource.subscribe((/**
         * @param {?} items
         * @return {?}
         */
        (items) => {
            this.itemDataStream.next(items);
        }));
    }
    /**
     * Query items by data table request params.
     * @param {?} params Data table parameters object.
     * @return {?} Query result stream.
     */
    query(params) {
        return this.itemDataStream.pipe(switchMap((/**
         * @param {?} items
         * @return {?}
         */
        (items) => {
            /** @type {?} */
            let itemCount = items.length;
            /** @type {?} */
            let result = items.slice();
            if (params.fields.length) {
                /** @type {?} */
                const filterFields = params.fields.filter((/**
                 * @param {?} field
                 * @return {?}
                 */
                field => field.filterable));
                if (filterFields.length) {
                    result = items.filter((/**
                     * @param {?} item
                     * @return {?}
                     */
                    item => {
                        return filterFields.every((/**
                         * @param {?} filterColumn
                         * @return {?}
                         */
                        (filterColumn) => {
                            if (filterColumn.filterExpression) {
                                return filterColumn.filterExpression(item, filterColumn.field, filterColumn.filterValue);
                            }
                            if (filterColumn.filterValue === undefined || filterColumn.filterValue === '') {
                                return true;
                            }
                            /** @type {?} */
                            const fieldValue = get(item, filterColumn.field);
                            if (fieldValue === undefined) {
                                return true;
                            }
                            if (Array.isArray(filterColumn.filterValue)) {
                                return filterColumn.filterValue.length === 0 || filterColumn.filterValue.includes(fieldValue);
                            }
                            /** @type {?} */
                            const value = String(fieldValue).toLowerCase();
                            /** @type {?} */
                            const filterValue = String(filterColumn.filterValue).toLowerCase();
                            return value.includes(filterValue);
                        }));
                    }));
                    itemCount = result.length;
                }
                /** @type {?} */
                const sortColumns = params.fields.filter((/**
                 * @param {?} column
                 * @return {?}
                 */
                (column) => {
                    return column.sortable && column.sortOrder !== '';
                }));
                if (sortColumns.length) {
                    /** @type {?} */
                    let orderedSortColumns = sortColumns;
                    if (sortColumns.length > 1) {
                        orderedSortColumns = sortColumns.concat().sort((/**
                         * @param {?} a
                         * @param {?} b
                         * @return {?}
                         */
                        (a, b) => {
                            return a.sortPriority - b.sortPriority;
                        }));
                    }
                    /** @type {?} */
                    const orderParams = orderedSortColumns.reduce((/**
                     * @param {?} accumulator
                     * @param {?} column
                     * @return {?}
                     */
                    (accumulator, column) => {
                        if (accumulator) {
                            accumulator.fields.push(column.field);
                            accumulator.orders.push(column.sortOrder);
                        }
                        return accumulator;
                    }), {
                        fields: [],
                        orders: []
                    });
                    result = orderBy(result, orderParams.fields, orderParams.orders);
                }
            }
            if (params.offset !== undefined) {
                /** @type {?} */
                const offset = params.offset + 1 > result.length ? 0 : params.offset;
                if (params.limit === undefined) {
                    result = result.slice(offset, result.length);
                }
                else {
                    result = result.slice(offset, offset + params.limit);
                }
            }
            return of({
                items: result,
                count: itemCount
            });
        })));
    }
    /**
     * Extract data table filter options.
     * @param {?} filterColumn Data table column component.
     * @return {?} Filter options collection stream.
     */
    extractFilterOptions(filterColumn) {
        return this.itemDataStream.pipe(switchMap((/**
         * @param {?} items
         * @return {?}
         */
        (items) => {
            /** @type {?} */
            const filteredItems = items
                .reduce((/**
             * @param {?} acc
             * @param {?} item
             * @param {?} index
             * @return {?}
             */
            (acc, item, index) => {
                if (filterColumn.filterFieldMapper) {
                    return acc.concat(filterColumn.filterFieldMapper(item, index));
                }
                /** @type {?} */
                const filterField = filterColumn.filterField || filterColumn.field;
                /** @type {?} */
                const filterValue = get(item, filterField);
                acc.push({
                    key: filterValue,
                    value: filterValue
                });
                return acc;
            }), [])
                .filter((/**
             * @param {?} value
             * @param {?} index
             * @param {?} self
             * @return {?}
             */
            (value, index, self) => {
                return self.findIndex((/**
                 * @param {?} item
                 * @return {?}
                 */
                item => item.key === value.key)) === index;
            }));
            return of(filteredItems);
        })));
    }
    /**
     * Dispose client data source streams.
     * @return {?}
     */
    dispose() {
        if (this.dataSourceSubscription) {
            this.dataSourceSubscription.unsubscribe();
            this.dataSourceSubscription = null;
        }
        if (this.itemDataStream && !this.itemDataStream.closed) {
            this.itemDataStream.complete();
        }
    }
}
DataTableResourceService.decorators = [
    { type: Injectable }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    DataTableResourceService.prototype.itemDataStream;
    /**
     * @type {?}
     * @private
     */
    DataTableResourceService.prototype.dataSourceSubscription;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Data table component; Data table entry component.
 */
class DataTableComponent {
    /**
     * @param {?} dragAndDropService
     * @param {?} dataTableStateService
     * @param {?} globalRefService
     * @param {?} eventStateService
     * @param {?} dataTableResourceService
     * @param {?} zone
     * @param {?} dataStateService
     * @param {?} scrollPositionService
     * @param {?} config
     */
    constructor(dragAndDropService, dataTableStateService, globalRefService, eventStateService, dataTableResourceService, zone, dataStateService, scrollPositionService, config) {
        this.dragAndDropService = dragAndDropService;
        this.dataTableStateService = dataTableStateService;
        this.globalRefService = globalRefService;
        this.eventStateService = eventStateService;
        this.dataTableResourceService = dataTableResourceService;
        this.zone = zone;
        this.dataStateService = dataStateService;
        this.scrollPositionService = scrollPositionService;
        this.config = config;
        this.storageMode = config.storageMode;
        this.headerClick = this.eventStateService.headerClickStream;
        this.allRowSelectChange = this.eventStateService.allRowSelectChangeStream;
        this.rowBind = this.eventStateService.rowBindStream;
        this.rowClick = this.eventStateService.rowClickStream;
        this.rowDoubleClick = this.eventStateService.rowDoubleClickStream;
        this.rowSelectChange = this.eventStateService.rowSelectChangeStream;
        this.cellBind = this.eventStateService.cellBindStream;
        this.cellClick = this.eventStateService.cellClickStream;
        this.init = this.eventStateService.initStream;
        this.dataBound = this.eventStateService.dataBoundStream;
        this.columnBind = this.eventStateService.columnBind;
    }
    // Input Events
    /**
     * Set data bind event handler callback. This handler is fired on each data fetch request.
     * @param {?} value
     * @return {?}
     */
    set onDataBind(value) {
        this.dataStateService.onDataBind = value;
    }
    /**
     * Set filter value extract event handler callback. Used to extract filter value collection dynamically when
     * explicit data bind functionality is used with onDataBind callback.
     * @param {?} value
     * @return {?}
     */
    set onFilterValueExtract(value) {
        this.dataStateService.onFilterValueExtract = value;
    }
    /**
     * Set on dynamic row span extract event handler callback.
     * @param {?} value
     * @return {?}
     */
    set onDynamicRowSpanExtract(value) {
        this.dataStateService.onDynamicRowSpanExtract = value;
    }
    // Input parameters
    /**
     * Set static data items collection. No need to set data source when static items collection is provided.
     * @param {?} value
     * @return {?}
     */
    set items(value) {
        if (!value) {
            return;
        }
        this.eventStateService.staticDataSourceStream.next(value);
    }
    /**
     * Set data source observable. This observable is used to retrieve row data for binding.
     * @param {?} source
     * @return {?}
     */
    set dataSource(source) {
        this.initDataSource(source);
    }
    /**
     * Set data table unique identifier.
     * @param {?} value
     * @return {?}
     */
    set id(value) {
        if (!ValidatorService.idPatternValidatorExpression.test(value)) {
            throw Error('Invalid [id] input value. Unique identifier parameter only accept string begin with a letter ([A-Za-z]) and may be followed by any number of letters, digits ([0-9]), hyphens ("-"), underscores ("_").');
        }
        this.dataStateService.id = value;
    }
    /**
     * Set persist table state on provided storage mode if true. Depends on storageMode property.
     * @param {?} value
     * @return {?}
     */
    set persistTableState(value) {
        this.config.persistTableState = value;
    }
    /**
     * Set storage mode to persist table state. Only applicable when persistTableState is true.
     * @param {?} value
     * @return {?}
     */
    set storageMode(value) {
        this.dataTableStateService.storageMode = value;
    }
    /**
     * Set multiple column sortable if true. Only applicable for sortable true columns.
     * @param {?} value
     * @return {?}
     */
    set multiColumnSortable(value) {
        this.config.multiColumnSortable = value;
    }
    /**
     * Set table header bar visible if true.
     * @param {?} value
     * @return {?}
     */
    set showHeader(value) {
        this.config.showHeader = value;
    }
    /**
     * Set title to be shown in the header. Only applicable when showHeader is true.
     * @param {?} value
     * @return {?}
     */
    set title(value) {
        this.config.title = value;
    }
    /**
     * Set width value in pixels. Can be used to set the width of teh table (responsive if not set).
     * @param {?} value
     * @return {?}
     */
    set width(value) {
        this.config.width = value;
    }
    /**
     * Set minimum table content height value in pixels. Can be used to set the minimum height of the table content area.
     * @param {?} value
     * @return {?}
     */
    set minContentHeight(value) {
        this.config.minContentHeight = value;
    }
    /**
     * Minimum table content width value in pixels. Can be used to set the minimum width of the table content area.
     * @param {?} value
     * @return {?}
     */
    set minContentWidth(value) {
        this.config.minContentWidth = value;
    }
    /**
     * Table content height value in pixels. This configuration can be used to enable table content vertical
     * scrolling for responsive design.
     * @param {?} value
     * @return {?}
     */
    set contentHeight(value) {
        this.config.contentHeight = value;
    }
    /**
     * Show pagination bar if true. Depends on offset and limit values. Trigger dataLoad event with offset
     * and limit values.
     * @param {?} value
     * @return {?}
     */
    set pageable(value) {
        this.config.pageable = value;
    }
    /**
     * Enable scrolling based on-demand data loading functionality if true. Trigger dataLoad event with offset
     * and limit values when scroll to bottom until data source exhaust.
     * @param {?} value
     * @return {?}
     */
    set loadOnScroll(value) {
        this.config.loadOnScroll = value;
    }
    /**
     * Set view height distance ratio to trigger data fetch on scroll. Applicable only when load on scroll mode is enabled.
     * @param {?} value
     * @return {?}
     */
    set loadViewDistanceRatio(value) {
        this.config.loadViewDistanceRatio = value;
    }
    /**
     * Set auto generated index column with row numbering if true.
     * @param {?} value
     * @return {?}
     */
    set showIndexColumn(value) {
        this.config.showIndexColumn = value;
    }
    /**
     * Set index column header title. Applicable when showIndexColumn is true.
     * @param {?} value
     * @return {?}
     */
    set indexColumnTitle(value) {
        this.config.indexColumnTitle = value;
    }
    /**
     * Set row select checkbox and select state if true.
     * @param {?} value
     * @return {?}
     */
    set rowSelectable(value) {
        this.config.rowSelectable = value;
    }
    /**
     * Data table row select mode. Applicable only when rowSelectable is true.
     * @param {?} value
     * @return {?}
     */
    set selectMode(value) {
        this.config.selectMode = value;
    }
    /**
     * Set select all row checkbox on column header visible if true.
     * Only applicable when showRowSelectCheckbox, rowSelectable is true & item selectMode is  multi.
     * @param {?} value
     * @return {?}
     */
    set showRowSelectCheckbox(value) {
        this.config.showRowSelectCheckbox = value;
    }
    /**
     * Set select all row checkbox on column header visible if true.
     * Only applicable when showRowSelectCheckbox, rowSelectable is true & item selectMode is  multi.
     * @param {?} value
     * @return {?}
     */
    set showRowSelectAllCheckbox(value) {
        this.config.showRowSelectAllCheckbox = value;
    }
    /**
     * Set substitute rows visible if true. Fill with empty rows when row count < limit.
     * @param {?} value
     * @return {?}
     */
    set showSubstituteRows(value) {
        this.config.showSubstituteRows = value;
    }
    /**
     * Set row expander visible if true. Render ngDataTableExpand template on expand click.
     * @param {?} value
     * @return {?}
     */
    set expandableRows(value) {
        this.config.expandableRows = value;
    }
    /**
     * Set trigger row select on click event if true. Applicable only when rowSelectable is true.
     * @param {?} value
     * @return {?}
     */
    set selectOnRowClick(value) {
        this.config.selectOnRowClick = value;
    }
    /**
     * Set expand and render expand template on row click if true. Only applicable when expandableRows is true.
     * @param {?} value
     * @return {?}
     */
    set expandOnRowClick(value) {
        this.config.expandOnRowClick = value;
    }
    /**
     * Auto trigger dataLoad event on initialization if true.
     * @param {?} value
     * @return {?}
     */
    set autoFetch(value) {
        this.config.autoFetch = value;
    }
    /**
     * Set loading spinner visible if true. Show loading spinner when data fetch operation is triggered.
     * @param {?} value
     * @return {?}
     */
    set showLoadingSpinner(value) {
        this.config.showLoadingSpinner = value;
    }
    /**
     * Set select option track by field path which is used to uniquely identify row for selection tracking.
     * This field support object paths expressions 'root[0].nest'.
     * @param {?} value
     * @return {?}
     */
    set selectTrackBy(value) {
        this.config.selectTrackBy = value;
    }
    /**
     * Set selected row identifier. Select specified row on initial load.
     * Applicable when row select mode is SINGLE or SINGLE_TOGGLE.
     * @param {?} value
     * @return {?}
     */
    set selectedRow(value) {
        this.dataStateService.selectedRow = value;
        this.eventStateService.rowSelectChangeStream.emit(this.dataStateService.selectedRow);
    }
    /**
     * Set selected row identifiers collection. Select specified rows on initial load.
     * Applicable when selectMode is SINGLE or SINGLE_TOGGLE true.
     * @param {?} value
     * @return {?}
     */
    set selectedRows(value) {
        this.dataStateService.selectedRows = value || [];
        this.eventStateService.rowSelectChangeStream.emit(this.dataStateService.selectedRows);
    }
    /**
     * Set filter debounce time in milliseconds. Applicable only when filterDebounce is true.
     * @param {?} value
     * @return {?}
     */
    set filterDebounceTime(value) {
        this.config.filterDebounceTime = value;
    }
    /**
     * Set filter data debounce enabled state with provided filterDebounceTime if true.
     * @param {?} value
     * @return {?}
     */
    set filterDebounce(value) {
        this.config.filterDebounce = value;
    }
    /**
     * Set refresh button visible if true. Only applicable when showHeader is true.
     * @param {?} value
     * @return {?}
     */
    set showRefreshButton(value) {
        this.config.showRefreshButton = value;
    }
    /**
     * Row selector column width in pixels. Applicable only when showColumnSelector is true.
     * @param {?} value
     * @return {?}
     */
    set showColumnSelector(value) {
        this.config.showColumnSelector = value;
    }
    /**
     * Set column selector dropdown width in pixels. Only applicable when showColumnSelector is true.
     * @param {?} value
     * @return {?}
     */
    set columnSelectorWidth(value) {
        this.config.columnSelectorWidth = value;
    }
    /**
     * Set expander column width in pixels. Applicable only when expandableRows is true.
     * @param {?} value
     * @return {?}
     */
    set expanderColumnWidth(value) {
        this.config.expanderColumnWidth = value;
    }
    /**
     * Set index column width in pixels. Applicable only when showIndexColumn is true.
     * @param {?} value
     * @return {?}
     */
    set indexColumnWidth(value) {
        this.config.indexColumnWidth = value;
    }
    /**
     * Set row selector column width in pixels. Applicable only when showColumnSelector is true.
     * @param {?} value
     * @return {?}
     */
    set selectionColumnWidth(value) {
        this.config.selectionColumnWidth = value;
    }
    /**
     * Set translation data object. Used to localize table static label text.
     * @param {?} data
     * @return {?}
     */
    set translations(data) {
        this.config.translations = data;
    }
    /**
     * Set row expand loading spinner visible if true. Applicable only when row expand is enabled.
     * @param {?} value
     * @return {?}
     */
    set showRowExpandLoadingSpinner(value) {
        this.config.showRowExpandLoadingSpinner = value;
    }
    /**
     * Set data offset value (start offset index). Applicable only when pageable is true.
     * @param {?} value
     * @return {?}
     */
    set offset(value) {
        this.config.offset = value;
        this.eventStateService.dataFetchStream.next(DataFetchMode.SOFT_LOAD);
    }
    /**
     * Set data limit value (page size). Applicable only when pageable is true.
     * @param {?} value
     * @return {?}
     */
    set limit(value) {
        this.config.limit = value;
        this.eventStateService.dataFetchStream.next(DataFetchMode.SOFT_LOAD);
    }
    /**
     * Set current page number. Auto calculate offset depending on page number,
     * do not explicitly set offset when page is used.
     * @param {?} value
     * @return {?}
     */
    set page(value) {
        this.offset = (value - 1) * this.config.limit;
    }
    /**
     * Get current page number.
     * @return {?}
     */
    get page() {
        return Math.floor(this.config.offset / this.config.limit) + 1;
    }
    /**
     * Get data table header padding in pixels.
     * @return {?}
     */
    get headerPadding() {
        return this.config.contentHeight ? this.globalRefService.scrollbarWidth : 0;
    }
    /**
     * Get data loading status.
     * @return {?}
     */
    get isLoading() {
        return !(this.config.loadOnScroll && this.dataStateService.dataRows.length)
            && this.config.showLoadingSpinner && this.dataStateService.dataLoading;
    }
    /**
     * On after data bind event handler
     * @private
     * @param {?} queryResult Query result object
     * @return {?}
     */
    onAfterDataBind(queryResult) {
        this.dataStateService.itemCount = queryResult.count;
        this.setDataRows(queryResult.items);
        if (this.dataStateService.heardReload) {
            this.eventStateService.fetchFilterOptionsStream.next(false);
            this.dataStateService.heardReload = false;
        }
        this.dataStateService.dataLoading = false;
        this.eventStateService.dataBoundStream.emit();
    }
    /**
     * Get data item selected state
     * @private
     * @param {?} item Data item object
     * @return {?} True if item is selected
     */
    getSelectedState(item) {
        /** @type {?} */
        const id = get(item, this.config.selectTrackBy);
        if (id === undefined) {
            return false;
        }
        if (this.config.selectMode === 'multi') {
            return this.dataStateService.selectedRows.indexOf(id) > -1;
        }
        return this.dataStateService.selectedRow === id;
    }
    /**
     * Set data table item collection
     * @private
     * @param {?} items Data table item collection
     * @return {?}
     */
    setDataRows(items) {
        /** @type {?} */
        const mappedItems = items.map((/**
         * @param {?} item
         * @param {?} index
         * @return {?}
         */
        (item, index) => {
            /** @type {?} */
            let currentIndex;
            if (this.config.loadOnScroll || this.config.pageable) {
                currentIndex = this.config.offset + index + 1;
            }
            else {
                currentIndex = index + 1;
            }
            return {
                dataLoaded: false,
                expanded: false,
                disabled: false,
                color: '',
                cssClass: '',
                tooltip: '',
                index: currentIndex,
                item,
                selected: this.getSelectedState(item)
            };
        }));
        if (this.config.loadOnScroll) {
            this.dataStateService.dataRows = [...this.dataStateService.dataRows, ...mappedItems];
        }
        else {
            this.dataStateService.dataRows = mappedItems;
        }
        if (this.config.selectMode === 'multi') {
            this.dataStateService.allRowSelected =
                this.dataStateService.dataRows.length !== 0 &&
                    this.dataStateService.dataRows.every((/**
                     * @param {?} dataRow
                     * @return {?}
                     */
                    (dataRow) => {
                        return dataRow.selected;
                    }));
        }
        if (!this.config.loadOnScroll) {
            /** @type {?} */
            const substituteRowCount = this.config.limit - this.dataStateService.dataRows.length;
            this.dataStateService.substituteRows = Array.from({
                length: substituteRowCount
            });
        }
    }
    /**
     * Initialize data fetch event
     * @private
     * @return {?}
     */
    initDataFetchEvent() {
        /** @type {?} */
        const noop = {
            items: [],
            count: 0
        };
        this.dataFetchStreamSubscription = this.eventStateService.dataFetchStream
            .pipe(debounceTime(20), switchMap((/**
         * @param {?} fetchMode
         * @return {?}
         */
        (fetchMode) => this.mapDataBind(fetchMode))), catchError((/**
         * @return {?}
         */
        () => {
            return of(noop);
        })))
            .subscribe((/**
         * @param {?} queryResult
         * @return {?}
         */
        (queryResult) => {
            this.onAfterDataBind(queryResult);
        }), (/**
         * @return {?}
         */
        () => {
            this.onAfterDataBind(noop);
        }));
    }
    /**
     * Re-map data binding data
     * @private
     * @param {?} fetchMode Data fetch mode
     * @return {?} Data table query result stream
     */
    mapDataBind(fetchMode) {
        this.dataStateService.dataLoading = true;
        if (fetchMode === DataFetchMode.HARD_RELOAD) {
            this.clearRowSelectState();
            this.clearColumnState();
            this.dataStateService.heardReload = true;
            this.config.offset = 0;
        }
        /** @type {?} */
        const params = {
            loadData: fetchMode === DataFetchMode.HARD_RELOAD || fetchMode === DataFetchMode.SOFT_RELOAD
        };
        if (this.columns) {
            params.fields = this.columns
                .filter((/**
             * @param {?} column
             * @return {?}
             */
            column => {
                return column.sortable || column.filterable;
            }))
                .reduce((/**
             * @param {?} acc
             * @param {?} column
             * @return {?}
             */
            (acc, column) => {
                if (column.sortField || column.filterField) {
                    acc.push({
                        field: column.sortField || column.filterField,
                        column
                    });
                }
                else {
                    acc.push({
                        field: column.field,
                        column
                    });
                }
                return acc;
            }), [])
                .map((/**
             * @param {?} uniqueField
             * @return {?}
             */
            (uniqueField) => {
                /** @type {?} */
                let filter;
                if (uniqueField.column.showDropdownFilter) {
                    if (uniqueField.column.dropdownFilterSelectMode === 'multi') {
                        filter = uniqueField.column.filter && uniqueField.column.filter.map((/**
                         * @param {?} filterValue
                         * @return {?}
                         */
                        filterValue => filterValue.key));
                    }
                    else {
                        filter = uniqueField.column.filter && uniqueField.column.filter.key;
                    }
                }
                else {
                    filter = uniqueField.column.filter;
                }
                return {
                    field: uniqueField.field,
                    sortable: uniqueField.column.sortable,
                    sortOrder: uniqueField.column.sortOrder,
                    sortPriority: uniqueField.column.sortPriority || (uniqueField.column.sortOrder ? 1 : 0),
                    filterable: uniqueField.column.filterable,
                    filterValue: filter,
                    filterExpression: uniqueField.column.filterExpression,
                };
            }));
        }
        if (this.config.pageable || this.config.loadOnScroll) {
            params.offset = this.config.offset;
            params.limit = this.config.limit;
        }
        if (this.config.persistTableState) {
            this.dataTableStateService.setState(this.dataStateService.id, params);
        }
        return this.dataStateService.onDataBind(params);
    }
    /**
     * Initialize data table state via previous state snapshot; Applicable only when persist table state is enabled
     * @private
     * @return {?}
     */
    initDataTableState() {
        if (this.config.persistTableState) {
            /** @type {?} */
            const dataTableState = this.dataTableStateService.getState(this.dataStateService.id);
            if (dataTableState) {
                this.columns.forEach((/**
                 * @param {?} column
                 * @return {?}
                 */
                column => {
                    /** @type {?} */
                    const field = dataTableState.fields.find((/**
                     * @param {?} col
                     * @return {?}
                     */
                    col => {
                        return col.field === column.field;
                    }));
                    if (field) {
                        if (column.filterable && field.filterable) {
                            if (column.showDropdownFilter) {
                                if (field.filterValue) {
                                    if (column.dropdownFilterSelectMode === 'multi') {
                                        column.filter = field.filterValue.map((/**
                                         * @param {?} filterValue
                                         * @return {?}
                                         */
                                        (filterValue) => {
                                            return {
                                                key: filterValue,
                                                value: filterValue
                                            };
                                        }));
                                    }
                                    else {
                                        column.filter = {
                                            key: field.filterValue,
                                            value: field.filterValue
                                        };
                                    }
                                }
                            }
                            else {
                                column.filter = field.filterValue;
                            }
                        }
                        if (column.sortable && field.sortable) {
                            column.sortOrder = field.sortOrder;
                        }
                    }
                }));
                this.config.limit = dataTableState.limit;
                this.config.offset = dataTableState.offset;
            }
        }
    }
    /**
     * After component initialize lifecycle event handler
     * @return {?}
     */
    ngAfterContentInit() {
        this.dataStateService.relativeParentElement = this.dataTableElement.nativeElement;
        if (!this.dataStateService.onDataBind) {
            this.dataSource = this.eventStateService.staticDataSourceStream;
        }
        this.initDataTableState();
        this.initDataFetchEvent();
        if (this.config.autoFetch) {
            this.eventStateService.dataFetchStream.next(DataFetchMode.SOFT_LOAD);
        }
        this.eventStateService.fetchFilterOptionsStream.next(true);
        this.eventStateService.initStream.emit(this);
        if (this.config.loadOnScroll) {
            this.scrollPositionSubscription = this.scrollPositionService.scrollPositionStream.subscribe((/**
             * @param {?} pos
             * @return {?}
             */
            (pos) => {
                /** @type {?} */
                const roundingPixel = 1;
                /** @type {?} */
                const gutterPixel = 1;
                if (pos.isVertical
                    && pos.scrollTop >= pos.scrollHeight - (1 + this.config.loadViewDistanceRatio) * pos.clientHeight - roundingPixel - gutterPixel
                    && (this.config.offset + this.config.limit) < this.dataStateService.itemCount
                    && !this.dataStateService.dataLoading) {
                    this.dataStateService.dataLoading = true;
                    this.zone.run((/**
                     * @return {?}
                     */
                    () => {
                        this.offset = this.config.offset + this.config.limit;
                    }));
                }
            }));
        }
    }
    /**
     * Reset column sort and filter state
     * @private
     * @return {?}
     */
    clearColumnState() {
        this.columns.forEach((/**
         * @param {?} column
         * @return {?}
         */
        (column) => {
            column.resetSortOrder();
            column.filter = undefined;
        }));
    }
    /**
     * Clear selected data row status
     * @private
     * @return {?}
     */
    clearRowSelectState() {
        this.dataStateService.selectedRow = undefined;
        this.dataStateService.selectedRows = [];
        this.dataStateService.allRowSelected = false;
    }
    /**
     * Fetch data from data source
     * @param {?=} fetchMode Data fetch mode
     * @return {?}
     */
    fetchData(fetchMode = DataFetchMode.SOFT_RELOAD) {
        this.eventStateService.dataFetchStream.next(fetchMode);
    }
    /**
     * Initialize data source
     * @param {?} source Data source stream
     * @return {?}
     */
    initDataSource(source) {
        this.dataTableResourceService.setDataSource(source);
        this.onDataBind = (/**
         * @param {?} params
         * @return {?}
         */
        (params) => {
            if (params.loadData) {
                this.dataTableResourceService.setDataSource(source);
            }
            return this.dataTableResourceService.query(params);
        });
        this.onFilterValueExtract = (/**
         * @param {?} column
         * @return {?}
         */
        (column) => {
            return this.dataTableResourceService.extractFilterOptions(column);
        });
    }
    /**
     * Component value write event handler; Form control support implementation
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        if (this.config.selectMode === 'multi') {
            this.selectedRows = value;
        }
        else {
            this.selectedRow = value;
        }
    }
    /**
     * Register select change event handler; Form control support implementation
     * @param {?} onSelectChange Select change event handler callback
     * @return {?}
     */
    registerOnChange(onSelectChange) {
        this.rowSelectChangeSubscription = this.eventStateService.rowSelectChangeStream.subscribe((/**
         * @param {?} selectedIds
         * @return {?}
         */
        (selectedIds) => {
            onSelectChange(selectedIds);
        }));
    }
    /**
     * Register on touch event handler; Form control support implementation
     * @param {?} fn Touch event callback handler
     * @return {?}
     */
    registerOnTouched(fn) { }
    /**
     * Get table width in pixels
     * @return {?}
     */
    get tableWidth() {
        return this.config.width || this.dataStateService.tableWidth;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (!this.dataStateService.id) {
            throw Error('Missing required parameter value for [id] input.');
        }
        if (this.config.loadOnScroll) {
            if (!this.config.minContentHeight) {
                throw Error('[minContentHeight] is required when [infiniteScrollable] is enabled.');
            }
            if (this.config.pageable) {
                throw Error('[pageable] and [infiniteScrollable] cannot be enabled at the same time.');
            }
        }
    }
    /**
     * Component destroy lifecycle event handler
     * @return {?}
     */
    ngOnDestroy() {
        if (this.dataFetchStreamSubscription) {
            this.dataFetchStreamSubscription.unsubscribe();
        }
        if (this.rowSelectChangeSubscription) {
            this.rowSelectChangeSubscription.unsubscribe();
        }
        if (this.scrollPositionSubscription) {
            this.scrollPositionSubscription.unsubscribe();
        }
        this.dataTableResourceService.dispose();
    }
}
DataTableComponent.decorators = [
    { type: Component, args: [{
                selector: 'ng-data-table',
                template: "<div class=\"ng-data-table-container\" #dataTableElement [class.scrollable]=\"config.contentHeight\">\n  <ng-data-table-header *ngIf=\"config.showHeader\" [columns]=\"columns\"> </ng-data-table-header>\n  <div class=\"ng-data-table-content-container\" [ngScrollPosition]=\"scrollPositionService.scrollPositionStream\">\n    <div class=\"ng-data-table-content-header-container\" [style.paddingRight]=\"headerPadding | ngPx\">\n      <div class=\"ng-data-table-content-header\" [ngScrollElement]=\"scrollPositionService.scrollPositionStream\">\n        <table class=\"ng-data-table\" [style.width]=\"tableWidth | ngPx\" [style.minWidth]=\"config.minContentWidth | ngPx\">\n          <colgroup ngDataTableColGroup [columns]=\"columns\"></colgroup>\n          <thead ngDataTableHead [columns]=\"columns\"></thead>\n        </table>\n      </div>\n    </div>\n    <div class=\"ng-data-table-content\" [ngScrollPosition]=\"scrollPositionService.scrollPositionStream\"\n         [style.height]=\"config.contentHeight | ngPx\" [style.minHeight]=\"config.minContentHeight | ngPx\">\n      <ng-data-table-loading-spinner [loadingSpinnerTemplate]=\"loadingSpinnerTemplate\" [isLoading]=\"isLoading\" [showOverlay]=\"true\">\n      </ng-data-table-loading-spinner>\n      <table class=\"ng-data-table\" [style.width]=\"tableWidth | ngPx\" [style.minWidth]=\"config.minContentWidth | ngPx\" [hidden]=\"isLoading\">\n        <colgroup ngDataTableColGroup [columns]=\"columns\"></colgroup>\n        <tbody\n          ngDataTableBody\n          [columns]=\"columns\"\n          [rowExpandTemplate]=\"rowExpandTemplate\"\n          [rowExpandLoadingSpinnerTemplate]=\"rowExpandLoadingSpinnerTemplate\"\n        ></tbody>\n      </table>\n      <ng-data-table-no-data-body\n        class=\"ng-data-table-no-records-message-container\"\n        *ngIf=\"dataStateService.showNoDataOverlay\"\n        [noRecordsTemplate]=\"noRecordsTemplate\"\n      >\n      </ng-data-table-no-data-body>\n    </div>\n  </div>\n  <ng-data-table-pagination *ngIf=\"config.pageable && dataStateService.itemCount\"></ng-data-table-pagination>\n</div>\n",
                providers: [
                    DataTableConfigService,
                    DataTableEventStateService,
                    DataTablePersistenceService,
                    DataTableDataStateService,
                    DataTableScrollPositionService,
                    DataTableResourceService,
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef((/**
                         * @return {?}
                         */
                        () => DataTableComponent)),
                        multi: true
                    }
                ]
            }] }
];
/** @nocollapse */
DataTableComponent.ctorParameters = () => [
    { type: DragAndDropService },
    { type: DataTablePersistenceService },
    { type: GlobalRefService },
    { type: DataTableEventStateService },
    { type: DataTableResourceService },
    { type: NgZone },
    { type: DataTableDataStateService },
    { type: DataTableScrollPositionService },
    { type: DataTableConfigService }
];
DataTableComponent.propDecorators = {
    columns: [{ type: ContentChildren, args: [DataTableColumnComponent,] }],
    rowExpandTemplate: [{ type: ContentChild, args: ['ngDataTableRowExpand', { static: true },] }],
    noRecordsTemplate: [{ type: ContentChild, args: ['ngDataTableNoRecords', { static: true },] }],
    loadingSpinnerTemplate: [{ type: ContentChild, args: ['ngDataTableLoadingSpinner', { static: true },] }],
    rowExpandLoadingSpinnerTemplate: [{ type: ContentChild, args: ['ngDataTableRowExpandLoadingSpinner', { static: true },] }],
    dataTableElement: [{ type: ViewChild, args: ['dataTableElement', { static: true },] }],
    init: [{ type: Output }],
    rowSelectChange: [{ type: Output }],
    rowClick: [{ type: Output }],
    rowDoubleClick: [{ type: Output }],
    headerClick: [{ type: Output }],
    allRowSelectChange: [{ type: Output }],
    cellClick: [{ type: Output }],
    dataBound: [{ type: Output }],
    rowBind: [{ type: Output }],
    columnBind: [{ type: Output }],
    cellBind: [{ type: Output }],
    onDataBind: [{ type: Input }],
    onFilterValueExtract: [{ type: Input }],
    onDynamicRowSpanExtract: [{ type: Input }],
    items: [{ type: Input }],
    dataSource: [{ type: Input }],
    id: [{ type: Input }],
    persistTableState: [{ type: Input }],
    storageMode: [{ type: Input }],
    multiColumnSortable: [{ type: Input }],
    showHeader: [{ type: Input }],
    title: [{ type: Input }],
    width: [{ type: Input }],
    minContentHeight: [{ type: Input }],
    minContentWidth: [{ type: Input }],
    contentHeight: [{ type: Input }],
    pageable: [{ type: Input }],
    loadOnScroll: [{ type: Input }],
    loadViewDistanceRatio: [{ type: Input }],
    showIndexColumn: [{ type: Input }],
    indexColumnTitle: [{ type: Input }],
    rowSelectable: [{ type: Input }],
    selectMode: [{ type: Input }],
    showRowSelectCheckbox: [{ type: Input }],
    showRowSelectAllCheckbox: [{ type: Input }],
    showSubstituteRows: [{ type: Input }],
    expandableRows: [{ type: Input }],
    selectOnRowClick: [{ type: Input }],
    expandOnRowClick: [{ type: Input }],
    autoFetch: [{ type: Input }],
    showLoadingSpinner: [{ type: Input }],
    selectTrackBy: [{ type: Input }],
    selectedRow: [{ type: Input }],
    selectedRows: [{ type: Input }],
    filterDebounceTime: [{ type: Input }],
    filterDebounce: [{ type: Input }],
    showRefreshButton: [{ type: Input }],
    showColumnSelector: [{ type: Input }],
    columnSelectorWidth: [{ type: Input }],
    expanderColumnWidth: [{ type: Input }],
    indexColumnWidth: [{ type: Input }],
    selectionColumnWidth: [{ type: Input }],
    translations: [{ type: Input }],
    showRowExpandLoadingSpinner: [{ type: Input }],
    offset: [{ type: Input }],
    limit: [{ type: Input }],
    page: [{ type: Input }]
};
if (false) {
    /**
     * @type {?}
     * @private
     */
    DataTableComponent.prototype.rowSelectChangeSubscription;
    /**
     * @type {?}
     * @private
     */
    DataTableComponent.prototype.dataFetchStreamSubscription;
    /**
     * @type {?}
     * @private
     */
    DataTableComponent.prototype.scrollPositionSubscription;
    /**
     * Data table column component collection.
     * @type {?}
     */
    DataTableComponent.prototype.columns;
    /**
     * Template to display when data row is expanded for detail view.
     * @type {?}
     */
    DataTableComponent.prototype.rowExpandTemplate;
    /**
     * Template to display when data set is empty.
     * @type {?}
     */
    DataTableComponent.prototype.noRecordsTemplate;
    /**
     * Template to display while loading data.
     * @type {?}
     */
    DataTableComponent.prototype.loadingSpinnerTemplate;
    /**
     * Template to display while row is expanding to load detail view.
     * @type {?}
     */
    DataTableComponent.prototype.rowExpandLoadingSpinnerTemplate;
    /**
     * Data table self DOM element reference.
     * @type {?}
     */
    DataTableComponent.prototype.dataTableElement;
    /**
     * Data table initialize event handler.
     * Triggered after data table initialize.
     * @type {?}
     */
    DataTableComponent.prototype.init;
    /**
     * Row selected state change event handler.
     * Triggered when table row selected state change.
     * @type {?}
     */
    DataTableComponent.prototype.rowSelectChange;
    /**
     * Row click event handler.
     * Triggered when data row is clicked.
     * @type {?}
     */
    DataTableComponent.prototype.rowClick;
    /**
     * Row double click event handler.
     * Triggered when data row is double clicked.
     * @type {?}
     */
    DataTableComponent.prototype.rowDoubleClick;
    /**
     * Header click event handler.
     * Triggered when header column clicked.
     * @type {?}
     */
    DataTableComponent.prototype.headerClick;
    /**
     * All row select change event handler.
     * Triggered when all row select state changed.
     * @type {?}
     */
    DataTableComponent.prototype.allRowSelectChange;
    /**
     * Cell click event handler.
     * Triggered when clicked on a cell.
     * @type {?}
     */
    DataTableComponent.prototype.cellClick;
    /**
     * Data bound event handler.
     * Triggered after data bind.
     * @type {?}
     */
    DataTableComponent.prototype.dataBound;
    /**
     * Row bind event handler.
     * Trigger on each row data bind.
     * @type {?}
     */
    DataTableComponent.prototype.rowBind;
    /**
     * Column bind event handler.
     * Triggered after column data bind.
     * @type {?}
     */
    DataTableComponent.prototype.columnBind;
    /**
     * Cell bind event handler.
     * Triggered after data table cell data bind.
     * @type {?}
     */
    DataTableComponent.prototype.cellBind;
    /**
     * @type {?}
     * @private
     */
    DataTableComponent.prototype.dragAndDropService;
    /**
     * @type {?}
     * @private
     */
    DataTableComponent.prototype.dataTableStateService;
    /**
     * @type {?}
     * @private
     */
    DataTableComponent.prototype.globalRefService;
    /**
     * @type {?}
     * @private
     */
    DataTableComponent.prototype.eventStateService;
    /**
     * @type {?}
     * @private
     */
    DataTableComponent.prototype.dataTableResourceService;
    /**
     * @type {?}
     * @private
     */
    DataTableComponent.prototype.zone;
    /** @type {?} */
    DataTableComponent.prototype.dataStateService;
    /** @type {?} */
    DataTableComponent.prototype.scrollPositionService;
    /** @type {?} */
    DataTableComponent.prototype.config;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Data table body component. Data table body table definition rendering is handled by this component.
 */
class DataTableBodyComponent {
    /**
     * @param {?} config
     * @param {?} dataStateService
     * @param {?} eventStateService
     */
    constructor(config, dataStateService, eventStateService) {
        this.config = config;
        this.dataStateService = dataStateService;
        this.eventStateService = eventStateService;
    }
    /**
     * Unique data row tracking callback.
     * @param {?} index Current index.
     * @param {?} dataRow Data row object reference.
     * @return {?}
     */
    dataRowTrackBy(index, dataRow) {
        return dataRow.index;
    }
    /**
     * Odd row status; True if row index is a odd number.
     * @param {?} row Data row object.
     * @return {?} True if odd row.
     */
    isOddRow(row) {
        return row.index % 2 === 0;
    }
    /**
     * Even row status; True if row index is a even number.
     * @param {?} row Data row object.
     * @return {?} True if even row.
     */
    isEvenRow(row) {
        return row.index % 2 === 1;
    }
    /**
     * Odd substitute row status by row index; True if row index is an odd substitute row.
     * @param {?} index Row index.
     * @return {?} True if odd substitute row.
     */
    isOddSubstituteRow(index) {
        return (index + this.dataStateService.substituteRows.length) % 2 === 0;
    }
    /**
     * Even substitute row status by row index; True if row index is an even substitute row.
     * @param {?} index Row index.
     * @return {?} True if even substitute row.
     */
    isEvenSubstituteRow(index) {
        return (index + this.dataStateService.substituteRows.length) % 2 === 1;
    }
    /**
     * On row expand event handler.
     * @param {?} $event Click event argument reference.
     * @param {?} dataRow Data row object.
     * @return {?}
     */
    onRowExpand($event, dataRow) {
        dataRow.expanded = !dataRow.expanded;
        if (!this.config.showRowExpandLoadingSpinner) {
            dataRow.dataLoaded = true;
        }
    }
    /**
     * On row initialize event handler.
     * @param {?} dataRow Data table row.
     * @return {?}
     */
    onRowInit(dataRow) {
        this.eventStateService.rowBindStream.emit(dataRow);
    }
    /**
     * On cell initialize event handler.
     * @param {?} column Data table column component reference.
     * @param {?} row Data table row object.
     * @return {?}
     */
    onCellInit(column, row) {
        this.eventStateService.cellBindStream.emit({
            column,
            row
        });
    }
    /**
     * Cell clicked event handler.
     * @param {?} column Column data table component reference.
     * @param {?} row Data table row reference.
     * @param {?} event Mouse click event argument reference.
     * @return {?}
     */
    cellClicked(column, row, event) {
        this.eventStateService.cellClickStream.emit({ row, column, event });
    }
    /**
     * Get row span collection by data row.
     * @param {?} row Data row reference.
     * @return {?} Dummy row span collection.
     */
    getRowSpanCollection(row) {
        return Array.from({
            length: this.dataStateService.onDynamicRowSpanExtract(row)
        });
    }
    /**
     * Get total column count used for substitute row generation.
     * @return {?} Number of columns.
     */
    get totalColumnCount() {
        /** @type {?} */
        let count = 0;
        count += this.config.showIndexColumn ? 1 : 0;
        count += this.config.showRowSelectCheckboxColumn ? 1 : 0;
        count += this.config.expandableRows ? 1 : 0;
        this.columns.forEach((/**
         * @param {?} column
         * @return {?}
         */
        column => {
            count += column.visible ? 1 : 0;
        }));
        return count;
    }
    /**
     * On row select click event handler.
     * @param {?} row Data row reference.
     * @param {?} event Row click event.
     * @return {?}
     */
    onRowSelectClick(row, event) {
        // Prevent single mode checkbox getting unchecked on tapping already selected.
        if (this.config.selectMode === 'single') {
            /** @type {?} */
            const id = get(row.item, this.config.selectTrackBy);
            /** @type {?} */
            const previousSelection = this.dataStateService.selectedRow;
            if (previousSelection === id) {
                event.preventDefault();
                row.selected = true;
            }
        }
    }
    /**
     * On row selection change event handler.
     * @param {?} row Data row reference.
     * @return {?}
     */
    onRowSelectChange(row) {
        /** @type {?} */
        const id = get(row.item, this.config.selectTrackBy);
        switch (this.config.selectMode) {
            case 'multi': {
                /** @type {?} */
                const index = this.dataStateService.selectedRows.indexOf(id);
                if (row.selected && index < 0) {
                    this.dataStateService.selectedRows.push(id);
                }
                else if (!row.selected && index > -1) {
                    this.dataStateService.selectedRows.splice(index, 1);
                }
                /** @type {?} */
                const previousAllRowSelectedState = this.dataStateService.allRowSelected;
                this.dataStateService.allRowSelected = this.dataStateService.dataRows.every((/**
                 * @param {?} dataRow
                 * @return {?}
                 */
                (dataRow) => {
                    return dataRow.selected;
                }));
                this.eventStateService.rowSelectChangeStream.emit(this.dataStateService.selectedRows);
                if (previousAllRowSelectedState !== this.dataStateService.allRowSelected) {
                    this.eventStateService.allRowSelectChangeStream.emit(this.dataStateService.allRowSelected);
                }
                break;
            }
            case 'single_toggle': {
                if (row.selected) {
                    this.dataStateService.selectedRow = id;
                    // deselect all other row other rows
                    this.dataStateService.dataRows.forEach((/**
                     * @param {?} dataRow
                     * @return {?}
                     */
                    (dataRow) => {
                        if (dataRow !== row) {
                            dataRow.selected = false;
                        }
                    }));
                }
                else {
                    this.dataStateService.selectedRow = undefined;
                }
                this.eventStateService.rowSelectChangeStream.emit(this.dataStateService.selectedRow);
                break;
            }
            case 'single': {
                /** @type {?} */
                const previousSelection = this.dataStateService.selectedRow;
                this.dataStateService.selectedRow = id;
                row.selected = true;
                // deselect all other row other rows
                this.dataStateService.dataRows.forEach((/**
                 * @param {?} dataRow
                 * @return {?}
                 */
                (dataRow) => {
                    if (dataRow !== row) {
                        dataRow.selected = false;
                    }
                }));
                if (previousSelection !== id) {
                    this.eventStateService.rowSelectChangeStream.emit(this.dataStateService.selectedRow);
                }
                break;
            }
        }
    }
    /**
     * Row clicked event handler.
     * @param {?} row Data row object.
     * @param {?} event Mouse click event argument object.
     * @return {?}
     */
    rowClicked(row, event) {
        if (this.config.selectOnRowClick || (this.config.expandableRows && this.config.expandOnRowClick)) {
            /** @type {?} */
            const target = (/** @type {?} */ (event.target));
            if (target && target.classList && target.classList.contains('ng-ignore-propagation')) {
                return;
            }
            if (this.config.rowSelectable && this.config.selectOnRowClick) {
                row.selected = !row.selected;
                this.onRowSelectChange(row);
            }
            if (this.config.expandOnRowClick) {
                row.expanded = !row.expanded;
            }
        }
        this.eventStateService.rowClickStream.emit({ row, event });
    }
    /**
     * Row double clicked event handler.
     * @param {?} row Data row object.
     * @param {?} event Event Mouse click event argument object.
     * @return {?}
     */
    rowDoubleClicked(row, event) {
        this.eventStateService.rowDoubleClickStream.emit({ row, event });
    }
    /**
     * Get substitute row availability status.
     * @return {?} True if substitute rows are available.
     */
    get hasSubstituteRows() {
        return !this.config.loadOnScroll
            && this.config.showSubstituteRows
            && this.dataStateService.dataRows.length
            && !this.dataStateService.showNoDataOverlay;
    }
    /**
     * Get cell value by data field.
     * @param {?} row Data row reference.
     * @param {?} column Data table column component reference.
     * @return {?}
     */
    getFieldValue(row, column) {
        return get(row.item, column.field);
    }
    /**
     * Get row select checkbox display status.
     * @return {?} True if row selector checkbox should be displayed.
     */
    get showRowSelectCheckbox() {
        return this.config.rowSelectable && this.config.showRowSelectCheckbox;
    }
    /**
     * Get row expend view loading status. Used to display loading spinner on expand column while data fetching.
     * @param {?} row Data row object reference.
     * @return {?}
     */
    isRowExpanderLoading(row) {
        return row.expanded && !row.dataLoaded;
    }
}
DataTableBodyComponent.decorators = [
    { type: Component, args: [{
                exportAs: 'ngDataTableBody',
                // tslint:disable-next-line
                selector: '[ngDataTableBody]',
                template: "<ng-container *ngFor=\"let row of dataStateService.dataRows; trackBy: dataRowTrackBy; let i = index;\">\n  <ng-container *ngFor=\"let ignored of getRowSpanCollection(row); let rowSpanIndex = index; let rowSpanCount = count\">\n    <tr\n      class=\"ng-data-table-row\"\n      (ngInit)=\"onRowInit(row)\"\n      [attr.title]=\"row.tooltip\"\n      [class.row-odd]=\"isOddRow(row)\"\n      [class.row-even]=\"isEvenRow(row)\"\n      [class.selected]=\"row.selected\"\n      [class.clickable]=\"config.selectOnRowClick\"\n      [class.disabled]=\"row.disabled\"\n      [ngClass]=\"row.cssClass\"\n      (dblclick)=\"rowDoubleClicked(row, $event)\"\n      (click)=\"rowClicked(row, $event)\"\n    >\n      <td\n        class=\"ng-data-table-row-expand-button ng-ignore-propagation\"\n        [style.background-color]=\"row.color\"\n        *ngIf=\"config.expandableRows && !rowSpanIndex\"\n        (click)=\"onRowExpand($event, row)\"\n        [attr.rowspan]=\"rowSpanCount\"\n      >\n        <div [hidden]=\"config.showRowExpandLoadingSpinner && isRowExpanderLoading(row)\">\n          <span class=\"ng-data-table-expander-collapsed-icon ng-ignore-propagation\" *ngIf=\"!row.expanded\"></span>\n          <span class=\"ng-data-table-expander-expanded-icon ng-ignore-propagation\" *ngIf=\"row.expanded\"></span>\n        </div>\n        <ng-data-table-loading-spinner\n          *ngIf=\"config.showRowExpandLoadingSpinner\"\n          [loadingSpinnerTemplate]=\"rowExpandLoadingSpinnerTemplate\"\n          [isLoading]=\"isRowExpanderLoading(row)\"\n          [showOverlay]=\"false\"\n        >\n        </ng-data-table-loading-spinner>\n      </td>\n      <td\n        class=\"index-column\"\n        [style.background-color]=\"row.color\"\n        *ngIf=\"config.showIndexColumn && !rowSpanIndex\"\n        [textContent]=\"row.index\"\n        [attr.rowspan]=\"rowSpanCount\"\n      >\n      </td>\n      <td\n        class=\"ng-data-table-select-column\"\n        [style.background-color]=\"row.color\"\n        *ngIf=\"showRowSelectCheckbox && !rowSpanIndex\"\n        [attr.rowspan]=\"rowSpanCount\"\n      >\n        <div class=\"ng-data-table-checkbox-container ng-ignore-propagation\">\n          <input class=\"ng-data-table-checkbox-input ng-ignore-propagation\" type=\"checkbox\"\n            [id]=\"dataStateService.getUniqueId('dr', i)\"\n            [(ngModel)]=\"row.selected\"\n            (click)=\"onRowSelectClick(row, $event)\"\n            (change)=\"onRowSelectChange(row)\"\n          />\n          <label class=\"ng-ignore-propagation\" [for]=\"dataStateService.getUniqueId('dr', i)\"></label>\n        </div>\n      </td>\n      <ng-container *ngFor=\"let column of columns\">\n        <ng-container *ngIf=\"column.visible\">\n          <td\n            class=\"ng-data-table-data-column\"\n            *ngIf=\"!column.cellTemplate && !rowSpanIndex\"\n            (ngInit)=\"onCellInit(column, row)\"\n            [ngClass]=\"column.cssClass\"\n            [attr.rowspan]=\"rowSpanCount\"\n            [style.background-color]=\"column.getCellColor(row) || row.color\"\n            (click)=\"cellClicked(column, row, $event)\"\n          >\n            <span>{{ getFieldValue(row, column) }}</span>\n          </td>\n          <ng-container\n            *ngIf=\"column.cellTemplate\"\n            [ngTemplateOutlet]=\"column.cellTemplate\"\n            [ngTemplateOutletContext]=\"{ column: column, row: row, spanIndex: rowSpanIndex, rowSpan: rowSpanCount }\"\n          >\n          </ng-container>\n        </ng-container>\n      </ng-container>\n    </tr>\n  </ng-container>\n  <tr *ngIf=\"config.expandableRows\" [hidden]=\"!row.expanded\" class=\"ng-data-table-row-expansion\">\n    <td [attr.colspan]=\"totalColumnCount\">\n      <ng-container [ngTemplateOutlet]=\"rowExpandTemplate\" [ngTemplateOutletContext]=\"{ row: row }\"> </ng-container>\n    </td>\n  </tr>\n</ng-container>\n<ng-container *ngIf=\"hasSubstituteRows\">\n  <tr\n    *ngFor=\"let ignored of dataStateService.substituteRows; let index = index\"\n    [class.row-odd]=\"isOddSubstituteRow(index)\"\n    [class.row-even]=\"isEvenSubstituteRow(index)\"\n  >\n    <td *ngIf=\"config.expandableRows\">&nbsp;</td>\n    <td *ngIf=\"config.showIndexColumn\">&nbsp;</td>\n    <td *ngIf=\"showRowSelectCheckbox\">&nbsp;</td>\n    <ng-container *ngFor=\"let column of columns\">\n      <td *ngIf=\"column.visible\">&nbsp;</td>\n    </ng-container>\n  </tr>\n</ng-container>\n"
            }] }
];
/** @nocollapse */
DataTableBodyComponent.ctorParameters = () => [
    { type: DataTableConfigService },
    { type: DataTableDataStateService },
    { type: DataTableEventStateService }
];
DataTableBodyComponent.propDecorators = {
    columns: [{ type: Input }],
    rowExpandTemplate: [{ type: Input }],
    rowExpandLoadingSpinnerTemplate: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    DataTableBodyComponent.prototype.columns;
    /** @type {?} */
    DataTableBodyComponent.prototype.rowExpandTemplate;
    /** @type {?} */
    DataTableBodyComponent.prototype.rowExpandLoadingSpinnerTemplate;
    /** @type {?} */
    DataTableBodyComponent.prototype.config;
    /** @type {?} */
    DataTableBodyComponent.prototype.dataStateService;
    /**
     * @type {?}
     * @private
     */
    DataTableBodyComponent.prototype.eventStateService;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * No data body component. Used to display no data message when data not available.
 */
class DataTableNoDataBodyComponent {
    /**
     * @param {?} config
     * @param {?} eventStateService
     */
    constructor(config, eventStateService) {
        this.config = config;
        this.eventStateService = eventStateService;
    }
    /**
     * Reset all applied filters.
     * @return {?}
     */
    resetFilters() {
        this.eventStateService.dataFetchStream.emit(DataFetchMode.HARD_RELOAD);
    }
    /**
     * Get default no data template display status.
     * @return {?} True if default no data template should be displayed.
     */
    get showDefaultNoDataTemplate() {
        return !!(!this.noRecordsTemplate && this.config.translations.noDataMessage);
    }
}
DataTableNoDataBodyComponent.decorators = [
    { type: Component, args: [{
                selector: 'ng-data-table-no-data-body',
                template: "<div class=\"ng-data-table-no-records-message\" *ngIf=\"showDefaultNoDataTemplate\">\n  <h1 class=\"ng-data-table-no-records-main-heading-message\">{{ config.translations.noDataMessage.header }}</h1>\n  <h2 class=\"ng-data-table-no-records-sub-heading-message\">{{ config.translations.noDataMessage.body }}</h2>\n  <button (click)=\"resetFilters()\" class=\"ng-data-table-no-records-message-button\">Reload Data</button>\n</div>\n<ng-template *ngIf=\"noRecordsTemplate\" [ngTemplateOutlet]=\"noRecordsTemplate\"></ng-template>\n"
            }] }
];
/** @nocollapse */
DataTableNoDataBodyComponent.ctorParameters = () => [
    { type: DataTableConfigService },
    { type: DataTableEventStateService }
];
DataTableNoDataBodyComponent.propDecorators = {
    noRecordsTemplate: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    DataTableNoDataBodyComponent.prototype.noRecordsTemplate;
    /** @type {?} */
    DataTableNoDataBodyComponent.prototype.config;
    /** @type {?} */
    DataTableNoDataBodyComponent.prototype.eventStateService;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Data table header component. Render data table column title and filter header rows.
 */
class DataTableHeadComponent {
    /**
     * Get filter column availability status.
     * @return {?} True if there is at least one filter column.
     */
    get hasFilterColumns() {
        return this.columns.some((/**
         * @param {?} column
         * @return {?}
         */
        (column) => column.filterable));
    }
}
DataTableHeadComponent.decorators = [
    { type: Component, args: [{
                exportAs: 'ngDataTableHead',
                // tslint:disable-next-line
                selector: '[ngDataTableHead]',
                template: "<tr ngDataTableColumnTitleHeader [columns]=\"columns\"></tr>\n<tr *ngIf=\"hasFilterColumns\" ngDataTableColumnFilterHeader [columns]=\"columns\"></tr>\n"
            }] }
];
DataTableHeadComponent.propDecorators = {
    columns: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    DataTableHeadComponent.prototype.columns;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Data loading spinner component. Displayed within table body while fetching data.
 */
class DataTableLoadingSpinnerComponent {
    /**
     * @param {?} config
     * @param {?} dataStateService
     */
    constructor(config, dataStateService) {
        this.config = config;
        this.dataStateService = dataStateService;
    }
}
DataTableLoadingSpinnerComponent.decorators = [
    { type: Component, args: [{
                selector: 'ng-data-table-loading-spinner',
                template: "<div class=\"ng-data-table-loading-spinner\" [hidden]=\"!isLoading\">\n  <div *ngIf=\"loadingSpinnerTemplate\" class=\"ng-data-table-loading-cover\">\n    <div [ngTemplateOutlet]=\"loadingSpinnerTemplate\"></div>\n  </div>\n  <div class=\"ng-data-table-loading-cover\" [class.ng-data-table-show-overlay]=\"showOverlay\" *ngIf=\"!loadingSpinnerTemplate\">\n    <div class=\"ng-data-table-loading-animation\"></div>\n  </div>\n</div>\n"
            }] }
];
/** @nocollapse */
DataTableLoadingSpinnerComponent.ctorParameters = () => [
    { type: DataTableConfigService },
    { type: DataTableDataStateService }
];
DataTableLoadingSpinnerComponent.propDecorators = {
    loadingSpinnerTemplate: [{ type: Input }],
    isLoading: [{ type: Input }],
    showOverlay: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    DataTableLoadingSpinnerComponent.prototype.loadingSpinnerTemplate;
    /** @type {?} */
    DataTableLoadingSpinnerComponent.prototype.isLoading;
    /** @type {?} */
    DataTableLoadingSpinnerComponent.prototype.showOverlay;
    /** @type {?} */
    DataTableLoadingSpinnerComponent.prototype.config;
    /** @type {?} */
    DataTableLoadingSpinnerComponent.prototype.dataStateService;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Scroll position directive.
 * Track current scroll position of target element.
 */
class ScrollPositionDirective {
    /**
     * @param {?} el
     * @param {?} zone
     */
    constructor(el, zone) {
        this.el = el;
        this.zone = zone;
    }
    /**
     * After component initialize lifecycle event handler.
     * @return {?}
     */
    ngAfterViewInit() {
        this.zone.runOutsideAngular((/**
         * @return {?}
         */
        () => {
            this.scrollEventSubscription = fromEvent(this.el.nativeElement, 'scroll')
                .pipe(map((/**
             * @return {?}
             */
            () => {
                return {
                    scrollLeft: this.el.nativeElement.scrollLeft,
                    scrollTop: this.el.nativeElement.scrollTop,
                    scrollHeight: this.el.nativeElement.scrollHeight,
                    scrollWidth: this.el.nativeElement.scrollWidth,
                    clientHeight: this.el.nativeElement.clientHeight,
                    clientWidth: this.el.nativeElement.clientWidth,
                };
            })), pairwise(), map((/**
             * @param {?} pair
             * @return {?}
             */
            (pair) => {
                const [previous, current] = pair;
                return Object.assign({}, current, { isHorizontal: previous.scrollLeft !== current.scrollLeft, isVertical: previous.scrollTop !== current.scrollTop });
            })))
                .subscribe((/**
             * @param {?} pos
             * @return {?}
             */
            (pos) => {
                this.ngScrollPosition.next(pos);
            }));
        }));
    }
    /**
     * Component destroy lifecycle event handler.
     * @return {?}
     */
    ngOnDestroy() {
        if (this.scrollEventSubscription) {
            this.scrollEventSubscription.unsubscribe();
        }
        this.ngScrollPosition.complete();
    }
}
ScrollPositionDirective.decorators = [
    { type: Directive, args: [{
                selector: '[ngScrollPosition]'
            },] }
];
/** @nocollapse */
ScrollPositionDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: NgZone }
];
ScrollPositionDirective.propDecorators = {
    ngScrollPosition: [{ type: Input }]
};
if (false) {
    /**
     * @type {?}
     * @private
     */
    ScrollPositionDirective.prototype.scrollEventSubscription;
    /** @type {?} */
    ScrollPositionDirective.prototype.ngScrollPosition;
    /**
     * @type {?}
     * @private
     */
    ScrollPositionDirective.prototype.el;
    /**
     * @type {?}
     * @private
     */
    ScrollPositionDirective.prototype.zone;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Scroll element directive.
 * Used to set scroll position to target element.
 */
class ScrollElementDirective {
    /**
     * @param {?} el
     */
    constructor(el) {
        this.el = el;
    }
    /**
     * After component initialize lifecycle event handler.
     * @return {?}
     */
    ngAfterViewInit() {
        this.scrollPositionSubscription = this.ngScrollElement.subscribe((/**
         * @param {?} value
         * @return {?}
         */
        value => {
            this.el.nativeElement.scrollLeft = value.scrollLeft;
        }));
    }
    /**
     * Component destroy lifecycle event handler.
     * @return {?}
     */
    ngOnDestroy() {
        if (this.scrollPositionSubscription) {
            this.scrollPositionSubscription.unsubscribe();
        }
    }
}
ScrollElementDirective.decorators = [
    { type: Directive, args: [{
                selector: '[ngScrollElement]'
            },] }
];
/** @nocollapse */
ScrollElementDirective.ctorParameters = () => [
    { type: ElementRef }
];
ScrollElementDirective.propDecorators = {
    ngScrollElement: [{ type: Input }]
};
if (false) {
    /**
     * @type {?}
     * @private
     */
    ScrollElementDirective.prototype.scrollPositionSubscription;
    /** @type {?} */
    ScrollElementDirective.prototype.ngScrollElement;
    /**
     * @type {?}
     * @private
     */
    ScrollElementDirective.prototype.el;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Element width directive.
 * Used to emit target element width after view init.
 */
class ElementWidthDirective {
    /**
     * @param {?} el
     */
    constructor(el) {
        this.el = el;
        this.ngElementWidth = new EventEmitter();
    }
    /**
     * After component view initialize lifecycle event handler.
     * @return {?}
     */
    ngAfterViewInit() {
        this.ngElementWidth.emit(this.el.nativeElement.clientWidth);
    }
}
ElementWidthDirective.decorators = [
    { type: Directive, args: [{
                selector: '[ngElementWidth]'
            },] }
];
/** @nocollapse */
ElementWidthDirective.ctorParameters = () => [
    { type: ElementRef }
];
ElementWidthDirective.propDecorators = {
    ngElementWidth: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    ElementWidthDirective.prototype.ngElementWidth;
    /**
     * @type {?}
     * @private
     */
    ElementWidthDirective.prototype.el;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const DROPDOWN_CONFIG = new InjectionToken('dropdownConfig');
/**
 * Dropdown config service. Holds all the global configurations of dropdown which can be overridden while importing the module.
 * Used to manage dropdown base configuration state.
 */
class DropdownConfigService {
    /**
     * @param {?} dropdownConfig
     */
    constructor(dropdownConfig) {
        this.dropdownConfig = dropdownConfig;
        this.baseTranslations = {
            noDataMessage: 'No Results Available',
            filterPlaceholder: 'Search',
            selectedOptionWrapPlaceholder: 'Options',
            selectPlaceholder: 'Select'
        };
        this.selectTrackBy = 'key';
        this.displayTrackBy = 'value';
        this.disabledTrackBy = 'disabled';
        this.menuPosition = 'bottom-left';
        this.selectMode = 'single-toggle';
        this.filterable = false;
        this.filterDebounce = true;
        this.filterDebounceTime = 500;
        this.groupByField = undefined;
        this.wrapDisplaySelectLimit = undefined;
        this.showSelectedOptionRemoveButton = false;
        this.showClearSelectionButton = false;
        this.menuWidth = 320;
        this.menuHeight = 250;
        this.loadOnScroll = false;
        this.loadViewDistanceRatio = 1;
        this.limit = 15;
        this.loadDataOnInit = true;
        this.closeMenuOnSelect = false;
        this.showOptionSelectCheckbox = false;
        this.showOptionIndex = false;
        this.showOptionTrackBy = false;
        this.multiSelectOptionMaxWidth = 135;
        this.setFirstOptionSelected = false;
        this.triggerSelectChangeOnInit = false;
        this.triggerSelectChangeOnModelUpdate = false;
        this.triggerSelectChangeOnFirstOptionSelect = false;
        this.dynamicDimensionCalculation = false;
        this.dynamicWidthRatio = 1;
        this.dynamicHeightRatio = 0.5;
        this.relativeParentElement = undefined;
        if (dropdownConfig) {
            Object.assign(this, dropdownConfig);
        }
    }
    /**
     * Set dropdown translations.
     * @param {?} value Dropdown translations object.
     * @return {?}
     */
    set translations(value) {
        this.baseTranslations = Object.assign({}, this.baseTranslations, value);
    }
    /**
     * Get dropdown translations.
     * @return {?} Dropdown translations.
     */
    get translations() {
        return this.baseTranslations;
    }
    /**
     * Get display text by source option.
     * @param {?} option Source option object.
     * @return {?} Display text.
     */
    getDisplayText(option) {
        return get(option, this.displayTrackBy);
    }
}
DropdownConfigService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
DropdownConfigService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [DROPDOWN_CONFIG,] }] }
];
if (false) {
    /** @type {?} */
    DropdownConfigService.prototype.baseTranslations;
    /** @type {?} */
    DropdownConfigService.prototype.selectTrackBy;
    /** @type {?} */
    DropdownConfigService.prototype.displayTrackBy;
    /** @type {?} */
    DropdownConfigService.prototype.disabledTrackBy;
    /** @type {?} */
    DropdownConfigService.prototype.menuPosition;
    /** @type {?} */
    DropdownConfigService.prototype.selectMode;
    /** @type {?} */
    DropdownConfigService.prototype.filterable;
    /** @type {?} */
    DropdownConfigService.prototype.filterDebounce;
    /** @type {?} */
    DropdownConfigService.prototype.filterDebounceTime;
    /** @type {?} */
    DropdownConfigService.prototype.groupByField;
    /** @type {?} */
    DropdownConfigService.prototype.wrapDisplaySelectLimit;
    /** @type {?} */
    DropdownConfigService.prototype.showSelectedOptionRemoveButton;
    /** @type {?} */
    DropdownConfigService.prototype.showClearSelectionButton;
    /** @type {?} */
    DropdownConfigService.prototype.menuWidth;
    /** @type {?} */
    DropdownConfigService.prototype.menuHeight;
    /** @type {?} */
    DropdownConfigService.prototype.loadOnScroll;
    /** @type {?} */
    DropdownConfigService.prototype.loadViewDistanceRatio;
    /** @type {?} */
    DropdownConfigService.prototype.limit;
    /** @type {?} */
    DropdownConfigService.prototype.loadDataOnInit;
    /** @type {?} */
    DropdownConfigService.prototype.closeMenuOnSelect;
    /** @type {?} */
    DropdownConfigService.prototype.showOptionSelectCheckbox;
    /** @type {?} */
    DropdownConfigService.prototype.showOptionIndex;
    /** @type {?} */
    DropdownConfigService.prototype.showOptionTrackBy;
    /** @type {?} */
    DropdownConfigService.prototype.multiSelectOptionMaxWidth;
    /** @type {?} */
    DropdownConfigService.prototype.setFirstOptionSelected;
    /** @type {?} */
    DropdownConfigService.prototype.triggerSelectChangeOnInit;
    /** @type {?} */
    DropdownConfigService.prototype.triggerSelectChangeOnModelUpdate;
    /** @type {?} */
    DropdownConfigService.prototype.triggerSelectChangeOnFirstOptionSelect;
    /** @type {?} */
    DropdownConfigService.prototype.dynamicDimensionCalculation;
    /** @type {?} */
    DropdownConfigService.prototype.dynamicWidthRatio;
    /** @type {?} */
    DropdownConfigService.prototype.dynamicHeightRatio;
    /** @type {?} */
    DropdownConfigService.prototype.relativeParentElement;
    /**
     * @type {?}
     * @private
     */
    DropdownConfigService.prototype.dropdownConfig;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Dropdown data state service; Manage dropdown state data.
 */
class DropdownDataStateService {
    constructor() {
        this.dataLoading = false;
        this.selectedOptions = [];
        this.offset = 0;
        this.currentOptionCount = 0;
        this.dropdownOptions = [];
        this.dropdownOptionGroups = [];
        this.filterText = '';
        this.disabled = false;
    }
    /**
     * Get dropdown option unique id.
     * @param {?} append Target identifier.
     * @param {?} index Target index.
     * @return {?}
     */
    getUniqueId(append, index) {
        return `${this.id}-chk-${append}-${index}`;
    }
}
DropdownDataStateService.decorators = [
    { type: Injectable }
];
if (false) {
    /** @type {?} */
    DropdownDataStateService.prototype.id;
    /** @type {?} */
    DropdownDataStateService.prototype.dataLoading;
    /** @type {?} */
    DropdownDataStateService.prototype.selectedOption;
    /** @type {?} */
    DropdownDataStateService.prototype.selectedOptions;
    /** @type {?} */
    DropdownDataStateService.prototype.offset;
    /** @type {?} */
    DropdownDataStateService.prototype.totalOptionCount;
    /** @type {?} */
    DropdownDataStateService.prototype.currentOptionCount;
    /** @type {?} */
    DropdownDataStateService.prototype.dropdownOptions;
    /** @type {?} */
    DropdownDataStateService.prototype.dropdownOptionGroups;
    /** @type {?} */
    DropdownDataStateService.prototype.filterText;
    /** @type {?} */
    DropdownDataStateService.prototype.disabled;
    /** @type {?} */
    DropdownDataStateService.prototype.componentLoaderRef;
    /** @type {?} */
    DropdownDataStateService.prototype.dropdownOptionTemplate;
    /** @type {?} */
    DropdownDataStateService.prototype.dropdownOptionGroupHeaderTemplate;
    /** @type {?} */
    DropdownDataStateService.prototype.onDataBind;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Dropdown event state service; Manage dropdown event handler state.
 */
class DropdownEventStateService {
    constructor() {
        this.dataFetchStream = new EventEmitter();
        this.dataBoundStream = new EventEmitter();
        this.selectChangeStream = new EventEmitter();
        this.initStream = new EventEmitter();
        this.staticDataSourceStream = new ReplaySubject(1);
    }
}
DropdownEventStateService.decorators = [
    { type: Injectable }
];
if (false) {
    /** @type {?} */
    DropdownEventStateService.prototype.dataFetchStream;
    /** @type {?} */
    DropdownEventStateService.prototype.dataBoundStream;
    /** @type {?} */
    DropdownEventStateService.prototype.selectChangeStream;
    /** @type {?} */
    DropdownEventStateService.prototype.initStream;
    /** @type {?} */
    DropdownEventStateService.prototype.staticDataSourceStream;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Dropdown options list view component
 */
class DropdownViewComponent {
    /**
     * @param {?} config
     * @param {?} dataStateService
     * @param {?} eventStateService
     */
    constructor(config, dataStateService, eventStateService) {
        this.config = config;
        this.dataStateService = dataStateService;
        this.eventStateService = eventStateService;
        this.scrollEvent = new Subject();
    }
    /**
     * Lifecycle hook that is called when component is initialized.
     * @return {?}
     */
    ngOnInit() {
        this.scrollEventSubscription = this.scrollEvent.pipe(debounceTime(100)).subscribe((/**
         * @param {?} event
         * @return {?}
         */
        (event) => {
            this.checkScrollPosition(event);
        }));
    }
    /**
     * Lifecycle hook that is called when component is destroyed.
     * @return {?}
     */
    ngOnDestroy() {
        if (this.scrollEventSubscription) {
            this.scrollEventSubscription.unsubscribe();
        }
    }
    /**
     * Performs data loading when scrolling when scroll threshold is met. This will be trigger only when load on scroll is enabled.
     * @param {?} event Target event arguments reference.
     * @return {?}
     */
    checkScrollPosition(event) {
        /** @type {?} */
        const scrollTop = event.target.scrollTop;
        /** @type {?} */
        const scrollHeight = event.target.scrollHeight;
        /** @type {?} */
        const scrollElementHeight = event.target.clientHeight;
        /** @type {?} */
        const roundingPixel = 1;
        /** @type {?} */
        const gutterPixel = 1;
        if (scrollTop >= scrollHeight - (1 + this.config.loadViewDistanceRatio) * scrollElementHeight - roundingPixel - gutterPixel &&
            this.dataStateService.currentOptionCount < this.dataStateService.totalOptionCount &&
            !this.dataStateService.dataLoading) {
            this.dataStateService.dataLoading = true;
            this.dataStateService.offset = this.dataStateService.offset + this.config.limit;
            this.eventStateService.dataFetchStream.emit(false);
        }
    }
}
DropdownViewComponent.decorators = [
    { type: Component, args: [{
                selector: 'ng-dropdown-view',
                template: "<div class=\"ng-dropdown-menu-wrapper\"\n  [class.ng-dropdown-option-list]=\"!this.config.filterable\"\n  [style.width]=\"config.menuWidth | ngPx\"\n  [style.height]=\"config.menuHeight | ngPx\">\n  <div class=\"ng-dropdown-filter-wrapper\" *ngIf=\"config.filterable\">\n    <ng-dropdown-filter></ng-dropdown-filter>\n  </div>\n  <div class=\"ng-dropdown-option-container-wrapper\" (scroll)=\"config.loadOnScroll ? scrollEvent.next($event) : null\">\n    <ng-dropdown-options></ng-dropdown-options>\n  </div>\n</div>\n"
            }] }
];
/** @nocollapse */
DropdownViewComponent.ctorParameters = () => [
    { type: DropdownConfigService },
    { type: DropdownDataStateService },
    { type: DropdownEventStateService }
];
if (false) {
    /** @type {?} */
    DropdownViewComponent.prototype.scrollEvent;
    /**
     * @type {?}
     * @private
     */
    DropdownViewComponent.prototype.scrollEventSubscription;
    /** @type {?} */
    DropdownViewComponent.prototype.config;
    /** @type {?} */
    DropdownViewComponent.prototype.dataStateService;
    /**
     * @type {?}
     * @private
     */
    DropdownViewComponent.prototype.eventStateService;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Dropdown resource service. Dropdown client side data query is handled via this service.
 * @template T
 */
class DropdownResourceService {
    /**
     * Set source data source.
     * @param {?} dataSource Data source observable.
     * @return {?}
     */
    setDataSource(dataSource) {
        this.dispose();
        if (this.optionDataStream && !this.optionDataStream.closed) {
            this.optionDataStream.complete();
        }
        this.optionDataStream = new ReplaySubject(1);
        this.dataSourceSubscription = dataSource.subscribe((/**
         * @param {?} options
         * @return {?}
         */
        (options) => {
            this.optionDataStream.next(options);
        }));
    }
    /**
     * Query data.
     * @param {?} params Dropdown request parameters.
     * @return {?}
     */
    query(params) {
        return this.optionDataStream.pipe(switchMap((/**
         * @param {?} options
         * @return {?}
         */
        (options) => {
            /** @type {?} */
            let result = options.slice();
            if (params.filter && params.filter.value) {
                /** @type {?} */
                const value = String(params.filter.value).toLowerCase();
                result = result.filter((/**
                 * @param {?} option
                 * @return {?}
                 */
                (option) => {
                    /** @type {?} */
                    const key = String(get(option, params.filter.key)).toLowerCase();
                    return key.includes(value);
                }));
            }
            if (params.offset !== undefined) {
                /** @type {?} */
                const offset = params.offset + 1 > result.length ? 0 : params.offset;
                if (params.limit === undefined) {
                    result = result.slice(offset, result.length);
                }
                else {
                    result = result.slice(offset, offset + params.limit);
                }
            }
            return of({
                options: result,
                count: options.length
            });
        })));
    }
    /**
     * Dispose data source.
     * @return {?}
     */
    dispose() {
        if (this.dataSourceSubscription) {
            this.dataSourceSubscription.unsubscribe();
            this.dataSourceSubscription = null;
        }
        if (this.optionDataStream && !this.optionDataStream.closed) {
            this.optionDataStream.complete();
        }
    }
}
DropdownResourceService.decorators = [
    { type: Injectable }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    DropdownResourceService.prototype.optionDataStream;
    /**
     * @type {?}
     * @private
     */
    DropdownResourceService.prototype.dataSourceSubscription;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Dropdown main component.
 */
class DropdownComponent {
    /**
     * @param {?} componentLoaderFactory
     * @param {?} injector
     * @param {?} eventStateService
     * @param {?} dropdownResourceService
     * @param {?} renderer
     * @param {?} dataStateService
     * @param {?} config
     */
    constructor(componentLoaderFactory, injector, eventStateService, dropdownResourceService, renderer, dataStateService, config) {
        this.componentLoaderFactory = componentLoaderFactory;
        this.injector = injector;
        this.eventStateService = eventStateService;
        this.dropdownResourceService = dropdownResourceService;
        this.renderer = renderer;
        this.dataStateService = dataStateService;
        this.config = config;
        this.dataStateService.componentLoaderRef = this.componentLoaderFactory.createLoader(this.renderer);
        this.dataBound = this.eventStateService.dataBoundStream;
        this.selectChange = this.eventStateService.selectChangeStream;
        this.init = this.eventStateService.initStream;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set optionTemplate(value) {
        this.dataStateService.dropdownOptionTemplate = value;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set optionGroupHeaderTemplate(value) {
        this.dataStateService.dropdownOptionGroupHeaderTemplate = value;
    }
    // Input - Event handlers
    /**
     * Set data bind callback. This handler is fired on each data fetch request.
     * @param {?} value
     * @return {?}
     */
    set onDataBind(value) {
        this.dataStateService.onDataBind = value;
    }
    // Inputs
    /**
     * Set dropdown loading spinner template reference object. Used by data table component to explicitly pass the template reference.
     * @param {?} value
     * @return {?}
     */
    set loadingSpinnerTemplateRef(value) {
        this.loadingSpinnerTemplate = value;
    }
    /**
     * Set dropdown option template reference. Used by data table component to explicitly pass the template reference.
     * @param {?} value
     * @return {?}
     */
    set optionTemplateRef(value) {
        this.optionTemplate = value;
    }
    /**
     * Set dropdown options group header template reference. Used by data table component to explicitly pass the template reference.
     * @param {?} value
     * @return {?}
     */
    set optionGroupHeaderTemplateRef(value) {
        this.optionGroupHeaderTemplate = value;
    }
    /**
     * Set static dropdown options collection. No need to set data source when static options collection is provided.
     * @param {?} value
     * @return {?}
     */
    set options(value) {
        if (!value) {
            return;
        }
        this.eventStateService.staticDataSourceStream.next(value);
    }
    /**
     * Set data source observable. This observable is used to retrieve dropdown options for data binding.
     * @param {?} source
     * @return {?}
     */
    set dataSource(source) {
        this.initDataSource(source);
    }
    /**
     * Set dropdown unique identifier.
     * @param {?} value
     * @return {?}
     */
    set id(value) {
        if (!ValidatorService.idPatternValidatorExpression.test(value)) {
            throw Error('Invalid [id] input value. Unique identifier parameter only accept string begin with a letter ([A-Za-z]) and may be followed by any number of letters, digits ([0-9]), hyphens ("-"), underscores ("_").');
        }
        this.dataStateService.id = value;
    }
    /**
     * Set translation data object. Used to localize table static label text.
     * @param {?} value
     * @return {?}
     */
    set translations(value) {
        this.config.translations = value;
    }
    /**
     * Set select option track by field path which is used to uniquely identify options for selection tracking.
     * This field support object paths expressions 'root[0].nest'.
     * @param {?} value
     * @return {?}
     */
    set selectTrackBy(value) {
        this.config.selectTrackBy = value;
    }
    /**
     * Set display value track by field path which is used to extract dropdown option display value.
     * This field support object paths expressions 'root[0].nest'.
     * @param {?} value
     * @return {?}
     */
    set displayTrackBy(value) {
        this.config.displayTrackBy = value;
    }
    /**
     * Set options group field path which is used to group the dropdown options.
     * This field support object paths expressions 'root[0].nest'.
     * @param {?} value
     * @return {?}
     */
    set groupByField(value) {
        this.config.groupByField = value;
    }
    /**
     * Set dropdown option disable state field path which is used to disabled state dropdown options.
     * This field support object paths expressions 'root[0].nest'.
     * @param {?} value
     * @return {?}
     */
    set disabledTrackBy(value) {
        this.config.disabledTrackBy = value;
    }
    /**
     * Set selected options collection. These options will be set selected by default on initial load.
     * Applicable only when multi select mode is enabled.
     * @param {?} value
     * @return {?}
     */
    set selectedOptions(value) {
        this.dataStateService.selectedOptions = value || [];
    }
    /**
     * Set selected option. This option is selected by default on initial load.
     * Applicable only when single select mode is enabled.
     * @param {?} value
     * @return {?}
     */
    set selectedOption(value) {
        this.dataStateService.selectedOption = value;
    }
    /**
     * Set number of options to fetch on scroll to bottom action when load on scroll mode is enabled.
     * @param {?} value
     * @return {?}
     */
    set limit(value) {
        this.config.limit = value;
    }
    /**
     * Set wrap selected options in dropdown view and show the number of options selected instead when
     * limit is met or exceeded. Applicable only when multi select mode is enabled.
     * @param {?} value
     * @return {?}
     */
    set wrapDisplaySelectLimit(value) {
        this.config.wrapDisplaySelectLimit = value;
    }
    /**
     * Set infinite scrollable state to load data on demand with scroll motion. Dropdown data fetch call is
     * initiated with limit and offset when user scroll to bottom hence loading the full data set on init.
     * @param {?} value
     * @return {?}
     */
    set loadOnScroll(value) {
        this.config.loadOnScroll = value;
    }
    /**
     * Set view height ratio to trigger data fetch with infinite scrollable mode.
     * Higher ratio will will increase the scroll sensitivity.
     * @param {?} value
     * @return {?}
     */
    set loadViewDistanceRatio(value) {
        this.config.loadViewDistanceRatio = value;
    }
    /**
     * Set option select mode.
     * - 'multi' : Support selecting multiple options.
     * - 'single' : Support selecting a single option from options collection.
     * - 'single-toggle' : Support selecting a single option from options collection. Selection can not be removed but
     * only toggled by tapping on another option.
     * @param {?} value
     * @return {?}
     */
    set selectMode(value) {
        this.config.selectMode = value;
    }
    /**
     * Show dropdown option search filter text-box if true.
     * @param {?} value
     * @return {?}
     */
    set filterable(value) {
        this.config.filterable = value;
    }
    /**
     * Set default filter value to be applied on initial load. All options are displayed when filter text value is
     * empty string. Applicable only when dropdown is filterable.
     * @param {?} value
     * @return {?}
     */
    set filterText(value) {
        this.dataStateService.filterText = value;
    }
    /**
     * Set time based filter debounce to optimize performance and avoid request flooding by reducing the filter
     * request frequency if true. Applicable only when dropdown filterable state is enabled.
     * @param {?} value
     * @return {?}
     */
    set filterDebounce(value) {
        this.config.filterDebounce = value;
    }
    /**
     * Set filter debounce time in milliseconds. Applicable only when searchDebounce is true.
     * @param {?} value
     * @return {?}
     */
    set filterDebounceTime(value) {
        this.config.filterDebounceTime = value;
    }
    /**
     * Set load data on component initialize if true.
     * @param {?} value
     * @return {?}
     */
    set loadDataOnInit(value) {
        this.config.loadDataOnInit = value;
    }
    /**
     * Show selected option remove button if true.
     * Applicable only when multi select mode ios enabled.
     * @param {?} value
     * @return {?}
     */
    set showSelectedOptionRemoveButton(value) {
        this.config.showSelectedOptionRemoveButton = value;
    }
    /**
     * Set show all select options clear button if true.
     * Applicable only when multi select mode ios enabled.
     * @param {?} value
     * @return {?}
     */
    set showClearSelectionButton(value) {
        this.config.showClearSelectionButton = value;
    }
    /**
     * Set options menu width in pixels.
     * @param {?} value
     * @return {?}
     */
    set menuWidth(value) {
        this.config.menuWidth = value;
    }
    /**
     * Set options menu height in pixels.
     * @param {?} value
     * @return {?}
     */
    set menuHeight(value) {
        this.config.menuHeight = value;
    }
    /**
     * Set popup options menu display position relative to dropdown component.
     * Support 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' values.
     * @param {?} value
     * @return {?}
     */
    set menuPosition(value) {
        this.config.menuPosition = value;
    }
    /**
     * Set dropdown view disabled state.
     * @param {?} value
     * @return {?}
     */
    set disabled(value) {
        this.dataStateService.disabled = value;
    }
    /**
     * Set Close dropdown menu on option select if true.
     * @param {?} value
     * @return {?}
     */
    set closeMenuOnSelect(value) {
        this.config.closeMenuOnSelect = value;
    }
    /**
     * Set show dropdown option select checkbox if true.
     * @param {?} value
     * @return {?}
     */
    set showOptionSelectCheckbox(value) {
        this.config.showOptionSelectCheckbox = value;
    }
    /**
     * Set show dropdown option index checkbox if true.
     * @param {?} value
     * @return {?}
     */
    set showOptionIndex(value) {
        this.config.showOptionIndex = value;
    }
    /**
     * Set show dropdown option TrackBy id checkbox if true.
     * @param {?} value
     * @return {?}
     */
    set showOptionTrackBy(value) {
        this.config.showOptionTrackBy = value;
    }
    /**
     * Multi select option selected item maximum width. Apply ellipsis when selected option display text
     * exceed the max width.
     * @param {?} value
     * @return {?}
     */
    set multiSelectOptionMaxWidth(value) {
        this.config.multiSelectOptionMaxWidth = value;
    }
    /**
     * Set first dropdown option selected on data fetch if true.
     * @param {?} value
     * @return {?}
     */
    set setFirstOptionSelected(value) {
        this.config.setFirstOptionSelected = value;
    }
    /**
     * Trigger select change event on init if true.
     * Can be used to enable selectedOptions or selectedOption associated change trigger.
     * @param {?} value
     * @return {?}
     */
    set triggerSelectChangeOnInit(value) {
        this.config.triggerSelectChangeOnInit = value;
    }
    /**
     * Set trigger select change on explicit model update if true.
     * Applicable only when form binding is used.
     * @param {?} value
     * @return {?}
     */
    set triggerSelectChangeOnModelUpdate(value) {
        this.config.triggerSelectChangeOnModelUpdate = value;
    }
    /**
     * Set trigger select change on first option select change if true.
     * Applicable only when setFirstOptionSelected is true.
     * @param {?} value
     * @return {?}
     */
    set triggerSelectChangeOnFirstOptionSelect(value) {
        this.config.triggerSelectChangeOnFirstOptionSelect = value;
    }
    /**
     * Set dynamically calculate dropdown view dimensions relative to dropdown button width.
     * MenuWith and menuHeight values are ignored when true.
     * @param {?} value
     * @return {?}
     */
    set dynamicDimensionCalculation(value) {
        this.config.dynamicDimensionCalculation = value;
    }
    /**
     * Set dynamic dropdown options view dimensions calculation width ratio relative to dropdown selector.
     * @param {?} value
     * @return {?}
     */
    set dynamicWidthRatio(value) {
        this.config.dynamicWidthRatio = value;
    }
    /**
     * Set dynamic dropdown options view dimensions calculation height ratio relative to dropdown selector.
     * @param {?} value
     * @return {?}
     */
    set dynamicHeightRatio(value) {
        this.config.dynamicHeightRatio = value;
    }
    /**
     * Set relative parent element to render dropdown view container.
     * @param {?} value
     * @return {?}
     */
    set relativeParentElement(value) {
        this.config.relativeParentElement = value;
    }
    /**
     * Initialize data source.
     * @private
     * @param {?} source Data source stream.
     * @return {?}
     */
    initDataSource(source) {
        this.dropdownResourceService.setDataSource(source);
        this.dataStateService.onDataBind = (/**
         * @param {?} params
         * @return {?}
         */
        (params) => {
            if (params.hardReload) {
                this.dropdownResourceService.setDataSource(source);
            }
            return this.dropdownResourceService.query(params);
        });
    }
    /**
     * Performs dropdown toggle event.
     * @param {?} event Mouse click event args.
     * @param {?} element Dropdown button element.
     * @return {?}
     */
    toggleDropdown(event, element) {
        /** @type {?} */
        const target = (/** @type {?} */ (event.target));
        if (target && target.classList && target.classList.contains('ng-ignore-propagation')) {
            return;
        }
        this.dataStateService.componentLoaderRef.toggle(DropdownViewComponent, element, this.injector, {
            relativeParentElement: this.config.relativeParentElement,
            position: this.config.menuPosition
        });
        if (this.config.dynamicDimensionCalculation) {
            this.config.menuWidth = element.offsetWidth * this.config.dynamicWidthRatio;
            this.config.menuHeight = element.offsetWidth * this.config.dynamicHeightRatio;
        }
    }
    /**
     * Get options wrapped state.
     * @return {?}
     */
    get wrapSelectedOptions() {
        if (this.config.wrapDisplaySelectLimit !== undefined) {
            return this.dataStateService.selectedOptions.length > this.config.wrapDisplaySelectLimit;
        }
        return false;
    }
    /**
     * Get wrapped option display text.
     * @return {?}
     */
    get wrappedOptionDisplayText() {
        return `(${this.dataStateService.selectedOptions.length}) ${this.config.translations.selectedOptionWrapPlaceholder}`;
    }
    /**
     * Lifecycle hook that is called when component is destroyed.
     * @return {?}
     */
    ngOnDestroy() {
        if (this.onSelectChangeSubscription) {
            this.onSelectChangeSubscription.unsubscribe();
        }
        this.dataStateService.componentLoaderRef.dispose();
    }
    /**
     * Get selected options availability state.
     * @return {?}
     */
    get hasSelectedOptions() {
        if (this.config.selectMode === 'multi') {
            return !!this.dataStateService.selectedOptions.length;
        }
        return !!this.dataStateService.selectedOption;
    }
    /**
     * Trigger select change.
     * @return {?}
     */
    triggerSelectChange() {
        if (this.config.selectMode === 'multi') {
            this.eventStateService.selectChangeStream.emit(this.dataStateService.selectedOptions);
        }
        else {
            this.eventStateService.selectChangeStream.emit(this.dataStateService.selectedOption);
        }
    }
    /**
     * Clear selected options.
     * @return {?}
     */
    clearSelectedOptions() {
        if (this.config.selectMode === 'multi') {
            this.dataStateService.selectedOptions = [];
            this.eventStateService.selectChangeStream.emit(this.dataStateService.selectedOptions);
        }
        else {
            this.dataStateService.selectedOption = undefined;
            this.eventStateService.selectChangeStream.emit(this.dataStateService.selectedOption);
        }
    }
    /**
     * Set disabled state.
     * ControlValueAccessor implementation.
     * @param {?} isDisabled True if disabled.
     * @return {?}
     */
    setDisabledState(isDisabled) {
        this.dataStateService.disabled = isDisabled;
    }
    /**
     * Called when value selected value gets updated.
     * ControlValueAccessor implementation.
     * @param {?} value Selected value.
     * @return {?}
     */
    writeValue(value) {
        if (this.config.selectMode === 'multi') {
            this.dataStateService.selectedOptions = value || [];
        }
        else {
            this.dataStateService.selectedOption = value;
        }
        if (this.config.triggerSelectChangeOnModelUpdate) {
            this.triggerSelectChange();
        }
    }
    /**
     * Register on change event.
     * ControlValueAccessor implementation.
     * @param {?} onSelectChange On select change callback function.
     * @return {?}
     */
    registerOnChange(onSelectChange) {
        this.onSelectChangeSubscription = this.selectChange.subscribe((/**
         * @param {?} value
         * @return {?}
         */
        value => {
            onSelectChange(value);
        }));
    }
    /**
     * Register on touched event.
     * ControlValueAccessor implementation.
     * @param {?} fn Function reference.
     * @return {?}
     */
    registerOnTouched(fn) {
        // TODO: Implement touch event handler
    }
    /**
     * Lifecycle hook that is called when component is initialized.
     * @return {?}
     */
    ngOnInit() {
        if (!this.dataStateService.id) {
            throw Error('Missing required parameter value for [id] input.');
        }
        if (!this.dataStateService.onDataBind) {
            this.dataSource = this.eventStateService.staticDataSourceStream;
        }
        this.initDataFetchEvent();
        if (this.config.loadDataOnInit) {
            this.eventStateService.dataFetchStream.emit(false);
        }
        if (this.config.triggerSelectChangeOnInit) {
            this.triggerSelectChange();
        }
        this.eventStateService.initStream.emit(this);
    }
    /**
     * Map source data object to dropdown option model.
     * @private
     * @param {?} option Source dropdown option.
     * @param {?} index Current index.
     * @return {?}
     */
    mapDropdownOption(option, index) {
        /** @type {?} */
        const id = get(option, this.config.selectTrackBy);
        return {
            disabled: get(option, this.config.disabledTrackBy),
            id,
            index: index + this.dataStateService.offset + 1,
            option,
            text: get(option, this.config.displayTrackBy)
        };
    }
    /**
     *
     * Set dropdown options data.
     * @private
     * @param {?} queryResult Query result object reference.
     * @return {?}
     */
    setDropdownOptions(queryResult) {
        if (this.config.groupByField) {
            this.dataStateService.dropdownOptionGroups = queryResult.options.reduce((/**
             * @param {?} accumulator
             * @param {?} option
             * @param {?} index
             * @return {?}
             */
            (accumulator, option, index) => {
                /** @type {?} */
                const groupFieldValue = get(option, this.config.groupByField);
                /** @type {?} */
                const currentGroup = accumulator.find((/**
                 * @param {?} group
                 * @return {?}
                 */
                (group) => group.groupName === groupFieldValue));
                if (currentGroup) {
                    currentGroup.options.push(this.mapDropdownOption(option, index));
                }
                else {
                    accumulator.push({
                        groupName: groupFieldValue,
                        options: [this.mapDropdownOption(option, index)]
                    });
                }
                return accumulator;
            }), this.config.loadOnScroll && this.dataStateService.offset > 0 ? this.dataStateService.dropdownOptionGroups : []);
        }
        else {
            this.dataStateService.dropdownOptions = queryResult.options.reduce((/**
             * @param {?} accumulator
             * @param {?} option
             * @param {?} index
             * @return {?}
             */
            (accumulator, option, index) => {
                accumulator.push(this.mapDropdownOption(option, index));
                return accumulator;
            }), this.config.loadOnScroll && this.dataStateService.offset > 0 ? this.dataStateService.dropdownOptions : []);
        }
        if (this.config.setFirstOptionSelected && queryResult.options.length) {
            if (this.config.selectMode === 'multi') {
                this.dataStateService.selectedOptions = [queryResult.options[0]];
            }
            else {
                this.dataStateService.selectedOption = queryResult.options[0];
            }
            if (this.config.triggerSelectChangeOnFirstOptionSelect) {
                this.triggerSelectChange();
            }
        }
        this.dataStateService.totalOptionCount = queryResult.count;
        this.dataStateService.currentOptionCount += queryResult.options.length;
    }
    /**
     * On after data bind event handler.
     * @private
     * @param {?} queryResult Query result object reference.
     * @return {?}
     */
    onAfterDataBind(queryResult) {
        this.setDropdownOptions(queryResult);
        this.dataStateService.dataLoading = false;
        this.eventStateService.dataBoundStream.emit();
    }
    /**
     * Fetch query results.
     * @private
     * @param {?} hardReload Hard reload state.
     * @return {?}
     */
    fetchQueryResults(hardReload) {
        this.dataStateService.dataLoading = true;
        if (hardReload) {
            this.dataStateService.offset = 0;
            this.dataStateService.filterText = '';
        }
        /** @type {?} */
        const requestParams = {
            hardReload
        };
        if (this.config.loadOnScroll) {
            requestParams.limit = this.config.limit;
            requestParams.offset = this.dataStateService.offset;
        }
        if (this.config.filterable) {
            requestParams.filter = {
                key: this.config.displayTrackBy,
                value: this.dataStateService.filterText
            };
        }
        return this.dataStateService.onDataBind(requestParams);
    }
    /**
     * Initialize data fetch event.
     * @private
     * @return {?}
     */
    initDataFetchEvent() {
        /** @type {?} */
        const noop = {
            options: [],
            count: 0
        };
        this.eventStateService.dataFetchStream
            .pipe(debounceTime(20), switchMap((/**
         * @param {?} hardReload
         * @return {?}
         */
        (hardReload) => this.fetchQueryResults(hardReload))), catchError((/**
         * @return {?}
         */
        () => {
            return of(noop);
        })))
            .subscribe((/**
         * @param {?} queryResult
         * @return {?}
         */
        (queryResult) => {
            this.onAfterDataBind(queryResult);
        }), (/**
         * @return {?}
         */
        () => {
            this.onAfterDataBind(noop);
        }));
    }
    /**
     * Trigger explicit data fetch.
     * @param {?=} hardReload Hard reload state.
     * @return {?}
     */
    fetchData(hardReload = false) {
        this.eventStateService.dataFetchStream.emit(hardReload);
    }
    /**
     * On select option remove event handler.
     * @param {?} index Selected option index.
     * @return {?}
     */
    onSelectOptionRemove(index) {
        this.dataStateService.selectedOptions.splice(index, 1);
        this.eventStateService.selectChangeStream.emit(this.dataStateService.selectedOptions);
    }
    /**
     * Close dropdown options menu.
     * @return {?}
     */
    close() {
        this.dataStateService.componentLoaderRef.hide();
    }
}
DropdownComponent.decorators = [
    { type: Component, args: [{
                selector: 'ng-dropdown',
                template: "<div #dropdownElement class=\"ng-dropdown\">\n  <div class=\"ng-dropdown-toggle\" (click)=\"toggleDropdown($event, dropdownElement)\" [class.disabled]=\"dataStateService.disabled\">\n    <ng-container *ngIf=\"config.selectMode === 'multi'\">\n      <ng-container *ngIf=\"!wrapSelectedOptions\">\n        <span class=\"ng-dropdown-selected-value\"\n          *ngFor=\"let option of dataStateService.selectedOptions; let index = index\"\n          [style.max-width]=\"config.multiSelectOptionMaxWidth | ngPx\"\n          [class.ng-dropdown-option-close-enabled]=\"config.showSelectedOptionRemoveButton\">\n          {{ config.getDisplayText(option) }}\n          <i class=\"ng-dropdown-remove-selected-value ng-ignore-propagation\"\n            *ngIf=\"config.showSelectedOptionRemoveButton\"\n            (click)=\"onSelectOptionRemove(index)\"></i>\n        </span>\n      </ng-container>\n      <span class=\"ng-dropdown-selected-option\" *ngIf=\"wrapSelectedOptions\">\n        {{ wrappedOptionDisplayText }}\n      </span>\n      <span class=\"ng-dropdown-selected-placeholder\" *ngIf=\"!dataStateService.selectedOptions.length\">\n        {{ config.translations.selectPlaceholder }}\n      </span>\n    </ng-container>\n    <ng-container *ngIf=\"config.selectMode !== 'multi'\">\n      <span class=\"ng-dropdown-selected-option\" *ngIf=\"dataStateService.selectedOption\">\n        {{ config.getDisplayText(dataStateService.selectedOption) }}\n      </span>\n      <span class=\"ng-dropdown-selected-placeholder\" *ngIf=\"!dataStateService.selectedOption\">\n        {{ config.translations.selectPlaceholder }}\n      </span>\n    </ng-container>\n    <span class=\"ng-dropdown-input-group-btn\" [hidden]=\"!hasSelectedOptions\" *ngIf=\"config.showClearSelectionButton\">\n      <div class=\"ng-dropdown-delete-button ng-ignore-propagation\" (click)=\"clearSelectedOptions()\"></div>\n    </span>\n    <span class=\"ng-dropdown-down-arrow\" *ngIf=\"!dataStateService.dataLoading\"></span>\n    <span class=\"ng-dropdown-loading\" [hidden]=\"!dataStateService.dataLoading\">\n      <div class=\"ng-dropdown-loading-animation\" *ngIf=\"!loadingSpinnerTemplate\"></div>\n      <div *ngIf=\"loadingSpinnerTemplate\" [ngTemplateOutlet]=\"loadingSpinnerTemplate\"></div>\n    </span>\n  </div>\n</div>\n",
                providers: [
                    DropdownConfigService,
                    DropdownDataStateService,
                    DropdownEventStateService,
                    DropdownResourceService,
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef((/**
                         * @return {?}
                         */
                        () => DropdownComponent)),
                        multi: true
                    }
                ]
            }] }
];
/** @nocollapse */
DropdownComponent.ctorParameters = () => [
    { type: PopoverComponentLoaderFactoryService },
    { type: Injector },
    { type: DropdownEventStateService },
    { type: DropdownResourceService },
    { type: Renderer2 },
    { type: DropdownDataStateService },
    { type: DropdownConfigService }
];
DropdownComponent.propDecorators = {
    loadingSpinnerTemplate: [{ type: ContentChild, args: ['ngDropdownLoadingSpinner', { static: true },] }],
    optionTemplate: [{ type: ContentChild, args: ['ngDropdownOption', { static: true },] }],
    optionGroupHeaderTemplate: [{ type: ContentChild, args: ['ngDropdownOptionGroupHeader', { static: true },] }],
    init: [{ type: Output }],
    selectChange: [{ type: Output }],
    dataBound: [{ type: Output }],
    onDataBind: [{ type: Input }],
    loadingSpinnerTemplateRef: [{ type: Input }],
    optionTemplateRef: [{ type: Input }],
    optionGroupHeaderTemplateRef: [{ type: Input }],
    options: [{ type: Input }],
    dataSource: [{ type: Input }],
    id: [{ type: Input }],
    translations: [{ type: Input }],
    selectTrackBy: [{ type: Input }],
    displayTrackBy: [{ type: Input }],
    groupByField: [{ type: Input }],
    disabledTrackBy: [{ type: Input }],
    selectedOptions: [{ type: Input }],
    selectedOption: [{ type: Input }],
    limit: [{ type: Input }],
    wrapDisplaySelectLimit: [{ type: Input }],
    loadOnScroll: [{ type: Input }],
    loadViewDistanceRatio: [{ type: Input }],
    selectMode: [{ type: Input }],
    filterable: [{ type: Input }],
    filterText: [{ type: Input }],
    filterDebounce: [{ type: Input }],
    filterDebounceTime: [{ type: Input }],
    loadDataOnInit: [{ type: Input }],
    showSelectedOptionRemoveButton: [{ type: Input }],
    showClearSelectionButton: [{ type: Input }],
    menuWidth: [{ type: Input }],
    menuHeight: [{ type: Input }],
    menuPosition: [{ type: Input }],
    disabled: [{ type: Input }],
    closeMenuOnSelect: [{ type: Input }],
    showOptionSelectCheckbox: [{ type: Input }],
    showOptionIndex: [{ type: Input }],
    showOptionTrackBy: [{ type: Input }],
    multiSelectOptionMaxWidth: [{ type: Input }],
    setFirstOptionSelected: [{ type: Input }],
    triggerSelectChangeOnInit: [{ type: Input }],
    triggerSelectChangeOnModelUpdate: [{ type: Input }],
    triggerSelectChangeOnFirstOptionSelect: [{ type: Input }],
    dynamicDimensionCalculation: [{ type: Input }],
    dynamicWidthRatio: [{ type: Input }],
    dynamicHeightRatio: [{ type: Input }],
    relativeParentElement: [{ type: Input }]
};
if (false) {
    /**
     * @type {?}
     * @private
     */
    DropdownComponent.prototype.onSelectChangeSubscription;
    /** @type {?} */
    DropdownComponent.prototype.loadingSpinnerTemplate;
    /**
     * Dropdown initialize event handler
     * @type {?}
     */
    DropdownComponent.prototype.init;
    /**
     * Dropdown option select change event handler
     * @type {?}
     */
    DropdownComponent.prototype.selectChange;
    /**
     * Dropdown data bind event handler
     * @type {?}
     */
    DropdownComponent.prototype.dataBound;
    /**
     * @type {?}
     * @private
     */
    DropdownComponent.prototype.componentLoaderFactory;
    /**
     * @type {?}
     * @private
     */
    DropdownComponent.prototype.injector;
    /**
     * @type {?}
     * @private
     */
    DropdownComponent.prototype.eventStateService;
    /**
     * @type {?}
     * @private
     */
    DropdownComponent.prototype.dropdownResourceService;
    /**
     * @type {?}
     * @private
     */
    DropdownComponent.prototype.renderer;
    /** @type {?} */
    DropdownComponent.prototype.dataStateService;
    /** @type {?} */
    DropdownComponent.prototype.config;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Dropdown filter component.
 */
class DropdownFilterComponent {
    /**
     * @param {?} config
     * @param {?} dataStateService
     * @param {?} eventStateService
     */
    constructor(config, dataStateService, eventStateService) {
        this.config = config;
        this.dataStateService = dataStateService;
        this.eventStateService = eventStateService;
        this.dataFilterStream = new Subject();
    }
    /**
     * Clear applied filter value.
     * @return {?}
     */
    clearFilter() {
        this.dataStateService.offset = 0;
        this.dataStateService.filterText = '';
        this.eventStateService.dataFetchStream.emit(false);
    }
    /**
     * Filter key up event handler.
     * @return {?}
     */
    filterKeyUp() {
        if (this.config.filterDebounce) {
            this.dataFilterStream.next(this.dataStateService.filterText);
        }
        else {
            this.dataStateService.offset = 0;
            this.eventStateService.dataFetchStream.emit(false);
        }
    }
    /**
     * Initialize filter stream debounce.
     * @private
     * @return {?}
     */
    initFilterDebounceEvent() {
        this.dataFilterSubscription = this.dataFilterStream.pipe(debounceTime(this.config.filterDebounceTime)).subscribe((/**
         * @return {?}
         */
        () => {
            this.dataStateService.offset = 0;
            this.eventStateService.dataFetchStream.emit(false);
        }));
    }
    /**
     * Lifecycle hook that is called when component is destroyed.
     * @return {?}
     */
    ngOnDestroy() {
        if (this.dataFilterSubscription) {
            this.dataFilterSubscription.unsubscribe();
        }
    }
    /**
     * Lifecycle hook that is called when component is initialized.
     * @return {?}
     */
    ngOnInit() {
        this.initFilterDebounceEvent();
    }
}
DropdownFilterComponent.decorators = [
    { type: Component, args: [{
                selector: 'ng-dropdown-filter',
                template: "<div class=\"ng-dropdown-search\">\n  <div class=\"ng-dropdown-input-group\">\n    <span class=\"ng-dropdown-input-group-addon\"></span>\n    <input\n      type=\"text\"\n      class=\"ng-dropdown-input\"\n      ngFocus\n      [attr.placeholder]=\"config.translations.filterPlaceholder\"\n      (keyup)=\"filterKeyUp()\"\n      [(ngModel)]=\"dataStateService.filterText\"\n    />\n    <span class=\"ng-dropdown-input-group-btn\" [hidden]=\"!dataStateService.filterText\">\n      <button class=\"ng-dropdown-delete-button\" type=\"button\" (click)=\"clearFilter()\"></button>\n    </span>\n  </div>\n</div>\n<div class=\"ng-dropdown-divider divider\"></div>\n"
            }] }
];
/** @nocollapse */
DropdownFilterComponent.ctorParameters = () => [
    { type: DropdownConfigService },
    { type: DropdownDataStateService },
    { type: DropdownEventStateService }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    DropdownFilterComponent.prototype.dataFilterStream;
    /**
     * @type {?}
     * @private
     */
    DropdownFilterComponent.prototype.dataFilterSubscription;
    /** @type {?} */
    DropdownFilterComponent.prototype.config;
    /** @type {?} */
    DropdownFilterComponent.prototype.dataStateService;
    /** @type {?} */
    DropdownFilterComponent.prototype.eventStateService;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Dropdown options list component.
 */
class DropdownOptionsComponent {
    /**
     * @param {?} config
     * @param {?} dataStateService
     * @param {?} eventStateService
     */
    constructor(config, dataStateService, eventStateService) {
        this.config = config;
        this.dataStateService = dataStateService;
        this.eventStateService = eventStateService;
    }
    /**
     * Unique data row tracking callback.
     * @param {?} index Current index.
     * @param {?} option Dropdown option reference.
     * @return {?}
     */
    optionTrackBy(index, option) {
        return option.index;
    }
    /**
     * Get selected state by option identifier.
     * @param {?} id Option select track by identifier.
     * @return {?}
     */
    getSelectedState(id) {
        if (this.config.selectMode === 'multi') {
            return this.dataStateService.selectedOptions.some((/**
             * @param {?} option
             * @return {?}
             */
            (option) => {
                return get(option, this.config.selectTrackBy) === id;
            }));
        }
        return get(this.dataStateService.selectedOption, this.config.selectTrackBy) === id;
    }
    /**
     * Option click event handler.
     * @param {?} option Option object reference.
     * @param {?} event Click event arguments object.
     * @return {?}
     */
    onOptionClick(option, event) {
        /** @type {?} */
        const target = (/** @type {?} */ (event.target));
        if (target && target.classList && target.classList.contains('ng-ignore-propagation')) {
            return;
        }
        this.toggleOptionSelectedState(option);
    }
    /**
     * Option checkbox click event handler.
     * @param {?} option Option object reference.
     * @param {?} event Click event arguments object.
     * @return {?}
     */
    onOptionCheckboxClick(option, event) {
        // Prevent single mode checkbox getting unchecked on tapping already selected.
        if (this.config.selectMode === 'single') {
            /** @type {?} */
            const selectedId = get(this.dataStateService.selectedOption, this.config.selectTrackBy);
            /** @type {?} */
            const id = get(option.option, this.config.selectTrackBy);
            if (selectedId === id) {
                event.preventDefault();
            }
        }
    }
    /**
     * Toggle option select state and update selected items depending on select mode.
     * @param {?} option Option object reference.
     * @return {?}
     */
    toggleOptionSelectedState(option) {
        /** @type {?} */
        const id = get(option.option, this.config.selectTrackBy);
        switch (this.config.selectMode) {
            case 'multi': {
                /** @type {?} */
                const selectedIndex = this.dataStateService.selectedOptions.findIndex((/**
                 * @param {?} value
                 * @return {?}
                 */
                (value) => {
                    return get(value, this.config.selectTrackBy) === id;
                }));
                if (selectedIndex < 0) {
                    this.dataStateService.selectedOptions.push(option.option);
                }
                else {
                    this.dataStateService.selectedOptions.splice(selectedIndex, 1);
                }
                this.eventStateService.selectChangeStream.emit(this.dataStateService.selectedOptions);
                break;
            }
            case 'single-toggle': {
                if (get(this.dataStateService.selectedOption, this.config.selectTrackBy) === id) {
                    this.dataStateService.selectedOption = undefined;
                }
                else {
                    this.dataStateService.selectedOption = option.option;
                }
                this.eventStateService.selectChangeStream.emit(this.dataStateService.selectedOption);
                break;
            }
            case 'single': {
                /** @type {?} */
                const selectedId = get(this.dataStateService.selectedOption, this.config.selectTrackBy);
                this.dataStateService.selectedOption = option.option;
                if (selectedId !== id) {
                    this.eventStateService.selectChangeStream.emit(this.dataStateService.selectedOption);
                }
                break;
            }
        }
        if (this.config.closeMenuOnSelect) {
            this.dataStateService.componentLoaderRef.hide();
        }
    }
}
DropdownOptionsComponent.decorators = [
    { type: Component, args: [{
                selector: 'ng-dropdown-options',
                template: "<ul class=\"ng-dropdown-option-container\" [class.ng-milti-selectable]=\"config.selectMode === 'multi'\">\n  <ng-container *ngIf=\"config.groupByField\">\n    <ng-container *ngFor=\"let groupedOption of dataStateService.dropdownOptionGroups\">\n      <li *ngIf=\"!dataStateService.dropdownOptionGroupHeaderTemplate\" class=\"ng-dropdown-group-heading\">\n        {{ groupedOption.groupName }}\n      </li>\n      <ng-container\n        *ngIf=\"dataStateService.dropdownOptionGroupHeaderTemplate\"\n        [ngTemplateOutlet]=\"dataStateService.dropdownOptionGroupHeaderTemplate\"\n        [ngTemplateOutletContext]=\"{ groupedOption: groupedOption }\"\n      >\n      </ng-container>\n      <ng-container *ngFor=\"let option of groupedOption.options; trackBy: optionTrackBy; let i = index;\">\n        <li (click)=\"onOptionClick(option, $event)\" [class.disabled]=\"option.disabled\" [class.ng-option-selected]=\"getSelectedState(option.id)\">\n          <ng-container *ngIf=\"!dataStateService.dropdownOptionTemplate\">\n            <a class=\"ng-dropdown-checkbox-container\" *ngIf=\"config.showOptionSelectCheckbox\">\n              <input type=\"checkbox\" class=\"ng-dropdown-checkbox-input ng-ignore-propagation\"\n                     [id]=\"dataStateService.getUniqueId('gop', i)\"\n                     [checked]=\"getSelectedState(option.id)\"\n                     [disabled]=\"option.disabled\"\n                     (change)=\"toggleOptionSelectedState(option)\"\n                     (click)=\"onOptionCheckboxClick(option, $event)\"\n              />\n              <label class=\"ng-ignore-propagation\" [for]=\"dataStateService.getUniqueId('gop', i)\">\n                <span class=\"ng-ignore-propagation\" [title]=\"option.text\">{{ option.text }}</span>\n              </label>\n            </a>\n            <span *ngIf=\"!config.showOptionSelectCheckbox\" [title]=\"option.text\">\n              <span *ngIf=\"config.showOptionIndex\">{{option.index}} -</span>\n              <span *ngIf=\"config.showOptionTrackBy\">{{option.id}} - </span>{{ option.text }}\n            </span>\n          </ng-container>\n          <ng-container\n            *ngIf=\"dataStateService.dropdownOptionTemplate\"\n            [ngTemplateOutlet]=\"dataStateService.dropdownOptionTemplate\"\n            [ngTemplateOutletContext]=\"{ option: option, selected: getSelectedState(option.id) }\"\n          >\n          </ng-container>\n        </li>\n      </ng-container>\n    </ng-container>\n  </ng-container>\n  <ng-container *ngIf=\"!config.groupByField\">\n    <ng-container *ngFor=\"let option of dataStateService.dropdownOptions; trackBy: optionTrackBy; index as i;\">\n      <li (click)=\"onOptionClick(option, $event)\" [class.disabled]=\"option.disabled\" [class.ng-option-selected]=\"getSelectedState(option.id)\">\n        <ng-container *ngIf=\"!dataStateService.dropdownOptionTemplate\">\n          <a class=\"ng-dropdown-checkbox-container\" *ngIf=\"config.showOptionSelectCheckbox\">\n            <input type=\"checkbox\" class=\"ng-dropdown-checkbox-input ng-ignore-propagation\"\n                   [id]=\"dataStateService.getUniqueId('sop', i)\"\n                   [checked]=\"getSelectedState(option.id)\"\n                   [disabled]=\"option.disabled\"\n                   (change)=\"toggleOptionSelectedState(option)\"\n                   (click)=\"onOptionCheckboxClick(option, $event)\"\n            />\n            <label class=\"ng-ignore-propagation\" [for]=\"dataStateService.getUniqueId('sop', i)\">\n              <span class=\"ng-ignore-propagation\" [title]=\"option.text\">{{ option.text }}</span>\n            </label>\n          </a>\n          <span *ngIf=\"!config.showOptionSelectCheckbox\" [title]=\"option.text\">\n              <span *ngIf=\"config.showOptionIndex\">{{option.index}} -</span>\n              <span *ngIf=\"config.showOptionTrackBy\">{{option.id}} - </span>{{ option.text }}\n            </span>\n        </ng-container>\n        <ng-container\n          *ngIf=\"dataStateService.dropdownOptionTemplate\"\n          [ngTemplateOutlet]=\"dataStateService.dropdownOptionTemplate\"\n          [ngTemplateOutletContext]=\"{ option: option, selected: getSelectedState(option.id) }\"\n        >\n        </ng-container>\n      </li>\n    </ng-container>\n  </ng-container>\n  <li *ngIf=\"!dataStateService.dataLoading && dataStateService.totalOptionCount === 0\" class=\"ng-dropdown-no-data\">\n    {{ config.translations.noDataMessage }}\n  </li>\n</ul>\n"
            }] }
];
/** @nocollapse */
DropdownOptionsComponent.ctorParameters = () => [
    { type: DropdownConfigService },
    { type: DropdownDataStateService },
    { type: DropdownEventStateService }
];
if (false) {
    /** @type {?} */
    DropdownOptionsComponent.prototype.config;
    /** @type {?} */
    DropdownOptionsComponent.prototype.dataStateService;
    /**
     * @type {?}
     * @private
     */
    DropdownOptionsComponent.prototype.eventStateService;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const COMPONENTS = [DropdownComponent, DropdownViewComponent, DropdownFilterComponent, DropdownOptionsComponent];
/**
 * Module representing dropdown component.
 */
class DropdownModule {
    /**
     * Set module root configuration overrides.
     * @param {?=} dropdownConfig Dropdown configuration object.
     * @return {?} Module with custom providers.
     */
    static forRoot(dropdownConfig) {
        return {
            ngModule: DropdownModule,
            providers: [
                {
                    provide: DROPDOWN_CONFIG,
                    useValue: dropdownConfig
                }
            ]
        };
    }
}
DropdownModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, FormsModule, UtilityModule.forRoot()],
                declarations: [...COMPONENTS],
                exports: [DropdownComponent],
                entryComponents: [DropdownViewComponent]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const COMPONENTS$1 = [
    DataTableHeaderComponent,
    DataTableColumnComponent,
    DataTableColGroupComponent,
    DataTableBodyComponent,
    DataTablePaginationComponent,
    DataTableComponent,
    DataTableColumnSelectorComponent,
    DataTableNoDataBodyComponent,
    DataTableColumnFilterHeaderComponent,
    DataTableColumnFilterTemplateComponent,
    DataTableColumnTitleHeaderComponent,
    DataTableHeadComponent,
    DataTableLoadingSpinnerComponent
];
/** @type {?} */
const DIRECTIVES$1 = [ScrollPositionDirective, ScrollElementDirective, ElementWidthDirective];
/** @type {?} */
const PROVIDERS$1 = [];
/**
 * Module representing data table component.
 */
class DataTableModule {
    /**
     * Set module root configuration overrides.
     * @param {?=} dataTableConfig Data table configuration object.
     * @return {?} Module with custom providers.
     */
    static forRoot(dataTableConfig) {
        return {
            ngModule: DataTableModule,
            providers: [
                {
                    provide: DATA_TABLE_CONFIG,
                    useValue: dataTableConfig
                }
            ]
        };
    }
}
DataTableModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, FormsModule, UtilityModule.forRoot(), DropdownModule.forRoot()],
                declarations: [...COMPONENTS$1, ...DIRECTIVES$1],
                providers: [...PROVIDERS$1],
                exports: [DataTableColumnComponent, DataTableComponent],
                entryComponents: [DataTableColumnSelectorComponent]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Request parameter mapper service.
 */
class RequestParamMapperService {
    /**
     * Map HTTP query parameters by request options.
     * @param {?} requestOptions Request options object reference.
     * @return {?}
     */
    mapQueryParams(requestOptions) {
        if (requestOptions && requestOptions.params) {
            if (requestOptions.params instanceof HttpParams) {
                return requestOptions.params;
            }
            else {
                /** @type {?} */
                let queryParams = new HttpParams();
                for (const key in requestOptions.params) {
                    if (requestOptions.params.hasOwnProperty(key)) {
                        queryParams = queryParams.set(key, requestOptions.params[key]);
                    }
                }
                return queryParams;
            }
        }
        else {
            return new HttpParams();
        }
    }
    /**
     * Map request options by http request data.
     * @param {?} options Request options object reference.
     * @return {?}
     */
    mapRequestOptions(options) {
        /** @type {?} */
        const requestOptions = {
            url: '',
            options: {}
        };
        if (typeof options === 'object') {
            requestOptions.options = options;
            requestOptions.url = options.url;
        }
        else {
            requestOptions.url = options;
        }
        return requestOptions;
    }
}
RequestParamMapperService.decorators = [
    { type: Injectable }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Utility config service which holds all the global configurations of utility which can be overridden while
 * importing the module.
 */
class ResourceUtilityConfigService {
}
ResourceUtilityConfigService.decorators = [
    { type: Injectable }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const PROVIDERS$2 = [RequestParamMapperService];
/**
 * Resource utility module.
 */
class ResourceUtilityModule {
    /**
     * Set module root configuration overrides.
     * @return {?} Module with custom providers.
     */
    static forRoot() {
        return {
            ngModule: ResourceUtilityModule,
            providers: [ResourceUtilityConfigService]
        };
    }
}
ResourceUtilityModule.decorators = [
    { type: NgModule, args: [{
                imports: [],
                providers: [...PROVIDERS$2]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Data table resource config service holds all the global configurations of data table resource which can be overridden
 * while importing the module
 */
class DataTableResourceConfigService {
}
DataTableResourceConfigService.decorators = [
    { type: Injectable }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Data table HTTP data fetch service.
 * @template T
 */
class DataTableHttpDataFetchService {
    /**
     * @param {?} http
     * @param {?} requestParamMapperService
     */
    constructor(http, requestParamMapperService) {
        this.http = http;
        this.requestParamMapperService = requestParamMapperService;
    }
    /**
     * Get data bind event handler.
     * @param {?} options Request options or resource path.
     * @param {?=} mapper Response data mapper callback. map source stream format to data table expected stream or apply additional formatting.
     * @return {?} Data table bind event handler.
     */
    onDataBind(options, mapper) {
        return (/**
         * @param {?=} params
         * @return {?}
         */
        (params) => {
            /** @type {?} */
            const requestOptions = this.requestParamMapperService.mapRequestOptions(options);
            /** @type {?} */
            let queryParams = this.requestParamMapperService.mapQueryParams(requestOptions.options);
            if (params) {
                if (params.limit !== undefined) {
                    queryParams = queryParams.set('limit', String(params.limit));
                }
                if (params.offset !== undefined) {
                    queryParams = queryParams.set('offset', String(params.offset));
                }
                params.fields.forEach((/**
                 * @param {?} column
                 * @return {?}
                 */
                (column) => {
                    /** @type {?} */
                    let query = '';
                    if (column.filterable) {
                        if (typeof column.filterValue === 'string') {
                            if (column.filterValue !== '') {
                                query += column.filterValue;
                            }
                        }
                        else if (Array.isArray(column.filterValue) && column.filterValue.length) {
                            query += column.filterValue.join(',');
                        }
                    }
                    if (column.sortable && column.sortOrder !== '') {
                        query += `|${column.sortOrder}|${column.sortPriority}`;
                    }
                    if (query) {
                        queryParams = queryParams.set(column.field, query);
                    }
                }));
                requestOptions.options.params = queryParams;
                /** @type {?} */
                const resource = (/** @type {?} */ (this.http.get(requestOptions.url, (/** @type {?} */ (requestOptions.options)))));
                if (mapper) {
                    return mapper(resource);
                }
                return resource;
            }
        });
    }
    /**
     * Get filter value extract event handler.
     * @param {?} options Request options or resource path.
     * @param {?=} mapper Response data mapper callback. map source stream format to data table expected stream or apply additional formatting.
     * @return {?} Data table filter options event handler.
     */
    onFilterValueExtract(options, mapper) {
        return (/**
         * @param {?} column
         * @return {?}
         */
        (column) => {
            /** @type {?} */
            const requestOptions = this.requestParamMapperService.mapRequestOptions(options);
            /** @type {?} */
            let queryParams = this.requestParamMapperService.mapQueryParams(requestOptions.options);
            /** @type {?} */
            const filterField = column.filterField || column.field;
            queryParams = queryParams.set('field', filterField);
            /** @type {?} */
            const resource = (/** @type {?} */ (this.http.get(requestOptions.url, Object.assign({ params: queryParams }, requestOptions))));
            if (mapper) {
                return mapper(resource);
            }
            return resource;
        });
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    DataTableHttpDataFetchService.prototype.http;
    /** @type {?} */
    DataTableHttpDataFetchService.prototype.requestParamMapperService;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Data table HTTP data fetch service factory.
 */
class DataTableHttpResourceFactoryService {
    /**
     * @param {?} http
     * @param {?} requestParamMapperService
     */
    constructor(http, requestParamMapperService) {
        this.http = http;
        this.requestParamMapperService = requestParamMapperService;
    }
    /**
     * Get new data table HTTP data fetch service instance.
     * @template T
     * @return {?}
     */
    getResourceProvider() {
        return new DataTableHttpDataFetchService(this.http, this.requestParamMapperService);
    }
}
DataTableHttpResourceFactoryService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
DataTableHttpResourceFactoryService.ctorParameters = () => [
    { type: HttpClient },
    { type: RequestParamMapperService }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    DataTableHttpResourceFactoryService.prototype.http;
    /** @type {?} */
    DataTableHttpResourceFactoryService.prototype.requestParamMapperService;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Data table web socket data fetch service.
 * @template T
 */
class DataTableWebsocketDataFetchService {
    constructor() { }
    /**
     * Initialize web socket connection.
     * @param {?=} config Socket configuration parameters.
     * @return {?}
     */
    init(config) {
        this.socket = webSocket(config);
        this.subject = new Subject();
    }
    /**
     * Get socket stream reference.
     * @return {?}
     */
    get socketStream() {
        return this.socket;
    }
    /**
     * Web socket data bind event handler.
     * Must call init prior to calling this function.
     * @param {?=} mapper Response data mapper callback. map source stream format to data table expected stream or apply additional formatting.
     * @return {?} Data table bind event handler.
     */
    onDataBind(mapper) {
        if (!this.socket) {
            throw Error('Initialize socket data source before data bind.');
        }
        this.socketSubscription = this.socket.subscribe(this.subject);
        return (/**
         * @param {?=} params
         * @return {?}
         */
        (params) => {
            if (params) {
                this.socket.next((/** @type {?} */ ({
                    type: 'data-fetch',
                    offset: params.offset,
                    limit: params.limit,
                    fields: params.fields
                })));
                if (mapper) {
                    return mapper(this.subject);
                }
                return this.subject;
            }
        });
    }
    /**
     * Dispose web socket connection.
     * @return {?}
     */
    dispose() {
        if (this.socket) {
            this.socket.complete();
        }
        if (this.socketSubscription) {
            this.socketSubscription.unsubscribe();
        }
        if (this.subject) {
            this.subject.unsubscribe();
        }
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    DataTableWebsocketDataFetchService.prototype.socket;
    /**
     * @type {?}
     * @private
     */
    DataTableWebsocketDataFetchService.prototype.subject;
    /**
     * @type {?}
     * @private
     */
    DataTableWebsocketDataFetchService.prototype.socketSubscription;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Data table web socket data fetch service factory.
 */
class DataTableWebsocketResourceFactoryService {
    /**
     * Get new data table websocket fetch service instance.
     * @template T
     * @return {?}
     */
    getResourceProvider() {
        return new DataTableWebsocketDataFetchService();
    }
}
DataTableWebsocketResourceFactoryService.decorators = [
    { type: Injectable }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const PROVIDERS$3 = [DataTableHttpResourceFactoryService, DataTableWebsocketResourceFactoryService];
/**
 * Data table data source module.
 */
class DataTableResourceModule {
    /**
     * Set module root configuration overrides
     * @return {?} Module with custom providers
     */
    static forRoot() {
        return {
            ngModule: DataTableResourceModule,
            providers: [DataTableResourceConfigService]
        };
    }
}
DataTableResourceModule.decorators = [
    { type: NgModule, args: [{
                imports: [ResourceUtilityModule],
                providers: [...PROVIDERS$3]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Dropdown resource config service which holds all the global configurations of dropdown resource which can be overridden
 * while importing the module.
 */
class DropdownResourceConfigService {
}
DropdownResourceConfigService.decorators = [
    { type: Injectable }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Dropdown HTTP data fetch service.
 * @template T
 */
class DropdownHttpDataFetchService {
    /**
     * @param {?} http
     * @param {?} requestParamMapperService
     */
    constructor(http, requestParamMapperService) {
        this.http = http;
        this.requestParamMapperService = requestParamMapperService;
    }
    /**
     * Get data bind event handler.
     * @param {?} options Request options or resource path.
     * @param {?=} mapper Response data mapper callback. map source stream format to data table expected stream or apply additional formatting.
     * @return {?} Dropdown bind event handler.
     */
    onDataBind(options, mapper) {
        return (/**
         * @param {?=} params
         * @return {?}
         */
        (params) => {
            /** @type {?} */
            const requestOptions = this.requestParamMapperService.mapRequestOptions(options);
            /** @type {?} */
            let queryParams = this.requestParamMapperService.mapQueryParams(requestOptions.options);
            if (params) {
                if (params.limit !== undefined) {
                    queryParams = queryParams.set('limit', String(params.limit));
                }
                if (params.offset !== undefined) {
                    queryParams = queryParams.set('offset', String(params.offset));
                }
                if (params.filter && params.filter.value) {
                    queryParams = queryParams.set('field', params.filter.key);
                    queryParams = queryParams.set('filter', params.filter.value);
                }
                requestOptions.options.params = queryParams;
                /** @type {?} */
                const resource = (/** @type {?} */ (this.http.get(requestOptions.url, (/** @type {?} */ (requestOptions.options)))));
                if (mapper) {
                    return mapper(resource);
                }
                return resource;
            }
        });
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    DropdownHttpDataFetchService.prototype.http;
    /** @type {?} */
    DropdownHttpDataFetchService.prototype.requestParamMapperService;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Dropdown HTTP data fetch service factory.
 */
class DropdownHttpResourceFactoryService {
    /**
     * @param {?} http
     * @param {?} requestParamMapperService
     */
    constructor(http, requestParamMapperService) {
        this.http = http;
        this.requestParamMapperService = requestParamMapperService;
    }
    /**
     * Get new dropdown HTTP data fetch service instance.
     * @template T
     * @return {?}
     */
    getResourceProvider() {
        return new DropdownHttpDataFetchService(this.http, this.requestParamMapperService);
    }
}
DropdownHttpResourceFactoryService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
DropdownHttpResourceFactoryService.ctorParameters = () => [
    { type: HttpClient },
    { type: RequestParamMapperService }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    DropdownHttpResourceFactoryService.prototype.http;
    /** @type {?} */
    DropdownHttpResourceFactoryService.prototype.requestParamMapperService;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Dropdown websocket data fetch service.
 * @template T
 */
class DropdownWebsocketDataFetchService {
    constructor() { }
    /**
     * Initialize websocket connection.
     * @param {?=} config Websocket configuration object reference.
     * @return {?}
     */
    init(config) {
        this.socket = webSocket(config);
        this.subject = new Subject();
    }
    /**
     * Get socket stream reference.
     * @return {?}
     */
    get socketStream() {
        return this.socket;
    }
    /**
     * Websocket data bind event handler.
     * Must call init prior to calling this function.
     * @param {?=} mapper Response data mapper callback. map source stream format to data table expected stream or apply additional formatting.
     * @return {?} Dropdown bind event handler.
     */
    onDataBind(mapper) {
        if (!this.socket) {
            throw Error('Initialize socket data source before data bind.');
        }
        this.socketSubscription = this.socket.subscribe(this.subject);
        return (/**
         * @param {?=} params
         * @return {?}
         */
        (params) => {
            if (params) {
                this.socket.next((/** @type {?} */ ({
                    type: 'data-fetch',
                    filter: params.filter,
                    offset: params.offset,
                    limit: params.limit
                })));
                if (mapper) {
                    return mapper(this.subject);
                }
                return this.subject;
            }
        });
    }
    /**
     * Dispose websocket connection.
     * @return {?}
     */
    dispose() {
        if (this.socket) {
            this.socket.complete();
        }
        if (this.socketSubscription) {
            this.socketSubscription.unsubscribe();
        }
        if (this.subject) {
            this.subject.unsubscribe();
        }
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    DropdownWebsocketDataFetchService.prototype.socket;
    /**
     * @type {?}
     * @private
     */
    DropdownWebsocketDataFetchService.prototype.subject;
    /**
     * @type {?}
     * @private
     */
    DropdownWebsocketDataFetchService.prototype.socketSubscription;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Dropdown web socket data fetch service factory.
 */
class DropdownWebsocketResourceFactoryService {
    /**
     * Get new dropdown websocket fetch service instance.
     * @template T
     * @return {?}
     */
    getResourceProvider() {
        return new DropdownWebsocketDataFetchService();
    }
}
DropdownWebsocketResourceFactoryService.decorators = [
    { type: Injectable }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const PROVIDERS$4 = [DropdownHttpResourceFactoryService, DropdownWebsocketResourceFactoryService];
/**
 * Dropdown data source module.
 */
class DropdownResourceModule {
    /**
     * Set module root configuration overrides.
     * @return {?} Module with custom providers.
     */
    static forRoot() {
        return {
            ngModule: DropdownResourceModule,
            providers: [DropdownResourceConfigService]
        };
    }
}
DropdownResourceModule.decorators = [
    { type: NgModule, args: [{
                imports: [ResourceUtilityModule],
                providers: [...PROVIDERS$4]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { DataFetchMode, DataTableColumnComponent, DataTableComponent, DataTableHttpDataFetchService, DataTableHttpResourceFactoryService, DataTableModule, DataTableResourceModule, DataTableWebsocketDataFetchService, DataTableWebsocketResourceFactoryService, DragAndDropService, DropdownComponent, DropdownHttpDataFetchService, DropdownHttpResourceFactoryService, DropdownModule, DropdownResourceModule, DropdownWebsocketDataFetchService, DropdownWebsocketResourceFactoryService, GlobalRefService, PopoverComponentLoader, PopoverComponentLoaderFactoryService, RequestParamMapperService, ResourceUtilityModule, UtilityConfigService, UtilityModule, InitDirective as ɵa, FocusDirective as ɵb, DataTableNoDataBodyComponent as ɵba, DataTableColumnFilterHeaderComponent as ɵbb, DataTableColumnFilterTemplateComponent as ɵbc, DataTableColumnTitleHeaderComponent as ɵbd, DataTableHeadComponent as ɵbe, DataTableLoadingSpinnerComponent as ɵbf, ScrollPositionDirective as ɵbg, ScrollElementDirective as ɵbh, ElementWidthDirective as ɵbi, ResourceUtilityConfigService as ɵbj, DataTableResourceConfigService as ɵbk, DropdownResourceConfigService as ɵbl, PixelConverterPipe as ɵc, ResizeService as ɵd, ValidatorService as ɵe, DROPDOWN_CONFIG as ɵf, DropdownConfigService as ɵg, DropdownDataStateService as ɵh, DropdownEventStateService as ɵi, DropdownResourceService as ɵj, DropdownViewComponent as ɵk, DropdownFilterComponent as ɵl, DropdownOptionsComponent as ɵm, DataTableHeaderComponent as ɵn, DataTableEventStateService as ɵo, DataTableDataStateService as ɵp, DATA_TABLE_CONFIG as ɵq, DataTableConfigService as ɵr, DataTableColGroupComponent as ɵt, DataTableBodyComponent as ɵu, DataTablePaginationComponent as ɵv, DataTablePersistenceService as ɵw, DataTableScrollPositionService as ɵx, DataTableResourceService as ɵy, DataTableColumnSelectorComponent as ɵz };
//# sourceMappingURL=ornamentum.js.map
