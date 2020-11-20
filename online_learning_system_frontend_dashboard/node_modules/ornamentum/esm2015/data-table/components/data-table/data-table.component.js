/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
export class DataTableComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS10YWJsZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9vcm5hbWVudHVtLyIsInNvdXJjZXMiOlsiZGF0YS10YWJsZS9jb21wb25lbnRzL2RhdGEtdGFibGUvZGF0YS10YWJsZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsWUFBWSxFQUNaLGVBQWUsRUFDZixZQUFZLEVBQ1osS0FBSyxFQUVMLE1BQU0sRUFDTixTQUFTLEVBQ1QsV0FBVyxFQUVYLFVBQVUsRUFDVixVQUFVLEVBQ1YsU0FBUyxFQUVULE1BQU0sRUFDUCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQXdCLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFekUsT0FBTyxFQUFnQixVQUFVLEVBQUUsRUFBRSxFQUFXLE1BQU0sTUFBTSxDQUFDO0FBQzdELE9BQU8sRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXJFLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxnREFBZ0QsQ0FBQztBQW9CckUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBRWxFLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLGtEQUFrRCxDQUFDO0FBRTVGLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQ3ZGLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDZDQUE2QyxDQUFDO0FBQy9FLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBQ3JGLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLDhDQUE4QyxDQUFDO0FBQ3pGLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLCtDQUErQyxDQUFDO0FBQzVGLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDBDQUEwQyxDQUFD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RDs7Ozs7O0lBTWpELHVDQUNpRTs7Ozs7O0lBTWpFLHVDQUNxQzs7Ozs7O0lBTXJDLHFDQUNnRDs7Ozs7O0lBTWhELHdDQUMwRDs7Ozs7O0lBTTFELHNDQUMrRDs7Ozs7SUFtYTdELGdEQUE4Qzs7Ozs7SUFDOUMsbURBQTBEOzs7OztJQUMxRCw4Q0FBMEM7Ozs7O0lBQzFDLCtDQUFxRDs7Ozs7SUFDckQsc0RBQStEOzs7OztJQUMvRCxrQ0FBb0I7O0lBQ3BCLDhDQUFrRDs7SUFDbEQsbURBQTREOztJQUM1RCxvQ0FBcUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIENvbnRlbnRDaGlsZCxcbiAgQ29udGVudENoaWxkcmVuLFxuICBFdmVudEVtaXR0ZXIsXG4gIElucHV0LFxuICBPbkRlc3Ryb3ksXG4gIE91dHB1dCxcbiAgUXVlcnlMaXN0LFxuICBUZW1wbGF0ZVJlZixcbiAgQWZ0ZXJDb250ZW50SW5pdCxcbiAgZm9yd2FyZFJlZixcbiAgRWxlbWVudFJlZixcbiAgVmlld0NoaWxkLFxuICBPbkluaXQsXG4gIE5nWm9uZVxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuaW1wb3J0IHsgU3Vic2NyaXB0aW9uLCBPYnNlcnZhYmxlLCBvZiwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgY2F0Y2hFcnJvciwgZGVib3VuY2VUaW1lLCBzd2l0Y2hNYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IGdldCB9IGZyb20gJy4uLy4uLy4uL3V0aWxpdHkvc2VydmljZXMvb2JqZWN0LXV0aWxpdHkuY2xhc3MnO1xuXG5pbXBvcnQgeyBEYXRhVGFibGVGaWx0ZXJWYWx1ZUV4dHJhY3RDYWxsYmFjayB9IGZyb20gJy4uLy4uL21vZGVscy9kYXRhLXRhYmxlLWZpbHRlci12YWx1ZS1leHRyYWN0LWNhbGxiYWNrLm1vZGVsJztcbmltcG9ydCB7IERhdGFUYWJsZUNlbGxCaW5kRXZlbnRBcmdzIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2RhdGEtdGFibGUtY2VsbC1iaW5kLWV2ZW50LWFyZ3MubW9kZWwnO1xuaW1wb3J0IHsgRGF0YVRhYmxlQ2VsbENsaWNrRXZlbnRBcmdzIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2RhdGEtdGFibGUtY2VsbC1jbGljay1ldmVudC1hcmdzLm1vZGVsJztcbmltcG9ydCB7IERhdGFUYWJsZUhlYWRlckNsaWNrRXZlbnRBcmdzIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2RhdGEtdGFibGUtaGVhZGVyLWNsaWNrLWV2ZW50LWFyZ3MubW9kZWwnO1xuaW1wb3J0IHsgRGF0YVRhYmxlRG91YmxlQ2xpY2tFdmVudEFyZ3MgfSBmcm9tICcuLi8uLi9tb2RlbHMvZGF0YS10YWJsZS1kb3VibGUtY2xpY2stZXZlbnQtYXJncy5tb2RlbCc7XG5pbXBvcnQgeyBEYXRhVGFibGVSb3dDbGlja0V2ZW50QXJncyB9IGZyb20gJy4uLy4uL21vZGVscy9kYXRhLXRhYmxlLXJvdy1jbGljay1ldmVudC1hcmdzLm1vZGVsJztcbmltcG9ydCB7IERhdGFUYWJsZVJvdyB9IGZyb20gJy4uLy4uL21vZGVscy9kYXRhLXRhYmxlLXJvdy5tb2RlbCc7XG5pbXBvcnQgeyBEYXRhVGFibGVSZXF1ZXN0UGFyYW1zIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2RhdGEtdGFibGUtcmVxdWVzdC1wYXJhbXMubW9kZWwnO1xuaW1wb3J0IHsgRGF0YVRhYmxlVHJhbnNsYXRpb25zIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2RhdGEtdGFibGUtdHJhbnNsYXRpb25zLm1vZGVsJztcbmltcG9ydCB7IERhdGFUYWJsZUR5bmFtaWNSb3dTcGFuRXh0cmFjdG9yQ2FsbGJhY2sgfSBmcm9tICcuLi8uLi9tb2RlbHMvZGF0YS10YWJsZS1ncm91cC1maWVsZC1leHRyYWN0b3ItY2FsbGJhY2subW9kZWwnO1xuaW1wb3J0IHsgRGF0YVRhYmxlUXVlcnlSZXN1bHQgfSBmcm9tICcuLi8uLi9tb2RlbHMvZGF0YS10YWJsZS1xdWVyeS1yZXN1bHQubW9kZWwnO1xuaW1wb3J0IHsgRGF0YVRhYmxlRGF0YUJpbmRDYWxsYmFjayB9IGZyb20gJy4uLy4uL21vZGVscy9kYXRhLXRhYmxlLWRhdGEtYmluZC1jYWxsYmFjay5tb2RlbCc7XG5pbXBvcnQgeyBEYXRhVGFibGVGaWx0ZXJPcHRpb24gfSBmcm9tICcuLi8uLi9tb2RlbHMvZGF0YS10YWJsZS1maWx0ZXItb3B0aW9uLm1vZGVsJztcbmltcG9ydCB7IERhdGFUYWJsZVVuaXF1ZUZpZWxkIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2RhdGEtdGFibGUtdW5pcXVlLWZpZWxkLm1vZGVsJztcblxuaW1wb3J0IHsgRGF0YVRhYmxlU2VsZWN0TW9kZSB9IGZyb20gJy4uLy4uL21vZGVscy9kYXRhLXRhYmxlLXNlbGVjdC1tb2RlLm1vZGVsJztcbmltcG9ydCB7IERhdGFUYWJsZVN0b3JhZ2VNb2RlIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2RhdGEtdGFibGUtc3RvcmFnZS1tb2RlLm1vZGVsJztcbmltcG9ydCB7IERhdGFUYWJsZVNjcm9sbFBvaW50IH0gZnJvbSAnLi4vLi4vbW9kZWxzL2RhdGEtdGFibGUtc2Nyb2xsLXBvaW50Lm1vZGVsJztcbmltcG9ydCB7IERhdGFGZXRjaE1vZGUgfSBmcm9tICcuLi8uLi9tb2RlbHMvZGF0YS1mZXRjaC1tb2RlLmVudW0nO1xuXG5pbXBvcnQgeyBEYXRhVGFibGVDb2x1bW5Db21wb25lbnQgfSBmcm9tICcuLi9kYXRhLXRhYmxlLWNvbHVtbi9kYXRhLXRhYmxlLWNvbHVtbi5jb21wb25lbnQnO1xuXG5pbXBvcnQgeyBEcmFnQW5kRHJvcFNlcnZpY2UsIEdsb2JhbFJlZlNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi91dGlsaXR5L3V0aWxpdHkubW9kdWxlJztcbmltcG9ydCB7IFZhbGlkYXRvclNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi91dGlsaXR5L3NlcnZpY2VzL3ZhbGlkYXRvci5zZXJ2aWNlJztcbmltcG9ydCB7IERhdGFUYWJsZUV2ZW50U3RhdGVTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvZGF0YS10YWJsZS1ldmVudC5zZXJ2aWNlJztcbmltcG9ydCB7IERhdGFUYWJsZURhdGFTdGF0ZVNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9kYXRhLXRhYmxlLWRhdGEtc3RhdGUuc2VydmljZSc7XG5pbXBvcnQgeyBEYXRhVGFibGVQZXJzaXN0ZW5jZVNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9kYXRhLXRhYmxlLXBlcnNpc3RlbmNlLnNlcnZpY2UnO1xuaW1wb3J0IHsgRGF0YVRhYmxlQ29uZmlnU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2RhdGEtdGFibGUtY29uZmlnLnNlcnZpY2UnO1xuaW1wb3J0IHsgRGF0YVRhYmxlU2Nyb2xsUG9zaXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvZGF0YS10YWJsZS1zY3JvbGwtcG9zaXRpb24uc2VydmljZSc7XG5pbXBvcnQgeyBEYXRhVGFibGVSZXNvdXJjZVNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9kYXRhLXRhYmxlLXJlc291cmNlLnNlcnZpY2UnO1xuXG4vKipcbiAqIERhdGEgdGFibGUgY29tcG9uZW50OyBEYXRhIHRhYmxlIGVudHJ5IGNvbXBvbmVudC5cbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbmctZGF0YS10YWJsZScsXG4gIHRlbXBsYXRlVXJsOiAnLi9kYXRhLXRhYmxlLmNvbXBvbmVudC5odG1sJyxcbiAgcHJvdmlkZXJzOiBbXG4gICAgRGF0YVRhYmxlQ29uZmlnU2VydmljZSxcbiAgICBEYXRhVGFibGVFdmVudFN0YXRlU2VydmljZSxcbiAgICBEYXRhVGFibGVQZXJzaXN0ZW5jZVNlcnZpY2UsXG4gICAgRGF0YVRhYmxlRGF0YVN0YXRlU2VydmljZSxcbiAgICBEYXRhVGFibGVTY3JvbGxQb3NpdGlvblNlcnZpY2UsXG4gICAgRGF0YVRhYmxlUmVzb3VyY2VTZXJ2aWNlLFxuICAgIHtcbiAgICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gRGF0YVRhYmxlQ29tcG9uZW50KSxcbiAgICAgIG11bHRpOiB0cnVlXG4gICAgfVxuICBdXG59KVxuZXhwb3J0IGNsYXNzIERhdGFUYWJsZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uRGVzdHJveSwgT25Jbml0LCBBZnRlckNvbnRlbnRJbml0LCBDb250cm9sVmFsdWVBY2Nlc3NvciB7XG4gIHByaXZhdGUgcm93U2VsZWN0Q2hhbmdlU3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XG4gIHByaXZhdGUgZGF0YUZldGNoU3RyZWFtU3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XG4gIHByaXZhdGUgc2Nyb2xsUG9zaXRpb25TdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcblxuICAvKipcbiAgICogRGF0YSB0YWJsZSBjb2x1bW4gY29tcG9uZW50IGNvbGxlY3Rpb24uXG4gICAqL1xuICBAQ29udGVudENoaWxkcmVuKERhdGFUYWJsZUNvbHVtbkNvbXBvbmVudClcbiAgcHVibGljIGNvbHVtbnM6IFF1ZXJ5TGlzdDxEYXRhVGFibGVDb2x1bW5Db21wb25lbnQ+O1xuXG4gIC8qKlxuICAgKiBUZW1wbGF0ZSB0byBkaXNwbGF5IHdoZW4gZGF0YSByb3cgaXMgZXhwYW5kZWQgZm9yIGRldGFpbCB2aWV3LlxuICAgKi9cbiAgQENvbnRlbnRDaGlsZCgnbmdEYXRhVGFibGVSb3dFeHBhbmQnLCB7IHN0YXRpYzogdHJ1ZSB9KVxuICBwdWJsaWMgcm93RXhwYW5kVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgLyoqXG4gICAqIFRlbXBsYXRlIHRvIGRpc3BsYXkgd2hlbiBkYXRhIHNldCBpcyBlbXB0eS5cbiAgICovXG4gIEBDb250ZW50Q2hpbGQoJ25nRGF0YVRhYmxlTm9SZWNvcmRzJywgeyBzdGF0aWM6IHRydWUgfSlcbiAgcHVibGljIG5vUmVjb3Jkc1RlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG4gIC8qKlxuICAgKiBUZW1wbGF0ZSB0byBkaXNwbGF5IHdoaWxlIGxvYWRpbmcgZGF0YS5cbiAgICovXG4gIEBDb250ZW50Q2hpbGQoJ25nRGF0YVRhYmxlTG9hZGluZ1NwaW5uZXInLCB7IHN0YXRpYzogdHJ1ZSB9KVxuICBwdWJsaWMgbG9hZGluZ1NwaW5uZXJUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcblxuICAvKipcbiAgICogVGVtcGxhdGUgdG8gZGlzcGxheSB3aGlsZSByb3cgaXMgZXhwYW5kaW5nIHRvIGxvYWQgZGV0YWlsIHZpZXcuXG4gICAqL1xuICBAQ29udGVudENoaWxkKCduZ0RhdGFUYWJsZVJvd0V4cGFuZExvYWRpbmdTcGlubmVyJywgeyBzdGF0aWM6IHRydWUgfSlcbiAgcHVibGljIHJvd0V4cGFuZExvYWRpbmdTcGlubmVyVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgLyoqXG4gICAqIERhdGEgdGFibGUgc2VsZiBET00gZWxlbWVudCByZWZlcmVuY2UuXG4gICAqL1xuICBAVmlld0NoaWxkKCdkYXRhVGFibGVFbGVtZW50JywgeyBzdGF0aWM6IHRydWUgfSlcbiAgcHVibGljIGRhdGFUYWJsZUVsZW1lbnQ6IEVsZW1lbnRSZWY8SFRNTERpdkVsZW1lbnQ+O1xuXG4gIC8vIEV2ZW50IGhhbmRsZXJzXG5cbiAgLyoqXG4gICAqIERhdGEgdGFibGUgaW5pdGlhbGl6ZSBldmVudCBoYW5kbGVyLlxuICAgKiBUcmlnZ2VyZWQgYWZ0ZXIgZGF0YSB0YWJsZSBpbml0aWFsaXplLlxuICAgKi9cbiAgQE91dHB1dCgpXG4gIHB1YmxpYyBpbml0OiBFdmVudEVtaXR0ZXI8RGF0YVRhYmxlQ29tcG9uZW50PjtcblxuICAvKipcbiAgICogUm93IHNlbGVjdGVkIHN0YXRlIGNoYW5nZSBldmVudCBoYW5kbGVyLlxuICAgKiBUcmlnZ2VyZWQgd2hlbiB0YWJsZSByb3cgc2VsZWN0ZWQgc3RhdGUgY2hhbmdlLlxuICAgKi9cbiAgQE91dHB1dCgpXG4gIHB1YmxpYyByb3dTZWxlY3RDaGFuZ2U6IEV2ZW50RW1pdHRlcjxhbnkgfCBhbnlbXT47XG5cbiAgLyoqXG4gICAqIFJvdyBjbGljayBldmVudCBoYW5kbGVyLlxuICAgKiBUcmlnZ2VyZWQgd2hlbiBkYXRhIHJvdyBpcyBjbGlja2VkLlxuICAgKi9cbiAgQE91dHB1dCgpXG4gIHB1YmxpYyByb3dDbGljazogRXZlbnRFbWl0dGVyPERhdGFUYWJsZVJvd0NsaWNrRXZlbnRBcmdzPGFueT4+O1xuXG4gIC8qKlxuICAgKiBSb3cgZG91YmxlIGNsaWNrIGV2ZW50IGhhbmRsZXIuXG4gICAqIFRyaWdnZXJlZCB3aGVuIGRhdGEgcm93IGlzIGRvdWJsZSBjbGlja2VkLlxuICAgKi9cbiAgQE91dHB1dCgpXG4gIHB1YmxpYyByb3dEb3VibGVDbGljazogRXZlbnRFbWl0dGVyPERhdGFUYWJsZURvdWJsZUNsaWNrRXZlbnRBcmdzPGFueT4+O1xuXG4gIC8qKlxuICAgKiBIZWFkZXIgY2xpY2sgZXZlbnQgaGFuZGxlci5cbiAgICogVHJpZ2dlcmVkIHdoZW4gaGVhZGVyIGNvbHVtbiBjbGlja2VkLlxuICAgKi9cbiAgQE91dHB1dCgpXG4gIHB1YmxpYyBoZWFkZXJDbGljazogRXZlbnRFbWl0dGVyPERhdGFUYWJsZUhlYWRlckNsaWNrRXZlbnRBcmdzPjtcblxuICAvKipcbiAgICogQWxsIHJvdyBzZWxlY3QgY2hhbmdlIGV2ZW50IGhhbmRsZXIuXG4gICAqIFRyaWdnZXJlZCB3aGVuIGFsbCByb3cgc2VsZWN0IHN0YXRlIGNoYW5nZWQuXG4gICAqL1xuICBAT3V0cHV0KClcbiAgcHVibGljIGFsbFJvd1NlbGVjdENoYW5nZTogRXZlbnRFbWl0dGVyPGJvb2xlYW4+O1xuXG4gIC8qKlxuICAgKiBDZWxsIGNsaWNrIGV2ZW50IGhhbmRsZXIuXG4gICAqIFRyaWdnZXJlZCB3aGVuIGNsaWNrZWQgb24gYSBjZWxsLlxuICAgKi9cbiAgQE91dHB1dCgpXG4gIHB1YmxpYyBjZWxsQ2xpY2s6IEV2ZW50RW1pdHRlcjxEYXRhVGFibGVDZWxsQ2xpY2tFdmVudEFyZ3M8YW55Pj47XG5cbiAgLyoqXG4gICAqIERhdGEgYm91bmQgZXZlbnQgaGFuZGxlci5cbiAgICogVHJpZ2dlcmVkIGFmdGVyIGRhdGEgYmluZC5cbiAgICovXG4gIEBPdXRwdXQoKVxuICBwdWJsaWMgZGF0YUJvdW5kOiBFdmVudEVtaXR0ZXI8dm9pZD47XG5cbiAgLyoqXG4gICAqIFJvdyBiaW5kIGV2ZW50IGhhbmRsZXIuXG4gICAqIFRyaWdnZXIgb24gZWFjaCByb3cgZGF0YSBiaW5kLlxuICAgKi9cbiAgQE91dHB1dCgpXG4gIHB1YmxpYyByb3dCaW5kOiBFdmVudEVtaXR0ZXI8RGF0YVRhYmxlUm93PGFueT4+O1xuXG4gIC8qKlxuICAgKiBDb2x1bW4gYmluZCBldmVudCBoYW5kbGVyLlxuICAgKiBUcmlnZ2VyZWQgYWZ0ZXIgY29sdW1uIGRhdGEgYmluZC5cbiAgICovXG4gIEBPdXRwdXQoKVxuICBwdWJsaWMgY29sdW1uQmluZDogRXZlbnRFbWl0dGVyPERhdGFUYWJsZUNvbHVtbkNvbXBvbmVudD47XG5cbiAgLyoqXG4gICAqIENlbGwgYmluZCBldmVudCBoYW5kbGVyLlxuICAgKiBUcmlnZ2VyZWQgYWZ0ZXIgZGF0YSB0YWJsZSBjZWxsIGRhdGEgYmluZC5cbiAgICovXG4gIEBPdXRwdXQoKVxuICBwdWJsaWMgY2VsbEJpbmQ6IEV2ZW50RW1pdHRlcjxEYXRhVGFibGVDZWxsQmluZEV2ZW50QXJnczxhbnk+PjtcblxuICAvLyBJbnB1dCBFdmVudHNcblxuICAvKipcbiAgICogU2V0IGRhdGEgYmluZCBldmVudCBoYW5kbGVyIGNhbGxiYWNrLiBUaGlzIGhhbmRsZXIgaXMgZmlyZWQgb24gZWFjaCBkYXRhIGZldGNoIHJlcXVlc3QuXG4gICAqL1xuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IG9uRGF0YUJpbmQodmFsdWU6IERhdGFUYWJsZURhdGFCaW5kQ2FsbGJhY2s8YW55Pikge1xuICAgIHRoaXMuZGF0YVN0YXRlU2VydmljZS5vbkRhdGFCaW5kID0gdmFsdWU7XG4gIH1cblxuICAvKipcbiAgICogU2V0IGZpbHRlciB2YWx1ZSBleHRyYWN0IGV2ZW50IGhhbmRsZXIgY2FsbGJhY2suIFVzZWQgdG8gZXh0cmFjdCBmaWx0ZXIgdmFsdWUgY29sbGVjdGlvbiBkeW5hbWljYWxseSB3aGVuXG4gICAqIGV4cGxpY2l0IGRhdGEgYmluZCBmdW5jdGlvbmFsaXR5IGlzIHVzZWQgd2l0aCBvbkRhdGFCaW5kIGNhbGxiYWNrLlxuICAgKi9cbiAgQElucHV0KClcbiAgcHVibGljIHNldCBvbkZpbHRlclZhbHVlRXh0cmFjdCh2YWx1ZTogRGF0YVRhYmxlRmlsdGVyVmFsdWVFeHRyYWN0Q2FsbGJhY2spIHtcbiAgICB0aGlzLmRhdGFTdGF0ZVNlcnZpY2Uub25GaWx0ZXJWYWx1ZUV4dHJhY3QgPSB2YWx1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgb24gZHluYW1pYyByb3cgc3BhbiBleHRyYWN0IGV2ZW50IGhhbmRsZXIgY2FsbGJhY2suXG4gICAqL1xuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IG9uRHluYW1pY1Jvd1NwYW5FeHRyYWN0KHZhbHVlOiBEYXRhVGFibGVEeW5hbWljUm93U3BhbkV4dHJhY3RvckNhbGxiYWNrPGFueT4pIHtcbiAgICB0aGlzLmRhdGFTdGF0ZVNlcnZpY2Uub25EeW5hbWljUm93U3BhbkV4dHJhY3QgPSB2YWx1ZTtcbiAgfVxuXG4gIC8vIElucHV0IHBhcmFtZXRlcnNcblxuICAvKipcbiAgICogU2V0IHN0YXRpYyBkYXRhIGl0ZW1zIGNvbGxlY3Rpb24uIE5vIG5lZWQgdG8gc2V0IGRhdGEgc291cmNlIHdoZW4gc3RhdGljIGl0ZW1zIGNvbGxlY3Rpb24gaXMgcHJvdmlkZWQuXG4gICAqL1xuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IGl0ZW1zKHZhbHVlOiBhbnlbXSkge1xuICAgIGlmICghdmFsdWUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLmV2ZW50U3RhdGVTZXJ2aWNlLnN0YXRpY0RhdGFTb3VyY2VTdHJlYW0ubmV4dCh2YWx1ZSk7XG4gIH1cblxuICAvKipcbiAgICogU2V0IGRhdGEgc291cmNlIG9ic2VydmFibGUuIFRoaXMgb2JzZXJ2YWJsZSBpcyB1c2VkIHRvIHJldHJpZXZlIHJvdyBkYXRhIGZvciBiaW5kaW5nLlxuICAgKi9cbiAgQElucHV0KClcbiAgcHVibGljIHNldCBkYXRhU291cmNlKHNvdXJjZTogT2JzZXJ2YWJsZTxhbnlbXT4pIHtcbiAgICB0aGlzLmluaXREYXRhU291cmNlKHNvdXJjZSk7XG4gIH1cblxuICAvKipcbiAgICogU2V0IGRhdGEgdGFibGUgdW5pcXVlIGlkZW50aWZpZXIuXG4gICAqL1xuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IGlkKHZhbHVlOiBzdHJpbmcpIHtcbiAgICBpZiAoIVZhbGlkYXRvclNlcnZpY2UuaWRQYXR0ZXJuVmFsaWRhdG9yRXhwcmVzc2lvbi50ZXN0KHZhbHVlKSkge1xuICAgICAgdGhyb3cgRXJyb3IoJ0ludmFsaWQgW2lkXSBpbnB1dCB2YWx1ZS4gVW5pcXVlIGlkZW50aWZpZXIgcGFyYW1ldGVyIG9ubHkgYWNjZXB0IHN0cmluZyBiZWdpbiB3aXRoIGEgbGV0dGVyIChbQS1aYS16XSkgYW5kIG1heSBiZSBmb2xsb3dlZCBieSBhbnkgbnVtYmVyIG9mIGxldHRlcnMsIGRpZ2l0cyAoWzAtOV0pLCBoeXBoZW5zIChcIi1cIiksIHVuZGVyc2NvcmVzIChcIl9cIikuJyk7XG4gICAgfVxuXG4gICAgdGhpcy5kYXRhU3RhdGVTZXJ2aWNlLmlkID0gdmFsdWU7XG4gIH1cblxuICAvKipcbiAgICogU2V0IHBlcnNpc3QgdGFibGUgc3RhdGUgb24gcHJvdmlkZWQgc3RvcmFnZSBtb2RlIGlmIHRydWUuIERlcGVuZHMgb24gc3RvcmFnZU1vZGUgcHJvcGVydHkuXG4gICAqL1xuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IHBlcnNpc3RUYWJsZVN0YXRlKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5jb25maWcucGVyc2lzdFRhYmxlU3RhdGUgPSB2YWx1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgc3RvcmFnZSBtb2RlIHRvIHBlcnNpc3QgdGFibGUgc3RhdGUuIE9ubHkgYXBwbGljYWJsZSB3aGVuIHBlcnNpc3RUYWJsZVN0YXRlIGlzIHRydWUuXG4gICAqL1xuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IHN0b3JhZ2VNb2RlKHZhbHVlOiBEYXRhVGFibGVTdG9yYWdlTW9kZSkge1xuICAgIHRoaXMuZGF0YVRhYmxlU3RhdGVTZXJ2aWNlLnN0b3JhZ2VNb2RlID0gdmFsdWU7XG4gIH1cblxuICAvKipcbiAgICogU2V0IG11bHRpcGxlIGNvbHVtbiBzb3J0YWJsZSBpZiB0cnVlLiBPbmx5IGFwcGxpY2FibGUgZm9yIHNvcnRhYmxlIHRydWUgY29sdW1ucy5cbiAgICovXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgbXVsdGlDb2x1bW5Tb3J0YWJsZSh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuY29uZmlnLm11bHRpQ29sdW1uU29ydGFibGUgPSB2YWx1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgdGFibGUgaGVhZGVyIGJhciB2aXNpYmxlIGlmIHRydWUuXG4gICAqL1xuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IHNob3dIZWFkZXIodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLmNvbmZpZy5zaG93SGVhZGVyID0gdmFsdWU7XG4gIH1cblxuICAvKipcbiAgICogU2V0IHRpdGxlIHRvIGJlIHNob3duIGluIHRoZSBoZWFkZXIuIE9ubHkgYXBwbGljYWJsZSB3aGVuIHNob3dIZWFkZXIgaXMgdHJ1ZS5cbiAgICovXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgdGl0bGUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuY29uZmlnLnRpdGxlID0gdmFsdWU7XG4gIH1cblxuICAvKipcbiAgICogU2V0IHdpZHRoIHZhbHVlIGluIHBpeGVscy4gQ2FuIGJlIHVzZWQgdG8gc2V0IHRoZSB3aWR0aCBvZiB0ZWggdGFibGUgKHJlc3BvbnNpdmUgaWYgbm90IHNldCkuXG4gICAqL1xuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IHdpZHRoKHZhbHVlOiBzdHJpbmcgfCBudW1iZXIpIHtcbiAgICB0aGlzLmNvbmZpZy53aWR0aCA9IHZhbHVlO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCBtaW5pbXVtIHRhYmxlIGNvbnRlbnQgaGVpZ2h0IHZhbHVlIGluIHBpeGVscy4gQ2FuIGJlIHVzZWQgdG8gc2V0IHRoZSBtaW5pbXVtIGhlaWdodCBvZiB0aGUgdGFibGUgY29udGVudCBhcmVhLlxuICAgKi9cbiAgQElucHV0KClcbiAgcHVibGljIHNldCBtaW5Db250ZW50SGVpZ2h0KHZhbHVlOiBzdHJpbmcgfCBudW1iZXIpIHtcbiAgICB0aGlzLmNvbmZpZy5taW5Db250ZW50SGVpZ2h0ID0gdmFsdWU7XG4gIH1cblxuICAvKipcbiAgICogTWluaW11bSB0YWJsZSBjb250ZW50IHdpZHRoIHZhbHVlIGluIHBpeGVscy4gQ2FuIGJlIHVzZWQgdG8gc2V0IHRoZSBtaW5pbXVtIHdpZHRoIG9mIHRoZSB0YWJsZSBjb250ZW50IGFyZWEuXG4gICAqL1xuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IG1pbkNvbnRlbnRXaWR0aCh2YWx1ZTogc3RyaW5nIHwgbnVtYmVyKSB7XG4gICAgdGhpcy5jb25maWcubWluQ29udGVudFdpZHRoID0gdmFsdWU7XG4gIH1cblxuICAvKipcbiAgICogVGFibGUgY29udGVudCBoZWlnaHQgdmFsdWUgaW4gcGl4ZWxzLiBUaGlzIGNvbmZpZ3VyYXRpb24gY2FuIGJlIHVzZWQgdG8gZW5hYmxlIHRhYmxlIGNvbnRlbnQgdmVydGljYWxcbiAgICogc2Nyb2xsaW5nIGZvciByZXNwb25zaXZlIGRlc2lnbi5cbiAgICovXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgY29udGVudEhlaWdodCh2YWx1ZTogc3RyaW5nIHwgbnVtYmVyKSB7XG4gICAgdGhpcy5jb25maWcuY29udGVudEhlaWdodCA9IHZhbHVlO1xuICB9XG5cbiAgLyoqXG4gICAqIFNob3cgcGFnaW5hdGlvbiBiYXIgaWYgdHJ1ZS4gRGVwZW5kcyBvbiBvZmZzZXQgYW5kIGxpbWl0IHZhbHVlcy4gVHJpZ2dlciBkYXRhTG9hZCBldmVudCB3aXRoIG9mZnNldFxuICAgKiBhbmQgbGltaXQgdmFsdWVzLlxuICAgKi9cbiAgQElucHV0KClcbiAgcHVibGljIHNldCBwYWdlYWJsZSh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuY29uZmlnLnBhZ2VhYmxlID0gdmFsdWU7XG4gIH1cblxuICAvKipcbiAgICogRW5hYmxlIHNjcm9sbGluZyBiYXNlZCBvbi1kZW1hbmQgZGF0YSBsb2FkaW5nIGZ1bmN0aW9uYWxpdHkgaWYgdHJ1ZS4gVHJpZ2dlciBkYXRhTG9hZCBldmVudCB3aXRoIG9mZnNldFxuICAgKiBhbmQgbGltaXQgdmFsdWVzIHdoZW4gc2Nyb2xsIHRvIGJvdHRvbSB1bnRpbCBkYXRhIHNvdXJjZSBleGhhdXN0LlxuICAgKi9cbiAgQElucHV0KClcbiAgcHVibGljIHNldCBsb2FkT25TY3JvbGwodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLmNvbmZpZy5sb2FkT25TY3JvbGwgPSB2YWx1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgdmlldyBoZWlnaHQgZGlzdGFuY2UgcmF0aW8gdG8gdHJpZ2dlciBkYXRhIGZldGNoIG9uIHNjcm9sbC4gQXBwbGljYWJsZSBvbmx5IHdoZW4gbG9hZCBvbiBzY3JvbGwgbW9kZSBpcyBlbmFibGVkLlxuICAgKi9cbiAgQElucHV0KClcbiAgcHVibGljIHNldCBsb2FkVmlld0Rpc3RhbmNlUmF0aW8odmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuY29uZmlnLmxvYWRWaWV3RGlzdGFuY2VSYXRpbyA9IHZhbHVlO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCBhdXRvIGdlbmVyYXRlZCBpbmRleCBjb2x1bW4gd2l0aCByb3cgbnVtYmVyaW5nIGlmIHRydWUuXG4gICAqL1xuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IHNob3dJbmRleENvbHVtbih2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuY29uZmlnLnNob3dJbmRleENvbHVtbiA9IHZhbHVlO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCBpbmRleCBjb2x1bW4gaGVhZGVyIHRpdGxlLiBBcHBsaWNhYmxlIHdoZW4gc2hvd0luZGV4Q29sdW1uIGlzIHRydWUuXG4gICAqL1xuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IGluZGV4Q29sdW1uVGl0bGUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuY29uZmlnLmluZGV4Q29sdW1uVGl0bGUgPSB2YWx1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgcm93IHNlbGVjdCBjaGVja2JveCBhbmQgc2VsZWN0IHN0YXRlIGlmIHRydWUuXG4gICAqL1xuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IHJvd1NlbGVjdGFibGUodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLmNvbmZpZy5yb3dTZWxlY3RhYmxlID0gdmFsdWU7XG4gIH1cblxuICAvKipcbiAgICogRGF0YSB0YWJsZSByb3cgc2VsZWN0IG1vZGUuIEFwcGxpY2FibGUgb25seSB3aGVuIHJvd1NlbGVjdGFibGUgaXMgdHJ1ZS5cbiAgICovXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgc2VsZWN0TW9kZSh2YWx1ZTogRGF0YVRhYmxlU2VsZWN0TW9kZSkge1xuICAgIHRoaXMuY29uZmlnLnNlbGVjdE1vZGUgPSB2YWx1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgc2VsZWN0IGFsbCByb3cgY2hlY2tib3ggb24gY29sdW1uIGhlYWRlciB2aXNpYmxlIGlmIHRydWUuXG4gICAqIE9ubHkgYXBwbGljYWJsZSB3aGVuIHNob3dSb3dTZWxlY3RDaGVja2JveCwgcm93U2VsZWN0YWJsZSBpcyB0cnVlICYgaXRlbSBzZWxlY3RNb2RlIGlzICBtdWx0aS5cbiAgICovXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgc2hvd1Jvd1NlbGVjdENoZWNrYm94KHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5jb25maWcuc2hvd1Jvd1NlbGVjdENoZWNrYm94ID0gdmFsdWU7XG4gIH1cblxuICAvKipcbiAgICogU2V0IHNlbGVjdCBhbGwgcm93IGNoZWNrYm94IG9uIGNvbHVtbiBoZWFkZXIgdmlzaWJsZSBpZiB0cnVlLlxuICAgKiBPbmx5IGFwcGxpY2FibGUgd2hlbiBzaG93Um93U2VsZWN0Q2hlY2tib3gsIHJvd1NlbGVjdGFibGUgaXMgdHJ1ZSAmIGl0ZW0gc2VsZWN0TW9kZSBpcyAgbXVsdGkuXG4gICAqL1xuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IHNob3dSb3dTZWxlY3RBbGxDaGVja2JveCh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuY29uZmlnLnNob3dSb3dTZWxlY3RBbGxDaGVja2JveCA9IHZhbHVlO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCBzdWJzdGl0dXRlIHJvd3MgdmlzaWJsZSBpZiB0cnVlLiBGaWxsIHdpdGggZW1wdHkgcm93cyB3aGVuIHJvdyBjb3VudCA8IGxpbWl0LlxuICAgKi9cbiAgQElucHV0KClcbiAgcHVibGljIHNldCBzaG93U3Vic3RpdHV0ZVJvd3ModmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLmNvbmZpZy5zaG93U3Vic3RpdHV0ZVJvd3MgPSB2YWx1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgcm93IGV4cGFuZGVyIHZpc2libGUgaWYgdHJ1ZS4gUmVuZGVyIG5nRGF0YVRhYmxlRXhwYW5kIHRlbXBsYXRlIG9uIGV4cGFuZCBjbGljay5cbiAgICovXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgZXhwYW5kYWJsZVJvd3ModmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLmNvbmZpZy5leHBhbmRhYmxlUm93cyA9IHZhbHVlO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCB0cmlnZ2VyIHJvdyBzZWxlY3Qgb24gY2xpY2sgZXZlbnQgaWYgdHJ1ZS4gQXBwbGljYWJsZSBvbmx5IHdoZW4gcm93U2VsZWN0YWJsZSBpcyB0cnVlLlxuICAgKi9cbiAgQElucHV0KClcbiAgcHVibGljIHNldCBzZWxlY3RPblJvd0NsaWNrKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5jb25maWcuc2VsZWN0T25Sb3dDbGljayA9IHZhbHVlO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCBleHBhbmQgYW5kIHJlbmRlciBleHBhbmQgdGVtcGxhdGUgb24gcm93IGNsaWNrIGlmIHRydWUuIE9ubHkgYXBwbGljYWJsZSB3aGVuIGV4cGFuZGFibGVSb3dzIGlzIHRydWUuXG4gICAqL1xuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IGV4cGFuZE9uUm93Q2xpY2sodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLmNvbmZpZy5leHBhbmRPblJvd0NsaWNrID0gdmFsdWU7XG4gIH1cblxuICAvKipcbiAgICogQXV0byB0cmlnZ2VyIGRhdGFMb2FkIGV2ZW50IG9uIGluaXRpYWxpemF0aW9uIGlmIHRydWUuXG4gICAqL1xuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IGF1dG9GZXRjaCh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuY29uZmlnLmF1dG9GZXRjaCA9IHZhbHVlO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCBsb2FkaW5nIHNwaW5uZXIgdmlzaWJsZSBpZiB0cnVlLiBTaG93IGxvYWRpbmcgc3Bpbm5lciB3aGVuIGRhdGEgZmV0Y2ggb3BlcmF0aW9uIGlzIHRyaWdnZXJlZC5cbiAgICovXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgc2hvd0xvYWRpbmdTcGlubmVyKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5jb25maWcuc2hvd0xvYWRpbmdTcGlubmVyID0gdmFsdWU7XG4gIH1cblxuICAvKipcbiAgICogU2V0IHNlbGVjdCBvcHRpb24gdHJhY2sgYnkgZmllbGQgcGF0aCB3aGljaCBpcyB1c2VkIHRvIHVuaXF1ZWx5IGlkZW50aWZ5IHJvdyBmb3Igc2VsZWN0aW9uIHRyYWNraW5nLlxuICAgKiBUaGlzIGZpZWxkIHN1cHBvcnQgb2JqZWN0IHBhdGhzIGV4cHJlc3Npb25zICdyb290WzBdLm5lc3QnLlxuICAgKi9cbiAgQElucHV0KClcbiAgcHVibGljIHNldCBzZWxlY3RUcmFja0J5KHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLmNvbmZpZy5zZWxlY3RUcmFja0J5ID0gdmFsdWU7XG4gIH1cblxuICAvKipcbiAgICogU2V0IHNlbGVjdGVkIHJvdyBpZGVudGlmaWVyLiBTZWxlY3Qgc3BlY2lmaWVkIHJvdyBvbiBpbml0aWFsIGxvYWQuXG4gICAqIEFwcGxpY2FibGUgd2hlbiByb3cgc2VsZWN0IG1vZGUgaXMgU0lOR0xFIG9yIFNJTkdMRV9UT0dHTEUuXG4gICAqL1xuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IHNlbGVjdGVkUm93KHZhbHVlOiBhbnkpIHtcbiAgICB0aGlzLmRhdGFTdGF0ZVNlcnZpY2Uuc2VsZWN0ZWRSb3cgPSB2YWx1ZTtcbiAgICB0aGlzLmV2ZW50U3RhdGVTZXJ2aWNlLnJvd1NlbGVjdENoYW5nZVN0cmVhbS5lbWl0KHRoaXMuZGF0YVN0YXRlU2VydmljZS5zZWxlY3RlZFJvdyk7XG4gIH1cblxuICAvKipcbiAgICogU2V0IHNlbGVjdGVkIHJvdyBpZGVudGlmaWVycyBjb2xsZWN0aW9uLiBTZWxlY3Qgc3BlY2lmaWVkIHJvd3Mgb24gaW5pdGlhbCBsb2FkLlxuICAgKiBBcHBsaWNhYmxlIHdoZW4gc2VsZWN0TW9kZSBpcyBTSU5HTEUgb3IgU0lOR0xFX1RPR0dMRSB0cnVlLlxuICAgKi9cbiAgQElucHV0KClcbiAgcHVibGljIHNldCBzZWxlY3RlZFJvd3ModmFsdWU6IGFueVtdKSB7XG4gICAgdGhpcy5kYXRhU3RhdGVTZXJ2aWNlLnNlbGVjdGVkUm93cyA9IHZhbHVlIHx8IFtdO1xuICAgIHRoaXMuZXZlbnRTdGF0ZVNlcnZpY2Uucm93U2VsZWN0Q2hhbmdlU3RyZWFtLmVtaXQodGhpcy5kYXRhU3RhdGVTZXJ2aWNlLnNlbGVjdGVkUm93cyk7XG4gIH1cblxuICAvKipcbiAgICogU2V0IGZpbHRlciBkZWJvdW5jZSB0aW1lIGluIG1pbGxpc2Vjb25kcy4gQXBwbGljYWJsZSBvbmx5IHdoZW4gZmlsdGVyRGVib3VuY2UgaXMgdHJ1ZS5cbiAgICovXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgZmlsdGVyRGVib3VuY2VUaW1lKHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLmNvbmZpZy5maWx0ZXJEZWJvdW5jZVRpbWUgPSB2YWx1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgZmlsdGVyIGRhdGEgZGVib3VuY2UgZW5hYmxlZCBzdGF0ZSB3aXRoIHByb3ZpZGVkIGZpbHRlckRlYm91bmNlVGltZSBpZiB0cnVlLlxuICAgKi9cbiAgQElucHV0KClcbiAgcHVibGljIHNldCBmaWx0ZXJEZWJvdW5jZSh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuY29uZmlnLmZpbHRlckRlYm91bmNlID0gdmFsdWU7XG4gIH1cblxuICAvKipcbiAgICogU2V0IHJlZnJlc2ggYnV0dG9uIHZpc2libGUgaWYgdHJ1ZS4gT25seSBhcHBsaWNhYmxlIHdoZW4gc2hvd0hlYWRlciBpcyB0cnVlLlxuICAgKi9cbiAgQElucHV0KClcbiAgcHVibGljIHNldCBzaG93UmVmcmVzaEJ1dHRvbih2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuY29uZmlnLnNob3dSZWZyZXNoQnV0dG9uID0gdmFsdWU7XG4gIH1cblxuICAvKipcbiAgICogUm93IHNlbGVjdG9yIGNvbHVtbiB3aWR0aCBpbiBwaXhlbHMuIEFwcGxpY2FibGUgb25seSB3aGVuIHNob3dDb2x1bW5TZWxlY3RvciBpcyB0cnVlLlxuICAgKi9cbiAgQElucHV0KClcbiAgcHVibGljIHNldCBzaG93Q29sdW1uU2VsZWN0b3IodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLmNvbmZpZy5zaG93Q29sdW1uU2VsZWN0b3IgPSB2YWx1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgY29sdW1uIHNlbGVjdG9yIGRyb3Bkb3duIHdpZHRoIGluIHBpeGVscy4gT25seSBhcHBsaWNhYmxlIHdoZW4gc2hvd0NvbHVtblNlbGVjdG9yIGlzIHRydWUuXG4gICAqL1xuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IGNvbHVtblNlbGVjdG9yV2lkdGgodmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuY29uZmlnLmNvbHVtblNlbGVjdG9yV2lkdGggPSB2YWx1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgZXhwYW5kZXIgY29sdW1uIHdpZHRoIGluIHBpeGVscy4gQXBwbGljYWJsZSBvbmx5IHdoZW4gZXhwYW5kYWJsZVJvd3MgaXMgdHJ1ZS5cbiAgICovXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgZXhwYW5kZXJDb2x1bW5XaWR0aCh2YWx1ZTogbnVtYmVyIHwgc3RyaW5nKSB7XG4gICAgdGhpcy5jb25maWcuZXhwYW5kZXJDb2x1bW5XaWR0aCA9IHZhbHVlO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCBpbmRleCBjb2x1bW4gd2lkdGggaW4gcGl4ZWxzLiBBcHBsaWNhYmxlIG9ubHkgd2hlbiBzaG93SW5kZXhDb2x1bW4gaXMgdHJ1ZS5cbiAgICovXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgaW5kZXhDb2x1bW5XaWR0aCh2YWx1ZTogbnVtYmVyIHwgc3RyaW5nKSB7XG4gICAgdGhpcy5jb25maWcuaW5kZXhDb2x1bW5XaWR0aCA9IHZhbHVlO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCByb3cgc2VsZWN0b3IgY29sdW1uIHdpZHRoIGluIHBpeGVscy4gQXBwbGljYWJsZSBvbmx5IHdoZW4gc2hvd0NvbHVtblNlbGVjdG9yIGlzIHRydWUuXG4gICAqL1xuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IHNlbGVjdGlvbkNvbHVtbldpZHRoKHZhbHVlOiBudW1iZXIgfCBzdHJpbmcpIHtcbiAgICB0aGlzLmNvbmZpZy5zZWxlY3Rpb25Db2x1bW5XaWR0aCA9IHZhbHVlO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCB0cmFuc2xhdGlvbiBkYXRhIG9iamVjdC4gVXNlZCB0byBsb2NhbGl6ZSB0YWJsZSBzdGF0aWMgbGFiZWwgdGV4dC5cbiAgICovXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgdHJhbnNsYXRpb25zKGRhdGE6IERhdGFUYWJsZVRyYW5zbGF0aW9ucykge1xuICAgIHRoaXMuY29uZmlnLnRyYW5zbGF0aW9ucyA9IGRhdGE7XG4gIH1cblxuICAvKipcbiAgICogU2V0IHJvdyBleHBhbmQgbG9hZGluZyBzcGlubmVyIHZpc2libGUgaWYgdHJ1ZS4gQXBwbGljYWJsZSBvbmx5IHdoZW4gcm93IGV4cGFuZCBpcyBlbmFibGVkLlxuICAgKi9cbiAgQElucHV0KClcbiAgcHVibGljIHNldCBzaG93Um93RXhwYW5kTG9hZGluZ1NwaW5uZXIodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLmNvbmZpZy5zaG93Um93RXhwYW5kTG9hZGluZ1NwaW5uZXIgPSB2YWx1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgZGF0YSBvZmZzZXQgdmFsdWUgKHN0YXJ0IG9mZnNldCBpbmRleCkuIEFwcGxpY2FibGUgb25seSB3aGVuIHBhZ2VhYmxlIGlzIHRydWUuXG4gICAqL1xuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IG9mZnNldCh2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5jb25maWcub2Zmc2V0ID0gdmFsdWU7XG4gICAgdGhpcy5ldmVudFN0YXRlU2VydmljZS5kYXRhRmV0Y2hTdHJlYW0ubmV4dChEYXRhRmV0Y2hNb2RlLlNPRlRfTE9BRCk7XG4gIH1cblxuICAvKipcbiAgICogU2V0IGRhdGEgbGltaXQgdmFsdWUgKHBhZ2Ugc2l6ZSkuIEFwcGxpY2FibGUgb25seSB3aGVuIHBhZ2VhYmxlIGlzIHRydWUuXG4gICAqL1xuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IGxpbWl0KHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLmNvbmZpZy5saW1pdCA9IHZhbHVlO1xuICAgIHRoaXMuZXZlbnRTdGF0ZVNlcnZpY2UuZGF0YUZldGNoU3RyZWFtLm5leHQoRGF0YUZldGNoTW9kZS5TT0ZUX0xPQUQpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCBjdXJyZW50IHBhZ2UgbnVtYmVyLiBBdXRvIGNhbGN1bGF0ZSBvZmZzZXQgZGVwZW5kaW5nIG9uIHBhZ2UgbnVtYmVyLFxuICAgKiBkbyBub3QgZXhwbGljaXRseSBzZXQgb2Zmc2V0IHdoZW4gcGFnZSBpcyB1c2VkLlxuICAgKi9cbiAgQElucHV0KClcbiAgcHVibGljIHNldCBwYWdlKHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLm9mZnNldCA9ICh2YWx1ZSAtIDEpICogdGhpcy5jb25maWcubGltaXQ7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGN1cnJlbnQgcGFnZSBudW1iZXIuXG4gICAqL1xuICBwdWJsaWMgZ2V0IHBhZ2UoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gTWF0aC5mbG9vcih0aGlzLmNvbmZpZy5vZmZzZXQgLyB0aGlzLmNvbmZpZy5saW1pdCkgKyAxO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBkYXRhIHRhYmxlIGhlYWRlciBwYWRkaW5nIGluIHBpeGVscy5cbiAgICovXG4gIHB1YmxpYyBnZXQgaGVhZGVyUGFkZGluZygpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLmNvbmZpZy5jb250ZW50SGVpZ2h0ID8gdGhpcy5nbG9iYWxSZWZTZXJ2aWNlLnNjcm9sbGJhcldpZHRoIDogMDtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgZGF0YSBsb2FkaW5nIHN0YXR1cy5cbiAgICovXG4gIHB1YmxpYyBnZXQgaXNMb2FkaW5nKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAhKHRoaXMuY29uZmlnLmxvYWRPblNjcm9sbCAmJiB0aGlzLmRhdGFTdGF0ZVNlcnZpY2UuZGF0YVJvd3MubGVuZ3RoKVxuICAgICAgJiYgdGhpcy5jb25maWcuc2hvd0xvYWRpbmdTcGlubmVyICYmIHRoaXMuZGF0YVN0YXRlU2VydmljZS5kYXRhTG9hZGluZztcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgZHJhZ0FuZERyb3BTZXJ2aWNlOiBEcmFnQW5kRHJvcFNlcnZpY2UsXG4gICAgcHJpdmF0ZSBkYXRhVGFibGVTdGF0ZVNlcnZpY2U6IERhdGFUYWJsZVBlcnNpc3RlbmNlU2VydmljZSxcbiAgICBwcml2YXRlIGdsb2JhbFJlZlNlcnZpY2U6IEdsb2JhbFJlZlNlcnZpY2UsXG4gICAgcHJpdmF0ZSBldmVudFN0YXRlU2VydmljZTogRGF0YVRhYmxlRXZlbnRTdGF0ZVNlcnZpY2UsXG4gICAgcHJpdmF0ZSBkYXRhVGFibGVSZXNvdXJjZVNlcnZpY2U6IERhdGFUYWJsZVJlc291cmNlU2VydmljZTxhbnk+LFxuICAgIHByaXZhdGUgem9uZTogTmdab25lLFxuICAgIHB1YmxpYyBkYXRhU3RhdGVTZXJ2aWNlOiBEYXRhVGFibGVEYXRhU3RhdGVTZXJ2aWNlLFxuICAgIHB1YmxpYyBzY3JvbGxQb3NpdGlvblNlcnZpY2U6IERhdGFUYWJsZVNjcm9sbFBvc2l0aW9uU2VydmljZSxcbiAgICBwdWJsaWMgY29uZmlnOiBEYXRhVGFibGVDb25maWdTZXJ2aWNlXG4gICkge1xuICAgIHRoaXMuc3RvcmFnZU1vZGUgPSBjb25maWcuc3RvcmFnZU1vZGU7XG5cbiAgICB0aGlzLmhlYWRlckNsaWNrID0gdGhpcy5ldmVudFN0YXRlU2VydmljZS5oZWFkZXJDbGlja1N0cmVhbTtcbiAgICB0aGlzLmFsbFJvd1NlbGVjdENoYW5nZSA9IHRoaXMuZXZlbnRTdGF0ZVNlcnZpY2UuYWxsUm93U2VsZWN0Q2hhbmdlU3RyZWFtO1xuICAgIHRoaXMucm93QmluZCA9IHRoaXMuZXZlbnRTdGF0ZVNlcnZpY2Uucm93QmluZFN0cmVhbTtcbiAgICB0aGlzLnJvd0NsaWNrID0gdGhpcy5ldmVudFN0YXRlU2VydmljZS5yb3dDbGlja1N0cmVhbTtcbiAgICB0aGlzLnJvd0RvdWJsZUNsaWNrID0gdGhpcy5ldmVudFN0YXRlU2VydmljZS5yb3dEb3VibGVDbGlja1N0cmVhbTtcbiAgICB0aGlzLnJvd1NlbGVjdENoYW5nZSA9IHRoaXMuZXZlbnRTdGF0ZVNlcnZpY2Uucm93U2VsZWN0Q2hhbmdlU3RyZWFtO1xuICAgIHRoaXMuY2VsbEJpbmQgPSB0aGlzLmV2ZW50U3RhdGVTZXJ2aWNlLmNlbGxCaW5kU3RyZWFtO1xuICAgIHRoaXMuY2VsbENsaWNrID0gdGhpcy5ldmVudFN0YXRlU2VydmljZS5jZWxsQ2xpY2tTdHJlYW07XG4gICAgdGhpcy5pbml0ID0gdGhpcy5ldmVudFN0YXRlU2VydmljZS5pbml0U3RyZWFtO1xuICAgIHRoaXMuZGF0YUJvdW5kID0gdGhpcy5ldmVudFN0YXRlU2VydmljZS5kYXRhQm91bmRTdHJlYW07XG4gICAgdGhpcy5jb2x1bW5CaW5kID0gdGhpcy5ldmVudFN0YXRlU2VydmljZS5jb2x1bW5CaW5kO1xuICB9XG5cbiAgLyoqXG4gICAqIE9uIGFmdGVyIGRhdGEgYmluZCBldmVudCBoYW5kbGVyXG4gICAqIEBwYXJhbSBxdWVyeVJlc3VsdCBRdWVyeSByZXN1bHQgb2JqZWN0XG4gICAqL1xuICBwcml2YXRlIG9uQWZ0ZXJEYXRhQmluZChxdWVyeVJlc3VsdDogRGF0YVRhYmxlUXVlcnlSZXN1bHQ8YW55Pik6IHZvaWQge1xuICAgIHRoaXMuZGF0YVN0YXRlU2VydmljZS5pdGVtQ291bnQgPSBxdWVyeVJlc3VsdC5jb3VudDtcbiAgICB0aGlzLnNldERhdGFSb3dzKHF1ZXJ5UmVzdWx0Lml0ZW1zKTtcblxuICAgIGlmICh0aGlzLmRhdGFTdGF0ZVNlcnZpY2UuaGVhcmRSZWxvYWQpIHtcbiAgICAgIHRoaXMuZXZlbnRTdGF0ZVNlcnZpY2UuZmV0Y2hGaWx0ZXJPcHRpb25zU3RyZWFtLm5leHQoZmFsc2UpO1xuICAgICAgdGhpcy5kYXRhU3RhdGVTZXJ2aWNlLmhlYXJkUmVsb2FkID0gZmFsc2U7XG4gICAgfVxuXG4gICAgdGhpcy5kYXRhU3RhdGVTZXJ2aWNlLmRhdGFMb2FkaW5nID0gZmFsc2U7XG4gICAgdGhpcy5ldmVudFN0YXRlU2VydmljZS5kYXRhQm91bmRTdHJlYW0uZW1pdCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBkYXRhIGl0ZW0gc2VsZWN0ZWQgc3RhdGVcbiAgICogQHBhcmFtIGl0ZW0gRGF0YSBpdGVtIG9iamVjdFxuICAgKiBAcmV0dXJuIFRydWUgaWYgaXRlbSBpcyBzZWxlY3RlZFxuICAgKi9cbiAgcHJpdmF0ZSBnZXRTZWxlY3RlZFN0YXRlKGl0ZW06IGFueSk6IGJvb2xlYW4ge1xuICAgIGNvbnN0IGlkID0gZ2V0KGl0ZW0sIHRoaXMuY29uZmlnLnNlbGVjdFRyYWNrQnkpO1xuICAgIGlmIChpZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuY29uZmlnLnNlbGVjdE1vZGUgPT09ICdtdWx0aScpIHtcbiAgICAgIHJldHVybiB0aGlzLmRhdGFTdGF0ZVNlcnZpY2Uuc2VsZWN0ZWRSb3dzLmluZGV4T2YoaWQpID4gLTE7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuZGF0YVN0YXRlU2VydmljZS5zZWxlY3RlZFJvdyA9PT0gaWQ7XG4gIH1cblxuICAvKipcbiAgICogU2V0IGRhdGEgdGFibGUgaXRlbSBjb2xsZWN0aW9uXG4gICAqIEBwYXJhbSBpdGVtcyBEYXRhIHRhYmxlIGl0ZW0gY29sbGVjdGlvblxuICAgKi9cbiAgcHJpdmF0ZSBzZXREYXRhUm93cyhpdGVtczogYW55W10pOiB2b2lkIHtcbiAgICBjb25zdCBtYXBwZWRJdGVtcyA9IGl0ZW1zLm1hcCgoaXRlbTogYW55LCBpbmRleDogbnVtYmVyKSA9PiB7XG4gICAgICBsZXQgY3VycmVudEluZGV4O1xuICAgICAgaWYgKHRoaXMuY29uZmlnLmxvYWRPblNjcm9sbCB8fCB0aGlzLmNvbmZpZy5wYWdlYWJsZSkge1xuICAgICAgICBjdXJyZW50SW5kZXggPSB0aGlzLmNvbmZpZy5vZmZzZXQgKyBpbmRleCArIDE7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjdXJyZW50SW5kZXggPSBpbmRleCArIDE7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIGRhdGFMb2FkZWQ6IGZhbHNlLFxuICAgICAgICBleHBhbmRlZDogZmFsc2UsXG4gICAgICAgIGRpc2FibGVkOiBmYWxzZSxcbiAgICAgICAgY29sb3I6ICcnLFxuICAgICAgICBjc3NDbGFzczogJycsXG4gICAgICAgIHRvb2x0aXA6ICcnLFxuICAgICAgICBpbmRleDogY3VycmVudEluZGV4LFxuICAgICAgICBpdGVtLFxuICAgICAgICBzZWxlY3RlZDogdGhpcy5nZXRTZWxlY3RlZFN0YXRlKGl0ZW0pXG4gICAgICB9O1xuICAgIH0pO1xuXG4gICAgaWYgKHRoaXMuY29uZmlnLmxvYWRPblNjcm9sbCkge1xuICAgICAgdGhpcy5kYXRhU3RhdGVTZXJ2aWNlLmRhdGFSb3dzID0gWyAuLi50aGlzLmRhdGFTdGF0ZVNlcnZpY2UuZGF0YVJvd3MsIC4uLm1hcHBlZEl0ZW1zIF07XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZGF0YVN0YXRlU2VydmljZS5kYXRhUm93cyA9IG1hcHBlZEl0ZW1zO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmNvbmZpZy5zZWxlY3RNb2RlID09PSAnbXVsdGknKSB7XG4gICAgICB0aGlzLmRhdGFTdGF0ZVNlcnZpY2UuYWxsUm93U2VsZWN0ZWQgPVxuICAgICAgICB0aGlzLmRhdGFTdGF0ZVNlcnZpY2UuZGF0YVJvd3MubGVuZ3RoICE9PSAwICYmXG4gICAgICAgIHRoaXMuZGF0YVN0YXRlU2VydmljZS5kYXRhUm93cy5ldmVyeSgoZGF0YVJvdzogRGF0YVRhYmxlUm93PGFueT4pID0+IHtcbiAgICAgICAgICByZXR1cm4gZGF0YVJvdy5zZWxlY3RlZDtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKCF0aGlzLmNvbmZpZy5sb2FkT25TY3JvbGwpIHtcbiAgICAgIGNvbnN0IHN1YnN0aXR1dGVSb3dDb3VudCA9IHRoaXMuY29uZmlnLmxpbWl0IC0gdGhpcy5kYXRhU3RhdGVTZXJ2aWNlLmRhdGFSb3dzLmxlbmd0aDtcbiAgICAgIHRoaXMuZGF0YVN0YXRlU2VydmljZS5zdWJzdGl0dXRlUm93cyA9IEFycmF5LmZyb20oe1xuICAgICAgICBsZW5ndGg6IHN1YnN0aXR1dGVSb3dDb3VudFxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemUgZGF0YSBmZXRjaCBldmVudFxuICAgKi9cbiAgcHJpdmF0ZSBpbml0RGF0YUZldGNoRXZlbnQoKTogdm9pZCB7XG4gICAgY29uc3Qgbm9vcCA9IHtcbiAgICAgIGl0ZW1zOiBbXSxcbiAgICAgIGNvdW50OiAwXG4gICAgfTtcblxuICAgIHRoaXMuZGF0YUZldGNoU3RyZWFtU3Vic2NyaXB0aW9uID0gdGhpcy5ldmVudFN0YXRlU2VydmljZS5kYXRhRmV0Y2hTdHJlYW1cbiAgICAgIC5waXBlKFxuICAgICAgICBkZWJvdW5jZVRpbWUoMjApLFxuICAgICAgICBzd2l0Y2hNYXAoKGZldGNoTW9kZTogRGF0YUZldGNoTW9kZSkgPT4gdGhpcy5tYXBEYXRhQmluZChmZXRjaE1vZGUpKSxcbiAgICAgICAgY2F0Y2hFcnJvcigoKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIG9mKG5vb3ApO1xuICAgICAgICB9KVxuICAgICAgKVxuICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgKHF1ZXJ5UmVzdWx0OiBEYXRhVGFibGVRdWVyeVJlc3VsdDxhbnk+KSA9PiB7XG4gICAgICAgICAgdGhpcy5vbkFmdGVyRGF0YUJpbmQocXVlcnlSZXN1bHQpO1xuICAgICAgICB9LFxuICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgdGhpcy5vbkFmdGVyRGF0YUJpbmQobm9vcCk7XG4gICAgICAgIH1cbiAgICAgICk7XG4gIH1cblxuICAvKipcbiAgICogUmUtbWFwIGRhdGEgYmluZGluZyBkYXRhXG4gICAqIEBwYXJhbSBmZXRjaE1vZGUgRGF0YSBmZXRjaCBtb2RlXG4gICAqIEByZXR1cm4gRGF0YSB0YWJsZSBxdWVyeSByZXN1bHQgc3RyZWFtXG4gICAqL1xuICBwcml2YXRlIG1hcERhdGFCaW5kKGZldGNoTW9kZTogRGF0YUZldGNoTW9kZSk6IE9ic2VydmFibGU8RGF0YVRhYmxlUXVlcnlSZXN1bHQ8YW55Pj4ge1xuICAgIHRoaXMuZGF0YVN0YXRlU2VydmljZS5kYXRhTG9hZGluZyA9IHRydWU7XG4gICAgaWYgKGZldGNoTW9kZSA9PT0gRGF0YUZldGNoTW9kZS5IQVJEX1JFTE9BRCkge1xuICAgICAgdGhpcy5jbGVhclJvd1NlbGVjdFN0YXRlKCk7XG4gICAgICB0aGlzLmNsZWFyQ29sdW1uU3RhdGUoKTtcbiAgICAgIHRoaXMuZGF0YVN0YXRlU2VydmljZS5oZWFyZFJlbG9hZCA9IHRydWU7XG4gICAgICB0aGlzLmNvbmZpZy5vZmZzZXQgPSAwO1xuICAgIH1cblxuICAgIGNvbnN0IHBhcmFtczogRGF0YVRhYmxlUmVxdWVzdFBhcmFtcyA9IHtcbiAgICAgIGxvYWREYXRhOiBmZXRjaE1vZGUgPT09IERhdGFGZXRjaE1vZGUuSEFSRF9SRUxPQUQgfHwgZmV0Y2hNb2RlID09PSBEYXRhRmV0Y2hNb2RlLlNPRlRfUkVMT0FEXG4gICAgfTtcblxuICAgIGlmICh0aGlzLmNvbHVtbnMpIHtcbiAgICAgIHBhcmFtcy5maWVsZHMgPSB0aGlzLmNvbHVtbnNcbiAgICAgICAgLmZpbHRlcihjb2x1bW4gPT4ge1xuICAgICAgICAgIHJldHVybiBjb2x1bW4uc29ydGFibGUgfHwgY29sdW1uLmZpbHRlcmFibGU7XG4gICAgICAgIH0pXG4gICAgICAgIC5yZWR1Y2UoKGFjYzogRGF0YVRhYmxlVW5pcXVlRmllbGRbXSwgY29sdW1uOiBEYXRhVGFibGVDb2x1bW5Db21wb25lbnQpID0+IHtcbiAgICAgICAgICBpZiAoY29sdW1uLnNvcnRGaWVsZCB8fCBjb2x1bW4uZmlsdGVyRmllbGQpIHtcbiAgICAgICAgICAgIGFjYy5wdXNoKHtcbiAgICAgICAgICAgICAgZmllbGQ6IGNvbHVtbi5zb3J0RmllbGQgfHwgY29sdW1uLmZpbHRlckZpZWxkLFxuICAgICAgICAgICAgICBjb2x1bW5cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBhY2MucHVzaCh7XG4gICAgICAgICAgICAgIGZpZWxkOiBjb2x1bW4uZmllbGQsXG4gICAgICAgICAgICAgIGNvbHVtblxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIGFjYztcbiAgICAgICAgfSwgW10pXG4gICAgICAgIC5tYXAoKHVuaXF1ZUZpZWxkOiBEYXRhVGFibGVVbmlxdWVGaWVsZCkgPT4ge1xuICAgICAgICAgIGxldCBmaWx0ZXI7XG4gICAgICAgICAgaWYgKHVuaXF1ZUZpZWxkLmNvbHVtbi5zaG93RHJvcGRvd25GaWx0ZXIpIHtcbiAgICAgICAgICAgIGlmICh1bmlxdWVGaWVsZC5jb2x1bW4uZHJvcGRvd25GaWx0ZXJTZWxlY3RNb2RlID09PSAnbXVsdGknKSB7XG4gICAgICAgICAgICAgIGZpbHRlciA9IHVuaXF1ZUZpZWxkLmNvbHVtbi5maWx0ZXIgJiYgdW5pcXVlRmllbGQuY29sdW1uLmZpbHRlci5tYXAoZmlsdGVyVmFsdWUgPT4gZmlsdGVyVmFsdWUua2V5KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGZpbHRlciA9IHVuaXF1ZUZpZWxkLmNvbHVtbi5maWx0ZXIgJiYgdW5pcXVlRmllbGQuY29sdW1uLmZpbHRlci5rZXk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGZpbHRlciA9IHVuaXF1ZUZpZWxkLmNvbHVtbi5maWx0ZXI7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGZpZWxkOiB1bmlxdWVGaWVsZC5maWVsZCxcbiAgICAgICAgICAgIHNvcnRhYmxlOiB1bmlxdWVGaWVsZC5jb2x1bW4uc29ydGFibGUsXG4gICAgICAgICAgICBzb3J0T3JkZXI6IHVuaXF1ZUZpZWxkLmNvbHVtbi5zb3J0T3JkZXIsXG4gICAgICAgICAgICBzb3J0UHJpb3JpdHk6IHVuaXF1ZUZpZWxkLmNvbHVtbi5zb3J0UHJpb3JpdHkgfHwgKHVuaXF1ZUZpZWxkLmNvbHVtbi5zb3J0T3JkZXIgPyAxIDogMCksXG4gICAgICAgICAgICBmaWx0ZXJhYmxlOiB1bmlxdWVGaWVsZC5jb2x1bW4uZmlsdGVyYWJsZSxcbiAgICAgICAgICAgIGZpbHRlclZhbHVlOiBmaWx0ZXIsXG4gICAgICAgICAgICBmaWx0ZXJFeHByZXNzaW9uOiB1bmlxdWVGaWVsZC5jb2x1bW4uZmlsdGVyRXhwcmVzc2lvbixcbiAgICAgICAgICB9O1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5jb25maWcucGFnZWFibGUgfHwgdGhpcy5jb25maWcubG9hZE9uU2Nyb2xsKSB7XG4gICAgICBwYXJhbXMub2Zmc2V0ID0gdGhpcy5jb25maWcub2Zmc2V0O1xuICAgICAgcGFyYW1zLmxpbWl0ID0gdGhpcy5jb25maWcubGltaXQ7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuY29uZmlnLnBlcnNpc3RUYWJsZVN0YXRlKSB7XG4gICAgICB0aGlzLmRhdGFUYWJsZVN0YXRlU2VydmljZS5zZXRTdGF0ZSh0aGlzLmRhdGFTdGF0ZVNlcnZpY2UuaWQsIHBhcmFtcyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuZGF0YVN0YXRlU2VydmljZS5vbkRhdGFCaW5kKHBhcmFtcyk7XG4gIH1cblxuICAvKipcbiAgICogSW5pdGlhbGl6ZSBkYXRhIHRhYmxlIHN0YXRlIHZpYSBwcmV2aW91cyBzdGF0ZSBzbmFwc2hvdDsgQXBwbGljYWJsZSBvbmx5IHdoZW4gcGVyc2lzdCB0YWJsZSBzdGF0ZSBpcyBlbmFibGVkXG4gICAqL1xuICBwcml2YXRlIGluaXREYXRhVGFibGVTdGF0ZSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5jb25maWcucGVyc2lzdFRhYmxlU3RhdGUpIHtcbiAgICAgIGNvbnN0IGRhdGFUYWJsZVN0YXRlID0gdGhpcy5kYXRhVGFibGVTdGF0ZVNlcnZpY2UuZ2V0U3RhdGUodGhpcy5kYXRhU3RhdGVTZXJ2aWNlLmlkKTtcbiAgICAgIGlmIChkYXRhVGFibGVTdGF0ZSkge1xuICAgICAgICB0aGlzLmNvbHVtbnMuZm9yRWFjaChjb2x1bW4gPT4ge1xuICAgICAgICAgIGNvbnN0IGZpZWxkID0gZGF0YVRhYmxlU3RhdGUuZmllbGRzLmZpbmQoY29sID0+IHtcbiAgICAgICAgICAgIHJldHVybiBjb2wuZmllbGQgPT09IGNvbHVtbi5maWVsZDtcbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIGlmIChmaWVsZCkge1xuICAgICAgICAgICAgaWYgKGNvbHVtbi5maWx0ZXJhYmxlICYmIGZpZWxkLmZpbHRlcmFibGUpIHtcbiAgICAgICAgICAgICAgaWYgKGNvbHVtbi5zaG93RHJvcGRvd25GaWx0ZXIpIHtcbiAgICAgICAgICAgICAgICBpZiAoZmllbGQuZmlsdGVyVmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgIGlmIChjb2x1bW4uZHJvcGRvd25GaWx0ZXJTZWxlY3RNb2RlID09PSAnbXVsdGknKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbHVtbi5maWx0ZXIgPSBmaWVsZC5maWx0ZXJWYWx1ZS5tYXAoKGZpbHRlclZhbHVlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleTogZmlsdGVyVmFsdWUsXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogZmlsdGVyVmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbHVtbi5maWx0ZXIgPSB7XG4gICAgICAgICAgICAgICAgICAgICAga2V5OiBmaWVsZC5maWx0ZXJWYWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogZmllbGQuZmlsdGVyVmFsdWVcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29sdW1uLmZpbHRlciA9IGZpZWxkLmZpbHRlclZhbHVlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChjb2x1bW4uc29ydGFibGUgJiYgZmllbGQuc29ydGFibGUpIHtcbiAgICAgICAgICAgICAgY29sdW1uLnNvcnRPcmRlciA9IGZpZWxkLnNvcnRPcmRlcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuY29uZmlnLmxpbWl0ID0gZGF0YVRhYmxlU3RhdGUubGltaXQ7XG4gICAgICAgIHRoaXMuY29uZmlnLm9mZnNldCA9IGRhdGFUYWJsZVN0YXRlLm9mZnNldDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQWZ0ZXIgY29tcG9uZW50IGluaXRpYWxpemUgbGlmZWN5Y2xlIGV2ZW50IGhhbmRsZXJcbiAgICovXG4gIHB1YmxpYyBuZ0FmdGVyQ29udGVudEluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5kYXRhU3RhdGVTZXJ2aWNlLnJlbGF0aXZlUGFyZW50RWxlbWVudCA9IHRoaXMuZGF0YVRhYmxlRWxlbWVudC5uYXRpdmVFbGVtZW50O1xuXG4gICAgaWYgKCF0aGlzLmRhdGFTdGF0ZVNlcnZpY2Uub25EYXRhQmluZCkge1xuICAgICAgdGhpcy5kYXRhU291cmNlID0gdGhpcy5ldmVudFN0YXRlU2VydmljZS5zdGF0aWNEYXRhU291cmNlU3RyZWFtO1xuICAgIH1cblxuICAgIHRoaXMuaW5pdERhdGFUYWJsZVN0YXRlKCk7XG4gICAgdGhpcy5pbml0RGF0YUZldGNoRXZlbnQoKTtcblxuICAgIGlmICh0aGlzLmNvbmZpZy5hdXRvRmV0Y2gpIHtcbiAgICAgIHRoaXMuZXZlbnRTdGF0ZVNlcnZpY2UuZGF0YUZldGNoU3RyZWFtLm5leHQoRGF0YUZldGNoTW9kZS5TT0ZUX0xPQUQpO1xuICAgIH1cblxuICAgIHRoaXMuZXZlbnRTdGF0ZVNlcnZpY2UuZmV0Y2hGaWx0ZXJPcHRpb25zU3RyZWFtLm5leHQodHJ1ZSk7XG4gICAgdGhpcy5ldmVudFN0YXRlU2VydmljZS5pbml0U3RyZWFtLmVtaXQodGhpcyk7XG5cbiAgICBpZiAodGhpcy5jb25maWcubG9hZE9uU2Nyb2xsKSB7XG4gICAgICB0aGlzLnNjcm9sbFBvc2l0aW9uU3Vic2NyaXB0aW9uID0gdGhpcy5zY3JvbGxQb3NpdGlvblNlcnZpY2Uuc2Nyb2xsUG9zaXRpb25TdHJlYW0uc3Vic2NyaWJlKChwb3M6IERhdGFUYWJsZVNjcm9sbFBvaW50KSA9PiB7XG4gICAgICAgIGNvbnN0IHJvdW5kaW5nUGl4ZWwgPSAxO1xuICAgICAgICBjb25zdCBndXR0ZXJQaXhlbCA9IDE7XG5cbiAgICAgICAgaWYgKFxuICAgICAgICAgIHBvcy5pc1ZlcnRpY2FsXG4gICAgICAgICAgJiYgcG9zLnNjcm9sbFRvcCA+PSBwb3Muc2Nyb2xsSGVpZ2h0IC0gKDEgKyB0aGlzLmNvbmZpZy5sb2FkVmlld0Rpc3RhbmNlUmF0aW8pICogcG9zLmNsaWVudEhlaWdodCAtIHJvdW5kaW5nUGl4ZWwgLSBndXR0ZXJQaXhlbFxuICAgICAgICAgICYmICh0aGlzLmNvbmZpZy5vZmZzZXQgKyB0aGlzLmNvbmZpZy5saW1pdCkgPCB0aGlzLmRhdGFTdGF0ZVNlcnZpY2UuaXRlbUNvdW50XG4gICAgICAgICAgJiYgIXRoaXMuZGF0YVN0YXRlU2VydmljZS5kYXRhTG9hZGluZ1xuICAgICAgICApIHtcbiAgICAgICAgICB0aGlzLmRhdGFTdGF0ZVNlcnZpY2UuZGF0YUxvYWRpbmcgPSB0cnVlO1xuICAgICAgICAgIHRoaXMuem9uZS5ydW4oKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5vZmZzZXQgPSB0aGlzLmNvbmZpZy5vZmZzZXQgKyB0aGlzLmNvbmZpZy5saW1pdDtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJlc2V0IGNvbHVtbiBzb3J0IGFuZCBmaWx0ZXIgc3RhdGVcbiAgICovXG4gIHByaXZhdGUgY2xlYXJDb2x1bW5TdGF0ZSgpOiB2b2lkIHtcbiAgICB0aGlzLmNvbHVtbnMuZm9yRWFjaCgoY29sdW1uOiBEYXRhVGFibGVDb2x1bW5Db21wb25lbnQpID0+IHtcbiAgICAgIGNvbHVtbi5yZXNldFNvcnRPcmRlcigpO1xuICAgICAgY29sdW1uLmZpbHRlciA9IHVuZGVmaW5lZDtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDbGVhciBzZWxlY3RlZCBkYXRhIHJvdyBzdGF0dXNcbiAgICovXG4gIHByaXZhdGUgY2xlYXJSb3dTZWxlY3RTdGF0ZSgpOiB2b2lkIHtcbiAgICB0aGlzLmRhdGFTdGF0ZVNlcnZpY2Uuc2VsZWN0ZWRSb3cgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5kYXRhU3RhdGVTZXJ2aWNlLnNlbGVjdGVkUm93cyA9IFtdO1xuICAgIHRoaXMuZGF0YVN0YXRlU2VydmljZS5hbGxSb3dTZWxlY3RlZCA9IGZhbHNlO1xuICB9XG5cbiAgLyoqXG4gICAqIEZldGNoIGRhdGEgZnJvbSBkYXRhIHNvdXJjZVxuICAgKiBAcGFyYW0gZmV0Y2hNb2RlIERhdGEgZmV0Y2ggbW9kZVxuICAgKi9cbiAgcHVibGljIGZldGNoRGF0YShmZXRjaE1vZGU6IERhdGFGZXRjaE1vZGUgPSBEYXRhRmV0Y2hNb2RlLlNPRlRfUkVMT0FEKTogdm9pZCB7XG4gICAgdGhpcy5ldmVudFN0YXRlU2VydmljZS5kYXRhRmV0Y2hTdHJlYW0ubmV4dChmZXRjaE1vZGUpO1xuICB9XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemUgZGF0YSBzb3VyY2VcbiAgICogQHBhcmFtIHNvdXJjZSBEYXRhIHNvdXJjZSBzdHJlYW1cbiAgICovXG4gIHB1YmxpYyBpbml0RGF0YVNvdXJjZShzb3VyY2U6IE9ic2VydmFibGU8YW55Pik6IHZvaWQge1xuICAgIHRoaXMuZGF0YVRhYmxlUmVzb3VyY2VTZXJ2aWNlLnNldERhdGFTb3VyY2Uoc291cmNlKTtcblxuICAgIHRoaXMub25EYXRhQmluZCA9IChwYXJhbXM6IERhdGFUYWJsZVJlcXVlc3RQYXJhbXMpOiBPYnNlcnZhYmxlPERhdGFUYWJsZVF1ZXJ5UmVzdWx0PGFueT4+ID0+IHtcbiAgICAgIGlmIChwYXJhbXMubG9hZERhdGEpIHtcbiAgICAgICAgdGhpcy5kYXRhVGFibGVSZXNvdXJjZVNlcnZpY2Uuc2V0RGF0YVNvdXJjZShzb3VyY2UpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5kYXRhVGFibGVSZXNvdXJjZVNlcnZpY2UucXVlcnkocGFyYW1zKTtcbiAgICB9O1xuXG4gICAgdGhpcy5vbkZpbHRlclZhbHVlRXh0cmFjdCA9IChjb2x1bW46IERhdGFUYWJsZUNvbHVtbkNvbXBvbmVudCk6IE9ic2VydmFibGU8RGF0YVRhYmxlRmlsdGVyT3B0aW9uW10+ID0+IHtcbiAgICAgIHJldHVybiB0aGlzLmRhdGFUYWJsZVJlc291cmNlU2VydmljZS5leHRyYWN0RmlsdGVyT3B0aW9ucyhjb2x1bW4pO1xuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogQ29tcG9uZW50IHZhbHVlIHdyaXRlIGV2ZW50IGhhbmRsZXI7IEZvcm0gY29udHJvbCBzdXBwb3J0IGltcGxlbWVudGF0aW9uXG4gICAqL1xuICBwdWJsaWMgd3JpdGVWYWx1ZSh2YWx1ZTogYW55KTogdm9pZCB7XG4gICAgaWYgKHRoaXMuY29uZmlnLnNlbGVjdE1vZGUgPT09ICdtdWx0aScpIHtcbiAgICAgIHRoaXMuc2VsZWN0ZWRSb3dzID0gdmFsdWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2VsZWN0ZWRSb3cgPSB2YWx1ZTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmVnaXN0ZXIgc2VsZWN0IGNoYW5nZSBldmVudCBoYW5kbGVyOyBGb3JtIGNvbnRyb2wgc3VwcG9ydCBpbXBsZW1lbnRhdGlvblxuICAgKiBAcGFyYW0gb25TZWxlY3RDaGFuZ2UgU2VsZWN0IGNoYW5nZSBldmVudCBoYW5kbGVyIGNhbGxiYWNrXG4gICAqL1xuICBwdWJsaWMgcmVnaXN0ZXJPbkNoYW5nZShvblNlbGVjdENoYW5nZTogKHZhbHVlOiBhbnkpID0+IHZvaWQpOiB2b2lkIHtcbiAgICB0aGlzLnJvd1NlbGVjdENoYW5nZVN1YnNjcmlwdGlvbiA9IHRoaXMuZXZlbnRTdGF0ZVNlcnZpY2Uucm93U2VsZWN0Q2hhbmdlU3RyZWFtLnN1YnNjcmliZSgoc2VsZWN0ZWRJZHM6IGFueSB8IGFueVtdKSA9PiB7XG4gICAgICBvblNlbGVjdENoYW5nZShzZWxlY3RlZElkcyk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogUmVnaXN0ZXIgb24gdG91Y2ggZXZlbnQgaGFuZGxlcjsgRm9ybSBjb250cm9sIHN1cHBvcnQgaW1wbGVtZW50YXRpb25cbiAgICogQHBhcmFtIGZuIFRvdWNoIGV2ZW50IGNhbGxiYWNrIGhhbmRsZXJcbiAgICovXG4gIHB1YmxpYyByZWdpc3Rlck9uVG91Y2hlZChmbjogYW55KTogdm9pZCB7fVxuXG4gIC8qKlxuICAgKiBHZXQgdGFibGUgd2lkdGggaW4gcGl4ZWxzXG4gICAqL1xuICBwdWJsaWMgZ2V0IHRhYmxlV2lkdGgoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5jb25maWcud2lkdGggfHwgdGhpcy5kYXRhU3RhdGVTZXJ2aWNlLnRhYmxlV2lkdGg7XG4gIH1cblxuICBwdWJsaWMgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLmRhdGFTdGF0ZVNlcnZpY2UuaWQpIHtcbiAgICAgIHRocm93IEVycm9yKCdNaXNzaW5nIHJlcXVpcmVkIHBhcmFtZXRlciB2YWx1ZSBmb3IgW2lkXSBpbnB1dC4nKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5jb25maWcubG9hZE9uU2Nyb2xsKSB7XG4gICAgICBpZiAoIXRoaXMuY29uZmlnLm1pbkNvbnRlbnRIZWlnaHQpIHtcbiAgICAgICAgdGhyb3cgRXJyb3IoJ1ttaW5Db250ZW50SGVpZ2h0XSBpcyByZXF1aXJlZCB3aGVuIFtpbmZpbml0ZVNjcm9sbGFibGVdIGlzIGVuYWJsZWQuJyk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLmNvbmZpZy5wYWdlYWJsZSkge1xuICAgICAgICB0aHJvdyBFcnJvcignW3BhZ2VhYmxlXSBhbmQgW2luZmluaXRlU2Nyb2xsYWJsZV0gY2Fubm90IGJlIGVuYWJsZWQgYXQgdGhlIHNhbWUgdGltZS4nKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ29tcG9uZW50IGRlc3Ryb3kgbGlmZWN5Y2xlIGV2ZW50IGhhbmRsZXJcbiAgICovXG4gIHB1YmxpYyBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5kYXRhRmV0Y2hTdHJlYW1TdWJzY3JpcHRpb24pIHtcbiAgICAgIHRoaXMuZGF0YUZldGNoU3RyZWFtU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMucm93U2VsZWN0Q2hhbmdlU3Vic2NyaXB0aW9uKSB7XG4gICAgICB0aGlzLnJvd1NlbGVjdENoYW5nZVN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnNjcm9sbFBvc2l0aW9uU3Vic2NyaXB0aW9uKSB7XG4gICAgICB0aGlzLnNjcm9sbFBvc2l0aW9uU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuXG4gICAgdGhpcy5kYXRhVGFibGVSZXNvdXJjZVNlcnZpY2UuZGlzcG9zZSgpO1xuICB9XG59XG4iXX0=