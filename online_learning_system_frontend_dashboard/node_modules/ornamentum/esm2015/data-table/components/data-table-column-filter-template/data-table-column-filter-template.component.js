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
export class DataTableColumnFilterTemplateComponent {
    /**
     * @param {?} config
     * @param {?} dataStateService
     * @param {?} eventStateService
     * @param {?} scrollPositionService
     */
    constructor(config, dataStateService, eventStateService, scrollPositionService) {
        this.config = config;
        this.dataStateService = dataStateService;
        this.eventStateService = eventStateService;
        this.scrollPositionService = scrollPositionService;
        this.filter = new EventEmitter();
        this.filterDataStream = new Subject();
    }
    /**
     * Component initialize lifecycle event.
     * @return {?}
     */
    ngOnInit() {
        if (this.column.showDropdownFilter) {
            this.scrollPositionStreamSubscription = this.scrollPositionService.scrollPositionStream
                .subscribe((/**
             * @param {?} pos
             * @return {?}
             */
            (pos) => {
                if (pos.isHorizontal) {
                    this.filterDropdown.close();
                }
            }));
            if (this.dataStateService.onFilterValueExtract) {
                this.fetchFilterOptionsStreamSubscription = this.eventStateService.fetchFilterOptionsStream
                    .pipe(switchMap((/**
                 * @return {?}
                 */
                () => {
                    return this.dataStateService.onFilterValueExtract(this.column);
                })))
                    .subscribe((/**
                 * @param {?} options
                 * @return {?}
                 */
                (options) => {
                    setTimeout((/**
                     * @return {?}
                     */
                    () => this.filterDataStream.next(options)), 0); // TODO: remove the timeout
                }));
            }
        }
    }
    /**
     * Component destroy lifecycle event.
     * @return {?}
     */
    ngOnDestroy() {
        if (this.fetchFilterOptionsStreamSubscription) {
            this.fetchFilterOptionsStreamSubscription.unsubscribe();
        }
        if (this.scrollPositionStreamSubscription) {
            this.scrollPositionStreamSubscription.unsubscribe();
        }
        this.filterDataStream.complete();
    }
    /**
     * @param {?} filterDropdown
     * @return {?}
     */
    onFilterDropdownInit(filterDropdown) {
        this.filterDropdown = filterDropdown;
    }
    /**
     * Clear current column filter value.
     * @return {?}
     */
    clearFilter() {
        this.column.filter = '';
        this.filter.emit();
    }
}
DataTableColumnFilterTemplateComponent.decorators = [
    { type: Component, args: [{
                selector: 'ng-data-table-column-filter-template',
                template: "<ng-container *ngIf=\"column.filterable\">\n  <ng-container\n    *ngIf=\"column.filterTemplate\"\n    [ngTemplateOutlet]=\"column.filterTemplate\"\n    [ngTemplateOutletContext]=\"{ column: column, filter: customFilterStream }\"\n  >\n  </ng-container>\n  <ng-container *ngIf=\"!column.filterTemplate\">\n    <div class=\"ng-data-table-header-input-box\" *ngIf=\"!column.showDropdownFilter\">\n      <input\n        type=\"text\"\n        class=\"ng-data-table-header-input\"\n        [(ngModel)]=\"column.filter\"\n        [class.ng-data-table-clear-filter]=\"column.showFilterClearButton\"\n        (keyup)=\"filter.emit()\"\n        [placeholder]=\"column.filterPlaceholder\"\n      />\n      <span class=\"ng-data-table-input-group-btn\">\n        <button\n          *ngIf=\"column.showFilterClearButton\"\n          [hidden]=\"!column.filter\"\n          class=\"ng-data-table-delete-button\"\n          type=\"button\"\n          (click)=\"clearFilter()\"\n        ></button>\n      </span>\n    </div>\n    <ng-dropdown\n      *ngIf=\"column.showDropdownFilter\"\n      [id]=\"dataStateService.getUniqueId('col', index)\"\n      [relativeParentElement]=\"dataStateService.relativeParentElement\"\n      [dataSource]=\"filterDataStream\"\n      [menuPosition]=\"column.dropdownFilterMenuPosition\"\n      [filterable]=\"column.dropdownFilterSearchable\"\n      [filterDebounceTime]=\"column.dropdownFilterSearchDebounceTime\"\n      [filterDebounce]=\"column.dropdownFilterSearchDebounce\"\n      [selectMode]=\"column.dropdownFilterSelectMode\"\n      [showSelectedOptionRemoveButton]=\"column.dropdownFilterShowSelectedOptionRemoveButton\"\n      [showClearSelectionButton]=\"column.dropdownFilterShowClearSelectionButton\"\n      [wrapDisplaySelectLimit]=\"column.dropdownFilterWrapDisplaySelectLimit\"\n      [groupByField]=\"column.dropdownFilterGroupByField\"\n      [showOptionSelectCheckbox]=\"column.dropDownFilterShowOptionSelectCheckbox\"\n      [menuHeight]=\"column.dropdownFilterMenuHeight\"\n      [menuWidth]=\"column.dropdownFilterMenuWidth\"\n      [multiSelectOptionMaxWidth]=\"column.dropdownFilterMultiSelectOptionMaxWidth\"\n      [closeMenuOnSelect]=\"column.dropdownFilterCloseMenuOnSelect\"\n      [dynamicDimensionCalculation]=\"column.dropdownFilterDynamicDimensionCalculation\"\n      [dynamicWidthRatio]=\"column.dropdownFilterDynamicWidthRatio\"\n      [dynamicHeightRatio]=\"column.dropdownFilterDynamicHeightRatio\"\n      [loadingSpinnerTemplateRef]=\"column.dropdownFilterLoadingSpinnerTemplate\"\n      [optionTemplateRef]=\"column.dropdownFilterOptionTemplate\"\n      [optionGroupHeaderTemplateRef]=\"column.dropdownFilterOptionGroupHeaderTemplate\"\n      [translations]=\"config.translations.dropdownFilter\"\n      [(ngModel)]=\"column.filter\"\n      (selectChange)=\"filter.emit()\"\n      (init)=\"onFilterDropdownInit($event)\"\n    >\n    </ng-dropdown>\n  </ng-container>\n</ng-container>\n"
            }] }
];
/** @nocollapse */
DataTableColumnFilterTemplateComponent.ctorParameters = () => [
    { type: DataTableConfigService },
    { type: DataTableDataStateService },
    { type: DataTableEventStateService },
    { type: DataTableScrollPositionService }
];
DataTableColumnFilterTemplateComponent.propDecorators = {
    column: [{ type: Input }],
    customFilterStream: [{ type: Input }],
    index: [{ type: Input }],
    filter: [{ type: Output }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS10YWJsZS1jb2x1bW4tZmlsdGVyLXRlbXBsYXRlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL29ybmFtZW50dW0vIiwic291cmNlcyI6WyJkYXRhLXRhYmxlL2NvbXBvbmVudHMvZGF0YS10YWJsZS1jb2x1bW4tZmlsdGVyLXRlbXBsYXRlL2RhdGEtdGFibGUtY29sdW1uLWZpbHRlci10ZW1wbGF0ZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBcUIsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTFGLE9BQU8sRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFnQixNQUFNLE1BQU0sQ0FBQztBQUN6RCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFLM0MsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sa0RBQWtELENBQUM7QUFHNUYsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFDbEYsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFDckYsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sOENBQThDLENBQUM7QUFDekYsT0FBTyxFQUFFLDhCQUE4QixFQUFFLE1BQU0sbURBQW1ELENBQUM7Ozs7QUFVbkcsTUFBTSxPQUFPLHNDQUFzQzs7Ozs7OztJQW9CakQsWUFDUyxNQUE4QixFQUM5QixnQkFBMkMsRUFDMUMsaUJBQTZDLEVBQzdDLHFCQUFxRDtRQUh0RCxXQUFNLEdBQU4sTUFBTSxDQUF3QjtRQUM5QixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQTJCO1FBQzFDLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBNEI7UUFDN0MsMEJBQXFCLEdBQXJCLHFCQUFxQixDQUFnQztRQWJ4RCxXQUFNLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUU1QixxQkFBZ0IsR0FBRyxJQUFJLE9BQU8sRUFBMkIsQ0FBQztJQVk5RCxDQUFDOzs7OztJQUtHLFFBQVE7UUFDYixJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsa0JBQWtCLEVBQUU7WUFDbEMsSUFBSSxDQUFDLGdDQUFnQyxHQUFHLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxvQkFBb0I7aUJBQ3BGLFNBQVM7Ozs7WUFBQyxDQUFDLEdBQXlCLEVBQUUsRUFBRTtnQkFDdkMsSUFBSSxHQUFHLENBQUMsWUFBWSxFQUFFO29CQUNwQixJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssRUFBRSxDQUFDO2lCQUM3QjtZQUNILENBQUMsRUFBQyxDQUFDO1lBRUwsSUFBSSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsb0JBQW9CLEVBQUU7Z0JBQzlDLElBQUksQ0FBQyxvQ0FBb0MsR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsd0JBQXdCO3FCQUN4RixJQUFJLENBQ0gsU0FBUzs7O2dCQUFDLEdBQUcsRUFBRTtvQkFDYixPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQ2pFLENBQUMsRUFBQyxDQUNIO3FCQUNBLFNBQVM7Ozs7Z0JBQUMsQ0FBQyxPQUFnQyxFQUFFLEVBQUU7b0JBQzlDLFVBQVU7OztvQkFBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsMkJBQTJCO2dCQUN2RixDQUFDLEVBQUMsQ0FBQzthQUNOO1NBQ0Y7SUFDSCxDQUFDOzs7OztJQUtNLFdBQVc7UUFDaEIsSUFBSSxJQUFJLENBQUMsb0NBQW9DLEVBQUU7WUFDN0MsSUFBSSxDQUFDLG9DQUFvQyxDQUFDLFdBQVcsRUFBRSxDQUFDO1NBQ3pEO1FBRUQsSUFBSSxJQUFJLENBQUMsZ0NBQWdDLEVBQUU7WUFDekMsSUFBSSxDQUFDLGdDQUFnQyxDQUFDLFdBQVcsRUFBRSxDQUFDO1NBQ3JEO1FBRUQsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ25DLENBQUM7Ozs7O0lBRU0sb0JBQW9CLENBQUMsY0FBaUM7UUFDM0QsSUFBSSxDQUFDLGNBQWMsR0FBRyxjQUFjLENBQUM7SUFDdkMsQ0FBQzs7Ozs7SUFLTSxXQUFXO1FBQ2hCLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQztRQUN4QixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ3JCLENBQUM7OztZQWxGRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHNDQUFzQztnQkFDaEQsMDRGQUFpRTthQUNsRTs7OztZQVpRLHNCQUFzQjtZQUV0Qix5QkFBeUI7WUFEekIsMEJBQTBCO1lBRTFCLDhCQUE4Qjs7O3FCQVdwQyxLQUFLO2lDQUdMLEtBQUs7b0JBR0wsS0FBSztxQkFHTCxNQUFNOzs7O0lBVFAsd0RBQ3dDOztJQUV4QyxvRUFDZ0U7O0lBRWhFLHVEQUNxQjs7SUFFckIsd0RBQ21DOztJQUVuQyxrRUFBaUU7Ozs7O0lBRWpFLHNGQUEyRDs7Ozs7SUFDM0Qsa0ZBQXVEOzs7OztJQUV2RCxnRUFBMEM7O0lBR3hDLHdEQUFxQzs7SUFDckMsa0VBQWtEOzs7OztJQUNsRCxtRUFBcUQ7Ozs7O0lBQ3JELHVFQUE2RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25EZXN0cm95LCBPbkluaXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBTdWJqZWN0LCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHN3aXRjaE1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgRGF0YVRhYmxlRmlsdGVyRXZlbnRBcmdzIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2RhdGEtdGFibGUtZmlsdGVyLWV2ZW50LWFyZ3MubW9kZWwnO1xuaW1wb3J0IHsgRGF0YVRhYmxlRmlsdGVyT3B0aW9uIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2RhdGEtdGFibGUtZmlsdGVyLW9wdGlvbi5tb2RlbCc7XG5cbmltcG9ydCB7IERhdGFUYWJsZUNvbHVtbkNvbXBvbmVudCB9IGZyb20gJy4uL2RhdGEtdGFibGUtY29sdW1uL2RhdGEtdGFibGUtY29sdW1uLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBEcm9wZG93bkNvbXBvbmVudCB9IGZyb20gJy4uLy4uLy4uL2Ryb3Bkb3duL2NvbXBvbmVudHMvZHJvcGRvd24vZHJvcGRvd24uY29tcG9uZW50JztcblxuaW1wb3J0IHsgRGF0YVRhYmxlQ29uZmlnU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2RhdGEtdGFibGUtY29uZmlnLnNlcnZpY2UnO1xuaW1wb3J0IHsgRGF0YVRhYmxlRXZlbnRTdGF0ZVNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9kYXRhLXRhYmxlLWV2ZW50LnNlcnZpY2UnO1xuaW1wb3J0IHsgRGF0YVRhYmxlRGF0YVN0YXRlU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2RhdGEtdGFibGUtZGF0YS1zdGF0ZS5zZXJ2aWNlJztcbmltcG9ydCB7IERhdGFUYWJsZVNjcm9sbFBvc2l0aW9uU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2RhdGEtdGFibGUtc2Nyb2xsLXBvc2l0aW9uLnNlcnZpY2UnO1xuaW1wb3J0IHsgRGF0YVRhYmxlU2Nyb2xsUG9pbnQgfSBmcm9tICcuLi8uLi8uLi9kYXRhLXRhYmxlL21vZGVscy9kYXRhLXRhYmxlLXNjcm9sbC1wb2ludC5tb2RlbCc7XG5cbi8qKlxuICogQ29sdW1uIGZpbHRlciB0ZW1wbGF0ZSBjb21wb25lbnQuIFJlbmRlciBjb2x1bW4gZmlsdGVyIHRlbXBsYXRlIHZpYSB0aGlzIGNvbXBvbmVudC5cbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbmctZGF0YS10YWJsZS1jb2x1bW4tZmlsdGVyLXRlbXBsYXRlJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2RhdGEtdGFibGUtY29sdW1uLWZpbHRlci10ZW1wbGF0ZS5jb21wb25lbnQuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgRGF0YVRhYmxlQ29sdW1uRmlsdGVyVGVtcGxhdGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBjb2x1bW46IERhdGFUYWJsZUNvbHVtbkNvbXBvbmVudDtcblxuICBASW5wdXQoKVxuICBwdWJsaWMgY3VzdG9tRmlsdGVyU3RyZWFtOiBPYnNlcnZhYmxlPERhdGFUYWJsZUZpbHRlckV2ZW50QXJncz47XG5cbiAgQElucHV0KClcbiAgcHVibGljIGluZGV4OiBudW1iZXI7XG5cbiAgQE91dHB1dCgpXG4gIHB1YmxpYyBmaWx0ZXIgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgcHVibGljIGZpbHRlckRhdGFTdHJlYW0gPSBuZXcgU3ViamVjdDxEYXRhVGFibGVGaWx0ZXJPcHRpb25bXT4oKTtcblxuICBwcml2YXRlIGZldGNoRmlsdGVyT3B0aW9uc1N0cmVhbVN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuICBwcml2YXRlIHNjcm9sbFBvc2l0aW9uU3RyZWFtU3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XG5cbiAgcHJpdmF0ZSBmaWx0ZXJEcm9wZG93bjogRHJvcGRvd25Db21wb25lbnQ7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIGNvbmZpZzogRGF0YVRhYmxlQ29uZmlnU2VydmljZSxcbiAgICBwdWJsaWMgZGF0YVN0YXRlU2VydmljZTogRGF0YVRhYmxlRGF0YVN0YXRlU2VydmljZSxcbiAgICBwcml2YXRlIGV2ZW50U3RhdGVTZXJ2aWNlOiBEYXRhVGFibGVFdmVudFN0YXRlU2VydmljZSxcbiAgICBwcml2YXRlIHNjcm9sbFBvc2l0aW9uU2VydmljZTogRGF0YVRhYmxlU2Nyb2xsUG9zaXRpb25TZXJ2aWNlXG4gICkge31cblxuICAvKipcbiAgICogQ29tcG9uZW50IGluaXRpYWxpemUgbGlmZWN5Y2xlIGV2ZW50LlxuICAgKi9cbiAgcHVibGljIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmNvbHVtbi5zaG93RHJvcGRvd25GaWx0ZXIpIHtcbiAgICAgIHRoaXMuc2Nyb2xsUG9zaXRpb25TdHJlYW1TdWJzY3JpcHRpb24gPSB0aGlzLnNjcm9sbFBvc2l0aW9uU2VydmljZS5zY3JvbGxQb3NpdGlvblN0cmVhbVxuICAgICAgICAuc3Vic2NyaWJlKChwb3M6IERhdGFUYWJsZVNjcm9sbFBvaW50KSA9PiB7XG4gICAgICAgICAgaWYgKHBvcy5pc0hvcml6b250YWwpIHtcbiAgICAgICAgICAgIHRoaXMuZmlsdGVyRHJvcGRvd24uY2xvc2UoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICBpZiAodGhpcy5kYXRhU3RhdGVTZXJ2aWNlLm9uRmlsdGVyVmFsdWVFeHRyYWN0KSB7XG4gICAgICAgIHRoaXMuZmV0Y2hGaWx0ZXJPcHRpb25zU3RyZWFtU3Vic2NyaXB0aW9uID0gdGhpcy5ldmVudFN0YXRlU2VydmljZS5mZXRjaEZpbHRlck9wdGlvbnNTdHJlYW1cbiAgICAgICAgICAucGlwZShcbiAgICAgICAgICAgIHN3aXRjaE1hcCgoKSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiB0aGlzLmRhdGFTdGF0ZVNlcnZpY2Uub25GaWx0ZXJWYWx1ZUV4dHJhY3QodGhpcy5jb2x1bW4pO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICApXG4gICAgICAgICAgLnN1YnNjcmliZSgob3B0aW9uczogRGF0YVRhYmxlRmlsdGVyT3B0aW9uW10pID0+IHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5maWx0ZXJEYXRhU3RyZWFtLm5leHQob3B0aW9ucyksIDApOyAvLyBUT0RPOiByZW1vdmUgdGhlIHRpbWVvdXRcbiAgICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ29tcG9uZW50IGRlc3Ryb3kgbGlmZWN5Y2xlIGV2ZW50LlxuICAgKi9cbiAgcHVibGljIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmZldGNoRmlsdGVyT3B0aW9uc1N0cmVhbVN1YnNjcmlwdGlvbikge1xuICAgICAgdGhpcy5mZXRjaEZpbHRlck9wdGlvbnNTdHJlYW1TdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5zY3JvbGxQb3NpdGlvblN0cmVhbVN1YnNjcmlwdGlvbikge1xuICAgICAgdGhpcy5zY3JvbGxQb3NpdGlvblN0cmVhbVN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgIH1cblxuICAgIHRoaXMuZmlsdGVyRGF0YVN0cmVhbS5jb21wbGV0ZSgpO1xuICB9XG5cbiAgcHVibGljIG9uRmlsdGVyRHJvcGRvd25Jbml0KGZpbHRlckRyb3Bkb3duOiBEcm9wZG93bkNvbXBvbmVudCk6IHZvaWQge1xuICAgIHRoaXMuZmlsdGVyRHJvcGRvd24gPSBmaWx0ZXJEcm9wZG93bjtcbiAgfVxuXG4gIC8qKlxuICAgKiBDbGVhciBjdXJyZW50IGNvbHVtbiBmaWx0ZXIgdmFsdWUuXG4gICAqL1xuICBwdWJsaWMgY2xlYXJGaWx0ZXIoKTogdm9pZCB7XG4gICAgdGhpcy5jb2x1bW4uZmlsdGVyID0gJyc7XG4gICAgdGhpcy5maWx0ZXIuZW1pdCgpO1xuICB9XG59XG4iXX0=