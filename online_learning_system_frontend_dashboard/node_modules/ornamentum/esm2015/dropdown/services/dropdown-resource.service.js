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
export class DropdownResourceService {
    /**
     * Set source data source.
     * @param {?} dataSource Data source observable.
     * @return {?}
     */
    setDataSource(dataSource) {
        this.dispose();
        if (this.optionDataStream && !this.optionDataStream.closed) {
            this.optionDataStream.complete();
        }
        this.optionDataStream = new ReplaySubject(1);
        this.dataSourceSubscription = dataSource.subscribe((/**
         * @param {?} options
         * @return {?}
         */
        (options) => {
            this.optionDataStream.next(options);
        }));
    }
    /**
     * Query data.
     * @param {?} params Dropdown request parameters.
     * @return {?}
     */
    query(params) {
        return this.optionDataStream.pipe(switchMap((/**
         * @param {?} options
         * @return {?}
         */
        (options) => {
            /** @type {?} */
            let result = options.slice();
            if (params.filter && params.filter.value) {
                /** @type {?} */
                const value = String(params.filter.value).toLowerCase();
                result = result.filter((/**
                 * @param {?} option
                 * @return {?}
                 */
                (option) => {
                    /** @type {?} */
                    const key = String(get(option, params.filter.key)).toLowerCase();
                    return key.includes(value);
                }));
            }
            if (params.offset !== undefined) {
                /** @type {?} */
                const offset = params.offset + 1 > result.length ? 0 : params.offset;
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
    }
    /**
     * Dispose data source.
     * @return {?}
     */
    dispose() {
        if (this.dataSourceSubscription) {
            this.dataSourceSubscription.unsubscribe();
            this.dataSourceSubscription = null;
        }
        if (this.optionDataStream && !this.optionDataStream.closed) {
            this.optionDataStream.complete();
        }
    }
}
DropdownResourceService.decorators = [
    { type: Injectable }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcGRvd24tcmVzb3VyY2Uuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL29ybmFtZW50dW0vIiwic291cmNlcyI6WyJkcm9wZG93bi9zZXJ2aWNlcy9kcm9wZG93bi1yZXNvdXJjZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxhQUFhLEVBQWMsRUFBRSxFQUFnQixNQUFNLE1BQU0sQ0FBQztBQUNuRSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFM0MsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLDZDQUE2QyxDQUFDOzs7OztBQVNsRSxNQUFNLE9BQU8sdUJBQXVCOzs7Ozs7SUFRM0IsYUFBYSxDQUFDLFVBQTJCO1FBQzlDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUVmLElBQUksSUFBSSxDQUFDLGdCQUFnQixJQUFJLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sRUFBRTtZQUMxRCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxFQUFFLENBQUM7U0FDbEM7UUFFRCxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxhQUFhLENBQU0sQ0FBQyxDQUFDLENBQUM7UUFDbEQsSUFBSSxDQUFDLHNCQUFzQixHQUFHLFVBQVUsQ0FBQyxTQUFTOzs7O1FBQUMsQ0FBQyxPQUFZLEVBQUUsRUFBRTtZQUNsRSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3RDLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7Ozs7O0lBTU0sS0FBSyxDQUFDLE1BQTZCO1FBQ3hDLE9BQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FDL0IsU0FBUzs7OztRQUFDLENBQUMsT0FBWSxFQUFFLEVBQUU7O2dCQUNyQixNQUFNLEdBQVEsT0FBTyxDQUFDLEtBQUssRUFBRTtZQUVqQyxJQUFJLE1BQU0sQ0FBQyxNQUFNLElBQUksTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUU7O3NCQUNsQyxLQUFLLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsV0FBVyxFQUFFO2dCQUN2RCxNQUFNLEdBQUcsTUFBTSxDQUFDLE1BQU07Ozs7Z0JBQUMsQ0FBQyxNQUFTLEVBQUUsRUFBRTs7MEJBQzdCLEdBQUcsR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUFFO29CQUNoRSxPQUFPLEdBQUcsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQzdCLENBQUMsRUFBQyxDQUFDO2FBQ0o7WUFFRCxJQUFJLE1BQU0sQ0FBQyxNQUFNLEtBQUssU0FBUyxFQUFFOztzQkFDekIsTUFBTSxHQUFHLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLE1BQU07Z0JBRXBFLElBQUksTUFBTSxDQUFDLEtBQUssS0FBSyxTQUFTLEVBQUU7b0JBQzlCLE1BQU0sR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7aUJBQzlDO3FCQUFNO29CQUNMLE1BQU0sR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxNQUFNLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO2lCQUN0RDthQUNGO1lBRUQsT0FBTyxFQUFFLENBQUM7Z0JBQ1IsT0FBTyxFQUFFLE1BQU07Z0JBQ2YsS0FBSyxFQUFFLE9BQU8sQ0FBQyxNQUFNO2FBQ3RCLENBQUMsQ0FBQztRQUNMLENBQUMsRUFBQyxDQUNILENBQUM7SUFDSixDQUFDOzs7OztJQUtNLE9BQU87UUFDWixJQUFJLElBQUksQ0FBQyxzQkFBc0IsRUFBRTtZQUMvQixJQUFJLENBQUMsc0JBQXNCLENBQUMsV0FBVyxFQUFFLENBQUM7WUFDMUMsSUFBSSxDQUFDLHNCQUFzQixHQUFHLElBQUksQ0FBQztTQUNwQztRQUVELElBQUksSUFBSSxDQUFDLGdCQUFnQixJQUFJLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sRUFBRTtZQUMxRCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxFQUFFLENBQUM7U0FDbEM7SUFDSCxDQUFDOzs7WUFyRUYsVUFBVTs7Ozs7OztJQUVULG1EQUE2Qzs7Ozs7SUFDN0MseURBQTZDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBSZXBsYXlTdWJqZWN0LCBPYnNlcnZhYmxlLCBvZiwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBzd2l0Y2hNYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IGdldCB9IGZyb20gJy4uLy4uL3V0aWxpdHkvc2VydmljZXMvb2JqZWN0LXV0aWxpdHkuY2xhc3MnO1xuXG5pbXBvcnQgeyBEcm9wZG93blF1ZXJ5UmVzdWx0IH0gZnJvbSAnLi4vbW9kZWxzL2Ryb3Bkb3duLXF1ZXJ5LXJlc3VsdC5tb2RlbCc7XG5pbXBvcnQgeyBEcm9wZG93blJlcXVlc3RQYXJhbXMgfSBmcm9tICcuLi9tb2RlbHMvZHJvcGRvd24tcmVxdWVzdC1wYXJhbXMubW9kZWwnO1xuXG4vKipcbiAqIERyb3Bkb3duIHJlc291cmNlIHNlcnZpY2UuIERyb3Bkb3duIGNsaWVudCBzaWRlIGRhdGEgcXVlcnkgaXMgaGFuZGxlZCB2aWEgdGhpcyBzZXJ2aWNlLlxuICovXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRHJvcGRvd25SZXNvdXJjZVNlcnZpY2U8VD4ge1xuICBwcml2YXRlIG9wdGlvbkRhdGFTdHJlYW06IFJlcGxheVN1YmplY3Q8VFtdPjtcbiAgcHJpdmF0ZSBkYXRhU291cmNlU3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XG5cbiAgLyoqXG4gICAqIFNldCBzb3VyY2UgZGF0YSBzb3VyY2UuXG4gICAqIEBwYXJhbSBkYXRhU291cmNlIERhdGEgc291cmNlIG9ic2VydmFibGUuXG4gICAqL1xuICBwdWJsaWMgc2V0RGF0YVNvdXJjZShkYXRhU291cmNlOiBPYnNlcnZhYmxlPFRbXT4pOiB2b2lkIHtcbiAgICB0aGlzLmRpc3Bvc2UoKTtcblxuICAgIGlmICh0aGlzLm9wdGlvbkRhdGFTdHJlYW0gJiYgIXRoaXMub3B0aW9uRGF0YVN0cmVhbS5jbG9zZWQpIHtcbiAgICAgIHRoaXMub3B0aW9uRGF0YVN0cmVhbS5jb21wbGV0ZSgpO1xuICAgIH1cblxuICAgIHRoaXMub3B0aW9uRGF0YVN0cmVhbSA9IG5ldyBSZXBsYXlTdWJqZWN0PFRbXT4oMSk7XG4gICAgdGhpcy5kYXRhU291cmNlU3Vic2NyaXB0aW9uID0gZGF0YVNvdXJjZS5zdWJzY3JpYmUoKG9wdGlvbnM6IFRbXSkgPT4ge1xuICAgICAgdGhpcy5vcHRpb25EYXRhU3RyZWFtLm5leHQob3B0aW9ucyk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogUXVlcnkgZGF0YS5cbiAgICogQHBhcmFtIHBhcmFtcyBEcm9wZG93biByZXF1ZXN0IHBhcmFtZXRlcnMuXG4gICAqL1xuICBwdWJsaWMgcXVlcnkocGFyYW1zOiBEcm9wZG93blJlcXVlc3RQYXJhbXMpOiBPYnNlcnZhYmxlPERyb3Bkb3duUXVlcnlSZXN1bHQ8VD4+IHtcbiAgICByZXR1cm4gdGhpcy5vcHRpb25EYXRhU3RyZWFtLnBpcGUoXG4gICAgICBzd2l0Y2hNYXAoKG9wdGlvbnM6IFRbXSkgPT4ge1xuICAgICAgICBsZXQgcmVzdWx0OiBUW10gPSBvcHRpb25zLnNsaWNlKCk7XG5cbiAgICAgICAgaWYgKHBhcmFtcy5maWx0ZXIgJiYgcGFyYW1zLmZpbHRlci52YWx1ZSkge1xuICAgICAgICAgIGNvbnN0IHZhbHVlID0gU3RyaW5nKHBhcmFtcy5maWx0ZXIudmFsdWUpLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgICAgcmVzdWx0ID0gcmVzdWx0LmZpbHRlcigob3B0aW9uOiBUKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBrZXkgPSBTdHJpbmcoZ2V0KG9wdGlvbiwgcGFyYW1zLmZpbHRlci5rZXkpKS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICAgICAgcmV0dXJuIGtleS5pbmNsdWRlcyh2YWx1ZSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocGFyYW1zLm9mZnNldCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgY29uc3Qgb2Zmc2V0ID0gcGFyYW1zLm9mZnNldCArIDEgPiByZXN1bHQubGVuZ3RoID8gMCA6IHBhcmFtcy5vZmZzZXQ7XG5cbiAgICAgICAgICBpZiAocGFyYW1zLmxpbWl0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJlc3VsdCA9IHJlc3VsdC5zbGljZShvZmZzZXQsIHJlc3VsdC5sZW5ndGgpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXN1bHQgPSByZXN1bHQuc2xpY2Uob2Zmc2V0LCBvZmZzZXQgKyBwYXJhbXMubGltaXQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBvZih7XG4gICAgICAgICAgb3B0aW9uczogcmVzdWx0LFxuICAgICAgICAgIGNvdW50OiBvcHRpb25zLmxlbmd0aFxuICAgICAgICB9KTtcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEaXNwb3NlIGRhdGEgc291cmNlLlxuICAgKi9cbiAgcHVibGljIGRpc3Bvc2UoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuZGF0YVNvdXJjZVN1YnNjcmlwdGlvbikge1xuICAgICAgdGhpcy5kYXRhU291cmNlU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgICB0aGlzLmRhdGFTb3VyY2VTdWJzY3JpcHRpb24gPSBudWxsO1xuICAgIH1cblxuICAgIGlmICh0aGlzLm9wdGlvbkRhdGFTdHJlYW0gJiYgIXRoaXMub3B0aW9uRGF0YVN0cmVhbS5jbG9zZWQpIHtcbiAgICAgIHRoaXMub3B0aW9uRGF0YVN0cmVhbS5jb21wbGV0ZSgpO1xuICAgIH1cbiAgfVxufVxuIl19