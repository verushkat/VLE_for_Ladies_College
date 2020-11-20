/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
/**
 * Global reference service; List all global javascript references here.
 */
export class GlobalRefService {
    constructor() {
        this.setScrollbarWidth();
    }
    /**
     * Set scrollbar width of current browser environment; Ony set on browser environment to support SSR.
     * @return {?}
     */
    setScrollbarWidth() {
        if (this.scrollbarWidthValue !== undefined) {
            return;
        }
        if (this.isBrowser) {
            /** @type {?} */
            const outer = document.createElement('div');
            outer.style.visibility = 'hidden';
            outer.style.width = '100px';
            outer.style.msOverflowStyle = 'scrollbar'; // needed for WinJS apps
            document.body.appendChild(outer);
            /** @type {?} */
            const widthNoScroll = outer.offsetWidth;
            // force scrollbars
            outer.style.overflow = 'scroll';
            // add inner div
            /** @type {?} */
            const inner = document.createElement('div');
            inner.style.width = '100%';
            outer.appendChild(inner);
            /** @type {?} */
            const widthWithScroll = inner.offsetWidth;
            // remove divs
            outer.parentNode.removeChild(outer);
            this.scrollbarWidthValue = widthNoScroll - widthWithScroll;
        }
    }
    /**
     * Get scrollbar width.
     * @return {?} Scroll bar width.
     */
    get scrollbarWidth() {
        return this.scrollbarWidthValue;
    }
    /**
     * Get window reference.
     * @return {?} Window reference.
     */
    get window() {
        return window;
    }
    /**
     * Is browser environment.
     * @return {?} True if current environment is browser.
     */
    get isBrowser() {
        return typeof window !== 'undefined';
    }
}
GlobalRefService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
GlobalRefService.ctorParameters = () => [];
if (false) {
    /**
     * @type {?}
     * @private
     */
    GlobalRefService.prototype.scrollbarWidthValue;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2xvYmFsLXJlZi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vb3JuYW1lbnR1bS8iLCJzb3VyY2VzIjpbInV0aWxpdHkvc2VydmljZXMvZ2xvYmFsLXJlZi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7O0FBTTNDLE1BQU0sT0FBTyxnQkFBZ0I7SUFHM0I7UUFDRSxJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztJQUMzQixDQUFDOzs7OztJQUtNLGlCQUFpQjtRQUN0QixJQUFJLElBQUksQ0FBQyxtQkFBbUIsS0FBSyxTQUFTLEVBQUU7WUFDMUMsT0FBTztTQUNSO1FBRUQsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFOztrQkFDWixLQUFLLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUM7WUFDM0MsS0FBSyxDQUFDLEtBQUssQ0FBQyxVQUFVLEdBQUcsUUFBUSxDQUFDO1lBQ2xDLEtBQUssQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLE9BQU8sQ0FBQztZQUM1QixLQUFLLENBQUMsS0FBSyxDQUFDLGVBQWUsR0FBRyxXQUFXLENBQUMsQ0FBQyx3QkFBd0I7WUFFbkUsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7O2tCQUUzQixhQUFhLEdBQUcsS0FBSyxDQUFDLFdBQVc7WUFDdkMsbUJBQW1CO1lBQ25CLEtBQUssQ0FBQyxLQUFLLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQzs7O2tCQUcxQixLQUFLLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUM7WUFDM0MsS0FBSyxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDO1lBQzNCLEtBQUssQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7O2tCQUVuQixlQUFlLEdBQUcsS0FBSyxDQUFDLFdBQVc7WUFFekMsY0FBYztZQUNkLEtBQUssQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBRXBDLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxhQUFhLEdBQUcsZUFBZSxDQUFDO1NBQzVEO0lBQ0gsQ0FBQzs7Ozs7SUFNRCxJQUFXLGNBQWM7UUFDdkIsT0FBTyxJQUFJLENBQUMsbUJBQW1CLENBQUM7SUFDbEMsQ0FBQzs7Ozs7SUFLRCxJQUFXLE1BQU07UUFDZixPQUFPLE1BQU0sQ0FBQztJQUNoQixDQUFDOzs7OztJQU1ELElBQVcsU0FBUztRQUNsQixPQUFPLE9BQU8sTUFBTSxLQUFLLFdBQVcsQ0FBQztJQUN2QyxDQUFDOzs7WUEvREYsVUFBVTs7Ozs7Ozs7O0lBRVQsK0NBQW9DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKipcbiAqIEdsb2JhbCByZWZlcmVuY2Ugc2VydmljZTsgTGlzdCBhbGwgZ2xvYmFsIGphdmFzY3JpcHQgcmVmZXJlbmNlcyBoZXJlLlxuICovXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgR2xvYmFsUmVmU2VydmljZSB7XG4gIHByaXZhdGUgc2Nyb2xsYmFyV2lkdGhWYWx1ZTogbnVtYmVyO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuc2V0U2Nyb2xsYmFyV2lkdGgoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgc2Nyb2xsYmFyIHdpZHRoIG9mIGN1cnJlbnQgYnJvd3NlciBlbnZpcm9ubWVudDsgT255IHNldCBvbiBicm93c2VyIGVudmlyb25tZW50IHRvIHN1cHBvcnQgU1NSLlxuICAgKi9cbiAgcHVibGljIHNldFNjcm9sbGJhcldpZHRoKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnNjcm9sbGJhcldpZHRoVmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmlzQnJvd3Nlcikge1xuICAgICAgY29uc3Qgb3V0ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIG91dGVyLnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcbiAgICAgIG91dGVyLnN0eWxlLndpZHRoID0gJzEwMHB4JztcbiAgICAgIG91dGVyLnN0eWxlLm1zT3ZlcmZsb3dTdHlsZSA9ICdzY3JvbGxiYXInOyAvLyBuZWVkZWQgZm9yIFdpbkpTIGFwcHNcblxuICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChvdXRlcik7XG5cbiAgICAgIGNvbnN0IHdpZHRoTm9TY3JvbGwgPSBvdXRlci5vZmZzZXRXaWR0aDtcbiAgICAgIC8vIGZvcmNlIHNjcm9sbGJhcnNcbiAgICAgIG91dGVyLnN0eWxlLm92ZXJmbG93ID0gJ3Njcm9sbCc7XG5cbiAgICAgIC8vIGFkZCBpbm5lciBkaXZcbiAgICAgIGNvbnN0IGlubmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBpbm5lci5zdHlsZS53aWR0aCA9ICcxMDAlJztcbiAgICAgIG91dGVyLmFwcGVuZENoaWxkKGlubmVyKTtcblxuICAgICAgY29uc3Qgd2lkdGhXaXRoU2Nyb2xsID0gaW5uZXIub2Zmc2V0V2lkdGg7XG5cbiAgICAgIC8vIHJlbW92ZSBkaXZzXG4gICAgICBvdXRlci5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKG91dGVyKTtcblxuICAgICAgdGhpcy5zY3JvbGxiYXJXaWR0aFZhbHVlID0gd2lkdGhOb1Njcm9sbCAtIHdpZHRoV2l0aFNjcm9sbDtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogR2V0IHNjcm9sbGJhciB3aWR0aC5cbiAgICogQHJldHVybnMgU2Nyb2xsIGJhciB3aWR0aC5cbiAgICovXG4gIHB1YmxpYyBnZXQgc2Nyb2xsYmFyV2lkdGgoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5zY3JvbGxiYXJXaWR0aFZhbHVlO1xuICB9XG4gIC8qKlxuICAgKiBHZXQgd2luZG93IHJlZmVyZW5jZS5cbiAgICogQHJldHVybiBXaW5kb3cgcmVmZXJlbmNlLlxuICAgKi9cbiAgcHVibGljIGdldCB3aW5kb3coKTogV2luZG93IHtcbiAgICByZXR1cm4gd2luZG93O1xuICB9XG5cbiAgLyoqXG4gICAqIElzIGJyb3dzZXIgZW52aXJvbm1lbnQuXG4gICAqIEByZXR1cm4gVHJ1ZSBpZiBjdXJyZW50IGVudmlyb25tZW50IGlzIGJyb3dzZXIuXG4gICAqL1xuICBwdWJsaWMgZ2V0IGlzQnJvd3NlcigpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCc7XG4gIH1cbn1cbiJdfQ==