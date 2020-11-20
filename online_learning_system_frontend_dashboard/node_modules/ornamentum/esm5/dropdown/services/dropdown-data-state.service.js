/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
/**
 * Dropdown data state service; Manage dropdown state data.
 */
var DropdownDataStateService = /** @class */ (function () {
    function DropdownDataStateService() {
        this.dataLoading = false;
        this.selectedOptions = [];
        this.offset = 0;
        this.currentOptionCount = 0;
        this.dropdownOptions = [];
        this.dropdownOptionGroups = [];
        this.filterText = '';
        this.disabled = false;
    }
    /**
     * Get dropdown option unique id.
     * @param append Target identifier.
     * @param index Target index.
     */
    /**
     * Get dropdown option unique id.
     * @param {?} append Target identifier.
     * @param {?} index Target index.
     * @return {?}
     */
    DropdownDataStateService.prototype.getUniqueId = /**
     * Get dropdown option unique id.
     * @param {?} append Target identifier.
     * @param {?} index Target index.
     * @return {?}
     */
    function (append, index) {
        return this.id + "-chk-" + append + "-" + index;
    };
    DropdownDataStateService.decorators = [
        { type: Injectable }
    ];
    return DropdownDataStateService;
}());
export { DropdownDataStateService };
if (false) {
    /** @type {?} */
    DropdownDataStateService.prototype.id;
    /** @type {?} */
    DropdownDataStateService.prototype.dataLoading;
    /** @type {?} */
    DropdownDataStateService.prototype.selectedOption;
    /** @type {?} */
    DropdownDataStateService.prototype.selectedOptions;
    /** @type {?} */
    DropdownDataStateService.prototype.offset;
    /** @type {?} */
    DropdownDataStateService.prototype.totalOptionCount;
    /** @type {?} */
    DropdownDataStateService.prototype.currentOptionCount;
    /** @type {?} */
    DropdownDataStateService.prototype.dropdownOptions;
    /** @type {?} */
    DropdownDataStateService.prototype.dropdownOptionGroups;
    /** @type {?} */
    DropdownDataStateService.prototype.filterText;
    /** @type {?} */
    DropdownDataStateService.prototype.disabled;
    /** @type {?} */
    DropdownDataStateService.prototype.componentLoaderRef;
    /** @type {?} */
    DropdownDataStateService.prototype.dropdownOptionTemplate;
    /** @type {?} */
    DropdownDataStateService.prototype.dropdownOptionGroupHeaderTemplate;
    /** @type {?} */
    DropdownDataStateService.prototype.onDataBind;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcGRvd24tZGF0YS1zdGF0ZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vb3JuYW1lbnR1bS8iLCJzb3VyY2VzIjpbImRyb3Bkb3duL3NlcnZpY2VzL2Ryb3Bkb3duLWRhdGEtc3RhdGUuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBZSxNQUFNLGVBQWUsQ0FBQzs7OztBQVV4RDtJQUFBO1FBR1MsZ0JBQVcsR0FBRyxLQUFLLENBQUM7UUFFcEIsb0JBQWUsR0FBVSxFQUFFLENBQUM7UUFDNUIsV0FBTSxHQUFHLENBQUMsQ0FBQztRQUVYLHVCQUFrQixHQUFHLENBQUMsQ0FBQztRQUN2QixvQkFBZSxHQUFxQixFQUFFLENBQUM7UUFDdkMseUJBQW9CLEdBQTBCLEVBQUUsQ0FBQztRQUNqRCxlQUFVLEdBQUcsRUFBRSxDQUFDO1FBQ2hCLGFBQVEsR0FBRyxLQUFLLENBQUM7SUFlMUIsQ0FBQztJQVJDOzs7O09BSUc7Ozs7Ozs7SUFDSSw4Q0FBVzs7Ozs7O0lBQWxCLFVBQW1CLE1BQWMsRUFBRSxLQUFhO1FBQzlDLE9BQVUsSUFBSSxDQUFDLEVBQUUsYUFBUSxNQUFNLFNBQUksS0FBTyxDQUFDO0lBQzdDLENBQUM7O2dCQTFCRixVQUFVOztJQTJCWCwrQkFBQztDQUFBLEFBM0JELElBMkJDO1NBMUJZLHdCQUF3Qjs7O0lBQ25DLHNDQUFrQjs7SUFDbEIsK0NBQTJCOztJQUMzQixrREFBMkI7O0lBQzNCLG1EQUFtQzs7SUFDbkMsMENBQWtCOztJQUNsQixvREFBZ0M7O0lBQ2hDLHNEQUE4Qjs7SUFDOUIsbURBQThDOztJQUM5Qyx3REFBd0Q7O0lBQ3hELDhDQUF1Qjs7SUFDdkIsNENBQXdCOztJQUN4QixzREFBZ0Q7O0lBQ2hELDBEQUFnRDs7SUFDaEQscUVBQTJEOztJQUUzRCw4Q0FBaUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBUZW1wbGF0ZVJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBEcm9wZG93bk9wdGlvbiB9IGZyb20gJy4uL21vZGVscy9kcm9wZG93bi1vcHRpb24ubW9kZWwnO1xuaW1wb3J0IHsgRHJvcGRvd25EYXRhQmluZENhbGxiYWNrIH0gZnJvbSAnLi4vbW9kZWxzL2Ryb3Bkb3duLWRhdGEtYmluZC1jYWxsYmFjay5tb2RlbCc7XG5pbXBvcnQgeyBEcm9wZG93bk9wdGlvbkdyb3VwIH0gZnJvbSAnLi4vbW9kZWxzL2Ryb3Bkb3duLW9wdGlvbi1ncm91cC5tb2RlbCc7XG5pbXBvcnQgeyBDb21wb25lbnRMb2FkZXIgfSBmcm9tICcuLi8uLi91dGlsaXR5L3V0aWxpdHkubW9kdWxlJztcblxuLyoqXG4gKiBEcm9wZG93biBkYXRhIHN0YXRlIHNlcnZpY2U7IE1hbmFnZSBkcm9wZG93biBzdGF0ZSBkYXRhLlxuICovXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRHJvcGRvd25EYXRhU3RhdGVTZXJ2aWNlIHtcbiAgcHVibGljIGlkOiBzdHJpbmc7XG4gIHB1YmxpYyBkYXRhTG9hZGluZyA9IGZhbHNlO1xuICBwdWJsaWMgc2VsZWN0ZWRPcHRpb246IGFueTtcbiAgcHVibGljIHNlbGVjdGVkT3B0aW9uczogYW55W10gPSBbXTtcbiAgcHVibGljIG9mZnNldCA9IDA7XG4gIHB1YmxpYyB0b3RhbE9wdGlvbkNvdW50OiBudW1iZXI7XG4gIHB1YmxpYyBjdXJyZW50T3B0aW9uQ291bnQgPSAwO1xuICBwdWJsaWMgZHJvcGRvd25PcHRpb25zOiBEcm9wZG93bk9wdGlvbltdID0gW107XG4gIHB1YmxpYyBkcm9wZG93bk9wdGlvbkdyb3VwczogRHJvcGRvd25PcHRpb25Hcm91cFtdID0gW107XG4gIHB1YmxpYyBmaWx0ZXJUZXh0ID0gJyc7XG4gIHB1YmxpYyBkaXNhYmxlZCA9IGZhbHNlO1xuICBwdWJsaWMgY29tcG9uZW50TG9hZGVyUmVmOiBDb21wb25lbnRMb2FkZXI8YW55PjtcbiAgcHVibGljIGRyb3Bkb3duT3B0aW9uVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG4gIHB1YmxpYyBkcm9wZG93bk9wdGlvbkdyb3VwSGVhZGVyVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgcHVibGljIG9uRGF0YUJpbmQ6IERyb3Bkb3duRGF0YUJpbmRDYWxsYmFjazxhbnk+O1xuXG4gIC8qKlxuICAgKiBHZXQgZHJvcGRvd24gb3B0aW9uIHVuaXF1ZSBpZC5cbiAgICogQHBhcmFtIGFwcGVuZCBUYXJnZXQgaWRlbnRpZmllci5cbiAgICogQHBhcmFtIGluZGV4IFRhcmdldCBpbmRleC5cbiAgICovXG4gIHB1YmxpYyBnZXRVbmlxdWVJZChhcHBlbmQ6IHN0cmluZywgaW5kZXg6IG51bWJlcik6IHN0cmluZyB7XG4gICAgcmV0dXJuIGAke3RoaXMuaWR9LWNoay0ke2FwcGVuZH0tJHtpbmRleH1gO1xuICB9XG59XG4iXX0=