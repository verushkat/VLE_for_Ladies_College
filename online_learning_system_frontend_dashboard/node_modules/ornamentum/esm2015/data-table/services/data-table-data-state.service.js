/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
/**
 * Data table state manager service; Manage current data table state snapshot.
 */
export class DataTableDataStateService {
    constructor() {
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
        () => 1);
    }
    /**
     * Get show no data overlay status.
     * @return {?} True if no data overlay should be shown.
     */
    get showNoDataOverlay() {
        return !this.dataRows.length && !this.dataLoading;
    }
    /**
     * Get data table row unique id.
     * @param {?} append Target identifier.
     * @param {?} index Target index.
     * @return {?}
     */
    getUniqueId(append, index) {
        return `${this.id}-dt-${append}-${index}`;
    }
}
DataTableDataStateService.decorators = [
    { type: Injectable }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS10YWJsZS1kYXRhLXN0YXRlLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9vcm5hbWVudHVtLyIsInNvdXJjZXMiOlsiZGF0YS10YWJsZS9zZXJ2aWNlcy9kYXRhLXRhYmxlLWRhdGEtc3RhdGUuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7OztBQVczQyxNQUFNLE9BQU8seUJBQXlCO0lBRHRDO1FBR1MsbUJBQWMsR0FBRyxLQUFLLENBQUM7UUFFdkIsaUJBQVksR0FBVSxFQUFFLENBQUM7UUFDekIsYUFBUSxHQUF3QixFQUFFLENBQUM7UUFHbkMsZ0JBQVcsR0FBRyxJQUFJLENBQUM7UUFDbkIsbUJBQWMsR0FBVSxFQUFFLENBQUM7UUFDM0IsZ0JBQVcsR0FBRyxLQUFLLENBQUM7UUFDcEIsd0JBQW1CLEdBQUcsQ0FBQyxDQUFDO1FBS3hCLDRCQUF1Qjs7O1FBQWtELEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBQztJQWtCMUYsQ0FBQzs7Ozs7SUFaQyxJQUFXLGlCQUFpQjtRQUMxQixPQUFPLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDO0lBQ3BELENBQUM7Ozs7Ozs7SUFPTSxXQUFXLENBQUMsTUFBYyxFQUFFLEtBQWE7UUFDOUMsT0FBTyxHQUFHLElBQUksQ0FBQyxFQUFFLE9BQU8sTUFBTSxJQUFJLEtBQUssRUFBRSxDQUFDO0lBQzVDLENBQUM7OztZQWxDRixVQUFVOzs7O0lBRVQsdUNBQWtCOztJQUNsQixtREFBOEI7O0lBQzlCLGdEQUF3Qjs7SUFDeEIsaURBQWdDOztJQUNoQyw2Q0FBMEM7O0lBQzFDLDhDQUF5Qjs7SUFDekIsK0NBQTBCOztJQUMxQixnREFBMEI7O0lBQzFCLG1EQUFrQzs7SUFDbEMsZ0RBQTJCOztJQUMzQix3REFBK0I7O0lBRS9CLDBEQUEwQzs7SUFDMUMseURBQWlFOztJQUNqRSwrQ0FBa0Q7O0lBQ2xELDREQUF3RiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgRGF0YVRhYmxlUm93IH0gZnJvbSAnLi4vbW9kZWxzL2RhdGEtdGFibGUtcm93Lm1vZGVsJztcbmltcG9ydCB7IERhdGFUYWJsZUR5bmFtaWNSb3dTcGFuRXh0cmFjdG9yQ2FsbGJhY2sgfSBmcm9tICcuLi9tb2RlbHMvZGF0YS10YWJsZS1ncm91cC1maWVsZC1leHRyYWN0b3ItY2FsbGJhY2subW9kZWwnO1xuaW1wb3J0IHsgRGF0YVRhYmxlRmlsdGVyVmFsdWVFeHRyYWN0Q2FsbGJhY2sgfSBmcm9tICcuLi9tb2RlbHMvZGF0YS10YWJsZS1maWx0ZXItdmFsdWUtZXh0cmFjdC1jYWxsYmFjay5tb2RlbCc7XG5pbXBvcnQgeyBEYXRhVGFibGVEYXRhQmluZENhbGxiYWNrIH0gZnJvbSAnLi4vbW9kZWxzL2RhdGEtdGFibGUtZGF0YS1iaW5kLWNhbGxiYWNrLm1vZGVsJztcblxuLyoqXG4gKiBEYXRhIHRhYmxlIHN0YXRlIG1hbmFnZXIgc2VydmljZTsgTWFuYWdlIGN1cnJlbnQgZGF0YSB0YWJsZSBzdGF0ZSBzbmFwc2hvdC5cbiAqL1xuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIERhdGFUYWJsZURhdGFTdGF0ZVNlcnZpY2Uge1xuICBwdWJsaWMgaWQ6IHN0cmluZztcbiAgcHVibGljIGFsbFJvd1NlbGVjdGVkID0gZmFsc2U7XG4gIHB1YmxpYyBzZWxlY3RlZFJvdzogYW55O1xuICBwdWJsaWMgc2VsZWN0ZWRSb3dzOiBhbnlbXSA9IFtdO1xuICBwdWJsaWMgZGF0YVJvd3M6IERhdGFUYWJsZVJvdzxhbnk+W10gPSBbXTtcbiAgcHVibGljIGl0ZW1Db3VudDogbnVtYmVyO1xuICBwdWJsaWMgdGFibGVXaWR0aDogbnVtYmVyO1xuICBwdWJsaWMgZGF0YUxvYWRpbmcgPSB0cnVlO1xuICBwdWJsaWMgc3Vic3RpdHV0ZVJvd3M6IGFueVtdID0gW107XG4gIHB1YmxpYyBoZWFyZFJlbG9hZCA9IGZhbHNlO1xuICBwdWJsaWMgY3VycmVudFNvcnRQcmlvcml0eSA9IDA7XG5cbiAgcHVibGljIHJlbGF0aXZlUGFyZW50RWxlbWVudDogSFRNTEVsZW1lbnQ7XG4gIHB1YmxpYyBvbkZpbHRlclZhbHVlRXh0cmFjdDogRGF0YVRhYmxlRmlsdGVyVmFsdWVFeHRyYWN0Q2FsbGJhY2s7XG4gIHB1YmxpYyBvbkRhdGFCaW5kOiBEYXRhVGFibGVEYXRhQmluZENhbGxiYWNrPGFueT47XG4gIHB1YmxpYyBvbkR5bmFtaWNSb3dTcGFuRXh0cmFjdDogRGF0YVRhYmxlRHluYW1pY1Jvd1NwYW5FeHRyYWN0b3JDYWxsYmFjazxhbnk+ID0gKCkgPT4gMTtcblxuICAvKipcbiAgICogR2V0IHNob3cgbm8gZGF0YSBvdmVybGF5IHN0YXR1cy5cbiAgICogQHJldHVybiBUcnVlIGlmIG5vIGRhdGEgb3ZlcmxheSBzaG91bGQgYmUgc2hvd24uXG4gICAqL1xuICBwdWJsaWMgZ2V0IHNob3dOb0RhdGFPdmVybGF5KCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAhdGhpcy5kYXRhUm93cy5sZW5ndGggJiYgIXRoaXMuZGF0YUxvYWRpbmc7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGRhdGEgdGFibGUgcm93IHVuaXF1ZSBpZC5cbiAgICogQHBhcmFtIGFwcGVuZCBUYXJnZXQgaWRlbnRpZmllci5cbiAgICogQHBhcmFtIGluZGV4IFRhcmdldCBpbmRleC5cbiAgICovXG4gIHB1YmxpYyBnZXRVbmlxdWVJZChhcHBlbmQ6IHN0cmluZywgaW5kZXg6IG51bWJlcik6IHN0cmluZyB7XG4gICAgcmV0dXJuIGAke3RoaXMuaWR9LWR0LSR7YXBwZW5kfS0ke2luZGV4fWA7XG4gIH1cbn1cbiJdfQ==