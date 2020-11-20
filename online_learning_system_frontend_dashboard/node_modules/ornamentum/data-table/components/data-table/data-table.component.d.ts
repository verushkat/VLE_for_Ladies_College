import { EventEmitter, OnDestroy, QueryList, TemplateRef, AfterContentInit, ElementRef, OnInit, NgZone } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { Observable } from 'rxjs';
import { DataTableFilterValueExtractCallback } from '../../models/data-table-filter-value-extract-callback.model';
import { DataTableCellBindEventArgs } from '../../models/data-table-cell-bind-event-args.model';
import { DataTableCellClickEventArgs } from '../../models/data-table-cell-click-event-args.model';
import { DataTableHeaderClickEventArgs } from '../../models/data-table-header-click-event-args.model';
import { DataTableDoubleClickEventArgs } from '../../models/data-table-double-click-event-args.model';
import { DataTableRowClickEventArgs } from '../../models/data-table-row-click-event-args.model';
import { DataTableRow } from '../../models/data-table-row.model';
import { DataTableTranslations } from '../../models/data-table-translations.model';
import { DataTableDynamicRowSpanExtractorCallback } from '../../models/data-table-group-field-extractor-callback.model';
import { DataTableDataBindCallback } from '../../models/data-table-data-bind-callback.model';
import { DataTableSelectMode } from '../../models/data-table-select-mode.model';
import { DataTableStorageMode } from '../../models/data-table-storage-mode.model';
import { DataFetchMode } from '../../models/data-fetch-mode.enum';
import { DataTableColumnComponent } from '../data-table-column/data-table-column.component';
import { DragAndDropService, GlobalRefService } from '../../../utility/utility.module';
import { DataTableEventStateService } from '../../services/data-table-event.service';
import { DataTableDataStateService } from '../../services/data-table-data-state.service';
import { DataTablePersistenceService } from '../../services/data-table-persistence.service';
import { DataTableConfigService } from '../../services/data-table-config.service';
import { DataTableScrollPositionService } from '../../services/data-table-scroll-position.service';
import { DataTableResourceService } from '../../services/data-table-resource.service';
/**
 * Data table component; Data table entry component.
 */
