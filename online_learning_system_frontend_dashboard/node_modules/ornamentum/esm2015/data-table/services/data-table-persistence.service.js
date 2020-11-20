/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { GlobalRefService } from '../../utility/utility.module';
import { DataTableConfigService } from './data-table-config.service';
/**
 * Data table persistence service; Manage data table state when persist state options is enabled.
 */
export class DataTablePersistenceService {
    /**
     * @param {?} globalRefService
     * @param {?} config
     */
    constructor(globalRefService, config) {
        this.globalRefService = globalRefService;
        this.config = config;
    }
    /**
     * Set table state storage mode.
     * @param {?} value Storage mode.
     * @return {?}
     */
    set storageMode(value) {
        if (this.globalRefService.isBrowser) {
            if (value === 'local') {
                this.storage = this.globalRefService.window.localStorage;
            }
            else {
                this.storage = this.globalRefService.window.sessionStorage;
            }
        }
    }
    /**
     * Set table state by identifier.
     * @param {?} id Table identifier.
     * @param {?} value Data table request parameters object.
     * @param {?=} version Data version.
     * @return {?}
     */
    setState(id, value, version = 'v1') {
        if (this.globalRefService.isBrowser) {
            /** @type {?} */
            const data = {
                ver: version,
                val: value
            };
            this.storage.setItem(`${this.config.stateKeyPrefix}${id}`, JSON.stringify(data));
        }
    }
    /**
     * Get table state by identifier.
     * @param {?} id Table identifier.
     * @param {?=} version Data version.
     * @return {?} Data table request params object.
     */
    getState(id, version = 'v1') {
        if (this.globalRefService.isBrowser) {
            /** @type {?} */
            const data = JSON.parse(this.storage.getItem(`${this.config.stateKeyPrefix}${id}`));
            if (data && data.ver === version) {
                return data.val;
            }
        }
        return null;
    }
}
DataTablePersistenceService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
DataTablePersistenceService.ctorParameters = () => [
    { type: GlobalRefService },
    { type: DataTableConfigService }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    DataTablePersistenceService.prototype.storage;
    /**
     * @type {?}
     * @private
     */
    DataTablePersistenceService.prototype.globalRefService;
    /**
     * @type {?}
     * @private
     */
    DataTablePersistenceService.prototype.config;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS10YWJsZS1wZXJzaXN0ZW5jZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vb3JuYW1lbnR1bS8iLCJzb3VyY2VzIjpbImRhdGEtdGFibGUvc2VydmljZXMvZGF0YS10YWJsZS1wZXJzaXN0ZW5jZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBTTNDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ2hFLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDZCQUE2QixDQUFDOzs7O0FBTXJFLE1BQU0sT0FBTywyQkFBMkI7Ozs7O0lBR3RDLFlBQW9CLGdCQUFrQyxFQUFVLE1BQThCO1FBQTFFLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUF3QjtJQUFHLENBQUM7Ozs7OztJQU1sRyxJQUFXLFdBQVcsQ0FBQyxLQUEyQjtRQUNoRCxJQUFJLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLEVBQUU7WUFDbkMsSUFBSSxLQUFLLEtBQUssT0FBTyxFQUFFO2dCQUNyQixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDO2FBQzFEO2lCQUFNO2dCQUNMLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUM7YUFDNUQ7U0FDRjtJQUNILENBQUM7Ozs7Ozs7O0lBUU0sUUFBUSxDQUFDLEVBQVUsRUFBRSxLQUE2QixFQUFFLFVBQWtCLElBQUk7UUFDL0UsSUFBSSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxFQUFFOztrQkFDN0IsSUFBSSxHQUFHO2dCQUNYLEdBQUcsRUFBRSxPQUFPO2dCQUNaLEdBQUcsRUFBRSxLQUFLO2FBQ1g7WUFDRCxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsY0FBYyxHQUFHLEVBQUUsRUFBRSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztTQUNsRjtJQUNILENBQUM7Ozs7Ozs7SUFRTSxRQUFRLENBQUMsRUFBVSxFQUFFLFVBQWtCLElBQUk7UUFDaEQsSUFBSSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxFQUFFOztrQkFDN0IsSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLGNBQWMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1lBRW5GLElBQUksSUFBSSxJQUFJLElBQUksQ0FBQyxHQUFHLEtBQUssT0FBTyxFQUFFO2dCQUNoQyxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUM7YUFDakI7U0FDRjtRQUVELE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQzs7O1lBcERGLFVBQVU7Ozs7WUFORixnQkFBZ0I7WUFDaEIsc0JBQXNCOzs7Ozs7O0lBTzdCLDhDQUF5Qjs7Ozs7SUFFYix1REFBMEM7Ozs7O0lBQUUsNkNBQXNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBEYXRhVGFibGVSZXF1ZXN0UGFyYW1zIH0gZnJvbSAnLi4vbW9kZWxzL2RhdGEtdGFibGUtcmVxdWVzdC1wYXJhbXMubW9kZWwnO1xuXG5pbXBvcnQgeyBEYXRhVGFibGVTdG9yYWdlTW9kZSB9IGZyb20gJy4uL21vZGVscy9kYXRhLXRhYmxlLXN0b3JhZ2UtbW9kZS5tb2RlbCc7XG5cbmltcG9ydCB7IEdsb2JhbFJlZlNlcnZpY2UgfSBmcm9tICcuLi8uLi91dGlsaXR5L3V0aWxpdHkubW9kdWxlJztcbmltcG9ydCB7IERhdGFUYWJsZUNvbmZpZ1NlcnZpY2UgfSBmcm9tICcuL2RhdGEtdGFibGUtY29uZmlnLnNlcnZpY2UnO1xuXG4vKipcbiAqIERhdGEgdGFibGUgcGVyc2lzdGVuY2Ugc2VydmljZTsgTWFuYWdlIGRhdGEgdGFibGUgc3RhdGUgd2hlbiBwZXJzaXN0IHN0YXRlIG9wdGlvbnMgaXMgZW5hYmxlZC5cbiAqL1xuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIERhdGFUYWJsZVBlcnNpc3RlbmNlU2VydmljZSB7XG4gIHByaXZhdGUgc3RvcmFnZTogU3RvcmFnZTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGdsb2JhbFJlZlNlcnZpY2U6IEdsb2JhbFJlZlNlcnZpY2UsIHByaXZhdGUgY29uZmlnOiBEYXRhVGFibGVDb25maWdTZXJ2aWNlKSB7fVxuXG4gIC8qKlxuICAgKiBTZXQgdGFibGUgc3RhdGUgc3RvcmFnZSBtb2RlLlxuICAgKiBAcGFyYW0gdmFsdWUgU3RvcmFnZSBtb2RlLlxuICAgKi9cbiAgcHVibGljIHNldCBzdG9yYWdlTW9kZSh2YWx1ZTogRGF0YVRhYmxlU3RvcmFnZU1vZGUpIHtcbiAgICBpZiAodGhpcy5nbG9iYWxSZWZTZXJ2aWNlLmlzQnJvd3Nlcikge1xuICAgICAgaWYgKHZhbHVlID09PSAnbG9jYWwnKSB7XG4gICAgICAgIHRoaXMuc3RvcmFnZSA9IHRoaXMuZ2xvYmFsUmVmU2VydmljZS53aW5kb3cubG9jYWxTdG9yYWdlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5zdG9yYWdlID0gdGhpcy5nbG9iYWxSZWZTZXJ2aWNlLndpbmRvdy5zZXNzaW9uU3RvcmFnZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogU2V0IHRhYmxlIHN0YXRlIGJ5IGlkZW50aWZpZXIuXG4gICAqIEBwYXJhbSBpZCBUYWJsZSBpZGVudGlmaWVyLlxuICAgKiBAcGFyYW0gdmVyc2lvbiBEYXRhIHZlcnNpb24uXG4gICAqIEBwYXJhbSB2YWx1ZSBEYXRhIHRhYmxlIHJlcXVlc3QgcGFyYW1ldGVycyBvYmplY3QuXG4gICAqL1xuICBwdWJsaWMgc2V0U3RhdGUoaWQ6IHN0cmluZywgdmFsdWU6IERhdGFUYWJsZVJlcXVlc3RQYXJhbXMsIHZlcnNpb246IHN0cmluZyA9ICd2MScpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5nbG9iYWxSZWZTZXJ2aWNlLmlzQnJvd3Nlcikge1xuICAgICAgY29uc3QgZGF0YSA9IHtcbiAgICAgICAgdmVyOiB2ZXJzaW9uLFxuICAgICAgICB2YWw6IHZhbHVlXG4gICAgICB9O1xuICAgICAgdGhpcy5zdG9yYWdlLnNldEl0ZW0oYCR7dGhpcy5jb25maWcuc3RhdGVLZXlQcmVmaXh9JHtpZH1gLCBKU09OLnN0cmluZ2lmeShkYXRhKSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0YWJsZSBzdGF0ZSBieSBpZGVudGlmaWVyLlxuICAgKiBAcGFyYW0gaWQgVGFibGUgaWRlbnRpZmllci5cbiAgICogQHBhcmFtIHZlcnNpb24gRGF0YSB2ZXJzaW9uLlxuICAgKiBAcmV0dXJuIERhdGEgdGFibGUgcmVxdWVzdCBwYXJhbXMgb2JqZWN0LlxuICAgKi9cbiAgcHVibGljIGdldFN0YXRlKGlkOiBzdHJpbmcsIHZlcnNpb246IHN0cmluZyA9ICd2MScpOiBEYXRhVGFibGVSZXF1ZXN0UGFyYW1zIHtcbiAgICBpZiAodGhpcy5nbG9iYWxSZWZTZXJ2aWNlLmlzQnJvd3Nlcikge1xuICAgICAgY29uc3QgZGF0YSA9IEpTT04ucGFyc2UodGhpcy5zdG9yYWdlLmdldEl0ZW0oYCR7dGhpcy5jb25maWcuc3RhdGVLZXlQcmVmaXh9JHtpZH1gKSk7XG5cbiAgICAgIGlmIChkYXRhICYmIGRhdGEudmVyID09PSB2ZXJzaW9uKSB7XG4gICAgICAgIHJldHVybiBkYXRhLnZhbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxufVxuIl19