/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { ReplaySubject, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { get } from '../../utility/services/object-utility.class';
/**
 * Dropdown resource service. Dropdown client side data query is handled via this service.
 * @template T
 */
var DropdownResourceService = /** @class */ (function () {
    function DropdownResourceService() {
    }
    /**
     * Set source data source.
     * @param dataSource Data source observable.
     */
    /**
     * Set source data source.
     * @param {?} dataSource Data source observable.
     * @return {?}
     */
    DropdownResourceService.prototype.setDataSource = /**
     * Set source data source.
     * @param {?} dataSource Data source observable.
     * @return {?}
     */
    function (dataSource) {
        var _this = this;
        this.dispose();
        if (this.optionDataStream && !this.optionDataStream.closed) {
            this.optionDataStream.complete();
        }
        this.optionDataStream = new ReplaySubject(1);
        this.dataSourceSubscription = dataSource.subscribe((/**
         * @param {?} options
         * @return {?}
         */
        function (options) {
            _this.optionDataStream.next(options);
        }));
    };
    /**
     * Query data.
     * @param params Dropdown request parameters.
     */
    /**
     * Query data.
     * @param {?} params Dropdown request parameters.
     * @return {?}
     */
    DropdownResourceService.prototype.query = /**
     * Query data.
     * @param {?} params Dropdown request parameters.
     * @return {?}
     */
    function (params) {
        return this.optionDataStream.pipe(switchMap((/**
         * @param {?} options
         * @return {?}
         */
        function (options) {
            /** @type {?} */
            var result = options.slice();
            if (params.filter && params.filter.value) {
                /** @type {?} */
                var value_1 = String(params.filter.value).toLowerCase();
                result = result.filter((/**
                 * @param {?} option
                 * @return {?}
                 */
                function (option) {
                    /** @type {?} */
                    var key = String(get(option, params.filter.key)).toLowerCase();
                    return key.includes(value_1);
                }));
            }
            if (params.offset !== undefined) {
                /** @type {?} */
                var offset = params.offset + 1 > result.length ? 0 : params.offset;
                if (params.limit === undefined) {
                    result = result.slice(offset, result.length);
                }
                else {
                    result = result.slice(offset, offset + params.limit);
                }
            }
            return of({
                options: result,
                count: options.length
            });
        })));
    };
    /**
     * Dispose data source.
     */
    /**
     * Dispose data source.
     * @return {?}
     */
    DropdownResourceService.prototype.dispose = /**
     * Dispose data source.
     * @return {?}
     */
    function () {
        if (this.dataSourceSubscription) {
            this.dataSourceSubscription.unsubscribe();
            this.dataSourceSubscription = null;
        }
        if (this.optionDataStream && !this.optionDataStream.closed) {
            this.optionDataStream.complete();
        }
    };
    DropdownResourceService.decorators = [
        { type: Injectable }
    ];
    return DropdownResourceService;
}());
export { DropdownResourceService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    DropdownResourceService.prototype.optionDataStream;
    /**
     * @type {?}
     * @private
     */
    DropdownResourceService.prototype.dataSourceSubscription;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcGRvd24tcmVzb3VyY2Uuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL29ybmFtZW50dW0vIiwic291cmNlcyI6WyJkcm9wZG93bi9zZXJ2aWNlcy9kcm9wZG93bi1yZXNvdXJjZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxhQUFhLEVBQWMsRUFBRSxFQUFnQixNQUFNLE1BQU0sQ0FBQztBQUNuRSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFM0MsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLDZDQUE2QyxDQUFDOzs7OztBQVFsRTtJQUFBO0lBc0VBLENBQUM7SUFqRUM7OztPQUdHOzs7Ozs7SUFDSSwrQ0FBYTs7Ozs7SUFBcEIsVUFBcUIsVUFBMkI7UUFBaEQsaUJBV0M7UUFWQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7UUFFZixJQUFJLElBQUksQ0FBQyxnQkFBZ0IsSUFBSSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLEVBQUU7WUFDMUQsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsRUFBRSxDQUFDO1NBQ2xDO1FBRUQsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksYUFBYSxDQUFNLENBQUMsQ0FBQyxDQUFDO1FBQ2xELElBQUksQ0FBQyxzQkFBc0IsR0FBRyxVQUFVLENBQUMsU0FBUzs7OztRQUFDLFVBQUMsT0FBWTtZQUM5RCxLQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3RDLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQztJQUVEOzs7T0FHRzs7Ozs7O0lBQ0ksdUNBQUs7Ozs7O0lBQVosVUFBYSxNQUE2QjtRQUN4QyxPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQy9CLFNBQVM7Ozs7UUFBQyxVQUFDLE9BQVk7O2dCQUNqQixNQUFNLEdBQVEsT0FBTyxDQUFDLEtBQUssRUFBRTtZQUVqQyxJQUFJLE1BQU0sQ0FBQyxNQUFNLElBQUksTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUU7O29CQUNsQyxPQUFLLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsV0FBVyxFQUFFO2dCQUN2RCxNQUFNLEdBQUcsTUFBTSxDQUFDLE1BQU07Ozs7Z0JBQUMsVUFBQyxNQUFTOzt3QkFDekIsR0FBRyxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxXQUFXLEVBQUU7b0JBQ2hFLE9BQU8sR0FBRyxDQUFDLFFBQVEsQ0FBQyxPQUFLLENBQUMsQ0FBQztnQkFDN0IsQ0FBQyxFQUFDLENBQUM7YUFDSjtZQUVELElBQUksTUFBTSxDQUFDLE1BQU0sS0FBSyxTQUFTLEVBQUU7O29CQUN6QixNQUFNLEdBQUcsTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsTUFBTTtnQkFFcEUsSUFBSSxNQUFNLENBQUMsS0FBSyxLQUFLLFNBQVMsRUFBRTtvQkFDOUIsTUFBTSxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztpQkFDOUM7cUJBQU07b0JBQ0wsTUFBTSxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLE1BQU0sR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7aUJBQ3REO2FBQ0Y7WUFFRCxPQUFPLEVBQUUsQ0FBQztnQkFDUixPQUFPLEVBQUUsTUFBTTtnQkFDZixLQUFLLEVBQUUsT0FBTyxDQUFDLE1BQU07YUFDdEIsQ0FBQyxDQUFDO1FBQ0wsQ0FBQyxFQUFDLENBQ0gsQ0FBQztJQUNKLENBQUM7SUFFRDs7T0FFRzs7Ozs7SUFDSSx5Q0FBTzs7OztJQUFkO1FBQ0UsSUFBSSxJQUFJLENBQUMsc0JBQXNCLEVBQUU7WUFDL0IsSUFBSSxDQUFDLHNCQUFzQixDQUFDLFdBQVcsRUFBRSxDQUFDO1lBQzFDLElBQUksQ0FBQyxzQkFBc0IsR0FBRyxJQUFJLENBQUM7U0FDcEM7UUFFRCxJQUFJLElBQUksQ0FBQyxnQkFBZ0IsSUFBSSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLEVBQUU7WUFDMUQsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsRUFBRSxDQUFDO1NBQ2xDO0lBQ0gsQ0FBQzs7Z0JBckVGLFVBQVU7O0lBc0VYLDhCQUFDO0NBQUEsQUF0RUQsSUFzRUM7U0FyRVksdUJBQXVCOzs7Ozs7SUFDbEMsbURBQTZDOzs7OztJQUM3Qyx5REFBNkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFJlcGxheVN1YmplY3QsIE9ic2VydmFibGUsIG9mLCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHN3aXRjaE1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgZ2V0IH0gZnJvbSAnLi4vLi4vdXRpbGl0eS9zZXJ2aWNlcy9vYmplY3QtdXRpbGl0eS5jbGFzcyc7XG5cbmltcG9ydCB7IERyb3Bkb3duUXVlcnlSZXN1bHQgfSBmcm9tICcuLi9tb2RlbHMvZHJvcGRvd24tcXVlcnktcmVzdWx0Lm1vZGVsJztcbmltcG9ydCB7IERyb3Bkb3duUmVxdWVzdFBhcmFtcyB9IGZyb20gJy4uL21vZGVscy9kcm9wZG93bi1yZXF1ZXN0LXBhcmFtcy5tb2RlbCc7XG5cbi8qKlxuICogRHJvcGRvd24gcmVzb3VyY2Ugc2VydmljZS4gRHJvcGRvd24gY2xpZW50IHNpZGUgZGF0YSBxdWVyeSBpcyBoYW5kbGVkIHZpYSB0aGlzIHNlcnZpY2UuXG4gKi9cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBEcm9wZG93blJlc291cmNlU2VydmljZTxUPiB7XG4gIHByaXZhdGUgb3B0aW9uRGF0YVN0cmVhbTogUmVwbGF5U3ViamVjdDxUW10+O1xuICBwcml2YXRlIGRhdGFTb3VyY2VTdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcblxuICAvKipcbiAgICogU2V0IHNvdXJjZSBkYXRhIHNvdXJjZS5cbiAgICogQHBhcmFtIGRhdGFTb3VyY2UgRGF0YSBzb3VyY2Ugb2JzZXJ2YWJsZS5cbiAgICovXG4gIHB1YmxpYyBzZXREYXRhU291cmNlKGRhdGFTb3VyY2U6IE9ic2VydmFibGU8VFtdPik6IHZvaWQge1xuICAgIHRoaXMuZGlzcG9zZSgpO1xuXG4gICAgaWYgKHRoaXMub3B0aW9uRGF0YVN0cmVhbSAmJiAhdGhpcy5vcHRpb25EYXRhU3RyZWFtLmNsb3NlZCkge1xuICAgICAgdGhpcy5vcHRpb25EYXRhU3RyZWFtLmNvbXBsZXRlKCk7XG4gICAgfVxuXG4gICAgdGhpcy5vcHRpb25EYXRhU3RyZWFtID0gbmV3IFJlcGxheVN1YmplY3Q8VFtdPigxKTtcbiAgICB0aGlzLmRhdGFTb3VyY2VTdWJzY3JpcHRpb24gPSBkYXRhU291cmNlLnN1YnNjcmliZSgob3B0aW9uczogVFtdKSA9PiB7XG4gICAgICB0aGlzLm9wdGlvbkRhdGFTdHJlYW0ubmV4dChvcHRpb25zKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBRdWVyeSBkYXRhLlxuICAgKiBAcGFyYW0gcGFyYW1zIERyb3Bkb3duIHJlcXVlc3QgcGFyYW1ldGVycy5cbiAgICovXG4gIHB1YmxpYyBxdWVyeShwYXJhbXM6IERyb3Bkb3duUmVxdWVzdFBhcmFtcyk6IE9ic2VydmFibGU8RHJvcGRvd25RdWVyeVJlc3VsdDxUPj4ge1xuICAgIHJldHVybiB0aGlzLm9wdGlvbkRhdGFTdHJlYW0ucGlwZShcbiAgICAgIHN3aXRjaE1hcCgob3B0aW9uczogVFtdKSA9PiB7XG4gICAgICAgIGxldCByZXN1bHQ6IFRbXSA9IG9wdGlvbnMuc2xpY2UoKTtcblxuICAgICAgICBpZiAocGFyYW1zLmZpbHRlciAmJiBwYXJhbXMuZmlsdGVyLnZhbHVlKSB7XG4gICAgICAgICAgY29uc3QgdmFsdWUgPSBTdHJpbmcocGFyYW1zLmZpbHRlci52YWx1ZSkudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgICByZXN1bHQgPSByZXN1bHQuZmlsdGVyKChvcHRpb246IFQpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGtleSA9IFN0cmluZyhnZXQob3B0aW9uLCBwYXJhbXMuZmlsdGVyLmtleSkpLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgICAgICByZXR1cm4ga2V5LmluY2x1ZGVzKHZhbHVlKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwYXJhbXMub2Zmc2V0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBjb25zdCBvZmZzZXQgPSBwYXJhbXMub2Zmc2V0ICsgMSA+IHJlc3VsdC5sZW5ndGggPyAwIDogcGFyYW1zLm9mZnNldDtcblxuICAgICAgICAgIGlmIChwYXJhbXMubGltaXQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmVzdWx0ID0gcmVzdWx0LnNsaWNlKG9mZnNldCwgcmVzdWx0Lmxlbmd0aCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJlc3VsdCA9IHJlc3VsdC5zbGljZShvZmZzZXQsIG9mZnNldCArIHBhcmFtcy5saW1pdCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG9mKHtcbiAgICAgICAgICBvcHRpb25zOiByZXN1bHQsXG4gICAgICAgICAgY291bnQ6IG9wdGlvbnMubGVuZ3RoXG4gICAgICAgIH0pO1xuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIERpc3Bvc2UgZGF0YSBzb3VyY2UuXG4gICAqL1xuICBwdWJsaWMgZGlzcG9zZSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5kYXRhU291cmNlU3Vic2NyaXB0aW9uKSB7XG4gICAgICB0aGlzLmRhdGFTb3VyY2VTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICAgIHRoaXMuZGF0YVNvdXJjZVN1YnNjcmlwdGlvbiA9IG51bGw7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMub3B0aW9uRGF0YVN0cmVhbSAmJiAhdGhpcy5vcHRpb25EYXRhU3RyZWFtLmNsb3NlZCkge1xuICAgICAgdGhpcy5vcHRpb25EYXRhU3RyZWFtLmNvbXBsZXRlKCk7XG4gICAgfVxuICB9XG59XG4iXX0=