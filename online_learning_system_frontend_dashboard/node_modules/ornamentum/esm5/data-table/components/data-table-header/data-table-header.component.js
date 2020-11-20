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
var DataTableHeaderComponent = /** @class */ (function () {
    function DataTableHeaderComponent(componentLoaderFactory, injector, eventStateService, renderer, dataStateService, config) {
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
     * @param element DOM element reference.
     */
    /**
     * Toggle column selector.
     * @param {?} element DOM element reference.
     * @return {?}
     */
    DataTableHeaderComponent.prototype.toggleColumnSelector = /**
     * Toggle column selector.
     * @param {?} element DOM element reference.
     * @return {?}
     */
    function (element) {
        this.componentLoader.toggle(DataTableColumnSelectorComponent, element, this.injector, {
            // relativeParent: element, // this.dataStateService.relativeParentElement,
            context: {
                columns: this.columns,
                width: this.config.columnSelectorWidth,
            },
            position: 'bottom-right'
        });
    };
    /**
     * On data reload click event handler.
     */
    /**
     * On data reload click event handler.
     * @return {?}
     */
    DataTableHeaderComponent.prototype.onReload = /**
     * On data reload click event handler.
     * @return {?}
     */
    function () {
        this.eventStateService.dataFetchStream.next(DataFetchMode.HARD_RELOAD);
    };
    /**
     * Component destroy lifecycle event handler.
     */
    /**
     * Component destroy lifecycle event handler.
     * @return {?}
     */
    DataTableHeaderComponent.prototype.ngOnDestroy = /**
     * Component destroy lifecycle event handler.
     * @return {?}
     */
    function () {
        this.componentLoader.dispose();
    };
    DataTableHeaderComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ng-data-table-header',
                    template: "<div class=\"ng-data-table-top-header-container\" #header>\n  <h4 class=\"ng-data-table-top-header-title\" [textContent]=\"config.title\"></h4>\n  <div class=\"ng-data-table-top-header-button-container\">\n    <button\n      title=\"Refresh\"\n      type=\"button\"\n      class=\"ng-data-table-action-button ng-data-table-refresh-button\"\n      (click)=\"onReload()\"\n      *ngIf=\"config.showRefreshButton\"\n      [disabled]=\"dataStateService.dataLoading\"></button>\n    <button\n      title=\"Select Column\"\n      type=\"button\"\n      class=\"ng-data-table-action-button ng-data-table-column-selector-button\"\n      (click)=\"toggleColumnSelector(header)\"\n      *ngIf=\"config.showColumnSelector\"></button>\n  </div>\n</div>\n"
                }] }
    ];
    /** @nocollapse */
    DataTableHeaderComponent.ctorParameters = function () { return [
        { type: PopoverComponentLoaderFactoryService },
        { type: Injector },
        { type: DataTableEventStateService },
        { type: Renderer2 },
        { type: DataTableDataStateService },
        { type: DataTableConfigService }
    ]; };
    DataTableHeaderComponent.propDecorators = {
        columns: [{ type: Input }]
    };
    return DataTableHeaderComponent;
}());
export { DataTableHeaderComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS10YWJsZS1oZWFkZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vb3JuYW1lbnR1bS8iLCJzb3VyY2VzIjpbImRhdGEtdGFibGUvY29tcG9uZW50cy9kYXRhLXRhYmxlLWhlYWRlci9kYXRhLXRhYmxlLWhlYWRlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBYSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFakYsT0FBTyxFQUFtQixvQ0FBb0MsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBRXhHLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUVsRSxPQUFPLEVBQUUsZ0NBQWdDLEVBQUUsTUFBTSxvRUFBb0UsQ0FBQztBQUd0SCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUNsRixPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUNyRixPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSw4Q0FBOEMsQ0FBQzs7OztBQUt6RjtJQVVFLGtDQUNVLHNCQUE0RCxFQUM1RCxRQUFrQixFQUNsQixpQkFBNkMsRUFDN0MsUUFBbUIsRUFDcEIsZ0JBQTJDLEVBQzNDLE1BQThCO1FBTDdCLDJCQUFzQixHQUF0QixzQkFBc0IsQ0FBc0M7UUFDNUQsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQUNsQixzQkFBaUIsR0FBakIsaUJBQWlCLENBQTRCO1FBQzdDLGFBQVEsR0FBUixRQUFRLENBQVc7UUFDcEIscUJBQWdCLEdBQWhCLGdCQUFnQixDQUEyQjtRQUMzQyxXQUFNLEdBQU4sTUFBTSxDQUF3QjtRQUVyQyxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxZQUFZLENBQW1DLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNuSCxDQUFDO0lBRUQ7OztPQUdHOzs7Ozs7SUFDSSx1REFBb0I7Ozs7O0lBQTNCLFVBQTRCLE9BQW9CO1FBQzlDLElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDLGdDQUFnQyxFQUFFLE9BQU8sRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFOztZQUVwRixPQUFPLEVBQUU7Z0JBQ1AsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPO2dCQUNyQixLQUFLLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxtQkFBbUI7YUFDdkM7WUFDRCxRQUFRLEVBQUUsY0FBYztTQUN6QixDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQ7O09BRUc7Ozs7O0lBQ0ksMkNBQVE7Ozs7SUFBZjtRQUNFLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUN6RSxDQUFDO0lBRUQ7O09BRUc7Ozs7O0lBQ0ksOENBQVc7Ozs7SUFBbEI7UUFDRSxJQUFJLENBQUMsZUFBZSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ2pDLENBQUM7O2dCQWhERixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLHNCQUFzQjtvQkFDaEMsa3ZCQUFpRDtpQkFDbEQ7Ozs7Z0JBakJ5QixvQ0FBb0M7Z0JBRjFDLFFBQVE7Z0JBVW5CLDBCQUEwQjtnQkFWYSxTQUFTO2dCQVdoRCx5QkFBeUI7Z0JBRnpCLHNCQUFzQjs7OzBCQWM1QixLQUFLOztJQTBDUiwrQkFBQztDQUFBLEFBakRELElBaURDO1NBN0NZLHdCQUF3Qjs7Ozs7O0lBQ25DLG1EQUEyRTs7SUFFM0UsMkNBQzJDOzs7OztJQUd6QywwREFBb0U7Ozs7O0lBQ3BFLDRDQUEwQjs7Ozs7SUFDMUIscURBQXFEOzs7OztJQUNyRCw0Q0FBMkI7O0lBQzNCLG9EQUFrRDs7SUFDbEQsMENBQXFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbmplY3RvciwgSW5wdXQsIE9uRGVzdHJveSwgUmVuZGVyZXIyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IENvbXBvbmVudExvYWRlciwgUG9wb3ZlckNvbXBvbmVudExvYWRlckZhY3RvcnlTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vdXRpbGl0eS91dGlsaXR5Lm1vZHVsZSc7XG5cbmltcG9ydCB7IERhdGFGZXRjaE1vZGUgfSBmcm9tICcuLi8uLi9tb2RlbHMvZGF0YS1mZXRjaC1tb2RlLmVudW0nO1xuXG5pbXBvcnQgeyBEYXRhVGFibGVDb2x1bW5TZWxlY3RvckNvbXBvbmVudCB9IGZyb20gJy4uL2RhdGEtdGFibGUtY29sdW1uLXNlbGVjdG9yL2RhdGEtdGFibGUtY29sdW1uLXNlbGVjdG9yLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBEYXRhVGFibGVDb2x1bW5Db21wb25lbnQgfSBmcm9tICcuLi9kYXRhLXRhYmxlLWNvbHVtbi9kYXRhLXRhYmxlLWNvbHVtbi5jb21wb25lbnQnO1xuXG5pbXBvcnQgeyBEYXRhVGFibGVDb25maWdTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvZGF0YS10YWJsZS1jb25maWcuc2VydmljZSc7XG5pbXBvcnQgeyBEYXRhVGFibGVFdmVudFN0YXRlU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2RhdGEtdGFibGUtZXZlbnQuc2VydmljZSc7XG5pbXBvcnQgeyBEYXRhVGFibGVEYXRhU3RhdGVTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvZGF0YS10YWJsZS1kYXRhLXN0YXRlLnNlcnZpY2UnO1xuXG4vKipcbiAqIERhdGEgdGFibGUgaGVhZGVyIGNvbXBvbmVudC4gUmVuZGVyIHRhYmxlIHRpdGxlIGhlYWRlciB3aXRoIGNvbHVtbiBzZWxlY3RvciB3aWRnZXQuXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25nLWRhdGEtdGFibGUtaGVhZGVyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2RhdGEtdGFibGUtaGVhZGVyLmNvbXBvbmVudC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBEYXRhVGFibGVIZWFkZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuICBwcml2YXRlIGNvbXBvbmVudExvYWRlcjogQ29tcG9uZW50TG9hZGVyPERhdGFUYWJsZUNvbHVtblNlbGVjdG9yQ29tcG9uZW50PjtcblxuICBASW5wdXQoKVxuICBwdWJsaWMgY29sdW1uczogRGF0YVRhYmxlQ29sdW1uQ29tcG9uZW50W107XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBjb21wb25lbnRMb2FkZXJGYWN0b3J5OiBQb3BvdmVyQ29tcG9uZW50TG9hZGVyRmFjdG9yeVNlcnZpY2UsXG4gICAgcHJpdmF0ZSBpbmplY3RvcjogSW5qZWN0b3IsXG4gICAgcHJpdmF0ZSBldmVudFN0YXRlU2VydmljZTogRGF0YVRhYmxlRXZlbnRTdGF0ZVNlcnZpY2UsXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHB1YmxpYyBkYXRhU3RhdGVTZXJ2aWNlOiBEYXRhVGFibGVEYXRhU3RhdGVTZXJ2aWNlLFxuICAgIHB1YmxpYyBjb25maWc6IERhdGFUYWJsZUNvbmZpZ1NlcnZpY2VcbiAgKSB7XG4gICAgdGhpcy5jb21wb25lbnRMb2FkZXIgPSB0aGlzLmNvbXBvbmVudExvYWRlckZhY3RvcnkuY3JlYXRlTG9hZGVyPERhdGFUYWJsZUNvbHVtblNlbGVjdG9yQ29tcG9uZW50Pih0aGlzLnJlbmRlcmVyKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUb2dnbGUgY29sdW1uIHNlbGVjdG9yLlxuICAgKiBAcGFyYW0gZWxlbWVudCBET00gZWxlbWVudCByZWZlcmVuY2UuXG4gICAqL1xuICBwdWJsaWMgdG9nZ2xlQ29sdW1uU2VsZWN0b3IoZWxlbWVudDogSFRNTEVsZW1lbnQpOiB2b2lkIHtcbiAgICB0aGlzLmNvbXBvbmVudExvYWRlci50b2dnbGUoRGF0YVRhYmxlQ29sdW1uU2VsZWN0b3JDb21wb25lbnQsIGVsZW1lbnQsIHRoaXMuaW5qZWN0b3IsIHtcbiAgICAgIC8vIHJlbGF0aXZlUGFyZW50OiBlbGVtZW50LCAvLyB0aGlzLmRhdGFTdGF0ZVNlcnZpY2UucmVsYXRpdmVQYXJlbnRFbGVtZW50LFxuICAgICAgY29udGV4dDoge1xuICAgICAgICBjb2x1bW5zOiB0aGlzLmNvbHVtbnMsXG4gICAgICAgIHdpZHRoOiB0aGlzLmNvbmZpZy5jb2x1bW5TZWxlY3RvcldpZHRoLFxuICAgICAgfSxcbiAgICAgIHBvc2l0aW9uOiAnYm90dG9tLXJpZ2h0J1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIE9uIGRhdGEgcmVsb2FkIGNsaWNrIGV2ZW50IGhhbmRsZXIuXG4gICAqL1xuICBwdWJsaWMgb25SZWxvYWQoKTogdm9pZCB7XG4gICAgdGhpcy5ldmVudFN0YXRlU2VydmljZS5kYXRhRmV0Y2hTdHJlYW0ubmV4dChEYXRhRmV0Y2hNb2RlLkhBUkRfUkVMT0FEKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb21wb25lbnQgZGVzdHJveSBsaWZlY3ljbGUgZXZlbnQgaGFuZGxlci5cbiAgICovXG4gIHB1YmxpYyBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLmNvbXBvbmVudExvYWRlci5kaXNwb3NlKCk7XG4gIH1cbn1cbiJdfQ==