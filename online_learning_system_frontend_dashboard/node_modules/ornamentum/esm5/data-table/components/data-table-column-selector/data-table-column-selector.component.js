/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { DataTableDataStateService } from '../../services/data-table-data-state.service';
import { DataTableConfigService } from '../../services/data-table-config.service';
/**
 * Data table column selector component. Toggle display state of columns via this popup component.
 */
var DataTableColumnSelectorComponent = /** @class */ (function () {
    function DataTableColumnSelectorComponent(dataStateService, config) {
        this.dataStateService = dataStateService;
        this.config = config;
    }
    DataTableColumnSelectorComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ng-data-table-column-selector',
                    template: "<div class=\"ng-data-table-column-selector-wrapper\" [style.width]=\"width | ngPx\">\n  <div class=\"ng-data-table-column-selector-box-heading\">{{ config.translations.columnSelector.header }}</div>\n  <div class=\"ng-data-table-column-selector-box\">\n    <ng-container *ngFor=\"let column of columns; index as i;\">\n      <div class=\"ng-data-table-column-selector-column ng-data-table-column-selector-checkbox\" *ngIf=\"column.showInColumnSelector\">\n        <div class=\"ng-data-table-checkbox-container\">\n          <input class=\"ng-data-table-checkbox-input\" type=\"checkbox\"\n                 [id]=\"dataStateService.getUniqueId('cs', i)\" [(ngModel)]=\"column.visible\"/>\n          <label [for]=\"dataStateService.getUniqueId('cs', i)\"><span [textContent]=\"column.title\"></span></label>\n        </div>\n      </div>\n    </ng-container>\n  </div>\n</div>\n"
                }] }
    ];
    /** @nocollapse */
    DataTableColumnSelectorComponent.ctorParameters = function () { return [
        { type: DataTableDataStateService },
        { type: DataTableConfigService }
    ]; };
    DataTableColumnSelectorComponent.propDecorators = {
        columns: [{ type: Input }],
        width: [{ type: Input }]
    };
    return DataTableColumnSelectorComponent;
}());
export { DataTableColumnSelectorComponent };
if (false) {
    /** @type {?} */
    DataTableColumnSelectorComponent.prototype.columns;
    /** @type {?} */
    DataTableColumnSelectorComponent.prototype.width;
    /** @type {?} */
    DataTableColumnSelectorComponent.prototype.dataStateService;
    /** @type {?} */
    DataTableColumnSelectorComponent.prototype.config;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS10YWJsZS1jb2x1bW4tc2VsZWN0b3IuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vb3JuYW1lbnR1bS8iLCJzb3VyY2VzIjpbImRhdGEtdGFibGUvY29tcG9uZW50cy9kYXRhLXRhYmxlLWNvbHVtbi1zZWxlY3Rvci9kYXRhLXRhYmxlLWNvbHVtbi1zZWxlY3Rvci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBSWpELE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLDhDQUE4QyxDQUFDO0FBQ3pGLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDBDQUEwQyxDQUFDOzs7O0FBS2xGO0lBS0UsMENBQW1CLGdCQUEyQyxFQUFTLE1BQThCO1FBQWxGLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBMkI7UUFBUyxXQUFNLEdBQU4sTUFBTSxDQUF3QjtJQUFHLENBQUM7O2dCQUwxRyxTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLCtCQUErQjtvQkFDekMsdTNCQUEwRDtpQkFDM0Q7Ozs7Z0JBVFEseUJBQXlCO2dCQUN6QixzQkFBc0I7OzswQkFZNUIsS0FBSzt3QkFHTCxLQUFLOztJQUVSLHVDQUFDO0NBQUEsQUFaRCxJQVlDO1NBUlksZ0NBQWdDOzs7SUFHM0MsbURBQzJDOztJQUUzQyxpREFDNEI7O0lBTmhCLDREQUFrRDs7SUFBRSxrREFBcUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IERhdGFUYWJsZUNvbHVtbkNvbXBvbmVudCB9IGZyb20gJy4uL2RhdGEtdGFibGUtY29sdW1uL2RhdGEtdGFibGUtY29sdW1uLmNvbXBvbmVudCc7XG5cbmltcG9ydCB7IERhdGFUYWJsZURhdGFTdGF0ZVNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9kYXRhLXRhYmxlLWRhdGEtc3RhdGUuc2VydmljZSc7XG5pbXBvcnQgeyBEYXRhVGFibGVDb25maWdTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvZGF0YS10YWJsZS1jb25maWcuc2VydmljZSc7XG5cbi8qKlxuICogRGF0YSB0YWJsZSBjb2x1bW4gc2VsZWN0b3IgY29tcG9uZW50LiBUb2dnbGUgZGlzcGxheSBzdGF0ZSBvZiBjb2x1bW5zIHZpYSB0aGlzIHBvcHVwIGNvbXBvbmVudC5cbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbmctZGF0YS10YWJsZS1jb2x1bW4tc2VsZWN0b3InLFxuICB0ZW1wbGF0ZVVybDogJy4vZGF0YS10YWJsZS1jb2x1bW4tc2VsZWN0b3IuY29tcG9uZW50Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIERhdGFUYWJsZUNvbHVtblNlbGVjdG9yQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHVibGljIGRhdGFTdGF0ZVNlcnZpY2U6IERhdGFUYWJsZURhdGFTdGF0ZVNlcnZpY2UsIHB1YmxpYyBjb25maWc6IERhdGFUYWJsZUNvbmZpZ1NlcnZpY2UpIHt9XG5cbiAgQElucHV0KClcbiAgcHVibGljIGNvbHVtbnM6IERhdGFUYWJsZUNvbHVtbkNvbXBvbmVudFtdO1xuXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyB3aWR0aDogbnVtYmVyfHN0cmluZztcbn1cbiJdfQ==