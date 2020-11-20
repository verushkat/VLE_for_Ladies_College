/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, TemplateRef } from '@angular/core';
import { DataFetchMode } from '../../models/data-fetch-mode.enum';
import { DataTableConfigService } from '../../services/data-table-config.service';
import { DataTableEventStateService } from '../../services/data-table-event.service';
/**
 * No data body component. Used to display no data message when data not available.
 */
export class DataTableNoDataBodyComponent {
    /**
     * @param {?} config
     * @param {?} eventStateService
     */
    constructor(config, eventStateService) {
        this.config = config;
        this.eventStateService = eventStateService;
    }
    /**
     * Reset all applied filters.
     * @return {?}
     */
    resetFilters() {
        this.eventStateService.dataFetchStream.emit(DataFetchMode.HARD_RELOAD);
    }
    /**
     * Get default no data template display status.
     * @return {?} True if default no data template should be displayed.
     */
    get showDefaultNoDataTemplate() {
        return !!(!this.noRecordsTemplate && this.config.translations.noDataMessage);
    }
}
DataTableNoDataBodyComponent.decorators = [
    { type: Component, args: [{
                selector: 'ng-data-table-no-data-body',
                template: "<div class=\"ng-data-table-no-records-message\" *ngIf=\"showDefaultNoDataTemplate\">\n  <h1 class=\"ng-data-table-no-records-main-heading-message\">{{ config.translations.noDataMessage.header }}</h1>\n  <h2 class=\"ng-data-table-no-records-sub-heading-message\">{{ config.translations.noDataMessage.body }}</h2>\n  <button (click)=\"resetFilters()\" class=\"ng-data-table-no-records-message-button\">Reload Data</button>\n</div>\n<ng-template *ngIf=\"noRecordsTemplate\" [ngTemplateOutlet]=\"noRecordsTemplate\"></ng-template>\n"
            }] }
];
/** @nocollapse */
DataTableNoDataBodyComponent.ctorParameters = () => [
    { type: DataTableConfigService },
    { type: DataTableEventStateService }
];
DataTableNoDataBodyComponent.propDecorators = {
    noRecordsTemplate: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    DataTableNoDataBodyComponent.prototype.noRecordsTemplate;
    /** @type {?} */
    DataTableNoDataBodyComponent.prototype.config;
    /** @type {?} */
    DataTableNoDataBodyComponent.prototype.eventStateService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS10YWJsZS1uby1kYXRhLWJvZHkuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vb3JuYW1lbnR1bS8iLCJzb3VyY2VzIjpbImRhdGEtdGFibGUvY29tcG9uZW50cy9kYXRhLXRhYmxlLW5vLWRhdGEtYm9keS9kYXRhLXRhYmxlLW5vLWRhdGEtYm9keS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLFdBQVcsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUU5RCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFFbEUsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFDbEYsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0seUNBQXlDLENBQUM7Ozs7QUFTckYsTUFBTSxPQUFPLDRCQUE0Qjs7Ozs7SUFJdkMsWUFBbUIsTUFBOEIsRUFBUyxpQkFBNkM7UUFBcEYsV0FBTSxHQUFOLE1BQU0sQ0FBd0I7UUFBUyxzQkFBaUIsR0FBakIsaUJBQWlCLENBQTRCO0lBQUcsQ0FBQzs7Ozs7SUFLcEcsWUFBWTtRQUNqQixJQUFJLENBQUMsaUJBQWlCLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDekUsQ0FBQzs7Ozs7SUFNRCxJQUFXLHlCQUF5QjtRQUNsQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGlCQUFpQixJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQy9FLENBQUM7OztZQXZCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLDRCQUE0QjtnQkFDdEMsNGhCQUF1RDthQUN4RDs7OztZQVRRLHNCQUFzQjtZQUN0QiwwQkFBMEI7OztnQ0FVaEMsS0FBSzs7OztJQUFOLHlEQUMyQzs7SUFFL0IsOENBQXFDOztJQUFFLHlEQUFvRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIFRlbXBsYXRlUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IERhdGFGZXRjaE1vZGUgfSBmcm9tICcuLi8uLi9tb2RlbHMvZGF0YS1mZXRjaC1tb2RlLmVudW0nO1xuXG5pbXBvcnQgeyBEYXRhVGFibGVDb25maWdTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvZGF0YS10YWJsZS1jb25maWcuc2VydmljZSc7XG5pbXBvcnQgeyBEYXRhVGFibGVFdmVudFN0YXRlU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2RhdGEtdGFibGUtZXZlbnQuc2VydmljZSc7XG5cbi8qKlxuICogTm8gZGF0YSBib2R5IGNvbXBvbmVudC4gVXNlZCB0byBkaXNwbGF5IG5vIGRhdGEgbWVzc2FnZSB3aGVuIGRhdGEgbm90IGF2YWlsYWJsZS5cbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbmctZGF0YS10YWJsZS1uby1kYXRhLWJvZHknLFxuICB0ZW1wbGF0ZVVybDogJy4vZGF0YS10YWJsZS1uby1kYXRhLWJvZHkuY29tcG9uZW50Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIERhdGFUYWJsZU5vRGF0YUJvZHlDb21wb25lbnQge1xuICBASW5wdXQoKVxuICBwdWJsaWMgbm9SZWNvcmRzVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgY29uc3RydWN0b3IocHVibGljIGNvbmZpZzogRGF0YVRhYmxlQ29uZmlnU2VydmljZSwgcHVibGljIGV2ZW50U3RhdGVTZXJ2aWNlOiBEYXRhVGFibGVFdmVudFN0YXRlU2VydmljZSkge31cblxuICAvKipcbiAgICogUmVzZXQgYWxsIGFwcGxpZWQgZmlsdGVycy5cbiAgICovXG4gIHB1YmxpYyByZXNldEZpbHRlcnMoKTogdm9pZCB7XG4gICAgdGhpcy5ldmVudFN0YXRlU2VydmljZS5kYXRhRmV0Y2hTdHJlYW0uZW1pdChEYXRhRmV0Y2hNb2RlLkhBUkRfUkVMT0FEKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgZGVmYXVsdCBubyBkYXRhIHRlbXBsYXRlIGRpc3BsYXkgc3RhdHVzLlxuICAgKiBAcmV0dXJuIFRydWUgaWYgZGVmYXVsdCBubyBkYXRhIHRlbXBsYXRlIHNob3VsZCBiZSBkaXNwbGF5ZWQuXG4gICAqL1xuICBwdWJsaWMgZ2V0IHNob3dEZWZhdWx0Tm9EYXRhVGVtcGxhdGUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuICEhKCF0aGlzLm5vUmVjb3Jkc1RlbXBsYXRlICYmIHRoaXMuY29uZmlnLnRyYW5zbGF0aW9ucy5ub0RhdGFNZXNzYWdlKTtcbiAgfVxufVxuIl19