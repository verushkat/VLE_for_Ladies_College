/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ElementRef, ViewChild } from '@angular/core';
import { debounceTime } from 'rxjs/operators';
import { DataFetchMode } from '../../models/data-fetch-mode.enum';
import { DataTableConfigService } from '../../services/data-table-config.service';
import { DataTableDataStateService } from '../../services/data-table-data-state.service';
import { DataTableEventStateService } from '../../services/data-table-event.service';
import { ResizeService } from '../../../utility/services/resize.service';
/**
 * Data table pagination component. Render data table paginator widget.
 */
export class DataTablePaginationComponent {
    /**
     * @param {?} config
     * @param {?} dataStateService
     * @param {?} eventStateService
     * @param {?} resizeService
     */
    constructor(config, dataStateService, eventStateService, resizeService) {
        this.config = config;
        this.dataStateService = dataStateService;
        this.eventStateService = eventStateService;
        this.resizeService = resizeService;
        this.isMobile = false;
    }
    /**
     * Set mobile mode state.
     * @private
     * @return {?}
     */
    setMobileModeState() {
        this.isMobile = this.paginationContainer.nativeElement.clientWidth < 767;
    }
    /**
     * First page click event handler.
     * @return {?}
     */
    firstPageClick() {
        this.config.offset = 0;
        this.eventStateService.dataFetchStream.emit(DataFetchMode.SOFT_LOAD);
    }
    /**
     * Previous page click event handler.
     * @return {?}
     */
    previousPageClick() {
        this.config.offset = this.config.offset - Math.min(this.config.limit, this.config.offset);
        this.eventStateService.dataFetchStream.emit(DataFetchMode.SOFT_LOAD);
    }
    /**
     * Next page click event handler.
     * @return {?}
     */
    nextPageClick() {
        this.config.offset = this.config.offset + this.config.limit;
        this.eventStateService.dataFetchStream.emit(DataFetchMode.SOFT_LOAD);
    }
    /**
     * Last page click event handler.
     * @return {?}
     */
    lastPageClick() {
        this.config.offset = (this.maxPage - 1) * this.config.limit;
        this.eventStateService.dataFetchStream.emit(DataFetchMode.SOFT_LOAD);
    }
    /**
     * Get maximum page count.
     * @return {?}
     */
    get maxPage() {
        return Math.ceil(this.dataStateService.itemCount / this.config.limit);
    }
    /**
     * Get page number.
     * @return {?}
     */
    get page() {
        return Math.floor(this.config.offset / this.config.limit) + 1;
    }
    /**
     * Check limit invalid status. True if limit is invalid.
     * @param {?} element Limit input DOM element.
     * @return {?} Invalid status.
     */
    isInvalidLimit(element) {
        /** @type {?} */
        const limit = Number(element.value);
        return element.value === '' || limit > this.config.maxLimit || limit < 1;
    }
    /**
     * On page size change event handler.
     * @param {?} element HTML input element.
     * @return {?}
     */
    onPageSizeChange(element) {
        if (this.isInvalidLimit(element)) {
            element.value = String(this.config.limit);
            return;
        }
        /** @type {?} */
        const limit = Number(element.value);
        if (this.config.limit !== limit) {
            this.config.offset = 0;
            this.config.limit = limit;
            this.eventStateService.dataFetchStream.emit(DataFetchMode.SOFT_LOAD);
        }
    }
    /**
     * On page size revert event handler.
     * @param {?} element HTML input element.
     * @return {?}
     */
    onPageSizeRevert(element) {
        element.value = String(this.config.limit);
    }
    /**
     * Is invalid page index; True if page index is invalid.
     * @param {?} element Page index DOM element.
     * @return {?} Invalid status.
     */
    isInvalidPageIndex(element) {
        /** @type {?} */
        const page = Number(element.value);
        return element.value === '' || page > this.maxPage || page < 1;
    }
    /**
     * On page size change event handler.
     * @param {?} element HTML input element.
     * @return {?}
     */
    onPageIndexChange(element) {
        if (this.isInvalidPageIndex(element)) {
            element.value = String(this.page);
            return;
        }
        /** @type {?} */
        const page = Number(element.value);
        if (this.page !== page) {
            this.config.offset = (page - 1) * this.config.limit;
            this.eventStateService.dataFetchStream.emit(DataFetchMode.SOFT_LOAD);
        }
    }
    /**
     * On page size revert event handler.
     * @param {?} element HTML input element.
     * @return {?}
     */
    onPageIndexRevert(element) {
        element.value = String(this.page);
    }
    /**
     * Get previous page availability status.
     * @return {?}
     */
    get hasPrevious() {
        return this.config.offset <= 0;
    }
    /**
     * Get next page availability status.
     * @return {?}
     */
    get hasNext() {
        return this.config.offset + this.config.limit >= this.dataStateService.itemCount;
    }
    /**
     * Get start row index.
     * @return {?}
     */
    get startRowIndex() {
        return this.config.offset + 1;
    }
    /**
     * Get end row index.
     * @return {?}
     */
    get endRowIndex() {
        return Math.min(this.config.offset + this.config.limit, this.dataStateService.itemCount);
    }
    /**
     * Prevent invalid key press.
     * @param {?} event Keyboard event argument object.
     * @return {?}
     */
    preventInvalidKeyPress(event) {
        if ((event.key >= '0' && event.key <= '9') ||
            event.key === 'ArrowLeft' ||
            event.key === 'ArrowRight' ||
            event.key === 'Delete' ||
            event.key === 'Backspace' ||
            event.key === 'Escape' ||
            event.key === 'Enter') {
            return;
        }
        else {
            event.preventDefault();
        }
    }
    /**
     * component init lifecycle event handler.
     * @return {?}
     */
    ngOnInit() {
        this.setMobileModeState();
        this.resizeService.resize.pipe(debounceTime(200)).subscribe((/**
         * @return {?}
         */
        () => {
            this.setMobileModeState();
        }));
    }
}
DataTablePaginationComponent.decorators = [
    { type: Component, args: [{
                selector: 'ng-data-table-pagination',
                template: "<div class=\"ng-data-table-pagination-container\" #paginationContainer>\n  <div class=\"ng-data-table-pagination-range\" [hidden]=\"isMobile\">\n    {{ config.translations.pagination.rangeKey }} <span [textContent]=\"startRowIndex\"></span>\n    -<span [textContent]=\"endRowIndex\"></span>\n    {{ config.translations.pagination.rangeSeparator }}\n    <span [textContent]=\"dataStateService.itemCount\"></span>\n  </div>\n  <div class=\"ng-data-table-pagination-controllers\" [class.sm-controllers]=\"isMobile\">\n    <div class=\"ng-data-table-pagination-limit\">\n      <div class=\"ng-data-table-pagination-input-container\">\n        <label class=\"ng-data-table-pagination-input-label\">{{ config.translations.pagination.limit }}</label>\n        <input\n          #limitInput\n          type=\"number\"\n          class=\"ng-data-table-pagination-input\"\n          min=\"1\"\n          step=\"1\"\n          [attr.max]=\"config.maxLimit\"\n          [class.ng-data-table-input-error]=\"isInvalidLimit(limitInput)\"\n          [ngModel]=\"config.limit\"\n          required\n          (keypress)=\"preventInvalidKeyPress($event)\"\n          (keyup.enter)=\"onPageSizeChange(limitInput)\"\n          (keyup.esc)=\"onPageSizeRevert(limitInput)\"\n        />\n      </div>\n    </div>\n    <div class=\"ng-data-table-pagination-pages\">\n      <button\n        [disabled]=\"hasPrevious\"\n        (click)=\"firstPageClick()\"\n        [title]=\"config.translations.pagination.firstTooltip\"\n        class=\"ng-data-table-action-button ng-data-table-pagination-firstpage\"\n      ></button>\n      <button\n        [disabled]=\"hasPrevious\"\n        (click)=\"previousPageClick()\"\n        [title]=\"config.translations.pagination.previousTooltip\"\n        class=\"ng-data-table-action-button ng-data-table-pagination-prevpage\"\n      ></button>\n      <div class=\"ng-data-table-pagination-page\">\n        <div class=\"ng-data-table-pagination-input-container\">\n          <input\n            #pageInput\n            type=\"number\"\n            class=\"ng-data-table-pagination-input\"\n            min=\"1\"\n            step=\"1\"\n            [attr.max]=\"maxPage\"\n            [class.ng-data-table-input-error]=\"isInvalidPageIndex(pageInput)\"\n            [ngModel]=\"page\"\n            required\n            (keypress)=\"preventInvalidKeyPress($event)\"\n            (keyup.enter)=\"onPageIndexChange(pageInput)\"\n            (keyup.esc)=\"onPageIndexRevert(pageInput)\"\n          />\n          <div class=\"ng-data-table-pagination-input-label\">\n            <span>/ </span>\n            <span [textContent]=\"maxPage\"></span>\n          </div>\n        </div>\n      </div>\n      <button\n        [disabled]=\"hasNext\"\n        (click)=\"nextPageClick()\"\n        [title]=\"config.translations.pagination.nextTooltip\"\n        class=\"ng-data-table-action-button ng-data-table-pagination-nextpage\"\n      ></button>\n      <button\n        [disabled]=\"hasNext\"\n        (click)=\"lastPageClick()\"\n        [title]=\"config.translations.pagination.lastTooltip\"\n        class=\"ng-data-table-action-button ng-data-table-pagination-lastpage\"\n      ></button>\n    </div>\n  </div>\n</div>\n"
            }] }
];
/** @nocollapse */
DataTablePaginationComponent.ctorParameters = () => [
    { type: DataTableConfigService },
    { type: DataTableDataStateService },
    { type: DataTableEventStateService },
    { type: ResizeService }
];
DataTablePaginationComponent.propDecorators = {
    paginationContainer: [{ type: ViewChild, args: ['paginationContainer', { static: true },] }]
};
if (false) {
    /**
     * @type {?}
     * @private
     */
    DataTablePaginationComponent.prototype.paginationContainer;
    /** @type {?} */
    DataTablePaginationComponent.prototype.isMobile;
    /** @type {?} */
    DataTablePaginationComponent.prototype.config;
    /** @type {?} */
    DataTablePaginationComponent.prototype.dataStateService;
    /**
     * @type {?}
     * @private
     */
    DataTablePaginationComponent.prototype.eventStateService;
    /**
     * @type {?}
     * @private
     */
    DataTablePaginationComponent.prototype.resizeService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS10YWJsZS1wYWdpbmF0aW9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL29ybmFtZW50dW0vIiwic291cmNlcyI6WyJkYXRhLXRhYmxlL2NvbXBvbmVudHMvZGF0YS10YWJsZS1wYWdpbmF0aW9uL2RhdGEtdGFibGUtcGFnaW5hdGlvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFVLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV6RSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFOUMsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBRWxFLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBQ2xGLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLDhDQUE4QyxDQUFDO0FBQ3pGLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBQ3JGLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQzs7OztBQVN6RSxNQUFNLE9BQU8sNEJBQTRCOzs7Ozs7O0lBTXZDLFlBQ1MsTUFBOEIsRUFDOUIsZ0JBQTJDLEVBQzFDLGlCQUE2QyxFQUM3QyxhQUE0QjtRQUg3QixXQUFNLEdBQU4sTUFBTSxDQUF3QjtRQUM5QixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQTJCO1FBQzFDLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBNEI7UUFDN0Msa0JBQWEsR0FBYixhQUFhLENBQWU7UUFOL0IsYUFBUSxHQUFHLEtBQUssQ0FBQztJQU9yQixDQUFDOzs7Ozs7SUFLSSxrQkFBa0I7UUFDeEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsbUJBQW1CLENBQUMsYUFBYSxDQUFDLFdBQVcsR0FBRyxHQUFHLENBQUM7SUFDM0UsQ0FBQzs7Ozs7SUFLTSxjQUFjO1FBQ25C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QUMxQixhQUFhOzs7a0NBVW5CLFNBQVMsU0FBQyxxQkFBcUIsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7Ozs7Ozs7SUFBbEQsMkRBQ3FEOztJQUVyRCxnREFBd0I7O0lBR3RCLDhDQUFxQzs7SUFDckMsd0RBQWtEOzs7OztJQUNsRCx5REFBcUQ7Ozs7O0lBQ3JELHFEQUFvQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgT25Jbml0LCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgZGVib3VuY2VUaW1lIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBEYXRhRmV0Y2hNb2RlIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2RhdGEtZmV0Y2gtbW9kZS5lbnVtJztcblxuaW1wb3J0IHsgRGF0YVRhYmxlQ29uZmlnU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2RhdGEtdGFibGUtY29uZmlnLnNlcnZpY2UnO1xuaW1wb3J0IHsgRGF0YVRhYmxlRGF0YVN0YXRlU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2RhdGEtdGFibGUtZGF0YS1zdGF0ZS5zZXJ2aWNlJztcbmltcG9ydCB7IERhdGFUYWJsZUV2ZW50U3RhdGVTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvZGF0YS10YWJsZS1ldmVudC5zZXJ2aWNlJztcbmltcG9ydCB7IFJlc2l6ZVNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi91dGlsaXR5L3NlcnZpY2VzL3Jlc2l6ZS5zZXJ2aWNlJztcblxuLyoqXG4gKiBEYXRhIHRhYmxlIHBhZ2luYXRpb24gY29tcG9uZW50LiBSZW5kZXIgZGF0YSB0YWJsZSBwYWdpbmF0b3Igd2lkZ2V0LlxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduZy1kYXRhLXRhYmxlLXBhZ2luYXRpb24nLFxuICB0ZW1wbGF0ZVVybDogJy4vZGF0YS10YWJsZS1wYWdpbmF0aW9uLmNvbXBvbmVudC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBEYXRhVGFibGVQYWdpbmF0aW9uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQFZpZXdDaGlsZCgncGFnaW5hdGlvbkNvbnRhaW5lcicsIHsgc3RhdGljOiB0cnVlIH0pXG4gIHByaXZhdGUgcGFnaW5hdGlvbkNvbnRhaW5lcjogRWxlbWVudFJlZjxIVE1MRWxlbWVudD47XG5cbiAgcHVibGljIGlzTW9iaWxlID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIGNvbmZpZzogRGF0YVRhYmxlQ29uZmlnU2VydmljZSxcbiAgICBwdWJsaWMgZGF0YVN0YXRlU2VydmljZTogRGF0YVRhYmxlRGF0YVN0YXRlU2VydmljZSxcbiAgICBwcml2YXRlIGV2ZW50U3RhdGVTZXJ2aWNlOiBEYXRhVGFibGVFdmVudFN0YXRlU2VydmljZSxcbiAgICBwcml2YXRlIHJlc2l6ZVNlcnZpY2U6IFJlc2l6ZVNlcnZpY2VcbiAgKSB7fVxuXG4gIC8qKlxuICAgKiBTZXQgbW9iaWxlIG1vZGUgc3RhdGUuXG4gICAqL1xuICBwcml2YXRlIHNldE1vYmlsZU1vZGVTdGF0ZSgpOiB2b2lkIHtcbiAgICB0aGlzLmlzTW9iaWxlID0gdGhpcy5wYWdpbmF0aW9uQ29udGFpbmVyLm5hdGl2ZUVsZW1lbnQuY2xpZW50V2lkdGggPCA3Njc7XG4gIH1cblxuICAvKipcbiAgICogRmlyc3QgcGFnZSBjbGljayBldmVudCBoYW5kbGVyLlxuICAgKi9cbiAgcHVibGljIGZpcnN0UGFnZUNsaWNrKCk6IHZvaWQge1xuICAgIHRoaXMuY29uZmlnLm9mZnNldCA9IDA7XG4gICAgdGhpcy5ldmVudFN0YXRlU2VydmljZS5kYXRhRmV0Y2hTdHJlYW0uZW1pdChEYXRhRmV0Y2hNb2RlLlNPRlRfTE9BRCk7XG4gIH1cblxuICAvKipcbiAgICogUHJldmlvdXMgcGFnZSBjbGljayBldmVudCBoYW5kbGVyLlxuICAgKi9cbiAgcHVibGljIHByZXZpb3VzUGFnZUNsaWNrKCk6IHZvaWQge1xuICAgIHRoaXMuY29uZmlnLm9mZnNldCA9IHRoaXMuY29uZmlnLm9mZnNldCAtIE1hdGgubWluKHRoaXMuY29uZmlnLmxpbWl0LCB0aGlzLmNvbmZpZy5vZmZzZXQpO1xuICAgIHRoaXMuZXZlbnRTdGF0ZVNlcnZpY2UuZGF0YUZldGNoU3RyZWFtLmVtaXQoRGF0YUZldGNoTW9kZS5TT0ZUX0xPQUQpO1xuICB9XG5cbiAgLyoqXG4gICAqIE5leHQgcGFnZSBjbGljayBldmVudCBoYW5kbGVyLlxuICAgKi9cbiAgcHVibGljIG5leHRQYWdlQ2xpY2soKTogdm9pZCB7XG4gICAgdGhpcy5jb25maWcub2Zmc2V0ID0gdGhpcy5jb25maWcub2Zmc2V0ICsgdGhpcy5jb25maWcubGltaXQ7XG4gICAgdGhpcy5ldmVudFN0YXRlU2VydmljZS5kYXRhRmV0Y2hTdHJlYW0uZW1pdChEYXRhRmV0Y2hNb2RlLlNPRlRfTE9BRCk7XG4gIH1cblxuICAvKipcbiAgICogTGFzdCBwYWdlIGNsaWNrIGV2ZW50IGhhbmRsZXIuXG4gICAqL1xuICBwdWJsaWMgbGFzdFBhZ2VDbGljaygpOiB2b2lkIHtcbiAgICB0aGlzLmNvbmZpZy5vZmZzZXQgPSAodGhpcy5tYXhQYWdlIC0gMSkgKiB0aGlzLmNvbmZpZy5saW1pdDtcbiAgICB0aGlzLmV2ZW50U3RhdGVTZXJ2aWNlLmRhdGFGZXRjaFN0cmVhbS5lbWl0KERhdGFGZXRjaE1vZGUuU09GVF9MT0FEKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgbWF4aW11bSBwYWdlIGNvdW50LlxuICAgKi9cbiAgcHVibGljIGdldCBtYXhQYWdlKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIE1hdGguY2VpbCh0aGlzLmRhdGFTdGF0ZVNlcnZpY2UuaXRlbUNvdW50IC8gdGhpcy5jb25maWcubGltaXQpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBwYWdlIG51bWJlci5cbiAgICovXG4gIHB1YmxpYyBnZXQgcGFnZSgpOiBudW1iZXIge1xuICAgIHJldHVybiBNYXRoLmZsb29yKHRoaXMuY29uZmlnLm9mZnNldCAvIHRoaXMuY29uZmlnLmxpbWl0KSArIDE7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgbGltaXQgaW52YWxpZCBzdGF0dXMuIFRydWUgaWYgbGltaXQgaXMgaW52YWxpZC5cbiAgICogQHBhcmFtIGVsZW1lbnQgTGltaXQgaW5wdXQgRE9NIGVsZW1lbnQuXG4gICAqIEByZXR1cm4gSW52YWxpZCBzdGF0dXMuXG4gICAqL1xuICBwdWJsaWMgaXNJbnZhbGlkTGltaXQoZWxlbWVudDogSFRNTElucHV0RWxlbWVudCk6IGJvb2xlYW4ge1xuICAgIGNvbnN0IGxpbWl0ID0gTnVtYmVyKGVsZW1lbnQudmFsdWUpO1xuICAgIHJldHVybiBlbGVtZW50LnZhbHVlID09PSAnJyB8fCBsaW1pdCA+IHRoaXMuY29uZmlnLm1heExpbWl0IHx8IGxpbWl0IDwgMTtcbiAgfVxuXG4gIC8qKlxuICAgKiBPbiBwYWdlIHNpemUgY2hhbmdlIGV2ZW50IGhhbmRsZXIuXG4gICAqIEBwYXJhbSBlbGVtZW50IEhUTUwgaW5wdXQgZWxlbWVudC5cbiAgICovXG4gIHB1YmxpYyBvblBhZ2VTaXplQ2hhbmdlKGVsZW1lbnQ6IEhUTUxJbnB1dEVsZW1lbnQpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5pc0ludmFsaWRMaW1pdChlbGVtZW50KSkge1xuICAgICAgZWxlbWVudC52YWx1ZSA9IFN0cmluZyh0aGlzLmNvbmZpZy5saW1pdCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgbGltaXQgPSBOdW1iZXIoZWxlbWVudC52YWx1ZSk7XG4gICAgaWYgKHRoaXMuY29uZmlnLmxpbWl0ICE9PSBsaW1pdCkge1xuICAgICAgdGhpcy5jb25maWcub2Zmc2V0ID0gMDtcbiAgICAgIHRoaXMuY29uZmlnLmxpbWl0ID0gbGltaXQ7XG4gICAgICB0aGlzLmV2ZW50U3RhdGVTZXJ2aWNlLmRhdGFGZXRjaFN0cmVhbS5lbWl0KERhdGFGZXRjaE1vZGUuU09GVF9MT0FEKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogT24gcGFnZSBzaXplIHJldmVydCBldmVudCBoYW5kbGVyLlxuICAgKiBAcGFyYW0gZWxlbWVudCBIVE1MIGlucHV0IGVsZW1lbnQuXG4gICAqL1xuICBwdWJsaWMgb25QYWdlU2l6ZVJldmVydChlbGVtZW50OiBIVE1MSW5wdXRFbGVtZW50KTogdm9pZCB7XG4gICAgZWxlbWVudC52YWx1ZSA9IFN0cmluZyh0aGlzLmNvbmZpZy5saW1pdCk7XG4gIH1cblxuICAvKipcbiAgICogSXMgaW52YWxpZCBwYWdlIGluZGV4OyBUcnVlIGlmIHBhZ2UgaW5kZXggaXMgaW52YWxpZC5cbiAgICogQHBhcmFtIGVsZW1lbnQgUGFnZSBpbmRleCBET00gZWxlbWVudC5cbiAgICogQHJldHVybiBJbnZhbGlkIHN0YXR1cy5cbiAgICovXG4gIHB1YmxpYyBpc0ludmFsaWRQYWdlSW5kZXgoZWxlbWVudDogSFRNTElucHV0RWxlbWVudCk6IGJvb2xlYW4ge1xuICAgIGNvbnN0IHBhZ2UgPSBOdW1iZXIoZWxlbWVudC52YWx1ZSk7XG4gICAgcmV0dXJuIGVsZW1lbnQudmFsdWUgPT09ICcnIHx8IHBhZ2UgPiB0aGlzLm1heFBhZ2UgfHwgcGFnZSA8IDE7XG4gIH1cblxuICAvKipcbiAgICogT24gcGFnZSBzaXplIGNoYW5nZSBldmVudCBoYW5kbGVyLlxuICAgKiBAcGFyYW0gZWxlbWVudCBIVE1MIGlucHV0IGVsZW1lbnQuXG4gICAqL1xuICBwdWJsaWMgb25QYWdlSW5kZXhDaGFuZ2UoZWxlbWVudDogSFRNTElucHV0RWxlbWVudCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmlzSW52YWxpZFBhZ2VJbmRleChlbGVtZW50KSkge1xuICAgICAgZWxlbWVudC52YWx1ZSA9IFN0cmluZyh0aGlzLnBhZ2UpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHBhZ2UgPSBOdW1iZXIoZWxlbWVudC52YWx1ZSk7XG4gICAgaWYgKHRoaXMucGFnZSAhPT0gcGFnZSkge1xuICAgICAgdGhpcy5jb25maWcub2Zmc2V0ID0gKHBhZ2UgLSAxKSAqIHRoaXMuY29uZmlnLmxpbWl0O1xuICAgICAgdGhpcy5ldmVudFN0YXRlU2VydmljZS5kYXRhRmV0Y2hTdHJlYW0uZW1pdChEYXRhRmV0Y2hNb2RlLlNPRlRfTE9BRCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIE9uIHBhZ2Ugc2l6ZSByZXZlcnQgZXZlbnQgaGFuZGxlci5cbiAgICogQHBhcmFtIGVsZW1lbnQgSFRNTCBpbnB1dCBlbGVtZW50LlxuICAgKi9cbiAgcHVibGljIG9uUGFnZUluZGV4UmV2ZXJ0KGVsZW1lbnQ6IEhUTUxJbnB1dEVsZW1lbnQpOiB2b2lkIHtcbiAgICBlbGVtZW50LnZhbHVlID0gU3RyaW5nKHRoaXMucGFnZSk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHByZXZpb3VzIHBhZ2UgYXZhaWxhYmlsaXR5IHN0YXR1cy5cbiAgICovXG4gIHB1YmxpYyBnZXQgaGFzUHJldmlvdXMoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuY29uZmlnLm9mZnNldCA8PSAwO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBuZXh0IHBhZ2UgYXZhaWxhYmlsaXR5IHN0YXR1cy5cbiAgICovXG4gIHB1YmxpYyBnZXQgaGFzTmV4dCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5jb25maWcub2Zmc2V0ICsgdGhpcy5jb25maWcubGltaXQgPj0gdGhpcy5kYXRhU3RhdGVTZXJ2aWNlLml0ZW1Db3VudDtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgc3RhcnQgcm93IGluZGV4LlxuICAgKi9cbiAgcHVibGljIGdldCBzdGFydFJvd0luZGV4KCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuY29uZmlnLm9mZnNldCArIDE7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGVuZCByb3cgaW5kZXguXG4gICAqL1xuICBwdWJsaWMgZ2V0IGVuZFJvd0luZGV4KCk6IG51bWJlciB7XG4gICAgcmV0dXJuIE1hdGgubWluKHRoaXMuY29uZmlnLm9mZnNldCArIHRoaXMuY29uZmlnLmxpbWl0LCB0aGlzLmRhdGFTdGF0ZVNlcnZpY2UuaXRlbUNvdW50KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBQcmV2ZW50IGludmFsaWQga2V5IHByZXNzLlxuICAgKiBAcGFyYW0gZXZlbnQgS2V5Ym9hcmQgZXZlbnQgYXJndW1lbnQgb2JqZWN0LlxuICAgKi9cbiAgcHVibGljIHByZXZlbnRJbnZhbGlkS2V5UHJlc3MoZXZlbnQ6IEtleWJvYXJkRXZlbnQpOiB2b2lkIHtcbiAgICBpZiAoXG4gICAgICAoZXZlbnQua2V5ID49ICcwJyAmJiBldmVudC5rZXkgPD0gJzknKSB8fFxuICAgICAgZXZlbnQua2V5ID09PSAnQXJyb3dMZWZ0JyB8fFxuICAgICAgZXZlbnQua2V5ID09PSAnQXJyb3dSaWdodCcgfHxcbiAgICAgIGV2ZW50LmtleSA9PT0gJ0RlbGV0ZScgfHxcbiAgICAgIGV2ZW50LmtleSA9PT0gJ0JhY2tzcGFjZScgfHxcbiAgICAgIGV2ZW50LmtleSA9PT0gJ0VzY2FwZScgfHxcbiAgICAgIGV2ZW50LmtleSA9PT0gJ0VudGVyJ1xuICAgICkge1xuICAgICAgcmV0dXJuO1xuICAgIH0gZWxzZSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBjb21wb25lbnQgaW5pdCBsaWZlY3ljbGUgZXZlbnQgaGFuZGxlci5cbiAgICovXG4gIHB1YmxpYyBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnNldE1vYmlsZU1vZGVTdGF0ZSgpO1xuXG4gICAgdGhpcy5yZXNpemVTZXJ2aWNlLnJlc2l6ZS5waXBlKGRlYm91bmNlVGltZSgyMDApKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgdGhpcy5zZXRNb2JpbGVNb2RlU3RhdGUoKTtcbiAgICB9KTtcbiAgfVxufVxuIl19