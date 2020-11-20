import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DataTableQueryResult } from '../../data-table/models/data-table-query-result.model';
import { DataTableDataBindCallback } from '../../data-table/models/data-table-data-bind-callback.model';
import { DataTableFilterValueExtractCallback } from '../../data-table/models/data-table-filter-value-extract-callback.model';
import { DataTableFilterOption } from '../../data-table/models/data-table-filter-option.model';
import { HttpRequestOptions } from '../../resource-utility/models/http-request-options.model';
import { ResourceOptions } from '../../resource-utility/models/resource-options.model';
import { RequestParamMapperService } from '../../resource-utility/services/request-param-mapper.service';
/**
 * Data table HTTP data fetch service.
 */
export declare class DataTableHttpDataFetchService<T> {
    private http;
    requestParamMapperService: RequestParamMapperService;
    constructor(http: HttpClient, requestParamMapperService: RequestParamMapperService);
    /**
     * Get data bind event handler.
     * @param options Request options or resource path.
     * @param mapper Response data mapper callback. map source stream format to data table expected stream or apply additional formatting.
     * @return Data table bind event handler.
     */
    onDataBind(options: string | ResourceOptions, mapper?: <Q>(response: Observable<Q>) => Observable<DataTableQueryResult<T>>): DataTableDataBindCallback<T>;
    /**
     * Get filter value extract event handler.
     * @param options Request options or resource path.
     * @param mapper Response data mapper callback. map source stream format to data table expected stream or apply additional formatting.
     * @return Data table filter options event handler.
     */
    onFilterValueExtract(options: string | HttpRequestOptions, mapper?: <Q>(response: Observable<Q>) => Observable<DataTableFilterOption[]>): DataTableFilterValueExtractCallback;
}
