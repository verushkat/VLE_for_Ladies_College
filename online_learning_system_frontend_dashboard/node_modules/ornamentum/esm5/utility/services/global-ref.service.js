/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
/**
 * Global reference service; List all global javascript references here.
 */
var GlobalRefService = /** @class */ (function () {
    function GlobalRefService() {
        this.setScrollbarWidth();
    }
    /**
     * Set scrollbar width of current browser environment; Ony set on browser environment to support SSR.
     */
    /**
     * Set scrollbar width of current browser environment; Ony set on browser environment to support SSR.
     * @return {?}
     */
    GlobalRefService.prototype.setScrollbarWidth = /**
     * Set scrollbar width of current browser environment; Ony set on browser environment to support SSR.
     * @return {?}
     */
    function () {
        if (this.scrollbarWidthValue !== undefined) {
            return;
        }
        if (this.isBrowser) {
            /** @type {?} */
            var outer = document.createElement('div');
            outer.style.visibility = 'hidden';
            outer.style.width = '100px';
            outer.style.msOverflowStyle = 'scrollbar'; // needed for WinJS apps
            document.body.appendChild(outer);
            /** @type {?} */
            var widthNoScroll = outer.offsetWidth;
            // force scrollbars
            outer.style.overflow = 'scroll';
            // add inner div
            /** @type {?} */
            var inner = document.createElement('div');
            inner.style.width = '100%';
            outer.appendChild(inner);
            /** @type {?} */
            var widthWithScroll = inner.offsetWidth;
            // remove divs
            outer.parentNode.removeChild(outer);
            this.scrollbarWidthValue = widthNoScroll - widthWithScroll;
        }
    };
    Object.defineProperty(GlobalRefService.prototype, "scrollbarWidth", {
        /**
         * Get scrollbar width.
         * @returns Scroll bar width.
         */
        get: /**
         * Get scrollbar width.
         * @return {?} Scroll bar width.
         */
        function () {
            return this.scrollbarWidthValue;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GlobalRefService.prototype, "window", {
        /**
         * Get window reference.
         * @return Window reference.
         */
        get: /**
         * Get window reference.
         * @return {?} Window reference.
         */
        function () {
            return window;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GlobalRefService.prototype, "isBrowser", {
        /**
         * Is browser environment.
         * @return True if current environment is browser.
         */
        get: /**
         * Is browser environment.
         * @return {?} True if current environment is browser.
         */
        function () {
            return typeof window !== 'undefined';
        },
        enumerable: true,
        configurable: true
    });
    GlobalRefService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    GlobalRefService.ctorParameters = function () { return []; };
    return GlobalRefService;
}());
export { GlobalRefService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    GlobalRefService.prototype.scrollbarWidthValue;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2xvYmFsLXJlZi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vb3JuYW1lbnR1bS8iLCJzb3VyY2VzIjpbInV0aWxpdHkvc2VydmljZXMvZ2xvYmFsLXJlZi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7O0FBSzNDO0lBSUU7UUFDRSxJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztJQUMzQixDQUFDO0lBRUQ7O09BRUc7Ozs7O0lBQ0ksNENBQWlCOzs7O0lBQXhCO1FBQ0UsSUFBSSxJQUFJLENBQUMsbUJBQW1CLEtBQUssU0FBUyxFQUFFO1lBQzFDLE9BQU87U0FDUjtRQUVELElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTs7Z0JBQ1osS0FBSyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDO1lBQzNDLEtBQUssQ0FBQyxLQUFLLENBQUMsVUFBVSxHQUFHLFFBQVEsQ0FBQztZQUNsQyxLQUFLLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxPQUFPLENBQUM7WUFDNUIsS0FBSyxDQUFDLEtBQUssQ0FBQyxlQUFlLEdBQUcsV0FBVyxDQUFDLENBQUMsd0JBQXdCO1lBRW5FLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDOztnQkFFM0IsYUFBYSxHQUFHLEtBQUssQ0FBQyxXQUFXO1lBQ3ZDLG1CQUFtQjtZQUNuQixLQUFLLENBQUMsS0FBSyxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7OztnQkFHMUIsS0FBSyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDO1lBQzNDLEtBQUssQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQztZQUMzQixLQUFLLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDOztnQkFFbkIsZUFBZSxHQUFHLEtBQUssQ0FBQyxXQUFXO1lBRXpDLGNBQWM7WUFDZCxLQUFLLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUVwQyxJQUFJLENBQUMsbUJBQW1CLEdBQUcsYUFBYSxHQUFHLGVBQWUsQ0FBQztTQUM1RDtJQUNILENBQUM7SUFNRCxzQkFBVyw0Q0FBYztRQUp6Qjs7O1dBR0c7Ozs7O1FBQ0g7WUFDRSxPQUFPLElBQUksQ0FBQyxtQkFBbUIsQ0FBQztRQUNsQyxDQUFDOzs7T0FBQTtJQUtELHNCQUFXLG9DQUFNO1FBSmpCOzs7V0FHRzs7Ozs7UUFDSDtZQUNFLE9BQU8sTUFBTSxDQUFDO1FBQ2hCLENBQUM7OztPQUFBO0lBTUQsc0JBQVcsdUNBQVM7UUFKcEI7OztXQUdHOzs7OztRQUNIO1lBQ0UsT0FBTyxPQUFPLE1BQU0sS0FBSyxXQUFXLENBQUM7UUFDdkMsQ0FBQzs7O09BQUE7O2dCQS9ERixVQUFVOzs7O0lBZ0VYLHVCQUFDO0NBQUEsQUFoRUQsSUFnRUM7U0EvRFksZ0JBQWdCOzs7Ozs7SUFDM0IsK0NBQW9DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKipcbiAqIEdsb2JhbCByZWZlcmVuY2Ugc2VydmljZTsgTGlzdCBhbGwgZ2xvYmFsIGphdmFzY3JpcHQgcmVmZXJlbmNlcyBoZXJlLlxuICovXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgR2xvYmFsUmVmU2VydmljZSB7XG4gIHByaXZhdGUgc2Nyb2xsYmFyV2lkdGhWYWx1ZTogbnVtYmVyO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuc2V0U2Nyb2xsYmFyV2lkdGgoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgc2Nyb2xsYmFyIHdpZHRoIG9mIGN1cnJlbnQgYnJvd3NlciBlbnZpcm9ubWVudDsgT255IHNldCBvbiBicm93c2VyIGVudmlyb25tZW50IHRvIHN1cHBvcnQgU1NSLlxuICAgKi9cbiAgcHVibGljIHNldFNjcm9sbGJhcldpZHRoKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnNjcm9sbGJhcldpZHRoVmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmlzQnJvd3Nlcikge1xuICAgICAgY29uc3Qgb3V0ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIG91dGVyLnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcbiAgICAgIG91dGVyLnN0eWxlLndpZHRoID0gJzEwMHB4JztcbiAgICAgIG91dGVyLnN0eWxlLm1zT3ZlcmZsb3dTdHlsZSA9ICdzY3JvbGxiYXInOyAvLyBuZWVkZWQgZm9yIFdpbkpTIGFwcHNcblxuICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChvdXRlcik7XG5cbiAgICAgIGNvbnN0IHdpZHRoTm9TY3JvbGwgPSBvdXRlci5vZmZzZXRXaWR0aDtcbiAgICAgIC8vIGZvcmNlIHNjcm9sbGJhcnNcbiAgICAgIG91dGVyLnN0eWxlLm92ZXJmbG93ID0gJ3Njcm9sbCc7XG5cbiAgICAgIC8vIGFkZCBpbm5lciBkaXZcbiAgICAgIGNvbnN0IGlubmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBpbm5lci5zdHlsZS53aWR0aCA9ICcxMDAlJztcbiAgICAgIG91dGVyLmFwcGVuZENoaWxkKGlubmVyKTtcblxuICAgICAgY29uc3Qgd2lkdGhXaXRoU2Nyb2xsID0gaW5uZXIub2Zmc2V0V2lkdGg7XG5cbiAgICAgIC8vIHJlbW92ZSBkaXZzXG4gICAgICBvdXRlci5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKG91dGVyKTtcblxuICAgICAgdGhpcy5zY3JvbGxiYXJXaWR0aFZhbHVlID0gd2lkdGhOb1Njcm9sbCAtIHdpZHRoV2l0aFNjcm9sbDtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogR2V0IHNjcm9sbGJhciB3aWR0aC5cbiAgICogQHJldHVybnMgU2Nyb2xsIGJhciB3aWR0aC5cbiAgICovXG4gIHB1YmxpYyBnZXQgc2Nyb2xsYmFyV2lkdGgoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5zY3JvbGxiYXJXaWR0aFZhbHVlO1xuICB9XG4gIC8qKlxuICAgKiBHZXQgd2luZG93IHJlZmVyZW5jZS5cbiAgICogQHJldHVybiBXaW5kb3cgcmVmZXJlbmNlLlxuICAgKi9cbiAgcHVibGljIGdldCB3aW5kb3coKTogV2luZG93IHtcbiAgICByZXR1cm4gd2luZG93O1xuICB9XG5cbiAgLyoqXG4gICAqIElzIGJyb3dzZXIgZW52aXJvbm1lbnQuXG4gICAqIEByZXR1cm4gVHJ1ZSBpZiBjdXJyZW50IGVudmlyb25tZW50IGlzIGJyb3dzZXIuXG4gICAqL1xuICBwdWJsaWMgZ2V0IGlzQnJvd3NlcigpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCc7XG4gIH1cbn1cbiJdfQ==