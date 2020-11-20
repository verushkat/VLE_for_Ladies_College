/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Inject, Injectable, InjectionToken } from '@angular/core';
import { get } from '../../utility/services/object-utility.class';
/** @type {?} */
export const DROPDOWN_CONFIG = new InjectionToken('dropdownConfig');
/**
 * Dropdown config service. Holds all the global configurations of dropdown which can be overridden while importing the module.
 * Used to manage dropdown base configuration state.
 */
export class DropdownConfigService {
    /**
     * @param {?} dropdownConfig
     */
    constructor(dropdownConfig) {
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
    /**
     * Set dropdown translations.
     * @param {?} value Dropdown translations object.
     * @return {?}
     */
    set translations(value) {
        this.baseTranslations = Object.assign({}, this.baseTranslations, value);
    }
    /**
     * Get dropdown translations.
     * @return {?} Dropdown translations.
     */
    get translations() {
        return this.baseTranslations;
    }
    /**
     * Get display text by source option.
     * @param {?} option Source option object.
     * @return {?} Display text.
     */
    getDisplayText(option) {
        return get(option, this.displayTrackBy);
    }
}
DropdownConfigService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
DropdownConfigService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [DROPDOWN_CONFIG,] }] }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcGRvd24tY29uZmlnLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9vcm5hbWVudHVtLyIsInNvdXJjZXMiOlsiZHJvcGRvd24vc2VydmljZXMvZHJvcGRvd24tY29uZmlnLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLGNBQWMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVuRSxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sNkNBQTZDLENBQUM7O0FBU2xFLE1BQU0sT0FBTyxlQUFlLEdBQUcsSUFBSSxjQUFjLENBQWtCLGdCQUFnQixDQUFDOzs7OztBQU9wRixNQUFNLE9BQU8scUJBQXFCOzs7O0lBd0NoQyxZQUE2QyxjQUE4QjtRQUE5QixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUF2Q3BFLHFCQUFnQixHQUF5QjtZQUM5QyxhQUFhLEVBQUUsc0JBQXNCO1lBQ3JDLGlCQUFpQixFQUFFLFFBQVE7WUFDM0IsNkJBQTZCLEVBQUUsU0FBUztZQUN4QyxpQkFBaUIsRUFBRSxRQUFRO1NBQzVCLENBQUM7UUFFSyxrQkFBYSxHQUFHLEtBQUssQ0FBQztRQUN0QixtQkFBYyxHQUFHLE9BQU8sQ0FBQztRQUN6QixvQkFBZSxHQUFHLFVBQVUsQ0FBQztRQUM3QixpQkFBWSxHQUFpQixhQUFhLENBQUM7UUFDM0MsZUFBVSxHQUF1QixlQUFlLENBQUM7UUFDakQsZUFBVSxHQUFHLEtBQUssQ0FBQztRQUNuQixtQkFBYyxHQUFHLElBQUksQ0FBQztRQUN0Qix1QkFBa0IsR0FBRyxHQUFHLENBQUM7UUFDekIsaUJBQVksR0FBVyxTQUFTLENBQUM7UUFDakMsMkJBQXNCLEdBQVcsU0FBUyxDQUFDO1FBQzNDLG1DQUE4QixHQUFHLEtBQUssQ0FBQztRQUN2Qyw2QkFBd0IsR0FBRyxLQUFLLENBQUM7UUFDakMsY0FBUyxHQUFHLEdBQUcsQ0FBQztRQUNoQixlQUFVLEdBQUcsR0FBRyxDQUFDO1FBQ2pCLGlCQUFZLEdBQUcsS0FBSyxDQUFDO1FBQ3JCLDBCQUFxQixHQUFHLENBQUMsQ0FBQztRQUMxQixVQUFLLEdBQUcsRUFBRSxDQUFDO1FBQ1gsbUJBQWMsR0FBRyxJQUFJLENBQUM7UUFDdEIsc0JBQWlCLEdBQUcsS0FBSyxDQUFDO1FBQzFCLDZCQUF3QixHQUFHLEtBQUssQ0FBQztRQUNqQyxvQkFBZSxHQUFHLEtBQUssQ0FBQztRQUN4QixzQkFBaUIsR0FBRyxLQUFLLENBQUM7UUFDMUIsOEJBQXlCLEdBQUcsR0FBRyxDQUFDO1FBQ2hDLDJCQUFzQixHQUFHLEtBQUssQ0FBQztRQUMvQiw4QkFBeUIsR0FBRyxLQUFLLENBQUM7UUFDbEMscUNBQWdDLEdBQUcsS0FBSyxDQUFDO1FBQ3pDLDJDQUFzQyxHQUFHLEtBQUssQ0FBQztRQUMvQyxnQ0FBMkIsR0FBRyxLQUFLLENBQUM7UUFDcEMsc0JBQWlCLEdBQUcsQ0FBQyxDQUFDO1FBQ3RCLHVCQUFrQixHQUFHLEdBQUcsQ0FBQztRQUN6QiwwQkFBcUIsR0FBRyxTQUFTLENBQUM7UUFHdkMsSUFBSSxjQUFjLEVBQUU7WUFDbEIsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsY0FBYyxDQUFDLENBQUM7U0FDckM7SUFDSCxDQUFDOzs7Ozs7SUFNRCxJQUFXLFlBQVksQ0FBQyxLQUEyQjtRQUNqRCxJQUFJLENBQUMsZ0JBQWdCLHFCQUFRLElBQUksQ0FBQyxnQkFBZ0IsRUFBSyxLQUFLLENBQUUsQ0FBQztJQUNqRSxDQUFDOzs7OztJQU1ELElBQVcsWUFBWTtRQUNyQixPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztJQUMvQixDQUFDOzs7Ozs7SUFPTSxjQUFjLENBQUMsTUFBVztRQUMvQixPQUFPLEdBQUcsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO0lBQzFDLENBQUM7OztZQXRFRixVQUFVOzs7OzRDQXlDSSxNQUFNLFNBQUMsZUFBZTs7OztJQXZDbkMsaURBS0U7O0lBRUYsOENBQTZCOztJQUM3QiwrQ0FBZ0M7O0lBQ2hDLGdEQUFvQzs7SUFDcEMsNkNBQWtEOztJQUNsRCwyQ0FBd0Q7O0lBQ3hELDJDQUEwQjs7SUFDMUIsK0NBQTZCOztJQUM3QixtREFBZ0M7O0lBQ2hDLDZDQUF3Qzs7SUFDeEMsdURBQWtEOztJQUNsRCwrREFBOEM7O0lBQzlDLHlEQUF3Qzs7SUFDeEMsMENBQXVCOztJQUN2QiwyQ0FBd0I7O0lBQ3hCLDZDQUE0Qjs7SUFDNUIsc0RBQWlDOztJQUNqQyxzQ0FBa0I7O0lBQ2xCLCtDQUE2Qjs7SUFDN0Isa0RBQWlDOztJQUNqQyx5REFBd0M7O0lBQ3hDLGdEQUErQjs7SUFDL0Isa0RBQWlDOztJQUNqQywwREFBdUM7O0lBQ3ZDLHVEQUFzQzs7SUFDdEMsMERBQXlDOztJQUN6QyxpRUFBZ0Q7O0lBQ2hELHVFQUFzRDs7SUFDdEQsNERBQTJDOztJQUMzQyxrREFBNkI7O0lBQzdCLG1EQUFnQzs7SUFDaEMsc0RBQXlDOzs7OztJQUU3QiwrQ0FBK0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUsIEluamVjdGlvblRva2VuIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IGdldCB9IGZyb20gJy4uLy4uL3V0aWxpdHkvc2VydmljZXMvb2JqZWN0LXV0aWxpdHkuY2xhc3MnO1xuXG5pbXBvcnQgeyBEcm9wZG93bkNvbmZpZyB9IGZyb20gJy4uL21vZGVscy9kcm9wZG93bi1jb25maWcubW9kZWwnO1xuaW1wb3J0IHsgRHJvcGRvd25UcmFuc2xhdGlvbnMgfSBmcm9tICcuLi9tb2RlbHMvZHJvcGRvd24tdHJhbnNsYXRpb25zLm1vZGVsJztcbmltcG9ydCB7IERhdGFUYWJsZUNvbmZpZyB9IGZyb20gJy4uLy4uL2RhdGEtdGFibGUvbW9kZWxzL2RhdGEtdGFibGUtY29uZmlnLm1vZGVsJztcblxuaW1wb3J0IHsgRHJvcGRvd25TZWxlY3RNb2RlIH0gZnJvbSAnLi4vbW9kZWxzL2Ryb3Bkb3duLXNlbGVjdC1tb2RlLm1vZGVsJztcbmltcG9ydCB7IFZpZXdQb3NpdGlvbiB9IGZyb20gJy4uLy4uL3V0aWxpdHkvbW9kZWxzL3ZpZXctcG9zaXRpb24ubW9kZWwnO1xuXG5leHBvcnQgY29uc3QgRFJPUERPV05fQ09ORklHID0gbmV3IEluamVjdGlvblRva2VuPERhdGFUYWJsZUNvbmZpZz4oJ2Ryb3Bkb3duQ29uZmlnJyk7XG5cbi8qKlxuICogRHJvcGRvd24gY29uZmlnIHNlcnZpY2UuIEhvbGRzIGFsbCB0aGUgZ2xvYmFsIGNvbmZpZ3VyYXRpb25zIG9mIGRyb3Bkb3duIHdoaWNoIGNhbiBiZSBvdmVycmlkZGVuIHdoaWxlIGltcG9ydGluZyB0aGUgbW9kdWxlLlxuICogVXNlZCB0byBtYW5hZ2UgZHJvcGRvd24gYmFzZSBjb25maWd1cmF0aW9uIHN0YXRlLlxuICovXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRHJvcGRvd25Db25maWdTZXJ2aWNlIGltcGxlbWVudHMgRHJvcGRvd25Db25maWcge1xuICBwdWJsaWMgYmFzZVRyYW5zbGF0aW9uczogRHJvcGRvd25UcmFuc2xhdGlvbnMgPSB7XG4gICAgbm9EYXRhTWVzc2FnZTogJ05vIFJlc3VsdHMgQXZhaWxhYmxlJyxcbiAgICBmaWx0ZXJQbGFjZWhvbGRlcjogJ1NlYXJjaCcsXG4gICAgc2VsZWN0ZWRPcHRpb25XcmFwUGxhY2Vob2xkZXI6ICdPcHRpb25zJyxcbiAgICBzZWxlY3RQbGFjZWhvbGRlcjogJ1NlbGVjdCdcbiAgfTtcblxuICBwdWJsaWMgc2VsZWN0VHJhY2tCeSA9ICdrZXknO1xuICBwdWJsaWMgZGlzcGxheVRyYWNrQnkgPSAndmFsdWUnO1xuICBwdWJsaWMgZGlzYWJsZWRUcmFja0J5ID0gJ2Rpc2FibGVkJztcbiAgcHVibGljIG1lbnVQb3NpdGlvbjogVmlld1Bvc2l0aW9uID0gJ2JvdHRvbS1sZWZ0JztcbiAgcHVibGljIHNlbGVjdE1vZGU6IERyb3Bkb3duU2VsZWN0TW9kZSA9ICdzaW5nbGUtdG9nZ2xlJztcbiAgcHVibGljIGZpbHRlcmFibGUgPSBmYWxzZTtcbiAgcHVibGljIGZpbHRlckRlYm91bmNlID0gdHJ1ZTtcbiAgcHVibGljIGZpbHRlckRlYm91bmNlVGltZSA9IDUwMDtcbiAgcHVibGljIGdyb3VwQnlGaWVsZDogc3RyaW5nID0gdW5kZWZpbmVkO1xuICBwdWJsaWMgd3JhcERpc3BsYXlTZWxlY3RMaW1pdDogbnVtYmVyID0gdW5kZWZpbmVkO1xuICBwdWJsaWMgc2hvd1NlbGVjdGVkT3B0aW9uUmVtb3ZlQnV0dG9uID0gZmFsc2U7XG4gIHB1YmxpYyBzaG93Q2xlYXJTZWxlY3Rpb25CdXR0b24gPSBmYWxzZTtcbiAgcHVibGljIG1lbnVXaWR0aCA9IDMyMDtcbiAgcHVibGljIG1lbnVIZWlnaHQgPSAyNTA7XG4gIHB1YmxpYyBsb2FkT25TY3JvbGwgPSBmYWxzZTtcbiAgcHVibGljIGxvYWRWaWV3RGlzdGFuY2VSYXRpbyA9IDE7XG4gIHB1YmxpYyBsaW1pdCA9IDE1O1xuICBwdWJsaWMgbG9hZERhdGFPbkluaXQgPSB0cnVlO1xuICBwdWJsaWMgY2xvc2VNZW51T25TZWxlY3QgPSBmYWxzZTtcbiAgcHVibGljIHNob3dPcHRpb25TZWxlY3RDaGVja2JveCA9IGZhbHNlO1xuICBwdWJsaWMgc2hvd09wdGlvbkluZGV4ID0gZmFsc2U7XG4gIHB1YmxpYyBzaG93T3B0aW9uVHJhY2tCeSA9IGZhbHNlO1xuICBwdWJsaWMgbXVsdGlTZWxlY3RPcHRpb25NYXhXaWR0aCA9IDEzNTtcbiAgcHVibGljIHNldEZpcnN0T3B0aW9uU2VsZWN0ZWQgPSBmYWxzZTtcbiAgcHVibGljIHRyaWdnZXJTZWxlY3RDaGFuZ2VPbkluaXQgPSBmYWxzZTtcbiAgcHVibGljIHRyaWdnZXJTZWxlY3RDaGFuZ2VPbk1vZGVsVXBkYXRlID0gZmFsc2U7XG4gIHB1YmxpYyB0cmlnZ2VyU2VsZWN0Q2hhbmdlT25GaXJzdE9wdGlvblNlbGVjdCA9IGZhbHNlO1xuICBwdWJsaWMgZHluYW1pY0RpbWVuc2lvbkNhbGN1bGF0aW9uID0gZmFsc2U7XG4gIHB1YmxpYyBkeW5hbWljV2lkdGhSYXRpbyA9IDE7XG4gIHB1YmxpYyBkeW5hbWljSGVpZ2h0UmF0aW8gPSAwLjU7XG4gIHB1YmxpYyByZWxhdGl2ZVBhcmVudEVsZW1lbnQgPSB1bmRlZmluZWQ7XG5cbiAgY29uc3RydWN0b3IoQEluamVjdChEUk9QRE9XTl9DT05GSUcpIHByaXZhdGUgZHJvcGRvd25Db25maWc6IERyb3Bkb3duQ29uZmlnKSB7XG4gICAgaWYgKGRyb3Bkb3duQ29uZmlnKSB7XG4gICAgICBPYmplY3QuYXNzaWduKHRoaXMsIGRyb3Bkb3duQ29uZmlnKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogU2V0IGRyb3Bkb3duIHRyYW5zbGF0aW9ucy5cbiAgICogQHBhcmFtIHZhbHVlIERyb3Bkb3duIHRyYW5zbGF0aW9ucyBvYmplY3QuXG4gICAqL1xuICBwdWJsaWMgc2V0IHRyYW5zbGF0aW9ucyh2YWx1ZTogRHJvcGRvd25UcmFuc2xhdGlvbnMpIHtcbiAgICB0aGlzLmJhc2VUcmFuc2xhdGlvbnMgPSB7IC4uLnRoaXMuYmFzZVRyYW5zbGF0aW9ucywgLi4udmFsdWUgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgZHJvcGRvd24gdHJhbnNsYXRpb25zLlxuICAgKiBAcmV0dXJuIERyb3Bkb3duIHRyYW5zbGF0aW9ucy5cbiAgICovXG4gIHB1YmxpYyBnZXQgdHJhbnNsYXRpb25zKCk6IERyb3Bkb3duVHJhbnNsYXRpb25zIHtcbiAgICByZXR1cm4gdGhpcy5iYXNlVHJhbnNsYXRpb25zO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBkaXNwbGF5IHRleHQgYnkgc291cmNlIG9wdGlvbi5cbiAgICogQHBhcmFtIG9wdGlvbiBTb3VyY2Ugb3B0aW9uIG9iamVjdC5cbiAgICogQHJldHVybiBEaXNwbGF5IHRleHQuXG4gICAqL1xuICBwdWJsaWMgZ2V0RGlzcGxheVRleHQob3B0aW9uOiBhbnkpOiBzdHJpbmcge1xuICAgIHJldHVybiBnZXQob3B0aW9uLCB0aGlzLmRpc3BsYXlUcmFja0J5KTtcbiAgfVxufVxuIl19