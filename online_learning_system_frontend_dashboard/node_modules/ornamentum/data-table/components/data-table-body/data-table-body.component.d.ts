import { TemplateRef } from '@angular/core';
import { DataTableRow } from '../../models/data-table-row.model';
import { DataTableColumnComponent } from '../data-table-column/data-table-column.component';
import { DataTableConfigService } from '../../services/data-table-config.service';
import { DataTableDataStateService } from '../../services/data-table-data-state.service';
import { DataTableEventStateService } from '../../services/data-table-event.service';
/**
 * Data table body component. Data table body table definition rendering is handled by this component.
 */
export declare class DataTableBodyComponent {
    config: DataTableConfigService;
    dataStateService: DataTableDataStateService;
    private eventStateService;
    columns: DataTableColumnComponent[];
    rowExpandTemplate: TemplateRef<any>;
    rowExpandLoadingSpinnerTemplate: TemplateRef<any>;
    constructor(config: DataTableConfigService, dataStateService: DataTableDataStateService, eventStateService: DataTableEventStateService);
    /**
     * Unique data row tracking callback.
     * @param index Current index.
     * @param dataRow Data row object reference.
     */
    dataRowTrackBy(index: number, dataRow: DataTableRow<any>): number;
    /**
     * Odd row status; True if row index is a odd number.
     * @param row Data row object.
     * @return True if odd row.
     */
    isOddRow(row: DataTableRow<any>): boolean;
    /**
     * Even row status; True if row index is a even number.
     * @param row Data row object.
     * @return True if even row.
     */
    isEvenRow(row: DataTableRow<any>): boolean;
    /**
     * Odd substitute row status by row index; True if row index is an odd substitute row.
     * @param index Row index.
     * @return True if odd substitute row.
     */
    isOddSubstituteRow(index: number): boolean;
    /**
     * Even substitute row status by row index; True if row index is an even substitute row.
     * @param index Row index.
     * @return True if even substitute row.
     */
    isEvenSubstituteRow(index: number): boolean;
    /**
     * On row expand event handler.
     * @param $event Click event argument reference.
     * @param dataRow Data row object.
     */
    onRowExpand($event: Event, dataRow: DataTableRow<any>): void;
    /**
     * On row initialize event handler.
     * @param dataRow Data table row.
     */
    onRowInit(dataRow: any): void;
    /**
     * On cell initialize event handler.
     * @param column Data table column component reference.
     * @param row Data table row object.
     */
    onCellInit(column: DataTableColumnComponent, row: DataTableRow<any>): void;
    /**
     * Cell clicked event handler.
     * @param column Column data table component reference.
     * @param row Data table row reference.
     * @param event Mouse click event argument reference.
     */
    cellClicked(column: DataTableColumnComponent, row: DataTableRow<any>, event: MouseEvent): void;
    /**
     * Get row span collection by data row.
     * @param row Data row reference.
     * @return Dummy row span collection.
     */
    getRowSpanCollection(row: DataTableRow<any>): any[];
    /**
     * Get total column count used for substitute row generation.
     * @return Number of columns.
     */
    readonly totalColumnCount: number;
    /**
     * On row select click event handler.
     * @param row Data row reference.
     * @param event Row click event.
     */
    onRowSelectClick(row: DataTableRow<any>, event: Event): void;
    /**
     * On row selection change event handler.
     * @param row Data row reference.
     */
    onRowSelectChange(row: DataTableRow<any>): void;
    /**
     * Row clicked event handler.
     * @param row Data row object.
     * @param event Mouse click event argument object.
     */
    rowClicked(row: DataTableRow<any>, event: MouseEvent): void;
    /**
     * Row double clicked event handler.
     * @param row Data row object.
     * @param event Event Mouse click event argument object.
     */
    rowDoubleClicked(row: DataTableRow<any>, event: MouseEvent): void;
    /**
     * Get substitute row availability status.
     * @return True if substitute rows are available.
     */
    readonly hasSubstituteRows: boolean;
    /**
     * Get cell value by data field.
     * @param row Data row reference.
     * @param column Data table column component reference.
     */
    getFieldValue(row: DataTableRow<any>, column: DataTableColumnComponent): any;
    /**
     * Get row select checkbox display status.
     * @return True if row selector checkbox should be displayed.
     */
    readonly showRowSelectCheckbox: boolean;
    /**
     * Get row expend view loading status. Used to display loading spinner on expand column while data fetching.
     * @param row Data row object reference.
     */
    isRowExpanderLoading(row: DataTableRow<any>): boolean;
}
