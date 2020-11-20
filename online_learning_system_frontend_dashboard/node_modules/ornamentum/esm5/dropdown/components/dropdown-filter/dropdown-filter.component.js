/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { DropdownConfigService } from '../../services/dropdown-config.service';
import { DropdownDataStateService } from '../../services/dropdown-data-state.service';
import { DropdownEventStateService } from '../../services/dropdown-event-state.service';
/**
 * Dropdown filter component.
 */
var DropdownFilterComponent = /** @class */ (function () {
    function DropdownFilterComponent(config, dataStateService, eventStateService) {
        this.config = config;
        this.dataStateService = dataStateService;
        this.eventStateService = eventStateService;
        this.dataFilterStream = new Subject();
    }
    /**
     * Clear applied filter value.
     */
    /**
     * Clear applied filter value.
     * @return {?}
     */
    DropdownFilterComponent.prototype.clearFilter = /**
     * Clear applied filter value.
     * @return {?}
     */
    function () {
        this.dataStateService.offset = 0;
        this.dataStateService.filterText = '';
        this.eventStateService.dataFetchStream.emit(false);
    };
    /**
     * Filter key up event handler.
     */
    /**
     * Filter key up event handler.
     * @return {?}
     */
    DropdownFilterComponent.prototype.filterKeyUp = /**
     * Filter key up event handler.
     * @return {?}
     */
    function () {
        if (this.config.filterDebounce) {
            this.dataFilterStream.next(this.dataStateService.filterText);
        }
        else {
            this.dataStateService.offset = 0;
            this.eventStateService.dataFetchStream.emit(false);
        }
    };
    /**
     * Initialize filter stream debounce.
     */
    /**
     * Initialize filter stream debounce.
     * @private
     * @return {?}
     */
    DropdownFilterComponent.prototype.initFilterDebounceEvent = /**
     * Initialize filter stream debounce.
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        this.dataFilterSubscription = this.dataFilterStream.pipe(debounceTime(this.config.filterDebounceTime)).subscribe((/**
         * @return {?}
         */
        function () {
            _this.dataStateService.offset = 0;
            _this.eventStateService.dataFetchStream.emit(false);
        }));
    };
    /**
     * Lifecycle hook that is called when component is destroyed.
     */
    /**
     * Lifecycle hook that is called when component is destroyed.
     * @return {?}
     */
    DropdownFilterComponent.prototype.ngOnDestroy = /**
     * Lifecycle hook that is called when component is destroyed.
     * @return {?}
     */
    function () {
        if (this.dataFilterSubscription) {
            this.dataFilterSubscription.unsubscribe();
        }
    };
    /**
     * Lifecycle hook that is called when component is initialized.
     */
    /**
     * Lifecycle hook that is called when component is initialized.
     * @return {?}
     */
    DropdownFilterComponent.prototype.ngOnInit = /**
     * Lifecycle hook that is called when component is initialized.
     * @return {?}
     */
    function () {
        this.initFilterDebounceEvent();
    };
    DropdownFilterComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ng-dropdown-filter',
                    template: "<div class=\"ng-dropdown-search\">\n  <div class=\"ng-dropdown-input-group\">\n    <span class=\"ng-dropdown-input-group-addon\"></span>\n    <input\n      type=\"text\"\n      class=\"ng-dropdown-input\"\n      ngFocus\n      [attr.placeholder]=\"config.translations.filterPlaceholder\"\n      (keyup)=\"filterKeyUp()\"\n      [(ngModel)]=\"dataStateService.filterText\"\n    />\n    <span class=\"ng-dropdown-input-group-btn\" [hidden]=\"!dataStateService.filterText\">\n      <button class=\"ng-dropdown-delete-button\" type=\"button\" (click)=\"clearFilter()\"></button>\n    </span>\n  </div>\n</div>\n<div class=\"ng-dropdown-divider divider\"></div>\n"
                }] }
    ];
    /** @nocollapse */
    DropdownFilterComponent.ctorParameters = function () { return [
        { type: DropdownConfigService },
        { type: DropdownDataStateService },
        { type: DropdownEventStateService }
    ]; };
    return DropdownFilterComponent;
}());
export { DropdownFilterComponent };
if (false) {
    /**
     * @type {?}
     * @private
     */
    DropdownFilterComponent.prototype.dataFilterStream;
    /**
     * @type {?}
     * @private
     */
    DropdownFilterComponent.prototype.dataFilterSubscription;
    /** @type {?} */
    DropdownFilterComponent.prototype.config;
    /** @type {?} */
    DropdownFilterComponent.prototype.dataStateService;
    /** @type {?} */
    DropdownFilterComponent.prototype.eventStateService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcGRvd24tZmlsdGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL29ybmFtZW50dW0vIiwic291cmNlcyI6WyJkcm9wZG93bi9jb21wb25lbnRzL2Ryb3Bkb3duLWZpbHRlci9kcm9wZG93bi1maWx0ZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFxQixNQUFNLGVBQWUsQ0FBQztBQUU3RCxPQUFPLEVBQUUsT0FBTyxFQUFnQixNQUFNLE1BQU0sQ0FBQztBQUM3QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFOUMsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFDL0UsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFDdEYsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sNkNBQTZDLENBQUM7Ozs7QUFLeEY7SUFRRSxpQ0FDUyxNQUE2QixFQUM3QixnQkFBMEMsRUFDMUMsaUJBQTRDO1FBRjVDLFdBQU0sR0FBTixNQUFNLENBQXVCO1FBQzdCLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBMEI7UUFDMUMsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUEyQjtRQU43QyxxQkFBZ0IsR0FBRyxJQUFJLE9BQU8sRUFBRSxDQUFDO0lBT3RDLENBQUM7SUFFSjs7T0FFRzs7Ozs7SUFDSSw2Q0FBVzs7OztJQUFsQjtRQUNFLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1FBQ2pDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxVQUFVLEdBQUcsRUFBRSxDQUFDO1FBQ3RDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3JELENBQUM7SUFFRDs7T0FFRzs7Ozs7SUFDSSw2Q0FBVzs7OztJQUFsQjtRQUNFLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxjQUFjLEVBQUU7WUFDOUIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsVUFBVSxDQUFDLENBQUM7U0FDOUQ7YUFBTTtZQUNMLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1lBQ2pDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ3BEO0lBQ0gsQ0FBQztJQUVEOztPQUVHOzs7Ozs7SUFDSyx5REFBdUI7Ozs7O0lBQS9CO1FBQUEsaUJBS0M7UUFKQyxJQUFJLENBQUMsc0JBQXNCLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUMsU0FBUzs7O1FBQUM7WUFDL0csS0FBSSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7WUFDakMsS0FBSSxDQUFDLGlCQUFpQixDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDckQsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQ7O09BRUc7Ozs7O0lBQ0ksNkNBQVc7Ozs7SUFBbEI7UUFDRSxJQUFJLElBQUksQ0FBQyxzQkFBc0IsRUFBRTtZQUMvQixJQUFJLENBQUMsc0JBQXNCLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDM0M7SUFDSCxDQUFDO0lBRUQ7O09BRUc7Ozs7O0lBQ0ksMENBQVE7Ozs7SUFBZjtRQUNFLElBQUksQ0FBQyx1QkFBdUIsRUFBRSxDQUFDO0lBQ2pDLENBQUM7O2dCQTNERixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLG9CQUFvQjtvQkFDOUIsOHBCQUErQztpQkFDaEQ7Ozs7Z0JBVlEscUJBQXFCO2dCQUNyQix3QkFBd0I7Z0JBQ3hCLHlCQUF5Qjs7SUFpRWxDLDhCQUFDO0NBQUEsQUE1REQsSUE0REM7U0F4RFksdUJBQXVCOzs7Ozs7SUFDbEMsbURBQXlDOzs7OztJQUN6Qyx5REFBNkM7O0lBRzNDLHlDQUFvQzs7SUFDcEMsbURBQWlEOztJQUNqRCxvREFBbUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uRGVzdHJveSwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFN1YmplY3QsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZGVib3VuY2VUaW1lIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBEcm9wZG93bkNvbmZpZ1NlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9kcm9wZG93bi1jb25maWcuc2VydmljZSc7XG5pbXBvcnQgeyBEcm9wZG93bkRhdGFTdGF0ZVNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9kcm9wZG93bi1kYXRhLXN0YXRlLnNlcnZpY2UnO1xuaW1wb3J0IHsgRHJvcGRvd25FdmVudFN0YXRlU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2Ryb3Bkb3duLWV2ZW50LXN0YXRlLnNlcnZpY2UnO1xuXG4vKipcbiAqIERyb3Bkb3duIGZpbHRlciBjb21wb25lbnQuXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25nLWRyb3Bkb3duLWZpbHRlcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9kcm9wZG93bi1maWx0ZXIuY29tcG9uZW50Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIERyb3Bkb3duRmlsdGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25EZXN0cm95LCBPbkluaXQge1xuICBwcml2YXRlIGRhdGFGaWx0ZXJTdHJlYW0gPSBuZXcgU3ViamVjdCgpO1xuICBwcml2YXRlIGRhdGFGaWx0ZXJTdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgY29uZmlnOiBEcm9wZG93bkNvbmZpZ1NlcnZpY2UsXG4gICAgcHVibGljIGRhdGFTdGF0ZVNlcnZpY2U6IERyb3Bkb3duRGF0YVN0YXRlU2VydmljZSxcbiAgICBwdWJsaWMgZXZlbnRTdGF0ZVNlcnZpY2U6IERyb3Bkb3duRXZlbnRTdGF0ZVNlcnZpY2VcbiAgKSB7fVxuXG4gIC8qKlxuICAgKiBDbGVhciBhcHBsaWVkIGZpbHRlciB2YWx1ZS5cbiAgICovXG4gIHB1YmxpYyBjbGVhckZpbHRlcigpOiB2b2lkIHtcbiAgICB0aGlzLmRhdGFTdGF0ZVNlcnZpY2Uub2Zmc2V0ID0gMDtcbiAgICB0aGlzLmRhdGFTdGF0ZVNlcnZpY2UuZmlsdGVyVGV4dCA9ICcnO1xuICAgIHRoaXMuZXZlbnRTdGF0ZVNlcnZpY2UuZGF0YUZldGNoU3RyZWFtLmVtaXQoZmFsc2UpO1xuICB9XG5cbiAgLyoqXG4gICAqIEZpbHRlciBrZXkgdXAgZXZlbnQgaGFuZGxlci5cbiAgICovXG4gIHB1YmxpYyBmaWx0ZXJLZXlVcCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5jb25maWcuZmlsdGVyRGVib3VuY2UpIHtcbiAgICAgIHRoaXMuZGF0YUZpbHRlclN0cmVhbS5uZXh0KHRoaXMuZGF0YVN0YXRlU2VydmljZS5maWx0ZXJUZXh0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5kYXRhU3RhdGVTZXJ2aWNlLm9mZnNldCA9IDA7XG4gICAgICB0aGlzLmV2ZW50U3RhdGVTZXJ2aWNlLmRhdGFGZXRjaFN0cmVhbS5lbWl0KGZhbHNlKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogSW5pdGlhbGl6ZSBmaWx0ZXIgc3RyZWFtIGRlYm91bmNlLlxuICAgKi9cbiAgcHJpdmF0ZSBpbml0RmlsdGVyRGVib3VuY2VFdmVudCgpOiB2b2lkIHtcbiAgICB0aGlzLmRhdGFGaWx0ZXJTdWJzY3JpcHRpb24gPSB0aGlzLmRhdGFGaWx0ZXJTdHJlYW0ucGlwZShkZWJvdW5jZVRpbWUodGhpcy5jb25maWcuZmlsdGVyRGVib3VuY2VUaW1lKSkuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIHRoaXMuZGF0YVN0YXRlU2VydmljZS5vZmZzZXQgPSAwO1xuICAgICAgdGhpcy5ldmVudFN0YXRlU2VydmljZS5kYXRhRmV0Y2hTdHJlYW0uZW1pdChmYWxzZSk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogTGlmZWN5Y2xlIGhvb2sgdGhhdCBpcyBjYWxsZWQgd2hlbiBjb21wb25lbnQgaXMgZGVzdHJveWVkLlxuICAgKi9cbiAgcHVibGljIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmRhdGFGaWx0ZXJTdWJzY3JpcHRpb24pIHtcbiAgICAgIHRoaXMuZGF0YUZpbHRlclN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBMaWZlY3ljbGUgaG9vayB0aGF0IGlzIGNhbGxlZCB3aGVuIGNvbXBvbmVudCBpcyBpbml0aWFsaXplZC5cbiAgICovXG4gIHB1YmxpYyBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmluaXRGaWx0ZXJEZWJvdW5jZUV2ZW50KCk7XG4gIH1cbn1cbiJdfQ==