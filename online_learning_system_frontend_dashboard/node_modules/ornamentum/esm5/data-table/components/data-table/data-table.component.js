/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, ContentChild, ContentChildren, EventEmitter, Input, Output, QueryList, TemplateRef, forwardRef, ElementRef, ViewChild, NgZone } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { catchError, debounceTime, switchMap } from 'rxjs/operators';
import { get } from '../../../utility/services/object-utility.class';
import { DataFetchMode } from '../../models/data-fetch-mode.enum';
import { DataTableColumnComponent } from '../data-table-column/data-table-column.component';
import { DragAndDropService, GlobalRefService } from '../../../utility/utility.module';
import { ValidatorService } from '../../../utility/services/validator.service';
import { DataTableEventStateService } from '../../services/data-table-event.service';
import { DataTableDataStateService } from '../../services/data-table-data-state.service';
import { DataTablePersistenceService } from '../../services/data-table-persistence.service';
import { DataTableConfigService } from '../../services/data-table-config.service';
import { DataTableScrollPositionService } from '../../services/data-table-scroll-position.service';
import { DataTableResourceService } from '../../services/data-table-resource.service';
/**
 * Data table component; Data table entry component.
 */
var DataTableComponent = /** @class */ (function () {
    function DataTableComponent(dragAndDropService, dataTableStateService, globalRefService, eventStateService, dataTableResourceService, zone, dataStateService, scrollPositionService, config) {
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
    Object.defineProperty(DataTableComponent.prototype, "onDataBind", {
        // Input Events
        /**
         * Set data bind event handler callback. This handler is fired on each data fetch request.
         */
        set: 
        // Input Events
        /**
         * Set data bind event handler callback. This handler is fired on each data fetch request.
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.dataStateService.onDataBind = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataTableComponent.prototype, "onFilterValueExtract", {
        /**
         * Set filter value extract event handler callback. Used to extract filter value collection dynamically when
         * explicit data bind functionality is used with onDataBind callback.
         */
        set: /**
         * Set filter value extract event handler callback. Used to extract filter value collection dynamically when
         * explicit data bind functionality is used with onDataBind callback.
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.dataStateService.onFilterValueExtract = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataTableComponent.prototype, "onDynamicRowSpanExtract", {
        /**
         * Set on dynamic row span extract event handler callback.
         */
        set: /**
         * Set on dynamic row span extract event handler callback.
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.dataStateService.onDynamicRowSpanExtract = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataTableComponent.prototype, "items", {
        // Input parameters
        /**
         * Set static data items collection. No need to set data source when static items collection is provided.
         */
        set: 
        // Input parameters
        /**
         * Set static data items collection. No need to set data source when static items collection is provided.
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (!value) {
                return;
            }
            this.eventStateService.staticDataSourceStream.next(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataTableComponent.prototype, "dataSource", {
        /**
         * Set data source observable. This observable is used to retrieve row data for binding.
         */
        set: /**
         * Set data source observable. This observable is used to retrieve row data for binding.
         * @param {?} source
         * @return {?}
         */
        function (source) {
            this.initDataSource(source);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataTableComponent.prototype, "id", {
        /**
         * Set data table unique identifier.
         */
        set: /**
         * Set data table unique identifier.
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (!ValidatorService.idPatternValidatorExpression.test(value)) {
                throw Error('Invalid [id] input value. Unique identifier parameter only accept string begin with a letter ([A-Za-z]) and may be followed by any number of letters, digits ([0-9]), hyphens ("-"), underscores ("_").');
            }
            this.dataStateService.id = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataTableComponent.prototype, "persistTableState", {
        /**
         * Set persist table state on provided storage mode if true. Depends on storageMode property.
         */
        set: /**
         * Set persist table state on provided storage mode if true. Depends on storageMode property.
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.config.persistTableState = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataTableComponent.prototype, "storageMode", {
        /**
         * Set storage mode to persist table state. Only applicable when persistTableState is true.
         */
        set: /**
         * Set storage mode to persist table state. Only applicable when persistTableState is true.
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.dataTableStateService.storageMode = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataTableComponent.prototype, "multiColumnSortable", {
        /**
         * Set multiple column sortable if true. Only applicable for sortable true columns.
         */
        set: /**
         * Set multiple column sortable if true. Only applicable for sortable true columns.
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.config.multiColumnSortable = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataTableComponent.prototype, "showHeader", {
        /**
         * Set table header bar visible if true.
         */
        set: /**
         * Set table header bar visible if true.
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.config.showHeader = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataTableComponent.prototype, "title", {
        /**
         * Set title to be shown in the header. Only applicable when showHeader is true.
         */
        set: /**
         * Set title to be shown in the header. Only applicable when showHeader is true.
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.config.title = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataTableComponent.prototype, "width", {
        /**
         * Set width value in pixels. Can be used to set the width of teh table (responsive if not set).
         */
        set: /**
         * Set width value in pixels. Can be used to set the width of teh table (responsive if not set).
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.config.width = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataTableComponent.prototype, "minContentHeight", {
        /**
         * Set minimum table content height value in pixels. Can be used to set the minimum height of the table content area.
         */
        set: /**
         * Set minimum table content height value in pixels. Can be used to set the minimum height of the table content area.
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.config.minContentHeight = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataTableComponent.prototype, "minContentWidth", {
        /**
         * Minimum table content width value in pixels. Can be used to set the minimum width of the table content area.
         */
        set: /**
         * Minimum table content width value in pixels. Can be used to set the minimum width of the table content area.
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.config.minContentWidth = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataTableComponent.prototype, "contentHeight", {
        /**
         * Table content height value in pixels. This configuration can be used to enable table content vertical
         * scrolling for responsive design.
         */
        set: /**
         * Table content height value in pixels. This configuration can be used to enable table content vertical
         * scrolling for responsive design.
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.config.contentHeight = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataTableComponent.prototype, "pageable", {
        /**
         * Show pagination bar if true. Depends on offset and limit values. Trigger dataLoad event with offset
         * and limit values.
         */
        set: /**
         * Show pagination bar if true. Depends on offset and limit values. Trigger dataLoad event with offset
         * and limit values.
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.config.pageable = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataTableComponent.prototype, "loadOnScroll", {
        /**
         * Enable scrolling based on-demand data loading functionality if true. Trigger dataLoad event with offset
         * and limit values when scroll to bottom until data source exhaust.
         */
        set: /**
         * Enable scrolling based on-demand data loading functionality if true. Trigger dataLoad event with offset
         * and limit values when scroll to bottom until data source exhaust.
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.config.loadOnScroll = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataTableComponent.prototype, "loadViewDistanceRatio", {
        /**
         * Set view height distance ratio to trigger data fetch on scroll. Applicable only when load on scroll mode is enabled.
         */
        set: /**
         * Set view height distance ratio to trigger data fetch on scroll. Applicable only when load on scroll mode is enabled.
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.config.loadViewDistanceRatio = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataTableComponent.prototype, "showIndexColumn", {
        /**
         * Set auto generated index column with row numbering if true.
         */
        set: /**
         * Set auto generated index column with row numbering if true.
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.config.showIndexColumn = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataTableComponent.prototype, "indexColumnTitle", {
        /**
         * Set index column header title. Applicable when showIndexColumn is true.
         */
        set: /**
         * Set index column header title. Applicable when showIndexColumn is true.
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.config.indexColumnTitle = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataTableComponent.prototype, "rowSelectable", {
        /**
         * Set row select checkbox and select state if true.
         */
        set: /**
         * Set row select checkbox and select state if true.
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.config.rowSelectable = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataTableComponent.prototype, "selectMode", {
        /**
         * Data table row select mode. Applicable only when rowSelectable is true.
         */
        set: /**
         * Data table row select mode. Applicable only when rowSelectable is true.
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.config.selectMode = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataTableComponent.prototype, "showRowSelectCheckbox", {
        /**
         * Set select all row checkbox on column header visible if true.
         * Only applicable when showRowSelectCheckbox, rowSelectable is true & item selectMode is  multi.
         */
        set: /**
         * Set select all row checkbox on column header visible if true.
         * Only applicable when showRowSelectCheckbox, rowSelectable is true & item selectMode is  multi.
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.config.showRowSelectCheckbox = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataTableComponent.prototype, "showRowSelectAllCheckbox", {
        /**
         * Set select all row checkbox on column header visible if true.
         * Only applicable when showRowSelectCheckbox, rowSelectable is true & item selectMode is  multi.
         */
        set: /**
         * Set select all row checkbox on column header visible if true.
         * Only applicable when showRowSelectCheckbox, rowSelectable is true & item selectMode is  multi.
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.config.showRowSelectAllCheckbox = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataTableComponent.prototype, "showSubstituteRows", {
        /**
         * Set substitute rows visible if true. Fill with empty rows when row count < limit.
         */
        set: /**
         * Set substitute rows visible if true. Fill with empty rows when row count < limit.
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.config.showSubstituteRows = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataTableComponent.prototype, "expandableRows", {
        /**
         * Set row expander visible if true. Render ngDataTableExpand template on expand click.
         */
        set: /**
         * Set row expander visible if true. Render ngDataTableExpand template on expand click.
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.config.expandableRows = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataTableComponent.prototype, "selectOnRowClick", {
        /**
         * Set trigger row select on click event if true. Applicable only when rowSelectable is true.
         */
        set: /**
         * Set trigger row select on click event if true. Applicable only when rowSelectable is true.
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.config.selectOnRowClick = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataTableComponent.prototype, "expandOnRowClick", {
        /**
         * Set expand and render expand template on row click if true. Only applicable when expandableRows is true.
         */
        set: /**
         * Set expand and render expand template on row click if true. Only applicable when expandableRows is true.
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.config.expandOnRowClick = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataTableComponent.prototype, "autoFetch", {
        /**
         * Auto trigger dataLoad event on initialization if true.
         */
        set: /**
         * Auto trigger dataLoad event on initialization if true.
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.config.autoFetch = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataTableComponent.prototype, "showLoadingSpinner", {
        /**
         * Set loading spinner visible if true. Show loading spinner when data fetch operation is triggered.
         */
        set: /**
         * Set loading spinner visible if true. Show loading spinner when data fetch operation is triggered.
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.config.showLoadingSpinner = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataTableComponent.prototype, "selectTrackBy", {
        /**
         * Set select option track by field path which is used to uniquely identify row for selection tracking.
         * This field support object paths expressions 'root[0].nest'.
         */
        set: /**
         * Set select option track by field path which is used to uniquely identify row for selection tracking.
         * This field support object paths expressions 'root[0].nest'.
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.config.selectTrackBy = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataTableComponent.prototype, "selectedRow", {
        /**
         * Set selected row identifier. Select specified row on initial load.
         * Applicable when row select mode is SINGLE or SINGLE_TOGGLE.
         */
        set: /**
         * Set selected row identifier. Select specified row on initial load.
         * Applicable when row select mode is SINGLE or SINGLE_TOGGLE.
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.dataStateService.selectedRow = value;
            this.eventStateService.rowSelectChangeStream.emit(this.dataStateService.selectedRow);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataTableComponent.prototype, "selectedRows", {
        /**
         * Set selected row identifiers collection. Select specified rows on initial load.
         * Applicable when selectMode is SINGLE or SINGLE_TOGGLE true.
         */
        set: /**
         * Set selected row identifiers collection. Select specified rows on initial load.
         * Applicable when selectMode is SINGLE or SINGLE_TOGGLE true.
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.dataStateService.selectedRows = value || [];
            this.eventStateService.rowSelectChangeStream.emit(this.dataStateService.selectedRows);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataTableComponent.prototype, "filterDebounceTime", {
        /**
         * Set filter debounce time in milliseconds. Applicable only when filterDebounce is true.
         */
        set: /**
         * Set filter debounce time in milliseconds. Applicable only when filterDebounce is true.
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.config.filterDebounceTime = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataTableComponent.prototype, "filterDebounce", {
        /**
         * Set filter data debounce enabled state with provided filterDebounceTime if true.
         */
        set: /**
         * Set filter data debounce enabled state with provided filterDebounceTime if true.
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.config.filterDebounce = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataTableComponent.prototype, "showRefreshButton", {
        /**
         * Set refresh button visible if true. Only applicable when showHeader is true.
         */
        set: /**
         * Set refresh button visible if true. Only applicable when showHeader is true.
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.config.showRefreshButton = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataTableComponent.prototype, "showColumnSelector", {
        /**
         * Row selector column width in pixels. Applicable only when showColumnSelector is true.
         */
        set: /**
         * Row selector column width in pixels. Applicable only when showColumnSelector is true.
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.config.showColumnSelector = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataTableComponent.prototype, "columnSelectorWidth", {
        /**
         * Set column selector dropdown width in pixels. Only applicable when showColumnSelector is true.
         */
        set: /**
         * Set column selector dropdown width in pixels. Only applicable when showColumnSelector is true.
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.config.columnSelectorWidth = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataTableComponent.prototype, "expanderColumnWidth", {
        /**
         * Set expander column width in pixels. Applicable only when expandableRows is true.
         */
        set: /**
         * Set expander column width in pixels. Applicable only when expandableRows is true.
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.config.expanderColumnWidth = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataTableComponent.prototype, "indexColumnWidth", {
        /**
         * Set index column width in pixels. Applicable only when showIndexColumn is true.
         */
        set: /**
         * Set index column width in pixels. Applicable only when showIndexColumn is true.
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.config.indexColumnWidth = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataTableComponent.prototype, "selectionColumnWidth", {
        /**
         * Set row selector column width in pixels. Applicable only when showColumnSelector is true.
         */
        set: /**
         * Set row selector column width in pixels. Applicable only when showColumnSelector is true.
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.config.selectionColumnWidth = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataTableComponent.prototype, "translations", {
        /**
         * Set translation data object. Used to localize table static label text.
         */
        set: /**
         * Set translation data object. Used to localize table static label text.
         * @param {?} data
         * @return {?}
         */
        function (data) {
            this.config.translations = data;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataTableComponent.prototype, "showRowExpandLoadingSpinner", {
        /**
         * Set row expand loading spinner visible if true. Applicable only when row expand is enabled.
         */
        set: /**
         * Set row expand loading spinner visible if true. Applicable only when row expand is enabled.
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.config.showRowExpandLoadingSpinner = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataTableComponent.prototype, "offset", {
        /**
         * Set data offset value (start offset index). Applicable only when pageable is true.
         */
        set: /**
         * Set data offset value (start offset index). Applicable only when pageable is true.
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.config.offset = value;
            this.eventStateService.dataFetchStream.next(DataFetchMode.SOFT_LOAD);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataTableComponent.prototype, "limit", {
        /**
         * Set data limit value (page size). Applicable only when pageable is true.
         */
        set: /**
         * Set data limit value (page size). Applicable only when pageable is true.
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.config.limit = value;
            this.eventStateService.dataFetchStream.next(DataFetchMode.SOFT_LOAD);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataTableComponent.prototype, "page", {
        /**
         * Get current page number.
         */
        get: /**
         * Get current page number.
         * @return {?}
         */
        function () {
            return Math.floor(this.config.offset / this.config.limit) + 1;
        },
        /**
         * Set current page number. Auto calculate offset depending on page number,
         * do not explicitly set offset when page is used.
         */
        set: /**
         * Set current page number. Auto calculate offset depending on page number,
         * do not explicitly set offset when page is used.
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.offset = (value - 1) * this.config.limit;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataTableComponent.prototype, "headerPadding", {
        /**
         * Get data table header padding in pixels.
         */
        get: /**
         * Get data table header padding in pixels.
         * @return {?}
         */
        function () {
            return this.config.contentHeight ? this.globalRefService.scrollbarWidth : 0;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataTableComponent.prototype, "isLoading", {
        /**
         * Get data loading status.
         */
        get: /**
         * Get data loading status.
         * @return {?}
         */
        function () {
            return !(this.config.loadOnScroll && this.dataStateService.dataRows.length)
                && this.config.showLoadingSpinner && this.dataStateService.dataLoading;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * On after data bind event handler
     * @param queryResult Query result object
     */
    /**
     * On after data bind event handler
     * @private
     * @param {?} queryResult Query result object
     * @return {?}
     */
    DataTableComponent.prototype.onAfterDataBind = /**
     * On after data bind event handler
     * @private
     * @param {?} queryResult Query result object
     * @return {?}
     */
    function (queryResult) {
        this.dataStateService.itemCount = queryResult.count;
        this.setDataRows(queryResult.items);
        if (this.dataStateService.heardReload) {
            this.eventStateService.fetchFilterOptionsStream.next(false);
            this.dataStateService.heardReload = false;
        }
        this.dataStateService.dataLoading = false;
        this.eventStateService.dataBoundStream.emit();
    };
    /**
     * Get data item selected state
     * @param item Data item object
     * @return True if item is selected
     */
    /**
     * Get data item selected state
     * @private
     * @param {?} item Data item object
     * @return {?} True if item is selected
     */
    DataTableComponent.prototype.getSelectedState = /**
     * Get data item selected state
     * @private
     * @param {?} item Data item object
     * @return {?} True if item is selected
     */
    function (item) {
        /** @type {?} */
        var id = get(item, this.config.selectTrackBy);
        if (id === undefined) {
            return false;
        }
        if (this.config.selectMode === 'multi') {
            return this.dataStateService.selectedRows.indexOf(id) > -1;
        }
        return this.dataStateService.selectedRow === id;
    };
    /**
     * Set data table item collection
     * @param items Data table item collection
     */
    /**
     * Set data table item collection
     * @private
     * @param {?} items Data table item collection
     * @return {?}
     */
    DataTableComponent.prototype.setDataRows = /**
     * Set data table item collection
     * @private
     * @param {?} items Data table item collection
     * @return {?}
     */
    function (items) {
        var _this = this;
        /** @type {?} */
        var mappedItems = items.map((/**
         * @param {?} item
         * @param {?} index
         * @return {?}
         */
        function (item, index) {
            /** @type {?} */
            var currentIndex;
            if (_this.config.loadOnScroll || _this.config.pageable) {
                currentIndex = _this.config.offset + index + 1;
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
                item: item,
                selected: _this.getSelectedState(item)
            };
        }));
        if (this.config.loadOnScroll) {
            this.dataStateService.dataRows = tslib_1.__spread(this.dataStateService.dataRows, mappedItems);
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
                    function (dataRow) {
                        return dataRow.selected;
                    }));
        }
        if (!this.config.loadOnScroll) {
            /** @type {?} */
            var substituteRowCount = this.config.limit - this.dataStateService.dataRows.length;
            this.dataStateService.substituteRows = Array.from({
                length: substituteRowCount
            });
        }
    };
    /**
     * Initialize data fetch event
     */
    /**
     * Initialize data fetch event
     * @private
     * @return {?}
     */
    DataTableComponent.prototype.initDataFetchEvent = /**
     * Initialize data fetch event
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var noop = {
            items: [],
            count: 0
        };
        this.dataFetchStreamSubscription = this.eventStateService.dataFetchStream
            .pipe(debounceTime(20), switchMap((/**
         * @param {?} fetchMode
         * @return {?}
         */
        function (fetchMode) { return _this.mapDataBind(fetchMode); })), catchError((/**
         * @return {?}
         */
        function () {
            return of(noop);
        })))
            .subscribe((/**
         * @param {?} queryResult
         * @return {?}
         */
        function (queryResult) {
            _this.onAfterDataBind(queryResult);
        }), (/**
         * @return {?}
         */
        function () {
            _this.onAfterDataBind(noop);
        }));
    };
    /**
     * Re-map data binding data
     * @param fetchMode Data fetch mode
     * @return Data table query result stream
     */
    /**
     * Re-map data binding data
     * @private
     * @param {?} fetchMode Data fetch mode
     * @return {?} Data table query result stream
     */
    DataTableComponent.prototype.mapDataBind = /**
     * Re-map data binding data
     * @private
     * @param {?} fetchMode Data fetch mode
     * @return {?} Data table query result stream
     */
    function (fetchMode) {
        this.dataStateService.dataLoading = true;
        if (fetchMode === DataFetchMode.HARD_RELOAD) {
            this.clearRowSelectState();
            this.clearColumnState();
            this.dataStateService.heardReload = true;
            this.config.offset = 0;
        }
        /** @type {?} */
        var params = {
            loadData: fetchMode === DataFetchMode.HARD_RELOAD || fetchMode === DataFetchMode.SOFT_RELOAD
        };
        if (this.columns) {
            params.fields = this.columns
                .filter((/**
             * @param {?} column
             * @return {?}
             */
            function (column) {
                return column.sortable || column.filterable;
            }))
                .reduce((/**
             * @param {?} acc
             * @param {?} column
             * @return {?}
             */
            function (acc, column) {
                if (column.sortField || column.filterField) {
                    acc.push({
                        field: column.sortField || column.filterField,
                        column: column
                    });
                }
                else {
                    acc.push({
                        field: column.field,
                        column: column
                    });
                }
                return acc;
            }), [])
                .map((/**
             * @param {?} uniqueField
             * @return {?}
             */
            function (uniqueField) {
                /** @type {?} */
                var filter;
                if (uniqueField.column.showDropdownFilter) {
                    if (uniqueField.column.dropdownFilterSelectMode === 'multi') {
                        filter = uniqueField.column.filter && uniqueField.column.filter.map((/**
                         * @param {?} filterValue
                         * @return {?}
                         */
                        function (filterValue) { return filterValue.key; }));
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
    };
    /**
     * Initialize data table state via previous state snapshot; Applicable only when persist table state is enabled
     */
    /**
     * Initialize data table state via previous state snapshot; Applicable only when persist table state is enabled
     * @private
     * @return {?}
     */
    DataTableComponent.prototype.initDataTableState = /**
     * Initialize data table state via previous state snapshot; Applicable only when persist table state is enabled
     * @private
     * @return {?}
     */
    function () {
        if (this.config.persistTableState) {
            /** @type {?} */
            var dataTableState_1 = this.dataTableStateService.getState(this.dataStateService.id);
            if (dataTableState_1) {
                this.columns.forEach((/**
                 * @param {?} column
                 * @return {?}
                 */
                function (column) {
                    /** @type {?} */
                    var field = dataTableState_1.fields.find((/**
                     * @param {?} col
                     * @return {?}
                     */
                    function (col) {
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
                                        function (filterValue) {
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
                this.config.limit = dataTableState_1.limit;
                this.config.offset = dataTableState_1.offset;
            }
        }
    };
    /**
     * After component initialize lifecycle event handler
     */
    /**
     * After component initialize lifecycle event handler
     * @return {?}
     */
    DataTableComponent.prototype.ngAfterContentInit = /**
     * After component initialize lifecycle event handler
     * @return {?}
     */
    function () {
        var _this = this;
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
            function (pos) {
                /** @type {?} */
                var roundingPixel = 1;
                /** @type {?} */
                var gutterPixel = 1;
                if (pos.isVertical
                    && pos.scrollTop >= pos.scrollHeight - (1 + _this.config.loadViewDistanceRatio) * pos.clientHeight - roundingPixel - gutterPixel
                    && (_this.config.offset + _this.config.limit) < _this.dataStateService.itemCount
                    && !_this.dataStateService.dataLoading) {
                    _this.dataStateService.dataLoading = true;
                    _this.zone.run((/**
                     * @return {?}
                     */
                    function () {
                        _this.offset = _this.config.offset + _this.config.limit;
                    }));
                }
            }));
        }
    };
    /**
     * Reset column sort and filter state
     */
    /**
     * Reset column sort and filter state
     * @private
     * @return {?}
     */
    DataTableComponent.prototype.clearColumnState = /**
     * Reset column sort and filter state
     * @private
     * @return {?}
     */
    function () {
        this.columns.forEach((/**
         * @param {?} column
         * @return {?}
         */
        function (column) {
            column.resetSortOrder();
            column.filter = undefined;
        }));
    };
    /**
     * Clear selected data row status
     */
    /**
     * Clear selected data row status
     * @private
     * @return {?}
     */
    DataTableComponent.prototype.clearRowSelectState = /**
     * Clear selected data row status
     * @private
     * @return {?}
     */
    function () {
        this.dataStateService.selectedRow = undefined;
        this.dataStateService.selectedRows = [];
        this.dataStateService.allRowSelected = false;
    };
    /**
     * Fetch data from data source
     * @param fetchMode Data fetch mode
     */
    /**
     * Fetch data from data source
     * @param {?=} fetchMode Data fetch mode
     * @return {?}
     */
    DataTableComponent.prototype.fetchData = /**
     * Fetch data from data source
     * @param {?=} fetchMode Data fetch mode
     * @return {?}
     */
    function (fetchMode) {
        if (fetchMode === void 0) { fetchMode = DataFetchMode.SOFT_RELOAD; }
        this.eventStateService.dataFetchStream.next(fetchMode);
    };
    /**
     * Initialize data source
     * @param source Data source stream
     */
    /**
     * Initialize data source
     * @param {?} source Data source stream
     * @return {?}
     */
    DataTableComponent.prototype.initDataSource = /**
     * Initialize data source
     * @param {?} source Data source stream
     * @return {?}
     */
    function (source) {
        var _this = this;
        this.dataTableResourceService.setDataSource(source);
        this.onDataBind = (/**
         * @param {?} params
         * @return {?}
         */
        function (params) {
            if (params.loadData) {
                _this.dataTableResourceService.setDataSource(source);
            }
            return _this.dataTableResourceService.query(params);
        });
        this.onFilterValueExtract = (/**
         * @param {?} column
         * @return {?}
         */
        function (column) {
            return _this.dataTableResourceService.extractFilterOptions(column);
        });
    };
    /**
     * Component value write event handler; Form control support implementation
     */
    /**
     * Component value write event handler; Form control support implementation
     * @param {?} value
     * @return {?}
     */
    DataTableComponent.prototype.writeValue = /**
     * Component value write event handler; Form control support implementation
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (this.config.selectMode === 'multi') {
            this.selectedRows = value;
        }
        else {
            this.selectedRow = value;
        }
    };
    /**
     * Register select change event handler; Form control support implementation
     * @param onSelectChange Select change event handler callback
     */
    /**
     * Register select change event handler; Form control support implementation
     * @param {?} onSelectChange Select change event handler callback
     * @return {?}
     */
    DataTableComponent.prototype.registerOnChange = /**
     * Register select change event handler; Form control support implementation
     * @param {?} onSelectChange Select change event handler callback
     * @return {?}
     */
    function (onSelectChange) {
        this.rowSelectChangeSubscription = this.eventStateService.rowSelectChangeStream.subscribe((/**
         * @param {?} selectedIds
         * @return {?}
         */
        function (selectedIds) {
            onSelectChange(selectedIds);
        }));
    };
    /**
     * Register on touch event handler; Form control support implementation
     * @param fn Touch event callback handler
     */
    /**
     * Register on touch event handler; Form control support implementation
     * @param {?} fn Touch event callback handler
     * @return {?}
     */
    DataTableComponent.prototype.registerOnTouched = /**
     * Register on touch event handler; Form control support implementation
     * @param {?} fn Touch event callback handler
     * @return {?}
     */
    function (fn) { };
    Object.defineProperty(DataTableComponent.prototype, "tableWidth", {
        /**
         * Get table width in pixels
         */
        get: /**
         * Get table width in pixels
         * @return {?}
         */
        function () {
            return this.config.width || this.dataStateService.tableWidth;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    DataTableComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
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
    };
    /**
     * Component destroy lifecycle event handler
     */
    /**
     * Component destroy lifecycle event handler
     * @return {?}
     */
    DataTableComponent.prototype.ngOnDestroy = /**
     * Component destroy lifecycle event handler
     * @return {?}
     */
    function () {
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
    };
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
                            function () { return DataTableComponent; })),
                            multi: true
                        }
                    ]
                }] }
    ];
    /** @nocollapse */
    DataTableComponent.ctorParameters = function () { return [
        { type: DragAndDropService },
        { type: DataTablePersistenceService },
        { type: GlobalRefService },
        { type: DataTableEventStateService },
        { type: DataTableResourceService },
        { type: NgZone },
        { type: DataTableDataStateService },
        { type: DataTableScrollPositionService },
        { type: DataTableConfigService }
    ]; };
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
    return DataTableComponent;
}());
export { DataTableComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS10YWJsZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9vcm5hbWVudHVtLyIsInNvdXJjZXMiOlsiZGF0YS10YWJsZS9jb21wb25lbnRzL2RhdGEtdGFibGUvZGF0YS10YWJsZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULFlBQVksRUFDWixlQUFlLEVBQ2YsWUFBWSxFQUNaLEtBQUssRUFFTCxNQUFNLEVBQ04sU0FBUyxFQUNULFdBQVcsRUFFWCxVQUFVLEVBQ1YsVUFBVSxFQUNWLFNBQVMsRUFFVCxNQUFNLEVBQ1AsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUF3QixpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXpFLE9BQU8sRUFBZ0IsVUFBVSxFQUFFLEVBQUUsRUFBVyxNQUFNLE1BQU0sQ0FBQztBQUM3RCxPQUFPLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVyRSxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0RBQWdELENBQUM7QUFvQnJFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUVsRSxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxrREFBa0QsQ0FBQztBQUU1RixPQUFPLEVBQUUsa0JBQWtCLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUN2RixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUMvRSxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUNyRixPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSw4Q0FBOEMsQ0FBQztBQUN6RixPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSwrQ0FBK0MsQ0FBQztBQUM1RixPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSwwQ0FBMEMsQ0FB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MUMsK0NBQXFEOzs7OztJQUNyRCxzREFBK0Q7Ozs7O0lBQy9ELGtDQUFvQjs7SUFDcEIsOENBQWtEOztJQUNsRCxtREFBNEQ7O0lBQzVELG9DQUFxQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgQ29udGVudENoaWxkLFxuICBDb250ZW50Q2hpbGRyZW4sXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5wdXQsXG4gIE9uRGVzdHJveSxcbiAgT3V0cHV0LFxuICBRdWVyeUxpc3QsXG4gIFRlbXBsYXRlUmVmLFxuICBBZnRlckNvbnRlbnRJbml0LFxuICBmb3J3YXJkUmVmLFxuICBFbGVtZW50UmVmLFxuICBWaWV3Q2hpbGQsXG4gIE9uSW5pdCxcbiAgTmdab25lXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5pbXBvcnQgeyBTdWJzY3JpcHRpb24sIE9ic2VydmFibGUsIG9mLCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBjYXRjaEVycm9yLCBkZWJvdW5jZVRpbWUsIHN3aXRjaE1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgZ2V0IH0gZnJvbSAnLi4vLi4vLi4vdXRpbGl0eS9zZXJ2aWNlcy9vYmplY3QtdXRpbGl0eS5jbGFzcyc7XG5cbmltcG9ydCB7IERhdGFUYWJsZUZpbHRlclZhbHVlRXh0cmFjdENhbGxiYWNrIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2RhdGEtdGFibGUtZmlsdGVyLXZhbHVlLWV4dHJhY3QtY2FsbGJhY2subW9kZWwnO1xuaW1wb3J0IHsgRGF0YVRhYmxlQ2VsbEJpbmRFdmVudEFyZ3MgfSBmcm9tICcuLi8uLi9tb2RlbHMvZGF0YS10YWJsZS1jZWxsLWJpbmQtZXZlbnQtYXJncy5tb2RlbCc7XG5pbXBvcnQgeyBEYXRhVGFibGVDZWxsQ2xpY2tFdmVudEFyZ3MgfSBmcm9tICcuLi8uLi9tb2RlbHMvZGF0YS10YWJsZS1jZWxsLWNsaWNrLWV2ZW50LWFyZ3MubW9kZWwnO1xuaW1wb3J0IHsgRGF0YVRhYmxlSGVhZGVyQ2xpY2tFdmVudEFyZ3MgfSBmcm9tICcuLi8uLi9tb2RlbHMvZGF0YS10YWJsZS1oZWFkZXItY2xpY2stZXZlbnQtYXJncy5tb2RlbCc7XG5pbXBvcnQgeyBEYXRhVGFibGVEb3VibGVDbGlja0V2ZW50QXJncyB9IGZyb20gJy4uLy4uL21vZGVscy9kYXRhLXRhYmxlLWRvdWJsZS1jbGljay1ldmVudC1hcmdzLm1vZGVsJztcbmltcG9ydCB7IERhdGFUYWJsZVJvd0NsaWNrRXZlbnRBcmdzIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2RhdGEtdGFibGUtcm93LWNsaWNrLWV2ZW50LWFyZ3MubW9kZWwnO1xuaW1wb3J0IHsgRGF0YVRhYmxlUm93IH0gZnJvbSAnLi4vLi4vbW9kZWxzL2RhdGEtdGFibGUtcm93Lm1vZGVsJztcbmltcG9ydCB7IERhdGFUYWJsZVJlcXVlc3RQYXJhbXMgfSBmcm9tICcuLi8uLi9tb2RlbHMvZGF0YS10YWJsZS1yZXF1ZXN0LXBhcmFtcy5tb2RlbCc7XG5pbXBvcnQgeyBEYXRhVGFibGVUcmFuc2xhdGlvbnMgfSBmcm9tICcuLi8uLi9tb2RlbHMvZGF0YS10YWJsZS10cmFuc2xhdGlvbnMubW9kZWwnO1xuaW1wb3J0IHsgRGF0YVRhYmxlRHluYW1pY1Jvd1NwYW5FeHRyYWN0b3JDYWxsYmFjayB9IGZyb20gJy4uLy4uL21vZGVscy9kYXRhLXRhYmxlLWdyb3VwLWZpZWxkLWV4dHJhY3Rvci1jYWxsYmFjay5tb2RlbCc7XG5pbXBvcnQgeyBEYXRhVGFibGVRdWVyeVJlc3VsdCB9IGZyb20gJy4uLy4uL21vZGVscy9kYXRhLXRhYmxlLXF1ZXJ5LXJlc3VsdC5tb2RlbCc7XG5pbXBvcnQgeyBEYXRhVGFibGVEYXRhQmluZENhbGxiYWNrIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2RhdGEtdGFibGUtZGF0YS1iaW5kLWNhbGxiYWNrLm1vZGVsJztcbmltcG9ydCB7IERhdGFUYWJsZUZpbHRlck9wdGlvbiB9IGZyb20gJy4uLy4uL21vZGVscy9kYXRhLXRhYmxlLWZpbHRlci1vcHRpb24ubW9kZWwnO1xuaW1wb3J0IHsgRGF0YVRhYmxlVW5pcXVlRmllbGQgfSBmcm9tICcuLi8uLi9tb2RlbHMvZGF0YS10YWJsZS11bmlxdWUtZmllbGQubW9kZWwnO1xuXG5pbXBvcnQgeyBEYXRhVGFibGVTZWxlY3RNb2RlIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2RhdGEtdGFibGUtc2VsZWN0LW1vZGUubW9kZWwnO1xuaW1wb3J0IHsgRGF0YVRhYmxlU3RvcmFnZU1vZGUgfSBmcm9tICcuLi8uLi9tb2RlbHMvZGF0YS10YWJsZS1zdG9yYWdlLW1vZGUubW9kZWwnO1xuaW1wb3J0IHsgRGF0YVRhYmxlU2Nyb2xsUG9pbnQgfSBmcm9tICcuLi8uLi9tb2RlbHMvZGF0YS10YWJsZS1zY3JvbGwtcG9pbnQubW9kZWwnO1xuaW1wb3J0IHsgRGF0YUZldGNoTW9kZSB9IGZyb20gJy4uLy4uL21vZGVscy9kYXRhLWZldGNoLW1vZGUuZW51bSc7XG5cbmltcG9ydCB7IERhdGFUYWJsZUNvbHVtbkNvbXBvbmVudCB9IGZyb20gJy4uL2RhdGEtdGFibGUtY29sdW1uL2RhdGEtdGFibGUtY29sdW1uLmNvbXBvbmVudCc7XG5cbmltcG9ydCB7IERyYWdBbmREcm9wU2VydmljZSwgR2xvYmFsUmVmU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL3V0aWxpdHkvdXRpbGl0eS5tb2R1bGUnO1xuaW1wb3J0IHsgVmFsaWRhdG9yU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL3V0aWxpdHkvc2VydmljZXMvdmFsaWRhdG9yLnNlcnZpY2UnO1xuaW1wb3J0IHsgRGF0YVRhYmxlRXZlbnRTdGF0ZVNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9kYXRhLXRhYmxlLWV2ZW50LnNlcnZpY2UnO1xuaW1wb3J0IHsgRGF0YVRhYmxlRGF0YVN0YXRlU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2RhdGEtdGFibGUtZGF0YS1zdGF0ZS5zZXJ2aWNlJztcbmltcG9ydCB7IERhdGFUYWJsZVBlcnNpc3RlbmNlU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2RhdGEtdGFibGUtcGVyc2lzdGVuY2Uuc2VydmljZSc7XG5pbXBvcnQgeyBEYXRhVGFibGVDb25maWdTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvZGF0YS10YWJsZS1jb25maWcuc2VydmljZSc7XG5pbXBvcnQgeyBEYXRhVGFibGVTY3JvbGxQb3NpdGlvblNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9kYXRhLXRhYmxlLXNjcm9sbC1wb3NpdGlvbi5zZXJ2aWNlJztcbmltcG9ydCB7IERhdGFUYWJsZVJlc291cmNlU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2RhdGEtdGFibGUtcmVzb3VyY2Uuc2VydmljZSc7XG5cbi8qKlxuICogRGF0YSB0YWJsZSBjb21wb25lbnQ7IERhdGEgdGFibGUgZW50cnkgY29tcG9uZW50LlxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduZy1kYXRhLXRhYmxlJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2RhdGEtdGFibGUuY29tcG9uZW50Lmh0bWwnLFxuICBwcm92aWRlcnM6IFtcbiAgICBEYXRhVGFibGVDb25maWdTZXJ2aWNlLFxuICAgIERhdGFUYWJsZUV2ZW50U3RhdGVTZXJ2aWNlLFxuICAgIERhdGFUYWJsZVBlcnNpc3RlbmNlU2VydmljZSxcbiAgICBEYXRhVGFibGVEYXRhU3RhdGVTZXJ2aWNlLFxuICAgIERhdGFUYWJsZVNjcm9sbFBvc2l0aW9uU2VydmljZSxcbiAgICBEYXRhVGFibGVSZXNvdXJjZVNlcnZpY2UsXG4gICAge1xuICAgICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gICAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBEYXRhVGFibGVDb21wb25lbnQpLFxuICAgICAgbXVsdGk6IHRydWVcbiAgICB9XG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgRGF0YVRhYmxlQ29tcG9uZW50IGltcGxlbWVudHMgT25EZXN0cm95LCBPbkluaXQsIEFmdGVyQ29udGVudEluaXQsIENvbnRyb2xWYWx1ZUFjY2Vzc29yIHtcbiAgcHJpdmF0ZSByb3dTZWxlY3RDaGFuZ2VTdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcbiAgcHJpdmF0ZSBkYXRhRmV0Y2hTdHJlYW1TdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcbiAgcHJpdmF0ZSBzY3JvbGxQb3NpdGlvblN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuXG4gIC8qKlxuICAgKiBEYXRhIHRhYmxlIGNvbHVtbiBjb21wb25lbnQgY29sbGVjdGlvbi5cbiAgICovXG4gIEBDb250ZW50Q2hpbGRyZW4oRGF0YVRhYmxlQ29sdW1uQ29tcG9uZW50KVxuICBwdWJsaWMgY29sdW1uczogUXVlcnlMaXN0PERhdGFUYWJsZUNvbHVtbkNvbXBvbmVudD47XG5cbiAgLyoqXG4gICAqIFRlbXBsYXRlIHRvIGRpc3BsYXkgd2hlbiBkYXRhIHJvdyBpcyBleHBhbmRlZCBmb3IgZGV0YWlsIHZpZXcuXG4gICAqL1xuICBAQ29udGVudENoaWxkKCduZ0RhdGFUYWJsZVJvd0V4cGFuZCcsIHsgc3RhdGljOiB0cnVlIH0pXG4gIHB1YmxpYyByb3dFeHBhbmRUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcblxuICAvKipcbiAgICogVGVtcGxhdGUgdG8gZGlzcGxheSB3aGVuIGRhdGEgc2V0IGlzIGVtcHR5LlxuICAgKi9cbiAgQENvbnRlbnRDaGlsZCgnbmdEYXRhVGFibGVOb1JlY29yZHMnLCB7IHN0YXRpYzogdHJ1ZSB9KVxuICBwdWJsaWMgbm9SZWNvcmRzVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgLyoqXG4gICAqIFRlbXBsYXRlIHRvIGRpc3BsYXkgd2hpbGUgbG9hZGluZyBkYXRhLlxuICAgKi9cbiAgQENvbnRlbnRDaGlsZCgnbmdEYXRhVGFibGVMb2FkaW5nU3Bpbm5lcicsIHsgc3RhdGljOiB0cnVlIH0pXG4gIHB1YmxpYyBsb2FkaW5nU3Bpbm5lclRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG4gIC8qKlxuICAgKiBUZW1wbGF0ZSB0byBkaXNwbGF5IHdoaWxlIHJvdyBpcyBleHBhbmRpbmcgdG8gbG9hZCBkZXRhaWwgdmlldy5cbiAgICovXG4gIEBDb250ZW50Q2hpbGQoJ25nRGF0YVRhYmxlUm93RXhwYW5kTG9hZGluZ1NwaW5uZXInLCB7IHN0YXRpYzogdHJ1ZSB9KVxuICBwdWJsaWMgcm93RXhwYW5kTG9hZGluZ1NwaW5uZXJUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcblxuICAvKipcbiAgICogRGF0YSB0YWJsZSBzZWxmIERPTSBlbGVtZW50IHJlZmVyZW5jZS5cbiAgICovXG4gIEBWaWV3Q2hpbGQoJ2RhdGFUYWJsZUVsZW1lbnQnLCB7IHN0YXRpYzogdHJ1ZSB9KVxuICBwdWJsaWMgZGF0YVRhYmxlRWxlbWVudDogRWxlbWVudFJlZjxIVE1MRGl2RWxlbWVudD47XG5cbiAgLy8gRXZlbnQgaGFuZGxlcnNcblxuICAvKipcbiAgICogRGF0YSB0YWJsZSBpbml0aWFsaXplIGV2ZW50IGhhbmRsZXIuXG4gICAqIFRyaWdnZXJlZCBhZnRlciBkYXRhIHRhYmxlIGluaXRpYWxpemUuXG4gICAqL1xuICBAT3V0cHV0KClcbiAgcHVibGljIGluaXQ6IEV2ZW50RW1pdHRlcjxEYXRhVGFibGVDb21wb25lbnQ+O1xuXG4gIC8qKlxuICAgKiBSb3cgc2VsZWN0ZWQgc3RhdGUgY2hhbmdlIGV2ZW50IGhhbmRsZXIuXG4gICAqIFRyaWdnZXJlZCB3aGVuIHRhYmxlIHJvdyBzZWxlY3RlZCBzdGF0ZSBjaGFuZ2UuXG4gICAqL1xuICBAT3V0cHV0KClcbiAgcHVibGljIHJvd1NlbGVjdENoYW5nZTogRXZlbnRFbWl0dGVyPGFueSB8IGFueVtdPjtcblxuICAvKipcbiAgICogUm93IGNsaWNrIGV2ZW50IGhhbmRsZXIuXG4gICAqIFRyaWdnZXJlZCB3aGVuIGRhdGEgcm93IGlzIGNsaWNrZWQuXG4gICAqL1xuICBAT3V0cHV0KClcbiAgcHVibGljIHJvd0NsaWNrOiBFdmVudEVtaXR0ZXI8RGF0YVRhYmxlUm93Q2xpY2tFdmVudEFyZ3M8YW55Pj47XG5cbiAgLyoqXG4gICAqIFJvdyBkb3VibGUgY2xpY2sgZXZlbnQgaGFuZGxlci5cbiAgICogVHJpZ2dlcmVkIHdoZW4gZGF0YSByb3cgaXMgZG91YmxlIGNsaWNrZWQuXG4gICAqL1xuICBAT3V0cHV0KClcbiAgcHVibGljIHJvd0RvdWJsZUNsaWNrOiBFdmVudEVtaXR0ZXI8RGF0YVRhYmxlRG91YmxlQ2xpY2tFdmVudEFyZ3M8YW55Pj47XG5cbiAgLyoqXG4gICAqIEhlYWRlciBjbGljayBldmVudCBoYW5kbGVyLlxuICAgKiBUcmlnZ2VyZWQgd2hlbiBoZWFkZXIgY29sdW1uIGNsaWNrZWQuXG4gICAqL1xuICBAT3V0cHV0KClcbiAgcHVibGljIGhlYWRlckNsaWNrOiBFdmVudEVtaXR0ZXI8RGF0YVRhYmxlSGVhZGVyQ2xpY2tFdmVudEFyZ3M+O1xuXG4gIC8qKlxuICAgKiBBbGwgcm93IHNlbGVjdCBjaGFuZ2UgZXZlbnQgaGFuZGxlci5cbiAgICogVHJpZ2dlcmVkIHdoZW4gYWxsIHJvdyBzZWxlY3Qgc3RhdGUgY2hhbmdlZC5cbiAgICovXG4gIEBPdXRwdXQoKVxuICBwdWJsaWMgYWxsUm93U2VsZWN0Q2hhbmdlOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj47XG5cbiAgLyoqXG4gICAqIENlbGwgY2xpY2sgZXZlbnQgaGFuZGxlci5cbiAgICogVHJpZ2dlcmVkIHdoZW4gY2xpY2tlZCBvbiBhIGNlbGwuXG4gICAqL1xuICBAT3V0cHV0KClcbiAgcHVibGljIGNlbGxDbGljazogRXZlbnRFbWl0dGVyPERhdGFUYWJsZUNlbGxDbGlja0V2ZW50QXJnczxhbnk+PjtcblxuICAvKipcbiAgICogRGF0YSBib3VuZCBldmVudCBoYW5kbGVyLlxuICAgKiBUcmlnZ2VyZWQgYWZ0ZXIgZGF0YSBiaW5kLlxuICAgKi9cbiAgQE91dHB1dCgpXG4gIHB1YmxpYyBkYXRhQm91bmQ6IEV2ZW50RW1pdHRlcjx2b2lkPjtcblxuICAvKipcbiAgICogUm93IGJpbmQgZXZlbnQgaGFuZGxlci5cbiAgICogVHJpZ2dlciBvbiBlYWNoIHJvdyBkYXRhIGJpbmQuXG4gICAqL1xuICBAT3V0cHV0KClcbiAgcHVibGljIHJvd0JpbmQ6IEV2ZW50RW1pdHRlcjxEYXRhVGFibGVSb3c8YW55Pj47XG5cbiAgLyoqXG4gICAqIENvbHVtbiBiaW5kIGV2ZW50IGhhbmRsZXIuXG4gICAqIFRyaWdnZXJlZCBhZnRlciBjb2x1bW4gZGF0YSBiaW5kLlxuICAgKi9cbiAgQE91dHB1dCgpXG4gIHB1YmxpYyBjb2x1bW5CaW5kOiBFdmVudEVtaXR0ZXI8RGF0YVRhYmxlQ29sdW1uQ29tcG9uZW50PjtcblxuICAvKipcbiAgICogQ2VsbCBiaW5kIGV2ZW50IGhhbmRsZXIuXG4gICAqIFRyaWdnZXJlZCBhZnRlciBkYXRhIHRhYmxlIGNlbGwgZGF0YSBiaW5kLlxuICAgKi9cbiAgQE91dHB1dCgpXG4gIHB1YmxpYyBjZWxsQmluZDogRXZlbnRFbWl0dGVyPERhdGFUYWJsZUNlbGxCaW5kRXZlbnRBcmdzPGFueT4+O1xuXG4gIC8vIElucHV0IEV2ZW50c1xuXG4gIC8qKlxuICAgKiBTZXQgZGF0YSBiaW5kIGV2ZW50IGhhbmRsZXIgY2FsbGJhY2suIFRoaXMgaGFuZGxlciBpcyBmaXJlZCBvbiBlYWNoIGRhdGEgZmV0Y2ggcmVxdWVzdC5cbiAgICovXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgb25EYXRhQmluZCh2YWx1ZTogRGF0YVRhYmxlRGF0YUJpbmRDYWxsYmFjazxhbnk+KSB7XG4gICAgdGhpcy5kYXRhU3RhdGVTZXJ2aWNlLm9uRGF0YUJpbmQgPSB2YWx1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgZmlsdGVyIHZhbHVlIGV4dHJhY3QgZXZlbnQgaGFuZGxlciBjYWxsYmFjay4gVXNlZCB0byBleHRyYWN0IGZpbHRlciB2YWx1ZSBjb2xsZWN0aW9uIGR5bmFtaWNhbGx5IHdoZW5cbiAgICogZXhwbGljaXQgZGF0YSBiaW5kIGZ1bmN0aW9uYWxpdHkgaXMgdXNlZCB3aXRoIG9uRGF0YUJpbmQgY2FsbGJhY2suXG4gICAqL1xuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IG9uRmlsdGVyVmFsdWVFeHRyYWN0KHZhbHVlOiBEYXRhVGFibGVGaWx0ZXJWYWx1ZUV4dHJhY3RDYWxsYmFjaykge1xuICAgIHRoaXMuZGF0YVN0YXRlU2VydmljZS5vbkZpbHRlclZhbHVlRXh0cmFjdCA9IHZhbHVlO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCBvbiBkeW5hbWljIHJvdyBzcGFuIGV4dHJhY3QgZXZlbnQgaGFuZGxlciBjYWxsYmFjay5cbiAgICovXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgb25EeW5hbWljUm93U3BhbkV4dHJhY3QodmFsdWU6IERhdGFUYWJsZUR5bmFtaWNSb3dTcGFuRXh0cmFjdG9yQ2FsbGJhY2s8YW55Pikge1xuICAgIHRoaXMuZGF0YVN0YXRlU2VydmljZS5vbkR5bmFtaWNSb3dTcGFuRXh0cmFjdCA9IHZhbHVlO1xuICB9XG5cbiAgLy8gSW5wdXQgcGFyYW1ldGVyc1xuXG4gIC8qKlxuICAgKiBTZXQgc3RhdGljIGRhdGEgaXRlbXMgY29sbGVjdGlvbi4gTm8gbmVlZCB0byBzZXQgZGF0YSBzb3VyY2Ugd2hlbiBzdGF0aWMgaXRlbXMgY29sbGVjdGlvbiBpcyBwcm92aWRlZC5cbiAgICovXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgaXRlbXModmFsdWU6IGFueVtdKSB7XG4gICAgaWYgKCF2YWx1ZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuZXZlbnRTdGF0ZVNlcnZpY2Uuc3RhdGljRGF0YVNvdXJjZVN0cmVhbS5uZXh0KHZhbHVlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgZGF0YSBzb3VyY2Ugb2JzZXJ2YWJsZS4gVGhpcyBvYnNlcnZhYmxlIGlzIHVzZWQgdG8gcmV0cmlldmUgcm93IGRhdGEgZm9yIGJpbmRpbmcuXG4gICAqL1xuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IGRhdGFTb3VyY2Uoc291cmNlOiBPYnNlcnZhYmxlPGFueVtdPikge1xuICAgIHRoaXMuaW5pdERhdGFTb3VyY2Uoc291cmNlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgZGF0YSB0YWJsZSB1bmlxdWUgaWRlbnRpZmllci5cbiAgICovXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgaWQodmFsdWU6IHN0cmluZykge1xuICAgIGlmICghVmFsaWRhdG9yU2VydmljZS5pZFBhdHRlcm5WYWxpZGF0b3JFeHByZXNzaW9uLnRlc3QodmFsdWUpKSB7XG4gICAgICB0aHJvdyBFcnJvcignSW52YWxpZCBbaWRdIGlucHV0IHZhbHVlLiBVbmlxdWUgaWRlbnRpZmllciBwYXJhbWV0ZXIgb25seSBhY2NlcHQgc3RyaW5nIGJlZ2luIHdpdGggYSBsZXR0ZXIgKFtBLVphLXpdKSBhbmQgbWF5IGJlIGZvbGxvd2VkIGJ5IGFueSBudW1iZXIgb2YgbGV0dGVycywgZGlnaXRzIChbMC05XSksIGh5cGhlbnMgKFwiLVwiKSwgdW5kZXJzY29yZXMgKFwiX1wiKS4nKTtcbiAgICB9XG5cbiAgICB0aGlzLmRhdGFTdGF0ZVNlcnZpY2UuaWQgPSB2YWx1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgcGVyc2lzdCB0YWJsZSBzdGF0ZSBvbiBwcm92aWRlZCBzdG9yYWdlIG1vZGUgaWYgdHJ1ZS4gRGVwZW5kcyBvbiBzdG9yYWdlTW9kZSBwcm9wZXJ0eS5cbiAgICovXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgcGVyc2lzdFRhYmxlU3RhdGUodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLmNvbmZpZy5wZXJzaXN0VGFibGVTdGF0ZSA9IHZhbHVlO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCBzdG9yYWdlIG1vZGUgdG8gcGVyc2lzdCB0YWJsZSBzdGF0ZS4gT25seSBhcHBsaWNhYmxlIHdoZW4gcGVyc2lzdFRhYmxlU3RhdGUgaXMgdHJ1ZS5cbiAgICovXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgc3RvcmFnZU1vZGUodmFsdWU6IERhdGFUYWJsZVN0b3JhZ2VNb2RlKSB7XG4gICAgdGhpcy5kYXRhVGFibGVTdGF0ZVNlcnZpY2Uuc3RvcmFnZU1vZGUgPSB2YWx1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgbXVsdGlwbGUgY29sdW1uIHNvcnRhYmxlIGlmIHRydWUuIE9ubHkgYXBwbGljYWJsZSBmb3Igc29ydGFibGUgdHJ1ZSBjb2x1bW5zLlxuICAgKi9cbiAgQElucHV0KClcbiAgcHVibGljIHNldCBtdWx0aUNvbHVtblNvcnRhYmxlKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5jb25maWcubXVsdGlDb2x1bW5Tb3J0YWJsZSA9IHZhbHVlO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCB0YWJsZSBoZWFkZXIgYmFyIHZpc2libGUgaWYgdHJ1ZS5cbiAgICovXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgc2hvd0hlYWRlcih2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuY29uZmlnLnNob3dIZWFkZXIgPSB2YWx1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgdGl0bGUgdG8gYmUgc2hvd24gaW4gdGhlIGhlYWRlci4gT25seSBhcHBsaWNhYmxlIHdoZW4gc2hvd0hlYWRlciBpcyB0cnVlLlxuICAgKi9cbiAgQElucHV0KClcbiAgcHVibGljIHNldCB0aXRsZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5jb25maWcudGl0bGUgPSB2YWx1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgd2lkdGggdmFsdWUgaW4gcGl4ZWxzLiBDYW4gYmUgdXNlZCB0byBzZXQgdGhlIHdpZHRoIG9mIHRlaCB0YWJsZSAocmVzcG9uc2l2ZSBpZiBub3Qgc2V0KS5cbiAgICovXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgd2lkdGgodmFsdWU6IHN0cmluZyB8IG51bWJlcikge1xuICAgIHRoaXMuY29uZmlnLndpZHRoID0gdmFsdWU7XG4gIH1cblxuICAvKipcbiAgICogU2V0IG1pbmltdW0gdGFibGUgY29udGVudCBoZWlnaHQgdmFsdWUgaW4gcGl4ZWxzLiBDYW4gYmUgdXNlZCB0byBzZXQgdGhlIG1pbmltdW0gaGVpZ2h0IG9mIHRoZSB0YWJsZSBjb250ZW50IGFyZWEuXG4gICAqL1xuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IG1pbkNvbnRlbnRIZWlnaHQodmFsdWU6IHN0cmluZyB8IG51bWJlcikge1xuICAgIHRoaXMuY29uZmlnLm1pbkNvbnRlbnRIZWlnaHQgPSB2YWx1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBNaW5pbXVtIHRhYmxlIGNvbnRlbnQgd2lkdGggdmFsdWUgaW4gcGl4ZWxzLiBDYW4gYmUgdXNlZCB0byBzZXQgdGhlIG1pbmltdW0gd2lkdGggb2YgdGhlIHRhYmxlIGNvbnRlbnQgYXJlYS5cbiAgICovXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgbWluQ29udGVudFdpZHRoKHZhbHVlOiBzdHJpbmcgfCBudW1iZXIpIHtcbiAgICB0aGlzLmNvbmZpZy5taW5Db250ZW50V2lkdGggPSB2YWx1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUYWJsZSBjb250ZW50IGhlaWdodCB2YWx1ZSBpbiBwaXhlbHMuIFRoaXMgY29uZmlndXJhdGlvbiBjYW4gYmUgdXNlZCB0byBlbmFibGUgdGFibGUgY29udGVudCB2ZXJ0aWNhbFxuICAgKiBzY3JvbGxpbmcgZm9yIHJlc3BvbnNpdmUgZGVzaWduLlxuICAgKi9cbiAgQElucHV0KClcbiAgcHVibGljIHNldCBjb250ZW50SGVpZ2h0KHZhbHVlOiBzdHJpbmcgfCBudW1iZXIpIHtcbiAgICB0aGlzLmNvbmZpZy5jb250ZW50SGVpZ2h0ID0gdmFsdWU7XG4gIH1cblxuICAvKipcbiAgICogU2hvdyBwYWdpbmF0aW9uIGJhciBpZiB0cnVlLiBEZXBlbmRzIG9uIG9mZnNldCBhbmQgbGltaXQgdmFsdWVzLiBUcmlnZ2VyIGRhdGFMb2FkIGV2ZW50IHdpdGggb2Zmc2V0XG4gICAqIGFuZCBsaW1pdCB2YWx1ZXMuXG4gICAqL1xuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IHBhZ2VhYmxlKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5jb25maWcucGFnZWFibGUgPSB2YWx1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBFbmFibGUgc2Nyb2xsaW5nIGJhc2VkIG9uLWRlbWFuZCBkYXRhIGxvYWRpbmcgZnVuY3Rpb25hbGl0eSBpZiB0cnVlLiBUcmlnZ2VyIGRhdGFMb2FkIGV2ZW50IHdpdGggb2Zmc2V0XG4gICAqIGFuZCBsaW1pdCB2YWx1ZXMgd2hlbiBzY3JvbGwgdG8gYm90dG9tIHVudGlsIGRhdGEgc291cmNlIGV4aGF1c3QuXG4gICAqL1xuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IGxvYWRPblNjcm9sbCh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuY29uZmlnLmxvYWRPblNjcm9sbCA9IHZhbHVlO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCB2aWV3IGhlaWdodCBkaXN0YW5jZSByYXRpbyB0byB0cmlnZ2VyIGRhdGEgZmV0Y2ggb24gc2Nyb2xsLiBBcHBsaWNhYmxlIG9ubHkgd2hlbiBsb2FkIG9uIHNjcm9sbCBtb2RlIGlzIGVuYWJsZWQuXG4gICAqL1xuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IGxvYWRWaWV3RGlzdGFuY2VSYXRpbyh2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5jb25maWcubG9hZFZpZXdEaXN0YW5jZVJhdGlvID0gdmFsdWU7XG4gIH1cblxuICAvKipcbiAgICogU2V0IGF1dG8gZ2VuZXJhdGVkIGluZGV4IGNvbHVtbiB3aXRoIHJvdyBudW1iZXJpbmcgaWYgdHJ1ZS5cbiAgICovXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgc2hvd0luZGV4Q29sdW1uKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5jb25maWcuc2hvd0luZGV4Q29sdW1uID0gdmFsdWU7XG4gIH1cblxuICAvKipcbiAgICogU2V0IGluZGV4IGNvbHVtbiBoZWFkZXIgdGl0bGUuIEFwcGxpY2FibGUgd2hlbiBzaG93SW5kZXhDb2x1bW4gaXMgdHJ1ZS5cbiAgICovXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgaW5kZXhDb2x1bW5UaXRsZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5jb25maWcuaW5kZXhDb2x1bW5UaXRsZSA9IHZhbHVlO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCByb3cgc2VsZWN0IGNoZWNrYm94IGFuZCBzZWxlY3Qgc3RhdGUgaWYgdHJ1ZS5cbiAgICovXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgcm93U2VsZWN0YWJsZSh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuY29uZmlnLnJvd1NlbGVjdGFibGUgPSB2YWx1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEYXRhIHRhYmxlIHJvdyBzZWxlY3QgbW9kZS4gQXBwbGljYWJsZSBvbmx5IHdoZW4gcm93U2VsZWN0YWJsZSBpcyB0cnVlLlxuICAgKi9cbiAgQElucHV0KClcbiAgcHVibGljIHNldCBzZWxlY3RNb2RlKHZhbHVlOiBEYXRhVGFibGVTZWxlY3RNb2RlKSB7XG4gICAgdGhpcy5jb25maWcuc2VsZWN0TW9kZSA9IHZhbHVlO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCBzZWxlY3QgYWxsIHJvdyBjaGVja2JveCBvbiBjb2x1bW4gaGVhZGVyIHZpc2libGUgaWYgdHJ1ZS5cbiAgICogT25seSBhcHBsaWNhYmxlIHdoZW4gc2hvd1Jvd1NlbGVjdENoZWNrYm94LCByb3dTZWxlY3RhYmxlIGlzIHRydWUgJiBpdGVtIHNlbGVjdE1vZGUgaXMgIG11bHRpLlxuICAgKi9cbiAgQElucHV0KClcbiAgcHVibGljIHNldCBzaG93Um93U2VsZWN0Q2hlY2tib3godmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLmNvbmZpZy5zaG93Um93U2VsZWN0Q2hlY2tib3ggPSB2YWx1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgc2VsZWN0IGFsbCByb3cgY2hlY2tib3ggb24gY29sdW1uIGhlYWRlciB2aXNpYmxlIGlmIHRydWUuXG4gICAqIE9ubHkgYXBwbGljYWJsZSB3aGVuIHNob3dSb3dTZWxlY3RDaGVja2JveCwgcm93U2VsZWN0YWJsZSBpcyB0cnVlICYgaXRlbSBzZWxlY3RNb2RlIGlzICBtdWx0aS5cbiAgICovXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgc2hvd1Jvd1NlbGVjdEFsbENoZWNrYm94KHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5jb25maWcuc2hvd1Jvd1NlbGVjdEFsbENoZWNrYm94ID0gdmFsdWU7XG4gIH1cblxuICAvKipcbiAgICogU2V0IHN1YnN0aXR1dGUgcm93cyB2aXNpYmxlIGlmIHRydWUuIEZpbGwgd2l0aCBlbXB0eSByb3dzIHdoZW4gcm93IGNvdW50IDwgbGltaXQuXG4gICAqL1xuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IHNob3dTdWJzdGl0dXRlUm93cyh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuY29uZmlnLnNob3dTdWJzdGl0dXRlUm93cyA9IHZhbHVlO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCByb3cgZXhwYW5kZXIgdmlzaWJsZSBpZiB0cnVlLiBSZW5kZXIgbmdEYXRhVGFibGVFeHBhbmQgdGVtcGxhdGUgb24gZXhwYW5kIGNsaWNrLlxuICAgKi9cbiAgQElucHV0KClcbiAgcHVibGljIHNldCBleHBhbmRhYmxlUm93cyh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuY29uZmlnLmV4cGFuZGFibGVSb3dzID0gdmFsdWU7XG4gIH1cblxuICAvKipcbiAgICogU2V0IHRyaWdnZXIgcm93IHNlbGVjdCBvbiBjbGljayBldmVudCBpZiB0cnVlLiBBcHBsaWNhYmxlIG9ubHkgd2hlbiByb3dTZWxlY3RhYmxlIGlzIHRydWUuXG4gICAqL1xuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IHNlbGVjdE9uUm93Q2xpY2sodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLmNvbmZpZy5zZWxlY3RPblJvd0NsaWNrID0gdmFsdWU7XG4gIH1cblxuICAvKipcbiAgICogU2V0IGV4cGFuZCBhbmQgcmVuZGVyIGV4cGFuZCB0ZW1wbGF0ZSBvbiByb3cgY2xpY2sgaWYgdHJ1ZS4gT25seSBhcHBsaWNhYmxlIHdoZW4gZXhwYW5kYWJsZVJvd3MgaXMgdHJ1ZS5cbiAgICovXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgZXhwYW5kT25Sb3dDbGljayh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuY29uZmlnLmV4cGFuZE9uUm93Q2xpY2sgPSB2YWx1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBdXRvIHRyaWdnZXIgZGF0YUxvYWQgZXZlbnQgb24gaW5pdGlhbGl6YXRpb24gaWYgdHJ1ZS5cbiAgICovXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgYXV0b0ZldGNoKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5jb25maWcuYXV0b0ZldGNoID0gdmFsdWU7XG4gIH1cblxuICAvKipcbiAgICogU2V0IGxvYWRpbmcgc3Bpbm5lciB2aXNpYmxlIGlmIHRydWUuIFNob3cgbG9hZGluZyBzcGlubmVyIHdoZW4gZGF0YSBmZXRjaCBvcGVyYXRpb24gaXMgdHJpZ2dlcmVkLlxuICAgKi9cbiAgQElucHV0KClcbiAgcHVibGljIHNldCBzaG93TG9hZGluZ1NwaW5uZXIodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLmNvbmZpZy5zaG93TG9hZGluZ1NwaW5uZXIgPSB2YWx1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgc2VsZWN0IG9wdGlvbiB0cmFjayBieSBmaWVsZCBwYXRoIHdoaWNoIGlzIHVzZWQgdG8gdW5pcXVlbHkgaWRlbnRpZnkgcm93IGZvciBzZWxlY3Rpb24gdHJhY2tpbmcuXG4gICAqIFRoaXMgZmllbGQgc3VwcG9ydCBvYmplY3QgcGF0aHMgZXhwcmVzc2lvbnMgJ3Jvb3RbMF0ubmVzdCcuXG4gICAqL1xuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IHNlbGVjdFRyYWNrQnkodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuY29uZmlnLnNlbGVjdFRyYWNrQnkgPSB2YWx1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgc2VsZWN0ZWQgcm93IGlkZW50aWZpZXIuIFNlbGVjdCBzcGVjaWZpZWQgcm93IG9uIGluaXRpYWwgbG9hZC5cbiAgICogQXBwbGljYWJsZSB3aGVuIHJvdyBzZWxlY3QgbW9kZSBpcyBTSU5HTEUgb3IgU0lOR0xFX1RPR0dMRS5cbiAgICovXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgc2VsZWN0ZWRSb3codmFsdWU6IGFueSkge1xuICAgIHRoaXMuZGF0YVN0YXRlU2VydmljZS5zZWxlY3RlZFJvdyA9IHZhbHVlO1xuICAgIHRoaXMuZXZlbnRTdGF0ZVNlcnZpY2Uucm93U2VsZWN0Q2hhbmdlU3RyZWFtLmVtaXQodGhpcy5kYXRhU3RhdGVTZXJ2aWNlLnNlbGVjdGVkUm93KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgc2VsZWN0ZWQgcm93IGlkZW50aWZpZXJzIGNvbGxlY3Rpb24uIFNlbGVjdCBzcGVjaWZpZWQgcm93cyBvbiBpbml0aWFsIGxvYWQuXG4gICAqIEFwcGxpY2FibGUgd2hlbiBzZWxlY3RNb2RlIGlzIFNJTkdMRSBvciBTSU5HTEVfVE9HR0xFIHRydWUuXG4gICAqL1xuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IHNlbGVjdGVkUm93cyh2YWx1ZTogYW55W10pIHtcbiAgICB0aGlzLmRhdGFTdGF0ZVNlcnZpY2Uuc2VsZWN0ZWRSb3dzID0gdmFsdWUgfHwgW107XG4gICAgdGhpcy5ldmVudFN0YXRlU2VydmljZS5yb3dTZWxlY3RDaGFuZ2VTdHJlYW0uZW1pdCh0aGlzLmRhdGFTdGF0ZVNlcnZpY2Uuc2VsZWN0ZWRSb3dzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgZmlsdGVyIGRlYm91bmNlIHRpbWUgaW4gbWlsbGlzZWNvbmRzLiBBcHBsaWNhYmxlIG9ubHkgd2hlbiBmaWx0ZXJEZWJvdW5jZSBpcyB0cnVlLlxuICAgKi9cbiAgQElucHV0KClcbiAgcHVibGljIHNldCBmaWx0ZXJEZWJvdW5jZVRpbWUodmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuY29uZmlnLmZpbHRlckRlYm91bmNlVGltZSA9IHZhbHVlO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCBmaWx0ZXIgZGF0YSBkZWJvdW5jZSBlbmFibGVkIHN0YXRlIHdpdGggcHJvdmlkZWQgZmlsdGVyRGVib3VuY2VUaW1lIGlmIHRydWUuXG4gICAqL1xuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IGZpbHRlckRlYm91bmNlKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5jb25maWcuZmlsdGVyRGVib3VuY2UgPSB2YWx1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgcmVmcmVzaCBidXR0b24gdmlzaWJsZSBpZiB0cnVlLiBPbmx5IGFwcGxpY2FibGUgd2hlbiBzaG93SGVhZGVyIGlzIHRydWUuXG4gICAqL1xuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IHNob3dSZWZyZXNoQnV0dG9uKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5jb25maWcuc2hvd1JlZnJlc2hCdXR0b24gPSB2YWx1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSb3cgc2VsZWN0b3IgY29sdW1uIHdpZHRoIGluIHBpeGVscy4gQXBwbGljYWJsZSBvbmx5IHdoZW4gc2hvd0NvbHVtblNlbGVjdG9yIGlzIHRydWUuXG4gICAqL1xuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IHNob3dDb2x1bW5TZWxlY3Rvcih2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuY29uZmlnLnNob3dDb2x1bW5TZWxlY3RvciA9IHZhbHVlO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCBjb2x1bW4gc2VsZWN0b3IgZHJvcGRvd24gd2lkdGggaW4gcGl4ZWxzLiBPbmx5IGFwcGxpY2FibGUgd2hlbiBzaG93Q29sdW1uU2VsZWN0b3IgaXMgdHJ1ZS5cbiAgICovXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgY29sdW1uU2VsZWN0b3JXaWR0aCh2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5jb25maWcuY29sdW1uU2VsZWN0b3JXaWR0aCA9IHZhbHVlO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCBleHBhbmRlciBjb2x1bW4gd2lkdGggaW4gcGl4ZWxzLiBBcHBsaWNhYmxlIG9ubHkgd2hlbiBleHBhbmRhYmxlUm93cyBpcyB0cnVlLlxuICAgKi9cbiAgQElucHV0KClcbiAgcHVibGljIHNldCBleHBhbmRlckNvbHVtbldpZHRoKHZhbHVlOiBudW1iZXIgfCBzdHJpbmcpIHtcbiAgICB0aGlzLmNvbmZpZy5leHBhbmRlckNvbHVtbldpZHRoID0gdmFsdWU7XG4gIH1cblxuICAvKipcbiAgICogU2V0IGluZGV4IGNvbHVtbiB3aWR0aCBpbiBwaXhlbHMuIEFwcGxpY2FibGUgb25seSB3aGVuIHNob3dJbmRleENvbHVtbiBpcyB0cnVlLlxuICAgKi9cbiAgQElucHV0KClcbiAgcHVibGljIHNldCBpbmRleENvbHVtbldpZHRoKHZhbHVlOiBudW1iZXIgfCBzdHJpbmcpIHtcbiAgICB0aGlzLmNvbmZpZy5pbmRleENvbHVtbldpZHRoID0gdmFsdWU7XG4gIH1cblxuICAvKipcbiAgICogU2V0IHJvdyBzZWxlY3RvciBjb2x1bW4gd2lkdGggaW4gcGl4ZWxzLiBBcHBsaWNhYmxlIG9ubHkgd2hlbiBzaG93Q29sdW1uU2VsZWN0b3IgaXMgdHJ1ZS5cbiAgICovXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgc2VsZWN0aW9uQ29sdW1uV2lkdGgodmFsdWU6IG51bWJlciB8IHN0cmluZykge1xuICAgIHRoaXMuY29uZmlnLnNlbGVjdGlvbkNvbHVtbldpZHRoID0gdmFsdWU7XG4gIH1cblxuICAvKipcbiAgICogU2V0IHRyYW5zbGF0aW9uIGRhdGEgb2JqZWN0LiBVc2VkIHRvIGxvY2FsaXplIHRhYmxlIHN0YXRpYyBsYWJlbCB0ZXh0LlxuICAgKi9cbiAgQElucHV0KClcbiAgcHVibGljIHNldCB0cmFuc2xhdGlvbnMoZGF0YTogRGF0YVRhYmxlVHJhbnNsYXRpb25zKSB7XG4gICAgdGhpcy5jb25maWcudHJhbnNsYXRpb25zID0gZGF0YTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgcm93IGV4cGFuZCBsb2FkaW5nIHNwaW5uZXIgdmlzaWJsZSBpZiB0cnVlLiBBcHBsaWNhYmxlIG9ubHkgd2hlbiByb3cgZXhwYW5kIGlzIGVuYWJsZWQuXG4gICAqL1xuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IHNob3dSb3dFeHBhbmRMb2FkaW5nU3Bpbm5lcih2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuY29uZmlnLnNob3dSb3dFeHBhbmRMb2FkaW5nU3Bpbm5lciA9IHZhbHVlO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCBkYXRhIG9mZnNldCB2YWx1ZSAoc3RhcnQgb2Zmc2V0IGluZGV4KS4gQXBwbGljYWJsZSBvbmx5IHdoZW4gcGFnZWFibGUgaXMgdHJ1ZS5cbiAgICovXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgb2Zmc2V0KHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLmNvbmZpZy5vZmZzZXQgPSB2YWx1ZTtcbiAgICB0aGlzLmV2ZW50U3RhdGVTZXJ2aWNlLmRhdGFGZXRjaFN0cmVhbS5uZXh0KERhdGFGZXRjaE1vZGUuU09GVF9MT0FEKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgZGF0YSBsaW1pdCB2YWx1ZSAocGFnZSBzaXplKS4gQXBwbGljYWJsZSBvbmx5IHdoZW4gcGFnZWFibGUgaXMgdHJ1ZS5cbiAgICovXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgbGltaXQodmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuY29uZmlnLmxpbWl0ID0gdmFsdWU7XG4gICAgdGhpcy5ldmVudFN0YXRlU2VydmljZS5kYXRhRmV0Y2hTdHJlYW0ubmV4dChEYXRhRmV0Y2hNb2RlLlNPRlRfTE9BRCk7XG4gIH1cblxuICAvKipcbiAgICogU2V0IGN1cnJlbnQgcGFnZSBudW1iZXIuIEF1dG8gY2FsY3VsYXRlIG9mZnNldCBkZXBlbmRpbmcgb24gcGFnZSBudW1iZXIsXG4gICAqIGRvIG5vdCBleHBsaWNpdGx5IHNldCBvZmZzZXQgd2hlbiBwYWdlIGlzIHVzZWQuXG4gICAqL1xuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IHBhZ2UodmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMub2Zmc2V0ID0gKHZhbHVlIC0gMSkgKiB0aGlzLmNvbmZpZy5saW1pdDtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgY3VycmVudCBwYWdlIG51bWJlci5cbiAgICovXG4gIHB1YmxpYyBnZXQgcGFnZSgpOiBudW1iZXIge1xuICAgIHJldHVybiBNYXRoLmZsb29yKHRoaXMuY29uZmlnLm9mZnNldCAvIHRoaXMuY29uZmlnLmxpbWl0KSArIDE7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGRhdGEgdGFibGUgaGVhZGVyIHBhZGRpbmcgaW4gcGl4ZWxzLlxuICAgKi9cbiAgcHVibGljIGdldCBoZWFkZXJQYWRkaW5nKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuY29uZmlnLmNvbnRlbnRIZWlnaHQgPyB0aGlzLmdsb2JhbFJlZlNlcnZpY2Uuc2Nyb2xsYmFyV2lkdGggOiAwO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBkYXRhIGxvYWRpbmcgc3RhdHVzLlxuICAgKi9cbiAgcHVibGljIGdldCBpc0xvYWRpbmcoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuICEodGhpcy5jb25maWcubG9hZE9uU2Nyb2xsICYmIHRoaXMuZGF0YVN0YXRlU2VydmljZS5kYXRhUm93cy5sZW5ndGgpXG4gICAgICAmJiB0aGlzLmNvbmZpZy5zaG93TG9hZGluZ1NwaW5uZXIgJiYgdGhpcy5kYXRhU3RhdGVTZXJ2aWNlLmRhdGFMb2FkaW5nO1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBkcmFnQW5kRHJvcFNlcnZpY2U6IERyYWdBbmREcm9wU2VydmljZSxcbiAgICBwcml2YXRlIGRhdGFUYWJsZVN0YXRlU2VydmljZTogRGF0YVRhYmxlUGVyc2lzdGVuY2VTZXJ2aWNlLFxuICAgIHByaXZhdGUgZ2xvYmFsUmVmU2VydmljZTogR2xvYmFsUmVmU2VydmljZSxcbiAgICBwcml2YXRlIGV2ZW50U3RhdGVTZXJ2aWNlOiBEYXRhVGFibGVFdmVudFN0YXRlU2VydmljZSxcbiAgICBwcml2YXRlIGRhdGFUYWJsZVJlc291cmNlU2VydmljZTogRGF0YVRhYmxlUmVzb3VyY2VTZXJ2aWNlPGFueT4sXG4gICAgcHJpdmF0ZSB6b25lOiBOZ1pvbmUsXG4gICAgcHVibGljIGRhdGFTdGF0ZVNlcnZpY2U6IERhdGFUYWJsZURhdGFTdGF0ZVNlcnZpY2UsXG4gICAgcHVibGljIHNjcm9sbFBvc2l0aW9uU2VydmljZTogRGF0YVRhYmxlU2Nyb2xsUG9zaXRpb25TZXJ2aWNlLFxuICAgIHB1YmxpYyBjb25maWc6IERhdGFUYWJsZUNvbmZpZ1NlcnZpY2VcbiAgKSB7XG4gICAgdGhpcy5zdG9yYWdlTW9kZSA9IGNvbmZpZy5zdG9yYWdlTW9kZTtcblxuICAgIHRoaXMuaGVhZGVyQ2xpY2sgPSB0aGlzLmV2ZW50U3RhdGVTZXJ2aWNlLmhlYWRlckNsaWNrU3RyZWFtO1xuICAgIHRoaXMuYWxsUm93U2VsZWN0Q2hhbmdlID0gdGhpcy5ldmVudFN0YXRlU2VydmljZS5hbGxSb3dTZWxlY3RDaGFuZ2VTdHJlYW07XG4gICAgdGhpcy5yb3dCaW5kID0gdGhpcy5ldmVudFN0YXRlU2VydmljZS5yb3dCaW5kU3RyZWFtO1xuICAgIHRoaXMucm93Q2xpY2sgPSB0aGlzLmV2ZW50U3RhdGVTZXJ2aWNlLnJvd0NsaWNrU3RyZWFtO1xuICAgIHRoaXMucm93RG91YmxlQ2xpY2sgPSB0aGlzLmV2ZW50U3RhdGVTZXJ2aWNlLnJvd0RvdWJsZUNsaWNrU3RyZWFtO1xuICAgIHRoaXMucm93U2VsZWN0Q2hhbmdlID0gdGhpcy5ldmVudFN0YXRlU2VydmljZS5yb3dTZWxlY3RDaGFuZ2VTdHJlYW07XG4gICAgdGhpcy5jZWxsQmluZCA9IHRoaXMuZXZlbnRTdGF0ZVNlcnZpY2UuY2VsbEJpbmRTdHJlYW07XG4gICAgdGhpcy5jZWxsQ2xpY2sgPSB0aGlzLmV2ZW50U3RhdGVTZXJ2aWNlLmNlbGxDbGlja1N0cmVhbTtcbiAgICB0aGlzLmluaXQgPSB0aGlzLmV2ZW50U3RhdGVTZXJ2aWNlLmluaXRTdHJlYW07XG4gICAgdGhpcy5kYXRhQm91bmQgPSB0aGlzLmV2ZW50U3RhdGVTZXJ2aWNlLmRhdGFCb3VuZFN0cmVhbTtcbiAgICB0aGlzLmNvbHVtbkJpbmQgPSB0aGlzLmV2ZW50U3RhdGVTZXJ2aWNlLmNvbHVtbkJpbmQ7XG4gIH1cblxuICAvKipcbiAgICogT24gYWZ0ZXIgZGF0YSBiaW5kIGV2ZW50IGhhbmRsZXJcbiAgICogQHBhcmFtIHF1ZXJ5UmVzdWx0IFF1ZXJ5IHJlc3VsdCBvYmplY3RcbiAgICovXG4gIHByaXZhdGUgb25BZnRlckRhdGFCaW5kKHF1ZXJ5UmVzdWx0OiBEYXRhVGFibGVRdWVyeVJlc3VsdDxhbnk+KTogdm9pZCB7XG4gICAgdGhpcy5kYXRhU3RhdGVTZXJ2aWNlLml0ZW1Db3VudCA9IHF1ZXJ5UmVzdWx0LmNvdW50O1xuICAgIHRoaXMuc2V0RGF0YVJvd3MocXVlcnlSZXN1bHQuaXRlbXMpO1xuXG4gICAgaWYgKHRoaXMuZGF0YVN0YXRlU2VydmljZS5oZWFyZFJlbG9hZCkge1xuICAgICAgdGhpcy5ldmVudFN0YXRlU2VydmljZS5mZXRjaEZpbHRlck9wdGlvbnNTdHJlYW0ubmV4dChmYWxzZSk7XG4gICAgICB0aGlzLmRhdGFTdGF0ZVNlcnZpY2UuaGVhcmRSZWxvYWQgPSBmYWxzZTtcbiAgICB9XG5cbiAgICB0aGlzLmRhdGFTdGF0ZVNlcnZpY2UuZGF0YUxvYWRpbmcgPSBmYWxzZTtcbiAgICB0aGlzLmV2ZW50U3RhdGVTZXJ2aWNlLmRhdGFCb3VuZFN0cmVhbS5lbWl0KCk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGRhdGEgaXRlbSBzZWxlY3RlZCBzdGF0ZVxuICAgKiBAcGFyYW0gaXRlbSBEYXRhIGl0ZW0gb2JqZWN0XG4gICAqIEByZXR1cm4gVHJ1ZSBpZiBpdGVtIGlzIHNlbGVjdGVkXG4gICAqL1xuICBwcml2YXRlIGdldFNlbGVjdGVkU3RhdGUoaXRlbTogYW55KTogYm9vbGVhbiB7XG4gICAgY29uc3QgaWQgPSBnZXQoaXRlbSwgdGhpcy5jb25maWcuc2VsZWN0VHJhY2tCeSk7XG4gICAgaWYgKGlkID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5jb25maWcuc2VsZWN0TW9kZSA9PT0gJ211bHRpJykge1xuICAgICAgcmV0dXJuIHRoaXMuZGF0YVN0YXRlU2VydmljZS5zZWxlY3RlZFJvd3MuaW5kZXhPZihpZCkgPiAtMTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5kYXRhU3RhdGVTZXJ2aWNlLnNlbGVjdGVkUm93ID09PSBpZDtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgZGF0YSB0YWJsZSBpdGVtIGNvbGxlY3Rpb25cbiAgICogQHBhcmFtIGl0ZW1zIERhdGEgdGFibGUgaXRlbSBjb2xsZWN0aW9uXG4gICAqL1xuICBwcml2YXRlIHNldERhdGFSb3dzKGl0ZW1zOiBhbnlbXSk6IHZvaWQge1xuICAgIGNvbnN0IG1hcHBlZEl0ZW1zID0gaXRlbXMubWFwKChpdGVtOiBhbnksIGluZGV4OiBudW1iZXIpID0+IHtcbiAgICAgIGxldCBjdXJyZW50SW5kZXg7XG4gICAgICBpZiAodGhpcy5jb25maWcubG9hZE9uU2Nyb2xsIHx8IHRoaXMuY29uZmlnLnBhZ2VhYmxlKSB7XG4gICAgICAgIGN1cnJlbnRJbmRleCA9IHRoaXMuY29uZmlnLm9mZnNldCArIGluZGV4ICsgMTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGN1cnJlbnRJbmRleCA9IGluZGV4ICsgMTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgZGF0YUxvYWRlZDogZmFsc2UsXG4gICAgICAgIGV4cGFuZGVkOiBmYWxzZSxcbiAgICAgICAgZGlzYWJsZWQ6IGZhbHNlLFxuICAgICAgICBjb2xvcjogJycsXG4gICAgICAgIGNzc0NsYXNzOiAnJyxcbiAgICAgICAgdG9vbHRpcDogJycsXG4gICAgICAgIGluZGV4OiBjdXJyZW50SW5kZXgsXG4gICAgICAgIGl0ZW0sXG4gICAgICAgIHNlbGVjdGVkOiB0aGlzLmdldFNlbGVjdGVkU3RhdGUoaXRlbSlcbiAgICAgIH07XG4gICAgfSk7XG5cbiAgICBpZiAodGhpcy5jb25maWcubG9hZE9uU2Nyb2xsKSB7XG4gICAgICB0aGlzLmRhdGFTdGF0ZVNlcnZpY2UuZGF0YVJvd3MgPSBbIC4uLnRoaXMuZGF0YVN0YXRlU2VydmljZS5kYXRhUm93cywgLi4ubWFwcGVkSXRlbXMgXTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5kYXRhU3RhdGVTZXJ2aWNlLmRhdGFSb3dzID0gbWFwcGVkSXRlbXM7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuY29uZmlnLnNlbGVjdE1vZGUgPT09ICdtdWx0aScpIHtcbiAgICAgIHRoaXMuZGF0YVN0YXRlU2VydmljZS5hbGxSb3dTZWxlY3RlZCA9XG4gICAgICAgIHRoaXMuZGF0YVN0YXRlU2VydmljZS5kYXRhUm93cy5sZW5ndGggIT09IDAgJiZcbiAgICAgICAgdGhpcy5kYXRhU3RhdGVTZXJ2aWNlLmRhdGFSb3dzLmV2ZXJ5KChkYXRhUm93OiBEYXRhVGFibGVSb3c8YW55PikgPT4ge1xuICAgICAgICAgIHJldHVybiBkYXRhUm93LnNlbGVjdGVkO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAoIXRoaXMuY29uZmlnLmxvYWRPblNjcm9sbCkge1xuICAgICAgY29uc3Qgc3Vic3RpdHV0ZVJvd0NvdW50ID0gdGhpcy5jb25maWcubGltaXQgLSB0aGlzLmRhdGFTdGF0ZVNlcnZpY2UuZGF0YVJvd3MubGVuZ3RoO1xuICAgICAgdGhpcy5kYXRhU3RhdGVTZXJ2aWNlLnN1YnN0aXR1dGVSb3dzID0gQXJyYXkuZnJvbSh7XG4gICAgICAgIGxlbmd0aDogc3Vic3RpdHV0ZVJvd0NvdW50XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogSW5pdGlhbGl6ZSBkYXRhIGZldGNoIGV2ZW50XG4gICAqL1xuICBwcml2YXRlIGluaXREYXRhRmV0Y2hFdmVudCgpOiB2b2lkIHtcbiAgICBjb25zdCBub29wID0ge1xuICAgICAgaXRlbXM6IFtdLFxuICAgICAgY291bnQ6IDBcbiAgICB9O1xuXG4gICAgdGhpcy5kYXRhRmV0Y2hTdHJlYW1TdWJzY3JpcHRpb24gPSB0aGlzLmV2ZW50U3RhdGVTZXJ2aWNlLmRhdGFGZXRjaFN0cmVhbVxuICAgICAgLnBpcGUoXG4gICAgICAgIGRlYm91bmNlVGltZSgyMCksXG4gICAgICAgIHN3aXRjaE1hcCgoZmV0Y2hNb2RlOiBEYXRhRmV0Y2hNb2RlKSA9PiB0aGlzLm1hcERhdGFCaW5kKGZldGNoTW9kZSkpLFxuICAgICAgICBjYXRjaEVycm9yKCgpID0+IHtcbiAgICAgICAgICByZXR1cm4gb2Yobm9vcCk7XG4gICAgICAgIH0pXG4gICAgICApXG4gICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAocXVlcnlSZXN1bHQ6IERhdGFUYWJsZVF1ZXJ5UmVzdWx0PGFueT4pID0+IHtcbiAgICAgICAgICB0aGlzLm9uQWZ0ZXJEYXRhQmluZChxdWVyeVJlc3VsdCk7XG4gICAgICAgIH0sXG4gICAgICAgICgpID0+IHtcbiAgICAgICAgICB0aGlzLm9uQWZ0ZXJEYXRhQmluZChub29wKTtcbiAgICAgICAgfVxuICAgICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZS1tYXAgZGF0YSBiaW5kaW5nIGRhdGFcbiAgICogQHBhcmFtIGZldGNoTW9kZSBEYXRhIGZldGNoIG1vZGVcbiAgICogQHJldHVybiBEYXRhIHRhYmxlIHF1ZXJ5IHJlc3VsdCBzdHJlYW1cbiAgICovXG4gIHByaXZhdGUgbWFwRGF0YUJpbmQoZmV0Y2hNb2RlOiBEYXRhRmV0Y2hNb2RlKTogT2JzZXJ2YWJsZTxEYXRhVGFibGVRdWVyeVJlc3VsdDxhbnk+PiB7XG4gICAgdGhpcy5kYXRhU3RhdGVTZXJ2aWNlLmRhdGFMb2FkaW5nID0gdHJ1ZTtcbiAgICBpZiAoZmV0Y2hNb2RlID09PSBEYXRhRmV0Y2hNb2RlLkhBUkRfUkVMT0FEKSB7XG4gICAgICB0aGlzLmNsZWFyUm93U2VsZWN0U3RhdGUoKTtcbiAgICAgIHRoaXMuY2xlYXJDb2x1bW5TdGF0ZSgpO1xuICAgICAgdGhpcy5kYXRhU3RhdGVTZXJ2aWNlLmhlYXJkUmVsb2FkID0gdHJ1ZTtcbiAgICAgIHRoaXMuY29uZmlnLm9mZnNldCA9IDA7XG4gICAgfVxuXG4gICAgY29uc3QgcGFyYW1zOiBEYXRhVGFibGVSZXF1ZXN0UGFyYW1zID0ge1xuICAgICAgbG9hZERhdGE6IGZldGNoTW9kZSA9PT0gRGF0YUZldGNoTW9kZS5IQVJEX1JFTE9BRCB8fCBmZXRjaE1vZGUgPT09IERhdGFGZXRjaE1vZGUuU09GVF9SRUxPQURcbiAgICB9O1xuXG4gICAgaWYgKHRoaXMuY29sdW1ucykge1xuICAgICAgcGFyYW1zLmZpZWxkcyA9IHRoaXMuY29sdW1uc1xuICAgICAgICAuZmlsdGVyKGNvbHVtbiA9PiB7XG4gICAgICAgICAgcmV0dXJuIGNvbHVtbi5zb3J0YWJsZSB8fCBjb2x1bW4uZmlsdGVyYWJsZTtcbiAgICAgICAgfSlcbiAgICAgICAgLnJlZHVjZSgoYWNjOiBEYXRhVGFibGVVbmlxdWVGaWVsZFtdLCBjb2x1bW46IERhdGFUYWJsZUNvbHVtbkNvbXBvbmVudCkgPT4ge1xuICAgICAgICAgIGlmIChjb2x1bW4uc29ydEZpZWxkIHx8IGNvbHVtbi5maWx0ZXJGaWVsZCkge1xuICAgICAgICAgICAgYWNjLnB1c2goe1xuICAgICAgICAgICAgICBmaWVsZDogY29sdW1uLnNvcnRGaWVsZCB8fCBjb2x1bW4uZmlsdGVyRmllbGQsXG4gICAgICAgICAgICAgIGNvbHVtblxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGFjYy5wdXNoKHtcbiAgICAgICAgICAgICAgZmllbGQ6IGNvbHVtbi5maWVsZCxcbiAgICAgICAgICAgICAgY29sdW1uXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gYWNjO1xuICAgICAgICB9LCBbXSlcbiAgICAgICAgLm1hcCgodW5pcXVlRmllbGQ6IERhdGFUYWJsZVVuaXF1ZUZpZWxkKSA9PiB7XG4gICAgICAgICAgbGV0IGZpbHRlcjtcbiAgICAgICAgICBpZiAodW5pcXVlRmllbGQuY29sdW1uLnNob3dEcm9wZG93bkZpbHRlcikge1xuICAgICAgICAgICAgaWYgKHVuaXF1ZUZpZWxkLmNvbHVtbi5kcm9wZG93bkZpbHRlclNlbGVjdE1vZGUgPT09ICdtdWx0aScpIHtcbiAgICAgICAgICAgICAgZmlsdGVyID0gdW5pcXVlRmllbGQuY29sdW1uLmZpbHRlciAmJiB1bmlxdWVGaWVsZC5jb2x1bW4uZmlsdGVyLm1hcChmaWx0ZXJWYWx1ZSA9PiBmaWx0ZXJWYWx1ZS5rZXkpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgZmlsdGVyID0gdW5pcXVlRmllbGQuY29sdW1uLmZpbHRlciAmJiB1bmlxdWVGaWVsZC5jb2x1bW4uZmlsdGVyLmtleTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZmlsdGVyID0gdW5pcXVlRmllbGQuY29sdW1uLmZpbHRlcjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZmllbGQ6IHVuaXF1ZUZpZWxkLmZpZWxkLFxuICAgICAgICAgICAgc29ydGFibGU6IHVuaXF1ZUZpZWxkLmNvbHVtbi5zb3J0YWJsZSxcbiAgICAgICAgICAgIHNvcnRPcmRlcjogdW5pcXVlRmllbGQuY29sdW1uLnNvcnRPcmRlcixcbiAgICAgICAgICAgIHNvcnRQcmlvcml0eTogdW5pcXVlRmllbGQuY29sdW1uLnNvcnRQcmlvcml0eSB8fCAodW5pcXVlRmllbGQuY29sdW1uLnNvcnRPcmRlciA/IDEgOiAwKSxcbiAgICAgICAgICAgIGZpbHRlcmFibGU6IHVuaXF1ZUZpZWxkLmNvbHVtbi5maWx0ZXJhYmxlLFxuICAgICAgICAgICAgZmlsdGVyVmFsdWU6IGZpbHRlcixcbiAgICAgICAgICAgIGZpbHRlckV4cHJlc3Npb246IHVuaXF1ZUZpZWxkLmNvbHVtbi5maWx0ZXJFeHByZXNzaW9uLFxuICAgICAgICAgIH07XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmNvbmZpZy5wYWdlYWJsZSB8fCB0aGlzLmNvbmZpZy5sb2FkT25TY3JvbGwpIHtcbiAgICAgIHBhcmFtcy5vZmZzZXQgPSB0aGlzLmNvbmZpZy5vZmZzZXQ7XG4gICAgICBwYXJhbXMubGltaXQgPSB0aGlzLmNvbmZpZy5saW1pdDtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5jb25maWcucGVyc2lzdFRhYmxlU3RhdGUpIHtcbiAgICAgIHRoaXMuZGF0YVRhYmxlU3RhdGVTZXJ2aWNlLnNldFN0YXRlKHRoaXMuZGF0YVN0YXRlU2VydmljZS5pZCwgcGFyYW1zKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5kYXRhU3RhdGVTZXJ2aWNlLm9uRGF0YUJpbmQocGFyYW1zKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbml0aWFsaXplIGRhdGEgdGFibGUgc3RhdGUgdmlhIHByZXZpb3VzIHN0YXRlIHNuYXBzaG90OyBBcHBsaWNhYmxlIG9ubHkgd2hlbiBwZXJzaXN0IHRhYmxlIHN0YXRlIGlzIGVuYWJsZWRcbiAgICovXG4gIHByaXZhdGUgaW5pdERhdGFUYWJsZVN0YXRlKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmNvbmZpZy5wZXJzaXN0VGFibGVTdGF0ZSkge1xuICAgICAgY29uc3QgZGF0YVRhYmxlU3RhdGUgPSB0aGlzLmRhdGFUYWJsZVN0YXRlU2VydmljZS5nZXRTdGF0ZSh0aGlzLmRhdGFTdGF0ZVNlcnZpY2UuaWQpO1xuICAgICAgaWYgKGRhdGFUYWJsZVN0YXRlKSB7XG4gICAgICAgIHRoaXMuY29sdW1ucy5mb3JFYWNoKGNvbHVtbiA9PiB7XG4gICAgICAgICAgY29uc3QgZmllbGQgPSBkYXRhVGFibGVTdGF0ZS5maWVsZHMuZmluZChjb2wgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGNvbC5maWVsZCA9PT0gY29sdW1uLmZpZWxkO1xuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgaWYgKGZpZWxkKSB7XG4gICAgICAgICAgICBpZiAoY29sdW1uLmZpbHRlcmFibGUgJiYgZmllbGQuZmlsdGVyYWJsZSkge1xuICAgICAgICAgICAgICBpZiAoY29sdW1uLnNob3dEcm9wZG93bkZpbHRlcikge1xuICAgICAgICAgICAgICAgIGlmIChmaWVsZC5maWx0ZXJWYWx1ZSkge1xuICAgICAgICAgICAgICAgICAgaWYgKGNvbHVtbi5kcm9wZG93bkZpbHRlclNlbGVjdE1vZGUgPT09ICdtdWx0aScpIHtcbiAgICAgICAgICAgICAgICAgICAgY29sdW1uLmZpbHRlciA9IGZpZWxkLmZpbHRlclZhbHVlLm1hcCgoZmlsdGVyVmFsdWUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBmaWx0ZXJWYWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBmaWx0ZXJWYWx1ZVxuICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY29sdW1uLmZpbHRlciA9IHtcbiAgICAgICAgICAgICAgICAgICAgICBrZXk6IGZpZWxkLmZpbHRlclZhbHVlLFxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBmaWVsZC5maWx0ZXJWYWx1ZVxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb2x1bW4uZmlsdGVyID0gZmllbGQuZmlsdGVyVmFsdWU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGNvbHVtbi5zb3J0YWJsZSAmJiBmaWVsZC5zb3J0YWJsZSkge1xuICAgICAgICAgICAgICBjb2x1bW4uc29ydE9yZGVyID0gZmllbGQuc29ydE9yZGVyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5jb25maWcubGltaXQgPSBkYXRhVGFibGVTdGF0ZS5saW1pdDtcbiAgICAgICAgdGhpcy5jb25maWcub2Zmc2V0ID0gZGF0YVRhYmxlU3RhdGUub2Zmc2V0O1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBBZnRlciBjb21wb25lbnQgaW5pdGlhbGl6ZSBsaWZlY3ljbGUgZXZlbnQgaGFuZGxlclxuICAgKi9cbiAgcHVibGljIG5nQWZ0ZXJDb250ZW50SW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmRhdGFTdGF0ZVNlcnZpY2UucmVsYXRpdmVQYXJlbnRFbGVtZW50ID0gdGhpcy5kYXRhVGFibGVFbGVtZW50Lm5hdGl2ZUVsZW1lbnQ7XG5cbiAgICBpZiAoIXRoaXMuZGF0YVN0YXRlU2VydmljZS5vbkRhdGFCaW5kKSB7XG4gICAgICB0aGlzLmRhdGFTb3VyY2UgPSB0aGlzLmV2ZW50U3RhdGVTZXJ2aWNlLnN0YXRpY0RhdGFTb3VyY2VTdHJlYW07XG4gICAgfVxuXG4gICAgdGhpcy5pbml0RGF0YVRhYmxlU3RhdGUoKTtcbiAgICB0aGlzLmluaXREYXRhRmV0Y2hFdmVudCgpO1xuXG4gICAgaWYgKHRoaXMuY29uZmlnLmF1dG9GZXRjaCkge1xuICAgICAgdGhpcy5ldmVudFN0YXRlU2VydmljZS5kYXRhRmV0Y2hTdHJlYW0ubmV4dChEYXRhRmV0Y2hNb2RlLlNPRlRfTE9BRCk7XG4gICAgfVxuXG4gICAgdGhpcy5ldmVudFN0YXRlU2VydmljZS5mZXRjaEZpbHRlck9wdGlvbnNTdHJlYW0ubmV4dCh0cnVlKTtcbiAgICB0aGlzLmV2ZW50U3RhdGVTZXJ2aWNlLmluaXRTdHJlYW0uZW1pdCh0aGlzKTtcblxuICAgIGlmICh0aGlzLmNvbmZpZy5sb2FkT25TY3JvbGwpIHtcbiAgICAgIHRoaXMuc2Nyb2xsUG9zaXRpb25TdWJzY3JpcHRpb24gPSB0aGlzLnNjcm9sbFBvc2l0aW9uU2VydmljZS5zY3JvbGxQb3NpdGlvblN0cmVhbS5zdWJzY3JpYmUoKHBvczogRGF0YVRhYmxlU2Nyb2xsUG9pbnQpID0+IHtcbiAgICAgICAgY29uc3Qgcm91bmRpbmdQaXhlbCA9IDE7XG4gICAgICAgIGNvbnN0IGd1dHRlclBpeGVsID0gMTtcblxuICAgICAgICBpZiAoXG4gICAgICAgICAgcG9zLmlzVmVydGljYWxcbiAgICAgICAgICAmJiBwb3Muc2Nyb2xsVG9wID49IHBvcy5zY3JvbGxIZWlnaHQgLSAoMSArIHRoaXMuY29uZmlnLmxvYWRWaWV3RGlzdGFuY2VSYXRpbykgKiBwb3MuY2xpZW50SGVpZ2h0IC0gcm91bmRpbmdQaXhlbCAtIGd1dHRlclBpeGVsXG4gICAgICAgICAgJiYgKHRoaXMuY29uZmlnLm9mZnNldCArIHRoaXMuY29uZmlnLmxpbWl0KSA8IHRoaXMuZGF0YVN0YXRlU2VydmljZS5pdGVtQ291bnRcbiAgICAgICAgICAmJiAhdGhpcy5kYXRhU3RhdGVTZXJ2aWNlLmRhdGFMb2FkaW5nXG4gICAgICAgICkge1xuICAgICAgICAgIHRoaXMuZGF0YVN0YXRlU2VydmljZS5kYXRhTG9hZGluZyA9IHRydWU7XG4gICAgICAgICAgdGhpcy56b25lLnJ1bigoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLm9mZnNldCA9IHRoaXMuY29uZmlnLm9mZnNldCArIHRoaXMuY29uZmlnLmxpbWl0O1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmVzZXQgY29sdW1uIHNvcnQgYW5kIGZpbHRlciBzdGF0ZVxuICAgKi9cbiAgcHJpdmF0ZSBjbGVhckNvbHVtblN0YXRlKCk6IHZvaWQge1xuICAgIHRoaXMuY29sdW1ucy5mb3JFYWNoKChjb2x1bW46IERhdGFUYWJsZUNvbHVtbkNvbXBvbmVudCkgPT4ge1xuICAgICAgY29sdW1uLnJlc2V0U29ydE9yZGVyKCk7XG4gICAgICBjb2x1bW4uZmlsdGVyID0gdW5kZWZpbmVkO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIENsZWFyIHNlbGVjdGVkIGRhdGEgcm93IHN0YXR1c1xuICAgKi9cbiAgcHJpdmF0ZSBjbGVhclJvd1NlbGVjdFN0YXRlKCk6IHZvaWQge1xuICAgIHRoaXMuZGF0YVN0YXRlU2VydmljZS5zZWxlY3RlZFJvdyA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmRhdGFTdGF0ZVNlcnZpY2Uuc2VsZWN0ZWRSb3dzID0gW107XG4gICAgdGhpcy5kYXRhU3RhdGVTZXJ2aWNlLmFsbFJvd1NlbGVjdGVkID0gZmFsc2U7XG4gIH1cblxuICAvKipcbiAgICogRmV0Y2ggZGF0YSBmcm9tIGRhdGEgc291cmNlXG4gICAqIEBwYXJhbSBmZXRjaE1vZGUgRGF0YSBmZXRjaCBtb2RlXG4gICAqL1xuICBwdWJsaWMgZmV0Y2hEYXRhKGZldGNoTW9kZTogRGF0YUZldGNoTW9kZSA9IERhdGFGZXRjaE1vZGUuU09GVF9SRUxPQUQpOiB2b2lkIHtcbiAgICB0aGlzLmV2ZW50U3RhdGVTZXJ2aWNlLmRhdGFGZXRjaFN0cmVhbS5uZXh0KGZldGNoTW9kZSk7XG4gIH1cblxuICAvKipcbiAgICogSW5pdGlhbGl6ZSBkYXRhIHNvdXJjZVxuICAgKiBAcGFyYW0gc291cmNlIERhdGEgc291cmNlIHN0cmVhbVxuICAgKi9cbiAgcHVibGljIGluaXREYXRhU291cmNlKHNvdXJjZTogT2JzZXJ2YWJsZTxhbnk+KTogdm9pZCB7XG4gICAgdGhpcy5kYXRhVGFibGVSZXNvdXJjZVNlcnZpY2Uuc2V0RGF0YVNvdXJjZShzb3VyY2UpO1xuXG4gICAgdGhpcy5vbkRhdGFCaW5kID0gKHBhcmFtczogRGF0YVRhYmxlUmVxdWVzdFBhcmFtcyk6IE9ic2VydmFibGU8RGF0YVRhYmxlUXVlcnlSZXN1bHQ8YW55Pj4gPT4ge1xuICAgICAgaWYgKHBhcmFtcy5sb2FkRGF0YSkge1xuICAgICAgICB0aGlzLmRhdGFUYWJsZVJlc291cmNlU2VydmljZS5zZXREYXRhU291cmNlKHNvdXJjZSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLmRhdGFUYWJsZVJlc291cmNlU2VydmljZS5xdWVyeShwYXJhbXMpO1xuICAgIH07XG5cbiAgICB0aGlzLm9uRmlsdGVyVmFsdWVFeHRyYWN0ID0gKGNvbHVtbjogRGF0YVRhYmxlQ29sdW1uQ29tcG9uZW50KTogT2JzZXJ2YWJsZTxEYXRhVGFibGVGaWx0ZXJPcHRpb25bXT4gPT4ge1xuICAgICAgcmV0dXJuIHRoaXMuZGF0YVRhYmxlUmVzb3VyY2VTZXJ2aWNlLmV4dHJhY3RGaWx0ZXJPcHRpb25zKGNvbHVtbik7XG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb21wb25lbnQgdmFsdWUgd3JpdGUgZXZlbnQgaGFuZGxlcjsgRm9ybSBjb250cm9sIHN1cHBvcnQgaW1wbGVtZW50YXRpb25cbiAgICovXG4gIHB1YmxpYyB3cml0ZVZhbHVlKHZhbHVlOiBhbnkpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5jb25maWcuc2VsZWN0TW9kZSA9PT0gJ211bHRpJykge1xuICAgICAgdGhpcy5zZWxlY3RlZFJvd3MgPSB2YWx1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZWxlY3RlZFJvdyA9IHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZWdpc3RlciBzZWxlY3QgY2hhbmdlIGV2ZW50IGhhbmRsZXI7IEZvcm0gY29udHJvbCBzdXBwb3J0IGltcGxlbWVudGF0aW9uXG4gICAqIEBwYXJhbSBvblNlbGVjdENoYW5nZSBTZWxlY3QgY2hhbmdlIGV2ZW50IGhhbmRsZXIgY2FsbGJhY2tcbiAgICovXG4gIHB1YmxpYyByZWdpc3Rlck9uQ2hhbmdlKG9uU2VsZWN0Q2hhbmdlOiAodmFsdWU6IGFueSkgPT4gdm9pZCk6IHZvaWQge1xuICAgIHRoaXMucm93U2VsZWN0Q2hhbmdlU3Vic2NyaXB0aW9uID0gdGhpcy5ldmVudFN0YXRlU2VydmljZS5yb3dTZWxlY3RDaGFuZ2VTdHJlYW0uc3Vic2NyaWJlKChzZWxlY3RlZElkczogYW55IHwgYW55W10pID0+IHtcbiAgICAgIG9uU2VsZWN0Q2hhbmdlKHNlbGVjdGVkSWRzKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZWdpc3RlciBvbiB0b3VjaCBldmVudCBoYW5kbGVyOyBGb3JtIGNvbnRyb2wgc3VwcG9ydCBpbXBsZW1lbnRhdGlvblxuICAgKiBAcGFyYW0gZm4gVG91Y2ggZXZlbnQgY2FsbGJhY2sgaGFuZGxlclxuICAgKi9cbiAgcHVibGljIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiBhbnkpOiB2b2lkIHt9XG5cbiAgLyoqXG4gICAqIEdldCB0YWJsZSB3aWR0aCBpbiBwaXhlbHNcbiAgICovXG4gIHB1YmxpYyBnZXQgdGFibGVXaWR0aCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLmNvbmZpZy53aWR0aCB8fCB0aGlzLmRhdGFTdGF0ZVNlcnZpY2UudGFibGVXaWR0aDtcbiAgfVxuXG4gIHB1YmxpYyBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuZGF0YVN0YXRlU2VydmljZS5pZCkge1xuICAgICAgdGhyb3cgRXJyb3IoJ01pc3NpbmcgcmVxdWlyZWQgcGFyYW1ldGVyIHZhbHVlIGZvciBbaWRdIGlucHV0LicpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmNvbmZpZy5sb2FkT25TY3JvbGwpIHtcbiAgICAgIGlmICghdGhpcy5jb25maWcubWluQ29udGVudEhlaWdodCkge1xuICAgICAgICB0aHJvdyBFcnJvcignW21pbkNvbnRlbnRIZWlnaHRdIGlzIHJlcXVpcmVkIHdoZW4gW2luZmluaXRlU2Nyb2xsYWJsZV0gaXMgZW5hYmxlZC4nKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuY29uZmlnLnBhZ2VhYmxlKSB7XG4gICAgICAgIHRocm93IEVycm9yKCdbcGFnZWFibGVdIGFuZCBbaW5maW5pdGVTY3JvbGxhYmxlXSBjYW5ub3QgYmUgZW5hYmxlZCBhdCB0aGUgc2FtZSB0aW1lLicpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBDb21wb25lbnQgZGVzdHJveSBsaWZlY3ljbGUgZXZlbnQgaGFuZGxlclxuICAgKi9cbiAgcHVibGljIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmRhdGFGZXRjaFN0cmVhbVN1YnNjcmlwdGlvbikge1xuICAgICAgdGhpcy5kYXRhRmV0Y2hTdHJlYW1TdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5yb3dTZWxlY3RDaGFuZ2VTdWJzY3JpcHRpb24pIHtcbiAgICAgIHRoaXMucm93U2VsZWN0Q2hhbmdlU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuc2Nyb2xsUG9zaXRpb25TdWJzY3JpcHRpb24pIHtcbiAgICAgIHRoaXMuc2Nyb2xsUG9zaXRpb25TdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICB9XG5cbiAgICB0aGlzLmRhdGFUYWJsZVJlc291cmNlU2VydmljZS5kaXNwb3NlKCk7XG4gIH1cbn1cbiJdfQ==