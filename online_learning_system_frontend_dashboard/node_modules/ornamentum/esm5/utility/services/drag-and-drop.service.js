/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
/**
 * Element drag and drop service.
 */
var DragAndDropService = /** @class */ (function () {
    function DragAndDropService() {
    }
    /**
     * Register drag and drop event.
     * @param event Mouse event reference.
     * @param move Mouse move event handler.
     * @param up Mouse up Event handler.
     */
    /**
     * Register drag and drop event.
     * @param {?} event Mouse event reference.
     * @param {?} __1
     * @return {?}
     */
    DragAndDropService.prototype.drag = /**
     * Register drag and drop event.
     * @param {?} event Mouse event reference.
     * @param {?} __1
     * @return {?}
     */
    function (event, _a) {
        var move = _a.move, up = _a.up;
        /** @type {?} */
        var startX = event.pageX;
        /** @type {?} */
        var startY = event.pageY;
        /** @type {?} */
        var x = startX;
        /** @type {?} */
        var y = startY;
        /** @type {?} */
        var moved = false;
        /** @type {?} */
        var mouseMoveHandler = (/**
         * @param {?} mouseMoveEvent
         * @return {?}
         */
        function (mouseMoveEvent) {
            /** @type {?} */
            var dx = mouseMoveEvent.pageX - x;
            /** @type {?} */
            var dy = mouseMoveEvent.pageY - y;
            x = mouseMoveEvent.pageX;
            y = mouseMoveEvent.pageY;
            if (dx || dy) {
                moved = true;
            }
            move(mouseMoveEvent, dx, dy, x, y);
            mouseMoveEvent.preventDefault(); // to avoid text selection
        });
        /** @type {?} */
        var mouseUpHandler = (/**
         * @param {?} mouseUpEvent
         * @return {?}
         */
        function (mouseUpEvent) {
            x = mouseUpEvent.pageX;
            y = mouseUpEvent.pageY;
            document.removeEventListener('mousemove', mouseMoveHandler);
            document.removeEventListener('mouseup', mouseUpHandler);
            if (up) {
                up(mouseUpEvent, x, y, moved);
            }
        });
        document.addEventListener('mousemove', mouseMoveHandler);
        document.addEventListener('mouseup', mouseUpHandler);
    };
    DragAndDropService.decorators = [
        { type: Injectable }
    ];
    return DragAndDropService;
}());
export { DragAndDropService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJhZy1hbmQtZHJvcC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vb3JuYW1lbnR1bS8iLCJzb3VyY2VzIjpbInV0aWxpdHkvc2VydmljZXMvZHJhZy1hbmQtZHJvcC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7O0FBUTNDO0lBQUE7SUE0Q0EsQ0FBQztJQTFDQzs7Ozs7T0FLRzs7Ozs7OztJQUNJLGlDQUFJOzs7Ozs7SUFBWCxVQUFZLEtBQWlCLEVBQUUsRUFBbUQ7WUFBakQsY0FBSSxFQUFFLFVBQUU7O1lBQ2pDLE1BQU0sR0FBRyxLQUFLLENBQUMsS0FBSzs7WUFDcEIsTUFBTSxHQUFHLEtBQUssQ0FBQyxLQUFLOztZQUN0QixDQUFDLEdBQUcsTUFBTTs7WUFDVixDQUFDLEdBQUcsTUFBTTs7WUFDVixLQUFLLEdBQUcsS0FBSzs7WUFFWCxnQkFBZ0I7Ozs7UUFBRyxVQUFDLGNBQTBCOztnQkFDNUMsRUFBRSxHQUFHLGNBQWMsQ0FBQyxLQUFLLEdBQUcsQ0FBQzs7Z0JBQzdCLEVBQUUsR0FBRyxjQUFjLENBQUMsS0FBSyxHQUFHLENBQUM7WUFDbkMsQ0FBQyxHQUFHLGNBQWMsQ0FBQyxLQUFLLENBQUM7WUFDekIsQ0FBQyxHQUFHLGNBQWMsQ0FBQyxLQUFLLENBQUM7WUFDekIsSUFBSSxFQUFFLElBQUksRUFBRSxFQUFFO2dCQUNaLEtBQUssR0FBRyxJQUFJLENBQUM7YUFDZDtZQUVELElBQUksQ0FBQyxjQUFjLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFFbkMsY0FBYyxDQUFDLGNBQWMsRUFBRSxDQUFDLENBQUMsMEJBQTBCO1FBQzdELENBQUMsQ0FBQTs7WUFFSyxjQUFjOzs7O1FBQUcsVUFBQyxZQUF3QjtZQUM5QyxDQUFDLEdBQUcsWUFBWSxDQUFDLEtBQUssQ0FBQztZQUN2QixDQUFDLEdBQUcsWUFBWSxDQUFDLEtBQUssQ0FBQztZQUV2QixRQUFRLENBQUMsbUJBQW1CLENBQUMsV0FBVyxFQUFFLGdCQUFnQixDQUFDLENBQUM7WUFDNUQsUUFBUSxDQUFDLG1CQUFtQixDQUFDLFNBQVMsRUFBRSxjQUFjLENBQUMsQ0FBQztZQUV4RCxJQUFJLEVBQUUsRUFBRTtnQkFDTixFQUFFLENBQUMsWUFBWSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7YUFDL0I7UUFDSCxDQUFDLENBQUE7UUFFRCxRQUFRLENBQUMsZ0JBQWdCLENBQUMsV0FBVyxFQUFFLGdCQUFnQixDQUFDLENBQUM7UUFDekQsUUFBUSxDQUFDLGdCQUFnQixDQUFDLFNBQVMsRUFBRSxjQUFjLENBQUMsQ0FBQztJQUN2RCxDQUFDOztnQkEzQ0YsVUFBVTs7SUE0Q1gseUJBQUM7Q0FBQSxBQTVDRCxJQTRDQztTQTNDWSxrQkFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmV4cG9ydCB0eXBlIE1vdmVIYW5kbGVyID0gKGV2ZW50OiBNb3VzZUV2ZW50LCBkeDogbnVtYmVyLCBkeTogbnVtYmVyLCB4OiBudW1iZXIsIHk6IG51bWJlcikgPT4gdm9pZDtcbmV4cG9ydCB0eXBlIFVwSGFuZGxlciA9IChldmVudDogTW91c2VFdmVudCwgeDogbnVtYmVyLCB5OiBudW1iZXIsIG1vdmVkOiBib29sZWFuKSA9PiB2b2lkO1xuXG4vKipcbiAqIEVsZW1lbnQgZHJhZyBhbmQgZHJvcCBzZXJ2aWNlLlxuICovXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRHJhZ0FuZERyb3BTZXJ2aWNlIHtcbiAgLyoqXG4gICAqIFJlZ2lzdGVyIGRyYWcgYW5kIGRyb3AgZXZlbnQuXG4gICAqIEBwYXJhbSBldmVudCBNb3VzZSBldmVudCByZWZlcmVuY2UuXG4gICAqIEBwYXJhbSBtb3ZlIE1vdXNlIG1vdmUgZXZlbnQgaGFuZGxlci5cbiAgICogQHBhcmFtIHVwIE1vdXNlIHVwIEV2ZW50IGhhbmRsZXIuXG4gICAqL1xuICBwdWJsaWMgZHJhZyhldmVudDogTW91c2VFdmVudCwgeyBtb3ZlLCB1cCB9OiB7IG1vdmU6IE1vdmVIYW5kbGVyOyB1cD86IFVwSGFuZGxlciB9KTogdm9pZCB7XG4gICAgY29uc3Qgc3RhcnRYID0gZXZlbnQucGFnZVg7XG4gICAgY29uc3Qgc3RhcnRZID0gZXZlbnQucGFnZVk7XG4gICAgbGV0IHggPSBzdGFydFg7XG4gICAgbGV0IHkgPSBzdGFydFk7XG4gICAgbGV0IG1vdmVkID0gZmFsc2U7XG5cbiAgICBjb25zdCBtb3VzZU1vdmVIYW5kbGVyID0gKG1vdXNlTW92ZUV2ZW50OiBNb3VzZUV2ZW50KTogdm9pZCA9PiB7XG4gICAgICBjb25zdCBkeCA9IG1vdXNlTW92ZUV2ZW50LnBhZ2VYIC0geDtcbiAgICAgIGNvbnN0IGR5ID0gbW91c2VNb3ZlRXZlbnQucGFnZVkgLSB5O1xuICAgICAgeCA9IG1vdXNlTW92ZUV2ZW50LnBhZ2VYO1xuICAgICAgeSA9IG1vdXNlTW92ZUV2ZW50LnBhZ2VZO1xuICAgICAgaWYgKGR4IHx8IGR5KSB7XG4gICAgICAgIG1vdmVkID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgbW92ZShtb3VzZU1vdmVFdmVudCwgZHgsIGR5LCB4LCB5KTtcblxuICAgICAgbW91c2VNb3ZlRXZlbnQucHJldmVudERlZmF1bHQoKTsgLy8gdG8gYXZvaWQgdGV4dCBzZWxlY3Rpb25cbiAgICB9O1xuXG4gICAgY29uc3QgbW91c2VVcEhhbmRsZXIgPSAobW91c2VVcEV2ZW50OiBNb3VzZUV2ZW50KTogdm9pZCA9PiB7XG4gICAgICB4ID0gbW91c2VVcEV2ZW50LnBhZ2VYO1xuICAgICAgeSA9IG1vdXNlVXBFdmVudC5wYWdlWTtcblxuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgbW91c2VNb3ZlSGFuZGxlcik7XG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgbW91c2VVcEhhbmRsZXIpO1xuXG4gICAgICBpZiAodXApIHtcbiAgICAgICAgdXAobW91c2VVcEV2ZW50LCB4LCB5LCBtb3ZlZCk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIG1vdXNlTW92ZUhhbmRsZXIpO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBtb3VzZVVwSGFuZGxlcik7XG4gIH1cbn1cbiJdfQ==