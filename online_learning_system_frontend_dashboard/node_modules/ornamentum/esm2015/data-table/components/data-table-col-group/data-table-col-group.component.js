/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { DataTableColumnComponent } from '../data-table-column/data-table-column.component';
import { DataTableConfigService } from '../../services/data-table-config.service';
/**
 * Data table column group component. This component wraps data table column groups.
 */
export class DataTableColGroupComponent {
    /**
     * @param {?} config
     */
    constructor(config) {
        this.config = config;
    }
}
DataTableColGroupComponent.decorators = [
    { type: Component, args: [{
                exportAs: 'ngDataTableColGroup',
                // tslint:disable-next-line
                selector: '[ngDataTableColGroup]',
                template: "<col *ngIf=\"config.expandableRows\" [style.width]=\"config.expanderColumnWidth | ngPx\" />\n<col *ngIf=\"config.showIndexColumn\" [style.width]=\"config.indexColumnWidth | ngPx\" />\n<col *ngIf=\"config.showRowSelectCheckboxColumn\" [style.width]=\"config.selectionColumnWidth | ngPx\" />\n<ng-container *ngFor=\"let column of columns\">\n  <col [style.width]=\"column.width | ngPx\" *ngIf=\"column.visible\" />\n</ng-container>\n"
            }] }
];
/** @nocollapse */
DataTableColGroupComponent.ctorParameters = () => [
    { type: DataTableConfigService }
];
DataTableColGroupComponent.propDecorators = {
    columns: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    DataTableColGroupComponent.prototype.columns;
    /** @type {?} */
    DataTableColGroupComponent.prototype.config;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS10YWJsZS1jb2wtZ3JvdXAuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vb3JuYW1lbnR1bS8iLCJzb3VyY2VzIjpbImRhdGEtdGFibGUvY29tcG9uZW50cy9kYXRhLXRhYmxlLWNvbC1ncm91cC9kYXRhLXRhYmxlLWNvbC1ncm91cC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRWpELE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLGtEQUFrRCxDQUFDO0FBRTVGLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDBDQUEwQyxDQUFDOzs7O0FBV2xGLE1BQU0sT0FBTywwQkFBMEI7Ozs7SUFJckMsWUFBbUIsTUFBOEI7UUFBOUIsV0FBTSxHQUFOLE1BQU0sQ0FBd0I7SUFBRyxDQUFDOzs7WUFWdEQsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxxQkFBcUI7O2dCQUUvQixRQUFRLEVBQUUsdUJBQXVCO2dCQUNqQywyYkFBb0Q7YUFDckQ7Ozs7WUFWUSxzQkFBc0I7OztzQkFZNUIsS0FBSzs7OztJQUFOLDZDQUN5Qzs7SUFFN0IsNENBQXFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBEYXRhVGFibGVDb2x1bW5Db21wb25lbnQgfSBmcm9tICcuLi9kYXRhLXRhYmxlLWNvbHVtbi9kYXRhLXRhYmxlLWNvbHVtbi5jb21wb25lbnQnO1xuXG5pbXBvcnQgeyBEYXRhVGFibGVDb25maWdTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvZGF0YS10YWJsZS1jb25maWcuc2VydmljZSc7XG5cbi8qKlxuICogRGF0YSB0YWJsZSBjb2x1bW4gZ3JvdXAgY29tcG9uZW50LiBUaGlzIGNvbXBvbmVudCB3cmFwcyBkYXRhIHRhYmxlIGNvbHVtbiBncm91cHMuXG4gKi9cbkBDb21wb25lbnQoe1xuICBleHBvcnRBczogJ25nRGF0YVRhYmxlQ29sR3JvdXAnLFxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcbiAgc2VsZWN0b3I6ICdbbmdEYXRhVGFibGVDb2xHcm91cF0nLFxuICB0ZW1wbGF0ZVVybDogJy4vZGF0YS10YWJsZS1jb2wtZ3JvdXAuY29tcG9uZW50Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIERhdGFUYWJsZUNvbEdyb3VwQ29tcG9uZW50IHtcbiAgQElucHV0KClcbiAgcHVibGljIGNvbHVtbnM6IERhdGFUYWJsZUNvbHVtbkNvbXBvbmVudDtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgY29uZmlnOiBEYXRhVGFibGVDb25maWdTZXJ2aWNlKSB7fVxufVxuIl19