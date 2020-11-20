/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Injector, Input, Renderer2 } from '@angular/core';
import { PopoverComponentLoaderFactoryService } from '../../../utility/utility.module';
import { DataFetchMode } from '../../models/data-fetch-mode.enum';
import { DataTableColumnSelectorComponent } from '../data-table-column-selector/data-table-column-selector.component';
import { DataTableConfigService } from '../../services/data-table-config.service';
import { DataTableEventStateService } from '../../services/data-table-event.service';
import { DataTableDataStateService } from '../../services/data-table-data-state.service';
/**
 * Data table header component. Render table title header with column selector widget.
 */
export class DataTableHeaderComponent {
    /**
     * @param {?} componentLoaderFactory
     * @param {?} injector
     * @param {?} eventStateService
     * @param {?} renderer
     * @param {?} dataStateService
     * @param {?} config
     */
    constructor(componentLoaderFactory, injector, eventStateService, renderer, dataStateService, config) {
        this.componentLoaderFactory = componentLoaderFactory;
        this.injector = injector;
        this.eventStateService = eventStateService;
        this.renderer = renderer;
        this.dataStateService = dataStateService;
        this.config = config;
        this.componentLoader = this.componentLoaderFactory.createLoader(this.renderer);
    }
    /**
     * Toggle column selector.
     * @param {?} element DOM element reference.
     * @return {?}
     */
    toggleColumnSelector(element) {
        this.componentLoader.toggle(DataTableColumnSelectorComponent, element, this.injector, {
            // relativeParent: element, // this.dataStateService.relativeParentElement,
            context: {
                columns: this.columns,
                width: this.config.columnSelectorWidth,
            },
            position: 'bottom-right'
        });
    }
    /**
     * On data reload click event handler.
     * @return {?}
     */
    onReload() {
        this.eventStateService.dataFetchStream.next(DataFetchMode.HARD_RELOAD);
    }
    /**
     * Component destroy lifecycle event handler.
     * @return {?}
     */
    ngOnDestroy() {
        this.componentLoader.dispose();
    }
}
DataTableHeaderComponent.decorators = [
    { type: Component, args: [{
                selector: 'ng-data-table-header',
                template: "<div class=\"ng-data-table-top-header-container\" #header>\n  <h4 class=\"ng-data-table-top-header-title\" [textContent]=\"config.title\"></h4>\n  <div class=\"ng-data-table-top-header-button-container\">\n    <button\n      title=\"Refresh\"\n      type=\"button\"\n      class=\"ng-data-table-action-button ng-data-table-refresh-button\"\n      (click)=\"onReload()\"\n      *ngIf=\"config.showRefreshButton\"\n      [disabled]=\"dataStateService.dataLoading\"></button>\n    <button\n      title=\"Select Column\"\n      type=\"button\"\n      class=\"ng-data-table-action-button ng-data-table-column-selector-button\"\n      (click)=\"toggleColumnSelector(header)\"\n      *ngIf=\"config.showColumnSelector\"></button>\n  </div>\n</div>\n"
            }] }
];
/** @nocollapse */
DataTableHeaderComponent.ctorParameters = () => [
    { type: PopoverComponentLoaderFactoryService },
    { type: Injector },
    { type: DataTableEventStateService },
    { type: Renderer2 },
    { type: DataTableDataStateService },
    { type: DataTableConfigService }
];
DataTableHeaderComponent.propDecorators = {
    columns: [{ type: Input }]
};
if (false) {
    /**
     * @type {?}
     * @private
     */
    DataTableHeaderComponent.prototype.componentLoader;
    /** @type {?} */
    DataTableHeaderComponent.prototype.columns;
    /**
     * @type {?}
     * @private
     */
    DataTableHeaderComponent.prototype.componentLoaderFactory;
    /**
     * @type {?}
     * @private
     */
    DataTableHeaderComponent.prototype.injector;
    /**
     * @type {?}
     * @private
     */
    DataTableHeaderComponent.prototype.eventStateService;
    /**
     * @type {?}
     * @private
     */
    DataTableHeaderComponent.prototype.renderer;
    /** @type {?} */
    DataTableHeaderComponent.prototype.dataStateService;
    /** @type {?} */
    DataTableHeaderComponent.prototype.config;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS10YWJsZS1oZWFkZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vb3JuYW1lbnR1bS8iLCJzb3VyY2VzIjpbImRhdGEtdGFibGUvY29tcG9uZW50cy9kYXRhLXRhYmxlLWhlYWRlci9kYXRhLXRhYmxlLWhlYWRlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBYSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFakYsT0FBTyxFQUFtQixvQ0FBb0MsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBRXhHLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUVsRSxPQUFPLEVBQUUsZ0NBQWdDLEVBQUUsTUFBTSxvRUFBb0UsQ0FBQztBQUd0SCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUNsRixPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUNyRixPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSw4Q0FBOEMsQ0FBQzs7OztBQVN6RixNQUFNLE9BQU8sd0JBQXdCOzs7Ozs7Ozs7SUFNbkMsWUFDVSxzQkFBNEQsRUFDNUQsUUFBa0IsRUFDbEIsaUJBQTZDLEVBQzdDLFFBQW1CLEVBQ3BCLGdCQUEyQyxFQUMzQyxNQUE4QjtRQUw3QiwyQkFBc0IsR0FBdEIsc0JBQXNCLENBQXNDO1FBQzVELGFBQVEsR0FBUixRQUFRLENBQVU7UUFDbEIsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUE0QjtRQUM3QyxhQUFRLEdBQVIsUUFBUSxDQUFXO1FBQ3BCLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBMkI7UUFDM0MsV0FBTSxHQUFOLE1BQU0sQ0FBd0I7UUFFckMsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsc0JBQXNCLENBQUMsWUFBWSxDQUFtQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDbkgsQ0FBQzs7Ozs7O0lBTU0sb0JBQW9CLENBQUMsT0FBb0I7UUFDOUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUMsZ0NBQWdDLEVBQUUsT0FBTyxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUU7O1lBRXBGLE9BQU8sRUFBRTtnQkFDUCxPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU87Z0JBQ3JCLEtBQUssRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLG1CQUFtQjthQUN2QztZQUNELFFBQVEsRUFBRSxjQUFjO1NBQ3pCLENBQUMsQ0FBQztJQUNMLENBQUM7Ozs7O0lBS00sUUFBUTtRQUNiLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUN6RSxDQUFDOzs7OztJQUtNLFdBQVc7UUFDaEIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUNqQyxDQUFDOzs7WUFoREYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxzQkFBc0I7Z0JBQ2hDLGt2QkFBaUQ7YUFDbEQ7Ozs7WUFqQnlCLG9DQUFvQztZQUYxQyxRQUFRO1lBVW5CLDBCQUEwQjtZQVZhLFNBQVM7WUFXaEQseUJBQXlCO1lBRnpCLHNCQUFzQjs7O3NCQWM1QixLQUFLOzs7Ozs7O0lBRk4sbURBQTJFOztJQUUzRSwyQ0FDMkM7Ozs7O0lBR3pDLDBEQUFvRTs7Ozs7SUFDcEUsNENBQTBCOzs7OztJQUMxQixxREFBcUQ7Ozs7O0lBQ3JELDRDQUEyQjs7SUFDM0Isb0RBQWtEOztJQUNsRCwwQ0FBcUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEluamVjdG9yLCBJbnB1dCwgT25EZXN0cm95LCBSZW5kZXJlcjIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQ29tcG9uZW50TG9hZGVyLCBQb3BvdmVyQ29tcG9uZW50TG9hZGVyRmFjdG9yeVNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi91dGlsaXR5L3V0aWxpdHkubW9kdWxlJztcblxuaW1wb3J0IHsgRGF0YUZldGNoTW9kZSB9IGZyb20gJy4uLy4uL21vZGVscy9kYXRhLWZldGNoLW1vZGUuZW51bSc7XG5cbmltcG9ydCB7IERhdGFUYWJsZUNvbHVtblNlbGVjdG9yQ29tcG9uZW50IH0gZnJvbSAnLi4vZGF0YS10YWJsZS1jb2x1bW4tc2VsZWN0b3IvZGF0YS10YWJsZS1jb2x1bW4tc2VsZWN0b3IuY29tcG9uZW50JztcbmltcG9ydCB7IERhdGFUYWJsZUNvbHVtbkNvbXBvbmVudCB9IGZyb20gJy4uL2RhdGEtdGFibGUtY29sdW1uL2RhdGEtdGFibGUtY29sdW1uLmNvbXBvbmVudCc7XG5cbmltcG9ydCB7IERhdGFUYWJsZUNvbmZpZ1NlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9kYXRhLXRhYmxlLWNvbmZpZy5zZXJ2aWNlJztcbmltcG9ydCB7IERhdGFUYWJsZUV2ZW50U3RhdGVTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvZGF0YS10YWJsZS1ldmVudC5zZXJ2aWNlJztcbmltcG9ydCB7IERhdGFUYWJsZURhdGFTdGF0ZVNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9kYXRhLXRhYmxlLWRhdGEtc3RhdGUuc2VydmljZSc7XG5cbi8qKlxuICogRGF0YSB0YWJsZSBoZWFkZXIgY29tcG9uZW50LiBSZW5kZXIgdGFibGUgdGl0bGUgaGVhZGVyIHdpdGggY29sdW1uIHNlbGVjdG9yIHdpZGdldC5cbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbmctZGF0YS10YWJsZS1oZWFkZXInLFxuICB0ZW1wbGF0ZVVybDogJy4vZGF0YS10YWJsZS1oZWFkZXIuY29tcG9uZW50Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIERhdGFUYWJsZUhlYWRlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG4gIHByaXZhdGUgY29tcG9uZW50TG9hZGVyOiBDb21wb25lbnRMb2FkZXI8RGF0YVRhYmxlQ29sdW1uU2VsZWN0b3JDb21wb25lbnQ+O1xuXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBjb2x1bW5zOiBEYXRhVGFibGVDb2x1bW5Db21wb25lbnRbXTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGNvbXBvbmVudExvYWRlckZhY3Rvcnk6IFBvcG92ZXJDb21wb25lbnRMb2FkZXJGYWN0b3J5U2VydmljZSxcbiAgICBwcml2YXRlIGluamVjdG9yOiBJbmplY3RvcixcbiAgICBwcml2YXRlIGV2ZW50U3RhdGVTZXJ2aWNlOiBEYXRhVGFibGVFdmVudFN0YXRlU2VydmljZSxcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgcHVibGljIGRhdGFTdGF0ZVNlcnZpY2U6IERhdGFUYWJsZURhdGFTdGF0ZVNlcnZpY2UsXG4gICAgcHVibGljIGNvbmZpZzogRGF0YVRhYmxlQ29uZmlnU2VydmljZVxuICApIHtcbiAgICB0aGlzLmNvbXBvbmVudExvYWRlciA9IHRoaXMuY29tcG9uZW50TG9hZGVyRmFjdG9yeS5jcmVhdGVMb2FkZXI8RGF0YVRhYmxlQ29sdW1uU2VsZWN0b3JDb21wb25lbnQ+KHRoaXMucmVuZGVyZXIpO1xuICB9XG5cbiAgLyoqXG4gICAqIFRvZ2dsZSBjb2x1bW4gc2VsZWN0b3IuXG4gICAqIEBwYXJhbSBlbGVtZW50IERPTSBlbGVtZW50IHJlZmVyZW5jZS5cbiAgICovXG4gIHB1YmxpYyB0b2dnbGVDb2x1bW5TZWxlY3RvcihlbGVtZW50OiBIVE1MRWxlbWVudCk6IHZvaWQge1xuICAgIHRoaXMuY29tcG9uZW50TG9hZGVyLnRvZ2dsZShEYXRhVGFibGVDb2x1bW5TZWxlY3RvckNvbXBvbmVudCwgZWxlbWVudCwgdGhpcy5pbmplY3Rvciwge1xuICAgICAgLy8gcmVsYXRpdmVQYXJlbnQ6IGVsZW1lbnQsIC8vIHRoaXMuZGF0YVN0YXRlU2VydmljZS5yZWxhdGl2ZVBhcmVudEVsZW1lbnQsXG4gICAgICBjb250ZXh0OiB7XG4gICAgICAgIGNvbHVtbnM6IHRoaXMuY29sdW1ucyxcbiAgICAgICAgd2lkdGg6IHRoaXMuY29uZmlnLmNvbHVtblNlbGVjdG9yV2lkdGgsXG4gICAgICB9LFxuICAgICAgcG9zaXRpb246ICdib3R0b20tcmlnaHQnXG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogT24gZGF0YSByZWxvYWQgY2xpY2sgZXZlbnQgaGFuZGxlci5cbiAgICovXG4gIHB1YmxpYyBvblJlbG9hZCgpOiB2b2lkIHtcbiAgICB0aGlzLmV2ZW50U3RhdGVTZXJ2aWNlLmRhdGFGZXRjaFN0cmVhbS5uZXh0KERhdGFGZXRjaE1vZGUuSEFSRF9SRUxPQUQpO1xuICB9XG5cbiAgLyoqXG4gICAqIENvbXBvbmVudCBkZXN0cm95IGxpZmVjeWNsZSBldmVudCBoYW5kbGVyLlxuICAgKi9cbiAgcHVibGljIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuY29tcG9uZW50TG9hZGVyLmRpc3Bvc2UoKTtcbiAgfVxufVxuIl19