/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { get } from '../../../utility/services/object-utility.class';
import { DataFetchMode } from '../../models/data-fetch-mode.enum';
import { DragAndDropService } from '../../../utility/utility.module';
import { DataTableConfigService } from '../../services/data-table-config.service';
import { DataTableEventStateService } from '../../services/data-table-event.service';
import { DataTableDataStateService } from '../../services/data-table-data-state.service';
/**
 * Column title header component. Render data table column headers.
 */
var DataTableColumnTitleHeaderComponent = /** @class */ (function () {
    function DataTableColumnTitleHeaderComponent(dragAndDropService, eventStateService, dataStateService, config) {
        this.dragAndDropService = dragAndDropService;
        this.eventStateService = eventStateService;
        this.dataStateService = dataStateService;
        this.config = config;
        this.resizeInProgress = false;
    }
    /**
     * Header click event handler.
     * @param column Data table column component reference.
     * @param event Mouse event arguments object.
     */
    /**
     * Header click event handler.
     * @param {?} column Data table column component reference.
     * @param {?} event Mouse event arguments object.
     * @return {?}
     */
    DataTableColumnTitleHeaderComponent.prototype.onHeaderClick = /**
     * Header click event handler.
     * @param {?} column Data table column component reference.
     * @param {?} event Mouse event arguments object.
     * @return {?}
     */
    function (column, event) {
        if (!this.resizeInProgress) {
            this.sortData(column);
            this.eventStateService.headerClickStream.emit({ column: column, event: event });
        }
        else {
            this.resizeInProgress = false; // this is because I can't prevent click from mousup of the drag end
        }
    };
    /**
     * Sort data event handler.
     * @param column Data table column component reference.
     */
    /**
     * Sort data event handler.
     * @private
     * @param {?} column Data table column component reference.
     * @return {?}
     */
    DataTableColumnTitleHeaderComponent.prototype.sortData = /**
     * Sort data event handler.
     * @private
     * @param {?} column Data table column component reference.
     * @return {?}
     */
    function (column) {
        if (column.sortable) {
            /** @type {?} */
            var prevSortOrder = column.sortOrder;
            if (column.sortOrder) {
                column.sortOrder = column.getNewSortOrder();
            }
            else {
                if (!this.config.multiColumnSortable) {
                    /** @type {?} */
                    var sortColumns = this.columns.filter((/**
                     * @param {?} item
                     * @return {?}
                     */
                    function (item) { return item.sortable; }));
                    sortColumns.forEach((/**
                     * @param {?} sortColumn
                     * @return {?}
                     */
                    function (sortColumn) {
                        if (sortColumn !== column) {
                            sortColumn.sortOrder = '';
                        }
                    }));
                }
                column.sortOrder = 'asc';
            }
            if (this.config.multiColumnSortable) {
                if (column.sortOrder === '') {
                    /** @type {?} */
                    var sortColumns = this.columns.filter((/**
                     * @param {?} item
                     * @return {?}
                     */
                    function (item) { return item.sortable; }));
                    sortColumns.forEach((/**
                     * @param {?} sortColumn
                     * @return {?}
                     */
                    function (sortColumn) {
                        if (sortColumn !== column && sortColumn.sortPriority > column.sortPriority) {
                            --sortColumn.sortPriority;
                        }
                    }));
                    column.sortPriority = undefined;
                    --this.dataStateService.currentSortPriority;
                }
                else {
                    if (!prevSortOrder) {
                        column.sortPriority = ++this.dataStateService.currentSortPriority;
                    }
                }
            }
            this.eventStateService.dataFetchStream.next(DataFetchMode.SOFT_LOAD);
        }
    };
    /**
     * Set column width.
     * @param width Width value in pixels.
     * @param column Data table column component reference.
     */
    /**
     * Set column width.
     * @param {?} width Width value in pixels.
     * @param {?} column Data table column component reference.
     * @return {?}
     */
    DataTableColumnTitleHeaderComponent.prototype.setColumnWidth = /**
     * Set column width.
     * @param {?} width Width value in pixels.
     * @param {?} column Data table column component reference.
     * @return {?}
     */
    function (width, column) {
        column.actualWidth = width;
    };
    /**
     * Column resize event handler.
     * @param event Resize mouse event.
     * @param column Data table column component.
     * @param columnElement Table header cell element DOM reference.
     */
    /**
     * Column resize event handler.
     * @param {?} event Resize mouse event.
     * @param {?} column Data table column component.
     * @param {?} columnElement Table header cell element DOM reference.
     * @return {?}
     */
    DataTableColumnTitleHeaderComponent.prototype.onColumnResize = /**
     * Column resize event handler.
     * @param {?} event Resize mouse event.
     * @param {?} column Data table column component.
     * @param {?} columnElement Table header cell element DOM reference.
     * @return {?}
     */
    function (event, column, columnElement) {
        var _this = this;
        this.resizeInProgress = true;
        this.dragAndDropService.drag(event, {
            move: (/**
             * @param {?} moveEvent
             * @param {?} dx
             * @return {?}
             */
            function (moveEvent, dx) {
                /** @type {?} */
                var newWidth = columnElement.offsetWidth + dx;
                if (column.resizeMinLimit !== undefined && newWidth < column.resizeMinLimit) {
                    return;
                }
                column.actualWidth = newWidth;
                /** @type {?} */
                var totalWidth = 0;
                _this.columns.forEach((/**
                 * @param {?} col
                 * @return {?}
                 */
                function (col) {
                    col.width = col.actualWidth;
                    totalWidth += col.width;
                }));
                _this.dataStateService.tableWidth = totalWidth;
            })
        });
    };
    Object.defineProperty(DataTableColumnTitleHeaderComponent.prototype, "allRowSelected", {
        /**
         * Get all row selected state.
         */
        get: /**
         * Get all row selected state.
         * @return {?}
         */
        function () {
            return this.dataStateService.allRowSelected;
        },
        /**
         * Set all row selected state.
         * @param value All row selected status.
         */
        set: /**
         * Set all row selected state.
         * @param {?} value All row selected status.
         * @return {?}
         */
        function (value) {
            this.dataStateService.allRowSelected = value;
            this.allRowSelectedChanged(this.dataStateService.allRowSelected);
            this.eventStateService.allRowSelectChangeStream.emit(this.dataStateService.allRowSelected);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * All row select change event handler.
     * @param selectedState Row selected status.
     */
    /**
     * All row select change event handler.
     * @private
     * @param {?} selectedState Row selected status.
     * @return {?}
     */
    DataTableColumnTitleHeaderComponent.prototype.allRowSelectedChanged = /**
     * All row select change event handler.
     * @private
     * @param {?} selectedState Row selected status.
     * @return {?}
     */
    function (selectedState) {
        var _this = this;
        this.dataStateService.dataRows.forEach((/**
         * @param {?} row
         * @return {?}
         */
        function (row) {
            /** @type {?} */
            var id = get(row.item, _this.config.selectTrackBy);
            /** @type {?} */
            var index = _this.dataStateService.selectedRows.indexOf(id);
            if (selectedState && index < 0) {
                _this.dataStateService.selectedRows.push(id);
            }
            else if (!selectedState && index > -1) {
                _this.dataStateService.selectedRows.splice(index, 1);
            }
            row.selected = selectedState;
        }));
        this.eventStateService.rowSelectChangeStream.emit(this.dataStateService.selectedRows);
    };
    Object.defineProperty(DataTableColumnTitleHeaderComponent.prototype, "showAllRowSelectCheckbox", {
        /**
         * Get all row select checkbox display status.
         * @return True if all row select checkbox should be displayed.
         */
        get: /**
         * Get all row select checkbox display status.
         * @return {?} True if all row select checkbox should be displayed.
         */
        function () {
            return this.config.selectMode === 'multi' && this.config.showRowSelectAllCheckbox;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} column
     * @return {?}
     */
    DataTableColumnTitleHeaderComponent.prototype.showSortPriorityLabel = /**
     * @param {?} column
     * @return {?}
     */
    function (column) {
        return !!(this.config.multiColumnSortable && this.dataStateService.currentSortPriority > 1 && column.sortPriority);
    };
    DataTableColumnTitleHeaderComponent.decorators = [
        { type: Component, args: [{
                    exportAs: 'ngDataTableColumnTitleHeader',
                    // tslint:disable-next-line
                    selector: '[ngDataTableColumnTitleHeader]',
                    template: "<th class=\"ng-data-table-expand-column-header\" *ngIf=\"config.expandableRows\"></th>\n<th class=\"ng-data-table-index-column-header\" *ngIf=\"config.showIndexColumn\">\n  <span [textContent]=\"config.indexColumnTitle\"></span>\n</th>\n<th class=\"ng-data-table-select-column-header\" *ngIf=\"config.showRowSelectCheckboxColumn\">\n  <div class=\"ng-data-table-checkbox-container\" *ngIf=\"showAllRowSelectCheckbox\">\n    <input class=\"ng-data-table-checkbox-input\" type=\"checkbox\"\n           [id]=\"dataStateService.getUniqueId('rsa', 0)\" [(ngModel)]=\"allRowSelected\"/>\n    <label [for]=\"dataStateService.getUniqueId('rsa', 0)\"></label>\n  </div>\n</th>\n<ng-container *ngFor=\"let column of columns\">\n  <th class=\"ng-data-table-column-header\"\n    #columnHeader\n    *ngIf=\"column.visible\"\n    (click)=\"onHeaderClick(column, $event)\"\n    (ngElementWidth)=\"setColumnWidth($event, column)\"\n    [class.sortable]=\"column.sortable\"\n    [class.resizable]=\"column.resizable\"\n    [ngClass]=\"column.cssClass\">\n    <span class=\"ng-data-table-column-sort-priority\" *ngIf=\"showSortPriorityLabel(column)\"><small>{{column.sortPriority}}</small></span>\n    <span *ngIf=\"!column.headerTemplate\" [textContent]=\"column.title\" class=\"ng-data-table-column-header-label\"></span>\n    <ng-container *ngIf=\"column.headerTemplate\" [ngTemplateOutlet]=\"column.headerTemplate\" [ngTemplateOutletContext]=\"{ column: column }\">\n    </ng-container>\n    <span class=\"ng-data-table-column-sort-icon\" [hidden]=\"!column.sortable\" [ngClass]=\"column.getSortIconClass()\"></span>\n    <span class=\"ng-data-table-column-resize-handle\" *ngIf=\"column.resizable\" (mousedown)=\"onColumnResize($event, column, columnHeader)\"> </span>\n  </th>\n</ng-container>\n"
                }] }
    ];
    /** @nocollapse */
    DataTableColumnTitleHeaderComponent.ctorParameters = function () { return [
        { type: DragAndDropService },
        { type: DataTableEventStateService },
        { type: DataTableDataStateService },
        { type: DataTableConfigService }
    ]; };
    DataTableColumnTitleHeaderComponent.propDecorators = {
        columns: [{ type: Input }]
    };
    return DataTableColumnTitleHeaderComponent;
}());
export { DataTableColumnTitleHeaderComponent };
if (false) {
    /**
     * @type {?}
     * @private
     */
    DataTableColumnTitleHeaderComponent.prototype.resizeInProgress;
    /** @type {?} */
    DataTableColumnTitleHeaderComponent.prototype.columns;
    /**
     * @type {?}
     * @private
     */
    DataTableColumnTitleHeaderComponent.prototype.dragAndDropService;
    /**
     * @type {?}
     * @private
     */
    DataTableColumnTitleHeaderComponent.prototype.eventStateService;
    /** @type {?} */
    DataTableColumnTitleHeaderComponent.prototype.dataStateService;
    /** @type {?} */
    DataTableColumnTitleHeaderComponent.prototype.config;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS10YWJsZS1jb2x1bW4tdGl0bGUtaGVhZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL29ybmFtZW50dW0vIiwic291cmNlcyI6WyJkYXRhLXRhYmxlL2NvbXBvbmVudHMvZGF0YS10YWJsZS1jb2x1bW4tdGl0bGUtaGVhZGVyL2RhdGEtdGFibGUtY29sdW1uLXRpdGxlLWhlYWRlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRWpELE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxnREFBZ0QsQ0FBQztBQUVyRSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFJbEUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDckUsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFDbEYsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFDckYsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sOENBQThDLENBQUM7Ozs7QUFLekY7SUFZRSw2Q0FDVSxrQkFBc0MsRUFDdEMsaUJBQTZDLEVBQzlDLGdCQUEyQyxFQUMzQyxNQUE4QjtRQUg3Qix1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW9CO1FBQ3RDLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBNEI7UUFDOUMscUJBQWdCLEdBQWhCLGdCQUFnQixDQUEyQjtRQUMzQyxXQUFNLEdBQU4sTUFBTSxDQUF3QjtRQVQvQixxQkFBZ0IsR0FBRyxLQUFLLENBQUM7SUFVOUIsQ0FBQztJQUVKOzs7O09BSUc7Ozs7Ozs7SUFDSSwyREFBYTs7Ozs7O0lBQXBCLFVBQXFCLE1BQWdDLEVBQUUsS0FBaUI7UUFDdEUsSUFBSSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsRUFBRTtZQUMxQixJQUFJLENBQUMsUUFB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QjtnQkFDMUIseUJBQXlCO2dCQUZ6QixzQkFBc0I7OzswQkFnQjVCLEtBQUs7O0lBMEpSLDBDQUFDO0NBQUEsQUFuS0QsSUFtS0M7U0E3SlksbUNBQW1DOzs7Ozs7SUFDOUMsK0RBQWlDOztJQUVqQyxzREFDMkM7Ozs7O0lBR3pDLGlFQUE4Qzs7Ozs7SUFDOUMsZ0VBQXFEOztJQUNyRCwrREFBa0Q7O0lBQ2xELHFEQUFxQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgZ2V0IH0gZnJvbSAnLi4vLi4vLi4vdXRpbGl0eS9zZXJ2aWNlcy9vYmplY3QtdXRpbGl0eS5jbGFzcyc7XG5cbmltcG9ydCB7IERhdGFGZXRjaE1vZGUgfSBmcm9tICcuLi8uLi9tb2RlbHMvZGF0YS1mZXRjaC1tb2RlLmVudW0nO1xuXG5pbXBvcnQgeyBEYXRhVGFibGVDb2x1bW5Db21wb25lbnQgfSBmcm9tICcuLi9kYXRhLXRhYmxlLWNvbHVtbi9kYXRhLXRhYmxlLWNvbHVtbi5jb21wb25lbnQnO1xuXG5pbXBvcnQgeyBEcmFnQW5kRHJvcFNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi91dGlsaXR5L3V0aWxpdHkubW9kdWxlJztcbmltcG9ydCB7IERhdGFUYWJsZUNvbmZpZ1NlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9kYXRhLXRhYmxlLWNvbmZpZy5zZXJ2aWNlJztcbmltcG9ydCB7IERhdGFUYWJsZUV2ZW50U3RhdGVTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvZGF0YS10YWJsZS1ldmVudC5zZXJ2aWNlJztcbmltcG9ydCB7IERhdGFUYWJsZURhdGFTdGF0ZVNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9kYXRhLXRhYmxlLWRhdGEtc3RhdGUuc2VydmljZSc7XG5cbi8qKlxuICogQ29sdW1uIHRpdGxlIGhlYWRlciBjb21wb25lbnQuIFJlbmRlciBkYXRhIHRhYmxlIGNvbHVtbiBoZWFkZXJzLlxuICovXG5AQ29tcG9uZW50KHtcbiAgZXhwb3J0QXM6ICduZ0RhdGFUYWJsZUNvbHVtblRpdGxlSGVhZGVyJyxcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG4gIHNlbGVjdG9yOiAnW25nRGF0YVRhYmxlQ29sdW1uVGl0bGVIZWFkZXJdJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2RhdGEtdGFibGUtY29sdW1uLXRpdGxlLWhlYWRlci5jb21wb25lbnQuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgRGF0YVRhYmxlQ29sdW1uVGl0bGVIZWFkZXJDb21wb25lbnQge1xuICBwcml2YXRlIHJlc2l6ZUluUHJvZ3Jlc3MgPSBmYWxzZTtcblxuICBASW5wdXQoKVxuICBwdWJsaWMgY29sdW1uczogRGF0YVRhYmxlQ29sdW1uQ29tcG9uZW50W107XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBkcmFnQW5kRHJvcFNlcnZpY2U6IERyYWdBbmREcm9wU2VydmljZSxcbiAgICBwcml2YXRlIGV2ZW50U3RhdGVTZXJ2aWNlOiBEYXRhVGFibGVFdmVudFN0YXRlU2VydmljZSxcbiAgICBwdWJsaWMgZGF0YVN0YXRlU2VydmljZTogRGF0YVRhYmxlRGF0YVN0YXRlU2VydmljZSxcbiAgICBwdWJsaWMgY29uZmlnOiBEYXRhVGFibGVDb25maWdTZXJ2aWNlXG4gICkge31cblxuICAvKipcbiAgICogSGVhZGVyIGNsaWNrIGV2ZW50IGhhbmRsZXIuXG4gICAqIEBwYXJhbSBjb2x1bW4gRGF0YSB0YWJsZSBjb2x1bW4gY29tcG9uZW50IHJlZmVyZW5jZS5cbiAgICogQHBhcmFtIGV2ZW50IE1vdXNlIGV2ZW50IGFyZ3VtZW50cyBvYmplY3QuXG4gICAqL1xuICBwdWJsaWMgb25IZWFkZXJDbGljayhjb2x1bW46IERhdGFUYWJsZUNvbHVtbkNvbXBvbmVudCwgZXZlbnQ6IE1vdXNlRXZlbnQpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMucmVzaXplSW5Qcm9ncmVzcykge1xuICAgICAgdGhpcy5zb3J0RGF0YShjb2x1bW4pO1xuICAgICAgdGhpcy5ldmVudFN0YXRlU2VydmljZS5oZWFkZXJDbGlja1N0cmVhbS5lbWl0KHsgY29sdW1uLCBldmVudCB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5yZXNpemVJblByb2dyZXNzID0gZmFsc2U7IC8vIHRoaXMgaXMgYmVjYXVzZSBJIGNhbid0IHByZXZlbnQgY2xpY2sgZnJvbSBtb3VzdXAgb2YgdGhlIGRyYWcgZW5kXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFNvcnQgZGF0YSBldmVudCBoYW5kbGVyLlxuICAgKiBAcGFyYW0gY29sdW1uIERhdGEgdGFibGUgY29sdW1uIGNvbXBvbmVudCByZWZlcmVuY2UuXG4gICAqL1xuICBwcml2YXRlIHNvcnREYXRhKGNvbHVtbjogRGF0YVRhYmxlQ29sdW1uQ29tcG9uZW50KTogdm9pZCB7XG4gICAgaWYgKGNvbHVtbi5zb3J0YWJsZSkge1xuICAgICAgY29uc3QgcHJldlNvcnRPcmRlciA9IGNvbHVtbi5zb3J0T3JkZXI7XG4gICAgICBpZiAoY29sdW1uLnNvcnRPcmRlcikge1xuICAgICAgICBjb2x1bW4uc29ydE9yZGVyID0gY29sdW1uLmdldE5ld1NvcnRPcmRlcigpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKCF0aGlzLmNvbmZpZy5tdWx0aUNvbHVtblNvcnRhYmxlKSB7XG4gICAgICAgICAgY29uc3Qgc29ydENvbHVtbnMgPSB0aGlzLmNvbHVtbnMuZmlsdGVyKGl0ZW0gPT4gaXRlbS5zb3J0YWJsZSk7XG4gICAgICAgICAgc29ydENvbHVtbnMuZm9yRWFjaCgoc29ydENvbHVtbjogRGF0YVRhYmxlQ29sdW1uQ29tcG9uZW50KSA9PiB7XG4gICAgICAgICAgICBpZiAoc29ydENvbHVtbiAhPT0gY29sdW1uKSB7XG4gICAgICAgICAgICAgIHNvcnRDb2x1bW4uc29ydE9yZGVyID0gJyc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBjb2x1bW4uc29ydE9yZGVyID0gJ2FzYyc7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLmNvbmZpZy5tdWx0aUNvbHVtblNvcnRhYmxlKSB7XG4gICAgICAgIGlmIChjb2x1bW4uc29ydE9yZGVyID09PSAnJykge1xuICAgICAgICAgIGNvbnN0IHNvcnRDb2x1bW5zID0gdGhpcy5jb2x1bW5zLmZpbHRlcihpdGVtID0+IGl0ZW0uc29ydGFibGUpO1xuICAgICAgICAgIHNvcnRDb2x1bW5zLmZvckVhY2goKHNvcnRDb2x1bW46IERhdGFUYWJsZUNvbHVtbkNvbXBvbmVudCkgPT4ge1xuICAgICAgICAgICAgaWYgKHNvcnRDb2x1bW4gIT09IGNvbHVtbiAmJiBzb3J0Q29sdW1uLnNvcnRQcmlvcml0eSA+IGNvbHVtbi5zb3J0UHJpb3JpdHkpIHtcbiAgICAgICAgICAgICAgLS1zb3J0Q29sdW1uLnNvcnRQcmlvcml0eTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIGNvbHVtbi5zb3J0UHJpb3JpdHkgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgLS10aGlzLmRhdGFTdGF0ZVNlcnZpY2UuY3VycmVudFNvcnRQcmlvcml0eTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpZiAoIXByZXZTb3J0T3JkZXIpIHtcbiAgICAgICAgICAgIGNvbHVtbi5zb3J0UHJpb3JpdHkgPSArK3RoaXMuZGF0YVN0YXRlU2VydmljZS5jdXJyZW50U29ydFByaW9yaXR5O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB0aGlzLmV2ZW50U3RhdGVTZXJ2aWNlLmRhdGFGZXRjaFN0cmVhbS5uZXh0KERhdGFGZXRjaE1vZGUuU09GVF9MT0FEKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogU2V0IGNvbHVtbiB3aWR0aC5cbiAgICogQHBhcmFtIHdpZHRoIFdpZHRoIHZhbHVlIGluIHBpeGVscy5cbiAgICogQHBhcmFtIGNvbHVtbiBEYXRhIHRhYmxlIGNvbHVtbiBjb21wb25lbnQgcmVmZXJlbmNlLlxuICAgKi9cbiAgcHVibGljIHNldENvbHVtbldpZHRoKHdpZHRoOiBudW1iZXIsIGNvbHVtbjogRGF0YVRhYmxlQ29sdW1uQ29tcG9uZW50KTogdm9pZCB7XG4gICAgY29sdW1uLmFjdHVhbFdpZHRoID0gd2lkdGg7XG4gIH1cblxuICAvKipcbiAgICogQ29sdW1uIHJlc2l6ZSBldmVudCBoYW5kbGVyLlxuICAgKiBAcGFyYW0gZXZlbnQgUmVzaXplIG1vdXNlIGV2ZW50LlxuICAgKiBAcGFyYW0gY29sdW1uIERhdGEgdGFibGUgY29sdW1uIGNvbXBvbmVudC5cbiAgICogQHBhcmFtIGNvbHVtbkVsZW1lbnQgVGFibGUgaGVhZGVyIGNlbGwgZWxlbWVudCBET00gcmVmZXJlbmNlLlxuICAgKi9cbiAgcHVibGljIG9uQ29sdW1uUmVzaXplKGV2ZW50OiBNb3VzZUV2ZW50LCBjb2x1bW46IERhdGFUYWJsZUNvbHVtbkNvbXBvbmVudCwgY29sdW1uRWxlbWVudDogSFRNTFRhYmxlSGVhZGVyQ2VsbEVsZW1lbnQpOiB2b2lkIHtcbiAgICB0aGlzLnJlc2l6ZUluUHJvZ3Jlc3MgPSB0cnVlO1xuXG4gICAgdGhpcy5kcmFnQW5kRHJvcFNlcnZpY2UuZHJhZyhldmVudCwge1xuICAgICAgbW92ZTogKG1vdmVFdmVudDogTW91c2VFdmVudCwgZHg6IG51bWJlcikgPT4ge1xuICAgICAgICBjb25zdCBuZXdXaWR0aCA9IGNvbHVtbkVsZW1lbnQub2Zmc2V0V2lkdGggKyBkeDtcbiAgICAgICAgaWYgKGNvbHVtbi5yZXNpemVNaW5MaW1pdCAhPT0gdW5kZWZpbmVkICYmIG5ld1dpZHRoIDwgY29sdW1uLnJlc2l6ZU1pbkxpbWl0KSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29sdW1uLmFjdHVhbFdpZHRoID0gbmV3V2lkdGg7XG4gICAgICAgIGxldCB0b3RhbFdpZHRoID0gMDtcblxuICAgICAgICB0aGlzLmNvbHVtbnMuZm9yRWFjaChjb2wgPT4ge1xuICAgICAgICAgIGNvbC53aWR0aCA9IGNvbC5hY3R1YWxXaWR0aDtcbiAgICAgICAgICB0b3RhbFdpZHRoICs9IGNvbC53aWR0aDtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5kYXRhU3RhdGVTZXJ2aWNlLnRhYmxlV2lkdGggPSB0b3RhbFdpZHRoO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCBhbGwgcm93IHNlbGVjdGVkIHN0YXRlLlxuICAgKiBAcGFyYW0gdmFsdWUgQWxsIHJvdyBzZWxlY3RlZCBzdGF0dXMuXG4gICAqL1xuICBwdWJsaWMgc2V0IGFsbFJvd1NlbGVjdGVkKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5kYXRhU3RhdGVTZXJ2aWNlLmFsbFJvd1NlbGVjdGVkID0gdmFsdWU7XG4gICAgdGhpcy5hbGxSb3dTZWxlY3RlZENoYW5nZWQodGhpcy5kYXRhU3RhdGVTZXJ2aWNlLmFsbFJvd1NlbGVjdGVkKTtcbiAgICB0aGlzLmV2ZW50U3RhdGVTZXJ2aWNlLmFsbFJvd1NlbGVjdENoYW5nZVN0cmVhbS5lbWl0KHRoaXMuZGF0YVN0YXRlU2VydmljZS5hbGxSb3dTZWxlY3RlZCk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGFsbCByb3cgc2VsZWN0ZWQgc3RhdGUuXG4gICAqL1xuICBwdWJsaWMgZ2V0IGFsbFJvd1NlbGVjdGVkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmRhdGFTdGF0ZVNlcnZpY2UuYWxsUm93U2VsZWN0ZWQ7XG4gIH1cblxuICAvKipcbiAgICogQWxsIHJvdyBzZWxlY3QgY2hhbmdlIGV2ZW50IGhhbmRsZXIuXG4gICAqIEBwYXJhbSBzZWxlY3RlZFN0YXRlIFJvdyBzZWxlY3RlZCBzdGF0dXMuXG4gICAqL1xuICBwcml2YXRlIGFsbFJvd1NlbGVjdGVkQ2hhbmdlZChzZWxlY3RlZFN0YXRlOiBib29sZWFuKTogdm9pZCB7XG4gICAgdGhpcy5kYXRhU3RhdGVTZXJ2aWNlLmRhdGFSb3dzLmZvckVhY2gocm93ID0+IHtcbiAgICAgIGNvbnN0IGlkID0gZ2V0KHJvdy5pdGVtLCB0aGlzLmNvbmZpZy5zZWxlY3RUcmFja0J5KTtcbiAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5kYXRhU3RhdGVTZXJ2aWNlLnNlbGVjdGVkUm93cy5pbmRleE9mKGlkKTtcbiAgICAgIGlmIChzZWxlY3RlZFN0YXRlICYmIGluZGV4IDwgMCkge1xuICAgICAgICB0aGlzLmRhdGFTdGF0ZVNlcnZpY2Uuc2VsZWN0ZWRSb3dzLnB1c2goaWQpO1xuICAgICAgfSBlbHNlIGlmICghc2VsZWN0ZWRTdGF0ZSAmJiBpbmRleCA+IC0xKSB7XG4gICAgICAgIHRoaXMuZGF0YVN0YXRlU2VydmljZS5zZWxlY3RlZFJvd3Muc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgIH1cblxuICAgICAgcm93LnNlbGVjdGVkID0gc2VsZWN0ZWRTdGF0ZTtcbiAgICB9KTtcblxuICAgIHRoaXMuZXZlbnRTdGF0ZVNlcnZpY2Uucm93U2VsZWN0Q2hhbmdlU3RyZWFtLmVtaXQodGhpcy5kYXRhU3RhdGVTZXJ2aWNlLnNlbGVjdGVkUm93cyk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGFsbCByb3cgc2VsZWN0IGNoZWNrYm94IGRpc3BsYXkgc3RhdHVzLlxuICAgKiBAcmV0dXJuIFRydWUgaWYgYWxsIHJvdyBzZWxlY3QgY2hlY2tib3ggc2hvdWxkIGJlIGRpc3BsYXllZC5cbiAgICovXG4gIHB1YmxpYyBnZXQgc2hvd0FsbFJvd1NlbGVjdENoZWNrYm94KCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmNvbmZpZy5zZWxlY3RNb2RlID09PSAnbXVsdGknICYmIHRoaXMuY29uZmlnLnNob3dSb3dTZWxlY3RBbGxDaGVja2JveDtcbiAgfVxuXG4gIHB1YmxpYyBzaG93U29ydFByaW9yaXR5TGFiZWwoY29sdW1uOiBEYXRhVGFibGVDb2x1bW5Db21wb25lbnQpOiBib29sZWFuIHtcbiAgICByZXR1cm4gISEodGhpcy5jb25maWcubXVsdGlDb2x1bW5Tb3J0YWJsZSAmJiB0aGlzLmRhdGFTdGF0ZVNlcnZpY2UuY3VycmVudFNvcnRQcmlvcml0eSA+IDEgJiYgY29sdW1uLnNvcnRQcmlvcml0eSk7XG4gIH1cbn1cbiJdfQ==