import { HttpParams } from '@angular/common/http';
import { HttpRequestOptions } from '../models/http-request-options.model';
import { RequestOptions } from '../models/request-options.model';
import { ResourceOptions } from '../models/resource-options.model';
/**
 * Request parameter mapper service.
 */
export declare class RequestParamMapperService {
    /**
     * Map HTTP query parameters by request options.
     * @param requestOptions Request options object reference.
     */
    mapQueryParams(requestOptions: HttpRequestOptions): HttpParams;
    /**
     * Map request options by http request data.
     * @param options Request options object reference.
     */
    mapRequestOptions(options: string | ResourceOptions): RequestOptions;
}
