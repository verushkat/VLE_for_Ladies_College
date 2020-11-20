import { ModuleWithProviders } from '@angular/core';
import { RequestParamMapperService } from './services/request-param-mapper.service';
/**
 * Resource utility module.
 */
export declare class ResourceUtilityModule {
    /**
     * Set module root configuration overrides.
     * @return Module with custom providers.
     */
    static forRoot(): ModuleWithProviders;
}
export { ResourceOptions } from './models/resource-options.model';
export { RequestOptions } from './models/request-options.model';
export { HttpRequestOptions } from './models/http-request-options.model';
export { RequestParamMapperService };
