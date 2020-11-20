import { Observable } from 'rxjs';
import { DropdownQueryResult } from '../models/dropdown-query-result.model';
import { DropdownRequestParams } from '../models/dropdown-request-params.model';
/**
 * Dropdown resource service. Dropdown client side data query is handled via this service.
 */
export declare class DropdownResourceService<T> {
    private optionDataStream;
    private dataSourceSubscription;
    /**
     * Set source data source.
     * @param dataSource Data source observable.
     */
    setDataSource(dataSource: Observable<T[]>): void;
    /**
     * Query data.
     * @param params Dropdown request parameters.
     */
    query(params: DropdownRequestParams): Observable<DropdownQueryResult<T>>;
    /**
     * Dispose data source.
     */
    dispose(): void;
}
