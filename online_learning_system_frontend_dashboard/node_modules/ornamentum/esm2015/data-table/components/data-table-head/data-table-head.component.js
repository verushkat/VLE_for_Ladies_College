/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
/**
 * Data table header component. Render data table column title and filter header rows.
 */
export class DataTableHeadComponent {
    /**
     * Get filter column availability status.
     * @return {?} True if there is at least one filter column.
     */
    get hasFilterColumns() {
        return this.columns.some((/**
         * @param {?} column
         * @return {?}
         */
        (column) => column.filterable));
    }
}
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
if (false) {
    /** @type {?} */
    DataTableHeadComponent.prototype.columns;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS10YWJsZS1oZWFkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL29ybmFtZW50dW0vIiwic291cmNlcyI6WyJkYXRhLXRhYmxlL2NvbXBvbmVudHMvZGF0YS10YWJsZS1oZWFkL2RhdGEtdGFibGUtaGVhZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7O0FBYWpELE1BQU0sT0FBTyxzQkFBc0I7Ozs7O0lBUWpDLElBQVcsZ0JBQWdCO1FBQ3pCLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJOzs7O1FBQUMsQ0FBQyxNQUFnQyxFQUFFLEVBQUUsQ0FBQyxNQUFNLENBQUMsVUFBVSxFQUFDLENBQUM7SUFDcEYsQ0FBQzs7O1lBaEJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsaUJBQWlCOztnQkFFM0IsUUFBUSxFQUFFLG1CQUFtQjtnQkFDN0Isb0tBQStDO2FBQ2hEOzs7c0JBRUUsS0FBSzs7OztJQUFOLHlDQUMyQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgRGF0YVRhYmxlQ29sdW1uQ29tcG9uZW50IH0gZnJvbSAnLi4vZGF0YS10YWJsZS1jb2x1bW4vZGF0YS10YWJsZS1jb2x1bW4uY29tcG9uZW50JztcblxuLyoqXG4gKiBEYXRhIHRhYmxlIGhlYWRlciBjb21wb25lbnQuIFJlbmRlciBkYXRhIHRhYmxlIGNvbHVtbiB0aXRsZSBhbmQgZmlsdGVyIGhlYWRlciByb3dzLlxuICovXG5AQ29tcG9uZW50KHtcbiAgZXhwb3J0QXM6ICduZ0RhdGFUYWJsZUhlYWQnLFxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcbiAgc2VsZWN0b3I6ICdbbmdEYXRhVGFibGVIZWFkXScsXG4gIHRlbXBsYXRlVXJsOiAnLi9kYXRhLXRhYmxlLWhlYWQuY29tcG9uZW50Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIERhdGFUYWJsZUhlYWRDb21wb25lbnQge1xuICBASW5wdXQoKVxuICBwdWJsaWMgY29sdW1uczogRGF0YVRhYmxlQ29sdW1uQ29tcG9uZW50W107XG5cbiAgLyoqXG4gICAqIEdldCBmaWx0ZXIgY29sdW1uIGF2YWlsYWJpbGl0eSBzdGF0dXMuXG4gICAqIEByZXR1cm4gVHJ1ZSBpZiB0aGVyZSBpcyBhdCBsZWFzdCBvbmUgZmlsdGVyIGNvbHVtbi5cbiAgICovXG4gIHB1YmxpYyBnZXQgaGFzRmlsdGVyQ29sdW1ucygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5jb2x1bW5zLnNvbWUoKGNvbHVtbjogRGF0YVRhYmxlQ29sdW1uQ29tcG9uZW50KSA9PiBjb2x1bW4uZmlsdGVyYWJsZSk7XG4gIH1cbn1cbiJdfQ==