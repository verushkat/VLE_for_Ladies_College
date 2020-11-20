import { DataTableRow } from '../models/data-table-row.model';
import { DataTableDynamicRowSpanExtractorCallback } from '../models/data-table-group-field-extractor-callback.model';
import { DataTableFilterValueExtractCallback } from '../models/data-table-filter-value-extract-callback.model';
import { DataTableDataBindCallback } from '../models/data-table-data-bind-callback.model';
/**
 * Data table state manager service; Manage current data table state snapshot.
 */
export declare class DataTableDataStateService {
    id: string;
    allRowSelected: boolean;
    selectedRow: any;
    selectedRows: any[];
    dataRows: DataTableRow<any>[];
    itemCount: number;
    tableWidth: number;
    dataLoading: boolean;
    substituteRows: any[];
    heardReload: boolean;
    currentSortPriority: number;
    relativeParentElement: HTMLElement;
    onFilterValueExtract: DataTableFilterValueExtractCallback;
    onDataBind: DataTableDataBindCallback<any>;
    onDynamicRowSpanExtract: DataTableDynamicRowSpanExtractorCallback<any>;
    /**
     * Get show no data overlay status.
     * @return True if no data overlay should be shown.
     */
    readonly showNoDataOverlay: boolean;
    /**
     * Get data table row unique id.
     * @param append Target identifier.
     * @param index Target index.
     */
    getUniqueId(append: string, index: number): string;
}
