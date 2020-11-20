/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
/**
 * Data table state manager service; Manage current data table state snapshot.
 */
var DataTableDataStateService = /** @class */ (function () {
    function DataTableDataStateService() {
        this.allRowSelected = false;
        this.selectedRows = [];
        this.dataRows = [];
        this.dataLoading = true;
        this.substituteRows = [];
        this.heardReload = false;
        this.currentSortPriority = 0;
        this.onDynamicRowSpanExtract = (/**
         * @return {?}
         */
        function () { return 1; });
    }
    Object.defineProperty(DataTableDataStateService.prototype, "showNoDataOverlay", {
        /**
         * Get show no data overlay status.
         * @return True if no data overlay should be shown.
         */
        get: /**
         * Get show no data overlay status.
         * @return {?} True if no data overlay should be shown.
         */
        function () {
            return !this.dataRows.length && !this.dataLoading;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Get data table row unique id.
     * @param append Target identifier.
     * @param index Target index.
     */
    /**
     * Get data table row unique id.
     * @param {?} append Target identifier.
     * @param {?} index Target index.
     * @return {?}
     */
    DataTableDataStateService.prototype.getUniqueId = /**
     * Get data table row unique id.
     * @param {?} append Target identifier.
     * @param {?} index Target index.
     * @return {?}
     */
    function (append, index) {
        return this.id + "-dt-" + append + "-" + index;
    };
    DataTableDataStateService.decorators = [
        { type: Injectable }
    ];
    return DataTableDataStateService;
}());
export { DataTableDataStateService };
if (false) {
    /** @type {?} */
    DataTableDataStateService.prototype.id;
    /** @type {?} */
    DataTableDataStateService.prototype.allRowSelected;
    /** @type {?} */
    DataTableDataStateService.prototype.selectedRow;
    /** @type {?} */
    DataTableDataStateService.prototype.selectedRows;
    /** @type {?} */
    DataTableDataStateService.prototype.dataRows;
    /** @type {?} */
    DataTableDataStateService.prototype.itemCount;
    /** @type {?} */
    DataTableDataStateService.prototype.tableWidth;
    /** @type {?} */
    DataTableDataStateService.prototype.dataLoading;
    /** @type {?} */
    DataTableDataStateService.prototype.substituteRows;
    /** @type {?} */
    DataTableDataStateService.prototype.heardReload;
    /** @type {?} */
    DataTableDataStateService.prototype.currentSortPriority;
    /** @type {?} */
    DataTableDataStateService.prototype.relativeParentElement;
    /** @type {?} */
    DataTableDataStateService.prototype.onFilterValueExtract;
    /** @type {?} */
    DataTableDataStateService.prototype.onDataBind;
    /** @type {?} */
    DataTableDataStateService.prototype.onDynamicRowSpanExtract;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS10YWJsZS1kYXRhLXN0YXRlLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9vcm5hbWVudHVtLyIsInNvdXJjZXMiOlsiZGF0YS10YWJsZS9zZXJ2aWNlcy9kYXRhLXRhYmxlLWRhdGEtc3RhdGUuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7OztBQVUzQztJQUFBO1FBR1MsbUJBQWMsR0FBRyxLQUFLLENBQUM7UUFFdkIsaUJBQVksR0FBVSxFQUFFLENBQUM7UUFDekIsYUFBUSxHQUF3QixFQUFFLENBQUM7UUFHbkMsZ0JBQVcsR0FBRyxJQUFJLENBQUM7UUFDbkIsbUJBQWMsR0FBVSxFQUFFLENBQUM7UUFDM0IsZ0JBQVcsR0FBRyxLQUFLLENBQUM7UUFDcEIsd0JBQW1CLEdBQUcsQ0FBQyxDQUFDO1FBS3hCLDRCQUF1Qjs7O1FBQWtELGNBQU0sT0FBQSxDQUFDLEVBQUQsQ0FBQyxFQUFDO0lBa0IxRixDQUFDO0lBWkMsc0JBQVcsd0RBQWlCO1FBSjVCOzs7V0FHRzs7Ozs7UUFDSDtZQUNFLE9BQU8sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUM7UUFDcEQsQ0FBQzs7O09BQUE7SUFFRDs7OztPQUlHOzs7Ozs7O0lBQ0ksK0NBQVc7Ozs7OztJQUFsQixVQUFtQixNQUFjLEVBQUUsS0FBYTtRQUM5QyxPQUFVLElBQUksQ0FBQyxFQUFFLFlBQU8sTUFBTSxTQUFJLEtBQU8sQ0FBQztJQUM1QyxDQUFDOztnQkFsQ0YsVUFBVTs7SUFtQ1gsZ0NBQUM7Q0FBQSxBQW5DRCxJQW1DQztTQWxDWSx5QkFBeUI7OztJQUNwQyx1Q0FBa0I7O0lBQ2xCLG1EQUE4Qjs7SUFDOUIsZ0RBQXdCOztJQUN4QixpREFBZ0M7O0lBQ2hDLDZDQUEwQzs7SUFDMUMsOENBQXlCOztJQUN6QiwrQ0FBMEI7O0lBQzFCLGdEQUEwQjs7SUFDMUIsbURBQWtDOztJQUNsQyxnREFBMkI7O0lBQzNCLHdEQUErQjs7SUFFL0IsMERBQTBDOztJQUMxQyx5REFBaUU7O0lBQ2pFLCtDQUFrRDs7SUFDbEQsNERBQXdGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBEYXRhVGFibGVSb3cgfSBmcm9tICcuLi9tb2RlbHMvZGF0YS10YWJsZS1yb3cubW9kZWwnO1xuaW1wb3J0IHsgRGF0YVRhYmxlRHluYW1pY1Jvd1NwYW5FeHRyYWN0b3JDYWxsYmFjayB9IGZyb20gJy4uL21vZGVscy9kYXRhLXRhYmxlLWdyb3VwLWZpZWxkLWV4dHJhY3Rvci1jYWxsYmFjay5tb2RlbCc7XG5pbXBvcnQgeyBEYXRhVGFibGVGaWx0ZXJWYWx1ZUV4dHJhY3RDYWxsYmFjayB9IGZyb20gJy4uL21vZGVscy9kYXRhLXRhYmxlLWZpbHRlci12YWx1ZS1leHRyYWN0LWNhbGxiYWNrLm1vZGVsJztcbmltcG9ydCB7IERhdGFUYWJsZURhdGFCaW5kQ2FsbGJhY2sgfSBmcm9tICcuLi9tb2RlbHMvZGF0YS10YWJsZS1kYXRhLWJpbmQtY2FsbGJhY2subW9kZWwnO1xuXG4vKipcbiAqIERhdGEgdGFibGUgc3RhdGUgbWFuYWdlciBzZXJ2aWNlOyBNYW5hZ2UgY3VycmVudCBkYXRhIHRhYmxlIHN0YXRlIHNuYXBzaG90LlxuICovXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRGF0YVRhYmxlRGF0YVN0YXRlU2VydmljZSB7XG4gIHB1YmxpYyBpZDogc3RyaW5nO1xuICBwdWJsaWMgYWxsUm93U2VsZWN0ZWQgPSBmYWxzZTtcbiAgcHVibGljIHNlbGVjdGVkUm93OiBhbnk7XG4gIHB1YmxpYyBzZWxlY3RlZFJvd3M6IGFueVtdID0gW107XG4gIHB1YmxpYyBkYXRhUm93czogRGF0YVRhYmxlUm93PGFueT5bXSA9IFtdO1xuICBwdWJsaWMgaXRlbUNvdW50OiBudW1iZXI7XG4gIHB1YmxpYyB0YWJsZVdpZHRoOiBudW1iZXI7XG4gIHB1YmxpYyBkYXRhTG9hZGluZyA9IHRydWU7XG4gIHB1YmxpYyBzdWJzdGl0dXRlUm93czogYW55W10gPSBbXTtcbiAgcHVibGljIGhlYXJkUmVsb2FkID0gZmFsc2U7XG4gIHB1YmxpYyBjdXJyZW50U29ydFByaW9yaXR5ID0gMDtcblxuICBwdWJsaWMgcmVsYXRpdmVQYXJlbnRFbGVtZW50OiBIVE1MRWxlbWVudDtcbiAgcHVibGljIG9uRmlsdGVyVmFsdWVFeHRyYWN0OiBEYXRhVGFibGVGaWx0ZXJWYWx1ZUV4dHJhY3RDYWxsYmFjaztcbiAgcHVibGljIG9uRGF0YUJpbmQ6IERhdGFUYWJsZURhdGFCaW5kQ2FsbGJhY2s8YW55PjtcbiAgcHVibGljIG9uRHluYW1pY1Jvd1NwYW5FeHRyYWN0OiBEYXRhVGFibGVEeW5hbWljUm93U3BhbkV4dHJhY3RvckNhbGxiYWNrPGFueT4gPSAoKSA9PiAxO1xuXG4gIC8qKlxuICAgKiBHZXQgc2hvdyBubyBkYXRhIG92ZXJsYXkgc3RhdHVzLlxuICAgKiBAcmV0dXJuIFRydWUgaWYgbm8gZGF0YSBvdmVybGF5IHNob3VsZCBiZSBzaG93bi5cbiAgICovXG4gIHB1YmxpYyBnZXQgc2hvd05vRGF0YU92ZXJsYXkoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuICF0aGlzLmRhdGFSb3dzLmxlbmd0aCAmJiAhdGhpcy5kYXRhTG9hZGluZztcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgZGF0YSB0YWJsZSByb3cgdW5pcXVlIGlkLlxuICAgKiBAcGFyYW0gYXBwZW5kIFRhcmdldCBpZGVudGlmaWVyLlxuICAgKiBAcGFyYW0gaW5kZXggVGFyZ2V0IGluZGV4LlxuICAgKi9cbiAgcHVibGljIGdldFVuaXF1ZUlkKGFwcGVuZDogc3RyaW5nLCBpbmRleDogbnVtYmVyKTogc3RyaW5nIHtcbiAgICByZXR1cm4gYCR7dGhpcy5pZH0tZHQtJHthcHBlbmR9LSR7aW5kZXh9YDtcbiAgfVxufVxuIl19