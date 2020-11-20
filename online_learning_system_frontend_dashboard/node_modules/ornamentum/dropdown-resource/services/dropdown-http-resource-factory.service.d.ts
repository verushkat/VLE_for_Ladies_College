import { HttpClient } from '@angular/common/http';
import { DropdownHttpDataFetchService } from './dropdown-http-data-fetch.service';
import { RequestParamMapperService } from '../../resource-utility/services/request-param-mapper.service';
/**
 * Dropdown HTTP data fetch service factory.
 */
export declare class DropdownHttpResourceFactoryService {
    private http;
    requestParamMapperService: RequestParamMapperService;
    constructor(http: HttpClient, requestParamMapperService: RequestParamMapperService);
    /**
     * Get new dropdown HTTP data fetch service instance.
     */
    getResourceProvider<T>(): DropdownHttpDataFetchService<T>;
}
