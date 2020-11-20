/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Inject, Injectable, InjectionToken } from '@angular/core';
import { get } from '../../utility/services/object-utility.class';
/** @type {?} */
export var DROPDOWN_CONFIG = new InjectionToken('dropdownConfig');
/**
 * Dropdown config service. Holds all the global configurations of dropdown which can be overridden while importing the module.
 * Used to manage dropdown base configuration state.
 */
var DropdownConfigService = /** @class */ (function () {
    function DropdownConfigService(dropdownConfig) {
        this.dropdownConfig = dropdownConfig;
        this.baseTranslations = {
            noDataMessage: 'No Results Available',
            filterPlaceholder: 'Search',
            selectedOptionWrapPlaceholder: 'Options',
            selectPlaceholder: 'Select'
        };
        this.selectTrackBy = 'key';
        this.displayTrackBy = 'value';
        this.disabledTrackBy = 'disabled';
        this.menuPosition = 'bottom-left';
        this.selectMode = 'single-toggle';
        this.filterable = false;
        this.filterDebounce = true;
        this.filterDebounceTime = 500;
        this.groupByField = undefined;
        this.wrapDisplaySelectLimit = undefined;
        this.showSelectedOptionRemoveButton = false;
        this.showClearSelectionButton = false;
        this.menuWidth = 320;
        this.menuHeight = 250;
        this.loadOnScroll = false;
        this.loadViewDistanceRatio = 1;
        this.limit = 15;
        this.loadDataOnInit = true;
        this.closeMenuOnSelect = false;
        this.showOptionSelectCheckbox = false;
        this.showOptionIndex = false;
        this.showOptionTrackBy = false;
        this.multiSelectOptionMaxWidth = 135;
        this.setFirstOptionSelected = false;
        this.triggerSelectChangeOnInit = false;
        this.triggerSelectChangeOnModelUpdate = false;
        this.triggerSelectChangeOnFirstOptionSelect = false;
        this.dynamicDimensionCalculation = false;
        this.dynamicWidthRatio = 1;
        this.dynamicHeightRatio = 0.5;
        this.relativeParentElement = undefined;
        if (dropdownConfig) {
            Object.assign(this, dropdownConfig);
        }
    }
    Object.defineProperty(DropdownConfigService.prototype, "translations", {
        /**
         * Get dropdown translations.
         * @return Dropdown translations.
         */
        get: /**
         * Get dropdown translations.
         * @return {?} Dropdown translations.
         */
        function () {
            return this.baseTranslations;
        },
        /**
         * Set dropdown translations.
         * @param value Dropdown translations object.
         */
        set: /**
         * Set dropdown translations.
         * @param {?} value Dropdown translations object.
         * @return {?}
         */
        function (value) {
            this.baseTranslations = tslib_1.__assign({}, this.baseTranslations, value);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Get display text by source option.
     * @param option Source option object.
     * @return Display text.
     */
    /**
     * Get display text by source option.
     * @param {?} option Source option object.
     * @return {?} Display text.
     */
    DropdownConfigService.prototype.getDisplayText = /**
     * Get display text by source option.
     * @param {?} option Source option object.
     * @return {?} Display text.
     */
    function (option) {
        return get(option, this.displayTrackBy);
    };
    DropdownConfigService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    DropdownConfigService.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [DROPDOWN_CONFIG,] }] }
    ]; };
    return DropdownConfigService;
}());
export { DropdownConfigService };
if (false) {
    /** @type {?} */
    DropdownConfigService.prototype.baseTranslations;
    /** @type {?} */
    DropdownConfigService.prototype.selectTrackBy;
    /** @type {?} */
    DropdownConfigService.prototype.displayTrackBy;
    /** @type {?} */
    DropdownConfigService.prototype.disabledTrackBy;
    /** @type {?} */
    DropdownConfigService.prototype.menuPosition;
    /** @type {?} */
    DropdownConfigService.prototype.selectMode;
    /** @type {?} */
    DropdownConfigService.prototype.filterable;
    /** @type {?} */
    DropdownConfigService.prototype.filterDebounce;
    /** @type {?} */
    DropdownConfigService.prototype.filterDebounceTime;
    /** @type {?} */
    DropdownConfigService.prototype.groupByField;
    /** @type {?} */
    DropdownConfigService.prototype.wrapDisplaySelectLimit;
    /** @type {?} */
    DropdownConfigService.prototype.showSelectedOptionRemoveButton;
    /** @type {?} */
    DropdownConfigService.prototype.showClearSelectionButton;
    /** @type {?} */
    DropdownConfigService.prototype.menuWidth;
    /** @type {?} */
    DropdownConfigService.prototype.menuHeight;
    /** @type {?} */
    DropdownConfigService.prototype.loadOnScroll;
    /** @type {?} */
    DropdownConfigService.prototype.loadViewDistanceRatio;
    /** @type {?} */
    DropdownConfigService.prototype.limit;
    /** @type {?} */
    DropdownConfigService.prototype.loadDataOnInit;
    /** @type {?} */
    DropdownConfigService.prototype.closeMenuOnSelect;
    /** @type {?} */
    DropdownConfigService.prototype.showOptionSelectCheckbox;
    /** @type {?} */
    DropdownConfigService.prototype.showOptionIndex;
    /** @type {?} */
    DropdownConfigService.prototype.showOptionTrackBy;
    /** @type {?} */
    DropdownConfigService.prototype.multiSelectOptionMaxWidth;
    /** @type {?} */
    DropdownConfigService.prototype.setFirstOptionSelected;
    /** @type {?} */
    DropdownConfigService.prototype.triggerSelectChangeOnInit;
    /** @type {?} */
    DropdownConfigService.prototype.triggerSelectChangeOnModelUpdate;
    /** @type {?} */
    DropdownConfigService.prototype.triggerSelectChangeOnFirstOptionSelect;
    /** @type {?} */
    DropdownConfigService.prototype.dynamicDimensionCalculation;
    /** @type {?} */
    DropdownConfigService.prototype.dynamicWidthRatio;
    /** @type {?} */
    DropdownConfigService.prototype.dynamicHeightRatio;
    /** @type {?} */
    DropdownConfigService.prototype.relativeParentElement;
    /**
     * @type {?}
     * @private
     */
    DropdownConfigService.prototype.dropdownConfig;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcGRvd24tY29uZmlnLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9vcm5hbWVudHVtLyIsInNvdXJjZXMiOlsiZHJvcGRvd24vc2VydmljZXMvZHJvcGRvd24tY29uZmlnLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxjQUFjLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFbkUsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLDZDQUE2QyxDQUFDOztBQVNsRSxNQUFNLEtBQU8sZUFBZSxHQUFHLElBQUksY0FBYyxDQUFrQixnQkFBZ0IsQ0FBQzs7Ozs7QUFNcEY7SUF5Q0UsK0JBQTZDLGNBQThCO1FBQTlCLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQXZDcEUscUJBQWdCLEdBQXlCO1lBQzlDLGFBQWEsRUFBRSxzQkFBc0I7WUFDckMsaUJBQWlCLEVBQUUsUUFBUTtZQUMzQiw2QkFBNkIsRUFBRSxTQUFTO1lBQ3hDLGlCQUFpQixFQUFFLFFBQVE7U0FDNUIsQ0FBQztRQUVLLGtCQUFhLEdBQUcsS0FBSyxDQUFDO1FBQ3RCLG1CQUFjLEdBQUcsT0FBTyxDQUFDO1FBQ3pCLG9CQUFlLEdBQUcsVUFBVSxDQUFDO1FBQzdCLGlCQUFZLEdBQWlCLGFBQWEsQ0FBQztRQUMzQyxlQUFVLEdBQXVCLGVBQWUsQ0FBQztRQUNqRCxlQUFVLEdBQUcsS0FBSyxDQUFDO1FBQ25CLG1CQUFjLEdBQUcsSUFBSSxDQUFDO1FBQ3RCLHVCQUFrQixHQUFHLEdBQUcsQ0FBQztRQUN6QixpQkFBWSxHQUFXLFNBQVMsQ0FBQztRQUNqQywyQkFBc0IsR0FBVyxTQUFTLENBQUM7UUFDM0MsbUNBQThCLEdBQUcsS0FBSyxDQUFDO1FBQ3ZDLDZCQUF3QixHQUFHLEtBQUssQ0FBQztRQUNqQyxjQUFTLEdBQUcsR0FBRyxDQUFDO1FBQ2hCLGVBQVUsR0FBRyxHQUFHLENBQUM7UUFDakIsaUJBQVksR0FBRyxLQUFLLENBQUM7UUFDckIsMEJBQXFCLEdBQUcsQ0FBQyxDQUFDO1FBQzFCLFVBQUssR0FBRyxFQUFFLENBQUM7UUFDWCxtQkFBYyxHQUFHLElBQUksQ0FBQztRQUN0QixzQkFBaUIsR0FBRyxLQUFLLENBQUM7UUFDMUIsNkJBQXdCLEdBQUcsS0FBSyxDQUFDO1FBQ2pDLG9CQUFlLEdBQUcsS0FBSyxDQUFDO1FBQ3hCLHNCQUFpQixHQUFHLEtBQUssQ0FBQztRQUMxQiw4QkFBeUIsR0FBRyxHQUFHLENBQUM7UUFDaEMsMkJBQXNCLEdBQUcsS0FBSyxDQUFDO1FBQy9CLDhCQUF5QixHQUFHLEtBQUssQ0FBQztRQUNsQyxxQ0FBZ0MsR0FBRyxLQUFLLENBQUM7UUFDekMsMkNBQXNDLEdBQUcsS0FBSyxDQUFDO1FBQy9DLGdDQUEyQixHQUFHLEtBQUssQ0FBQztRQUNwQyxzQkFBaUIsR0FBRyxDQUFDLENBQUM7UUFDdEIsdUJBQWtCLEdBQUcsR0FBRyxDQUFDO1FBQ3pCLDBCQUFxQixHQUFHLFNBQVMsQ0FBQztRQUd2QyxJQUFJLGNBQWMsRUFBRTtZQUNsQixNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxjQUFjLENBQUMsQ0FBQztTQUNyQztJQUNILENBQUM7SUFNRCxzQkFBVywrQ0FBWTtRQUl2Qjs7O1dBR0c7Ozs7O1FBQ0g7WUFDRSxPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztRQUMvQixDQUFDO1FBZEQ7OztXQUdHOzs7Ozs7UUFDSCxVQUF3QixLQUEyQjtZQUNqRCxJQUFJLENBQUMsZ0JBQWdCLHdCQUFRLElBQUksQ0FBQyxnQkFBZ0IsRUFBSyxLQUFLLENBQUUsQ0FBQztRQUNqRSxDQUFDOzs7T0FBQTtJQVVEOzs7O09BSUc7Ozs7OztJQUNJLDhDQUFjOzs7OztJQUFyQixVQUFzQixNQUFXO1FBQy9CLE9BQU8sR0FBRyxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7SUFDMUMsQ0FBQzs7Z0JBdEVGLFVBQVU7Ozs7Z0RBeUNJLE1BQU0sU0FBQyxlQUFlOztJQThCckMsNEJBQUM7Q0FBQSxBQXZFRCxJQXVFQztTQXRFWSxxQkFBcUI7OztJQUNoQyxpREFLRTs7SUFFRiw4Q0FBNkI7O0lBQzdCLCtDQUFnQzs7SUFDaEMsZ0RBQW9DOztJQUNwQyw2Q0FBa0Q7O0lBQ2xELDJDQUF3RDs7SUFDeEQsMkNBQTBCOztJQUMxQiwrQ0FBNkI7O0lBQzdCLG1EQUFnQzs7SUFDaEMsNkNBQXdDOztJQUN4Qyx1REFBa0Q7O0lBQ2xELCtEQUE4Qzs7SUFDOUMseURBQXdDOztJQUN4QywwQ0FBdUI7O0lBQ3ZCLDJDQUF3Qjs7SUFDeEIsNkNBQTRCOztJQUM1QixzREFBaUM7O0lBQ2pDLHNDQUFrQjs7SUFDbEIsK0NBQTZCOztJQUM3QixrREFBaUM7O0lBQ2pDLHlEQUF3Qzs7SUFDeEMsZ0RBQStCOztJQUMvQixrREFBaUM7O0lBQ2pDLDBEQUF1Qzs7SUFDdkMsdURBQXNDOztJQUN0QywwREFBeUM7O0lBQ3pDLGlFQUFnRDs7SUFDaEQsdUVBQXNEOztJQUN0RCw0REFBMkM7O0lBQzNDLGtEQUE2Qjs7SUFDN0IsbURBQWdDOztJQUNoQyxzREFBeUM7Ozs7O0lBRTdCLCtDQUErRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSwgSW5qZWN0aW9uVG9rZW4gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgZ2V0IH0gZnJvbSAnLi4vLi4vdXRpbGl0eS9zZXJ2aWNlcy9vYmplY3QtdXRpbGl0eS5jbGFzcyc7XG5cbmltcG9ydCB7IERyb3Bkb3duQ29uZmlnIH0gZnJvbSAnLi4vbW9kZWxzL2Ryb3Bkb3duLWNvbmZpZy5tb2RlbCc7XG5pbXBvcnQgeyBEcm9wZG93blRyYW5zbGF0aW9ucyB9IGZyb20gJy4uL21vZGVscy9kcm9wZG93bi10cmFuc2xhdGlvbnMubW9kZWwnO1xuaW1wb3J0IHsgRGF0YVRhYmxlQ29uZmlnIH0gZnJvbSAnLi4vLi4vZGF0YS10YWJsZS9tb2RlbHMvZGF0YS10YWJsZS1jb25maWcubW9kZWwnO1xuXG5pbXBvcnQgeyBEcm9wZG93blNlbGVjdE1vZGUgfSBmcm9tICcuLi9tb2RlbHMvZHJvcGRvd24tc2VsZWN0LW1vZGUubW9kZWwnO1xuaW1wb3J0IHsgVmlld1Bvc2l0aW9uIH0gZnJvbSAnLi4vLi4vdXRpbGl0eS9tb2RlbHMvdmlldy1wb3NpdGlvbi5tb2RlbCc7XG5cbmV4cG9ydCBjb25zdCBEUk9QRE9XTl9DT05GSUcgPSBuZXcgSW5qZWN0aW9uVG9rZW48RGF0YVRhYmxlQ29uZmlnPignZHJvcGRvd25Db25maWcnKTtcblxuLyoqXG4gKiBEcm9wZG93biBjb25maWcgc2VydmljZS4gSG9sZHMgYWxsIHRoZSBnbG9iYWwgY29uZmlndXJhdGlvbnMgb2YgZHJvcGRvd24gd2hpY2ggY2FuIGJlIG92ZXJyaWRkZW4gd2hpbGUgaW1wb3J0aW5nIHRoZSBtb2R1bGUuXG4gKiBVc2VkIHRvIG1hbmFnZSBkcm9wZG93biBiYXNlIGNvbmZpZ3VyYXRpb24gc3RhdGUuXG4gKi9cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBEcm9wZG93bkNvbmZpZ1NlcnZpY2UgaW1wbGVtZW50cyBEcm9wZG93bkNvbmZpZyB7XG4gIHB1YmxpYyBiYXNlVHJhbnNsYXRpb25zOiBEcm9wZG93blRyYW5zbGF0aW9ucyA9IHtcbiAgICBub0RhdGFNZXNzYWdlOiAnTm8gUmVzdWx0cyBBdmFpbGFibGUnLFxuICAgIGZpbHRlclBsYWNlaG9sZGVyOiAnU2VhcmNoJyxcbiAgICBzZWxlY3RlZE9wdGlvbldyYXBQbGFjZWhvbGRlcjogJ09wdGlvbnMnLFxuICAgIHNlbGVjdFBsYWNlaG9sZGVyOiAnU2VsZWN0J1xuICB9O1xuXG4gIHB1YmxpYyBzZWxlY3RUcmFja0J5ID0gJ2tleSc7XG4gIHB1YmxpYyBkaXNwbGF5VHJhY2tCeSA9ICd2YWx1ZSc7XG4gIHB1YmxpYyBkaXNhYmxlZFRyYWNrQnkgPSAnZGlzYWJsZWQnO1xuICBwdWJsaWMgbWVudVBvc2l0aW9uOiBWaWV3UG9zaXRpb24gPSAnYm90dG9tLWxlZnQnO1xuICBwdWJsaWMgc2VsZWN0TW9kZTogRHJvcGRvd25TZWxlY3RNb2RlID0gJ3NpbmdsZS10b2dnbGUnO1xuICBwdWJsaWMgZmlsdGVyYWJsZSA9IGZhbHNlO1xuICBwdWJsaWMgZmlsdGVyRGVib3VuY2UgPSB0cnVlO1xuICBwdWJsaWMgZmlsdGVyRGVib3VuY2VUaW1lID0gNTAwO1xuICBwdWJsaWMgZ3JvdXBCeUZpZWxkOiBzdHJpbmcgPSB1bmRlZmluZWQ7XG4gIHB1YmxpYyB3cmFwRGlzcGxheVNlbGVjdExpbWl0OiBudW1iZXIgPSB1bmRlZmluZWQ7XG4gIHB1YmxpYyBzaG93U2VsZWN0ZWRPcHRpb25SZW1vdmVCdXR0b24gPSBmYWxzZTtcbiAgcHVibGljIHNob3dDbGVhclNlbGVjdGlvbkJ1dHRvbiA9IGZhbHNlO1xuICBwdWJsaWMgbWVudVdpZHRoID0gMzIwO1xuICBwdWJsaWMgbWVudUhlaWdodCA9IDI1MDtcbiAgcHVibGljIGxvYWRPblNjcm9sbCA9IGZhbHNlO1xuICBwdWJsaWMgbG9hZFZpZXdEaXN0YW5jZVJhdGlvID0gMTtcbiAgcHVibGljIGxpbWl0ID0gMTU7XG4gIHB1YmxpYyBsb2FkRGF0YU9uSW5pdCA9IHRydWU7XG4gIHB1YmxpYyBjbG9zZU1lbnVPblNlbGVjdCA9IGZhbHNlO1xuICBwdWJsaWMgc2hvd09wdGlvblNlbGVjdENoZWNrYm94ID0gZmFsc2U7XG4gIHB1YmxpYyBzaG93T3B0aW9uSW5kZXggPSBmYWxzZTtcbiAgcHVibGljIHNob3dPcHRpb25UcmFja0J5ID0gZmFsc2U7XG4gIHB1YmxpYyBtdWx0aVNlbGVjdE9wdGlvbk1heFdpZHRoID0gMTM1O1xuICBwdWJsaWMgc2V0Rmlyc3RPcHRpb25TZWxlY3RlZCA9IGZhbHNlO1xuICBwdWJsaWMgdHJpZ2dlclNlbGVjdENoYW5nZU9uSW5pdCA9IGZhbHNlO1xuICBwdWJsaWMgdHJpZ2dlclNlbGVjdENoYW5nZU9uTW9kZWxVcGRhdGUgPSBmYWxzZTtcbiAgcHVibGljIHRyaWdnZXJTZWxlY3RDaGFuZ2VPbkZpcnN0T3B0aW9uU2VsZWN0ID0gZmFsc2U7XG4gIHB1YmxpYyBkeW5hbWljRGltZW5zaW9uQ2FsY3VsYXRpb24gPSBmYWxzZTtcbiAgcHVibGljIGR5bmFtaWNXaWR0aFJhdGlvID0gMTtcbiAgcHVibGljIGR5bmFtaWNIZWlnaHRSYXRpbyA9IDAuNTtcbiAgcHVibGljIHJlbGF0aXZlUGFyZW50RWxlbWVudCA9IHVuZGVmaW5lZDtcblxuICBjb25zdHJ1Y3RvcihASW5qZWN0KERST1BET1dOX0NPTkZJRykgcHJpdmF0ZSBkcm9wZG93bkNvbmZpZzogRHJvcGRvd25Db25maWcpIHtcbiAgICBpZiAoZHJvcGRvd25Db25maWcpIHtcbiAgICAgIE9iamVjdC5hc3NpZ24odGhpcywgZHJvcGRvd25Db25maWcpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgZHJvcGRvd24gdHJhbnNsYXRpb25zLlxuICAgKiBAcGFyYW0gdmFsdWUgRHJvcGRvd24gdHJhbnNsYXRpb25zIG9iamVjdC5cbiAgICovXG4gIHB1YmxpYyBzZXQgdHJhbnNsYXRpb25zKHZhbHVlOiBEcm9wZG93blRyYW5zbGF0aW9ucykge1xuICAgIHRoaXMuYmFzZVRyYW5zbGF0aW9ucyA9IHsgLi4udGhpcy5iYXNlVHJhbnNsYXRpb25zLCAuLi52YWx1ZSB9O1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBkcm9wZG93biB0cmFuc2xhdGlvbnMuXG4gICAqIEByZXR1cm4gRHJvcGRvd24gdHJhbnNsYXRpb25zLlxuICAgKi9cbiAgcHVibGljIGdldCB0cmFuc2xhdGlvbnMoKTogRHJvcGRvd25UcmFuc2xhdGlvbnMge1xuICAgIHJldHVybiB0aGlzLmJhc2VUcmFuc2xhdGlvbnM7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGRpc3BsYXkgdGV4dCBieSBzb3VyY2Ugb3B0aW9uLlxuICAgKiBAcGFyYW0gb3B0aW9uIFNvdXJjZSBvcHRpb24gb2JqZWN0LlxuICAgKiBAcmV0dXJuIERpc3BsYXkgdGV4dC5cbiAgICovXG4gIHB1YmxpYyBnZXREaXNwbGF5VGV4dChvcHRpb246IGFueSk6IHN0cmluZyB7XG4gICAgcmV0dXJuIGdldChvcHRpb24sIHRoaXMuZGlzcGxheVRyYWNrQnkpO1xuICB9XG59XG4iXX0=