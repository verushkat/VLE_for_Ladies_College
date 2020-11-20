/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
/**
 * Data table header component. Render data table column title and filter header rows.
 */
var DataTableHeadComponent = /** @class */ (function () {
    function DataTableHeadComponent() {
    }
    Object.defineProperty(DataTableHeadComponent.prototype, "hasFilterColumns", {
        /**
         * Get filter column availability status.
         * @return True if there is at least one filter column.
         */
        get: /**
         * Get filter column availability status.
         * @return {?} True if there is at least one filter column.
         */
        function () {
            return this.columns.some((/**
             * @param {?} column
             * @return {?}
             */
            function (column) { return column.filterable; }));
        },
        enumerable: true,
        configurable: true
    });
    DataTableHeadComponent.decorators = [
        { type: Component, args: [{
                    exportAs: 'ngDataTableHead',
                    // tslint:disable-next-line
                    selector: '[ngDataTableHead]',
                    template: "<tr ngDataTableColumnTitleHeader [columns]=\"columns\"></tr>\n<tr *ngIf=\"hasFilterColumns\" ngDataTableColumnFilterHeader [columns]=\"columns\"></tr>\n"
                }] }
    ];
    DataTableHeadComponent.propDecorators = {
        columns: [{ type: Input }]
    };
    return DataTableHeadComponent;
}());
export { DataTableHeadComponent };
if (false) {
    /** @type {?} */
    DataTableHeadComponent.prototype.columns;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS10YWJsZS1oZWFkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL29ybmFtZW50dW0vIiwic291cmNlcyI6WyJkYXRhLXRhYmxlL2NvbXBvbmVudHMvZGF0YS10YWJsZS1oZWFkL2RhdGEtdGFibGUtaGVhZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7O0FBT2pEO0lBQUE7SUFpQkEsQ0FBQztJQUhDLHNCQUFXLG9EQUFnQjtRQUozQjs7O1dBR0c7Ozs7O1FBQ0g7WUFDRSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSTs7OztZQUFDLFVBQUMsTUFBZ0MsSUFBSyxPQUFBLE1BQU0sQ0FBQyxVQUFVLEVBQWpCLENBQWlCLEVBQUMsQ0FBQztRQUNwRixDQUFDOzs7T0FBQTs7Z0JBaEJGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsaUJBQWlCOztvQkFFM0IsUUFBUSxFQUFFLG1CQUFtQjtvQkFDN0Isb0tBQStDO2lCQUNoRDs7OzBCQUVFLEtBQUs7O0lBVVIsNkJBQUM7Q0FBQSxBQWpCRCxJQWlCQztTQVhZLHNCQUFzQjs7O0lBQ2pDLHlDQUMyQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgRGF0YVRhYmxlQ29sdW1uQ29tcG9uZW50IH0gZnJvbSAnLi4vZGF0YS10YWJsZS1jb2x1bW4vZGF0YS10YWJsZS1jb2x1bW4uY29tcG9uZW50JztcblxuLyoqXG4gKiBEYXRhIHRhYmxlIGhlYWRlciBjb21wb25lbnQuIFJlbmRlciBkYXRhIHRhYmxlIGNvbHVtbiB0aXRsZSBhbmQgZmlsdGVyIGhlYWRlciByb3dzLlxuICovXG5AQ29tcG9uZW50KHtcbiAgZXhwb3J0QXM6ICduZ0RhdGFUYWJsZUhlYWQnLFxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcbiAgc2VsZWN0b3I6ICdbbmdEYXRhVGFibGVIZWFkXScsXG4gIHRlbXBsYXRlVXJsOiAnLi9kYXRhLXRhYmxlLWhlYWQuY29tcG9uZW50Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIERhdGFUYWJsZUhlYWRDb21wb25lbnQge1xuICBASW5wdXQoKVxuICBwdWJsaWMgY29sdW1uczogRGF0YVRhYmxlQ29sdW1uQ29tcG9uZW50W107XG5cbiAgLyoqXG4gICAqIEdldCBmaWx0ZXIgY29sdW1uIGF2YWlsYWJpbGl0eSBzdGF0dXMuXG4gICAqIEByZXR1cm4gVHJ1ZSBpZiB0aGVyZSBpcyBhdCBsZWFzdCBvbmUgZmlsdGVyIGNvbHVtbi5cbiAgICovXG4gIHB1YmxpYyBnZXQgaGFzRmlsdGVyQ29sdW1ucygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5jb2x1bW5zLnNvbWUoKGNvbHVtbjogRGF0YVRhYmxlQ29sdW1uQ29tcG9uZW50KSA9PiBjb2x1bW4uZmlsdGVyYWJsZSk7XG4gIH1cbn1cbiJdfQ==