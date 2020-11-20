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
var DropdownOptionsComponent = /** @class */ (function () {
    function DropdownOptionsComponent(config, dataStateService, eventStateService) {
        this.config = config;
        this.dataStateService = dataStateService;
        this.eventStateService = eventStateService;
    }
    /**
     * Unique data row tracking callback.
     * @param index Current index.
     * @param option Dropdown option reference.
     */
    /**
     * Unique data row tracking callback.
     * @param {?} index Current index.
     * @param {?} option Dropdown option reference.
     * @return {?}
     */
    DropdownOptionsComponent.prototype.optionTrackBy = /**
     * Unique data row tracking callback.
     * @param {?} index Current index.
     * @param {?} option Dropdown option reference.
     * @return {?}
     */
    function (index, option) {
        return option.index;
    };
    /**
     * Get selected state by option identifier.
     * @param id Option select track by identifier.
     */
    /**
     * Get selected state by option identifier.
     * @param {?} id Option select track by identifier.
     * @return {?}
     */
    DropdownOptionsComponent.prototype.getSelectedState = /**
     * Get selected state by option identifier.
     * @param {?} id Option select track by identifier.
     * @return {?}
     */
    function (id) {
        var _this = this;
        if (this.config.selectMode === 'multi') {
            return this.dataStateService.selectedOptions.some((/**
             * @param {?} option
             * @return {?}
             */
            function (option) {
                return get(option, _this.config.selectTrackBy) === id;
            }));
        }
        return get(this.dataStateService.selectedOption, this.config.selectTrackBy) === id;
    };
    /**
     * Option click event handler.
     * @param option Option object reference.
     * @param event Click event arguments object.
     */
    /**
     * Option click event handler.
     * @param {?} option Option object reference.
     * @param {?} event Click event arguments object.
     * @return {?}
     */
    DropdownOptionsComponent.prototype.onOptionClick = /**
     * Option click event handler.
     * @param {?} option Option object reference.
     * @param {?} event Click event arguments object.
     * @return {?}
     */
    function (option, event) {
        /** @type {?} */
        var target = (/** @type {?} */ (event.target));
        if (target && target.classList && target.classList.contains('ng-ignore-propagation')) {
            return;
        }
        this.toggleOptionSelectedState(option);
    };
    /**
     * Option checkbox click event handler.
     * @param option Option object reference.
     * @param event Click event arguments object.
     */
    /**
     * Option checkbox click event handler.
     * @param {?} option Option object reference.
     * @param {?} event Click event arguments object.
     * @return {?}
     */
    DropdownOptionsComponent.prototype.onOptionCheckboxClick = /**
     * Option checkbox click event handler.
     * @param {?} option Option object reference.
     * @param {?} event Click event arguments object.
     * @return {?}
     */
    function (option, event) {
        // Prevent single mode checkbox getting unchecked on tapping already selected.
        if (this.config.selectMode === 'single') {
            /** @type {?} */
            var selectedId = get(this.dataStateService.selectedOption, this.config.selectTrackBy);
            /** @type {?} */
            var id = get(option.option, this.config.selectTrackBy);
            if (selectedId === id) {
                event.preventDefault();
            }
        }
    };
    /**
     * Toggle option select state and update selected items depending on select mode.
     * @param option Option object reference.
     */
    /**
     * Toggle option select state and update selected items depending on select mode.
     * @param {?} option Option object reference.
     * @return {?}
     */
    DropdownOptionsComponent.prototype.toggleOptionSelectedState = /**
     * Toggle option select state and update selected items depending on select mode.
     * @param {?} option Option object reference.
     * @return {?}
     */
    function (option) {
        var _this = this;
        /** @type {?} */
        var id = get(option.option, this.config.selectTrackBy);
        switch (this.config.selectMode) {
            case 'multi': {
                /** @type {?} */
                var selectedIndex = this.dataStateService.selectedOptions.findIndex((/**
                 * @param {?} value
                 * @return {?}
                 */
                function (value) {
                    return get(value, _this.config.selectTrackBy) === id;
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
                var selectedId = get(this.dataStateService.selectedOption, this.config.selectTrackBy);
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
    };
    DropdownOptionsComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ng-dropdown-options',
                    template: "<ul class=\"ng-dropdown-option-container\" [class.ng-milti-selectable]=\"config.selectMode === 'multi'\">\n  <ng-container *ngIf=\"config.groupByField\">\n    <ng-container *ngFor=\"let groupedOption of dataStateService.dropdownOptionGroups\">\n      <li *ngIf=\"!dataStateService.dropdownOptionGroupHeaderTemplate\" class=\"ng-dropdown-group-heading\">\n        {{ groupedOption.groupName }}\n      </li>\n      <ng-container\n        *ngIf=\"dataStateService.dropdownOptionGroupHeaderTemplate\"\n        [ngTemplateOutlet]=\"dataStateService.dropdownOptionGroupHeaderTemplate\"\n        [ngTemplateOutletContext]=\"{ groupedOption: groupedOption }\"\n      >\n      </ng-container>\n      <ng-container *ngFor=\"let option of groupedOption.options; trackBy: optionTrackBy; let i = index;\">\n        <li (click)=\"onOptionClick(option, $event)\" [class.disabled]=\"option.disabled\" [class.ng-option-selected]=\"getSelectedState(option.id)\">\n          <ng-container *ngIf=\"!dataStateService.dropdownOptionTemplate\">\n            <a class=\"ng-dropdown-checkbox-container\" *ngIf=\"config.showOptionSelectCheckbox\">\n              <input type=\"checkbox\" class=\"ng-dropdown-checkbox-input ng-ignore-propagation\"\n                     [id]=\"dataStateService.getUniqueId('gop', i)\"\n                     [checked]=\"getSelectedState(option.id)\"\n                     [disabled]=\"option.disabled\"\n                     (change)=\"toggleOptionSelectedState(option)\"\n                     (click)=\"onOptionCheckboxClick(option, $event)\"\n              />\n              <label class=\"ng-ignore-propagation\" [for]=\"dataStateService.getUniqueId('gop', i)\">\n                <span class=\"ng-ignore-propagation\" [title]=\"option.text\">{{ option.text }}</span>\n              </label>\n            </a>\n            <span *ngIf=\"!config.showOptionSelectCheckbox\" [title]=\"option.text\">\n              <span *ngIf=\"config.showOptionIndex\">{{option.index}} -</span>\n              <span *ngIf=\"config.showOptionTrackBy\">{{option.id}} - </span>{{ option.text }}\n            </span>\n          </ng-container>\n          <ng-container\n            *ngIf=\"dataStateService.dropdownOptionTemplate\"\n            [ngTemplateOutlet]=\"dataStateService.dropdownOptionTemplate\"\n            [ngTemplateOutletContext]=\"{ option: option, selected: getSelectedState(option.id) }\"\n          >\n          </ng-container>\n        </li>\n      </ng-container>\n    </ng-container>\n  </ng-container>\n  <ng-container *ngIf=\"!config.groupByField\">\n    <ng-container *ngFor=\"let option of dataStateService.dropdownOptions; trackBy: optionTrackBy; index as i;\">\n      <li (click)=\"onOptionClick(option, $event)\" [class.disabled]=\"option.disabled\" [class.ng-option-selected]=\"getSelectedState(option.id)\">\n        <ng-container *ngIf=\"!dataStateService.dropdownOptionTemplate\">\n          <a class=\"ng-dropdown-checkbox-container\" *ngIf=\"config.showOptionSelectCheckbox\">\n            <input type=\"checkbox\" class=\"ng-dropdown-checkbox-input ng-ignore-propagation\"\n                   [id]=\"dataStateService.getUniqueId('sop', i)\"\n                   [checked]=\"getSelectedState(option.id)\"\n                   [disabled]=\"option.disabled\"\n                   (change)=\"toggleOptionSelectedState(option)\"\n                   (click)=\"onOptionCheckboxClick(option, $event)\"\n            />\n            <label class=\"ng-ignore-propagation\" [for]=\"dataStateService.getUniqueId('sop', i)\">\n              <span class=\"ng-ignore-propagation\" [title]=\"option.text\">{{ option.text }}</span>\n            </label>\n          </a>\n          <span *ngIf=\"!config.showOptionSelectCheckbox\" [title]=\"option.text\">\n              <span *ngIf=\"config.showOptionIndex\">{{option.index}} -</span>\n              <span *ngIf=\"config.showOptionTrackBy\">{{option.id}} - </span>{{ option.text }}\n            </span>\n        </ng-container>\n        <ng-container\n          *ngIf=\"dataStateService.dropdownOptionTemplate\"\n          [ngTemplateOutlet]=\"dataStateService.dropdownOptionTemplate\"\n          [ngTemplateOutletContext]=\"{ option: option, selected: getSelectedState(option.id) }\"\n        >\n        </ng-container>\n      </li>\n    </ng-container>\n  </ng-container>\n  <li *ngIf=\"!dataStateService.dataLoading && dataStateService.totalOptionCount === 0\" class=\"ng-dropdown-no-data\">\n    {{ config.translations.noDataMessage }}\n  </li>\n</ul>\n"
                }] }
    ];
    /** @nocollapse */
    DropdownOptionsComponent.ctorParameters = function () { return [
        { type: DropdownConfigService },
        { type: DropdownDataStateService },
        { type: DropdownEventStateService }
    ]; };
    return DropdownOptionsComponent;
}());
export { DropdownOptionsComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcGRvd24tb3B0aW9ucy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9vcm5hbWVudHVtLyIsInNvdXJjZXMiOlsiZHJvcGRvd24vY29tcG9uZW50cy9kcm9wZG93bi1vcHRpb25zL2Ryb3Bkb3duLW9wdGlvbnMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTFDLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxnREFBZ0QsQ0FBQztBQUlyRSxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQztBQUN0RixPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUMvRSxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQzs7OztBQUt4RjtJQUtFLGtDQUNTLE1BQTZCLEVBQzdCLGdCQUEwQyxFQUN6QyxpQkFBNEM7UUFGN0MsV0FBTSxHQUFOLE1BQU0sQ0FBdUI7UUFDN0IscUJBQWdCLEdBQWhCLGdCQUFnQixDQUEwQjtRQUN6QyxzQkFBaUIsR0FBakIsaUJBQWlCLENBQTJCO0lBQ25ELENBQUM7SUFFSjs7OztPQUlHOzs7Ozs7O0lBQ0ksZ0RBQWE7Ozs7OztJQUFwQixVQUFxQixLQUFhLEVBQUUsTUFBc0I7UUFDeEQsT0FBTyxNQUFNLENBQUMsS0FBSyxDQUFDO0lBQ3RCLENBQUM7SUFFRDs7O09BR0c7Ozs7OztJQUNJLG1EQUFnQjs7Ozs7SUFBdkIsVUFBd0IsRUFBTztRQUEvQixpQkFRQztRQVBDLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLEtBQUssT0FBTyxFQUFFO1lBQ3RDLE9BQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFDLGVBQWUsQ0FBQyxJQUFJOzs7O1lBQUMsVUFBQyxNQUFXO2dCQUM1RCxPQUFPLEdBQUcsQ0FBQyxNQUFNLEVBQUUsS0FBSSxDQUFDLE1BQU0sQ0FBQyxh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QUMsY0FBYyxDQUFDLENBQUM7Z0JBQ3JGLE1BQU07YUFDUDtZQUNELEtBQUssUUFBUSxDQUFDLENBQUM7O29CQUNQLFVBQVUsR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGNBQWMsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQztnQkFDdkYsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGNBQWMsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDO2dCQUVyRCxJQUFJLFVBQVUsS0FBSyxFQUFFLEVBQUU7b0JBQ3JCLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGNBQWMsQ0FBQyxDQUFDO2lCQUN0RjtnQkFDRCxNQUFNO2FBQ1A7U0FDRjtRQUVELElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsRUFBRTtZQUNqQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsa0JBQWtCLENBQUMsSUFBSSxFQUFFLENBQUM7U0FDakQ7SUFDSCxDQUFDOztnQkE5R0YsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxxQkFBcUI7b0JBQy9CLHk2SUFBZ0Q7aUJBQ2pEOzs7O2dCQVRRLHFCQUFxQjtnQkFEckIsd0JBQXdCO2dCQUV4Qix5QkFBeUI7O0lBb0hsQywrQkFBQztDQUFBLEFBL0dELElBK0dDO1NBM0dZLHdCQUF3Qjs7O0lBRWpDLDBDQUFvQzs7SUFDcEMsb0RBQWlEOzs7OztJQUNqRCxxREFBb0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgZ2V0IH0gZnJvbSAnLi4vLi4vLi4vdXRpbGl0eS9zZXJ2aWNlcy9vYmplY3QtdXRpbGl0eS5jbGFzcyc7XG5cbmltcG9ydCB7IERyb3Bkb3duT3B0aW9uIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2Ryb3Bkb3duLW9wdGlvbi5tb2RlbCc7XG5cbmltcG9ydCB7IERyb3Bkb3duRGF0YVN0YXRlU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2Ryb3Bkb3duLWRhdGEtc3RhdGUuc2VydmljZSc7XG5pbXBvcnQgeyBEcm9wZG93bkNvbmZpZ1NlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9kcm9wZG93bi1jb25maWcuc2VydmljZSc7XG5pbXBvcnQgeyBEcm9wZG93bkV2ZW50U3RhdGVTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvZHJvcGRvd24tZXZlbnQtc3RhdGUuc2VydmljZSc7XG5cbi8qKlxuICogRHJvcGRvd24gb3B0aW9ucyBsaXN0IGNvbXBvbmVudC5cbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbmctZHJvcGRvd24tb3B0aW9ucycsXG4gIHRlbXBsYXRlVXJsOiAnLi9kcm9wZG93bi1vcHRpb25zLmNvbXBvbmVudC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBEcm9wZG93bk9wdGlvbnNDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgY29uZmlnOiBEcm9wZG93bkNvbmZpZ1NlcnZpY2UsXG4gICAgcHVibGljIGRhdGFTdGF0ZVNlcnZpY2U6IERyb3Bkb3duRGF0YVN0YXRlU2VydmljZSxcbiAgICBwcml2YXRlIGV2ZW50U3RhdGVTZXJ2aWNlOiBEcm9wZG93bkV2ZW50U3RhdGVTZXJ2aWNlXG4gICkge31cblxuICAvKipcbiAgICogVW5pcXVlIGRhdGEgcm93IHRyYWNraW5nIGNhbGxiYWNrLlxuICAgKiBAcGFyYW0gaW5kZXggQ3VycmVudCBpbmRleC5cbiAgICogQHBhcmFtIG9wdGlvbiBEcm9wZG93biBvcHRpb24gcmVmZXJlbmNlLlxuICAgKi9cbiAgcHVibGljIG9wdGlvblRyYWNrQnkoaW5kZXg6IG51bWJlciwgb3B0aW9uOiBEcm9wZG93bk9wdGlvbik6IG51bWJlciB7XG4gICAgcmV0dXJuIG9wdGlvbi5pbmRleDtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgc2VsZWN0ZWQgc3RhdGUgYnkgb3B0aW9uIGlkZW50aWZpZXIuXG4gICAqIEBwYXJhbSBpZCBPcHRpb24gc2VsZWN0IHRyYWNrIGJ5IGlkZW50aWZpZXIuXG4gICAqL1xuICBwdWJsaWMgZ2V0U2VsZWN0ZWRTdGF0ZShpZDogYW55KTogYm9vbGVhbiB7XG4gICAgaWYgKHRoaXMuY29uZmlnLnNlbGVjdE1vZGUgPT09ICdtdWx0aScpIHtcbiAgICAgIHJldHVybiB0aGlzLmRhdGFTdGF0ZVNlcnZpY2Uuc2VsZWN0ZWRPcHRpb25zLnNvbWUoKG9wdGlvbjogYW55KSA9PiB7XG4gICAgICAgIHJldHVybiBnZXQob3B0aW9uLCB0aGlzLmNvbmZpZy5zZWxlY3RUcmFja0J5KSA9PT0gaWQ7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gZ2V0KHRoaXMuZGF0YVN0YXRlU2VydmljZS5zZWxlY3RlZE9wdGlvbiwgdGhpcy5jb25maWcuc2VsZWN0VHJhY2tCeSkgPT09IGlkO1xuICB9XG5cbiAgLyoqXG4gICAqIE9wdGlvbiBjbGljayBldmVudCBoYW5kbGVyLlxuICAgKiBAcGFyYW0gb3B0aW9uIE9wdGlvbiBvYmplY3QgcmVmZXJlbmNlLlxuICAgKiBAcGFyYW0gZXZlbnQgQ2xpY2sgZXZlbnQgYXJndW1lbnRzIG9iamVjdC5cbiAgICovXG4gIHB1YmxpYyBvbk9wdGlvbkNsaWNrKG9wdGlvbjogRHJvcGRvd25PcHRpb24sIGV2ZW50OiBNb3VzZUV2ZW50KTogdm9pZCB7XG4gICAgY29uc3QgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0IGFzIEhUTUxFbGVtZW50O1xuICAgIGlmICh0YXJnZXQgJiYgdGFyZ2V0LmNsYXNzTGlzdCAmJiB0YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCduZy1pZ25vcmUtcHJvcGFnYXRpb24nKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMudG9nZ2xlT3B0aW9uU2VsZWN0ZWRTdGF0ZShvcHRpb24pO1xuICB9XG5cbiAgLyoqXG4gICAqIE9wdGlvbiBjaGVja2JveCBjbGljayBldmVudCBoYW5kbGVyLlxuICAgKiBAcGFyYW0gb3B0aW9uIE9wdGlvbiBvYmplY3QgcmVmZXJlbmNlLlxuICAgKiBAcGFyYW0gZXZlbnQgQ2xpY2sgZXZlbnQgYXJndW1lbnRzIG9iamVjdC5cbiAgICovXG4gIHB1YmxpYyBvbk9wdGlvbkNoZWNrYm94Q2xpY2sob3B0aW9uOiBEcm9wZG93bk9wdGlvbiwgZXZlbnQ6IE1vdXNlRXZlbnQpOiB2b2lkIHtcbiAgICAvLyBQcmV2ZW50IHNpbmdsZSBtb2RlIGNoZWNrYm94IGdldHRpbmcgdW5jaGVja2VkIG9uIHRhcHBpbmcgYWxyZWFkeSBzZWxlY3RlZC5cbiAgICBpZiAodGhpcy5jb25maWcuc2VsZWN0TW9kZSA9PT0gJ3NpbmdsZScpIHtcbiAgICAgIGNvbnN0IHNlbGVjdGVkSWQgPSBnZXQodGhpcy5kYXRhU3RhdGVTZXJ2aWNlLnNlbGVjdGVkT3B0aW9uLCB0aGlzLmNvbmZpZy5zZWxlY3RUcmFja0J5KTtcbiAgICAgIGNvbnN0IGlkID0gZ2V0KG9wdGlvbi5vcHRpb24sIHRoaXMuY29uZmlnLnNlbGVjdFRyYWNrQnkpO1xuICAgICAgaWYgKHNlbGVjdGVkSWQgPT09IGlkKSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFRvZ2dsZSBvcHRpb24gc2VsZWN0IHN0YXRlIGFuZCB1cGRhdGUgc2VsZWN0ZWQgaXRlbXMgZGVwZW5kaW5nIG9uIHNlbGVjdCBtb2RlLlxuICAgKiBAcGFyYW0gb3B0aW9uIE9wdGlvbiBvYmplY3QgcmVmZXJlbmNlLlxuICAgKi9cbiAgcHVibGljIHRvZ2dsZU9wdGlvblNlbGVjdGVkU3RhdGUob3B0aW9uOiBEcm9wZG93bk9wdGlvbik6IHZvaWQge1xuICAgIGNvbnN0IGlkID0gZ2V0KG9wdGlvbi5vcHRpb24sIHRoaXMuY29uZmlnLnNlbGVjdFRyYWNrQnkpO1xuXG4gICAgc3dpdGNoICh0aGlzLmNvbmZpZy5zZWxlY3RNb2RlKSB7XG4gICAgICBjYXNlICdtdWx0aSc6IHtcbiAgICAgICAgY29uc3Qgc2VsZWN0ZWRJbmRleCA9IHRoaXMuZGF0YVN0YXRlU2VydmljZS5zZWxlY3RlZE9wdGlvbnMuZmluZEluZGV4KCh2YWx1ZTogYW55KSA9PiB7XG4gICAgICAgICAgcmV0dXJuIGdldCh2YWx1ZSwgdGhpcy5jb25maWcuc2VsZWN0VHJhY2tCeSkgPT09IGlkO1xuICAgICAgICB9KTtcblxuICAgICAgICBpZiAoc2VsZWN0ZWRJbmRleCA8IDApIHtcbiAgICAgICAgICB0aGlzLmRhdGFTdGF0ZVNlcnZpY2Uuc2VsZWN0ZWRPcHRpb25zLnB1c2gob3B0aW9uLm9wdGlvbik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5kYXRhU3RhdGVTZXJ2aWNlLnNlbGVjdGVkT3B0aW9ucy5zcGxpY2Uoc2VsZWN0ZWRJbmRleCwgMSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmV2ZW50U3RhdGVTZXJ2aWNlLnNlbGVjdENoYW5nZVN0cmVhbS5lbWl0KHRoaXMuZGF0YVN0YXRlU2VydmljZS5zZWxlY3RlZE9wdGlvbnMpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgJ3NpbmdsZS10b2dnbGUnOiB7XG4gICAgICAgIGlmIChnZXQodGhpcy5kYXRhU3RhdGVTZXJ2aWNlLnNlbGVjdGVkT3B0aW9uLCB0aGlzLmNvbmZpZy5zZWxlY3RUcmFja0J5KSA9PT0gaWQpIHtcbiAgICAgICAgICB0aGlzLmRhdGFTdGF0ZVNlcnZpY2Uuc2VsZWN0ZWRPcHRpb24gPSB1bmRlZmluZWQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5kYXRhU3RhdGVTZXJ2aWNlLnNlbGVjdGVkT3B0aW9uID0gb3B0aW9uLm9wdGlvbjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuZXZlbnRTdGF0ZVNlcnZpY2Uuc2VsZWN0Q2hhbmdlU3RyZWFtLmVtaXQodGhpcy5kYXRhU3RhdGVTZXJ2aWNlLnNlbGVjdGVkT3B0aW9uKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlICdzaW5nbGUnOiB7XG4gICAgICAgIGNvbnN0IHNlbGVjdGVkSWQgPSBnZXQodGhpcy5kYXRhU3RhdGVTZXJ2aWNlLnNlbGVjdGVkT3B0aW9uLCB0aGlzLmNvbmZpZy5zZWxlY3RUcmFja0J5KTtcbiAgICAgICAgdGhpcy5kYXRhU3RhdGVTZXJ2aWNlLnNlbGVjdGVkT3B0aW9uID0gb3B0aW9uLm9wdGlvbjtcblxuICAgICAgICBpZiAoc2VsZWN0ZWRJZCAhPT0gaWQpIHtcbiAgICAgICAgICB0aGlzLmV2ZW50U3RhdGVTZXJ2aWNlLnNlbGVjdENoYW5nZVN0cmVhbS5lbWl0KHRoaXMuZGF0YVN0YXRlU2VydmljZS5zZWxlY3RlZE9wdGlvbik7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuY29uZmlnLmNsb3NlTWVudU9uU2VsZWN0KSB7XG4gICAgICB0aGlzLmRhdGFTdGF0ZVNlcnZpY2UuY29tcG9uZW50TG9hZGVyUmVmLmhpZGUoKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==