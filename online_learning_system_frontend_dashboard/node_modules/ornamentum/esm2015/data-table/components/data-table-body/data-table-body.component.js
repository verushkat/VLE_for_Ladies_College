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
export class DataTableBodyComponent {
    /**
     * @param {?} config
     * @param {?} dataStateService
     * @param {?} eventStateService
     */
    constructor(config, dataStateService, eventStateService) {
        this.config = config;
        this.dataStateService = dataStateService;
        this.eventStateService = eventStateService;
    }
    /**
     * Unique data row tracking callback.
     * @param {?} index Current index.
     * @param {?} dataRow Data row object reference.
     * @return {?}
     */
    dataRowTrackBy(index, dataRow) {
        return dataRow.index;
    }
    /**
     * Odd row status; True if row index is a odd number.
     * @param {?} row Data row object.
     * @return {?} True if odd row.
     */
    isOddRow(row) {
        return row.index % 2 === 0;
    }
    /**
     * Even row status; True if row index is a even number.
     * @param {?} row Data row object.
     * @return {?} True if even row.
     */
    isEvenRow(row) {
        return row.index % 2 === 1;
    }
    /**
     * Odd substitute row status by row index; True if row index is an odd substitute row.
     * @param {?} index Row index.
     * @return {?} True if odd substitute row.
     */
    isOddSubstituteRow(index) {
        return (index + this.dataStateService.substituteRows.length) % 2 === 0;
    }
    /**
     * Even substitute row status by row index; True if row index is an even substitute row.
     * @param {?} index Row index.
     * @return {?} True if even substitute row.
     */
    isEvenSubstituteRow(index) {
        return (index + this.dataStateService.substituteRows.length) % 2 === 1;
    }
    /**
     * On row expand event handler.
     * @param {?} $event Click event argument reference.
     * @param {?} dataRow Data row object.
     * @return {?}
     */
    onRowExpand($event, dataRow) {
        dataRow.expanded = !dataRow.expanded;
        if (!this.config.showRowExpandLoadingSpinner) {
            dataRow.dataLoaded = true;
        }
    }
    /**
     * On row initialize event handler.
     * @param {?} dataRow Data table row.
     * @return {?}
     */
    onRowInit(dataRow) {
        this.eventStateService.rowBindStream.emit(dataRow);
    }
    /**
     * On cell initialize event handler.
     * @param {?} column Data table column component reference.
     * @param {?} row Data table row object.
     * @return {?}
     */
    onCellInit(column, row) {
        this.eventStateService.cellBindStream.emit({
            column,
            row
        });
    }
    /**
     * Cell clicked event handler.
     * @param {?} column Column data table component reference.
     * @param {?} row Data table row reference.
     * @param {?} event Mouse click event argument reference.
     * @return {?}
     */
    cellClicked(column, row, event) {
        this.eventStateService.cellClickStream.emit({ row, column, event });
    }
    /**
     * Get row span collection by data row.
     * @param {?} row Data row reference.
     * @return {?} Dummy row span collection.
     */
    getRowSpanCollection(row) {
        return Array.from({
            length: this.dataStateService.onDynamicRowSpanExtract(row)
        });
    }
    /**
     * Get total column count used for substitute row generation.
     * @return {?} Number of columns.
     */
    get totalColumnCount() {
        /** @type {?} */
        let count = 0;
        count += this.config.showIndexColumn ? 1 : 0;
        count += this.config.showRowSelectCheckboxColumn ? 1 : 0;
        count += this.config.expandableRows ? 1 : 0;
        this.columns.forEach((/**
         * @param {?} column
         * @return {?}
         */
        column => {
            count += column.visible ? 1 : 0;
        }));
        return count;
    }
    /**
     * On row select click event handler.
     * @param {?} row Data row reference.
     * @param {?} event Row click event.
     * @return {?}
     */
    onRowSelectClick(row, event) {
        // Prevent single mode checkbox getting unchecked on tapping already selected.
        if (this.config.selectMode === 'single') {
            /** @type {?} */
            const id = get(row.item, this.config.selectTrackBy);
            /** @type {?} */
            const previousSelection = this.dataStateService.selectedRow;
            if (previousSelection === id) {
                event.preventDefault();
                row.selected = true;
            }
        }
    }
    /**
     * On row selection change event handler.
     * @param {?} row Data row reference.
     * @return {?}
     */
    onRowSelectChange(row) {
        /** @type {?} */
        const id = get(row.item, this.config.selectTrackBy);
        switch (this.config.selectMode) {
            case 'multi': {
                /** @type {?} */
                const index = this.dataStateService.selectedRows.indexOf(id);
                if (row.selected && index < 0) {
                    this.dataStateService.selectedRows.push(id);
                }
                else if (!row.selected && index > -1) {
                    this.dataStateService.selectedRows.splice(index, 1);
                }
                /** @type {?} */
                const previousAllRowSelectedState = this.dataStateService.allRowSelected;
                this.dataStateService.allRowSelected = this.dataStateService.dataRows.every((/**
                 * @param {?} dataRow
                 * @return {?}
                 */
                (dataRow) => {
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
                    (dataRow) => {
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
                const previousSelection = this.dataStateService.selectedRow;
                this.dataStateService.selectedRow = id;
                row.selected = true;
                // deselect all other row other rows
                this.dataStateService.dataRows.forEach((/**
                 * @param {?} dataRow
                 * @return {?}
                 */
                (dataRow) => {
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
    }
    /**
     * Row clicked event handler.
     * @param {?} row Data row object.
     * @param {?} event Mouse click event argument object.
     * @return {?}
     */
    rowClicked(row, event) {
        if (this.config.selectOnRowClick || (this.config.expandableRows && this.config.expandOnRowClick)) {
            /** @type {?} */
            const target = (/** @type {?} */ (event.target));
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
        this.eventStateService.rowClickStream.emit({ row, event });
    }
    /**
     * Row double clicked event handler.
     * @param {?} row Data row object.
     * @param {?} event Event Mouse click event argument object.
     * @return {?}
     */
    rowDoubleClicked(row, event) {
        this.eventStateService.rowDoubleClickStream.emit({ row, event });
    }
    /**
     * Get substitute row availability status.
     * @return {?} True if substitute rows are available.
     */
    get hasSubstituteRows() {
        return !this.config.loadOnScroll
            && this.config.showSubstituteRows
            && this.dataStateService.dataRows.length
            && !this.dataStateService.showNoDataOverlay;
    }
    /**
     * Get cell value by data field.
     * @param {?} row Data row reference.
     * @param {?} column Data table column component reference.
     * @return {?}
     */
    getFieldValue(row, column) {
        return get(row.item, column.field);
    }
    /**
     * Get row select checkbox display status.
     * @return {?} True if row selector checkbox should be displayed.
     */
    get showRowSelectCheckbox() {
        return this.config.rowSelectable && this.config.showRowSelectCheckbox;
    }
    /**
     * Get row expend view loading status. Used to display loading spinner on expand column while data fetching.
     * @param {?} row Data row object reference.
     * @return {?}
     */
    isRowExpanderLoading(row) {
        return row.expanded && !row.dataLoaded;
    }
}
DataTableBodyComponent.decorators = [
    { type: Component, args: [{
                exportAs: 'ngDataTableBody',
                // tslint:disable-next-line
                selector: '[ngDataTableBody]',
                template: "<ng-container *ngFor=\"let row of dataStateService.dataRows; trackBy: dataRowTrackBy; let i = index;\">\n  <ng-container *ngFor=\"let ignored of getRowSpanCollection(row); let rowSpanIndex = index; let rowSpanCount = count\">\n    <tr\n      class=\"ng-data-table-row\"\n      (ngInit)=\"onRowInit(row)\"\n      [attr.title]=\"row.tooltip\"\n      [class.row-odd]=\"isOddRow(row)\"\n      [class.row-even]=\"isEvenRow(row)\"\n      [class.selected]=\"row.selected\"\n      [class.clickable]=\"config.selectOnRowClick\"\n      [class.disabled]=\"row.disabled\"\n      [ngClass]=\"row.cssClass\"\n      (dblclick)=\"rowDoubleClicked(row, $event)\"\n      (click)=\"rowClicked(row, $event)\"\n    >\n      <td\n        class=\"ng-data-table-row-expand-button ng-ignore-propagation\"\n        [style.background-color]=\"row.color\"\n        *ngIf=\"config.expandableRows && !rowSpanIndex\"\n        (click)=\"onRowExpand($event, row)\"\n        [attr.rowspan]=\"rowSpanCount\"\n      >\n        <div [hidden]=\"config.showRowExpandLoadingSpinner && isRowExpanderLoading(row)\">\n          <span class=\"ng-data-table-expander-collapsed-icon ng-ignore-propagation\" *ngIf=\"!row.expanded\"></span>\n          <span class=\"ng-data-table-expander-expanded-icon ng-ignore-propagation\" *ngIf=\"row.expanded\"></span>\n        </div>\n        <ng-data-table-loading-spinner\n          *ngIf=\"config.showRowExpandLoadingSpinner\"\n          [loadingSpinnerTemplate]=\"rowExpandLoadingSpinnerTemplate\"\n          [isLoading]=\"isRowExpanderLoading(row)\"\n          [showOverlay]=\"false\"\n        >\n        </ng-data-table-loading-spinner>\n      </td>\n      <td\n        class=\"index-column\"\n        [style.background-color]=\"row.color\"\n        *ngIf=\"config.showIndexColumn && !rowSpanIndex\"\n        [textContent]=\"row.index\"\n        [attr.rowspan]=\"rowSpanCount\"\n      >\n      </td>\n      <td\n        class=\"ng-data-table-select-column\"\n        [style.background-color]=\"row.color\"\n        *ngIf=\"showRowSelectCheckbox && !rowSpanIndex\"\n        [attr.rowspan]=\"rowSpanCount\"\n      >\n        <div class=\"ng-data-table-checkbox-container ng-ignore-propagation\">\n          <input class=\"ng-data-table-checkbox-input ng-ignore-propagation\" type=\"checkbox\"\n            [id]=\"dataStateService.getUniqueId('dr', i)\"\n            [(ngModel)]=\"row.selected\"\n            (click)=\"onRowSelectClick(row, $event)\"\n            (change)=\"onRowSelectChange(row)\"\n          />\n          <label class=\"ng-ignore-propagation\" [for]=\"dataStateService.getUniqueId('dr', i)\"></label>\n        </div>\n      </td>\n      <ng-container *ngFor=\"let column of columns\">\n        <ng-container *ngIf=\"column.visible\">\n          <td\n            class=\"ng-data-table-data-column\"\n            *ngIf=\"!column.cellTemplate && !rowSpanIndex\"\n            (ngInit)=\"onCellInit(column, row)\"\n            [ngClass]=\"column.cssClass\"\n            [attr.rowspan]=\"rowSpanCount\"\n            [style.background-color]=\"column.getCellColor(row) || row.color\"\n            (click)=\"cellClicked(column, row, $event)\"\n          >\n            <span>{{ getFieldValue(row, column) }}</span>\n          </td>\n          <ng-container\n            *ngIf=\"column.cellTemplate\"\n            [ngTemplateOutlet]=\"column.cellTemplate\"\n            [ngTemplateOutletContext]=\"{ column: column, row: row, spanIndex: rowSpanIndex, rowSpan: rowSpanCount }\"\n          >\n          </ng-container>\n        </ng-container>\n      </ng-container>\n    </tr>\n  </ng-container>\n  <tr *ngIf=\"config.expandableRows\" [hidden]=\"!row.expanded\" class=\"ng-data-table-row-expansion\">\n    <td [attr.colspan]=\"totalColumnCount\">\n      <ng-container [ngTemplateOutlet]=\"rowExpandTemplate\" [ngTemplateOutletContext]=\"{ row: row }\"> </ng-container>\n    </td>\n  </tr>\n</ng-container>\n<ng-container *ngIf=\"hasSubstituteRows\">\n  <tr\n    *ngFor=\"let ignored of dataStateService.substituteRows; let index = index\"\n    [class.row-odd]=\"isOddSubstituteRow(index)\"\n    [class.row-even]=\"isEvenSubstituteRow(index)\"\n  >\n    <td *ngIf=\"config.expandableRows\">&nbsp;</td>\n    <td *ngIf=\"config.showIndexColumn\">&nbsp;</td>\n    <td *ngIf=\"showRowSelectCheckbox\">&nbsp;</td>\n    <ng-container *ngFor=\"let column of columns\">\n      <td *ngIf=\"column.visible\">&nbsp;</td>\n    </ng-container>\n  </tr>\n</ng-container>\n"
            }] }
];
/** @nocollapse */
DataTableBodyComponent.ctorParameters = () => [
    { type: DataTableConfigService },
    { type: DataTableDataStateService },
    { type: DataTableEventStateService }
];
DataTableBodyComponent.propDecorators = {
    columns: [{ type: Input }],
    rowExpandTemplate: [{ type: Input }],
    rowExpandLoadingSpinnerTemplate: [{ type: Input }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS10YWJsZS1ib2R5LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL29ybmFtZW50dW0vIiwic291cmNlcyI6WyJkYXRhLXRhYmxlL2NvbXBvbmVudHMvZGF0YS10YWJsZS1ib2R5L2RhdGEtdGFibGUtYm9keS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLFdBQVcsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQU05RCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUNsRixPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSw4Q0FBOEMsQ0FBQztBQUN6RixPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUVyRixPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0RBQWdELENBQUM7Ozs7QUFXckUsTUFBTSxPQUFPLHNCQUFzQjs7Ozs7O0lBVWpDLFlBQ1MsTUFBOEIsRUFDOUIsZ0JBQTJDLEVBQzFDLGlCQUE2QztRQUY5QyxXQUFNLEdBQU4sTUFBTSxDQUF3QjtRQUM5QixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQTJCO1FBQzFDLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBNEI7SUFDcEQsQ0FBQzs7Ozs7OztJQU9HLGNBQWMsQ0FBQyxLQUFhLEVBQUUsT0FBMEI7UUFDN0QsT0FBTyxPQUFPLENBQUMsS0FBSyxDQUFDO0lBQ3ZCLENBQUM7Ozs7OztJQU9NLFFBQVEsQ0FBQyxHQUFzQjtRQUNwQyxPQUFPLEdBQUcsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM3QixDQUFDOzs7Ozs7SUFPTSxTQUFTLENBQUMsR0FBc0I7UUFDckMsT0FBTyxHQUFHLENBQUMsS0FBSyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDN0IsQ0FBQzs7Ozs7O0lBT00sa0JBQWtCLENBQUMsS0FBYTtRQUNyQyxPQUFPLENB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QztJQUNuRSxDQUFDOzs7OztJQU1ELElBQVcsaUJBQWlCO1FBQzFCLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVk7ZUFDM0IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxrQkFBa0I7ZUFDOUIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxNQUFNO2VBQ3JDLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGlCQUFpQixDQUFDO0lBQ2hELENBQUM7Ozs7Ozs7SUFPTSxhQUFhLENBQUMsR0FBc0IsRUFBRSxNQUFnQztRQUMzRSxPQUFPLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNyQyxDQUFDOzs7OztJQU1ELElBQVcscUJBQXFCO1FBQzlCLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxxQkFBcUIsQ0FBQztJQUN4RSxDQUFDOzs7Ozs7SUFNTSxvQkFBb0IsQ0FBQyxHQUFzQjtRQUNoRCxPQUFPLEdBQUcsQ0FBQyxRQUFRLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDO0lBQ3pDLENBQUM7OztZQWhTRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGlCQUFpQjs7Z0JBRTNCLFFBQVEsRUFBRSxtQkFBbUI7Z0JBQzdCLDAzSUFBK0M7YUFDaEQ7Ozs7WUFkUSxzQkFBc0I7WUFDdEIseUJBQXlCO1lBQ3pCLDBCQUEwQjs7O3NCQWNoQyxLQUFLO2dDQUdMLEtBQUs7OENBR0wsS0FBSzs7OztJQU5OLHlDQUMyQzs7SUFFM0MsbURBQzJDOztJQUUzQyxpRUFDeUQ7O0lBR3ZELHdDQUFxQzs7SUFDckMsa0RBQWtEOzs7OztJQUNsRCxtREFBcUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBUZW1wbGF0ZVJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBEYXRhVGFibGVSb3cgfSBmcm9tICcuLi8uLi9tb2RlbHMvZGF0YS10YWJsZS1yb3cubW9kZWwnO1xuXG5pbXBvcnQgeyBEYXRhVGFibGVDb2x1bW5Db21wb25lbnQgfSBmcm9tICcuLi9kYXRhLXRhYmxlLWNvbHVtbi9kYXRhLXRhYmxlLWNvbHVtbi5jb21wb25lbnQnO1xuXG5pbXBvcnQgeyBEYXRhVGFibGVDb25maWdTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvZGF0YS10YWJsZS1jb25maWcuc2VydmljZSc7XG5pbXBvcnQgeyBEYXRhVGFibGVEYXRhU3RhdGVTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvZGF0YS10YWJsZS1kYXRhLXN0YXRlLnNlcnZpY2UnO1xuaW1wb3J0IHsgRGF0YVRhYmxlRXZlbnRTdGF0ZVNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9kYXRhLXRhYmxlLWV2ZW50LnNlcnZpY2UnO1xuXG5pbXBvcnQgeyBnZXQgfSBmcm9tICcuLi8uLi8uLi91dGlsaXR5L3NlcnZpY2VzL29iamVjdC11dGlsaXR5LmNsYXNzJztcblxuLyoqXG4gKiBEYXRhIHRhYmxlIGJvZHkgY29tcG9uZW50LiBEYXRhIHRhYmxlIGJvZHkgdGFibGUgZGVmaW5pdGlvbiByZW5kZXJpbmcgaXMgaGFuZGxlZCBieSB0aGlzIGNvbXBvbmVudC5cbiAqL1xuQENvbXBvbmVudCh7XG4gIGV4cG9ydEFzOiAnbmdEYXRhVGFibGVCb2R5JyxcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG4gIHNlbGVjdG9yOiAnW25nRGF0YVRhYmxlQm9keV0nLFxuICB0ZW1wbGF0ZVVybDogJy4vZGF0YS10YWJsZS1ib2R5LmNvbXBvbmVudC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBEYXRhVGFibGVCb2R5Q29tcG9uZW50IHtcbiAgQElucHV0KClcbiAgcHVibGljIGNvbHVtbnM6IERhdGFUYWJsZUNvbHVtbkNvbXBvbmVudFtdO1xuXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyByb3dFeHBhbmRUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcblxuICBASW5wdXQoKVxuICBwdWJsaWMgcm93RXhwYW5kTG9hZGluZ1NwaW5uZXJUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgY29uZmlnOiBEYXRhVGFibGVDb25maWdTZXJ2aWNlLFxuICAgIHB1YmxpYyBkYXRhU3RhdGVTZXJ2aWNlOiBEYXRhVGFibGVEYXRhU3RhdGVTZXJ2aWNlLFxuICAgIHByaXZhdGUgZXZlbnRTdGF0ZVNlcnZpY2U6IERhdGFUYWJsZUV2ZW50U3RhdGVTZXJ2aWNlXG4gICkge31cblxuICAvKipcbiAgICogVW5pcXVlIGRhdGEgcm93IHRyYWNraW5nIGNhbGxiYWNrLlxuICAgKiBAcGFyYW0gaW5kZXggQ3VycmVudCBpbmRleC5cbiAgICogQHBhcmFtIGRhdGFSb3cgRGF0YSByb3cgb2JqZWN0IHJlZmVyZW5jZS5cbiAgICovXG4gIHB1YmxpYyBkYXRhUm93VHJhY2tCeShpbmRleDogbnVtYmVyLCBkYXRhUm93OiBEYXRhVGFibGVSb3c8YW55Pik6IG51bWJlciB7XG4gICAgcmV0dXJuIGRhdGFSb3cuaW5kZXg7XG4gIH1cblxuICAvKipcbiAgICogT2RkIHJvdyBzdGF0dXM7IFRydWUgaWYgcm93IGluZGV4IGlzIGEgb2RkIG51bWJlci5cbiAgICogQHBhcmFtIHJvdyBEYXRhIHJvdyBvYmplY3QuXG4gICAqIEByZXR1cm4gVHJ1ZSBpZiBvZGQgcm93LlxuICAgKi9cbiAgcHVibGljIGlzT2RkUm93KHJvdzogRGF0YVRhYmxlUm93PGFueT4pOiBib29sZWFuIHtcbiAgICByZXR1cm4gcm93LmluZGV4ICUgMiA9PT0gMDtcbiAgfVxuXG4gIC8qKlxuICAgKiBFdmVuIHJvdyBzdGF0dXM7IFRydWUgaWYgcm93IGluZGV4IGlzIGEgZXZlbiBudW1iZXIuXG4gICAqIEBwYXJhbSByb3cgRGF0YSByb3cgb2JqZWN0LlxuICAgKiBAcmV0dXJuIFRydWUgaWYgZXZlbiByb3cuXG4gICAqL1xuICBwdWJsaWMgaXNFdmVuUm93KHJvdzogRGF0YVRhYmxlUm93PGFueT4pOiBib29sZWFuIHtcbiAgICByZXR1cm4gcm93LmluZGV4ICUgMiA9PT0gMTtcbiAgfVxuXG4gIC8qKlxuICAgKiBPZGQgc3Vic3RpdHV0ZSByb3cgc3RhdHVzIGJ5IHJvdyBpbmRleDsgVHJ1ZSBpZiByb3cgaW5kZXggaXMgYW4gb2RkIHN1YnN0aXR1dGUgcm93LlxuICAgKiBAcGFyYW0gaW5kZXggUm93IGluZGV4LlxuICAgKiBAcmV0dXJuIFRydWUgaWYgb2RkIHN1YnN0aXR1dGUgcm93LlxuICAgKi9cbiAgcHVibGljIGlzT2RkU3Vic3RpdHV0ZVJvdyhpbmRleDogbnVtYmVyKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIChpbmRleCArIHRoaXMuZGF0YVN0YXRlU2VydmljZS5zdWJzdGl0dXRlUm93cy5sZW5ndGgpICUgMiA9PT0gMDtcbiAgfVxuXG4gIC8qKlxuICAgKiBFdmVuIHN1YnN0aXR1dGUgcm93IHN0YXR1cyBieSByb3cgaW5kZXg7IFRydWUgaWYgcm93IGluZGV4IGlzIGFuIGV2ZW4gc3Vic3RpdHV0ZSByb3cuXG4gICAqIEBwYXJhbSBpbmRleCBSb3cgaW5kZXguXG4gICAqIEByZXR1cm4gVHJ1ZSBpZiBldmVuIHN1YnN0aXR1dGUgcm93LlxuICAgKi9cbiAgcHVibGljIGlzRXZlblN1YnN0aXR1dGVSb3coaW5kZXg6IG51bWJlcik6IGJvb2xlYW4ge1xuICAgIHJldHVybiAoaW5kZXggKyB0aGlzLmRhdGFTdGF0ZVNlcnZpY2Uuc3Vic3RpdHV0ZVJvd3MubGVuZ3RoKSAlIDIgPT09IDE7XG4gIH1cblxuICAvKipcbiAgICogT24gcm93IGV4cGFuZCBldmVudCBoYW5kbGVyLlxuICAgKiBAcGFyYW0gJGV2ZW50IENsaWNrIGV2ZW50IGFyZ3VtZW50IHJlZmVyZW5jZS5cbiAgICogQHBhcmFtIGRhdGFSb3cgRGF0YSByb3cgb2JqZWN0LlxuICAgKi9cbiAgcHVibGljIG9uUm93RXhwYW5kKCRldmVudDogRXZlbnQsIGRhdGFSb3c6IERhdGFUYWJsZVJvdzxhbnk+KTogdm9pZCB7XG4gICAgZGF0YVJvdy5leHBhbmRlZCA9ICFkYXRhUm93LmV4cGFuZGVkO1xuXG4gICAgaWYgKCF0aGlzLmNvbmZpZy5zaG93Um93RXhwYW5kTG9hZGluZ1NwaW5uZXIpIHtcbiAgICAgIGRhdGFSb3cuZGF0YUxvYWRlZCA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIE9uIHJvdyBpbml0aWFsaXplIGV2ZW50IGhhbmRsZXIuXG4gICAqIEBwYXJhbSBkYXRhUm93IERhdGEgdGFibGUgcm93LlxuICAgKi9cbiAgcHVibGljIG9uUm93SW5pdChkYXRhUm93KTogdm9pZCB7XG4gICAgdGhpcy5ldmVudFN0YXRlU2VydmljZS5yb3dCaW5kU3RyZWFtLmVtaXQoZGF0YVJvdyk7XG4gIH1cblxuICAvKipcbiAgICogT24gY2VsbCBpbml0aWFsaXplIGV2ZW50IGhhbmRsZXIuXG4gICAqIEBwYXJhbSBjb2x1bW4gRGF0YSB0YWJsZSBjb2x1bW4gY29tcG9uZW50IHJlZmVyZW5jZS5cbiAgICogQHBhcmFtIHJvdyBEYXRhIHRhYmxlIHJvdyBvYmplY3QuXG4gICAqL1xuICBwdWJsaWMgb25DZWxsSW5pdChjb2x1bW46IERhdGFUYWJsZUNvbHVtbkNvbXBvbmVudCwgcm93OiBEYXRhVGFibGVSb3c8YW55Pik6IHZvaWQge1xuICAgIHRoaXMuZXZlbnRTdGF0ZVNlcnZpY2UuY2VsbEJpbmRTdHJlYW0uZW1pdCh7XG4gICAgICBjb2x1bW4sXG4gICAgICByb3dcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDZWxsIGNsaWNrZWQgZXZlbnQgaGFuZGxlci5cbiAgICogQHBhcmFtIGNvbHVtbiBDb2x1bW4gZGF0YSB0YWJsZSBjb21wb25lbnQgcmVmZXJlbmNlLlxuICAgKiBAcGFyYW0gcm93IERhdGEgdGFibGUgcm93IHJlZmVyZW5jZS5cbiAgICogQHBhcmFtIGV2ZW50IE1vdXNlIGNsaWNrIGV2ZW50IGFyZ3VtZW50IHJlZmVyZW5jZS5cbiAgICovXG4gIHB1YmxpYyBjZWxsQ2xpY2tlZChjb2x1bW46IERhdGFUYWJsZUNvbHVtbkNvbXBvbmVudCwgcm93OiBEYXRhVGFibGVSb3c8YW55PiwgZXZlbnQ6IE1vdXNlRXZlbnQpOiB2b2lkIHtcbiAgICB0aGlzLmV2ZW50U3RhdGVTZXJ2aWNlLmNlbGxDbGlja1N0cmVhbS5lbWl0KHsgcm93LCBjb2x1bW4sIGV2ZW50IH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCByb3cgc3BhbiBjb2xsZWN0aW9uIGJ5IGRhdGEgcm93LlxuICAgKiBAcGFyYW0gcm93IERhdGEgcm93IHJlZmVyZW5jZS5cbiAgICogQHJldHVybiBEdW1teSByb3cgc3BhbiBjb2xsZWN0aW9uLlxuICAgKi9cbiAgcHVibGljIGdldFJvd1NwYW5Db2xsZWN0aW9uKHJvdzogRGF0YVRhYmxlUm93PGFueT4pOiBhbnlbXSB7XG4gICAgcmV0dXJuIEFycmF5LmZyb20oe1xuICAgICAgbGVuZ3RoOiB0aGlzLmRhdGFTdGF0ZVNlcnZpY2Uub25EeW5hbWljUm93U3BhbkV4dHJhY3Qocm93KVxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0b3RhbCBjb2x1bW4gY291bnQgdXNlZCBmb3Igc3Vic3RpdHV0ZSByb3cgZ2VuZXJhdGlvbi5cbiAgICogQHJldHVybiBOdW1iZXIgb2YgY29sdW1ucy5cbiAgICovXG4gIHB1YmxpYyBnZXQgdG90YWxDb2x1bW5Db3VudCgpOiBudW1iZXIge1xuICAgIGxldCBjb3VudCA9IDA7XG4gICAgY291bnQgKz0gdGhpcy5jb25maWcuc2hvd0luZGV4Q29sdW1uID8gMSA6IDA7XG4gICAgY291bnQgKz0gdGhpcy5jb25maWcuc2hvd1Jvd1NlbGVjdENoZWNrYm94Q29sdW1uID8gMSA6IDA7XG4gICAgY291bnQgKz0gdGhpcy5jb25maWcuZXhwYW5kYWJsZVJvd3MgPyAxIDogMDtcbiAgICB0aGlzLmNvbHVtbnMuZm9yRWFjaChjb2x1bW4gPT4ge1xuICAgICAgY291bnQgKz0gY29sdW1uLnZpc2libGUgPyAxIDogMDtcbiAgICB9KTtcblxuICAgIHJldHVybiBjb3VudDtcbiAgfVxuXG4gIC8qKlxuICAgKiBPbiByb3cgc2VsZWN0IGNsaWNrIGV2ZW50IGhhbmRsZXIuXG4gICAqIEBwYXJhbSByb3cgRGF0YSByb3cgcmVmZXJlbmNlLlxuICAgKiBAcGFyYW0gZXZlbnQgUm93IGNsaWNrIGV2ZW50LlxuICAgKi9cbiAgcHVibGljIG9uUm93U2VsZWN0Q2xpY2socm93OiBEYXRhVGFibGVSb3c8YW55PiwgZXZlbnQ6IEV2ZW50KTogdm9pZCB7XG4gICAgLy8gUHJldmVudCBzaW5nbGUgbW9kZSBjaGVja2JveCBnZXR0aW5nIHVuY2hlY2tlZCBvbiB0YXBwaW5nIGFscmVhZHkgc2VsZWN0ZWQuXG4gICAgaWYgKHRoaXMuY29uZmlnLnNlbGVjdE1vZGUgPT09ICdzaW5nbGUnKSB7XG4gICAgICBjb25zdCBpZCA9IGdldChyb3cuaXRlbSwgdGhpcy5jb25maWcuc2VsZWN0VHJhY2tCeSk7XG4gICAgICBjb25zdCBwcmV2aW91c1NlbGVjdGlvbiA9IHRoaXMuZGF0YVN0YXRlU2VydmljZS5zZWxlY3RlZFJvdztcblxuICAgICAgaWYgKHByZXZpb3VzU2VsZWN0aW9uID09PSBpZCkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICByb3cuc2VsZWN0ZWQgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBPbiByb3cgc2VsZWN0aW9uIGNoYW5nZSBldmVudCBoYW5kbGVyLlxuICAgKiBAcGFyYW0gcm93IERhdGEgcm93IHJlZmVyZW5jZS5cbiAgICovXG4gIHB1YmxpYyBvblJvd1NlbGVjdENoYW5nZShyb3c6IERhdGFUYWJsZVJvdzxhbnk+KTogdm9pZCB7XG4gICAgY29uc3QgaWQgPSBnZXQocm93Lml0ZW0sIHRoaXMuY29uZmlnLnNlbGVjdFRyYWNrQnkpO1xuXG4gICAgc3dpdGNoICh0aGlzLmNvbmZpZy5zZWxlY3RNb2RlKSB7XG4gICAgICBjYXNlICdtdWx0aSc6IHtcbiAgICAgICAgY29uc3QgaW5kZXggPSB0aGlzLmRhdGFTdGF0ZVNlcnZpY2Uuc2VsZWN0ZWRSb3dzLmluZGV4T2YoaWQpO1xuICAgICAgICBpZiAocm93LnNlbGVjdGVkICYmIGluZGV4IDwgMCkge1xuICAgICAgICAgIHRoaXMuZGF0YVN0YXRlU2VydmljZS5zZWxlY3RlZFJvd3MucHVzaChpZCk7XG4gICAgICAgIH0gZWxzZSBpZiAoIXJvdy5zZWxlY3RlZCAmJiBpbmRleCA+IC0xKSB7XG4gICAgICAgICAgdGhpcy5kYXRhU3RhdGVTZXJ2aWNlLnNlbGVjdGVkUm93cy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgcHJldmlvdXNBbGxSb3dTZWxlY3RlZFN0YXRlID0gdGhpcy5kYXRhU3RhdGVTZXJ2aWNlLmFsbFJvd1NlbGVjdGVkO1xuICAgICAgICB0aGlzLmRhdGFTdGF0ZVNlcnZpY2UuYWxsUm93U2VsZWN0ZWQgPSB0aGlzLmRhdGFTdGF0ZVNlcnZpY2UuZGF0YVJvd3MuZXZlcnkoKGRhdGFSb3c6IERhdGFUYWJsZVJvdzxhbnk+KSA9PiB7XG4gICAgICAgICAgcmV0dXJuIGRhdGFSb3cuc2VsZWN0ZWQ7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuZXZlbnRTdGF0ZVNlcnZpY2Uucm93U2VsZWN0Q2hhbmdlU3RyZWFtLmVtaXQodGhpcy5kYXRhU3RhdGVTZXJ2aWNlLnNlbGVjdGVkUm93cyk7XG5cbiAgICAgICAgaWYgKHByZXZpb3VzQWxsUm93U2VsZWN0ZWRTdGF0ZSAhPT0gdGhpcy5kYXRhU3RhdGVTZXJ2aWNlLmFsbFJvd1NlbGVjdGVkKSB7XG4gICAgICAgICAgdGhpcy5ldmVudFN0YXRlU2VydmljZS5hbGxSb3dTZWxlY3RDaGFuZ2VTdHJlYW0uZW1pdCh0aGlzLmRhdGFTdGF0ZVNlcnZpY2UuYWxsUm93U2VsZWN0ZWQpO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSAnc2luZ2xlX3RvZ2dsZSc6IHtcbiAgICAgICAgaWYgKHJvdy5zZWxlY3RlZCkge1xuICAgICAgICAgIHRoaXMuZGF0YVN0YXRlU2VydmljZS5zZWxlY3RlZFJvdyA9IGlkO1xuXG4gICAgICAgICAgLy8gZGVzZWxlY3QgYWxsIG90aGVyIHJvdyBvdGhlciByb3dzXG4gICAgICAgICAgdGhpcy5kYXRhU3RhdGVTZXJ2aWNlLmRhdGFSb3dzLmZvckVhY2goKGRhdGFSb3c6IERhdGFUYWJsZVJvdzxhbnk+KSA9PiB7XG4gICAgICAgICAgICBpZiAoZGF0YVJvdyAhPT0gcm93KSB7XG4gICAgICAgICAgICAgIGRhdGFSb3cuc2VsZWN0ZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLmRhdGFTdGF0ZVNlcnZpY2Uuc2VsZWN0ZWRSb3cgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmV2ZW50U3RhdGVTZXJ2aWNlLnJvd1NlbGVjdENoYW5nZVN0cmVhbS5lbWl0KHRoaXMuZGF0YVN0YXRlU2VydmljZS5zZWxlY3RlZFJvdyk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSAnc2luZ2xlJzoge1xuICAgICAgICBjb25zdCBwcmV2aW91c1NlbGVjdGlvbiA9IHRoaXMuZGF0YVN0YXRlU2VydmljZS5zZWxlY3RlZFJvdztcbiAgICAgICAgdGhpcy5kYXRhU3RhdGVTZXJ2aWNlLnNlbGVjdGVkUm93ID0gaWQ7XG4gICAgICAgIHJvdy5zZWxlY3RlZCA9IHRydWU7XG5cbiAgICAgICAgLy8gZGVzZWxlY3QgYWxsIG90aGVyIHJvdyBvdGhlciByb3dzXG4gICAgICAgIHRoaXMuZGF0YVN0YXRlU2VydmljZS5kYXRhUm93cy5mb3JFYWNoKChkYXRhUm93OiBEYXRhVGFibGVSb3c8YW55PikgPT4ge1xuICAgICAgICAgIGlmIChkYXRhUm93ICE9PSByb3cpIHtcbiAgICAgICAgICAgIGRhdGFSb3cuc2VsZWN0ZWQgPSBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChwcmV2aW91c1NlbGVjdGlvbiAhPT0gaWQpIHtcbiAgICAgICAgICB0aGlzLmV2ZW50U3RhdGVTZXJ2aWNlLnJvd1NlbGVjdENoYW5nZVN0cmVhbS5lbWl0KHRoaXMuZGF0YVN0YXRlU2VydmljZS5zZWxlY3RlZFJvdyk7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJvdyBjbGlja2VkIGV2ZW50IGhhbmRsZXIuXG4gICAqIEBwYXJhbSByb3cgRGF0YSByb3cgb2JqZWN0LlxuICAgKiBAcGFyYW0gZXZlbnQgTW91c2UgY2xpY2sgZXZlbnQgYXJndW1lbnQgb2JqZWN0LlxuICAgKi9cbiAgcHVibGljIHJvd0NsaWNrZWQocm93OiBEYXRhVGFibGVSb3c8YW55PiwgZXZlbnQ6IE1vdXNlRXZlbnQpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5jb25maWcuc2VsZWN0T25Sb3dDbGljayB8fCAodGhpcy5jb25maWcuZXhwYW5kYWJsZVJvd3MgJiYgdGhpcy5jb25maWcuZXhwYW5kT25Sb3dDbGljaykpIHtcbiAgICAgIGNvbnN0IHRhcmdldCA9IGV2ZW50LnRhcmdldCBhcyBIVE1MRWxlbWVudDtcbiAgICAgIGlmICh0YXJnZXQgJiYgdGFyZ2V0LmNsYXNzTGlzdCAmJiB0YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCduZy1pZ25vcmUtcHJvcGFnYXRpb24nKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLmNvbmZpZy5yb3dTZWxlY3RhYmxlICYmIHRoaXMuY29uZmlnLnNlbGVjdE9uUm93Q2xpY2spIHtcbiAgICAgICAgcm93LnNlbGVjdGVkID0gIXJvdy5zZWxlY3RlZDtcbiAgICAgICAgdGhpcy5vblJvd1NlbGVjdENoYW5nZShyb3cpO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5jb25maWcuZXhwYW5kT25Sb3dDbGljaykge1xuICAgICAgICByb3cuZXhwYW5kZWQgPSAhcm93LmV4cGFuZGVkO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuZXZlbnRTdGF0ZVNlcnZpY2Uucm93Q2xpY2tTdHJlYW0uZW1pdCh7IHJvdywgZXZlbnQgfSk7XG4gIH1cblxuICAvKipcbiAgICogUm93IGRvdWJsZSBjbGlja2VkIGV2ZW50IGhhbmRsZXIuXG4gICAqIEBwYXJhbSByb3cgRGF0YSByb3cgb2JqZWN0LlxuICAgKiBAcGFyYW0gZXZlbnQgRXZlbnQgTW91c2UgY2xpY2sgZXZlbnQgYXJndW1lbnQgb2JqZWN0LlxuICAgKi9cbiAgcHVibGljIHJvd0RvdWJsZUNsaWNrZWQocm93OiBEYXRhVGFibGVSb3c8YW55PiwgZXZlbnQ6IE1vdXNlRXZlbnQpOiB2b2lkIHtcbiAgICB0aGlzLmV2ZW50U3RhdGVTZXJ2aWNlLnJvd0RvdWJsZUNsaWNrU3RyZWFtLmVtaXQoeyByb3csIGV2ZW50IH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBzdWJzdGl0dXRlIHJvdyBhdmFpbGFiaWxpdHkgc3RhdHVzLlxuICAgKiBAcmV0dXJuIFRydWUgaWYgc3Vic3RpdHV0ZSByb3dzIGFyZSBhdmFpbGFibGUuXG4gICAqL1xuICBwdWJsaWMgZ2V0IGhhc1N1YnN0aXR1dGVSb3dzKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAhdGhpcy5jb25maWcubG9hZE9uU2Nyb2xsXG4gICAgICAmJiB0aGlzLmNvbmZpZy5zaG93U3Vic3RpdHV0ZVJvd3NcbiAgICAgICYmIHRoaXMuZGF0YVN0YXRlU2VydmljZS5kYXRhUm93cy5sZW5ndGhcbiAgICAgICYmICF0aGlzLmRhdGFTdGF0ZVNlcnZpY2Uuc2hvd05vRGF0YU92ZXJsYXk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGNlbGwgdmFsdWUgYnkgZGF0YSBmaWVsZC5cbiAgICogQHBhcmFtIHJvdyBEYXRhIHJvdyByZWZlcmVuY2UuXG4gICAqIEBwYXJhbSBjb2x1bW4gRGF0YSB0YWJsZSBjb2x1bW4gY29tcG9uZW50IHJlZmVyZW5jZS5cbiAgICovXG4gIHB1YmxpYyBnZXRGaWVsZFZhbHVlKHJvdzogRGF0YVRhYmxlUm93PGFueT4sIGNvbHVtbjogRGF0YVRhYmxlQ29sdW1uQ29tcG9uZW50KSB7XG4gICAgcmV0dXJuIGdldChyb3cuaXRlbSwgY29sdW1uLmZpZWxkKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgcm93IHNlbGVjdCBjaGVja2JveCBkaXNwbGF5IHN0YXR1cy5cbiAgICogQHJldHVybiBUcnVlIGlmIHJvdyBzZWxlY3RvciBjaGVja2JveCBzaG91bGQgYmUgZGlzcGxheWVkLlxuICAgKi9cbiAgcHVibGljIGdldCBzaG93Um93U2VsZWN0Q2hlY2tib3goKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuY29uZmlnLnJvd1NlbGVjdGFibGUgJiYgdGhpcy5jb25maWcuc2hvd1Jvd1NlbGVjdENoZWNrYm94O1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCByb3cgZXhwZW5kIHZpZXcgbG9hZGluZyBzdGF0dXMuIFVzZWQgdG8gZGlzcGxheSBsb2FkaW5nIHNwaW5uZXIgb24gZXhwYW5kIGNvbHVtbiB3aGlsZSBkYXRhIGZldGNoaW5nLlxuICAgKiBAcGFyYW0gcm93IERhdGEgcm93IG9iamVjdCByZWZlcmVuY2UuXG4gICAqL1xuICBwdWJsaWMgaXNSb3dFeHBhbmRlckxvYWRpbmcocm93OiBEYXRhVGFibGVSb3c8YW55Pik6IGJvb2xlYW4ge1xuICAgIHJldHVybiByb3cuZXhwYW5kZWQgJiYgIXJvdy5kYXRhTG9hZGVkO1xuICB9XG59XG4iXX0=