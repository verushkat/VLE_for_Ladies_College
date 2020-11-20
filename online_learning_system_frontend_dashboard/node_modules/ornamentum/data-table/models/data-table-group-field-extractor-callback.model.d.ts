import { DataTableRow } from './data-table-row.model';
/**
 * Dynamic row span extractor callback model.
 * @param row Target data row.
 * @return Row span for current row.
 */
export declare type DataTableDynamicRowSpanExtractorCallback<T> = (row: DataTableRow<T>) => number;
