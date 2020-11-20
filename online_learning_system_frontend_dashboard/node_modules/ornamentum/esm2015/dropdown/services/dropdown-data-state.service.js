/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
/**
 * Dropdown data state service; Manage dropdown state data.
 */
export class DropdownDataStateService {
    constructor() {
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
     * @param {?} append Target identifier.
     * @param {?} index Target index.
     * @return {?}
     */
    getUniqueId(append, index) {
        return `${this.id}-chk-${append}-${index}`;
    }
}
DropdownDataStateService.decorators = [
    { type: Injectable }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcGRvd24tZGF0YS1zdGF0ZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vb3JuYW1lbnR1bS8iLCJzb3VyY2VzIjpbImRyb3Bkb3duL3NlcnZpY2VzL2Ryb3Bkb3duLWRhdGEtc3RhdGUuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBZSxNQUFNLGVBQWUsQ0FBQzs7OztBQVd4RCxNQUFNLE9BQU8sd0JBQXdCO0lBRHJDO1FBR1MsZ0JBQVcsR0FBRyxLQUFLLENBQUM7UUFFcEIsb0JBQWUsR0FBVSxFQUFFLENBQUM7UUFDNUIsV0FBTSxHQUFHLENBQUMsQ0FBQztRQUVYLHVCQUFrQixHQUFHLENBQUMsQ0FBQztRQUN2QixvQkFBZSxHQUFxQixFQUFFLENBQUM7UUFDdkMseUJBQW9CLEdBQTBCLEVBQUUsQ0FBQztRQUNqRCxlQUFVLEdBQUcsRUFBRSxDQUFDO1FBQ2hCLGFBQVEsR0FBRyxLQUFLLENBQUM7SUFlMUIsQ0FBQzs7Ozs7OztJQUhRLFdBQVcsQ0FBQyxNQUFjLEVBQUUsS0FBYTtRQUM5QyxPQUFPLEdBQUcsSUFBSSxDQUFDLEVBQUUsUUFBUSxNQUFNLElBQUksS0FBSyxFQUFFLENBQUM7SUFDN0MsQ0FBQzs7O1lBMUJGLFVBQVU7Ozs7SUFFVCxzQ0FBa0I7O0lBQ2xCLCtDQUEyQjs7SUFDM0Isa0RBQTJCOztJQUMzQixtREFBbUM7O0lBQ25DLDBDQUFrQjs7SUFDbEIsb0RBQWdDOztJQUNoQyxzREFBOEI7O0lBQzlCLG1EQUE4Qzs7SUFDOUMsd0RBQXdEOztJQUN4RCw4Q0FBdUI7O0lBQ3ZCLDRDQUF3Qjs7SUFDeEIsc0RBQWdEOztJQUNoRCwwREFBZ0Q7O0lBQ2hELHFFQUEyRDs7SUFFM0QsOENBQWlEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgVGVtcGxhdGVSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgRHJvcGRvd25PcHRpb24gfSBmcm9tICcuLi9tb2RlbHMvZHJvcGRvd24tb3B0aW9uLm1vZGVsJztcbmltcG9ydCB7IERyb3Bkb3duRGF0YUJpbmRDYWxsYmFjayB9IGZyb20gJy4uL21vZGVscy9kcm9wZG93bi1kYXRhLWJpbmQtY2FsbGJhY2subW9kZWwnO1xuaW1wb3J0IHsgRHJvcGRvd25PcHRpb25Hcm91cCB9IGZyb20gJy4uL21vZGVscy9kcm9wZG93bi1vcHRpb24tZ3JvdXAubW9kZWwnO1xuaW1wb3J0IHsgQ29tcG9uZW50TG9hZGVyIH0gZnJvbSAnLi4vLi4vdXRpbGl0eS91dGlsaXR5Lm1vZHVsZSc7XG5cbi8qKlxuICogRHJvcGRvd24gZGF0YSBzdGF0ZSBzZXJ2aWNlOyBNYW5hZ2UgZHJvcGRvd24gc3RhdGUgZGF0YS5cbiAqL1xuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIERyb3Bkb3duRGF0YVN0YXRlU2VydmljZSB7XG4gIHB1YmxpYyBpZDogc3RyaW5nO1xuICBwdWJsaWMgZGF0YUxvYWRpbmcgPSBmYWxzZTtcbiAgcHVibGljIHNlbGVjdGVkT3B0aW9uOiBhbnk7XG4gIHB1YmxpYyBzZWxlY3RlZE9wdGlvbnM6IGFueVtdID0gW107XG4gIHB1YmxpYyBvZmZzZXQgPSAwO1xuICBwdWJsaWMgdG90YWxPcHRpb25Db3VudDogbnVtYmVyO1xuICBwdWJsaWMgY3VycmVudE9wdGlvbkNvdW50ID0gMDtcbiAgcHVibGljIGRyb3Bkb3duT3B0aW9uczogRHJvcGRvd25PcHRpb25bXSA9IFtdO1xuICBwdWJsaWMgZHJvcGRvd25PcHRpb25Hcm91cHM6IERyb3Bkb3duT3B0aW9uR3JvdXBbXSA9IFtdO1xuICBwdWJsaWMgZmlsdGVyVGV4dCA9ICcnO1xuICBwdWJsaWMgZGlzYWJsZWQgPSBmYWxzZTtcbiAgcHVibGljIGNvbXBvbmVudExvYWRlclJlZjogQ29tcG9uZW50TG9hZGVyPGFueT47XG4gIHB1YmxpYyBkcm9wZG93bk9wdGlvblRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuICBwdWJsaWMgZHJvcGRvd25PcHRpb25Hcm91cEhlYWRlclRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG4gIHB1YmxpYyBvbkRhdGFCaW5kOiBEcm9wZG93bkRhdGFCaW5kQ2FsbGJhY2s8YW55PjtcblxuICAvKipcbiAgICogR2V0IGRyb3Bkb3duIG9wdGlvbiB1bmlxdWUgaWQuXG4gICAqIEBwYXJhbSBhcHBlbmQgVGFyZ2V0IGlkZW50aWZpZXIuXG4gICAqIEBwYXJhbSBpbmRleCBUYXJnZXQgaW5kZXguXG4gICAqL1xuICBwdWJsaWMgZ2V0VW5pcXVlSWQoYXBwZW5kOiBzdHJpbmcsIGluZGV4OiBudW1iZXIpOiBzdHJpbmcge1xuICAgIHJldHVybiBgJHt0aGlzLmlkfS1jaGstJHthcHBlbmR9LSR7aW5kZXh9YDtcbiAgfVxufVxuIl19