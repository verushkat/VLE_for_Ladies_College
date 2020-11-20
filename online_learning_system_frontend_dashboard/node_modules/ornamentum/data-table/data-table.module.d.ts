import { ModuleWithProviders } from '@angular/core';
import { DataTableConfig } from './models/data-table-config.model';
/**
 * Module representing data table component.
 */
export declare class DataTableModule {
    /**
     * Set module root configuration overrides.
     * @param dataTableConfig Data table configuration object.
     * @return Module with custom providers.
     */
    static forRoot(dataTableConfig?: DataTableConfig): ModuleWithProviders;
}
export { DataTableCellBindEventArgs } from './models/data-table-cell-bind-event-args.model';
export { DataTableQueryResult } from './models/data-table-query-result.model';
export { DataTableQueryField } from './models/data-table-query-field.model';
export { DataTableFilterOption } from './models/data-table-filter-option.model';
export { DataTableCellClickEventArgs } from './models/data-table-cell-click-event-args.model';
export { DataTableHeaderClickEventArgs } from './models/data-table-header-click-event-args.model';
export { DataTableDoubleClickEventArgs } from './models/data-table-double-click-event-args.model';
export { DataTableRowClickEventArgs } from './models/data-table-row-click-event-args.model';
export { DataTableScrollPoint } from './models/data-table-scroll-point.model';
export { DataTableRow } from './models/data-table-row.model';
export { DataTableRequestParams } from './models/data-table-request-params.model';
export { DataTableTranslations } from './models/data-table-translations.model';
export { DataTableDynamicRowSpanExtractorCallback } from './models/data-table-group-field-extractor-callback.model';
export { DataTableFilterValueExtractCallback } from './models/data-table-filter-value-extract-callback.model';
export { DataTableFilterFieldMapperCallback } from './models/data-table-filter-field-mapper-callback.model';
export { DataTableFilterExpressionCallback } from './models/data-table-filter-expression-callback.model';
export { DataTableCellColorRenderCallback } from './models/data-table-cell-color-render-callback.model';
export { DataTableSelectMode } from './models/data-table-select-mode.model';
export { DataTableDataBindCallback } from './models/data-table-data-bind-callback.model';
export { DataTableSortOrder } from './models/data-table-sort-order.model';
export { DataTableStorageMode } from './models/data-table-storage-mode.model';
export { DataFetchMode } from './models/data-fetch-mode.enum';
export { DataTableComponent } from './components/data-table/data-table.component';
export { DataTableColumnComponent } from './components/data-table-column/data-table-column.component';
