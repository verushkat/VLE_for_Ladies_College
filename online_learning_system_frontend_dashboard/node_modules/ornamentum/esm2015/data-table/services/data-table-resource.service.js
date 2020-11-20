/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { ReplaySubject, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { orderBy, get } from '../../utility/services/object-utility.class';
/**
 * Data table resource service; Manage data table client side data querying.
 * @template T
 */
export class DataTableResourceService {
    /**
     * Set data source stream to query.
     * @param {?} dataSource Data source stream.
     * @return {?}
     */
    setDataSource(dataSource) {
        this.dispose();
        if (this.itemDataStream && !this.itemDataStream.closed) {
            this.itemDataStream.complete();
        }
        this.itemDataStream = new ReplaySubject(1);
        this.dataSourceSubscription = dataSource.subscribe((/**
         * @param {?} items
         * @return {?}
         */
        (items) => {
            this.itemDataStream.next(items);
        }));
    }
    /**
     * Query items by data table request params.
     * @param {?} params Data table parameters object.
     * @return {?} Query result stream.
     */
    query(params) {
        return this.itemDataStream.pipe(switchMap((/**
         * @param {?} items
         * @return {?}
         */
        (items) => {
            /** @type {?} */
            let itemCount = items.length;
            /** @type {?} */
            let result = items.slice();
            if (params.fields.length) {
                /** @type {?} */
                const filterFields = params.fields.filter((/**
                 * @param {?} field
                 * @return {?}
                 */
                field => field.filterable));
                if (filterFields.length) {
                    result = items.filter((/**
                     * @param {?} item
                     * @return {?}
                     */
                    item => {
                        return filterFields.every((/**
                         * @param {?} filterColumn
                         * @return {?}
                         */
                        (filterColumn) => {
                            if (filterColumn.filterExpression) {
                                return filterColumn.filterExpression(item, filterColumn.field, filterColumn.filterValue);
                            }
                            if (filterColumn.filterValue === undefined || filterColumn.filterValue === '') {
                                return true;
                            }
                            /** @type {?} */
                            const fieldValue = get(item, filterColumn.field);
                            if (fieldValue === undefined) {
                                return true;
                            }
                            if (Array.isArray(filterColumn.filterValue)) {
                                return filterColumn.filterValue.length === 0 || filterColumn.filterValue.includes(fieldValue);
                            }
                            /** @type {?} */
                            const value = String(fieldValue).toLowerCase();
                            /** @type {?} */
                            const filterValue = String(filterColumn.filterValue).toLowerCase();
                            return value.includes(filterValue);
                        }));
                    }));
                    itemCount = result.length;
                }
                /** @type {?} */
                const sortColumns = params.fields.filter((/**
                 * @param {?} column
                 * @return {?}
                 */
                (column) => {
                    return column.sortable && column.sortOrder !== '';
                }));
                if (sortColumns.length) {
                    /** @type {?} */
                    let orderedSortColumns = sortColumns;
                    if (sortColumns.length > 1) {
                        orderedSortColumns = sortColumns.concat().sort((/**
                         * @param {?} a
                         * @param {?} b
                         * @return {?}
                         */
                        (a, b) => {
                            return a.sortPriority - b.sortPriority;
                        }));
                    }
                    /** @type {?} */
                    const orderParams = orderedSortColumns.reduce((/**
                     * @param {?} accumulator
                     * @param {?} column
                     * @return {?}
                     */
                    (accumulator, column) => {
                        if (accumulator) {
                            accumulator.fields.push(column.field);
                            accumulator.orders.push(column.sortOrder);
                        }
                        return accumulator;
                    }), {
                        fields: [],
                        orders: []
                    });
                    result = orderBy(result, orderParams.fields, orderParams.orders);
                }
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
                items: result,
                count: itemCount
            });
        })));
    }
    /**
     * Extract data table filter options.
     * @param {?} filterColumn Data table column component.
     * @return {?} Filter options collection stream.
     */
    extractFilterOptions(filterColumn) {
        return this.itemDataStream.pipe(switchMap((/**
         * @param {?} items
         * @return {?}
         */
        (items) => {
            /** @type {?} */
            const filteredItems = items
                .reduce((/**
             * @param {?} acc
             * @param {?} item
             * @param {?} index
             * @return {?}
             */
            (acc, item, index) => {
                if (filterColumn.filterFieldMapper) {
                    return acc.concat(filterColumn.filterFieldMapper(item, index));
                }
                /** @type {?} */
                const filterField = filterColumn.filterField || filterColumn.field;
                /** @type {?} */
                const filterValue = get(item, filterField);
                acc.push({
                    key: filterValue,
                    value: filterValue
                });
                return acc;
            }), [])
                .filter((/**
             * @param {?} value
             * @param {?} index
             * @param {?} self
             * @return {?}
             */
            (value, index, self) => {
                return self.findIndex((/**
                 * @param {?} item
                 * @return {?}
                 */
                item => item.key === value.key)) === index;
            }));
            return of(filteredItems);
        })));
    }
    /**
     * Dispose client data source streams.
     * @return {?}
     */
    dispose() {
        if (this.dataSourceSubscription) {
            this.dataSourceSubscription.unsubscribe();
            this.dataSourceSubscription = null;
        }
        if (this.itemDataStream && !this.itemDataStream.closed) {
            this.itemDataStream.complete();
        }
    }
}
DataTableResourceService.decorators = [
    { type: Injectable }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    DataTableResourceService.prototype.itemDataStream;
    /**
     * @type {?}
     * @private
     */
    DataTableResourceService.prototype.dataSourceSubscription;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS10YWJsZS1yZXNvdXJjZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vb3JuYW1lbnR1bS8iLCJzb3VyY2VzIjpbImRhdGEtdGFibGUvc2VydmljZXMvZGF0YS10YWJsZS1yZXNvdXJjZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBYyxhQUFhLEVBQWdCLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNuRSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFM0MsT0FBTyxFQUFFLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQzs7Ozs7QUFhM0UsTUFBTSxPQUFPLHdCQUF3Qjs7Ozs7O0lBUTVCLGFBQWEsQ0FBQyxVQUEyQjtRQUM5QyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7UUFFZixJQUFJLElBQUksQ0FBQyxjQUFjLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sRUFBRTtZQUN0RCxJQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsRUFBRSxDQUFDO1NBQ2hDO1FBRUQsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLGFBQWEsQ0FBTSxDQUFDLENBQUMsQ0FBQztRQUNoRCxJQUFJLENBQUMsc0JBQXNCLEdBQUcsVUFBVSxDQUFDLFNBQVM7Ozs7UUFBQyxDQUFDLEtBQVUsRUFBRSxFQUFFO1lBQ2hFLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2xDLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7Ozs7O0lBT00sS0FBSyxDQUFDLE1BQThCO1FBQ3pDLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQzdCLFNBQVM7Ozs7UUFBQyxDQUFDLEtBQVUsRUFBRSxFQUFFOztnQkFDbkIsU0FBUyxHQUFHLEtBQUssQ0FBQyxN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QUNoRTs7c0JBRUssV0FBVyxHQUFHLFlBQVksQ0FBQyxXQUFXLElBQUksWUFBWSxDQUFDLEtBQUs7O3NCQUM1RCxXQUFXLEdBQUcsR0FBRyxDQUFDLElBQUksRUFBRSxXQUFXLENBQUM7Z0JBQzFDLEdBQUcsQ0FBQyxJQUFJLENBQUM7b0JBQ1AsR0FBRyxFQUFFLFdBQVc7b0JBQ2hCLEtBQUssRUFBRSxXQUFXO2lCQUNuQixDQUFDLENBQUM7Z0JBRUgsT0FBTyxHQUFHLENBQUM7WUFDYixDQUFDLEdBQUUsRUFBRSxDQUFDO2lCQUNMLE1BQU07Ozs7OztZQUFDLENBQUMsS0FBNEIsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEVBQUU7Z0JBQ3BELE9BQU8sSUFBSSxDQUFDLFNBQVM7Ozs7Z0JBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxLQUFLLEtBQUssQ0FBQyxHQUFHLEVBQUMsS0FBSyxLQUFLLENBQUM7WUFDbEUsQ0FBQyxFQUFDO1lBRUosT0FBTyxFQUFFLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDM0IsQ0FBQyxFQUFDLENBQ0gsQ0FBQztJQUNKLENBQUM7Ozs7O0lBS00sT0FBTztRQUNaLElBQUksSUFBSSxDQUFDLHNCQUFzQixFQUFFO1lBQy9CLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxXQUFXLEVBQUUsQ0FBQztZQUMxQyxJQUFJLENBQUMsc0JBQXNCLEdBQUcsSUFBSSxDQUFDO1NBQ3BDO1FBRUQsSUFBSSxJQUFJLENBQUMsY0FBYyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLEVBQUU7WUFDdEQsSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLEVBQUUsQ0FBQztTQUNoQztJQUNILENBQUM7OztZQTVKRixVQUFVOzs7Ozs7O0lBRVQsa0RBQTJDOzs7OztJQUMzQywwREFBNkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IE9ic2VydmFibGUsIFJlcGxheVN1YmplY3QsIFN1YnNjcmlwdGlvbiwgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHN3aXRjaE1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgb3JkZXJCeSwgZ2V0IH0gZnJvbSAnLi4vLi4vdXRpbGl0eS9zZXJ2aWNlcy9vYmplY3QtdXRpbGl0eS5jbGFzcyc7XG5cbmltcG9ydCB7IERhdGFUYWJsZVJlcXVlc3RQYXJhbXMgfSBmcm9tICcuLi9tb2RlbHMvZGF0YS10YWJsZS1yZXF1ZXN0LXBhcmFtcy5tb2RlbCc7XG5pbXBvcnQgeyBEYXRhVGFibGVRdWVyeVJlc3VsdCB9IGZyb20gJy4uL21vZGVscy9kYXRhLXRhYmxlLXF1ZXJ5LXJlc3VsdC5tb2RlbCc7XG5pbXBvcnQgeyBEYXRhVGFibGVGaWx0ZXJPcHRpb24gfSBmcm9tICcuLi9tb2RlbHMvZGF0YS10YWJsZS1maWx0ZXItb3B0aW9uLm1vZGVsJztcbmltcG9ydCB7IERhdGFUYWJsZVF1ZXJ5RmllbGQgfSBmcm9tICcuLi9tb2RlbHMvZGF0YS10YWJsZS1xdWVyeS1maWVsZC5tb2RlbCc7XG5cbmltcG9ydCB7IERhdGFUYWJsZUNvbHVtbkNvbXBvbmVudCB9IGZyb20gJy4uL2NvbXBvbmVudHMvZGF0YS10YWJsZS1jb2x1bW4vZGF0YS10YWJsZS1jb2x1bW4uY29tcG9uZW50JztcblxuLyoqXG4gKiBEYXRhIHRhYmxlIHJlc291cmNlIHNlcnZpY2U7IE1hbmFnZSBkYXRhIHRhYmxlIGNsaWVudCBzaWRlIGRhdGEgcXVlcnlpbmcuXG4gKi9cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBEYXRhVGFibGVSZXNvdXJjZVNlcnZpY2U8VD4ge1xuICBwcml2YXRlIGl0ZW1EYXRhU3RyZWFtOiBSZXBsYXlTdWJqZWN0PFRbXT47XG4gIHByaXZhdGUgZGF0YVNvdXJjZVN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuXG4gIC8qKlxuICAgKiBTZXQgZGF0YSBzb3VyY2Ugc3RyZWFtIHRvIHF1ZXJ5LlxuICAgKiBAcGFyYW0gZGF0YVNvdXJjZSBEYXRhIHNvdXJjZSBzdHJlYW0uXG4gICAqL1xuICBwdWJsaWMgc2V0RGF0YVNvdXJjZShkYXRhU291cmNlOiBPYnNlcnZhYmxlPFRbXT4pOiB2b2lkIHtcbiAgICB0aGlzLmRpc3Bvc2UoKTtcblxuICAgIGlmICh0aGlzLml0ZW1EYXRhU3RyZWFtICYmICF0aGlzLml0ZW1EYXRhU3RyZWFtLmNsb3NlZCkge1xuICAgICAgdGhpcy5pdGVtRGF0YVN0cmVhbS5jb21wbGV0ZSgpO1xuICAgIH1cblxuICAgIHRoaXMuaXRlbURhdGFTdHJlYW0gPSBuZXcgUmVwbGF5U3ViamVjdDxUW10+KDEpO1xuICAgIHRoaXMuZGF0YVNvdXJjZVN1YnNjcmlwdGlvbiA9IGRhdGFTb3VyY2Uuc3Vic2NyaWJlKChpdGVtczogVFtdKSA9PiB7XG4gICAgICB0aGlzLml0ZW1EYXRhU3RyZWFtLm5leHQoaXRlbXMpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFF1ZXJ5IGl0ZW1zIGJ5IGRhdGEgdGFibGUgcmVxdWVzdCBwYXJhbXMuXG4gICAqIEBwYXJhbSBwYXJhbXMgRGF0YSB0YWJsZSBwYXJhbWV0ZXJzIG9iamVjdC5cbiAgICogQHJldHVybiBRdWVyeSByZXN1bHQgc3RyZWFtLlxuICAgKi9cbiAgcHVibGljIHF1ZXJ5KHBhcmFtczogRGF0YVRhYmxlUmVxdWVzdFBhcmFtcyk6IE9ic2VydmFibGU8RGF0YVRhYmxlUXVlcnlSZXN1bHQ8VD4+IHtcbiAgICByZXR1cm4gdGhpcy5pdGVtRGF0YVN0cmVhbS5waXBlKFxuICAgICAgc3dpdGNoTWFwKChpdGVtczogVFtdKSA9PiB7XG4gICAgICAgIGxldCBpdGVtQ291bnQgPSBpdGVtcy5sZW5ndGg7XG4gICAgICAgIGxldCByZXN1bHQ6IFRbXSA9IGl0ZW1zLnNsaWNlKCk7XG5cbiAgICAgICAgaWYgKHBhcmFtcy5maWVsZHMubGVuZ3RoKSB7XG4gICAgICAgICAgY29uc3QgZmlsdGVyRmllbGRzID0gcGFyYW1zLmZpZWxkcy5maWx0ZXIoZmllbGQgPT4gZmllbGQuZmlsdGVyYWJsZSk7XG5cbiAgICAgICAgICBpZiAoZmlsdGVyRmllbGRzLmxlbmd0aCkge1xuICAgICAgICAgICAgcmVzdWx0ID0gaXRlbXMuZmlsdGVyKGl0ZW0gPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gZmlsdGVyRmllbGRzLmV2ZXJ5KChmaWx0ZXJDb2x1bW46IERhdGFUYWJsZVF1ZXJ5RmllbGQpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZmlsdGVyQ29sdW1uLmZpbHRlckV4cHJlc3Npb24pIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBmaWx0ZXJDb2x1bW4uZmlsdGVyRXhwcmVzc2lvbihpdGVtLCBmaWx0ZXJDb2x1bW4uZmllbGQsIGZpbHRlckNvbHVtbi5maWx0ZXJWYWx1ZSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKGZpbHRlckNvbHVtbi5maWx0ZXJWYWx1ZSA9PT0gdW5kZWZpbmVkIHx8IGZpbHRlckNvbHVtbi5maWx0ZXJWYWx1ZSA9PT0gJycpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGNvbnN0IGZpZWxkVmFsdWUgPSBnZXQoaXRlbSwgZmlsdGVyQ29sdW1uLmZpZWxkKTtcbiAgICAgICAgICAgICAgICBpZiAoZmllbGRWYWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShmaWx0ZXJDb2x1bW4uZmlsdGVyVmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gZmlsdGVyQ29sdW1uLmZpbHRlclZhbHVlLmxlbmd0aCA9PT0gMCB8fCBmaWx0ZXJDb2x1bW4uZmlsdGVyVmFsdWUuaW5jbHVkZXMoZmllbGRWYWx1ZSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgY29uc3QgdmFsdWUgPSBTdHJpbmcoZmllbGRWYWx1ZSkudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgICAgICAgICBjb25zdCBmaWx0ZXJWYWx1ZSA9IFN0cmluZyhmaWx0ZXJDb2x1bW4uZmlsdGVyVmFsdWUpLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlLmluY2x1ZGVzKGZpbHRlclZhbHVlKTtcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGl0ZW1Db3VudCA9IHJlc3VsdC5sZW5ndGg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY29uc3Qgc29ydENvbHVtbnMgPSBwYXJhbXMuZmllbGRzLmZpbHRlcigoY29sdW1uOiBEYXRhVGFibGVRdWVyeUZpZWxkKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gY29sdW1uLnNvcnRhYmxlICYmIGNvbHVtbi5zb3J0T3JkZXIgIT09ICcnO1xuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgaWYgKHNvcnRDb2x1bW5zLmxlbmd0aCkge1xuICAgICAgICAgICAgbGV0IG9yZGVyZWRTb3J0Q29sdW1ucyA9IHNvcnRDb2x1bW5zO1xuICAgICAgICAgICAgaWYgKHNvcnRDb2x1bW5zLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgICAgb3JkZXJlZFNvcnRDb2x1bW5zID0gc29ydENvbHVtbnMuY29uY2F0KCkuc29ydCgoYSwgYikgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiBhLnNvcnRQcmlvcml0eSAtIGIuc29ydFByaW9yaXR5O1xuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3Qgb3JkZXJQYXJhbXMgPSBvcmRlcmVkU29ydENvbHVtbnMucmVkdWNlKChhY2N1bXVsYXRvcjogYW55LCBjb2x1bW46IERhdGFUYWJsZVF1ZXJ5RmllbGQpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoYWNjdW11bGF0b3IpIHtcbiAgICAgICAgICAgICAgICAgIGFjY3VtdWxhdG9yLmZpZWxkcy5wdXNoKGNvbHVtbi5maWVsZCk7XG4gICAgICAgICAgICAgICAgICBhY2N1bXVsYXRvci5vcmRlcnMucHVzaChjb2x1bW4uc29ydE9yZGVyKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gYWNjdW11bGF0b3I7XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBmaWVsZHM6IFtdLFxuICAgICAgICAgICAgICAgIG9yZGVyczogW11cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgcmVzdWx0ID0gb3JkZXJCeShyZXN1bHQsIG9yZGVyUGFyYW1zLmZpZWxkcywgb3JkZXJQYXJhbXMub3JkZXJzKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocGFyYW1zLm9mZnNldCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgY29uc3Qgb2Zmc2V0ID0gcGFyYW1zLm9mZnNldCArIDEgPiByZXN1bHQubGVuZ3RoID8gMCA6IHBhcmFtcy5vZmZzZXQ7XG5cbiAgICAgICAgICBpZiAocGFyYW1zLmxpbWl0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJlc3VsdCA9IHJlc3VsdC5zbGljZShvZmZzZXQsIHJlc3VsdC5sZW5ndGgpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXN1bHQgPSByZXN1bHQuc2xpY2Uob2Zmc2V0LCBvZmZzZXQgKyBwYXJhbXMubGltaXQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBvZih7XG4gICAgICAgICAgaXRlbXM6IHJlc3VsdCxcbiAgICAgICAgICBjb3VudDogaXRlbUNvdW50XG4gICAgICAgIH0pO1xuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIEV4dHJhY3QgZGF0YSB0YWJsZSBmaWx0ZXIgb3B0aW9ucy5cbiAgICogQHBhcmFtIGZpbHRlckNvbHVtbiBEYXRhIHRhYmxlIGNvbHVtbiBjb21wb25lbnQuXG4gICAqIEByZXR1cm4gRmlsdGVyIG9wdGlvbnMgY29sbGVjdGlvbiBzdHJlYW0uXG4gICAqL1xuICBwdWJsaWMgZXh0cmFjdEZpbHRlck9wdGlvbnMoZmlsdGVyQ29sdW1uOiBEYXRhVGFibGVDb2x1bW5Db21wb25lbnQpOiBPYnNlcnZhYmxlPERhdGFUYWJsZUZpbHRlck9wdGlvbltdPiB7XG4gICAgcmV0dXJuIHRoaXMuaXRlbURhdGFTdHJlYW0ucGlwZShcbiAgICAgIHN3aXRjaE1hcCgoaXRlbXM6IFRbXSkgPT4ge1xuICAgICAgICBjb25zdCBmaWx0ZXJlZEl0ZW1zID0gaXRlbXNcbiAgICAgICAgICAucmVkdWNlKChhY2M6IERhdGFUYWJsZUZpbHRlck9wdGlvbltdLCBpdGVtOiBULCBpbmRleDogbnVtYmVyKTogRGF0YVRhYmxlRmlsdGVyT3B0aW9uW10gPT4ge1xuICAgICAgICAgICAgaWYgKGZpbHRlckNvbHVtbi5maWx0ZXJGaWVsZE1hcHBlcikge1xuICAgICAgICAgICAgICByZXR1cm4gYWNjLmNvbmNhdChmaWx0ZXJDb2x1bW4uZmlsdGVyRmllbGRNYXBwZXIoaXRlbSwgaW5kZXgpKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgZmlsdGVyRmllbGQgPSBmaWx0ZXJDb2x1bW4uZmlsdGVyRmllbGQgfHwgZmlsdGVyQ29sdW1uLmZpZWxkO1xuICAgICAgICAgICAgY29uc3QgZmlsdGVyVmFsdWUgPSBnZXQoaXRlbSwgZmlsdGVyRmllbGQpO1xuICAgICAgICAgICAgYWNjLnB1c2goe1xuICAgICAgICAgICAgICBrZXk6IGZpbHRlclZhbHVlLFxuICAgICAgICAgICAgICB2YWx1ZTogZmlsdGVyVmFsdWVcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICByZXR1cm4gYWNjO1xuICAgICAgICAgIH0sIFtdKVxuICAgICAgICAgIC5maWx0ZXIoKHZhbHVlOiBEYXRhVGFibGVGaWx0ZXJPcHRpb24sIGluZGV4LCBzZWxmKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gc2VsZi5maW5kSW5kZXgoaXRlbSA9PiBpdGVtLmtleSA9PT0gdmFsdWUua2V5KSA9PT0gaW5kZXg7XG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIG9mKGZpbHRlcmVkSXRlbXMpO1xuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIERpc3Bvc2UgY2xpZW50IGRhdGEgc291cmNlIHN0cmVhbXMuXG4gICAqL1xuICBwdWJsaWMgZGlzcG9zZSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5kYXRhU291cmNlU3Vic2NyaXB0aW9uKSB7XG4gICAgICB0aGlzLmRhdGFTb3VyY2VTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICAgIHRoaXMuZGF0YVNvdXJjZVN1YnNjcmlwdGlvbiA9IG51bGw7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuaXRlbURhdGFTdHJlYW0gJiYgIXRoaXMuaXRlbURhdGFTdHJlYW0uY2xvc2VkKSB7XG4gICAgICB0aGlzLml0ZW1EYXRhU3RyZWFtLmNvbXBsZXRlKCk7XG4gICAgfVxuICB9XG59XG4iXX0=