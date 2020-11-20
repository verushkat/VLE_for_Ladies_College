/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, TemplateRef } from '@angular/core';
import { DataTableConfigService } from '../../services/data-table-config.service';
import { DataTableDataStateService } from '../../services/data-table-data-state.service';
/**
 * Data loading spinner component. Displayed within table body while fetching data.
 */
var DataTableLoadingSpinnerComponent = /** @class */ (function () {
    function DataTableLoadingSpinnerComponent(config, dataStateService) {
        this.config = config;
        this.dataStateService = dataStateService;
    }
    DataTableLoadingSpinnerComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ng-data-table-loading-spinner',
                    template: "<div class=\"ng-data-table-loading-spinner\" [hidden]=\"!isLoading\">\n  <div *ngIf=\"loadingSpinnerTemplate\" class=\"ng-data-table-loading-cover\">\n    <div [ngTemplateOutlet]=\"loadingSpinnerTemplate\"></div>\n  </div>\n  <div class=\"ng-data-table-loading-cover\" [class.ng-data-table-show-overlay]=\"showOverlay\" *ngIf=\"!loadingSpinnerTemplate\">\n    <div class=\"ng-data-table-loading-animation\"></div>\n  </div>\n</div>\n"
                }] }
    ];
    /** @nocollapse */
    DataTableLoadingSpinnerComponent.ctorParameters = function () { return [
        { type: DataTableConfigService },
        { type: DataTableDataStateService }
    ]; };
    DataTableLoadingSpinnerComponent.propDecorators = {
        loadingSpinnerTemplate: [{ type: Input }],
        isLoading: [{ type: Input }],
        showOverlay: [{ type: Input }]
    };
    return DataTableLoadingSpinnerComponent;
}());
export { DataTableLoadingSpinnerComponent };
if (false) {
    /** @type {?} */
    DataTableLoadingSpinnerComponent.prototype.loadingSpinnerTemplate;
    /** @type {?} */
    DataTableLoadingSpinnerComponent.prototype.isLoading;
    /** @type {?} */
    DataTableLoadingSpinnerComponent.prototype.showOverlay;
    /** @type {?} */
    DataTableLoadingSpinnerComponent.prototype.config;
    /** @type {?} */
    DataTableLoadingSpinnerComponent.prototype.dataStateService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS10YWJsZS1sb2FkaW5nLXNwaW5uZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vb3JuYW1lbnR1bS8iLCJzb3VyY2VzIjpbImRhdGEtdGFibGUvY29tcG9uZW50cy9kYXRhLXRhYmxlLWxvYWRpbmctc3Bpbm5lci9kYXRhLXRhYmxlLWxvYWRpbmctc3Bpbm5lci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLFdBQVcsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUU5RCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUNsRixPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSw4Q0FBOEMsQ0FBQzs7OztBQUt6RjtJQWNFLDBDQUFtQixNQUE4QixFQUFTLGdCQUEyQztRQUFsRixXQUFNLEdBQU4sTUFBTSxDQUF3QjtRQUFTLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBMkI7SUFBRyxDQUFDOztnQkFkMUcsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSwrQkFBK0I7b0JBQ3pDLDZiQUEwRDtpQkFDM0Q7Ozs7Z0JBVFEsc0JBQXNCO2dCQUN0Qix5QkFBeUI7Ozt5Q0FVL0IsS0FBSzs0QkFHTCxLQUFLOzhCQUdMLEtBQUs7O0lBSVIsdUNBQUM7Q0FBQSxBQWZELElBZUM7U0FYWSxnQ0FBZ0M7OztJQUMzQyxrRUFDZ0Q7O0lBRWhELHFEQUMwQjs7SUFFMUIsdURBQzRCOztJQUVoQixrREFBcUM7O0lBQUUsNERBQWtEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgVGVtcGxhdGVSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgRGF0YVRhYmxlQ29uZmlnU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2RhdGEtdGFibGUtY29uZmlnLnNlcnZpY2UnO1xuaW1wb3J0IHsgRGF0YVRhYmxlRGF0YVN0YXRlU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2RhdGEtdGFibGUtZGF0YS1zdGF0ZS5zZXJ2aWNlJztcblxuLyoqXG4gKiBEYXRhIGxvYWRpbmcgc3Bpbm5lciBjb21wb25lbnQuIERpc3BsYXllZCB3aXRoaW4gdGFibGUgYm9keSB3aGlsZSBmZXRjaGluZyBkYXRhLlxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduZy1kYXRhLXRhYmxlLWxvYWRpbmctc3Bpbm5lcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9kYXRhLXRhYmxlLWxvYWRpbmctc3Bpbm5lci5jb21wb25lbnQuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgRGF0YVRhYmxlTG9hZGluZ1NwaW5uZXJDb21wb25lbnQge1xuICBASW5wdXQoKVxuICBwdWJsaWMgbG9hZGluZ1NwaW5uZXJUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcblxuICBASW5wdXQoKVxuICBwdWJsaWMgaXNMb2FkaW5nOiBib29sZWFuO1xuXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzaG93T3ZlcmxheTogYm9vbGVhbjtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgY29uZmlnOiBEYXRhVGFibGVDb25maWdTZXJ2aWNlLCBwdWJsaWMgZGF0YVN0YXRlU2VydmljZTogRGF0YVRhYmxlRGF0YVN0YXRlU2VydmljZSkge31cbn1cbiJdfQ==