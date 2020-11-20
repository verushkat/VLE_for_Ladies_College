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
 * Dropdown options list view component
 */
var DropdownViewComponent = /** @class */ (function () {
    function DropdownViewComponent(config, dataStateService, eventStateService) {
        this.config = config;
        this.dataStateService = dataStateService;
        this.eventStateService = eventStateService;
        this.scrollEvent = new Subject();
    }
    /**
     * Lifecycle hook that is called when component is initialized.
     */
    /**
     * Lifecycle hook that is called when component is initialized.
     * @return {?}
     */
    DropdownViewComponent.prototype.ngOnInit = /**
     * Lifecycle hook that is called when component is initialized.
     * @return {?}
     */
    function () {
        var _this = this;
        this.scrollEventSubscription = this.scrollEvent.pipe(debounceTime(100)).subscribe((/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            _this.checkScrollPosition(event);
        }));
    };
    /**
     * Lifecycle hook that is called when component is destroyed.
     */
    /**
     * Lifecycle hook that is called when component is destroyed.
     * @return {?}
     */
    DropdownViewComponent.prototype.ngOnDestroy = /**
     * Lifecycle hook that is called when component is destroyed.
     * @return {?}
     */
    function () {
        if (this.scrollEventSubscription) {
            this.scrollEventSubscription.unsubscribe();
        }
    };
    /**
     * Performs data loading when scrolling when scroll threshold is met. This will be trigger only when load on scroll is enabled.
     * @param event Target event arguments reference.
     */
    /**
     * Performs data loading when scrolling when scroll threshold is met. This will be trigger only when load on scroll is enabled.
     * @param {?} event Target event arguments reference.
     * @return {?}
     */
    DropdownViewComponent.prototype.checkScrollPosition = /**
     * Performs data loading when scrolling when scroll threshold is met. This will be trigger only when load on scroll is enabled.
     * @param {?} event Target event arguments reference.
     * @return {?}
     */
    function (event) {
        /** @type {?} */
        var scrollTop = event.target.scrollTop;
        /** @type {?} */
        var scrollHeight = event.target.scrollHeight;
        /** @type {?} */
        var scrollElementHeight = event.target.clientHeight;
        /** @type {?} */
        var roundingPixel = 1;
        /** @type {?} */
        var gutterPixel = 1;
        if (scrollTop >= scrollHeight - (1 + this.config.loadViewDistanceRatio) * scrollElementHeight - roundingPixel - gutterPixel &&
            this.dataStateService.currentOptionCount < this.dataStateService.totalOptionCount &&
            !this.dataStateService.dataLoading) {
            this.dataStateService.dataLoading = true;
            this.dataStateService.offset = this.dataStateService.offset + this.config.limit;
            this.eventStateService.dataFetchStream.emit(false);
        }
    };
    DropdownViewComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ng-dropdown-view',
                    template: "<div class=\"ng-dropdown-menu-wrapper\"\n  [class.ng-dropdown-option-list]=\"!this.config.filterable\"\n  [style.width]=\"config.menuWidth | ngPx\"\n  [style.height]=\"config.menuHeight | ngPx\">\n  <div class=\"ng-dropdown-filter-wrapper\" *ngIf=\"config.filterable\">\n    <ng-dropdown-filter></ng-dropdown-filter>\n  </div>\n  <div class=\"ng-dropdown-option-container-wrapper\" (scroll)=\"config.loadOnScroll ? scrollEvent.next($event) : null\">\n    <ng-dropdown-options></ng-dropdown-options>\n  </div>\n</div>\n"
                }] }
    ];
    /** @nocollapse */
    DropdownViewComponent.ctorParameters = function () { return [
        { type: DropdownConfigService },
        { type: DropdownDataStateService },
        { type: DropdownEventStateService }
    ]; };
    return DropdownViewComponent;
}());
export { DropdownViewComponent };
if (false) {
    /** @type {?} */
    DropdownViewComponent.prototype.scrollEvent;
    /**
     * @type {?}
     * @private
     */
    DropdownViewComponent.prototype.scrollEventSubscription;
    /** @type {?} */
    DropdownViewComponent.prototype.config;
    /** @type {?} */
    DropdownViewComponent.prototype.dataStateService;
    /**
     * @type {?}
     * @private
     */
    DropdownViewComponent.prototype.eventStateService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcGRvd24tdmlldy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9vcm5hbWVudHVtLyIsInNvdXJjZXMiOlsiZHJvcGRvd24vY29tcG9uZW50cy9kcm9wZG93bi12aWV3L2Ryb3Bkb3duLXZpZXcuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFxQixNQUFNLGVBQWUsQ0FBQztBQUU3RCxPQUFPLEVBQWdCLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUM3QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFOUMsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFDL0UsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFDdEYsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sNkNBQTZDLENBQUM7Ozs7QUFLeEY7SUFRRSwrQkFDUyxNQUE2QixFQUM3QixnQkFBMEMsRUFDekMsaUJBQTRDO1FBRjdDLFdBQU0sR0FBTixNQUFNLENBQXVCO1FBQzdCLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBMEI7UUFDekMsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUEyQjtRQU4vQyxnQkFBVyxHQUFHLElBQUksT0FBTyxFQUFPLENBQUM7SUFPckMsQ0FBQztJQUVKOztPQUVHOzs7OztJQUNJLHdDQUFROzs7O0lBQWY7UUFBQSxpQkFJQztRQUhDLElBQUksQ0FBQyx1QkFBdUIsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxTQUFTOzs7O1FBQUMsVUFBQyxLQUFVO1lBQzNGLEtBQUksQ0FBQyxtQkFBbUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNsQyxDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7SUFFRDs7T0FFRzs7Ozs7SUFDSSwyQ0FBVzs7OztJQUFsQjtRQUNFLElBQUksSUFBSSxDQUFDLHVCQUF1QixFQUFFO1lBQ2hDLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxXQUFXLEVBQUUsQ0FBQztTQUM1QztJQUNILENBQUM7SUFFRDs7O09BR0c7Ozs7OztJQUNJLG1EQUFtQjs7Ozs7SUFBMUIsVUFBMkIsS0FBVTs7WUFDN0IsU0FBUyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsU0FBUzs7WUFDbEMsWUFBWSxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsWUFBWTs7WUFDeEMsbUJBQW1CLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxZQUFZOztZQUUvQyxhQUFhLEdBQUcsQ0FBQzs7WUFDakIsV0FBVyxHQUFHLENBQUM7UUFFckIsSUFDRSxTQUFTLElBQUksWUFBWSxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMscUJBQXFCLENBQUMsR0FBRyxtQkFBbUIsR0FBRyxhQUFhLEdBQUcsV0FBVztZQUN2SCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsa0JBQWtCLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGdCQUFnQjtZQUNqRixDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXLEVBQ2xDO1lBQ0EsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7WUFDekMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDO1lBQ2hGLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ3BEO0lBQ0gsQ0FBQzs7Z0JBckRGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsa0JBQWtCO29CQUM1QixraEJBQTZDO2lCQUM5Qzs7OztnQkFWUSxxQkFBcUI7Z0JBQ3JCLHdCQUF3QjtnQkFDeEIseUJBQXlCOztJQTJEbEMsNEJBQUM7Q0FBQSxBQXRERCxJQXNEQztTQWxEWSxxQkFBcUI7OztJQUNoQyw0Q0FBd0M7Ozs7O0lBQ3hDLHdEQUE4Qzs7SUFHNUMsdUNBQW9DOztJQUNwQyxpREFBaUQ7Ozs7O0lBQ2pELGtEQUFvRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25EZXN0cm95LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgU3Vic2NyaXB0aW9uLCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBkZWJvdW5jZVRpbWUgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IERyb3Bkb3duQ29uZmlnU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2Ryb3Bkb3duLWNvbmZpZy5zZXJ2aWNlJztcbmltcG9ydCB7IERyb3Bkb3duRGF0YVN0YXRlU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2Ryb3Bkb3duLWRhdGEtc3RhdGUuc2VydmljZSc7XG5pbXBvcnQgeyBEcm9wZG93bkV2ZW50U3RhdGVTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvZHJvcGRvd24tZXZlbnQtc3RhdGUuc2VydmljZSc7XG5cbi8qKlxuICogRHJvcGRvd24gb3B0aW9ucyBsaXN0IHZpZXcgY29tcG9uZW50XG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25nLWRyb3Bkb3duLXZpZXcnLFxuICB0ZW1wbGF0ZVVybDogJy4vZHJvcGRvd24tdmlldy5jb21wb25lbnQuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgRHJvcGRvd25WaWV3Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBwdWJsaWMgc2Nyb2xsRXZlbnQgPSBuZXcgU3ViamVjdDxhbnk+KCk7XG4gIHByaXZhdGUgc2Nyb2xsRXZlbnRTdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgY29uZmlnOiBEcm9wZG93bkNvbmZpZ1NlcnZpY2UsXG4gICAgcHVibGljIGRhdGFTdGF0ZVNlcnZpY2U6IERyb3Bkb3duRGF0YVN0YXRlU2VydmljZSxcbiAgICBwcml2YXRlIGV2ZW50U3RhdGVTZXJ2aWNlOiBEcm9wZG93bkV2ZW50U3RhdGVTZXJ2aWNlXG4gICkge31cblxuICAvKipcbiAgICogTGlmZWN5Y2xlIGhvb2sgdGhhdCBpcyBjYWxsZWQgd2hlbiBjb21wb25lbnQgaXMgaW5pdGlhbGl6ZWQuXG4gICAqL1xuICBwdWJsaWMgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5zY3JvbGxFdmVudFN1YnNjcmlwdGlvbiA9IHRoaXMuc2Nyb2xsRXZlbnQucGlwZShkZWJvdW5jZVRpbWUoMTAwKSkuc3Vic2NyaWJlKChldmVudDogYW55KSA9PiB7XG4gICAgICB0aGlzLmNoZWNrU2Nyb2xsUG9zaXRpb24oZXZlbnQpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIExpZmVjeWNsZSBob29rIHRoYXQgaXMgY2FsbGVkIHdoZW4gY29tcG9uZW50IGlzIGRlc3Ryb3llZC5cbiAgICovXG4gIHB1YmxpYyBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5zY3JvbGxFdmVudFN1YnNjcmlwdGlvbikge1xuICAgICAgdGhpcy5zY3JvbGxFdmVudFN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBQZXJmb3JtcyBkYXRhIGxvYWRpbmcgd2hlbiBzY3JvbGxpbmcgd2hlbiBzY3JvbGwgdGhyZXNob2xkIGlzIG1ldC4gVGhpcyB3aWxsIGJlIHRyaWdnZXIgb25seSB3aGVuIGxvYWQgb24gc2Nyb2xsIGlzIGVuYWJsZWQuXG4gICAqIEBwYXJhbSBldmVudCBUYXJnZXQgZXZlbnQgYXJndW1lbnRzIHJlZmVyZW5jZS5cbiAgICovXG4gIHB1YmxpYyBjaGVja1Njcm9sbFBvc2l0aW9uKGV2ZW50OiBhbnkpIHtcbiAgICBjb25zdCBzY3JvbGxUb3AgPSBldmVudC50YXJnZXQuc2Nyb2xsVG9wO1xuICAgIGNvbnN0IHNjcm9sbEhlaWdodCA9IGV2ZW50LnRhcmdldC5zY3JvbGxIZWlnaHQ7XG4gICAgY29uc3Qgc2Nyb2xsRWxlbWVudEhlaWdodCA9IGV2ZW50LnRhcmdldC5jbGllbnRIZWlnaHQ7XG5cbiAgICBjb25zdCByb3VuZGluZ1BpeGVsID0gMTtcbiAgICBjb25zdCBndXR0ZXJQaXhlbCA9IDE7XG5cbiAgICBpZiAoXG4gICAgICBzY3JvbGxUb3AgPj0gc2Nyb2xsSGVpZ2h0IC0gKDEgKyB0aGlzLmNvbmZpZy5sb2FkVmlld0Rpc3RhbmNlUmF0aW8pICogc2Nyb2xsRWxlbWVudEhlaWdodCAtIHJvdW5kaW5nUGl4ZWwgLSBndXR0ZXJQaXhlbCAmJlxuICAgICAgdGhpcy5kYXRhU3RhdGVTZXJ2aWNlLmN1cnJlbnRPcHRpb25Db3VudCA8IHRoaXMuZGF0YVN0YXRlU2VydmljZS50b3RhbE9wdGlvbkNvdW50ICYmXG4gICAgICAhdGhpcy5kYXRhU3RhdGVTZXJ2aWNlLmRhdGFMb2FkaW5nXG4gICAgKSB7XG4gICAgICB0aGlzLmRhdGFTdGF0ZVNlcnZpY2UuZGF0YUxvYWRpbmcgPSB0cnVlO1xuICAgICAgdGhpcy5kYXRhU3RhdGVTZXJ2aWNlLm9mZnNldCA9IHRoaXMuZGF0YVN0YXRlU2VydmljZS5vZmZzZXQgKyB0aGlzLmNvbmZpZy5saW1pdDtcbiAgICAgIHRoaXMuZXZlbnRTdGF0ZVNlcnZpY2UuZGF0YUZldGNoU3RyZWFtLmVtaXQoZmFsc2UpO1xuICAgIH1cbiAgfVxufVxuIl19