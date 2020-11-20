/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, EventEmitter, Input } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { DataFetchMode } from '../../models/data-fetch-mode.enum';
import { DataTableConfigService } from '../../services/data-table-config.service';
import { DataTableEventStateService } from '../../services/data-table-event.service';
/**
 * Data table column filter header component. Apply columns associated data filtering.
 */
export class DataTableColumnFilterHeaderComponent {
    /**
     * @param {?} config
     * @param {?} eventStateService
     */
    constructor(config, eventStateService) {
        this.config = config;
        this.eventStateService = eventStateService;
        this.columnFilterStream = new Subject();
        this.customFilterStream = new EventEmitter();
    }
    /**
     * Component initialize lifecycle event handler.
     * @return {?}
     */
    ngOnInit() {
        this.initCustomFilterEvent();
        this.initDebounceDefaultFilterEvent();
    }
    /**
     * Component destroy lifecycle event handler.
     * @return {?}
     */
    ngOnDestroy() {
        if (this.customFilterSubscription) {
            this.customFilterSubscription.unsubscribe();
        }
        if (this.columnFilterSubscription) {
            this.columnFilterSubscription.unsubscribe();
        }
    }
    /**
     * Initialize custom filter event.
     * @private
     * @return {?}
     */
    initCustomFilterEvent() {
        this.customFilterSubscription = this.customFilterStream.subscribe((/**
         * @param {?} filterEventArgs
         * @return {?}
         */
        (filterEventArgs) => {
            filterEventArgs.column.filter = filterEventArgs.filter;
            this.onFilter();
        }));
    }
    /**
     * Initialize debounce default filtering logic.
     * @private
     * @return {?}
     */
    initDebounceDefaultFilterEvent() {
        this.columnFilterSubscription = this.columnFilterStream.pipe(debounceTime(this.config.filterDebounceTime)).subscribe((/**
         * @return {?}
         */
        () => {
            this.eventStateService.dataFetchStream.next(DataFetchMode.SOFT_LOAD);
        }));
    }
    /**
     * Filter event handler.
     * @return {?}
     */
    onFilter() {
        if (this.config.filterDebounce) {
            this.columnFilterStream.next();
        }
        else {
            this.eventStateService.dataFetchStream.next(DataFetchMode.SOFT_LOAD);
        }
    }
}
DataTableColumnFilterHeaderComponent.decorators = [
    { type: Component, args: [{
                exportAs: 'ngDataTableColumnFilterHeader',
                // tslint:disable-next-line
                selector: '[ngDataTableColumnFilterHeader]',
                template: "<th *ngIf=\"config.expandableRows\" class=\"ng-data-table-expand-column-header\"></th>\n<th *ngIf=\"config.showIndexColumn\" class=\"ng-data-table-index-column-header\"></th>\n<th *ngIf=\"config.showRowSelectCheckboxColumn\" class=\"ng-data-table-select-column-header\"></th>\n<ng-container *ngFor=\"let column of columns; index as i;\">\n  <th *ngIf=\"column.visible\">\n    <ng-data-table-column-filter-template [column]=\"column\"\n                                          [customFilterStream]=\"customFilterStream\"\n                                          [index]=\"i\"\n                                          (filter)=\"onFilter()\">\n    </ng-data-table-column-filter-template>\n  </th>\n</ng-container>\n"
            }] }
];
/** @nocollapse */
DataTableColumnFilterHeaderComponent.ctorParameters = () => [
    { type: DataTableConfigService },
    { type: DataTableEventStateService }
];
DataTableColumnFilterHeaderComponent.propDecorators = {
    columns: [{ type: Input }]
};
if (false) {
    /**
     * @type {?}
     * @private
     */
    DataTableColumnFilterHeaderComponent.prototype.columnFilterStream;
    /**
     * @type {?}
     * @private
     */
    DataTableColumnFilterHeaderComponent.prototype.customFilterSubscription;
    /**
     * @type {?}
     * @private
     */
    DataTableColumnFilterHeaderComponent.prototype.columnFilterSubscription;
    /** @type {?} */
    DataTableColumnFilterHeaderComponent.prototype.customFilterStream;
    /** @type {?} */
    DataTableColumnFilterHeaderComponent.prototype.columns;
    /** @type {?} */
    DataTableColumnFilterHeaderComponent.prototype.config;
    /**
     * @type {?}
     * @private
     */
    DataTableColumnFilterHeaderComponent.prototype.eventStateService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS10YWJsZS1jb2x1bW4tZmlsdGVyLWhlYWRlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9vcm5hbWVudHVtLyIsInNvdXJjZXMiOlsiZGF0YS10YWJsZS9jb21wb25lbnRzL2RhdGEtdGFibGUtY29sdW1uLWZpbHRlci1oZWFkZXIvZGF0YS10YWJsZS1jb2x1bW4tZmlsdGVyLWhlYWRlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBcUIsTUFBTSxlQUFlLENBQUM7QUFFbEYsT0FBTyxFQUFnQixPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDN0MsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBSTlDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUlsRSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUNsRixPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQzs7OztBQVdyRixNQUFNLE9BQU8sb0NBQW9DOzs7OztJQVcvQyxZQUFtQixNQUE4QixFQUFVLGlCQUE2QztRQUFyRixXQUFNLEdBQU4sTUFBTSxDQUF3QjtRQUFVLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBNEI7UUFWaEcsdUJBQWtCLEdBQUcsSUFBSSxPQUFPLEVBQUUsQ0FBQztRQUtwQyx1QkFBa0IsR0FBRyxJQUFJLFlBQVksRUFBNEIsQ0FBQztJQUtrQyxDQUFDOzs7OztJQUtyRyxRQUFRO1FBQ2IsSUFBSSxDQUFDLHFCQUFxQixFQUFFLENBQUM7UUFDN0IsSUFBSSxDQUFDLDhCQUE4QixFQUFFLENBQUM7SUFDeEMsQ0FBQzs7Ozs7SUFLTSxXQUFXO1FBQ2hCLElBQUksSUFBSSxDQUFDLHdCQUF3QixFQUFFO1lBQ2pDLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxXQUFXLEVBQUUsQ0FBQztTQUM3QztRQUVELElBQUksSUFBSSxDQUFDLHdCQUF3QixFQUFFO1lBQ2pDLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxXQUFXLEVBQUUsQ0FBQztTQUM3QztJQUNILENBQUM7Ozs7OztJQUtPLHFCQUFxQjtRQUMzQixJQUFJLENBQUMsd0JBQXdCLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFNBQVM7Ozs7UUFBQyxDQUFDLGVBQXlDLEVBQUUsRUFBRTtZQUM5RyxlQUFlLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxlQUFlLENBQUMsTUFBTSxDQUFDO1lBQ3ZELElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUNsQixDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7OztJQUtPLDhCQUE4QjtRQUNwQyxJQUFJLENBQUMsd0JBQXdCLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUMsU0FBUzs7O1FBQUMsR0FBRyxFQUFFO1lBQ3hILElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUN2RSxDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7O0lBS00sUUFBUTtRQUNiLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxjQUFjLEVBQUU7WUFDOUIsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksRUFBRSxDQUFDO1NBQ2hDO2FBQU07WUFDTCxJQUFJLENBQUMsaUJBQWlCLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLENBQUM7U0FDdEU7SUFDSCxDQUFDOzs7WUFwRUYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSwrQkFBK0I7O2dCQUV6QyxRQUFRLEVBQUUsaUNBQWlDO2dCQUMzQywwdEJBQStEO2FBQ2hFOzs7O1lBWFEsc0JBQXNCO1lBQ3RCLDBCQUEwQjs7O3NCQW1CaEMsS0FBSzs7Ozs7OztJQVBOLGtFQUEyQzs7Ozs7SUFFM0Msd0VBQStDOzs7OztJQUMvQyx3RUFBK0M7O0lBRS9DLGtFQUF5RTs7SUFFekUsdURBQzJDOztJQUUvQixzREFBcUM7Ozs7O0lBQUUsaUVBQXFEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkRlc3Ryb3ksIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBTdWJzY3JpcHRpb24sIFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGRlYm91bmNlVGltZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgRGF0YVRhYmxlRmlsdGVyRXZlbnRBcmdzIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2RhdGEtdGFibGUtZmlsdGVyLWV2ZW50LWFyZ3MubW9kZWwnO1xuXG5pbXBvcnQgeyBEYXRhRmV0Y2hNb2RlIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2RhdGEtZmV0Y2gtbW9kZS5lbnVtJztcblxuaW1wb3J0IHsgRGF0YVRhYmxlQ29sdW1uQ29tcG9uZW50IH0gZnJvbSAnLi4vZGF0YS10YWJsZS1jb2x1bW4vZGF0YS10YWJsZS1jb2x1bW4uY29tcG9uZW50JztcblxuaW1wb3J0IHsgRGF0YVRhYmxlQ29uZmlnU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2RhdGEtdGFibGUtY29uZmlnLnNlcnZpY2UnO1xuaW1wb3J0IHsgRGF0YVRhYmxlRXZlbnRTdGF0ZVNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9kYXRhLXRhYmxlLWV2ZW50LnNlcnZpY2UnO1xuXG4vKipcbiAqIERhdGEgdGFibGUgY29sdW1uIGZpbHRlciBoZWFkZXIgY29tcG9uZW50LiBBcHBseSBjb2x1bW5zIGFzc29jaWF0ZWQgZGF0YSBmaWx0ZXJpbmcuXG4gKi9cbkBDb21wb25lbnQoe1xuICBleHBvcnRBczogJ25nRGF0YVRhYmxlQ29sdW1uRmlsdGVySGVhZGVyJyxcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG4gIHNlbGVjdG9yOiAnW25nRGF0YVRhYmxlQ29sdW1uRmlsdGVySGVhZGVyXScsXG4gIHRlbXBsYXRlVXJsOiAnLi9kYXRhLXRhYmxlLWNvbHVtbi1maWx0ZXItaGVhZGVyLmNvbXBvbmVudC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBEYXRhVGFibGVDb2x1bW5GaWx0ZXJIZWFkZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIHByaXZhdGUgY29sdW1uRmlsdGVyU3RyZWFtID0gbmV3IFN1YmplY3QoKTtcblxuICBwcml2YXRlIGN1c3RvbUZpbHRlclN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuICBwcml2YXRlIGNvbHVtbkZpbHRlclN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuXG4gIHB1YmxpYyBjdXN0b21GaWx0ZXJTdHJlYW0gPSBuZXcgRXZlbnRFbWl0dGVyPERhdGFUYWJsZUZpbHRlckV2ZW50QXJncz4oKTtcblxuICBASW5wdXQoKVxuICBwdWJsaWMgY29sdW1uczogRGF0YVRhYmxlQ29sdW1uQ29tcG9uZW50W107XG5cbiAgY29uc3RydWN0b3IocHVibGljIGNvbmZpZzogRGF0YVRhYmxlQ29uZmlnU2VydmljZSwgcHJpdmF0ZSBldmVudFN0YXRlU2VydmljZTogRGF0YVRhYmxlRXZlbnRTdGF0ZVNlcnZpY2UpIHt9XG5cbiAgLyoqXG4gICAqIENvbXBvbmVudCBpbml0aWFsaXplIGxpZmVjeWNsZSBldmVudCBoYW5kbGVyLlxuICAgKi9cbiAgcHVibGljIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuaW5pdEN1c3RvbUZpbHRlckV2ZW50KCk7XG4gICAgdGhpcy5pbml0RGVib3VuY2VEZWZhdWx0RmlsdGVyRXZlbnQoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb21wb25lbnQgZGVzdHJveSBsaWZlY3ljbGUgZXZlbnQgaGFuZGxlci5cbiAgICovXG4gIHB1YmxpYyBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5jdXN0b21GaWx0ZXJTdWJzY3JpcHRpb24pIHtcbiAgICAgIHRoaXMuY3VzdG9tRmlsdGVyU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuY29sdW1uRmlsdGVyU3Vic2NyaXB0aW9uKSB7XG4gICAgICB0aGlzLmNvbHVtbkZpbHRlclN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBJbml0aWFsaXplIGN1c3RvbSBmaWx0ZXIgZXZlbnQuXG4gICAqL1xuICBwcml2YXRlIGluaXRDdXN0b21GaWx0ZXJFdmVudCgpOiB2b2lkIHtcbiAgICB0aGlzLmN1c3RvbUZpbHRlclN1YnNjcmlwdGlvbiA9IHRoaXMuY3VzdG9tRmlsdGVyU3RyZWFtLnN1YnNjcmliZSgoZmlsdGVyRXZlbnRBcmdzOiBEYXRhVGFibGVGaWx0ZXJFdmVudEFyZ3MpID0+IHtcbiAgICAgIGZpbHRlckV2ZW50QXJncy5jb2x1bW4uZmlsdGVyID0gZmlsdGVyRXZlbnRBcmdzLmZpbHRlcjtcbiAgICAgIHRoaXMub25GaWx0ZXIoKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbml0aWFsaXplIGRlYm91bmNlIGRlZmF1bHQgZmlsdGVyaW5nIGxvZ2ljLlxuICAgKi9cbiAgcHJpdmF0ZSBpbml0RGVib3VuY2VEZWZhdWx0RmlsdGVyRXZlbnQoKTogdm9pZCB7XG4gICAgdGhpcy5jb2x1bW5GaWx0ZXJTdWJzY3JpcHRpb24gPSB0aGlzLmNvbHVtbkZpbHRlclN0cmVhbS5waXBlKGRlYm91bmNlVGltZSh0aGlzLmNvbmZpZy5maWx0ZXJEZWJvdW5jZVRpbWUpKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgdGhpcy5ldmVudFN0YXRlU2VydmljZS5kYXRhRmV0Y2hTdHJlYW0ubmV4dChEYXRhRmV0Y2hNb2RlLlNPRlRfTE9BRCk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogRmlsdGVyIGV2ZW50IGhhbmRsZXIuXG4gICAqL1xuICBwdWJsaWMgb25GaWx0ZXIoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuY29uZmlnLmZpbHRlckRlYm91bmNlKSB7XG4gICAgICB0aGlzLmNvbHVtbkZpbHRlclN0cmVhbS5uZXh0KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZXZlbnRTdGF0ZVNlcnZpY2UuZGF0YUZldGNoU3RyZWFtLm5leHQoRGF0YUZldGNoTW9kZS5TT0ZUX0xPQUQpO1xuICAgIH1cbiAgfVxufVxuIl19