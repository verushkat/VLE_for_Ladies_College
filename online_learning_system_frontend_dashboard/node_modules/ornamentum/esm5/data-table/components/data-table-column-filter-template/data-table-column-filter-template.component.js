/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { DataTableColumnComponent } from '../data-table-column/data-table-column.component';
import { DataTableConfigService } from '../../services/data-table-config.service';
import { DataTableEventStateService } from '../../services/data-table-event.service';
import { DataTableDataStateService } from '../../services/data-table-data-state.service';
import { DataTableScrollPositionService } from '../../services/data-table-scroll-position.service';
/**
 * Column filter template component. Render column filter template via this component.
 */
var DataTableColumnFilterTemplateComponent = /** @class */ (function () {
    function DataTableColumnFilterTemplateComponent(config, dataStateService, eventStateService, scrollPositionService) {
        this.config = config;
        this.dataStateService = dataStateService;
        this.eventStateService = eventStateService;
        this.scrollPositionService = scrollPositionService;
        this.filter = new EventEmitter();
        this.filterDataStream = new Subject();
    }
    /**
     * Component initialize lifecycle event.
     */
    /**
     * Component initialize lifecycle event.
     * @return {?}
     */
    DataTableColumnFilterTemplateComponent.prototype.ngOnInit = /**
     * Component initialize lifecycle event.
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.column.showDropdownFilter) {
            this.scrollPositionStreamSubscription = this.scrollPositionService.scrollPositionStream
                .subscribe((/**
             * @param {?} pos
             * @return {?}
             */
            function (pos) {
                if (pos.isHorizontal) {
                    _this.filterDropdown.close();
                }
            }));
            if (this.dataStateService.onFilterValueExtract) {
                this.fetchFilterOptionsStreamSubscription = this.eventStateService.fetchFilterOptionsStream
                    .pipe(switchMap((/**
                 * @return {?}
                 */
                function () {
                    return _this.dataStateService.onFilterValueExtract(_this.column);
                })))
                    .subscribe((/**
                 * @param {?} options
                 * @return {?}
                 */
                function (options) {
                    setTimeout((/**
                     * @return {?}
                     */
                    function () { return _this.filterDataStream.next(options); }), 0); // TODO: remove the timeout
                }));
            }
        }
    };
    /**
     * Component destroy lifecycle event.
     */
    /**
     * Component destroy lifecycle event.
     * @return {?}
     */
    DataTableColumnFilterTemplateComponent.prototype.ngOnDestroy = /**
     * Component destroy lifecycle event.
     * @return {?}
     */
    function () {
        if (this.fetchFilterOptionsStreamSubscription) {
            this.fetchFilterOptionsStreamSubscription.unsubscribe();
        }
        if (this.scrollPositionStreamSubscription) {
            this.scrollPositionStreamSubscription.unsubscribe();
        }
        this.filterDataStream.complete();
    };
    /**
     * @param {?} filterDropdown
     * @return {?}
     */
    DataTableColumnFilterTemplateComponent.prototype.onFilterDropdownInit = /**
     * @param {?} filterDropdown
     * @return {?}
     */
    function (filterDropdown) {
        this.filterDropdown = filterDropdown;
    };
    /**
     * Clear current column filter value.
     */
    /**
     * Clear current column filter value.
     * @return {?}
     */
    DataTableColumnFilterTemplateComponent.prototype.clearFilter = /**
     * Clear current column filter value.
     * @return {?}
     */
    function () {
        this.column.filter = '';
        this.filter.emit();
    };
    DataTableColumnFilterTemplateComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ng-data-table-column-filter-template',
                    template: "<ng-container *ngIf=\"column.filterable\">\n  <ng-container\n    *ngIf=\"column.filterTemplate\"\n    [ngTemplateOutlet]=\"column.filterTemplate\"\n    [ngTemplateOutletContext]=\"{ column: column, filter: customFilterStream }\"\n  >\n  </ng-container>\n  <ng-container *ngIf=\"!column.filterTemplate\">\n    <div class=\"ng-data-table-header-input-box\" *ngIf=\"!column.showDropdownFilter\">\n      <input\n        type=\"text\"\n        class=\"ng-data-table-header-input\"\n        [(ngModel)]=\"column.filter\"\n        [class.ng-data-table-clear-filter]=\"column.showFilterClearButton\"\n        (keyup)=\"filter.emit()\"\n        [placeholder]=\"column.filterPlaceholder\"\n      />\n      <span class=\"ng-data-table-input-group-btn\">\n        <button\n          *ngIf=\"column.showFilterClearButton\"\n          [hidden]=\"!column.filter\"\n          class=\"ng-data-table-delete-button\"\n          type=\"button\"\n          (click)=\"clearFilter()\"\n        ></button>\n      </span>\n    </div>\n    <ng-dropdown\n      *ngIf=\"column.showDropdownFilter\"\n      [id]=\"dataStateService.getUniqueId('col', index)\"\n      [relativeParentElement]=\"dataStateService.relativeParentElement\"\n      [dataSource]=\"filterDataStream\"\n      [menuPosition]=\"column.dropdownFilterMenuPosition\"\n      [filterable]=\"column.dropdownFilterSearchable\"\n      [filterDebounceTime]=\"column.dropdownFilterSearchDebounceTime\"\n      [filterDebounce]=\"column.dropdownFilterSearchDebounce\"\n      [selectMode]=\"column.dropdownFilterSelectMode\"\n      [showSelectedOptionRemoveButton]=\"column.dropdownFilterShowSelectedOptionRemoveButton\"\n      [showClearSelectionButton]=\"column.dropdownFilterShowClearSelectionButton\"\n      [wrapDisplaySelectLimit]=\"column.dropdownFilterWrapDisplaySelectLimit\"\n      [groupByField]=\"column.dropdownFilterGroupByField\"\n      [showOptionSelectCheckbox]=\"column.dropDownFilterShowOptionSelectCheckbox\"\n      [menuHeight]=\"column.dropdownFilterMenuHeight\"\n      [menuWidth]=\"column.dropdownFilterMenuWidth\"\n      [multiSelectOptionMaxWidth]=\"column.dropdownFilterMultiSelectOptionMaxWidth\"\n      [closeMenuOnSelect]=\"column.dropdownFilterCloseMenuOnSelect\"\n      [dynamicDimensionCalculation]=\"column.dropdownFilterDynamicDimensionCalculation\"\n      [dynamicWidthRatio]=\"column.dropdownFilterDynamicWidthRatio\"\n      [dynamicHeightRatio]=\"column.dropdownFilterDynamicHeightRatio\"\n      [loadingSpinnerTemplateRef]=\"column.dropdownFilterLoadingSpinnerTemplate\"\n      [optionTemplateRef]=\"column.dropdownFilterOptionTemplate\"\n      [optionGroupHeaderTemplateRef]=\"column.dropdownFilterOptionGroupHeaderTemplate\"\n      [translations]=\"config.translations.dropdownFilter\"\n      [(ngModel)]=\"column.filter\"\n      (selectChange)=\"filter.emit()\"\n      (init)=\"onFilterDropdownInit($event)\"\n    >\n    </ng-dropdown>\n  </ng-container>\n</ng-container>\n"
                }] }
    ];
    /** @nocollapse */
    DataTableColumnFilterTemplateComponent.ctorParameters = function () { return [
        { type: DataTableConfigService },
        { type: DataTableDataStateService },
        { type: DataTableEventStateService },
        { type: DataTableScrollPositionService }
    ]; };
    DataTableColumnFilterTemplateComponent.propDecorators = {
        column: [{ type: Input }],
        customFilterStream: [{ type: Input }],
        index: [{ type: Input }],
        filter: [{ type: Output }]
    };
    return DataTableColumnFilterTemplateComponent;
}());
export { DataTableColumnFilterTemplateComponent };
if (false) {
    /** @type {?} */
    DataTableColumnFilterTemplateComponent.prototype.column;
    /** @type {?} */
    DataTableColumnFilterTemplateComponent.prototype.customFilterStream;
    /** @type {?} */
    DataTableColumnFilterTemplateComponent.prototype.index;
    /** @type {?} */
    DataTableColumnFilterTemplateComponent.prototype.filter;
    /** @type {?} */
    DataTableColumnFilterTemplateComponent.prototype.filterDataStream;
    /**
     * @type {?}
     * @private
     */
    DataTableColumnFilterTemplateComponent.prototype.fetchFilterOptionsStreamSubscription;
    /**
     * @type {?}
     * @private
     */
    DataTableColumnFilterTemplateComponent.prototype.scrollPositionStreamSubscription;
    /**
     * @type {?}
     * @private
     */
    DataTableColumnFilterTemplateComponent.prototype.filterDropdown;
    /** @type {?} */
    DataTableColumnFilterTemplateComponent.prototype.config;
    /** @type {?} */
    DataTableColumnFilterTemplateComponent.prototype.dataStateService;
    /**
     * @type {?}
     * @private
     */
    DataTableColumnFilterTemplateComponent.prototype.eventStateService;
    /**
     * @type {?}
     * @private
     */
    DataTableColumnFilterTemplateComponent.prototype.scrollPositionService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS10YWJsZS1jb2x1bW4tZmlsdGVyLXRlbXBsYXRlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL29ybmFtZW50dW0vIiwic291cmNlcyI6WyJkYXRhLXRhYmxlL2NvbXBvbmVudHMvZGF0YS10YWJsZS1jb2x1bW4tZmlsdGVyLXRlbXBsYXRlL2RhdGEtdGFibGUtY29sdW1uLWZpbHRlci10ZW1wbGF0ZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBcUIsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTFGLE9BQU8sRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFnQixNQUFNLE1BQU0sQ0FBQztBQUN6RCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFLM0MsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sa0RBQWtELENBQUM7QUFHNUYsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFDbEYsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFDckYsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sOENBQThDLENBQUM7QUFDekYsT0FBTyxFQUFFLDhCQUE4QixFQUFFLE1BQU0sbURBQW1ELENBQUM7Ozs7QUFNbkc7SUF3QkUsZ0RBQ1MsTUFBOEIsRUFDOUIsZ0JBQTJDLEVBQzFDLGlCQUE2QyxFQUM3QyxxQkFBcUQ7UUFIdEQsV0FBTSxHQUFOLE1BQU0sQ0FBd0I7UUFDOUIscUJBQWdCLEdBQWhCLGdCQUFnQixDQUEyQjtRQUMxQyxzQkFBaUIsR0FBakIsaUJBQWlCLENBQTRCO1FBQzdDLDBCQUFxQixHQUFyQixxQkFBcUIsQ0FBZ0M7UUFieEQsV0FBTSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFFNUIscUJBQWdCLEdBQUcsSUFBSSxPQUFPLEVBQTJCLENBQUM7SUFZOUQsQ0FBQztJQUVKOztPQUVHOzs7OztJQUNJLHlEQUFROzs7O0lBQWY7UUFBQSxpQkFxQkM7UUFwQkMsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLGtCQUFrQixFQUFFO1lBQ2xDLElBQUksQ0FBQyxnQ0FBZ0MsR0FBRyxJQUFJLENBQUMscUJBQXFCLENBQUMsb0JBQW9CO2lCQUNwRixTQUFTOzs7O1lBQUMsVUFBQyxHQUF5QjtnQkFDbkMsSUFBSSxHQUFHLENBQUMsWUFBWSxFQUFFO29CQUNwQixLQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssRUFBRSxDQUFDO2lCQUM3QjtZQUNILENBQUMsRUFBQyxDQUFDO1lBRUwsSUFBSSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsb0JBQW9CLEVBQUU7Z0JBQzlDLElBQUksQ0FBQyxvQ0FBb0MsR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsd0JBQXdCO3FCQUN4RixJQUFJLENBQ0gsU0FBUzs7O2dCQUFDO29CQUNSLE9BQU8sS0FBSSxDQUFDLGdCQUFnQixDQUFDLG9CQUFvQixDQUFDLEtBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDakUsQ0FBQyxFQUFDLENBQ0g7cUJBQ0EsU0FBUzs7OztnQkFBQyxVQUFDLE9BQWdDO29CQUMxQyxVQUFVOzs7b0JBQUMsY0FBTSxPQUFBLEtBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQW5DLENBQW1DLEdBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQywyQkFBMkI7Z0JBQ3ZGLENBQUMsRUFBQyxDQUFDO2FBQ047U0FDRjtJQUNILENBQUM7SUFFRDs7T0FFRzs7Ozs7SUFDSSw0REFBVzs7OztJQUFsQjtRQUNFLElBQUksSUFBSSxDQUFDLG9DQUFvQyxFQUFFO1lBQzdDLElBQUksQ0FBQyxvQ0FBb0MsQ0FBQyxXQUFXLEVBQUUsQ0FBQztTQUN6RDtRQUVELElBQUksSUFBSSxDQUFDLGdDQUFnQyxFQUFFO1lBQ3pDLElBQUksQ0FBQyxnQ0FBZ0MsQ0FBQyxXQUFXLEVBQUUsQ0FBQztTQUNyRDtRQUVELElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUNuQyxDQUFDOzs7OztJQUVNLHFFQUFvQjs7OztJQUEzQixVQUE0QixjQUFpQztRQUMzRCxJQUFJLENBQUMsY0FBYyxHQUFHLGNBQWMsQ0FBQztJQUN2QyxDQUFDO0lBRUQ7O09BRUc7Ozs7O0lBQ0ksNERBQVc7Ozs7SUFBbEI7UUFDRSxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUM7UUFDeEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNyQixDQUFDOztnQkFsRkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxzQ0FBc0M7b0JBQ2hELDA0RkFBaUU7aUJBQ2xFOzs7O2dCQVpRLHNCQUFzQjtnQkFFdEIseUJBQXlCO2dCQUR6QiwwQkFBMEI7Z0JBRTFCLDhCQUE4Qjs7O3lCQVdwQyxLQUFLO3FDQUdMLEtBQUs7d0JBR0wsS0FBSzt5QkFHTCxNQUFNOztJQXFFVCw2Q0FBQztDQUFBLEFBbkZELElBbUZDO1NBL0VZLHNDQUFzQzs7O0lBQ2pELHdEQUN3Qzs7SUFFeEMsb0VBQ2dFOztJQUVoRSx1REFDcUI7O0lBRXJCLHdEQUNtQzs7SUFFbkMsa0VBQWlFOzs7OztJQUVqRSxzRkFBMkQ7Ozs7O0lBQzNELGtGQUF1RDs7Ozs7SUFFdkQsZ0VBQTBDOztJQUd4Qyx3REFBcUM7O0lBQ3JDLGtFQUFrRDs7Ozs7SUFDbEQsbUVBQXFEOzs7OztJQUNyRCx1RUFBNkQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uRGVzdHJveSwgT25Jbml0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgU3ViamVjdCwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBzd2l0Y2hNYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IERhdGFUYWJsZUZpbHRlckV2ZW50QXJncyB9IGZyb20gJy4uLy4uL21vZGVscy9kYXRhLXRhYmxlLWZpbHRlci1ldmVudC1hcmdzLm1vZGVsJztcbmltcG9ydCB7IERhdGFUYWJsZUZpbHRlck9wdGlvbiB9IGZyb20gJy4uLy4uL21vZGVscy9kYXRhLXRhYmxlLWZpbHRlci1vcHRpb24ubW9kZWwnO1xuXG5pbXBvcnQgeyBEYXRhVGFibGVDb2x1bW5Db21wb25lbnQgfSBmcm9tICcuLi9kYXRhLXRhYmxlLWNvbHVtbi9kYXRhLXRhYmxlLWNvbHVtbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgRHJvcGRvd25Db21wb25lbnQgfSBmcm9tICcuLi8uLi8uLi9kcm9wZG93bi9jb21wb25lbnRzL2Ryb3Bkb3duL2Ryb3Bkb3duLmNvbXBvbmVudCc7XG5cbmltcG9ydCB7IERhdGFUYWJsZUNvbmZpZ1NlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9kYXRhLXRhYmxlLWNvbmZpZy5zZXJ2aWNlJztcbmltcG9ydCB7IERhdGFUYWJsZUV2ZW50U3RhdGVTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvZGF0YS10YWJsZS1ldmVudC5zZXJ2aWNlJztcbmltcG9ydCB7IERhdGFUYWJsZURhdGFTdGF0ZVNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9kYXRhLXRhYmxlLWRhdGEtc3RhdGUuc2VydmljZSc7XG5pbXBvcnQgeyBEYXRhVGFibGVTY3JvbGxQb3NpdGlvblNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9kYXRhLXRhYmxlLXNjcm9sbC1wb3NpdGlvbi5zZXJ2aWNlJztcbmltcG9ydCB7IERhdGFUYWJsZVNjcm9sbFBvaW50IH0gZnJvbSAnLi4vLi4vLi4vZGF0YS10YWJsZS9tb2RlbHMvZGF0YS10YWJsZS1zY3JvbGwtcG9pbnQubW9kZWwnO1xuXG4vKipcbiAqIENvbHVtbiBmaWx0ZXIgdGVtcGxhdGUgY29tcG9uZW50LiBSZW5kZXIgY29sdW1uIGZpbHRlciB0ZW1wbGF0ZSB2aWEgdGhpcyBjb21wb25lbnQuXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25nLWRhdGEtdGFibGUtY29sdW1uLWZpbHRlci10ZW1wbGF0ZScsXG4gIHRlbXBsYXRlVXJsOiAnLi9kYXRhLXRhYmxlLWNvbHVtbi1maWx0ZXItdGVtcGxhdGUuY29tcG9uZW50Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIERhdGFUYWJsZUNvbHVtbkZpbHRlclRlbXBsYXRlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBASW5wdXQoKVxuICBwdWJsaWMgY29sdW1uOiBEYXRhVGFibGVDb2x1bW5Db21wb25lbnQ7XG5cbiAgQElucHV0KClcbiAgcHVibGljIGN1c3RvbUZpbHRlclN0cmVhbTogT2JzZXJ2YWJsZTxEYXRhVGFibGVGaWx0ZXJFdmVudEFyZ3M+O1xuXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBpbmRleDogbnVtYmVyO1xuXG4gIEBPdXRwdXQoKVxuICBwdWJsaWMgZmlsdGVyID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIHB1YmxpYyBmaWx0ZXJEYXRhU3RyZWFtID0gbmV3IFN1YmplY3Q8RGF0YVRhYmxlRmlsdGVyT3B0aW9uW10+KCk7XG5cbiAgcHJpdmF0ZSBmZXRjaEZpbHRlck9wdGlvbnNTdHJlYW1TdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcbiAgcHJpdmF0ZSBzY3JvbGxQb3NpdGlvblN0cmVhbVN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuXG4gIHByaXZhdGUgZmlsdGVyRHJvcGRvd246IERyb3Bkb3duQ29tcG9uZW50O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBjb25maWc6IERhdGFUYWJsZUNvbmZpZ1NlcnZpY2UsXG4gICAgcHVibGljIGRhdGFTdGF0ZVNlcnZpY2U6IERhdGFUYWJsZURhdGFTdGF0ZVNlcnZpY2UsXG4gICAgcHJpdmF0ZSBldmVudFN0YXRlU2VydmljZTogRGF0YVRhYmxlRXZlbnRTdGF0ZVNlcnZpY2UsXG4gICAgcHJpdmF0ZSBzY3JvbGxQb3NpdGlvblNlcnZpY2U6IERhdGFUYWJsZVNjcm9sbFBvc2l0aW9uU2VydmljZVxuICApIHt9XG5cbiAgLyoqXG4gICAqIENvbXBvbmVudCBpbml0aWFsaXplIGxpZmVjeWNsZSBldmVudC5cbiAgICovXG4gIHB1YmxpYyBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5jb2x1bW4uc2hvd0Ryb3Bkb3duRmlsdGVyKSB7XG4gICAgICB0aGlzLnNjcm9sbFBvc2l0aW9uU3RyZWFtU3Vic2NyaXB0aW9uID0gdGhpcy5zY3JvbGxQb3NpdGlvblNlcnZpY2Uuc2Nyb2xsUG9zaXRpb25TdHJlYW1cbiAgICAgICAgLnN1YnNjcmliZSgocG9zOiBEYXRhVGFibGVTY3JvbGxQb2ludCkgPT4ge1xuICAgICAgICAgIGlmIChwb3MuaXNIb3Jpem9udGFsKSB7XG4gICAgICAgICAgICB0aGlzLmZpbHRlckRyb3Bkb3duLmNsb3NlKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgaWYgKHRoaXMuZGF0YVN0YXRlU2VydmljZS5vbkZpbHRlclZhbHVlRXh0cmFjdCkge1xuICAgICAgICB0aGlzLmZldGNoRmlsdGVyT3B0aW9uc1N0cmVhbVN1YnNjcmlwdGlvbiA9IHRoaXMuZXZlbnRTdGF0ZVNlcnZpY2UuZmV0Y2hGaWx0ZXJPcHRpb25zU3RyZWFtXG4gICAgICAgICAgLnBpcGUoXG4gICAgICAgICAgICBzd2l0Y2hNYXAoKCkgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gdGhpcy5kYXRhU3RhdGVTZXJ2aWNlLm9uRmlsdGVyVmFsdWVFeHRyYWN0KHRoaXMuY29sdW1uKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgKVxuICAgICAgICAgIC5zdWJzY3JpYmUoKG9wdGlvbnM6IERhdGFUYWJsZUZpbHRlck9wdGlvbltdKSA9PiB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMuZmlsdGVyRGF0YVN0cmVhbS5uZXh0KG9wdGlvbnMpLCAwKTsgLy8gVE9ETzogcmVtb3ZlIHRoZSB0aW1lb3V0XG4gICAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENvbXBvbmVudCBkZXN0cm95IGxpZmVjeWNsZSBldmVudC5cbiAgICovXG4gIHB1YmxpYyBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5mZXRjaEZpbHRlck9wdGlvbnNTdHJlYW1TdWJzY3JpcHRpb24pIHtcbiAgICAgIHRoaXMuZmV0Y2hGaWx0ZXJPcHRpb25zU3RyZWFtU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuc2Nyb2xsUG9zaXRpb25TdHJlYW1TdWJzY3JpcHRpb24pIHtcbiAgICAgIHRoaXMuc2Nyb2xsUG9zaXRpb25TdHJlYW1TdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICB9XG5cbiAgICB0aGlzLmZpbHRlckRhdGFTdHJlYW0uY29tcGxldGUoKTtcbiAgfVxuXG4gIHB1YmxpYyBvbkZpbHRlckRyb3Bkb3duSW5pdChmaWx0ZXJEcm9wZG93bjogRHJvcGRvd25Db21wb25lbnQpOiB2b2lkIHtcbiAgICB0aGlzLmZpbHRlckRyb3Bkb3duID0gZmlsdGVyRHJvcGRvd247XG4gIH1cblxuICAvKipcbiAgICogQ2xlYXIgY3VycmVudCBjb2x1bW4gZmlsdGVyIHZhbHVlLlxuICAgKi9cbiAgcHVibGljIGNsZWFyRmlsdGVyKCk6IHZvaWQge1xuICAgIHRoaXMuY29sdW1uLmZpbHRlciA9ICcnO1xuICAgIHRoaXMuZmlsdGVyLmVtaXQoKTtcbiAgfVxufVxuIl19