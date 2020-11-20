import { HttpClient } from '@angular/common/http';
import { DataTableHttpDataFetchService } from './data-table-http-data-fetch.service';
import { RequestParamMapperService } from '../../resource-utility/services/request-param-mapper.service';
/**
 * Data table HTTP data fetch service factory.
 */
export declare class DataTableHttpResourceFactoryService {
    private http;
    requestParamMapperService: RequestParamMapperService;
    constructor(http: HttpClient, requestParamMapperService: RequestParamMapperService);
    /**
     * Get new data table HTTP data fetch service instance.
     */
    getResourceProvider<T>(): DataTableHttpDataFetchService<T>;
}
