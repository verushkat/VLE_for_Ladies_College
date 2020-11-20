/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var splitPathExpression = /[,[\].]+?/;
/**
 * @param {?} obj
 * @param {?} path
 * @return {?}
 */
export function get(obj, path) {
    if (obj === null || obj === undefined) {
        return obj;
    }
    return String.prototype.split.call(path, splitPathExpression)
        .filter(Boolean)
        .reduce((/**
     * @param {?} res
     * @param {?} key
     * @return {?}
     */
    function (res, key) {
        if (res !== null && typeof res === 'object') {
            return res[key];
        }
        return undefined;
    }), obj);
}
/**
 * @param {?} collection
 * @param {?} fields
 * @param {?} orders
 * @return {?}
 */
export function orderBy(collection, fields, orders) {
    console.log(fields);
    return collection.concat().sort((/**
     * @param {?} a
     * @param {?} b
     * @return {?}
     */
    function (a, b) {
        for (var i = 0; i < fields.length; i++) {
            /** @type {?} */
            var field = fields[i];
            /** @type {?} */
            var order = orders[i];
            if (a[field] > b[field]) {
                return order === 'asc' ? 1 : -1;
            }
            if (a[field] < b[field]) {
                return order === 'asc' ? -1 : 1;
            }
        }
        return 0;
    }));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2JqZWN0LXV0aWxpdHkuY2xhc3MuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9vcm5hbWVudHVtLyIsInNvdXJjZXMiOlsidXRpbGl0eS9zZXJ2aWNlcy9vYmplY3QtdXRpbGl0eS5jbGFzcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztJQUFNLG1CQUFtQixHQUFHLFdBQVc7Ozs7OztBQUV2QyxNQUFNLFVBQVUsR0FBRyxDQUFDLEdBQVEsRUFBRSxJQUFZO0lBQ3hDLElBQUksR0FBRyxLQUFLLElBQUksSUFBSSxHQUFHLEtBQUssU0FBUyxFQUFFO1FBQ3JDLE9BQU8sR0FBRyxDQUFDO0tBQ1o7SUFFRCxPQUFPLE1BQU0sQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsbUJBQW1CLENBQUM7U0FDMUQsTUFBTSxDQUFDLE9BQU8sQ0FBQztTQUNmLE1BQU07Ozs7O0lBQUMsVUFBQyxHQUFHLEVBQUUsR0FBRztRQUNmLElBQUksR0FBRyxLQUFLLElBQUksSUFBSSxPQUFPLEdBQUcsS0FBSyxRQUFRLEVBQUU7WUFDM0MsT0FBTyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDakI7UUFFRCxPQUFPLFNBQVMsQ0FBQztJQUNuQixDQUFDLEdBQUUsR0FBRyxDQUFDLENBQUM7QUFDWixDQUFDOzs7Ozs7O0FBRUQsTUFBTSxVQUFVLE9BQU8sQ0FBQyxVQUFpQixFQUFFLE1BQWdCLEVBQUUsTUFBMkI7SUFDdEYsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNwQixPQUFPLFVBQVUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxJQUFJOzs7OztJQUFDLFVBQUMsQ0FBTSxFQUFFLENBQU07UUFDN0MsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7O2dCQUNoQyxLQUFLLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQzs7Z0JBQ2pCLEtBQUssR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDO1lBQ3ZCLElBQUksQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsRUFBRTtnQkFDdkIsT0FBTyxLQUFLLEtBQUssS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQ2pDO1lBRUQsSUFBSSxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxFQUFFO2dCQUN2QixPQUFPLEtBQUssS0FBSyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDakM7U0FDRjtRQUVELE9BQU8sQ0FBQyxDQUFDO0lBQ1gsQ0FBQyxFQUFDLENBQUM7QUFDTCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qgc3BsaXRQYXRoRXhwcmVzc2lvbiA9IC9bLFtcXF0uXSs/LztcblxuZXhwb3J0IGZ1bmN0aW9uIGdldChvYmo6IGFueSwgcGF0aDogc3RyaW5nKTogYW55IHtcbiAgaWYgKG9iaiA9PT0gbnVsbCB8fCBvYmogPT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiBvYmo7XG4gIH1cblxuICByZXR1cm4gU3RyaW5nLnByb3RvdHlwZS5zcGxpdC5jYWxsKHBhdGgsIHNwbGl0UGF0aEV4cHJlc3Npb24pXG4gICAgLmZpbHRlcihCb29sZWFuKVxuICAgIC5yZWR1Y2UoKHJlcywga2V5KSA9PiB7XG4gICAgICBpZiAocmVzICE9PSBudWxsICYmIHR5cGVvZiByZXMgPT09ICdvYmplY3QnKSB7XG4gICAgICAgIHJldHVybiByZXNba2V5XTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9LCBvYmopO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gb3JkZXJCeShjb2xsZWN0aW9uOiBhbnlbXSwgZmllbGRzOiBzdHJpbmdbXSwgb3JkZXJzOiBBcnJheTwnYXNjJ3wnZGVzYyc+KTogYW55IHtcbiAgY29uc29sZS5sb2coZmllbGRzKTtcbiAgcmV0dXJuIGNvbGxlY3Rpb24uY29uY2F0KCkuc29ydCgoYTogYW55LCBiOiBhbnkpID0+IHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGZpZWxkcy5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgZmllbGQgPSBmaWVsZHNbaV07XG4gICAgICBjb25zdCBvcmRlciA9IG9yZGVyc1tpXTtcbiAgICAgIGlmIChhW2ZpZWxkXSA+IGJbZmllbGRdKSB7XG4gICAgICAgIHJldHVybiBvcmRlciA9PT0gJ2FzYycgPyAxIDogLTE7XG4gICAgICB9XG5cbiAgICAgIGlmIChhW2ZpZWxkXSA8IGJbZmllbGRdKSB7XG4gICAgICAgIHJldHVybiBvcmRlciA9PT0gJ2FzYycgPyAtMSA6IDE7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIDA7XG4gIH0pO1xufVxuIl19