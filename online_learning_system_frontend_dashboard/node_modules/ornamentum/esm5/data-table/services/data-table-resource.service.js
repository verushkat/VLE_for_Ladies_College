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
var DataTableResourceService = /** @class */ (function () {
    function DataTableResourceService() {
    }
    /**
     * Set data source stream to query.
     * @param dataSource Data source stream.
     */
    /**
     * Set data source stream to query.
     * @param {?} dataSource Data source stream.
     * @return {?}
     */
    DataTableResourceService.prototype.setDataSource = /**
     * Set data source stream to query.
     * @param {?} dataSource Data source stream.
     * @return {?}
     */
    function (dataSource) {
        var _this = this;
        this.dispose();
        if (this.itemDataStream && !this.itemDataStream.closed) {
            this.itemDataStream.complete();
        }
        this.itemDataStream = new ReplaySubject(1);
        this.dataSourceSubscription = dataSource.subscribe((/**
         * @param {?} items
         * @return {?}
         */
        function (items) {
            _this.itemDataStream.next(items);
        }));
    };
    /**
     * Query items by data table request params.
     * @param params Data table parameters object.
     * @return Query result stream.
     */
    /**
     * Query items by data table request params.
     * @param {?} params Data table parameters object.
     * @return {?} Query result stream.
     */
    DataTableResourceService.prototype.query = /**
     * Query items by data table request params.
     * @param {?} params Data table parameters object.
     * @return {?} Query result stream.
     */
    function (params) {
        return this.itemDataStream.pipe(switchMap((/**
         * @param {?} items
         * @return {?}
         */
        function (items) {
            /** @type {?} */
            var itemCount = items.length;
            /** @type {?} */
            var result = items.slice();
            if (params.fields.length) {
                /** @type {?} */
                var filterFields_1 = params.fields.filter((/**
                 * @param {?} field
                 * @return {?}
                 */
                function (field) { return field.filterable; }));
                if (filterFields_1.length) {
                    result = items.filter((/**
                     * @param {?} item
                     * @return {?}
                     */
                    function (item) {
                        return filterFields_1.every((/**
                         * @param {?} filterColumn
                         * @return {?}
                         */
                        function (filterColumn) {
                            if (filterColumn.filterExpression) {
                                return filterColumn.filterExpression(item, filterColumn.field, filterColumn.filterValue);
                            }
                            if (filterColumn.filterValue === undefined || filterColumn.filterValue === '') {
                                return true;
                            }
                            /** @type {?} */
                            var fieldValue = get(item, filterColumn.field);
                            if (fieldValue === undefined) {
                                return true;
                            }
                            if (Array.isArray(filterColumn.filterValue)) {
                                return filterColumn.filterValue.length === 0 || filterColumn.filterValue.includes(fieldValue);
                            }
                            /** @type {?} */
                            var value = String(fieldValue).toLowerCase();
                            /** @type {?} */
                            var filterValue = String(filterColumn.filterValue).toLowerCase();
                            return value.includes(filterValue);
                        }));
                    }));
                    itemCount = result.length;
                }
                /** @type {?} */
                var sortColumns = params.fields.filter((/**
                 * @param {?} column
                 * @return {?}
                 */
                function (column) {
                    return column.sortable && column.sortOrder !== '';
                }));
                if (sortColumns.length) {
                    /** @type {?} */
                    var orderedSortColumns = sortColumns;
                    if (sortColumns.length > 1) {
                        orderedSortColumns = sortColumns.concat().sort((/**
                         * @param {?} a
                         * @param {?} b
                         * @return {?}
                         */
                        function (a, b) {
                            return a.sortPriority - b.sortPriority;
                        }));
                    }
                    /** @type {?} */
                    var orderParams = orderedSortColumns.reduce((/**
                     * @param {?} accumulator
                     * @param {?} column
                     * @return {?}
                     */
                    function (accumulator, column) {
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
                var offset = params.offset + 1 > result.length ? 0 : params.offset;
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
    };
    /**
     * Extract data table filter options.
     * @param filterColumn Data table column component.
     * @return Filter options collection stream.
     */
    /**
     * Extract data table filter options.
     * @param {?} filterColumn Data table column component.
     * @return {?} Filter options collection stream.
     */
    DataTableResourceService.prototype.extractFilterOptions = /**
     * Extract data table filter options.
     * @param {?} filterColumn Data table column component.
     * @return {?} Filter options collection stream.
     */
    function (filterColumn) {
        return this.itemDataStream.pipe(switchMap((/**
         * @param {?} items
         * @return {?}
         */
        function (items) {
            /** @type {?} */
            var filteredItems = items
                .reduce((/**
             * @param {?} acc
             * @param {?} item
             * @param {?} index
             * @return {?}
             */
            function (acc, item, index) {
                if (filterColumn.filterFieldMapper) {
                    return acc.concat(filterColumn.filterFieldMapper(item, index));
                }
                /** @type {?} */
                var filterField = filterColumn.filterField || filterColumn.field;
                /** @type {?} */
                var filterValue = get(item, filterField);
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
            function (value, index, self) {
                return self.findIndex((/**
                 * @param {?} item
                 * @return {?}
                 */
                function (item) { return item.key === value.key; })) === index;
            }));
            return of(filteredItems);
        })));
    };
    /**
     * Dispose client data source streams.
     */
    /**
     * Dispose client data source streams.
     * @return {?}
     */
    DataTableResourceService.prototype.dispose = /**
     * Dispose client data source streams.
     * @return {?}
     */
    function () {
        if (this.dataSourceSubscription) {
            this.dataSourceSubscription.unsubscribe();
            this.dataSourceSubscription = null;
        }
        if (this.itemDataStream && !this.itemDataStream.closed) {
            this.itemDataStream.complete();
        }
    };
    DataTableResourceService.decorators = [
        { type: Injectable }
    ];
    return DataTableResourceService;
}());
export { DataTableResourceService };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS10YWJsZS1yZXNvdXJjZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vb3JuYW1lbnR1bS8iLCJzb3VyY2VzIjpbImRhdGEtdGFibGUvc2VydmljZXMvZGF0YS10YWJsZS1yZXNvdXJjZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBYyxhQUFhLEVBQWdCLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNuRSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFM0MsT0FBTyxFQUFFLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQzs7Ozs7QUFZM0U7SUFBQTtJQTZKQSxDQUFDO0lBeEpDOzs7T0FHRzs7Ozs7O0lBQ0ksZ0RBQWE7Ozs7O0lBQXBCLFVBQXFCLFVBQTJCO1FBQWhELGlCQVdDO1FBVkMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBRWYsSUFBSSxJQUFJLENBQUMsY0FBYyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLEVBQUU7WUFDdEQsSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLEVBQUUsQ0FBQztTQUNoQztRQUVELElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxhQUFhLENBQU0sQ0FBQyxDQUFDLENBQUM7UUFDaEQsSUFBSSxDQUFDLHNCQUFzQixHQUFHLFVBQVUsQ0FBQyxTQUFTOzs7O1FBQUMsVUFBQyxLQUFVO1lBQzVELEtBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2xDLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQztJQUVEOzs7O09BSUc7Ozs7OztJQUNJLHdDQUFLOzs7OztJQUFaLFVBQWEsTUFBOEI7UUFDekMsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FDN0IsU0FBUzs7OztRQUFDLFVB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SW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBSZXBsYXlTdWJqZWN0LCBTdWJzY3JpcHRpb24sIG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBzd2l0Y2hNYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IG9yZGVyQnksIGdldCB9IGZyb20gJy4uLy4uL3V0aWxpdHkvc2VydmljZXMvb2JqZWN0LXV0aWxpdHkuY2xhc3MnO1xuXG5pbXBvcnQgeyBEYXRhVGFibGVSZXF1ZXN0UGFyYW1zIH0gZnJvbSAnLi4vbW9kZWxzL2RhdGEtdGFibGUtcmVxdWVzdC1wYXJhbXMubW9kZWwnO1xuaW1wb3J0IHsgRGF0YVRhYmxlUXVlcnlSZXN1bHQgfSBmcm9tICcuLi9tb2RlbHMvZGF0YS10YWJsZS1xdWVyeS1yZXN1bHQubW9kZWwnO1xuaW1wb3J0IHsgRGF0YVRhYmxlRmlsdGVyT3B0aW9uIH0gZnJvbSAnLi4vbW9kZWxzL2RhdGEtdGFibGUtZmlsdGVyLW9wdGlvbi5tb2RlbCc7XG5pbXBvcnQgeyBEYXRhVGFibGVRdWVyeUZpZWxkIH0gZnJvbSAnLi4vbW9kZWxzL2RhdGEtdGFibGUtcXVlcnktZmllbGQubW9kZWwnO1xuXG5pbXBvcnQgeyBEYXRhVGFibGVDb2x1bW5Db21wb25lbnQgfSBmcm9tICcuLi9jb21wb25lbnRzL2RhdGEtdGFibGUtY29sdW1uL2RhdGEtdGFibGUtY29sdW1uLmNvbXBvbmVudCc7XG5cbi8qKlxuICogRGF0YSB0YWJsZSByZXNvdXJjZSBzZXJ2aWNlOyBNYW5hZ2UgZGF0YSB0YWJsZSBjbGllbnQgc2lkZSBkYXRhIHF1ZXJ5aW5nLlxuICovXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRGF0YVRhYmxlUmVzb3VyY2VTZXJ2aWNlPFQ+IHtcbiAgcHJpdmF0ZSBpdGVtRGF0YVN0cmVhbTogUmVwbGF5U3ViamVjdDxUW10+O1xuICBwcml2YXRlIGRhdGFTb3VyY2VTdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcblxuICAvKipcbiAgICogU2V0IGRhdGEgc291cmNlIHN0cmVhbSB0byBxdWVyeS5cbiAgICogQHBhcmFtIGRhdGFTb3VyY2UgRGF0YSBzb3VyY2Ugc3RyZWFtLlxuICAgKi9cbiAgcHVibGljIHNldERhdGFTb3VyY2UoZGF0YVNvdXJjZTogT2JzZXJ2YWJsZTxUW10+KTogdm9pZCB7XG4gICAgdGhpcy5kaXNwb3NlKCk7XG5cbiAgICBpZiAodGhpcy5pdGVtRGF0YVN0cmVhbSAmJiAhdGhpcy5pdGVtRGF0YVN0cmVhbS5jbG9zZWQpIHtcbiAgICAgIHRoaXMuaXRlbURhdGFTdHJlYW0uY29tcGxldGUoKTtcbiAgICB9XG5cbiAgICB0aGlzLml0ZW1EYXRhU3RyZWFtID0gbmV3IFJlcGxheVN1YmplY3Q8VFtdPigxKTtcbiAgICB0aGlzLmRhdGFTb3VyY2VTdWJzY3JpcHRpb24gPSBkYXRhU291cmNlLnN1YnNjcmliZSgoaXRlbXM6IFRbXSkgPT4ge1xuICAgICAgdGhpcy5pdGVtRGF0YVN0cmVhbS5uZXh0KGl0ZW1zKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBRdWVyeSBpdGVtcyBieSBkYXRhIHRhYmxlIHJlcXVlc3QgcGFyYW1zLlxuICAgKiBAcGFyYW0gcGFyYW1zIERhdGEgdGFibGUgcGFyYW1ldGVycyBvYmplY3QuXG4gICAqIEByZXR1cm4gUXVlcnkgcmVzdWx0IHN0cmVhbS5cbiAgICovXG4gIHB1YmxpYyBxdWVyeShwYXJhbXM6IERhdGFUYWJsZVJlcXVlc3RQYXJhbXMpOiBPYnNlcnZhYmxlPERhdGFUYWJsZVF1ZXJ5UmVzdWx0PFQ+PiB7XG4gICAgcmV0dXJuIHRoaXMuaXRlbURhdGFTdHJlYW0ucGlwZShcbiAgICAgIHN3aXRjaE1hcCgoaXRlbXM6IFRbXSkgPT4ge1xuICAgICAgICBsZXQgaXRlbUNvdW50ID0gaXRlbXMubGVuZ3RoO1xuICAgICAgICBsZXQgcmVzdWx0OiBUW10gPSBpdGVtcy5zbGljZSgpO1xuXG4gICAgICAgIGlmIChwYXJhbXMuZmllbGRzLmxlbmd0aCkge1xuICAgICAgICAgIGNvbnN0IGZpbHRlckZpZWxkcyA9IHBhcmFtcy5maWVsZHMuZmlsdGVyKGZpZWxkID0+IGZpZWxkLmZpbHRlcmFibGUpO1xuXG4gICAgICAgICAgaWYgKGZpbHRlckZpZWxkcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJlc3VsdCA9IGl0ZW1zLmZpbHRlcihpdGVtID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIGZpbHRlckZpZWxkcy5ldmVyeSgoZmlsdGVyQ29sdW1uOiBEYXRhVGFibGVRdWVyeUZpZWxkKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGZpbHRlckNvbHVtbi5maWx0ZXJFeHByZXNzaW9uKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gZmlsdGVyQ29sdW1uLmZpbHRlckV4cHJlc3Npb24oaXRlbSwgZmlsdGVyQ29sdW1uLmZpZWxkLCBmaWx0ZXJDb2x1bW4uZmlsdGVyVmFsdWUpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChmaWx0ZXJDb2x1bW4uZmlsdGVyVmFsdWUgPT09IHVuZGVmaW5lZCB8fCBmaWx0ZXJDb2x1bW4uZmlsdGVyVmFsdWUgPT09ICcnKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBjb25zdCBmaWVsZFZhbHVlID0gZ2V0KGl0ZW0sIGZpbHRlckNvbHVtbi5maWVsZCk7XG4gICAgICAgICAgICAgICAgaWYgKGZpZWxkVmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoZmlsdGVyQ29sdW1uLmZpbHRlclZhbHVlKSkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIGZpbHRlckNvbHVtbi5maWx0ZXJWYWx1ZS5sZW5ndGggPT09IDAgfHwgZmlsdGVyQ29sdW1uLmZpbHRlclZhbHVlLmluY2x1ZGVzKGZpZWxkVmFsdWUpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gU3RyaW5nKGZpZWxkVmFsdWUpLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgICAgICAgICAgY29uc3QgZmlsdGVyVmFsdWUgPSBTdHJpbmcoZmlsdGVyQ29sdW1uLmZpbHRlclZhbHVlKS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZS5pbmNsdWRlcyhmaWx0ZXJWYWx1ZSk7XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpdGVtQ291bnQgPSByZXN1bHQubGVuZ3RoO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnN0IHNvcnRDb2x1bW5zID0gcGFyYW1zLmZpZWxkcy5maWx0ZXIoKGNvbHVtbjogRGF0YVRhYmxlUXVlcnlGaWVsZCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGNvbHVtbi5zb3J0YWJsZSAmJiBjb2x1bW4uc29ydE9yZGVyICE9PSAnJztcbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIGlmIChzb3J0Q29sdW1ucy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGxldCBvcmRlcmVkU29ydENvbHVtbnMgPSBzb3J0Q29sdW1ucztcbiAgICAgICAgICAgIGlmIChzb3J0Q29sdW1ucy5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICAgIG9yZGVyZWRTb3J0Q29sdW1ucyA9IHNvcnRDb2x1bW5zLmNvbmNhdCgpLnNvcnQoKGEsIGIpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYS5zb3J0UHJpb3JpdHkgLSBiLnNvcnRQcmlvcml0eTtcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IG9yZGVyUGFyYW1zID0gb3JkZXJlZFNvcnRDb2x1bW5zLnJlZHVjZSgoYWNjdW11bGF0b3I6IGFueSwgY29sdW1uOiBEYXRhVGFibGVRdWVyeUZpZWxkKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGFjY3VtdWxhdG9yKSB7XG4gICAgICAgICAgICAgICAgICBhY2N1bXVsYXRvci5maWVsZHMucHVzaChjb2x1bW4uZmllbGQpO1xuICAgICAgICAgICAgICAgICAgYWNjdW11bGF0b3Iub3JkZXJzLnB1c2goY29sdW1uLnNvcnRPcmRlcik7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIGFjY3VtdWxhdG9yO1xuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZmllbGRzOiBbXSxcbiAgICAgICAgICAgICAgICBvcmRlcnM6IFtdXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgIHJlc3VsdCA9IG9yZGVyQnkocmVzdWx0LCBvcmRlclBhcmFtcy5maWVsZHMsIG9yZGVyUGFyYW1zLm9yZGVycyk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHBhcmFtcy5vZmZzZXQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIGNvbnN0IG9mZnNldCA9IHBhcmFtcy5vZmZzZXQgKyAxID4gcmVzdWx0Lmxlbmd0aCA/IDAgOiBwYXJhbXMub2Zmc2V0O1xuXG4gICAgICAgICAgaWYgKHBhcmFtcy5saW1pdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXN1bHQgPSByZXN1bHQuc2xpY2Uob2Zmc2V0LCByZXN1bHQubGVuZ3RoKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVzdWx0ID0gcmVzdWx0LnNsaWNlKG9mZnNldCwgb2Zmc2V0ICsgcGFyYW1zLmxpbWl0KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gb2Yoe1xuICAgICAgICAgIGl0ZW1zOiByZXN1bHQsXG4gICAgICAgICAgY291bnQ6IGl0ZW1Db3VudFxuICAgICAgICB9KTtcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBFeHRyYWN0IGRhdGEgdGFibGUgZmlsdGVyIG9wdGlvbnMuXG4gICAqIEBwYXJhbSBmaWx0ZXJDb2x1bW4gRGF0YSB0YWJsZSBjb2x1bW4gY29tcG9uZW50LlxuICAgKiBAcmV0dXJuIEZpbHRlciBvcHRpb25zIGNvbGxlY3Rpb24gc3RyZWFtLlxuICAgKi9cbiAgcHVibGljIGV4dHJhY3RGaWx0ZXJPcHRpb25zKGZpbHRlckNvbHVtbjogRGF0YVRhYmxlQ29sdW1uQ29tcG9uZW50KTogT2JzZXJ2YWJsZTxEYXRhVGFibGVGaWx0ZXJPcHRpb25bXT4ge1xuICAgIHJldHVybiB0aGlzLml0ZW1EYXRhU3RyZWFtLnBpcGUoXG4gICAgICBzd2l0Y2hNYXAoKGl0ZW1zOiBUW10pID0+IHtcbiAgICAgICAgY29uc3QgZmlsdGVyZWRJdGVtcyA9IGl0ZW1zXG4gICAgICAgICAgLnJlZHVjZSgoYWNjOiBEYXRhVGFibGVGaWx0ZXJPcHRpb25bXSwgaXRlbTogVCwgaW5kZXg6IG51bWJlcik6IERhdGFUYWJsZUZpbHRlck9wdGlvbltdID0+IHtcbiAgICAgICAgICAgIGlmIChmaWx0ZXJDb2x1bW4uZmlsdGVyRmllbGRNYXBwZXIpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGFjYy5jb25jYXQoZmlsdGVyQ29sdW1uLmZpbHRlckZpZWxkTWFwcGVyKGl0ZW0sIGluZGV4KSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IGZpbHRlckZpZWxkID0gZmlsdGVyQ29sdW1uLmZpbHRlckZpZWxkIHx8IGZpbHRlckNvbHVtbi5maWVsZDtcbiAgICAgICAgICAgIGNvbnN0IGZpbHRlclZhbHVlID0gZ2V0KGl0ZW0sIGZpbHRlckZpZWxkKTtcbiAgICAgICAgICAgIGFjYy5wdXNoKHtcbiAgICAgICAgICAgICAga2V5OiBmaWx0ZXJWYWx1ZSxcbiAgICAgICAgICAgICAgdmFsdWU6IGZpbHRlclZhbHVlXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgcmV0dXJuIGFjYztcbiAgICAgICAgICB9LCBbXSlcbiAgICAgICAgICAuZmlsdGVyKCh2YWx1ZTogRGF0YVRhYmxlRmlsdGVyT3B0aW9uLCBpbmRleCwgc2VsZikgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHNlbGYuZmluZEluZGV4KGl0ZW0gPT4gaXRlbS5rZXkgPT09IHZhbHVlLmtleSkgPT09IGluZGV4O1xuICAgICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBvZihmaWx0ZXJlZEl0ZW1zKTtcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEaXNwb3NlIGNsaWVudCBkYXRhIHNvdXJjZSBzdHJlYW1zLlxuICAgKi9cbiAgcHVibGljIGRpc3Bvc2UoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuZGF0YVNvdXJjZVN1YnNjcmlwdGlvbikge1xuICAgICAgdGhpcy5kYXRhU291cmNlU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgICB0aGlzLmRhdGFTb3VyY2VTdWJzY3JpcHRpb24gPSBudWxsO1xuICAgIH1cblxuICAgIGlmICh0aGlzLml0ZW1EYXRhU3RyZWFtICYmICF0aGlzLml0ZW1EYXRhU3RyZWFtLmNsb3NlZCkge1xuICAgICAgdGhpcy5pdGVtRGF0YVN0cmVhbS5jb21wbGV0ZSgpO1xuICAgIH1cbiAgfVxufVxuIl19