export declare class DataTableComponent implements OnDestroy, OnInit, AfterContentInit, ControlValueAccessor {
    private dragAndDropService;
    private dataTableStateService;
    private globalRefService;
    private eventStateService;
    private dataTableResourceService;
    private zone;
    dataStateService: DataTableDataStateService;
    scrollPositionService: DataTableScrollPositionService;
    config: DataTableConfigService;
    private rowSelectChangeSubscription;
    private dataFetchStreamSubscription;
    private scrollPositionSubscription;
    /**
     * Data table column component collection.
     */
    columns: QueryList<DataTableColumnComponent>;
    /**
     * Template to display when data row is expanded for detail view.
     */
    rowExpandTemplate: TemplateRef<any>;
    /**
     * Template to display when data set is empty.
     */
    noRecordsTemplate: TemplateRef<any>;
    /**
     * Template to display while loading data.
     */
    loadingSpinnerTemplate: TemplateRef<any>;
    /**
     * Template to display while row is expanding to load detail view.
     */
    rowExpandLoadingSpinnerTemplate: TemplateRef<any>;
    /**
     * Data table self DOM element reference.
     */
    dataTableElement: ElementRef<HTMLDivElement>;
    /**
     * Data table initialize event handler.
     * Triggered after data table initialize.
     */
    init: EventEmitter<DataTableComponent>;
    /**
     * Row selected state change event handler.
     * Triggered when table row selected state change.
     */
    rowSelectChange: EventEmitter<any | any[]>;
    /**
     * Row click event handler.
     * Triggered when data row is clicked.
     */
    rowClick: EventEmitter<DataTableRowClickEventArgs<any>>;
    /**
     * Row double click event handler.
     * Triggered when data row is double clicked.
     */
    rowDoubleClick: EventEmitter<DataTableDoubleClickEventArgs<any>>;
    /**
     * Header click event handler.
     * Triggered when header column clicked.
     */
    headerClick: EventEmitter<DataTableHeaderClickEventArgs>;
    /**
     * All row select change event handler.
     * Triggered when all row select state changed.
     */
    allRowSelectChange: EventEmitter<boolean>;
    /**
     * Cell click event handler.
     * Triggered when clicked on a cell.
     */
    cellClick: EventEmitter<DataTableCellClickEventArgs<any>>;
    /**
     * Data bound event handler.
     * Triggered after data bind.
     */
    dataBound: EventEmitter<void>;
    /**
     * Row bind event handler.
     * Trigger on each row data bind.
     */
    rowBind: EventEmitter<DataTableRow<any>>;
    /**
     * Column bind event handler.
     * Triggered after column data bind.
     */
    columnBind: EventEmitter<DataTableColumnComponent>;
    /**
     * Cell bind event handler.
     * Triggered after data table cell data bind.
     */
    cellBind: EventEmitter<DataTableCellBindEventArgs<any>>;
    /**
     * Set data bind event handler callback. This handler is fired on each data fetch request.
     */
    onDataBind: DataTableDataBindCallback<any>;
    /**
     * Set filter value extract event handler callback. Used to extract filter value collection dynamically when
     * explicit data bind functionality is used with onDataBind callback.
     */
    onFilterValueExtract: DataTableFilterValueExtractCallback;
    /**
     * Set on dynamic row span extract event handler callback.
     */
    onDynamicRowSpanExtract: DataTableDynamicRowSpanExtractorCallback<any>;
    /**
     * Set static data items collection. No need to set data source when static items collection is provided.
     */
    items: any[];
    /**
     * Set data source observable. This observable is used to retrieve row data for binding.
     */
    dataSource: Observable<any[]>;
    /**
     * Set data table unique identifier.
     */
    id: string;
    /**
     * Set persist table state on provided storage mode if true. Depends on storageMode property.
     */
    persistTableState: boolean;
    /**
     * Set storage mode to persist table state. Only applicable when persistTableState is true.
     */
    storageMode: DataTableStorageMode;
    /**
     * Set multiple column sortable if true. Only applicable for sortable true columns.
     */
    multiColumnSortable: boolean;
    /**
     * Set table header bar visible if true.
     */
    showHeader: boolean;
    /**
     * Set title to be shown in the header. Only applicable when showHeader is true.
     */
    title: string;
    /**
     * Set width value in pixels. Can be used to set the width of teh table (responsive if not set).
     */
    width: string | number;
    /**
     * Set minimum table content height value in pixels. Can be used to set the minimum height of the table content area.
     */
    minContentHeight: string | number;
    /**
     * Minimum table content width value in pixels. Can be used to set the minimum width of the table content area.
     */
    minContentWidth: string | number;
    /**
     * Table content height value in pixels. This configuration can be used to enable table content vertical
     * scrolling for responsive design.
     */
    contentHeight: string | number;
    /**
     * Show pagination bar if true. Depends on offset and limit values. Trigger dataLoad event with offset
     * and limit values.
     */
    pageable: boolean;
    /**
     * Enable scrolling based on-demand data loading functionality if true. Trigger dataLoad event with offset
     * and limit values when scroll to bottom until data source exhaust.
     */
    loadOnScroll: boolean;
    /**
     * Set view height distance ratio to trigger data fetch on scroll. Applicable only when load on scroll mode is enabled.
     */
    loadViewDistanceRatio: number;
    /**
     * Set auto generated index column with row numbering if true.
     */
    showIndexColumn: boolean;
    /**
     * Set index column header title. Applicable when showIndexColumn is true.
     */
    indexColumnTitle: string;
    /**
     * Set row select checkbox and select state if true.
     */
    rowSelectable: boolean;
    /**
     * Data table row select mode. Applicable only when rowSelectable is true.
     */
    selectMode: DataTableSelectMode;
    /**
     * Set select all row checkbox on column header visible if true.
     * Only applicable when showRowSelectCheckbox, rowSelectable is true & item selectMode is  multi.
     */
    showRowSelectCheckbox: boolean;
    /**
     * Set select all row checkbox on column header visible if true.
     * Only applicable when showRowSelectCheckbox, rowSelectable is true & item selectMode is  multi.
     */
    showRowSelectAllCheckbox: boolean;
    /**
     * Set substitute rows visible if true. Fill with empty rows when row count < limit.
     */
    showSubstituteRows: boolean;
    /**
     * Set row expander visible if true. Render ngDataTableExpand template on expand click.
     */
    expandableRows: boolean;
    /**
     * Set trigger row select on click event if true. Applicable only when rowSelectable is true.
     */
    selectOnRowClick: boolean;
    /**
     * Set expand and render expand template on row click if true. Only applicable when expandableRows is true.
     */
    expandOnRowClick: boolean;
    /**
     * Auto trigger dataLoad event on initialization if true.
     */
    autoFetch: boolean;
    /**
     * Set loading spinner visible if true. Show loading spinner when data fetch operation is triggered.
     */
    showLoadingSpinner: boolean;
    /**
     * Set select option track by field path which is used to uniquely identify row for selection tracking.
     * This field support object paths expressions 'root[0].nest'.
     */
    selectTrackBy: string;
    /**
     * Set selected row identifier. Select specified row on initial load.
     * Applicable when row select mode is SINGLE or SINGLE_TOGGLE.
     */
    selectedRow: any;
    /**
     * Set selected row identifiers collection. Select specified rows on initial load.
     * Applicable when selectMode is SINGLE or SINGLE_TOGGLE true.
     */
    selectedRows: any[];
    /**
     * Set filter debounce time in milliseconds. Applicable only when filterDebounce is true.
     */
    filterDebounceTime: number;
    /**
     * Set filter data debounce enabled state with provided filterDebounceTime if true.
     */
    filterDebounce: boolean;
    /**
     * Set refresh button visible if true. Only applicable when showHeader is true.
     */
    showRefreshButton: boolean;
    /**
     * Row selector column width in pixels. Applicable only when showColumnSelector is true.
     */
    showColumnSelector: boolean;
    /**
     * Set column selector dropdown width in pixels. Only applicable when showColumnSelector is true.
     */
    columnSelectorWidth: number;
    /**
     * Set expander column width in pixels. Applicable only when expandableRows is true.
     */
    expanderColumnWidth: number | string;
    /**
     * Set index column width in pixels. Applicable only when showIndexColumn is true.
     */
    indexColumnWidth: number | string;
    /**
     * Set row selector column width in pixels. Applicable only when showColumnSelector is true.
     */
    selectionColumnWidth: number | string;
    /**
     * Set translation data object. Used to localize table static label text.
     */
    translations: DataTableTranslations;
    /**
     * Set row expand loading spinner visible if true. Applicable only when row expand is enabled.
     */
    showRowExpandLoadingSpinner: boolean;
    /**
     * Set data offset value (start offset index). Applicable only when pageable is true.
     */
    offset: number;
    /**
     * Set data limit value (page size). Applicable only when pageable is true.
     */
    limit: number;
    /**
     * Set current page number. Auto calculate offset depending on page number,
     * do not explicitly set offset when page is used.
     */
    /**
    * Get current page number.
    */
    page: number;
    /**
     * Get data table header padding in pixels.
     */
    readonly headerPadding: number;
    /**
     * Get data loading status.
     */
    readonly isLoading: boolean;
    constructor(dragAndDropService: DragAndDropService, dataTableStateService: DataTablePersistenceService, globalRefService: GlobalRefService, eventStateService: DataTableEventStateService, dataTableResourceService: DataTableResourceService<any>, zone: NgZone, dataStateService: DataTableDataStateService, scrollPositionService: DataTableScrollPositionService, config: DataTableConfigService);
    /**
     * On after data bind event handler
     * @param queryResult Query result object
     */
    private onAfterDataBind;
    /**
     * Get data item selected state
     * @param item Data item object
     * @return True if item is selected
     */
    private getSelectedState;
    /**
     * Set data table item collection
     * @param items Data table item collection
     */
    private setDataRows;
    /**
     * Initialize data fetch event
     */
    private initDataFetchEvent;
    /**
     * Re-map data binding data
     * @param fetchMode Data fetch mode
     * @return Data table query result stream
     */
    private mapDataBind;
    /**
     * Initialize data table state via previous state snapshot; Applicable only when persist table state is enabled
     */
    private initDataTableState;
    /**
     * After component initialize lifecycle event handler
     */
    ngAfterContentInit(): void;
    /**
     * Reset column sort and filter state
     */
    private clearColumnState;
    /**
     * Clear selected data row status
     */
    private clearRowSelectState;
    /**
     * Fetch data from data source
     * @param fetchMode Data fetch mode
     */
    fetchData(fetchMode?: DataFetchMode): void;
    /**
     * Initialize data source
     * @param source Data source stream
     */
    initDataSource(source: Observable<any>): void;
    /**
     * Component value write event handler; Form control support implementation
     */
    writeValue(value: any): void;
    /**
     * Register select change event handler; Form control support implementation
     * @param onSelectChange Select change event handler callback
     */
    registerOnChange(onSelectChange: (value: any) => void): void;
    /**
     * Register on touch event handler; Form control support implementation
     * @param fn Touch event callback handler
     */
    registerOnTouched(fn: any): void;
    /**
     * Get table width in pixels
     */
    readonly tableWidth: number;
    ngOnInit(): void;
    /**
     * Component destroy lifecycle event handler
     */
    ngOnDestroy(): void;
}
