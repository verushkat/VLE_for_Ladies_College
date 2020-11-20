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
export class DropdownViewComponent {
    /**
     * @param {?} config
     * @param {?} dataStateService
     * @param {?} eventStateService
     */
    constructor(config, dataStateService, eventStateService) {
        this.config = config;
        this.dataStateService = dataStateService;
        this.eventStateService = eventStateService;
        this.scrollEvent = new Subject();
    }
    /**
     * Lifecycle hook that is called when component is initialized.
     * @return {?}
     */
    ngOnInit() {
        this.scrollEventSubscription = this.scrollEvent.pipe(debounceTime(100)).subscribe((/**
         * @param {?} event
         * @return {?}
         */
        (event) => {
            this.checkScrollPosition(event);
        }));
    }
    /**
     * Lifecycle hook that is called when component is destroyed.
     * @return {?}
     */
    ngOnDestroy() {
        if (this.scrollEventSubscription) {
            this.scrollEventSubscription.unsubscribe();
        }
    }
    /**
     * Performs data loading when scrolling when scroll threshold is met. This will be trigger only when load on scroll is enabled.
     * @param {?} event Target event arguments reference.
     * @return {?}
     */
    checkScrollPosition(event) {
        /** @type {?} */
        const scrollTop = event.target.scrollTop;
        /** @type {?} */
        const scrollHeight = event.target.scrollHeight;
        /** @type {?} */
        const scrollElementHeight = event.target.clientHeight;
        /** @type {?} */
        const roundingPixel = 1;
        /** @type {?} */
        const gutterPixel = 1;
        if (scrollTop >= scrollHeight - (1 + this.config.loadViewDistanceRatio) * scrollElementHeight - roundingPixel - gutterPixel &&
            this.dataStateService.currentOptionCount < this.dataStateService.totalOptionCount &&
            !this.dataStateService.dataLoading) {
            this.dataStateService.dataLoading = true;
            this.dataStateService.offset = this.dataStateService.offset + this.config.limit;
            this.eventStateService.dataFetchStream.emit(false);
        }
    }
}
DropdownViewComponent.decorators = [
    { type: Component, args: [{
                selector: 'ng-dropdown-view',
                template: "<div class=\"ng-dropdown-menu-wrapper\"\n  [class.ng-dropdown-option-list]=\"!this.config.filterable\"\n  [style.width]=\"config.menuWidth | ngPx\"\n  [style.height]=\"config.menuHeight | ngPx\">\n  <div class=\"ng-dropdown-filter-wrapper\" *ngIf=\"config.filterable\">\n    <ng-dropdown-filter></ng-dropdown-filter>\n  </div>\n  <div class=\"ng-dropdown-option-container-wrapper\" (scroll)=\"config.loadOnScroll ? scrollEvent.next($event) : null\">\n    <ng-dropdown-options></ng-dropdown-options>\n  </div>\n</div>\n"
            }] }
];
/** @nocollapse */
DropdownViewComponent.ctorParameters = () => [
    { type: DropdownConfigService },
    { type: DropdownDataStateService },
    { type: DropdownEventStateService }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcGRvd24tdmlldy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9vcm5hbWVudHVtLyIsInNvdXJjZXMiOlsiZHJvcGRvd24vY29tcG9uZW50cy9kcm9wZG93bi12aWV3L2Ryb3Bkb3duLXZpZXcuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFxQixNQUFNLGVBQWUsQ0FBQztBQUU3RCxPQUFPLEVBQWdCLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUM3QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFOUMsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFDL0UsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFDdEYsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sNkNBQTZDLENBQUM7Ozs7QUFTeEYsTUFBTSxPQUFPLHFCQUFxQjs7Ozs7O0lBSWhDLFlBQ1MsTUFBNkIsRUFDN0IsZ0JBQTBDLEVBQ3pDLGlCQUE0QztRQUY3QyxXQUFNLEdBQU4sTUFBTSxDQUF1QjtRQUM3QixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQTBCO1FBQ3pDLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBMkI7UUFOL0MsZ0JBQVcsR0FBRyxJQUFJLE9BQU8sRUFBTyxDQUFDO0lBT3JDLENBQUM7Ozs7O0lBS0csUUFBUTtRQUNiLElBQUksQ0FBQyx1QkFBdUIsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxTQUFTOzs7O1FBQUMsQ0FBQyxLQUFVLEVBQUUsRUFBRTtZQUMvRixJQUFJLENBQUMsbUJBQW1CLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDbEMsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7OztJQUtNLFdBQVc7UUFDaEIsSUFBSSxJQUFJLENBQUMsdUJBQXVCLEVBQUU7WUFDaEMsSUFBSSxDQUFDLHVCQUF1QixDQUFDLFdBQVcsRUFBRSxDQUFDO1NBQzVDO0lBQ0gsQ0FBQzs7Ozs7O0lBTU0sbUJBQW1CLENBQUMsS0FBVTs7Y0FDN0IsU0FBUyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsU0FBUzs7Y0FDbEMsWUFBWSxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsWUFBWTs7Y0FDeEMsbUJBQW1CLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxZQUFZOztjQUUvQyxhQUFhLEdBQUcsQ0FBQzs7Y0FDakIsV0FBVyxHQUFHLENBQUM7UUFFckIsSUFDRSxTQUFTLElBQUksWUFBWSxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMscUJBQXFCLENBQUMsR0FBRyxtQkFBbUIsR0FBRyxhQUFhLEdBQUcsV0FBVztZQUN2SCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsa0JBQWtCLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGdCQUFnQjtZQUNqRixDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXLEVBQ2xDO1lBQ0EsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7WUFDekMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDO1lBQ2hGLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ3BEO0lBQ0gsQ0FBQzs7O1lBckRGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsa0JBQWtCO2dCQUM1QixraEJBQTZDO2FBQzlDOzs7O1lBVlEscUJBQXFCO1lBQ3JCLHdCQUF3QjtZQUN4Qix5QkFBeUI7Ozs7SUFVaEMsNENBQXdDOzs7OztJQUN4Qyx3REFBOEM7O0lBRzVDLHVDQUFvQzs7SUFDcEMsaURBQWlEOzs7OztJQUNqRCxrREFBb0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uRGVzdHJveSwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFN1YnNjcmlwdGlvbiwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZGVib3VuY2VUaW1lIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBEcm9wZG93bkNvbmZpZ1NlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9kcm9wZG93bi1jb25maWcuc2VydmljZSc7XG5pbXBvcnQgeyBEcm9wZG93bkRhdGFTdGF0ZVNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9kcm9wZG93bi1kYXRhLXN0YXRlLnNlcnZpY2UnO1xuaW1wb3J0IHsgRHJvcGRvd25FdmVudFN0YXRlU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2Ryb3Bkb3duLWV2ZW50LXN0YXRlLnNlcnZpY2UnO1xuXG4vKipcbiAqIERyb3Bkb3duIG9wdGlvbnMgbGlzdCB2aWV3IGNvbXBvbmVudFxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduZy1kcm9wZG93bi12aWV3JyxcbiAgdGVtcGxhdGVVcmw6ICcuL2Ryb3Bkb3duLXZpZXcuY29tcG9uZW50Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIERyb3Bkb3duVmlld0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgcHVibGljIHNjcm9sbEV2ZW50ID0gbmV3IFN1YmplY3Q8YW55PigpO1xuICBwcml2YXRlIHNjcm9sbEV2ZW50U3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIGNvbmZpZzogRHJvcGRvd25Db25maWdTZXJ2aWNlLFxuICAgIHB1YmxpYyBkYXRhU3RhdGVTZXJ2aWNlOiBEcm9wZG93bkRhdGFTdGF0ZVNlcnZpY2UsXG4gICAgcHJpdmF0ZSBldmVudFN0YXRlU2VydmljZTogRHJvcGRvd25FdmVudFN0YXRlU2VydmljZVxuICApIHt9XG5cbiAgLyoqXG4gICAqIExpZmVjeWNsZSBob29rIHRoYXQgaXMgY2FsbGVkIHdoZW4gY29tcG9uZW50IGlzIGluaXRpYWxpemVkLlxuICAgKi9cbiAgcHVibGljIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuc2Nyb2xsRXZlbnRTdWJzY3JpcHRpb24gPSB0aGlzLnNjcm9sbEV2ZW50LnBpcGUoZGVib3VuY2VUaW1lKDEwMCkpLnN1YnNjcmliZSgoZXZlbnQ6IGFueSkgPT4ge1xuICAgICAgdGhpcy5jaGVja1Njcm9sbFBvc2l0aW9uKGV2ZW50KTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBMaWZlY3ljbGUgaG9vayB0aGF0IGlzIGNhbGxlZCB3aGVuIGNvbXBvbmVudCBpcyBkZXN0cm95ZWQuXG4gICAqL1xuICBwdWJsaWMgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuc2Nyb2xsRXZlbnRTdWJzY3JpcHRpb24pIHtcbiAgICAgIHRoaXMuc2Nyb2xsRXZlbnRTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUGVyZm9ybXMgZGF0YSBsb2FkaW5nIHdoZW4gc2Nyb2xsaW5nIHdoZW4gc2Nyb2xsIHRocmVzaG9sZCBpcyBtZXQuIFRoaXMgd2lsbCBiZSB0cmlnZ2VyIG9ubHkgd2hlbiBsb2FkIG9uIHNjcm9sbCBpcyBlbmFibGVkLlxuICAgKiBAcGFyYW0gZXZlbnQgVGFyZ2V0IGV2ZW50IGFyZ3VtZW50cyByZWZlcmVuY2UuXG4gICAqL1xuICBwdWJsaWMgY2hlY2tTY3JvbGxQb3NpdGlvbihldmVudDogYW55KSB7XG4gICAgY29uc3Qgc2Nyb2xsVG9wID0gZXZlbnQudGFyZ2V0LnNjcm9sbFRvcDtcbiAgICBjb25zdCBzY3JvbGxIZWlnaHQgPSBldmVudC50YXJnZXQuc2Nyb2xsSGVpZ2h0O1xuICAgIGNvbnN0IHNjcm9sbEVsZW1lbnRIZWlnaHQgPSBldmVudC50YXJnZXQuY2xpZW50SGVpZ2h0O1xuXG4gICAgY29uc3Qgcm91bmRpbmdQaXhlbCA9IDE7XG4gICAgY29uc3QgZ3V0dGVyUGl4ZWwgPSAxO1xuXG4gICAgaWYgKFxuICAgICAgc2Nyb2xsVG9wID49IHNjcm9sbEhlaWdodCAtICgxICsgdGhpcy5jb25maWcubG9hZFZpZXdEaXN0YW5jZVJhdGlvKSAqIHNjcm9sbEVsZW1lbnRIZWlnaHQgLSByb3VuZGluZ1BpeGVsIC0gZ3V0dGVyUGl4ZWwgJiZcbiAgICAgIHRoaXMuZGF0YVN0YXRlU2VydmljZS5jdXJyZW50T3B0aW9uQ291bnQgPCB0aGlzLmRhdGFTdGF0ZVNlcnZpY2UudG90YWxPcHRpb25Db3VudCAmJlxuICAgICAgIXRoaXMuZGF0YVN0YXRlU2VydmljZS5kYXRhTG9hZGluZ1xuICAgICkge1xuICAgICAgdGhpcy5kYXRhU3RhdGVTZXJ2aWNlLmRhdGFMb2FkaW5nID0gdHJ1ZTtcbiAgICAgIHRoaXMuZGF0YVN0YXRlU2VydmljZS5vZmZzZXQgPSB0aGlzLmRhdGFTdGF0ZVNlcnZpY2Uub2Zmc2V0ICsgdGhpcy5jb25maWcubGltaXQ7XG4gICAgICB0aGlzLmV2ZW50U3RhdGVTZXJ2aWNlLmRhdGFGZXRjaFN0cmVhbS5lbWl0KGZhbHNlKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==