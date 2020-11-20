import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DropdownDataBindCallback } from '../../dropdown/models/dropdown-data-bind-callback.model';
import { DropdownQueryResult } from '../../dropdown/models/dropdown-query-result.model';
import { RequestParamMapperService } from '../../resource-utility/services/request-param-mapper.service';
import { ResourceOptions } from '../../resource-utility/models/resource-options.model';
/**
 * Dropdown HTTP data fetch service.
 */
export declare class DropdownHttpDataFetchService<T> {
    private http;
    requestParamMapperService: RequestParamMapperService;
    constructor(http: HttpClient, requestParamMapperService: RequestParamMapperService);
    /**
     * Get data bind event handler.
     * @param options Request options or resource path.
     * @param mapper Response data mapper callback. map source stream format to data table expected stream or apply additional formatting.
     * @return Dropdown bind event handler.
     */
    onDataBind(options: string | ResourceOptions, mapper?: <Q>(response: Observable<Q>) => Observable<DropdownQueryResult<T>>): DropdownDataBindCallback<T>;
}
