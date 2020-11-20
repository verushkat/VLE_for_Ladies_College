/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { get } from '../../../utility/services/object-utility.class';
import { DropdownDataStateService } from '../../services/dropdown-data-state.service';
import { DropdownConfigService } from '../../services/dropdown-config.service';
import { DropdownEventStateService } from '../../services/dropdown-event-state.service';
/**
 * Dropdown options list component.
 */
export class DropdownOptionsComponent {
    /**
     * @param {?} config
     * @param {?} dataStateService
     * @param {?} eventStateService
     */
    constructor(config, dataStateService, eventStateService) {
        this.config = config;
        this.dataStateService = dataStateService;
        this.eventStateService = eventStateService;
    }
    /**
     * Unique data row tracking callback.
     * @param {?} index Current index.
     * @param {?} option Dropdown option reference.
     * @return {?}
     */
    optionTrackBy(index, option) {
        return option.index;
    }
    /**
     * Get selected state by option identifier.
     * @param {?} id Option select track by identifier.
     * @return {?}
     */
    getSelectedState(id) {
        if (this.config.selectMode === 'multi') {
            return this.dataStateService.selectedOptions.some((/**
             * @param {?} option
             * @return {?}
             */
            (option) => {
                return get(option, this.config.selectTrackBy) === id;
            }));
        }
        return get(this.dataStateService.selectedOption, this.config.selectTrackBy) === id;
    }
    /**
     * Option click event handler.
     * @param {?} option Option object reference.
     * @param {?} event Click event arguments object.
     * @return {?}
     */
    onOptionClick(option, event) {
        /** @type {?} */
        const target = (/** @type {?} */ (event.target));
        if (target && target.classList && target.classList.contains('ng-ignore-propagation')) {
            return;
        }
        this.toggleOptionSelectedState(option);
    }
    /**
     * Option checkbox click event handler.
     * @param {?} option Option object reference.
     * @param {?} event Click event arguments object.
     * @return {?}
     */
    onOptionCheckboxClick(option, event) {
        // Prevent single mode checkbox getting unchecked on tapping already selected.
        if (this.config.selectMode === 'single') {
            /** @type {?} */
            const selectedId = get(this.dataStateService.selectedOption, this.config.selectTrackBy);
            /** @type {?} */
            const id = get(option.option, this.config.selectTrackBy);
            if (selectedId === id) {
                event.preventDefault();
            }
        }
    }
    /**
     * Toggle option select state and update selected items depending on select mode.
     * @param {?} option Option object reference.
     * @return {?}
     */
    toggleOptionSelectedState(option) {
        /** @type {?} */
        const id = get(option.option, this.config.selectTrackBy);
        switch (this.config.selectMode) {
            case 'multi': {
                /** @type {?} */
                const selectedIndex = this.dataStateService.selectedOptions.findIndex((/**
                 * @param {?} value
                 * @return {?}
                 */
                (value) => {
                    return get(value, this.config.selectTrackBy) === id;
                }));
                if (selectedIndex < 0) {
                    this.dataStateService.selectedOptions.push(option.option);
                }
                else {
                    this.dataStateService.selectedOptions.splice(selectedIndex, 1);
                }
                this.eventStateService.selectChangeStream.emit(this.dataStateService.selectedOptions);
                break;
            }
            case 'single-toggle': {
                if (get(this.dataStateService.selectedOption, this.config.selectTrackBy) === id) {
                    this.dataStateService.selectedOption = undefined;
                }
                else {
                    this.dataStateService.selectedOption = option.option;
                }
                this.eventStateService.selectChangeStream.emit(this.dataStateService.selectedOption);
                break;
            }
            case 'single': {
                /** @type {?} */
                const selectedId = get(this.dataStateService.selectedOption, this.config.selectTrackBy);
                this.dataStateService.selectedOption = option.option;
                if (selectedId !== id) {
                    this.eventStateService.selectChangeStream.emit(this.dataStateService.selectedOption);
                }
                break;
            }
        }
        if (this.config.closeMenuOnSelect) {
            this.dataStateService.componentLoaderRef.hide();
        }
    }
}
DropdownOptionsComponent.decorators = [
    { type: Component, args: [{
                selector: 'ng-dropdown-options',
                template: "<ul class=\"ng-dropdown-option-container\" [class.ng-milti-selectable]=\"config.selectMode === 'multi'\">\n  <ng-container *ngIf=\"config.groupByField\">\n    <ng-container *ngFor=\"let groupedOption of dataStateService.dropdownOptionGroups\">\n      <li *ngIf=\"!dataStateService.dropdownOptionGroupHeaderTemplate\" class=\"ng-dropdown-group-heading\">\n        {{ groupedOption.groupName }}\n      </li>\n      <ng-container\n        *ngIf=\"dataStateService.dropdownOptionGroupHeaderTemplate\"\n        [ngTemplateOutlet]=\"dataStateService.dropdownOptionGroupHeaderTemplate\"\n        [ngTemplateOutletContext]=\"{ groupedOption: groupedOption }\"\n      >\n      </ng-container>\n      <ng-container *ngFor=\"let option of groupedOption.options; trackBy: optionTrackBy; let i = index;\">\n        <li (click)=\"onOptionClick(option, $event)\" [class.disabled]=\"option.disabled\" [class.ng-option-selected]=\"getSelectedState(option.id)\">\n          <ng-container *ngIf=\"!dataStateService.dropdownOptionTemplate\">\n            <a class=\"ng-dropdown-checkbox-container\" *ngIf=\"config.showOptionSelectCheckbox\">\n              <input type=\"checkbox\" class=\"ng-dropdown-checkbox-input ng-ignore-propagation\"\n                     [id]=\"dataStateService.getUniqueId('gop', i)\"\n                     [checked]=\"getSelectedState(option.id)\"\n                     [disabled]=\"option.disabled\"\n                     (change)=\"toggleOptionSelectedState(option)\"\n                     (click)=\"onOptionCheckboxClick(option, $event)\"\n              />\n              <label class=\"ng-ignore-propagation\" [for]=\"dataStateService.getUniqueId('gop', i)\">\n                <span class=\"ng-ignore-propagation\" [title]=\"option.text\">{{ option.text }}</span>\n              </label>\n            </a>\n            <span *ngIf=\"!config.showOptionSelectCheckbox\" [title]=\"option.text\">\n              <span *ngIf=\"config.showOptionIndex\">{{option.index}} -</span>\n              <span *ngIf=\"config.showOptionTrackBy\">{{option.id}} - </span>{{ option.text }}\n            </span>\n          </ng-container>\n          <ng-container\n            *ngIf=\"dataStateService.dropdownOptionTemplate\"\n            [ngTemplateOutlet]=\"dataStateService.dropdownOptionTemplate\"\n            [ngTemplateOutletContext]=\"{ option: option, selected: getSelectedState(option.id) }\"\n          >\n          </ng-container>\n        </li>\n      </ng-container>\n    </ng-container>\n  </ng-container>\n  <ng-container *ngIf=\"!config.groupByField\">\n    <ng-container *ngFor=\"let option of dataStateService.dropdownOptions; trackBy: optionTrackBy; index as i;\">\n      <li (click)=\"onOptionClick(option, $event)\" [class.disabled]=\"option.disabled\" [class.ng-option-selected]=\"getSelectedState(option.id)\">\n        <ng-container *ngIf=\"!dataStateService.dropdownOptionTemplate\">\n          <a class=\"ng-dropdown-checkbox-container\" *ngIf=\"config.showOptionSelectCheckbox\">\n            <input type=\"checkbox\" class=\"ng-dropdown-checkbox-input ng-ignore-propagation\"\n                   [id]=\"dataStateService.getUniqueId('sop', i)\"\n                   [checked]=\"getSelectedState(option.id)\"\n                   [disabled]=\"option.disabled\"\n                   (change)=\"toggleOptionSelectedState(option)\"\n                   (click)=\"onOptionCheckboxClick(option, $event)\"\n            />\n            <label class=\"ng-ignore-propagation\" [for]=\"dataStateService.getUniqueId('sop', i)\">\n              <span class=\"ng-ignore-propagation\" [title]=\"option.text\">{{ option.text }}</span>\n            </label>\n          </a>\n          <span *ngIf=\"!config.showOptionSelectCheckbox\" [title]=\"option.text\">\n              <span *ngIf=\"config.showOptionIndex\">{{option.index}} -</span>\n              <span *ngIf=\"config.showOptionTrackBy\">{{option.id}} - </span>{{ option.text }}\n            </span>\n        </ng-container>\n        <ng-container\n          *ngIf=\"dataStateService.dropdownOptionTemplate\"\n          [ngTemplateOutlet]=\"dataStateService.dropdownOptionTemplate\"\n          [ngTemplateOutletContext]=\"{ option: option, selected: getSelectedState(option.id) }\"\n        >\n        </ng-container>\n      </li>\n    </ng-container>\n  </ng-container>\n  <li *ngIf=\"!dataStateService.dataLoading && dataStateService.totalOptionCount === 0\" class=\"ng-dropdown-no-data\">\n    {{ config.translations.noDataMessage }}\n  </li>\n</ul>\n"
            }] }
];
/** @nocollapse */
DropdownOptionsComponent.ctorParameters = () => [
    { type: DropdownConfigService },
    { type: DropdownDataStateService },
    { type: DropdownEventStateService }
];
if (false) {
    /** @type {?} */
    DropdownOptionsComponent.prototype.config;
    /** @type {?} */
    DropdownOptionsComponent.prototype.dataStateService;
    /**
     * @type {?}
     * @private
     */
    DropdownOptionsComponent.prototype.eventStateService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcGRvd24tb3B0aW9ucy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9vcm5hbWVudHVtLyIsInNvdXJjZXMiOlsiZHJvcGRvd24vY29tcG9uZW50cy9kcm9wZG93bi1vcHRpb25zL2Ryb3Bkb3duLW9wdGlvbnMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTFDLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxnREFBZ0QsQ0FBQztBQUlyRSxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQztBQUN0RixPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUMvRSxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQzs7OztBQVN4RixNQUFNLE9BQU8sd0JBQXdCOzs7Ozs7SUFDbkMsWUFDUyxNQUE2QixFQUM3QixnQkFBMEMsRUFDekMsaUJBQTRDO1FBRjdDLFdBQU0sR0FBTixNQUFNLENBQXVCO1FBQzdCLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBMEI7UUFDekMsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUEyQjtJQUNuRCxDQUFDOzs7Ozs7O0lBT0csYUFBYSxDQUFDLEtBQWEsRUFBRSxNQUFzQjtRQUN4RCxPQUFPLE1BQU0sQ0FBQyxLQUFLLENBQUM7SUFDdEIsQ0FBQzs7Ozs7O0lBTU0sZ0JBQWdCLENBQUMsRUFBTztRQUM3QixJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxLQUFLLE9BQU8sRUFBRTtZQUN0QyxPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxlQUFlLENBQUMsSUFBSTs7OztZQUFDLENBQUMsTUFBVyxFQUFFLEVBQUU7Z0JBQ2hFLE9BQU8sR0FBRyxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUN2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QUFDLGNBQWMsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQztnQkFDdkYsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGNBQWMsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDO2dCQUVyRCxJQUFJLFVBQVUsS0FBSyxFQUFFLEVBQUU7b0JBQ3JCLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGNBQWMsQ0FBQyxDQUFDO2lCQUN0RjtnQkFDRCxNQUFNO2FBQ1A7U0FDRjtRQUVELElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsRUFBRTtZQUNqQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsa0JBQWtCLENBQUMsSUFBSSxFQUFFLENBQUM7U0FDakQ7SUFDSCxDQUFDOzs7WUE5R0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxxQkFBcUI7Z0JBQy9CLHk2SUFBZ0Q7YUFDakQ7Ozs7WUFUUSxxQkFBcUI7WUFEckIsd0JBQXdCO1lBRXhCLHlCQUF5Qjs7OztJQVc5QiwwQ0FBb0M7O0lBQ3BDLG9EQUFpRDs7Ozs7SUFDakQscURBQW9EIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IGdldCB9IGZyb20gJy4uLy4uLy4uL3V0aWxpdHkvc2VydmljZXMvb2JqZWN0LXV0aWxpdHkuY2xhc3MnO1xuXG5pbXBvcnQgeyBEcm9wZG93bk9wdGlvbiB9IGZyb20gJy4uLy4uL21vZGVscy9kcm9wZG93bi1vcHRpb24ubW9kZWwnO1xuXG5pbXBvcnQgeyBEcm9wZG93bkRhdGFTdGF0ZVNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9kcm9wZG93bi1kYXRhLXN0YXRlLnNlcnZpY2UnO1xuaW1wb3J0IHsgRHJvcGRvd25Db25maWdTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvZHJvcGRvd24tY29uZmlnLnNlcnZpY2UnO1xuaW1wb3J0IHsgRHJvcGRvd25FdmVudFN0YXRlU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2Ryb3Bkb3duLWV2ZW50LXN0YXRlLnNlcnZpY2UnO1xuXG4vKipcbiAqIERyb3Bkb3duIG9wdGlvbnMgbGlzdCBjb21wb25lbnQuXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25nLWRyb3Bkb3duLW9wdGlvbnMnLFxuICB0ZW1wbGF0ZVVybDogJy4vZHJvcGRvd24tb3B0aW9ucy5jb21wb25lbnQuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgRHJvcGRvd25PcHRpb25zQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIGNvbmZpZzogRHJvcGRvd25Db25maWdTZXJ2aWNlLFxuICAgIHB1YmxpYyBkYXRhU3RhdGVTZXJ2aWNlOiBEcm9wZG93bkRhdGFTdGF0ZVNlcnZpY2UsXG4gICAgcHJpdmF0ZSBldmVudFN0YXRlU2VydmljZTogRHJvcGRvd25FdmVudFN0YXRlU2VydmljZVxuICApIHt9XG5cbiAgLyoqXG4gICAqIFVuaXF1ZSBkYXRhIHJvdyB0cmFja2luZyBjYWxsYmFjay5cbiAgICogQHBhcmFtIGluZGV4IEN1cnJlbnQgaW5kZXguXG4gICAqIEBwYXJhbSBvcHRpb24gRHJvcGRvd24gb3B0aW9uIHJlZmVyZW5jZS5cbiAgICovXG4gIHB1YmxpYyBvcHRpb25UcmFja0J5KGluZGV4OiBudW1iZXIsIG9wdGlvbjogRHJvcGRvd25PcHRpb24pOiBudW1iZXIge1xuICAgIHJldHVybiBvcHRpb24uaW5kZXg7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHNlbGVjdGVkIHN0YXRlIGJ5IG9wdGlvbiBpZGVudGlmaWVyLlxuICAgKiBAcGFyYW0gaWQgT3B0aW9uIHNlbGVjdCB0cmFjayBieSBpZGVudGlmaWVyLlxuICAgKi9cbiAgcHVibGljIGdldFNlbGVjdGVkU3RhdGUoaWQ6IGFueSk6IGJvb2xlYW4ge1xuICAgIGlmICh0aGlzLmNvbmZpZy5zZWxlY3RNb2RlID09PSAnbXVsdGknKSB7XG4gICAgICByZXR1cm4gdGhpcy5kYXRhU3RhdGVTZXJ2aWNlLnNlbGVjdGVkT3B0aW9ucy5zb21lKChvcHRpb246IGFueSkgPT4ge1xuICAgICAgICByZXR1cm4gZ2V0KG9wdGlvbiwgdGhpcy5jb25maWcuc2VsZWN0VHJhY2tCeSkgPT09IGlkO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGdldCh0aGlzLmRhdGFTdGF0ZVNlcnZpY2Uuc2VsZWN0ZWRPcHRpb24sIHRoaXMuY29uZmlnLnNlbGVjdFRyYWNrQnkpID09PSBpZDtcbiAgfVxuXG4gIC8qKlxuICAgKiBPcHRpb24gY2xpY2sgZXZlbnQgaGFuZGxlci5cbiAgICogQHBhcmFtIG9wdGlvbiBPcHRpb24gb2JqZWN0IHJlZmVyZW5jZS5cbiAgICogQHBhcmFtIGV2ZW50IENsaWNrIGV2ZW50IGFyZ3VtZW50cyBvYmplY3QuXG4gICAqL1xuICBwdWJsaWMgb25PcHRpb25DbGljayhvcHRpb246IERyb3Bkb3duT3B0aW9uLCBldmVudDogTW91c2VFdmVudCk6IHZvaWQge1xuICAgIGNvbnN0IHRhcmdldCA9IGV2ZW50LnRhcmdldCBhcyBIVE1MRWxlbWVudDtcbiAgICBpZiAodGFyZ2V0ICYmIHRhcmdldC5jbGFzc0xpc3QgJiYgdGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnbmctaWdub3JlLXByb3BhZ2F0aW9uJykpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLnRvZ2dsZU9wdGlvblNlbGVjdGVkU3RhdGUob3B0aW9uKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBPcHRpb24gY2hlY2tib3ggY2xpY2sgZXZlbnQgaGFuZGxlci5cbiAgICogQHBhcmFtIG9wdGlvbiBPcHRpb24gb2JqZWN0IHJlZmVyZW5jZS5cbiAgICogQHBhcmFtIGV2ZW50IENsaWNrIGV2ZW50IGFyZ3VtZW50cyBvYmplY3QuXG4gICAqL1xuICBwdWJsaWMgb25PcHRpb25DaGVja2JveENsaWNrKG9wdGlvbjogRHJvcGRvd25PcHRpb24sIGV2ZW50OiBNb3VzZUV2ZW50KTogdm9pZCB7XG4gICAgLy8gUHJldmVudCBzaW5nbGUgbW9kZSBjaGVja2JveCBnZXR0aW5nIHVuY2hlY2tlZCBvbiB0YXBwaW5nIGFscmVhZHkgc2VsZWN0ZWQuXG4gICAgaWYgKHRoaXMuY29uZmlnLnNlbGVjdE1vZGUgPT09ICdzaW5nbGUnKSB7XG4gICAgICBjb25zdCBzZWxlY3RlZElkID0gZ2V0KHRoaXMuZGF0YVN0YXRlU2VydmljZS5zZWxlY3RlZE9wdGlvbiwgdGhpcy5jb25maWcuc2VsZWN0VHJhY2tCeSk7XG4gICAgICBjb25zdCBpZCA9IGdldChvcHRpb24ub3B0aW9uLCB0aGlzLmNvbmZpZy5zZWxlY3RUcmFja0J5KTtcbiAgICAgIGlmIChzZWxlY3RlZElkID09PSBpZCkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBUb2dnbGUgb3B0aW9uIHNlbGVjdCBzdGF0ZSBhbmQgdXBkYXRlIHNlbGVjdGVkIGl0ZW1zIGRlcGVuZGluZyBvbiBzZWxlY3QgbW9kZS5cbiAgICogQHBhcmFtIG9wdGlvbiBPcHRpb24gb2JqZWN0IHJlZmVyZW5jZS5cbiAgICovXG4gIHB1YmxpYyB0b2dnbGVPcHRpb25TZWxlY3RlZFN0YXRlKG9wdGlvbjogRHJvcGRvd25PcHRpb24pOiB2b2lkIHtcbiAgICBjb25zdCBpZCA9IGdldChvcHRpb24ub3B0aW9uLCB0aGlzLmNvbmZpZy5zZWxlY3RUcmFja0J5KTtcblxuICAgIHN3aXRjaCAodGhpcy5jb25maWcuc2VsZWN0TW9kZSkge1xuICAgICAgY2FzZSAnbXVsdGknOiB7XG4gICAgICAgIGNvbnN0IHNlbGVjdGVkSW5kZXggPSB0aGlzLmRhdGFTdGF0ZVNlcnZpY2Uuc2VsZWN0ZWRPcHRpb25zLmZpbmRJbmRleCgodmFsdWU6IGFueSkgPT4ge1xuICAgICAgICAgIHJldHVybiBnZXQodmFsdWUsIHRoaXMuY29uZmlnLnNlbGVjdFRyYWNrQnkpID09PSBpZDtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKHNlbGVjdGVkSW5kZXggPCAwKSB7XG4gICAgICAgICAgdGhpcy5kYXRhU3RhdGVTZXJ2aWNlLnNlbGVjdGVkT3B0aW9ucy5wdXNoKG9wdGlvbi5vcHRpb24pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuZGF0YVN0YXRlU2VydmljZS5zZWxlY3RlZE9wdGlvbnMuc3BsaWNlKHNlbGVjdGVkSW5kZXgsIDEpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5ldmVudFN0YXRlU2VydmljZS5zZWxlY3RDaGFuZ2VTdHJlYW0uZW1pdCh0aGlzLmRhdGFTdGF0ZVNlcnZpY2Uuc2VsZWN0ZWRPcHRpb25zKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlICdzaW5nbGUtdG9nZ2xlJzoge1xuICAgICAgICBpZiAoZ2V0KHRoaXMuZGF0YVN0YXRlU2VydmljZS5zZWxlY3RlZE9wdGlvbiwgdGhpcy5jb25maWcuc2VsZWN0VHJhY2tCeSkgPT09IGlkKSB7XG4gICAgICAgICAgdGhpcy5kYXRhU3RhdGVTZXJ2aWNlLnNlbGVjdGVkT3B0aW9uID0gdW5kZWZpbmVkO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuZGF0YVN0YXRlU2VydmljZS5zZWxlY3RlZE9wdGlvbiA9IG9wdGlvbi5vcHRpb247XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmV2ZW50U3RhdGVTZXJ2aWNlLnNlbGVjdENoYW5nZVN0cmVhbS5lbWl0KHRoaXMuZGF0YVN0YXRlU2VydmljZS5zZWxlY3RlZE9wdGlvbik7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSAnc2luZ2xlJzoge1xuICAgICAgICBjb25zdCBzZWxlY3RlZElkID0gZ2V0KHRoaXMuZGF0YVN0YXRlU2VydmljZS5zZWxlY3RlZE9wdGlvbiwgdGhpcy5jb25maWcuc2VsZWN0VHJhY2tCeSk7XG4gICAgICAgIHRoaXMuZGF0YVN0YXRlU2VydmljZS5zZWxlY3RlZE9wdGlvbiA9IG9wdGlvbi5vcHRpb247XG5cbiAgICAgICAgaWYgKHNlbGVjdGVkSWQgIT09IGlkKSB7XG4gICAgICAgICAgdGhpcy5ldmVudFN0YXRlU2VydmljZS5zZWxlY3RDaGFuZ2VTdHJlYW0uZW1pdCh0aGlzLmRhdGFTdGF0ZVNlcnZpY2Uuc2VsZWN0ZWRPcHRpb24pO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0aGlzLmNvbmZpZy5jbG9zZU1lbnVPblNlbGVjdCkge1xuICAgICAgdGhpcy5kYXRhU3RhdGVTZXJ2aWNlLmNvbXBvbmVudExvYWRlclJlZi5oaWRlKCk7XG4gICAgfVxuICB9XG59XG4iXX0=