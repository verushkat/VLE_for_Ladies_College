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
var DataTableNoDataBodyComponent = /** @class */ (function () {
    function DataTableNoDataBodyComponent(config, eventStateService) {
        this.config = config;
        this.eventStateService = eventStateService;
    }
    /**
     * Reset all applied filters.
     */
    /**
     * Reset all applied filters.
     * @return {?}
     */
    DataTableNoDataBodyComponent.prototype.resetFilters = /**
     * Reset all applied filters.
     * @return {?}
     */
    function () {
        this.eventStateService.dataFetchStream.emit(DataFetchMode.HARD_RELOAD);
    };
    Object.defineProperty(DataTableNoDataBodyComponent.prototype, "showDefaultNoDataTemplate", {
        /**
         * Get default no data template display status.
         * @return True if default no data template should be displayed.
         */
        get: /**
         * Get default no data template display status.
         * @return {?} True if default no data template should be displayed.
         */
        function () {
            return !!(!this.noRecordsTemplate && this.config.translations.noDataMessage);
        },
        enumerable: true,
        configurable: true
    });
    DataTableNoDataBodyComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ng-data-table-no-data-body',
                    template: "<div class=\"ng-data-table-no-records-message\" *ngIf=\"showDefaultNoDataTemplate\">\n  <h1 class=\"ng-data-table-no-records-main-heading-message\">{{ config.translations.noDataMessage.header }}</h1>\n  <h2 class=\"ng-data-table-no-records-sub-heading-message\">{{ config.translations.noDataMessage.body }}</h2>\n  <button (click)=\"resetFilters()\" class=\"ng-data-table-no-records-message-button\">Reload Data</button>\n</div>\n<ng-template *ngIf=\"noRecordsTemplate\" [ngTemplateOutlet]=\"noRecordsTemplate\"></ng-template>\n"
                }] }
    ];
    /** @nocollapse */
    DataTableNoDataBodyComponent.ctorParameters = function () { return [
        { type: DataTableConfigService },
        { type: DataTableEventStateService }
    ]; };
    DataTableNoDataBodyComponent.propDecorators = {
        noRecordsTemplate: [{ type: Input }]
    };
    return DataTableNoDataBodyComponent;
}());
export { DataTableNoDataBodyComponent };
if (false) {
    /** @type {?} */
    DataTableNoDataBodyComponent.prototype.noRecordsTemplate;
    /** @type {?} */
    DataTableNoDataBodyComponent.prototype.config;
    /** @type {?} */
    DataTableNoDataBodyComponent.prototype.eventStateService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS10YWJsZS1uby1kYXRhLWJvZHkuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vb3JuYW1lbnR1bS8iLCJzb3VyY2VzIjpbImRhdGEtdGFibGUvY29tcG9uZW50cy9kYXRhLXRhYmxlLW5vLWRhdGEtYm9keS9kYXRhLXRhYmxlLW5vLWRhdGEtYm9keS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLFdBQVcsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUU5RCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFFbEUsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFDbEYsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0seUNBQXlDLENBQUM7Ozs7QUFLckY7SUFRRSxzQ0FBbUIsTUFBOEIsRUFBUyxpQkFBNkM7UUFBcEYsV0FBTSxHQUFOLE1BQU0sQ0FBd0I7UUFBUyxzQkFBaUIsR0FBakIsaUJBQWlCLENBQTRCO0lBQUcsQ0FBQztJQUUzRzs7T0FFRzs7Ozs7SUFDSSxtREFBWTs7OztJQUFuQjtRQUNFLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUN6RSxDQUFDO0lBTUQsc0JBQVcsbUVBQXlCO1FBSnBDOzs7V0FHRzs7Ozs7UUFDSDtZQUNFLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDL0UsQ0FBQzs7O09BQUE7O2dCQXZCRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLDRCQUE0QjtvQkFDdEMsNGhCQUF1RDtpQkFDeEQ7Ozs7Z0JBVFEsc0JBQXNCO2dCQUN0QiwwQkFBMEI7OztvQ0FVaEMsS0FBSzs7SUFtQlIsbUNBQUM7Q0FBQSxBQXhCRCxJQXdCQztTQXBCWSw0QkFBNEI7OztJQUN2Qyx5REFDMkM7O0lBRS9CLDhDQUFxQzs7SUFBRSx5REFBb0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBUZW1wbGF0ZVJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBEYXRhRmV0Y2hNb2RlIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2RhdGEtZmV0Y2gtbW9kZS5lbnVtJztcblxuaW1wb3J0IHsgRGF0YVRhYmxlQ29uZmlnU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2RhdGEtdGFibGUtY29uZmlnLnNlcnZpY2UnO1xuaW1wb3J0IHsgRGF0YVRhYmxlRXZlbnRTdGF0ZVNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9kYXRhLXRhYmxlLWV2ZW50LnNlcnZpY2UnO1xuXG4vKipcbiAqIE5vIGRhdGEgYm9keSBjb21wb25lbnQuIFVzZWQgdG8gZGlzcGxheSBubyBkYXRhIG1lc3NhZ2Ugd2hlbiBkYXRhIG5vdCBhdmFpbGFibGUuXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25nLWRhdGEtdGFibGUtbm8tZGF0YS1ib2R5JyxcbiAgdGVtcGxhdGVVcmw6ICcuL2RhdGEtdGFibGUtbm8tZGF0YS1ib2R5LmNvbXBvbmVudC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBEYXRhVGFibGVOb0RhdGFCb2R5Q29tcG9uZW50IHtcbiAgQElucHV0KClcbiAgcHVibGljIG5vUmVjb3Jkc1RlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBjb25maWc6IERhdGFUYWJsZUNvbmZpZ1NlcnZpY2UsIHB1YmxpYyBldmVudFN0YXRlU2VydmljZTogRGF0YVRhYmxlRXZlbnRTdGF0ZVNlcnZpY2UpIHt9XG5cbiAgLyoqXG4gICAqIFJlc2V0IGFsbCBhcHBsaWVkIGZpbHRlcnMuXG4gICAqL1xuICBwdWJsaWMgcmVzZXRGaWx0ZXJzKCk6IHZvaWQge1xuICAgIHRoaXMuZXZlbnRTdGF0ZVNlcnZpY2UuZGF0YUZldGNoU3RyZWFtLmVtaXQoRGF0YUZldGNoTW9kZS5IQVJEX1JFTE9BRCk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGRlZmF1bHQgbm8gZGF0YSB0ZW1wbGF0ZSBkaXNwbGF5IHN0YXR1cy5cbiAgICogQHJldHVybiBUcnVlIGlmIGRlZmF1bHQgbm8gZGF0YSB0ZW1wbGF0ZSBzaG91bGQgYmUgZGlzcGxheWVkLlxuICAgKi9cbiAgcHVibGljIGdldCBzaG93RGVmYXVsdE5vRGF0YVRlbXBsYXRlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAhISghdGhpcy5ub1JlY29yZHNUZW1wbGF0ZSAmJiB0aGlzLmNvbmZpZy50cmFuc2xhdGlvbnMubm9EYXRhTWVzc2FnZSk7XG4gIH1cbn1cbiJdfQ==