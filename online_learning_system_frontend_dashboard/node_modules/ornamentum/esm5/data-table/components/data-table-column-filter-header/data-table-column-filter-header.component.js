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
var DataTableColumnFilterHeaderComponent = /** @class */ (function () {
    function DataTableColumnFilterHeaderComponent(config, eventStateService) {
        this.config = config;
        this.eventStateService = eventStateService;
        this.columnFilterStream = new Subject();
        this.customFilterStream = new EventEmitter();
    }
    /**
     * Component initialize lifecycle event handler.
     */
    /**
     * Component initialize lifecycle event handler.
     * @return {?}
     */
    DataTableColumnFilterHeaderComponent.prototype.ngOnInit = /**
     * Component initialize lifecycle event handler.
     * @return {?}
     */
    function () {
        this.initCustomFilterEvent();
        this.initDebounceDefaultFilterEvent();
    };
    /**
     * Component destroy lifecycle event handler.
     */
    /**
     * Component destroy lifecycle event handler.
     * @return {?}
     */
    DataTableColumnFilterHeaderComponent.prototype.ngOnDestroy = /**
     * Component destroy lifecycle event handler.
     * @return {?}
     */
    function () {
        if (this.customFilterSubscription) {
            this.customFilterSubscription.unsubscribe();
        }
        if (this.columnFilterSubscription) {
            this.columnFilterSubscription.unsubscribe();
        }
    };
    /**
     * Initialize custom filter event.
     */
    /**
     * Initialize custom filter event.
     * @private
     * @return {?}
     */
    DataTableColumnFilterHeaderComponent.prototype.initCustomFilterEvent = /**
     * Initialize custom filter event.
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        this.customFilterSubscription = this.customFilterStream.subscribe((/**
         * @param {?} filterEventArgs
         * @return {?}
         */
        function (filterEventArgs) {
            filterEventArgs.column.filter = filterEventArgs.filter;
            _this.onFilter();
        }));
    };
    /**
     * Initialize debounce default filtering logic.
     */
    /**
     * Initialize debounce default filtering logic.
     * @private
     * @return {?}
     */
    DataTableColumnFilterHeaderComponent.prototype.initDebounceDefaultFilterEvent = /**
     * Initialize debounce default filtering logic.
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        this.columnFilterSubscription = this.columnFilterStream.pipe(debounceTime(this.config.filterDebounceTime)).subscribe((/**
         * @return {?}
         */
        function () {
            _this.eventStateService.dataFetchStream.next(DataFetchMode.SOFT_LOAD);
        }));
    };
    /**
     * Filter event handler.
     */
    /**
     * Filter event handler.
     * @return {?}
     */
    DataTableColumnFilterHeaderComponent.prototype.onFilter = /**
     * Filter event handler.
     * @return {?}
     */
    function () {
        if (this.config.filterDebounce) {
            this.columnFilterStream.next();
        }
        else {
            this.eventStateService.dataFetchStream.next(DataFetchMode.SOFT_LOAD);
        }
    };
    DataTableColumnFilterHeaderComponent.decorators = [
        { type: Component, args: [{
                    exportAs: 'ngDataTableColumnFilterHeader',
                    // tslint:disable-next-line
                    selector: '[ngDataTableColumnFilterHeader]',
                    template: "<th *ngIf=\"config.expandableRows\" class=\"ng-data-table-expand-column-header\"></th>\n<th *ngIf=\"config.showIndexColumn\" class=\"ng-data-table-index-column-header\"></th>\n<th *ngIf=\"config.showRowSelectCheckboxColumn\" class=\"ng-data-table-select-column-header\"></th>\n<ng-container *ngFor=\"let column of columns; index as i;\">\n  <th *ngIf=\"column.visible\">\n    <ng-data-table-column-filter-template [column]=\"column\"\n                                          [customFilterStream]=\"customFilterStream\"\n                                          [index]=\"i\"\n                                          (filter)=\"onFilter()\">\n    </ng-data-table-column-filter-template>\n  </th>\n</ng-container>\n"
                }] }
    ];
    /** @nocollapse */
    DataTableColumnFilterHeaderComponent.ctorParameters = function () { return [
        { type: DataTableConfigService },
        { type: DataTableEventStateService }
    ]; };
    DataTableColumnFilterHeaderComponent.propDecorators = {
        columns: [{ type: Input }]
    };
    return DataTableColumnFilterHeaderComponent;
}());
export { DataTableColumnFilterHeaderComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS10YWJsZS1jb2x1bW4tZmlsdGVyLWhlYWRlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9vcm5hbWVudHVtLyIsInNvdXJjZXMiOlsiZGF0YS10YWJsZS9jb21wb25lbnRzL2RhdGEtdGFibGUtY29sdW1uLWZpbHRlci1oZWFkZXIvZGF0YS10YWJsZS1jb2x1bW4tZmlsdGVyLWhlYWRlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBcUIsTUFBTSxlQUFlLENBQUM7QUFFbEYsT0FBTyxFQUFnQixPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDN0MsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBSTlDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUlsRSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUNsRixPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQzs7OztBQUtyRjtJQWlCRSw4Q0FBbUIsTUFBOEIsRUFBVSxpQkFBNkM7UUFBckYsV0FBTSxHQUFOLE1BQU0sQ0FBd0I7UUFBVSxzQkFBaUIsR0FBakIsaUJBQWlCLENBQTRCO1FBVmhHLHVCQUFrQixHQUFHLElBQUksT0FBTyxFQUFFLENBQUM7UUFLcEMsdUJBQWtCLEdBQUcsSUFBSSxZQUFZLEVBQTRCLENBQUM7SUFLa0MsQ0FBQztJQUU1Rzs7T0FFRzs7Ozs7SUFDSSx1REFBUTs7OztJQUFmO1FBQ0UsSUFBSSxDQUFDLHFCQUFxQixFQUFFLENBQUM7UUFDN0IsSUFBSSxDQUFDLDhCQUE4QixFQUFFLENBQUM7SUFDeEMsQ0FBQztJQUVEOztPQUVHOzs7OztJQUNJLDBEQUFXOzs7O0lBQWxCO1FBQ0UsSUFBSSxJQUFJLENBQUMsd0JBQXdCLEVBQUU7WUFDakMsSUFBSSxDQUFDLHdCQUF3QixDQUFDLFdBQVcsRUFBRSxDQUFDO1NBQzdDO1FBRUQsSUFBSSxJQUFJLENBQUMsd0JBQXdCLEVBQUU7WUFDakMsSUFBSSxDQUFDLHdCQUF3QixDQUFDLFdBQVcsRUFBRSxDQUFDO1NBQzdDO0lBQ0gsQ0FBQztJQUVEOztPQUVHOzs7Ozs7SUFDSyxvRUFBcUI7Ozs7O0lBQTdCO1FBQUEsaUJBS0M7UUFKQyxJQUFJLENBQUMsd0JBQXdCLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFNBQVM7Ozs7UUFBQyxVQUFDLGVBQXlDO1lBQzFHLGVBQWUsQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLGVBQWUsQ0FBQyxNQUFNLENBQUM7WUFDdkQsS0FBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ2xCLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQztJQUVEOztPQUVHOzs7Ozs7SUFDSyw2RUFBOEI7Ozs7O0lBQXRDO1FBQUEsaUJBSUM7UUFIQyxJQUFJLENBQUMsd0JBQXdCLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUMsU0FBUzs7O1FBQUM7WUFDbkgsS0FBSSxDQUFDLGlCQUFpQixDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ3ZFLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQztJQUVEOztPQUVHOzs7OztJQUNJLHVEQUFROzs7O0lBQWY7UUFDRSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsY0FBYyxFQUFFO1lBQzlCLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLEVBQUUsQ0FBQztTQUNoQzthQUFNO1lBQ0wsSUFBSSxDQUFDLGlCQUFpQixDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1NBQ3RFO0lBQ0gsQ0FBQzs7Z0JBcEVGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsK0JBQStCOztvQkFFekMsUUFBUSxFQUFFLGlDQUFpQztvQkFDM0MsMHRCQUErRDtpQkFDaEU7Ozs7Z0JBWFEsc0JBQXNCO2dCQUN0QiwwQkFBMEI7OzswQkFtQmhDLEtBQUs7O0lBdURSLDJDQUFDO0NBQUEsQUFyRUQsSUFxRUM7U0EvRFksb0NBQW9DOzs7Ozs7SUFDL0Msa0VBQTJDOzs7OztJQUUzQyx3RUFBK0M7Ozs7O0lBQy9DLHdFQUErQzs7SUFFL0Msa0VBQXlFOztJQUV6RSx1REFDMkM7O0lBRS9CLHNEQUFxQzs7Ozs7SUFBRSxpRUFBcUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uRGVzdHJveSwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFN1YnNjcmlwdGlvbiwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZGVib3VuY2VUaW1lIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBEYXRhVGFibGVGaWx0ZXJFdmVudEFyZ3MgfSBmcm9tICcuLi8uLi9tb2RlbHMvZGF0YS10YWJsZS1maWx0ZXItZXZlbnQtYXJncy5tb2RlbCc7XG5cbmltcG9ydCB7IERhdGFGZXRjaE1vZGUgfSBmcm9tICcuLi8uLi9tb2RlbHMvZGF0YS1mZXRjaC1tb2RlLmVudW0nO1xuXG5pbXBvcnQgeyBEYXRhVGFibGVDb2x1bW5Db21wb25lbnQgfSBmcm9tICcuLi9kYXRhLXRhYmxlLWNvbHVtbi9kYXRhLXRhYmxlLWNvbHVtbi5jb21wb25lbnQnO1xuXG5pbXBvcnQgeyBEYXRhVGFibGVDb25maWdTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvZGF0YS10YWJsZS1jb25maWcuc2VydmljZSc7XG5pbXBvcnQgeyBEYXRhVGFibGVFdmVudFN0YXRlU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2RhdGEtdGFibGUtZXZlbnQuc2VydmljZSc7XG5cbi8qKlxuICogRGF0YSB0YWJsZSBjb2x1bW4gZmlsdGVyIGhlYWRlciBjb21wb25lbnQuIEFwcGx5IGNvbHVtbnMgYXNzb2NpYXRlZCBkYXRhIGZpbHRlcmluZy5cbiAqL1xuQENvbXBvbmVudCh7XG4gIGV4cG9ydEFzOiAnbmdEYXRhVGFibGVDb2x1bW5GaWx0ZXJIZWFkZXInLFxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcbiAgc2VsZWN0b3I6ICdbbmdEYXRhVGFibGVDb2x1bW5GaWx0ZXJIZWFkZXJdJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2RhdGEtdGFibGUtY29sdW1uLWZpbHRlci1oZWFkZXIuY29tcG9uZW50Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIERhdGFUYWJsZUNvbHVtbkZpbHRlckhlYWRlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgcHJpdmF0ZSBjb2x1bW5GaWx0ZXJTdHJlYW0gPSBuZXcgU3ViamVjdCgpO1xuXG4gIHByaXZhdGUgY3VzdG9tRmlsdGVyU3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XG4gIHByaXZhdGUgY29sdW1uRmlsdGVyU3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XG5cbiAgcHVibGljIGN1c3RvbUZpbHRlclN0cmVhbSA9IG5ldyBFdmVudEVtaXR0ZXI8RGF0YVRhYmxlRmlsdGVyRXZlbnRBcmdzPigpO1xuXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBjb2x1bW5zOiBEYXRhVGFibGVDb2x1bW5Db21wb25lbnRbXTtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgY29uZmlnOiBEYXRhVGFibGVDb25maWdTZXJ2aWNlLCBwcml2YXRlIGV2ZW50U3RhdGVTZXJ2aWNlOiBEYXRhVGFibGVFdmVudFN0YXRlU2VydmljZSkge31cblxuICAvKipcbiAgICogQ29tcG9uZW50IGluaXRpYWxpemUgbGlmZWN5Y2xlIGV2ZW50IGhhbmRsZXIuXG4gICAqL1xuICBwdWJsaWMgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5pbml0Q3VzdG9tRmlsdGVyRXZlbnQoKTtcbiAgICB0aGlzLmluaXREZWJvdW5jZURlZmF1bHRGaWx0ZXJFdmVudCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIENvbXBvbmVudCBkZXN0cm95IGxpZmVjeWNsZSBldmVudCBoYW5kbGVyLlxuICAgKi9cbiAgcHVibGljIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmN1c3RvbUZpbHRlclN1YnNjcmlwdGlvbikge1xuICAgICAgdGhpcy5jdXN0b21GaWx0ZXJTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5jb2x1bW5GaWx0ZXJTdWJzY3JpcHRpb24pIHtcbiAgICAgIHRoaXMuY29sdW1uRmlsdGVyU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemUgY3VzdG9tIGZpbHRlciBldmVudC5cbiAgICovXG4gIHByaXZhdGUgaW5pdEN1c3RvbUZpbHRlckV2ZW50KCk6IHZvaWQge1xuICAgIHRoaXMuY3VzdG9tRmlsdGVyU3Vic2NyaXB0aW9uID0gdGhpcy5jdXN0b21GaWx0ZXJTdHJlYW0uc3Vic2NyaWJlKChmaWx0ZXJFdmVudEFyZ3M6IERhdGFUYWJsZUZpbHRlckV2ZW50QXJncykgPT4ge1xuICAgICAgZmlsdGVyRXZlbnRBcmdzLmNvbHVtbi5maWx0ZXIgPSBmaWx0ZXJFdmVudEFyZ3MuZmlsdGVyO1xuICAgICAgdGhpcy5vbkZpbHRlcigpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemUgZGVib3VuY2UgZGVmYXVsdCBmaWx0ZXJpbmcgbG9naWMuXG4gICAqL1xuICBwcml2YXRlIGluaXREZWJvdW5jZURlZmF1bHRGaWx0ZXJFdmVudCgpOiB2b2lkIHtcbiAgICB0aGlzLmNvbHVtbkZpbHRlclN1YnNjcmlwdGlvbiA9IHRoaXMuY29sdW1uRmlsdGVyU3RyZWFtLnBpcGUoZGVib3VuY2VUaW1lKHRoaXMuY29uZmlnLmZpbHRlckRlYm91bmNlVGltZSkpLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICB0aGlzLmV2ZW50U3RhdGVTZXJ2aWNlLmRhdGFGZXRjaFN0cmVhbS5uZXh0KERhdGFGZXRjaE1vZGUuU09GVF9MT0FEKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBGaWx0ZXIgZXZlbnQgaGFuZGxlci5cbiAgICovXG4gIHB1YmxpYyBvbkZpbHRlcigpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5jb25maWcuZmlsdGVyRGVib3VuY2UpIHtcbiAgICAgIHRoaXMuY29sdW1uRmlsdGVyU3RyZWFtLm5leHQoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5ldmVudFN0YXRlU2VydmljZS5kYXRhRmV0Y2hTdHJlYW0ubmV4dChEYXRhRmV0Y2hNb2RlLlNPRlRfTE9BRCk7XG4gICAgfVxuICB9XG59XG4iXX0=