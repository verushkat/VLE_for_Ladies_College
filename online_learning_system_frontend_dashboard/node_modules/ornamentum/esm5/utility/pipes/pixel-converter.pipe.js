/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Pipe } from '@angular/core';
/**
 * Pixel converter pipe.
 * Append 'px' if value is number type, else return the same.
 */
var PixelConverterPipe = /** @class */ (function () {
    function PixelConverterPipe() {
    }
    /**
     * Pipe transform implementation.
     * @param value Source value.
     * @returns Converted pixel value.
     */
    /**
     * Pipe transform implementation.
     * @param {?} value Source value.
     * @return {?} Converted pixel value.
     */
    PixelConverterPipe.prototype.transform = /**
     * Pipe transform implementation.
     * @param {?} value Source value.
     * @return {?} Converted pixel value.
     */
    function (value) {
        if (value === undefined) {
            return;
        }
        if (typeof value === 'string') {
            return value;
        }
        if (typeof value === 'number') {
            return value + "px";
        }
    };
    PixelConverterPipe.decorators = [
        { type: Pipe, args: [{
                    name: 'ngPx'
                },] }
    ];
    return PixelConverterPipe;
}());
export { PixelConverterPipe };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGl4ZWwtY29udmVydGVyLnBpcGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9vcm5hbWVudHVtLyIsInNvdXJjZXMiOlsidXRpbGl0eS9waXBlcy9waXhlbC1jb252ZXJ0ZXIucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7Ozs7O0FBTXBEO0lBQUE7SUFvQkEsQ0FBQztJQWhCQzs7OztPQUlHOzs7Ozs7SUFDSSxzQ0FBUzs7Ozs7SUFBaEIsVUFBaUIsS0FBc0I7UUFDckMsSUFBSSxLQUFLLEtBQUssU0FBUyxFQUFFO1lBQ3ZCLE9BQU87U0FDUjtRQUNELElBQUksT0FBTyxLQUFLLEtBQUssUUFBUSxFQUFFO1lBQzdCLE9BQU8sS0FBSyxDQUFDO1NBQ2Q7UUFDRCxJQUFJLE9BQU8sS0FBSyxLQUFLLFFBQVEsRUFBRTtZQUM3QixPQUFVLEtBQUssT0FBSSxDQUFDO1NBQ3JCO0lBQ0gsQ0FBQzs7Z0JBbkJGLElBQUksU0FBQztvQkFDSixJQUFJLEVBQUUsTUFBTTtpQkFDYjs7SUFrQkQseUJBQUM7Q0FBQSxBQXBCRCxJQW9CQztTQWpCWSxrQkFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKlxuICogUGl4ZWwgY29udmVydGVyIHBpcGUuXG4gKiBBcHBlbmQgJ3B4JyBpZiB2YWx1ZSBpcyBudW1iZXIgdHlwZSwgZWxzZSByZXR1cm4gdGhlIHNhbWUuXG4gKi9cbkBQaXBlKHtcbiAgbmFtZTogJ25nUHgnXG59KVxuZXhwb3J0IGNsYXNzIFBpeGVsQ29udmVydGVyUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICAvKipcbiAgICogUGlwZSB0cmFuc2Zvcm0gaW1wbGVtZW50YXRpb24uXG4gICAqIEBwYXJhbSB2YWx1ZSBTb3VyY2UgdmFsdWUuXG4gICAqIEByZXR1cm5zIENvbnZlcnRlZCBwaXhlbCB2YWx1ZS5cbiAgICovXG4gIHB1YmxpYyB0cmFuc2Zvcm0odmFsdWU6IHN0cmluZyB8IG51bWJlcik6IHN0cmluZyB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicpIHtcbiAgICAgIHJldHVybiBgJHt2YWx1ZX1weGA7XG4gICAgfVxuICB9XG59XG4iXX0=