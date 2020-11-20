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
var DataTablePersistenceService = /** @class */ (function () {
    function DataTablePersistenceService(globalRefService, config) {
        this.globalRefService = globalRefService;
        this.config = config;
    }
    Object.defineProperty(DataTablePersistenceService.prototype, "storageMode", {
        /**
         * Set table state storage mode.
         * @param value Storage mode.
         */
        set: /**
         * Set table state storage mode.
         * @param {?} value Storage mode.
         * @return {?}
         */
        function (value) {
            if (this.globalRefService.isBrowser) {
                if (value === 'local') {
                    this.storage = this.globalRefService.window.localStorage;
                }
                else {
                    this.storage = this.globalRefService.window.sessionStorage;
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Set table state by identifier.
     * @param id Table identifier.
     * @param version Data version.
     * @param value Data table request parameters object.
     */
    /**
     * Set table state by identifier.
     * @param {?} id Table identifier.
     * @param {?} value Data table request parameters object.
     * @param {?=} version Data version.
     * @return {?}
     */
    DataTablePersistenceService.prototype.setState = /**
     * Set table state by identifier.
     * @param {?} id Table identifier.
     * @param {?} value Data table request parameters object.
     * @param {?=} version Data version.
     * @return {?}
     */
    function (id, value, version) {
        if (version === void 0) { version = 'v1'; }
        if (this.globalRefService.isBrowser) {
            /** @type {?} */
            var data = {
                ver: version,
                val: value
            };
            this.storage.setItem("" + this.config.stateKeyPrefix + id, JSON.stringify(data));
        }
    };
    /**
     * Get table state by identifier.
     * @param id Table identifier.
     * @param version Data version.
     * @return Data table request params object.
     */
    /**
     * Get table state by identifier.
     * @param {?} id Table identifier.
     * @param {?=} version Data version.
     * @return {?} Data table request params object.
     */
    DataTablePersistenceService.prototype.getState = /**
     * Get table state by identifier.
     * @param {?} id Table identifier.
     * @param {?=} version Data version.
     * @return {?} Data table request params object.
     */
    function (id, version) {
        if (version === void 0) { version = 'v1'; }
        if (this.globalRefService.isBrowser) {
            /** @type {?} */
            var data = JSON.parse(this.storage.getItem("" + this.config.stateKeyPrefix + id));
            if (data && data.ver === version) {
                return data.val;
            }
        }
        return null;
    };
    DataTablePersistenceService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    DataTablePersistenceService.ctorParameters = function () { return [
        { type: GlobalRefService },
        { type: DataTableConfigService }
    ]; };
    return DataTablePersistenceService;
}());
export { DataTablePersistenceService };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS10YWJsZS1wZXJzaXN0ZW5jZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vb3JuYW1lbnR1bS8iLCJzb3VyY2VzIjpbImRhdGEtdGFibGUvc2VydmljZXMvZGF0YS10YWJsZS1wZXJzaXN0ZW5jZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBTTNDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ2hFLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDZCQUE2QixDQUFDOzs7O0FBS3JFO0lBSUUscUNBQW9CLGdCQUFrQyxFQUFVLE1BQThCO1FBQTFFLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUF3QjtJQUFHLENBQUM7SUFNbEcsc0JBQVcsb0RBQVc7UUFKdEI7OztXQUdHOzs7Ozs7UUFDSCxVQUF1QixLQUEyQjtZQUNoRCxJQUFJLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLEVBQUU7Z0JBQ25DLElBQUksS0FBSyxLQUFLLE9BQU8sRUFBRTtvQkFDckIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQztpQkFDMUQ7cUJBQU07b0JBQ0wsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQztpQkFDNUQ7YUFDRjtRQUNILENBQUM7OztPQUFBO0lBRUQ7Ozs7O09BS0c7Ozs7Ozs7O0lBQ0ksOENBQVE7Ozs7Ozs7SUFBZixVQUFnQixFQUFVLEVBQUUsS0FBNkIsRUFBRSxPQUFzQjtRQUF0Qix3QkFBQSxFQUFBLGNBQXNCO1FBQy9FLElBQUksSUFBSSxDQUFDLGdCQUFnQixDQUFDLFNBQVMsRUFBRTs7Z0JBQzdCLElBQUksR0FBRztnQkFDWCxHQUFHLEVBQUUsT0FBTztnQkFDWixHQUFHLEVBQUUsS0FBSzthQUNYO1lBQ0QsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsS0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLGNBQWMsR0FBRyxFQUFJLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1NBQ2xGO0lBQ0gsQ0FBQztJQUVEOzs7OztPQUtHOzs7Ozs7O0lBQ0ksOENBQVE7Ozs7OztJQUFmLFVBQWdCLEVBQVUsRUFBRSxPQUFzQjtRQUF0Qix3QkFBQSxFQUFBLGNBQXNCO1FBQ2hELElBQUksSUFBSSxDQUFDLGdCQUFnQixDQUFDLFNBQVMsRUFBRTs7Z0JBQzdCLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEtBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxjQUFjLEdBQUcsRUFBSSxDQUFDLENBQUM7WUFFbkYsSUFBSSxJQUFJLElBQUksSUFBSSxDQUFDLEdBQUcsS0FBSyxPQUFPLEVBQUU7Z0JBQ2hDLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQzthQUNqQjtTQUNGO1FBRUQsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDOztnQkFwREYsVUFBVTs7OztnQkFORixnQkFBZ0I7Z0JBQ2hCLHNCQUFzQjs7SUEwRC9CLGtDQUFDO0NBQUEsQUFyREQsSUFxREM7U0FwRFksMkJBQTJCOzs7Ozs7SUFDdEMsOENBQXlCOzs7OztJQUViLHVEQUEwQzs7Ozs7SUFBRSw2Q0FBc0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IERhdGFUYWJsZVJlcXVlc3RQYXJhbXMgfSBmcm9tICcuLi9tb2RlbHMvZGF0YS10YWJsZS1yZXF1ZXN0LXBhcmFtcy5tb2RlbCc7XG5cbmltcG9ydCB7IERhdGFUYWJsZVN0b3JhZ2VNb2RlIH0gZnJvbSAnLi4vbW9kZWxzL2RhdGEtdGFibGUtc3RvcmFnZS1tb2RlLm1vZGVsJztcblxuaW1wb3J0IHsgR2xvYmFsUmVmU2VydmljZSB9IGZyb20gJy4uLy4uL3V0aWxpdHkvdXRpbGl0eS5tb2R1bGUnO1xuaW1wb3J0IHsgRGF0YVRhYmxlQ29uZmlnU2VydmljZSB9IGZyb20gJy4vZGF0YS10YWJsZS1jb25maWcuc2VydmljZSc7XG5cbi8qKlxuICogRGF0YSB0YWJsZSBwZXJzaXN0ZW5jZSBzZXJ2aWNlOyBNYW5hZ2UgZGF0YSB0YWJsZSBzdGF0ZSB3aGVuIHBlcnNpc3Qgc3RhdGUgb3B0aW9ucyBpcyBlbmFibGVkLlxuICovXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRGF0YVRhYmxlUGVyc2lzdGVuY2VTZXJ2aWNlIHtcbiAgcHJpdmF0ZSBzdG9yYWdlOiBTdG9yYWdlO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZ2xvYmFsUmVmU2VydmljZTogR2xvYmFsUmVmU2VydmljZSwgcHJpdmF0ZSBjb25maWc6IERhdGFUYWJsZUNvbmZpZ1NlcnZpY2UpIHt9XG5cbiAgLyoqXG4gICAqIFNldCB0YWJsZSBzdGF0ZSBzdG9yYWdlIG1vZGUuXG4gICAqIEBwYXJhbSB2YWx1ZSBTdG9yYWdlIG1vZGUuXG4gICAqL1xuICBwdWJsaWMgc2V0IHN0b3JhZ2VNb2RlKHZhbHVlOiBEYXRhVGFibGVTdG9yYWdlTW9kZSkge1xuICAgIGlmICh0aGlzLmdsb2JhbFJlZlNlcnZpY2UuaXNCcm93c2VyKSB7XG4gICAgICBpZiAodmFsdWUgPT09ICdsb2NhbCcpIHtcbiAgICAgICAgdGhpcy5zdG9yYWdlID0gdGhpcy5nbG9iYWxSZWZTZXJ2aWNlLndpbmRvdy5sb2NhbFN0b3JhZ2U7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnN0b3JhZ2UgPSB0aGlzLmdsb2JhbFJlZlNlcnZpY2Uud2luZG93LnNlc3Npb25TdG9yYWdlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgdGFibGUgc3RhdGUgYnkgaWRlbnRpZmllci5cbiAgICogQHBhcmFtIGlkIFRhYmxlIGlkZW50aWZpZXIuXG4gICAqIEBwYXJhbSB2ZXJzaW9uIERhdGEgdmVyc2lvbi5cbiAgICogQHBhcmFtIHZhbHVlIERhdGEgdGFibGUgcmVxdWVzdCBwYXJhbWV0ZXJzIG9iamVjdC5cbiAgICovXG4gIHB1YmxpYyBzZXRTdGF0ZShpZDogc3RyaW5nLCB2YWx1ZTogRGF0YVRhYmxlUmVxdWVzdFBhcmFtcywgdmVyc2lvbjogc3RyaW5nID0gJ3YxJyk6IHZvaWQge1xuICAgIGlmICh0aGlzLmdsb2JhbFJlZlNlcnZpY2UuaXNCcm93c2VyKSB7XG4gICAgICBjb25zdCBkYXRhID0ge1xuICAgICAgICB2ZXI6IHZlcnNpb24sXG4gICAgICAgIHZhbDogdmFsdWVcbiAgICAgIH07XG4gICAgICB0aGlzLnN0b3JhZ2Uuc2V0SXRlbShgJHt0aGlzLmNvbmZpZy5zdGF0ZUtleVByZWZpeH0ke2lkfWAsIEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRhYmxlIHN0YXRlIGJ5IGlkZW50aWZpZXIuXG4gICAqIEBwYXJhbSBpZCBUYWJsZSBpZGVudGlmaWVyLlxuICAgKiBAcGFyYW0gdmVyc2lvbiBEYXRhIHZlcnNpb24uXG4gICAqIEByZXR1cm4gRGF0YSB0YWJsZSByZXF1ZXN0IHBhcmFtcyBvYmplY3QuXG4gICAqL1xuICBwdWJsaWMgZ2V0U3RhdGUoaWQ6IHN0cmluZywgdmVyc2lvbjogc3RyaW5nID0gJ3YxJyk6IERhdGFUYWJsZVJlcXVlc3RQYXJhbXMge1xuICAgIGlmICh0aGlzLmdsb2JhbFJlZlNlcnZpY2UuaXNCcm93c2VyKSB7XG4gICAgICBjb25zdCBkYXRhID0gSlNPTi5wYXJzZSh0aGlzLnN0b3JhZ2UuZ2V0SXRlbShgJHt0aGlzLmNvbmZpZy5zdGF0ZUtleVByZWZpeH0ke2lkfWApKTtcblxuICAgICAgaWYgKGRhdGEgJiYgZGF0YS52ZXIgPT09IHZlcnNpb24pIHtcbiAgICAgICAgcmV0dXJuIGRhdGEudmFsO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBudWxsO1xuICB9XG59XG4iXX0=