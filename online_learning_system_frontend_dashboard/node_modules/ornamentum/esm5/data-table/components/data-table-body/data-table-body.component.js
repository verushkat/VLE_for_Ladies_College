/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, TemplateRef } from '@angular/core';
import { DataTableConfigService } from '../../services/data-table-config.service';
import { DataTableDataStateService } from '../../services/data-table-data-state.service';
import { DataTableEventStateService } from '../../services/data-table-event.service';
import { get } from '../../../utility/services/object-utility.class';
/**
 * Data table body component. Data table body table definition rendering is handled by this component.
 */
var DataTableBodyComponent = /** @class */ (function () {
    function DataTableBodyComponent(config, dataStateService, eventStateService) {
        this.config = config;
        this.dataStateService = dataStateService;
        this.eventStateService = eventStateService;
    }
    /**
     * Unique data row tracking callback.
     * @param index Current index.
     * @param dataRow Data row object reference.
     */
    /**
     * Unique data row tracking callback.
     * @param {?} index Current index.
     * @param {?} dataRow Data row object reference.
     * @return {?}
     */
    DataTableBodyComponent.prototype.dataRowTrackBy = /**
     * Unique data row tracking callback.
     * @param {?} index Current index.
     * @param {?} dataRow Data row object reference.
     * @return {?}
     */
    function (index, dataRow) {
        return dataRow.index;
    };
    /**
     * Odd row status; True if row index is a odd number.
     * @param row Data row object.
     * @return True if odd row.
     */
    /**
     * Odd row status; True if row index is a odd number.
     * @param {?} row Data row object.
     * @return {?} True if odd row.
     */
    DataTableBodyComponent.prototype.isOddRow = /**
     * Odd row status; True if row index is a odd number.
     * @param {?} row Data row object.
     * @return {?} True if odd row.
     */
    function (row) {
        return row.index % 2 === 0;
    };
    /**
     * Even row status; True if row index is a even number.
     * @param row Data row object.
     * @return True if even row.
     */
    /**
     * Even row status; True if row index is a even number.
     * @param {?} row Data row object.
     * @return {?} True if even row.
     */
    DataTableBodyComponent.prototype.isEvenRow = /**
     * Even row status; True if row index is a even number.
     * @param {?} row Data row object.
     * @return {?} True if even row.
     */
    function (row) {
        return row.index % 2 === 1;
    };
    /**
     * Odd substitute row status by row index; True if row index is an odd substitute row.
     * @param index Row index.
     * @return True if odd substitute row.
     */
    /**
     * Odd substitute row status by row index; True if row index is an odd substitute row.
     * @param {?} index Row index.
     * @return {?} True if odd substitute row.
     */
    DataTableBodyComponent.prototype.isOddSubstituteRow = /**
     * Odd substitute row status by row index; True if row index is an odd substitute row.
     * @param {?} index Row index.
     * @return {?} True if odd substitute row.
     */
    function (index) {
        return (index + this.dataStateService.substituteRows.length) % 2 === 0;
    };
    /**
     * Even substitute row status by row index; True if row index is an even substitute row.
     * @param index Row index.
     * @return True if even substitute row.
     */
    /**
     * Even substitute row status by row index; True if row index is an even substitute row.
     * @param {?} index Row index.
     * @return {?} True if even substitute row.
     */
    DataTableBodyComponent.prototype.isEvenSubstituteRow = /**
     * Even substitute row status by row index; True if row index is an even substitute row.
     * @param {?} index Row index.
     * @return {?} True if even substitute row.
     */
    function (index) {
        return (index + this.dataStateService.substituteRows.length) % 2 === 1;
    };
    /**
     * On row expand event handler.
     * @param $event Click event argument reference.
     * @param dataRow Data row object.
     */
    /**
     * On row expand event handler.
     * @param {?} $event Click event argument reference.
     * @param {?} dataRow Data row object.
     * @return {?}
     */
    DataTableBodyComponent.prototype.onRowExpand = /**
     * On row expand event handler.
     * @param {?} $event Click event argument reference.
     * @param {?} dataRow Data row object.
     * @return {?}
     */
    function ($event, dataRow) {
        dataRow.expanded = !dataRow.expanded;
        if (!this.config.showRowExpandLoadingSpinner) {
            dataRow.dataLoaded = true;
        }
    };
    /**
     * On row initialize event handler.
     * @param dataRow Data table row.
     */
    /**
     * On row initialize event handler.
     * @param {?} dataRow Data table row.
     * @return {?}
     */
    DataTableBodyComponent.prototype.onRowInit = /**
     * On row initialize event handler.
     * @param {?} dataRow Data table row.
     * @return {?}
     */
    function (dataRow) {
        this.eventStateService.rowBindStream.emit(dataRow);
    };
    /**
     * On cell initialize event handler.
     * @param column Data table column component reference.
     * @param row Data table row object.
     */
    /**
     * On cell initialize event handler.
     * @param {?} column Data table column component reference.
     * @param {?} row Data table row object.
     * @return {?}
     */
    DataTableBodyComponent.prototype.onCellInit = /**
     * On cell initialize event handler.
     * @param {?} column Data table column component reference.
     * @param {?} row Data table row object.
     * @return {?}
     */
    function (column, row) {
        this.eventStateService.cellBindStream.emit({
            column: column,
            row: row
        });
    };
    /**
     * Cell clicked event handler.
     * @param column Column data table component reference.
     * @param row Data table row reference.
     * @param event Mouse click event argument reference.
     */
    /**
     * Cell clicked event handler.
     * @param {?} column Column data table component reference.
     * @param {?} row Data table row reference.
     * @param {?} event Mouse click event argument reference.
     * @return {?}
     */
    DataTableBodyComponent.prototype.cellClicked = /**
     * Cell clicked event handler.
     * @param {?} column Column data table component reference.
     * @param {?} row Data table row reference.
     * @param {?} event Mouse click event argument reference.
     * @return {?}
     */
    function (column, row, event) {
        this.eventStateService.cellClickStream.emit({ row: row, column: column, event: event });
    };
    /**
     * Get row span collection by data row.
     * @param row Data row reference.
     * @return Dummy row span collection.
     */
    /**
     * Get row span collection by data row.
     * @param {?} row Data row reference.
     * @return {?} Dummy row span collection.
     */
    DataTableBodyComponent.prototype.getRowSpanCollection = /**
     * Get row span collection by data row.
     * @param {?} row Data row reference.
     * @return {?} Dummy row span collection.
     */
    function (row) {
        return Array.from({
            length: this.dataStateService.onDynamicRowSpanExtract(row)
        });
    };
    Object.defineProperty(DataTableBodyComponent.prototype, "totalColumnCount", {
        /**
         * Get total column count used for substitute row generation.
         * @return Number of columns.
         */
        get: /**
         * Get total column count used for substitute row generation.
         * @return {?} Number of columns.
         */
        function () {
            /** @type {?} */
            var count = 0;
            count += this.config.showIndexColumn ? 1 : 0;
            count += this.config.showRowSelectCheckboxColumn ? 1 : 0;
            count += this.config.expandableRows ? 1 : 0;
            this.columns.forEach((/**
             * @param {?} column
             * @return {?}
             */
            function (column) {
                count += column.visible ? 1 : 0;
            }));
            return count;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * On row select click event handler.
     * @param row Data row reference.
     * @param event Row click event.
     */
    /**
     * On row select click event handler.
     * @param {?} row Data row reference.
     * @param {?} event Row click event.
     * @return {?}
     */
    DataTableBodyComponent.prototype.onRowSelectClick = /**
     * On row select click event handler.
     * @param {?} row Data row reference.
     * @param {?} event Row click event.
     * @return {?}
     */
    function (row, event) {
        // Prevent single mode checkbox getting unchecked on tapping already selected.
        if (this.config.selectMode === 'single') {
            /** @type {?} */
            var id = get(row.item, this.config.selectTrackBy);
            /** @type {?} */
            var previousSelection = this.dataStateService.selectedRow;
            if (previousSelection === id) {
                event.preventDefault();
                row.selected = true;
            }
        }
    };
    /**
     * On row selection change event handler.
     * @param row Data row reference.
     */
    /**
     * On row selection change event handler.
     * @param {?} row Data row reference.
     * @return {?}
     */
    DataTableBodyComponent.prototype.onRowSelectChange = /**
     * On row selection change event handler.
     * @param {?} row Data row reference.
     * @return {?}
     */
    function (row) {
        /** @type {?} */
        var id = get(row.item, this.config.selectTrackBy);
        switch (this.config.selectMode) {
            case 'multi': {
                /** @type {?} */
                var index = this.dataStateService.selectedRows.indexOf(id);
                if (row.selected && index < 0) {
                    this.dataStateService.selectedRows.push(id);
                }
                else if (!row.selected && index > -1) {
                    this.dataStateService.selectedRows.splice(index, 1);
                }
                /** @type {?} */
                var previousAllRowSelectedState = this.dataStateService.allRowSelected;
                this.dataStateService.allRowSelected = this.dataStateService.dataRows.every((/**
                 * @param {?} dataRow
                 * @return {?}
                 */
                function (dataRow) {
                    return dataRow.selected;
                }));
                this.eventStateService.rowSelectChangeStream.emit(this.dataStateService.selectedRows);
                if (previousAllRowSelectedState !== this.dataStateService.allRowSelected) {
                    this.eventStateService.allRowSelectChangeStream.emit(this.dataStateService.allRowSelected);
                }
                break;
            }
            case 'single_toggle': {
                if (row.selected) {
                    this.dataStateService.selectedRow = id;
                    // deselect all other row other rows
                    this.dataStateService.dataRows.forEach((/**
                     * @param {?} dataRow
                     * @return {?}
                     */
                    function (dataRow) {
                        if (dataRow !== row) {
                            dataRow.selected = false;
                        }
                    }));
                }
                else {
                    this.dataStateService.selectedRow = undefined;
                }
                this.eventStateService.rowSelectChangeStream.emit(this.dataStateService.selectedRow);
                break;
            }
            case 'single': {
                /** @type {?} */
                var previousSelection = this.dataStateService.selectedRow;
                this.dataStateService.selectedRow = id;
                row.selected = true;
                // deselect all other row other rows
                this.dataStateService.dataRows.forEach((/**
                 * @param {?} dataRow
                 * @return {?}
                 */
                function (dataRow) {
                    if (dataRow !== row) {
                        dataRow.selected = false;
                    }
                }));
                if (previousSelection !== id) {
                    this.eventStateService.rowSelectChangeStream.emit(this.dataStateService.selectedRow);
                }
                break;
            }
        }
    };
    /**
     * Row clicked event handler.
     * @param row Data row object.
     * @param event Mouse click event argument object.
     */
    /**
     * Row clicked event handler.
     * @param {?} row Data row object.
     * @param {?} event Mouse click event argument object.
     * @return {?}
     */
    DataTableBodyComponent.prototype.rowClicked = /**
     * Row clicked event handler.
     * @param {?} row Data row object.
     * @param {?} event Mouse click event argument object.
     * @return {?}
     */
    function (row, event) {
        if (this.config.selectOnRowClick || (this.config.expandableRows && this.config.expandOnRowClick)) {
            /** @type {?} */
            var target = (/** @type {?} */ (event.target));
            if (target && target.classList && target.classList.contains('ng-ignore-propagation')) {
                return;
            }
            if (this.config.rowSelectable && this.config.selectOnRowClick) {
                row.selected = !row.selected;
                this.onRowSelectChange(row);
            }
            if (this.config.expandOnRowClick) {
                row.expanded = !row.expanded;
            }
        }
        this.eventStateService.rowClickStream.emit({ row: row, event: event });
    };
    /**
     * Row double clicked event handler.
     * @param row Data row object.
     * @param event Event Mouse click event argument object.
     */
    /**
     * Row double clicked event handler.
     * @param {?} row Data row object.
     * @param {?} event Event Mouse click event argument object.
     * @return {?}
     */
    DataTableBodyComponent.prototype.rowDoubleClicked = /**
     * Row double clicked event handler.
     * @param {?} row Data row object.
     * @param {?} event Event Mouse click event argument object.
     * @return {?}
     */
    function (row, event) {
        this.eventStateService.rowDoubleClickStream.emit({ row: row, event: event });
    };
    Object.defineProperty(DataTableBodyComponent.prototype, "hasSubstituteRows", {
        /**
         * Get substitute row availability status.
         * @return True if substitute rows are available.
         */
        get: /**
         * Get substitute row availability status.
         * @return {?} True if substitute rows are available.
         */
        function () {
            return !this.config.loadOnScroll
                && this.config.showSubstituteRows
                && this.dataStateService.dataRows.length
                && !this.dataStateService.showNoDataOverlay;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Get cell value by data field.
     * @param row Data row reference.
     * @param column Data table column component reference.
     */
    /**
     * Get cell value by data field.
     * @param {?} row Data row reference.
     * @param {?} column Data table column component reference.
     * @return {?}
     */
    DataTableBodyComponent.prototype.getFieldValue = /**
     * Get cell value by data field.
     * @param {?} row Data row reference.
     * @param {?} column Data table column component reference.
     * @return {?}
     */
    function (row, column) {
        return get(row.item, column.field);
    };
    Object.defineProperty(DataTableBodyComponent.prototype, "showRowSelectCheckbox", {
        /**
         * Get row select checkbox display status.
         * @return True if row selector checkbox should be displayed.
         */
        get: /**
         * Get row select checkbox display status.
         * @return {?} True if row selector checkbox should be displayed.
         */
        function () {
            return this.config.rowSelectable && this.config.showRowSelectCheckbox;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Get row expend view loading status. Used to display loading spinner on expand column while data fetching.
     * @param row Data row object reference.
     */
    /**
     * Get row expend view loading status. Used to display loading spinner on expand column while data fetching.
     * @param {?} row Data row object reference.
     * @return {?}
     */
    DataTableBodyComponent.prototype.isRowExpanderLoading = /**
     * Get row expend view loading status. Used to display loading spinner on expand column while data fetching.
     * @param {?} row Data row object reference.
     * @return {?}
     */
    function (row) {
        return row.expanded && !row.dataLoaded;
    };
    DataTableBodyComponent.decorators = [
        { type: Component, args: [{
                    exportAs: 'ngDataTableBody',
                    // tslint:disable-next-line
                    selector: '[ngDataTableBody]',
                    template: "<ng-container *ngFor=\"let row of dataStateService.dataRows; trackBy: dataRowTrackBy; let i = index;\">\n  <ng-container *ngFor=\"let ignored of getRowSpanCollection(row); let rowSpanIndex = index; let rowSpanCount = count\">\n    <tr\n      class=\"ng-data-table-row\"\n      (ngInit)=\"onRowInit(row)\"\n      [attr.title]=\"row.tooltip\"\n      [class.row-odd]=\"isOddRow(row)\"\n      [class.row-even]=\"isEvenRow(row)\"\n      [class.selected]=\"row.selected\"\n      [class.clickable]=\"config.selectOnRowClick\"\n      [class.disabled]=\"row.disabled\"\n      [ngClass]=\"row.cssClass\"\n      (dblclick)=\"rowDoubleClicked(row, $event)\"\n      (click)=\"rowClicked(row, $event)\"\n    >\n      <td\n        class=\"ng-data-table-row-expand-button ng-ignore-propagation\"\n        [style.background-color]=\"row.color\"\n        *ngIf=\"config.expandableRows && !rowSpanIndex\"\n        (click)=\"onRowExpand($event, row)\"\n        [attr.rowspan]=\"rowSpanCount\"\n      >\n        <div [hidden]=\"config.showRowExpandLoadingSpinner && isRowExpanderLoading(row)\">\n          <span class=\"ng-data-table-expander-collapsed-icon ng-ignore-propagation\" *ngIf=\"!row.expanded\"></span>\n          <span class=\"ng-data-table-expander-expanded-icon ng-ignore-propagation\" *ngIf=\"row.expanded\"></span>\n        </div>\n        <ng-data-table-loading-spinner\n          *ngIf=\"config.showRowExpandLoadingSpinner\"\n          [loadingSpinnerTemplate]=\"rowExpandLoadingSpinnerTemplate\"\n          [isLoading]=\"isRowExpanderLoading(row)\"\n          [showOverlay]=\"false\"\n        >\n        </ng-data-table-loading-spinner>\n      </td>\n      <td\n        class=\"index-column\"\n        [style.background-color]=\"row.color\"\n        *ngIf=\"config.showIndexColumn && !rowSpanIndex\"\n        [textContent]=\"row.index\"\n        [attr.rowspan]=\"rowSpanCount\"\n      >\n      </td>\n      <td\n        class=\"ng-data-table-select-column\"\n        [style.background-color]=\"row.color\"\n        *ngIf=\"showRowSelectCheckbox && !rowSpanIndex\"\n        [attr.rowspan]=\"rowSpanCount\"\n      >\n        <div class=\"ng-data-table-checkbox-container ng-ignore-propagation\">\n          <input class=\"ng-data-table-checkbox-input ng-ignore-propagation\" type=\"checkbox\"\n            [id]=\"dataStateService.getUniqueId('dr', i)\"\n            [(ngModel)]=\"row.selected\"\n            (click)=\"onRowSelectClick(row, $event)\"\n            (change)=\"onRowSelectChange(row)\"\n          />\n          <label class=\"ng-ignore-propagation\" [for]=\"dataStateService.getUniqueId('dr', i)\"></label>\n        </div>\n      </td>\n      <ng-container *ngFor=\"let column of columns\">\n        <ng-container *ngIf=\"column.visible\">\n          <td\n            class=\"ng-data-table-data-column\"\n            *ngIf=\"!column.cellTemplate && !rowSpanIndex\"\n            (ngInit)=\"onCellInit(column, row)\"\n            [ngClass]=\"column.cssClass\"\n            [attr.rowspan]=\"rowSpanCount\"\n            [style.background-color]=\"column.getCellColor(row) || row.color\"\n            (click)=\"cellClicked(column, row, $event)\"\n          >\n            <span>{{ getFieldValue(row, column) }}</span>\n          </td>\n          <ng-container\n            *ngIf=\"column.cellTemplate\"\n            [ngTemplateOutlet]=\"column.cellTemplate\"\n            [ngTemplateOutletContext]=\"{ column: column, row: row, spanIndex: rowSpanIndex, rowSpan: rowSpanCount }\"\n          >\n          </ng-container>\n        </ng-container>\n      </ng-container>\n    </tr>\n  </ng-container>\n  <tr *ngIf=\"config.expandableRows\" [hidden]=\"!row.expanded\" class=\"ng-data-table-row-expansion\">\n    <td [attr.colspan]=\"totalColumnCount\">\n      <ng-container [ngTemplateOutlet]=\"rowExpandTemplate\" [ngTemplateOutletContext]=\"{ row: row }\"> </ng-container>\n    </td>\n  </tr>\n</ng-container>\n<ng-container *ngIf=\"hasSubstituteRows\">\n  <tr\n    *ngFor=\"let ignored of dataStateService.substituteRows; let index = index\"\n    [class.row-odd]=\"isOddSubstituteRow(index)\"\n    [class.row-even]=\"isEvenSubstituteRow(index)\"\n  >\n    <td *ngIf=\"config.expandableRows\">&nbsp;</td>\n    <td *ngIf=\"config.showIndexColumn\">&nbsp;</td>\n    <td *ngIf=\"showRowSelectCheckbox\">&nbsp;</td>\n    <ng-container *ngFor=\"let column of columns\">\n      <td *ngIf=\"column.visible\">&nbsp;</td>\n    </ng-container>\n  </tr>\n</ng-container>\n"
                }] }
    ];
    /** @nocollapse */
    DataTableBodyComponent.ctorParameters = function () { return [
        { type: DataTableConfigService },
        { type: DataTableDataStateService },
        { type: DataTableEventStateService }
    ]; };
    DataTableBodyComponent.propDecorators = {
        columns: [{ type: Input }],
        rowExpandTemplate: [{ type: Input }],
        rowExpandLoadingSpinnerTemplate: [{ type: Input }]
    };
    return DataTableBodyComponent;
}());
export { DataTableBodyComponent };
if (false) {
    /** @type {?} */
    DataTableBodyComponent.prototype.columns;
    /** @type {?} */
    DataTableBodyComponent.prototype.rowExpandTemplate;
    /** @type {?} */
    DataTableBodyComponent.prototype.rowExpandLoadingSpinnerTemplate;
    /** @type {?} */
    DataTableBodyComponent.prototype.config;
    /** @type {?} */
    DataTableBodyComponent.prototype.dataStateService;
    /**
     * @type {?}
     * @private
     */
    DataTableBodyComponent.prototype.eventStateService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS10YWJsZS1ib2R5LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL29ybmFtZW50dW0vIiwic291cmNlcyI6WyJkYXRhLXRhYmxlL2NvbXBvbmVudHMvZGF0YS10YWJsZS1ib2R5L2RhdGEtdGFibGUtYm9keS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLFdBQVcsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQU05RCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUNsRixPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSw4Q0FBOEMsQ0FBQztBQUN6RixPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUVyRixPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0RBQWdELENBQUM7Ozs7QUFLckU7SUFnQkUsZ0NBQ1MsTUFBOEIsRUFDOUIsZ0JBQTJDLEVBQzFDLGlCQUE2QztRQUY5QyxXQUFNLEdBQU4sTUFBTSxDQUF3QjtRQUM5QixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQTJCO1FBQzFDLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBNEI7SUFDcEQsQ0FBQztJQUVKOzs7O09BSUc7Ozs7Ozs7SUFDSSwrQ0FBYzs7Ozs7O0lBQXJCLFVBQXNCLEtBQWEsRUFBRSxPQUEwQjtRQUM3RCxPQUFPLE9BQU8sQ0FBQyxLQUFLLENBQUM7SUFDdkIsQ0FBQztJQUVEOzs7O09BSUc7Ozs7OztJQUNJLHlDQUFROzs7OztJQUFmLFVBQWdCLEdBQXNCO1FBQ3BDLE9BQU8sR0FBRyxDQUFDLEtBQUssR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzdCLENBQUM7SUFFRDs7OztPQUlHOzs7Ozs7SUFDSSwwQ0FBUzs7Ozs7SUFBaEIsVUFBaUIsR0FBc0I7UUFDckMsT0FBTyxHQUFHLENBQUMsS0FBSyxHQUFHLENBQUMsS0FBSyxDQUFDLENB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Ozs7OztJQUEzQixVQUE0QixHQUFzQjtRQUNoRCxPQUFPLEdBQUcsQ0FBQyxRQUFRLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDO0lBQ3pDLENBQUM7O2dCQWhTRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGlCQUFpQjs7b0JBRTNCLFFBQVEsRUFBRSxtQkFBbUI7b0JBQzdCLDAzSUFBK0M7aUJBQ2hEOzs7O2dCQWRRLHNCQUFzQjtnQkFDdEIseUJBQXlCO2dCQUN6QiwwQkFBMEI7OzswQkFjaEMsS0FBSztvQ0FHTCxLQUFLO2tEQUdMLEtBQUs7O0lBb1JSLDZCQUFDO0NBQUEsQUFqU0QsSUFpU0M7U0EzUlksc0JBQXNCOzs7SUFDakMseUNBQzJDOztJQUUzQyxtREFDMkM7O0lBRTNDLGlFQUN5RDs7SUFHdkQsd0NBQXFDOztJQUNyQyxrREFBa0Q7Ozs7O0lBQ2xELG1EQUFxRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIFRlbXBsYXRlUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IERhdGFUYWJsZVJvdyB9IGZyb20gJy4uLy4uL21vZGVscy9kYXRhLXRhYmxlLXJvdy5tb2RlbCc7XG5cbmltcG9ydCB7IERhdGFUYWJsZUNvbHVtbkNvbXBvbmVudCB9IGZyb20gJy4uL2RhdGEtdGFibGUtY29sdW1uL2RhdGEtdGFibGUtY29sdW1uLmNvbXBvbmVudCc7XG5cbmltcG9ydCB7IERhdGFUYWJsZUNvbmZpZ1NlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9kYXRhLXRhYmxlLWNvbmZpZy5zZXJ2aWNlJztcbmltcG9ydCB7IERhdGFUYWJsZURhdGFTdGF0ZVNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9kYXRhLXRhYmxlLWRhdGEtc3RhdGUuc2VydmljZSc7XG5pbXBvcnQgeyBEYXRhVGFibGVFdmVudFN0YXRlU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2RhdGEtdGFibGUtZXZlbnQuc2VydmljZSc7XG5cbmltcG9ydCB7IGdldCB9IGZyb20gJy4uLy4uLy4uL3V0aWxpdHkvc2VydmljZXMvb2JqZWN0LXV0aWxpdHkuY2xhc3MnO1xuXG4vKipcbiAqIERhdGEgdGFibGUgYm9keSBjb21wb25lbnQuIERhdGEgdGFibGUgYm9keSB0YWJsZSBkZWZpbml0aW9uIHJlbmRlcmluZyBpcyBoYW5kbGVkIGJ5IHRoaXMgY29tcG9uZW50LlxuICovXG5AQ29tcG9uZW50KHtcbiAgZXhwb3J0QXM6ICduZ0RhdGFUYWJsZUJvZHknLFxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcbiAgc2VsZWN0b3I6ICdbbmdEYXRhVGFibGVCb2R5XScsXG4gIHRlbXBsYXRlVXJsOiAnLi9kYXRhLXRhYmxlLWJvZHkuY29tcG9uZW50Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIERhdGFUYWJsZUJvZHlDb21wb25lbnQge1xuICBASW5wdXQoKVxuICBwdWJsaWMgY29sdW1uczogRGF0YVRhYmxlQ29sdW1uQ29tcG9uZW50W107XG5cbiAgQElucHV0KClcbiAgcHVibGljIHJvd0V4cGFuZFRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyByb3dFeHBhbmRMb2FkaW5nU3Bpbm5lclRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBjb25maWc6IERhdGFUYWJsZUNvbmZpZ1NlcnZpY2UsXG4gICAgcHVibGljIGRhdGFTdGF0ZVNlcnZpY2U6IERhdGFUYWJsZURhdGFTdGF0ZVNlcnZpY2UsXG4gICAgcHJpdmF0ZSBldmVudFN0YXRlU2VydmljZTogRGF0YVRhYmxlRXZlbnRTdGF0ZVNlcnZpY2VcbiAgKSB7fVxuXG4gIC8qKlxuICAgKiBVbmlxdWUgZGF0YSByb3cgdHJhY2tpbmcgY2FsbGJhY2suXG4gICAqIEBwYXJhbSBpbmRleCBDdXJyZW50IGluZGV4LlxuICAgKiBAcGFyYW0gZGF0YVJvdyBEYXRhIHJvdyBvYmplY3QgcmVmZXJlbmNlLlxuICAgKi9cbiAgcHVibGljIGRhdGFSb3dUcmFja0J5KGluZGV4OiBudW1iZXIsIGRhdGFSb3c6IERhdGFUYWJsZVJvdzxhbnk+KTogbnVtYmVyIHtcbiAgICByZXR1cm4gZGF0YVJvdy5pbmRleDtcbiAgfVxuXG4gIC8qKlxuICAgKiBPZGQgcm93IHN0YXR1czsgVHJ1ZSBpZiByb3cgaW5kZXggaXMgYSBvZGQgbnVtYmVyLlxuICAgKiBAcGFyYW0gcm93IERhdGEgcm93IG9iamVjdC5cbiAgICogQHJldHVybiBUcnVlIGlmIG9kZCByb3cuXG4gICAqL1xuICBwdWJsaWMgaXNPZGRSb3cocm93OiBEYXRhVGFibGVSb3c8YW55Pik6IGJvb2xlYW4ge1xuICAgIHJldHVybiByb3cuaW5kZXggJSAyID09PSAwO1xuICB9XG5cbiAgLyoqXG4gICAqIEV2ZW4gcm93IHN0YXR1czsgVHJ1ZSBpZiByb3cgaW5kZXggaXMgYSBldmVuIG51bWJlci5cbiAgICogQHBhcmFtIHJvdyBEYXRhIHJvdyBvYmplY3QuXG4gICAqIEByZXR1cm4gVHJ1ZSBpZiBldmVuIHJvdy5cbiAgICovXG4gIHB1YmxpYyBpc0V2ZW5Sb3cocm93OiBEYXRhVGFibGVSb3c8YW55Pik6IGJvb2xlYW4ge1xuICAgIHJldHVybiByb3cuaW5kZXggJSAyID09PSAxO1xuICB9XG5cbiAgLyoqXG4gICAqIE9kZCBzdWJzdGl0dXRlIHJvdyBzdGF0dXMgYnkgcm93IGluZGV4OyBUcnVlIGlmIHJvdyBpbmRleCBpcyBhbiBvZGQgc3Vic3RpdHV0ZSByb3cuXG4gICAqIEBwYXJhbSBpbmRleCBSb3cgaW5kZXguXG4gICAqIEByZXR1cm4gVHJ1ZSBpZiBvZGQgc3Vic3RpdHV0ZSByb3cuXG4gICAqL1xuICBwdWJsaWMgaXNPZGRTdWJzdGl0dXRlUm93KGluZGV4OiBudW1iZXIpOiBib29sZWFuIHtcbiAgICByZXR1cm4gKGluZGV4ICsgdGhpcy5kYXRhU3RhdGVTZXJ2aWNlLnN1YnN0aXR1dGVSb3dzLmxlbmd0aCkgJSAyID09PSAwO1xuICB9XG5cbiAgLyoqXG4gICAqIEV2ZW4gc3Vic3RpdHV0ZSByb3cgc3RhdHVzIGJ5IHJvdyBpbmRleDsgVHJ1ZSBpZiByb3cgaW5kZXggaXMgYW4gZXZlbiBzdWJzdGl0dXRlIHJvdy5cbiAgICogQHBhcmFtIGluZGV4IFJvdyBpbmRleC5cbiAgICogQHJldHVybiBUcnVlIGlmIGV2ZW4gc3Vic3RpdHV0ZSByb3cuXG4gICAqL1xuICBwdWJsaWMgaXNFdmVuU3Vic3RpdHV0ZVJvdyhpbmRleDogbnVtYmVyKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIChpbmRleCArIHRoaXMuZGF0YVN0YXRlU2VydmljZS5zdWJzdGl0dXRlUm93cy5sZW5ndGgpICUgMiA9PT0gMTtcbiAgfVxuXG4gIC8qKlxuICAgKiBPbiByb3cgZXhwYW5kIGV2ZW50IGhhbmRsZXIuXG4gICAqIEBwYXJhbSAkZXZlbnQgQ2xpY2sgZXZlbnQgYXJndW1lbnQgcmVmZXJlbmNlLlxuICAgKiBAcGFyYW0gZGF0YVJvdyBEYXRhIHJvdyBvYmplY3QuXG4gICAqL1xuICBwdWJsaWMgb25Sb3dFeHBhbmQoJGV2ZW50OiBFdmVudCwgZGF0YVJvdzogRGF0YVRhYmxlUm93PGFueT4pOiB2b2lkIHtcbiAgICBkYXRhUm93LmV4cGFuZGVkID0gIWRhdGFSb3cuZXhwYW5kZWQ7XG5cbiAgICBpZiAoIXRoaXMuY29uZmlnLnNob3dSb3dFeHBhbmRMb2FkaW5nU3Bpbm5lcikge1xuICAgICAgZGF0YVJvdy5kYXRhTG9hZGVkID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogT24gcm93IGluaXRpYWxpemUgZXZlbnQgaGFuZGxlci5cbiAgICogQHBhcmFtIGRhdGFSb3cgRGF0YSB0YWJsZSByb3cuXG4gICAqL1xuICBwdWJsaWMgb25Sb3dJbml0KGRhdGFSb3cpOiB2b2lkIHtcbiAgICB0aGlzLmV2ZW50U3RhdGVTZXJ2aWNlLnJvd0JpbmRTdHJlYW0uZW1pdChkYXRhUm93KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBPbiBjZWxsIGluaXRpYWxpemUgZXZlbnQgaGFuZGxlci5cbiAgICogQHBhcmFtIGNvbHVtbiBEYXRhIHRhYmxlIGNvbHVtbiBjb21wb25lbnQgcmVmZXJlbmNlLlxuICAgKiBAcGFyYW0gcm93IERhdGEgdGFibGUgcm93IG9iamVjdC5cbiAgICovXG4gIHB1YmxpYyBvbkNlbGxJbml0KGNvbHVtbjogRGF0YVRhYmxlQ29sdW1uQ29tcG9uZW50LCByb3c6IERhdGFUYWJsZVJvdzxhbnk+KTogdm9pZCB7XG4gICAgdGhpcy5ldmVudFN0YXRlU2VydmljZS5jZWxsQmluZFN0cmVhbS5lbWl0KHtcbiAgICAgIGNvbHVtbixcbiAgICAgIHJvd1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIENlbGwgY2xpY2tlZCBldmVudCBoYW5kbGVyLlxuICAgKiBAcGFyYW0gY29sdW1uIENvbHVtbiBkYXRhIHRhYmxlIGNvbXBvbmVudCByZWZlcmVuY2UuXG4gICAqIEBwYXJhbSByb3cgRGF0YSB0YWJsZSByb3cgcmVmZXJlbmNlLlxuICAgKiBAcGFyYW0gZXZlbnQgTW91c2UgY2xpY2sgZXZlbnQgYXJndW1lbnQgcmVmZXJlbmNlLlxuICAgKi9cbiAgcHVibGljIGNlbGxDbGlja2VkKGNvbHVtbjogRGF0YVRhYmxlQ29sdW1uQ29tcG9uZW50LCByb3c6IERhdGFUYWJsZVJvdzxhbnk+LCBldmVudDogTW91c2VFdmVudCk6IHZvaWQge1xuICAgIHRoaXMuZXZlbnRTdGF0ZVNlcnZpY2UuY2VsbENsaWNrU3RyZWFtLmVtaXQoeyByb3csIGNvbHVtbiwgZXZlbnQgfSk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHJvdyBzcGFuIGNvbGxlY3Rpb24gYnkgZGF0YSByb3cuXG4gICAqIEBwYXJhbSByb3cgRGF0YSByb3cgcmVmZXJlbmNlLlxuICAgKiBAcmV0dXJuIER1bW15IHJvdyBzcGFuIGNvbGxlY3Rpb24uXG4gICAqL1xuICBwdWJsaWMgZ2V0Um93U3BhbkNvbGxlY3Rpb24ocm93OiBEYXRhVGFibGVSb3c8YW55Pik6IGFueVtdIHtcbiAgICByZXR1cm4gQXJyYXkuZnJvbSh7XG4gICAgICBsZW5ndGg6IHRoaXMuZGF0YVN0YXRlU2VydmljZS5vbkR5bmFtaWNSb3dTcGFuRXh0cmFjdChyb3cpXG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRvdGFsIGNvbHVtbiBjb3VudCB1c2VkIGZvciBzdWJzdGl0dXRlIHJvdyBnZW5lcmF0aW9uLlxuICAgKiBAcmV0dXJuIE51bWJlciBvZiBjb2x1bW5zLlxuICAgKi9cbiAgcHVibGljIGdldCB0b3RhbENvbHVtbkNvdW50KCk6IG51bWJlciB7XG4gICAgbGV0IGNvdW50ID0gMDtcbiAgICBjb3VudCArPSB0aGlzLmNvbmZpZy5zaG93SW5kZXhDb2x1bW4gPyAxIDogMDtcbiAgICBjb3VudCArPSB0aGlzLmNvbmZpZy5zaG93Um93U2VsZWN0Q2hlY2tib3hDb2x1bW4gPyAxIDogMDtcbiAgICBjb3VudCArPSB0aGlzLmNvbmZpZy5leHBhbmRhYmxlUm93cyA/IDEgOiAwO1xuICAgIHRoaXMuY29sdW1ucy5mb3JFYWNoKGNvbHVtbiA9PiB7XG4gICAgICBjb3VudCArPSBjb2x1bW4udmlzaWJsZSA/IDEgOiAwO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIGNvdW50O1xuICB9XG5cbiAgLyoqXG4gICAqIE9uIHJvdyBzZWxlY3QgY2xpY2sgZXZlbnQgaGFuZGxlci5cbiAgICogQHBhcmFtIHJvdyBEYXRhIHJvdyByZWZlcmVuY2UuXG4gICAqIEBwYXJhbSBldmVudCBSb3cgY2xpY2sgZXZlbnQuXG4gICAqL1xuICBwdWJsaWMgb25Sb3dTZWxlY3RDbGljayhyb3c6IERhdGFUYWJsZVJvdzxhbnk+LCBldmVudDogRXZlbnQpOiB2b2lkIHtcbiAgICAvLyBQcmV2ZW50IHNpbmdsZSBtb2RlIGNoZWNrYm94IGdldHRpbmcgdW5jaGVja2VkIG9uIHRhcHBpbmcgYWxyZWFkeSBzZWxlY3RlZC5cbiAgICBpZiAodGhpcy5jb25maWcuc2VsZWN0TW9kZSA9PT0gJ3NpbmdsZScpIHtcbiAgICAgIGNvbnN0IGlkID0gZ2V0KHJvdy5pdGVtLCB0aGlzLmNvbmZpZy5zZWxlY3RUcmFja0J5KTtcbiAgICAgIGNvbnN0IHByZXZpb3VzU2VsZWN0aW9uID0gdGhpcy5kYXRhU3RhdGVTZXJ2aWNlLnNlbGVjdGVkUm93O1xuXG4gICAgICBpZiAocHJldmlvdXNTZWxlY3Rpb24gPT09IGlkKSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHJvdy5zZWxlY3RlZCA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIE9uIHJvdyBzZWxlY3Rpb24gY2hhbmdlIGV2ZW50IGhhbmRsZXIuXG4gICAqIEBwYXJhbSByb3cgRGF0YSByb3cgcmVmZXJlbmNlLlxuICAgKi9cbiAgcHVibGljIG9uUm93U2VsZWN0Q2hhbmdlKHJvdzogRGF0YVRhYmxlUm93PGFueT4pOiB2b2lkIHtcbiAgICBjb25zdCBpZCA9IGdldChyb3cuaXRlbSwgdGhpcy5jb25maWcuc2VsZWN0VHJhY2tCeSk7XG5cbiAgICBzd2l0Y2ggKHRoaXMuY29uZmlnLnNlbGVjdE1vZGUpIHtcbiAgICAgIGNhc2UgJ211bHRpJzoge1xuICAgICAgICBjb25zdCBpbmRleCA9IHRoaXMuZGF0YVN0YXRlU2VydmljZS5zZWxlY3RlZFJvd3MuaW5kZXhPZihpZCk7XG4gICAgICAgIGlmIChyb3cuc2VsZWN0ZWQgJiYgaW5kZXggPCAwKSB7XG4gICAgICAgICAgdGhpcy5kYXRhU3RhdGVTZXJ2aWNlLnNlbGVjdGVkUm93cy5wdXNoKGlkKTtcbiAgICAgICAgfSBlbHNlIGlmICghcm93LnNlbGVjdGVkICYmIGluZGV4ID4gLTEpIHtcbiAgICAgICAgICB0aGlzLmRhdGFTdGF0ZVNlcnZpY2Uuc2VsZWN0ZWRSb3dzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBwcmV2aW91c0FsbFJvd1NlbGVjdGVkU3RhdGUgPSB0aGlzLmRhdGFTdGF0ZVNlcnZpY2UuYWxsUm93U2VsZWN0ZWQ7XG4gICAgICAgIHRoaXMuZGF0YVN0YXRlU2VydmljZS5hbGxSb3dTZWxlY3RlZCA9IHRoaXMuZGF0YVN0YXRlU2VydmljZS5kYXRhUm93cy5ldmVyeSgoZGF0YVJvdzogRGF0YVRhYmxlUm93PGFueT4pID0+IHtcbiAgICAgICAgICByZXR1cm4gZGF0YVJvdy5zZWxlY3RlZDtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5ldmVudFN0YXRlU2VydmljZS5yb3dTZWxlY3RDaGFuZ2VTdHJlYW0uZW1pdCh0aGlzLmRhdGFTdGF0ZVNlcnZpY2Uuc2VsZWN0ZWRSb3dzKTtcblxuICAgICAgICBpZiAocHJldmlvdXNBbGxSb3dTZWxlY3RlZFN0YXRlICE9PSB0aGlzLmRhdGFTdGF0ZVNlcnZpY2UuYWxsUm93U2VsZWN0ZWQpIHtcbiAgICAgICAgICB0aGlzLmV2ZW50U3RhdGVTZXJ2aWNlLmFsbFJvd1NlbGVjdENoYW5nZVN0cmVhbS5lbWl0KHRoaXMuZGF0YVN0YXRlU2VydmljZS5hbGxSb3dTZWxlY3RlZCk7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlICdzaW5nbGVfdG9nZ2xlJzoge1xuICAgICAgICBpZiAocm93LnNlbGVjdGVkKSB7XG4gICAgICAgICAgdGhpcy5kYXRhU3RhdGVTZXJ2aWNlLnNlbGVjdGVkUm93ID0gaWQ7XG5cbiAgICAgICAgICAvLyBkZXNlbGVjdCBhbGwgb3RoZXIgcm93IG90aGVyIHJvd3NcbiAgICAgICAgICB0aGlzLmRhdGFTdGF0ZVNlcnZpY2UuZGF0YVJvd3MuZm9yRWFjaCgoZGF0YVJvdzogRGF0YVRhYmxlUm93PGFueT4pID0+IHtcbiAgICAgICAgICAgIGlmIChkYXRhUm93ICE9PSByb3cpIHtcbiAgICAgICAgICAgICAgZGF0YVJvdy5zZWxlY3RlZCA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuZGF0YVN0YXRlU2VydmljZS5zZWxlY3RlZFJvdyA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuZXZlbnRTdGF0ZVNlcnZpY2Uucm93U2VsZWN0Q2hhbmdlU3RyZWFtLmVtaXQodGhpcy5kYXRhU3RhdGVTZXJ2aWNlLnNlbGVjdGVkUm93KTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlICdzaW5nbGUnOiB7XG4gICAgICAgIGNvbnN0IHByZXZpb3VzU2VsZWN0aW9uID0gdGhpcy5kYXRhU3RhdGVTZXJ2aWNlLnNlbGVjdGVkUm93O1xuICAgICAgICB0aGlzLmRhdGFTdGF0ZVNlcnZpY2Uuc2VsZWN0ZWRSb3cgPSBpZDtcbiAgICAgICAgcm93LnNlbGVjdGVkID0gdHJ1ZTtcblxuICAgICAgICAvLyBkZXNlbGVjdCBhbGwgb3RoZXIgcm93IG90aGVyIHJvd3NcbiAgICAgICAgdGhpcy5kYXRhU3RhdGVTZXJ2aWNlLmRhdGFSb3dzLmZvckVhY2goKGRhdGFSb3c6IERhdGFUYWJsZVJvdzxhbnk+KSA9PiB7XG4gICAgICAgICAgaWYgKGRhdGFSb3cgIT09IHJvdykge1xuICAgICAgICAgICAgZGF0YVJvdy5zZWxlY3RlZCA9IGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKHByZXZpb3VzU2VsZWN0aW9uICE9PSBpZCkge1xuICAgICAgICAgIHRoaXMuZXZlbnRTdGF0ZVNlcnZpY2Uucm93U2VsZWN0Q2hhbmdlU3RyZWFtLmVtaXQodGhpcy5kYXRhU3RhdGVTZXJ2aWNlLnNlbGVjdGVkUm93KTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUm93IGNsaWNrZWQgZXZlbnQgaGFuZGxlci5cbiAgICogQHBhcmFtIHJvdyBEYXRhIHJvdyBvYmplY3QuXG4gICAqIEBwYXJhbSBldmVudCBNb3VzZSBjbGljayBldmVudCBhcmd1bWVudCBvYmplY3QuXG4gICAqL1xuICBwdWJsaWMgcm93Q2xpY2tlZChyb3c6IERhdGFUYWJsZVJvdzxhbnk+LCBldmVudDogTW91c2VFdmVudCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmNvbmZpZy5zZWxlY3RPblJvd0NsaWNrIHx8ICh0aGlzLmNvbmZpZy5leHBhbmRhYmxlUm93cyAmJiB0aGlzLmNvbmZpZy5leHBhbmRPblJvd0NsaWNrKSkge1xuICAgICAgY29uc3QgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0IGFzIEhUTUxFbGVtZW50O1xuICAgICAgaWYgKHRhcmdldCAmJiB0YXJnZXQuY2xhc3NMaXN0ICYmIHRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ25nLWlnbm9yZS1wcm9wYWdhdGlvbicpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuY29uZmlnLnJvd1NlbGVjdGFibGUgJiYgdGhpcy5jb25maWcuc2VsZWN0T25Sb3dDbGljaykge1xuICAgICAgICByb3cuc2VsZWN0ZWQgPSAhcm93LnNlbGVjdGVkO1xuICAgICAgICB0aGlzLm9uUm93U2VsZWN0Q2hhbmdlKHJvdyk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLmNvbmZpZy5leHBhbmRPblJvd0NsaWNrKSB7XG4gICAgICAgIHJvdy5leHBhbmRlZCA9ICFyb3cuZXhwYW5kZWQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5ldmVudFN0YXRlU2VydmljZS5yb3dDbGlja1N0cmVhbS5lbWl0KHsgcm93LCBldmVudCB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSb3cgZG91YmxlIGNsaWNrZWQgZXZlbnQgaGFuZGxlci5cbiAgICogQHBhcmFtIHJvdyBEYXRhIHJvdyBvYmplY3QuXG4gICAqIEBwYXJhbSBldmVudCBFdmVudCBNb3VzZSBjbGljayBldmVudCBhcmd1bWVudCBvYmplY3QuXG4gICAqL1xuICBwdWJsaWMgcm93RG91YmxlQ2xpY2tlZChyb3c6IERhdGFUYWJsZVJvdzxhbnk+LCBldmVudDogTW91c2VFdmVudCk6IHZvaWQge1xuICAgIHRoaXMuZXZlbnRTdGF0ZVNlcnZpY2Uucm93RG91YmxlQ2xpY2tTdHJlYW0uZW1pdCh7IHJvdywgZXZlbnQgfSk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHN1YnN0aXR1dGUgcm93IGF2YWlsYWJpbGl0eSBzdGF0dXMuXG4gICAqIEByZXR1cm4gVHJ1ZSBpZiBzdWJzdGl0dXRlIHJvd3MgYXJlIGF2YWlsYWJsZS5cbiAgICovXG4gIHB1YmxpYyBnZXQgaGFzU3Vic3RpdHV0ZVJvd3MoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuICF0aGlzLmNvbmZpZy5sb2FkT25TY3JvbGxcbiAgICAgICYmIHRoaXMuY29uZmlnLnNob3dTdWJzdGl0dXRlUm93c1xuICAgICAgJiYgdGhpcy5kYXRhU3RhdGVTZXJ2aWNlLmRhdGFSb3dzLmxlbmd0aFxuICAgICAgJiYgIXRoaXMuZGF0YVN0YXRlU2VydmljZS5zaG93Tm9EYXRhT3ZlcmxheTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgY2VsbCB2YWx1ZSBieSBkYXRhIGZpZWxkLlxuICAgKiBAcGFyYW0gcm93IERhdGEgcm93IHJlZmVyZW5jZS5cbiAgICogQHBhcmFtIGNvbHVtbiBEYXRhIHRhYmxlIGNvbHVtbiBjb21wb25lbnQgcmVmZXJlbmNlLlxuICAgKi9cbiAgcHVibGljIGdldEZpZWxkVmFsdWUocm93OiBEYXRhVGFibGVSb3c8YW55PiwgY29sdW1uOiBEYXRhVGFibGVDb2x1bW5Db21wb25lbnQpIHtcbiAgICByZXR1cm4gZ2V0KHJvdy5pdGVtLCBjb2x1bW4uZmllbGQpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCByb3cgc2VsZWN0IGNoZWNrYm94IGRpc3BsYXkgc3RhdHVzLlxuICAgKiBAcmV0dXJuIFRydWUgaWYgcm93IHNlbGVjdG9yIGNoZWNrYm94IHNob3VsZCBiZSBkaXNwbGF5ZWQuXG4gICAqL1xuICBwdWJsaWMgZ2V0IHNob3dSb3dTZWxlY3RDaGVja2JveCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5jb25maWcucm93U2VsZWN0YWJsZSAmJiB0aGlzLmNvbmZpZy5zaG93Um93U2VsZWN0Q2hlY2tib3g7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHJvdyBleHBlbmQgdmlldyBsb2FkaW5nIHN0YXR1cy4gVXNlZCB0byBkaXNwbGF5IGxvYWRpbmcgc3Bpbm5lciBvbiBleHBhbmQgY29sdW1uIHdoaWxlIGRhdGEgZmV0Y2hpbmcuXG4gICAqIEBwYXJhbSByb3cgRGF0YSByb3cgb2JqZWN0IHJlZmVyZW5jZS5cbiAgICovXG4gIHB1YmxpYyBpc1Jvd0V4cGFuZGVyTG9hZGluZyhyb3c6IERhdGFUYWJsZVJvdzxhbnk+KTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHJvdy5leHBhbmRlZCAmJiAhcm93LmRhdGFMb2FkZWQ7XG4gIH1cbn1cbiJdfQ==