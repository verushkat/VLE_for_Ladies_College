import { Observable } from 'rxjs';
import { DataTableRequestParams } from '../models/data-table-request-params.model';
import { DataTableQueryResult } from '../models/data-table-query-result.model';
import { DataTableFilterOption } from '../models/data-table-filter-option.model';
import { DataTableColumnComponent } from '../components/data-table-column/data-table-column.component';
/**
 * Data table resource service; Manage data table client side data querying.
 */
export declare class DataTableResourceService<T> {
    private itemDataStream;
    private dataSourceSubscription;
    /**
     * Set data source stream to query.
     * @param dataSource Data source stream.
     */
    setDataSource(dataSource: Observable<T[]>): void;
    /**
     * Query items by data table request params.
     * @param params Data table parameters object.
     * @return Query result stream.
     */
    query(params: DataTableRequestParams): Observable<DataTableQueryResult<T>>;
    /**
     * Extract data table filter options.
     * @param filterColumn Data table column component.
     * @return Filter options collection stream.
     */
    extractFilterOptions(filterColumn: DataTableColumnComponent): Observable<DataTableFilterOption[]>;
    /**
     * Dispose client data source streams.
     */
    dispose(): void;
}
