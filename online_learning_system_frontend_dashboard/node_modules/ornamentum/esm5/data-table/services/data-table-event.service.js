/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { EventEmitter, Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
/**
 * Data table event state service; Manage all internal data tale event streams.
 */
var DataTableEventStateService = /** @class */ (function () {
    function DataTableEventStateService() {
        this.allRowSelectChangeStream = new EventEmitter();
        this.dataFetchStream = new EventEmitter();
        this.headerClickStream = new EventEmitter();
        this.rowBindStream = new EventEmitter();
        this.rowClickStream = new EventEmitter();
        this.rowDoubleClickStream = new EventEmitter();
        this.rowSelectChangeStream = new EventEmitter();
        this.cellBindStream = new EventEmitter();
        this.cellClickStream = new EventEmitter();
        this.initStream = new EventEmitter();
        this.dataBoundStream = new EventEmitter();
        this.columnBind = new EventEmitter();
        this.fetchFilterOptionsStream = new ReplaySubject(1);
        this.staticDataSourceStream = new ReplaySubject(1);
    }
    DataTableEventStateService.decorators = [
        { type: Injectable }
    ];
    return DataTableEventStateService;
}());
export { DataTableEventStateService };
if (false) {
    /** @type {?} */
    DataTableEventStateService.prototype.allRowSelectChangeStream;
    /** @type {?} */
    DataTableEventStateService.prototype.dataFetchStream;
    /** @type {?} */
    DataTableEventStateService.prototype.headerClickStream;
    /** @type {?} */
    DataTableEventStateService.prototype.rowBindStream;
    /** @type {?} */
    DataTableEventStateService.prototype.rowClickStream;
    /** @type {?} */
    DataTableEventStateService.prototype.rowDoubleClickStream;
    /** @type {?} */
    DataTableEventStateService.prototype.rowSelectChangeStream;
    /** @type {?} */
    DataTableEventStateService.prototype.cellBindStream;
    /** @type {?} */
    DataTableEventStateService.prototype.cellClickStream;
    /** @type {?} */
    DataTableEventStateService.prototype.initStream;
    /** @type {?} */
    DataTableEventStateService.prototype.dataBoundStream;
    /** @type {?} */
    DataTableEventStateService.prototype.columnBind;
    /** @type {?} */
    DataTableEventStateService.prototype.fetchFilterOptionsStream;
    /** @type {?} */
    DataTableEventStateService.prototype.staticDataSourceStream;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS10YWJsZS1ldmVudC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vb3JuYW1lbnR1bS8iLCJzb3VyY2VzIjpbImRhdGEtdGFibGUvc2VydmljZXMvZGF0YS10YWJsZS1ldmVudC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV6RCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sTUFBTSxDQUFDOzs7O0FBaUJyQztJQUFBO1FBRVMsNkJBQXdCLEdBQUcsSUFBSSxZQUFZLEVBQVcsQ0FBQztRQUN2RCxvQkFBZSxHQUFHLElBQUksWUFBWSxFQUFpQixDQUFDO1FBQ3BELHNCQUFpQixHQUFHLElBQUksWUFBWSxFQUFpQyxDQUFDO1FBQ3RFLGtCQUFhLEdBQUcsSUFBSSxZQUFZLEVBQXFCLENBQUM7UUFDdEQsbUJBQWMsR0FBRyxJQUFJLFlBQVksRUFBbUMsQ0FBQztRQUNyRSx5QkFBb0IsR0FBRyxJQUFJLFlBQVksRUFBc0MsQ0FBQztRQUM5RSwwQkFBcUIsR0FBRyxJQUFJLFlBQVksRUFBZSxDQUFDO1FBQ3hELG1CQUFjLEdBQUcsSUFBSSxZQUFZLEVBQW1DLENBQUM7UUFDckUsb0JBQWUsR0FBRyxJQUFJLFlBQVksRUFBb0MsQ0FBQztRQUN2RSxlQUFVLEdBQUcsSUFBSSxZQUFZLEVBQXNCLENBQUM7UUFDcEQsb0JBQWUsR0FBRyxJQUFJLFlBQVksRUFBUSxDQUFDO1FBQzNDLGVBQVUsR0FBRyxJQUFJLFlBQVksRUFBNEIsQ0FBQztRQUMxRCw2QkFBd0IsR0FBRyxJQUFJLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNoRCwyQkFBc0IsR0FBRyxJQUFJLGFBQWEsQ0FBUSxDQUFDLENBQUMsQ0FBQztJQUM5RCxDQUFDOztnQkFoQkEsVUFBVTs7SUFnQlgsaUNBQUM7Q0FBQSxBQWhCRCxJQWdCQztTQWZZLDBCQUEwQjs7O0lBQ3JDLDhEQUE4RDs7SUFDOUQscURBQTJEOztJQUMzRCx1REFBNkU7O0lBQzdFLG1EQUE2RDs7SUFDN0Qsb0RBQTRFOztJQUM1RSwwREFBcUY7O0lBQ3JGLDJEQUErRDs7SUFDL0Qsb0RBQTRFOztJQUM1RSxxREFBOEU7O0lBQzlFLGdEQUEyRDs7SUFDM0QscURBQWtEOztJQUNsRCxnREFBaUU7O0lBQ2pFLDhEQUF1RDs7SUFDdkQsNERBQTREIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXZlbnRFbWl0dGVyLCBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFJlcGxheVN1YmplY3QgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgRGF0YVRhYmxlSGVhZGVyQ2xpY2tFdmVudEFyZ3MgfSBmcm9tICcuLi9tb2RlbHMvZGF0YS10YWJsZS1oZWFkZXItY2xpY2stZXZlbnQtYXJncy5tb2RlbCc7XG5pbXBvcnQgeyBEYXRhVGFibGVSb3cgfSBmcm9tICcuLi9tb2RlbHMvZGF0YS10YWJsZS1yb3cubW9kZWwnO1xuaW1wb3J0IHsgRGF0YVRhYmxlUm93Q2xpY2tFdmVudEFyZ3MgfSBmcm9tICcuLi9tb2RlbHMvZGF0YS10YWJsZS1yb3ctY2xpY2stZXZlbnQtYXJncy5tb2RlbCc7XG5pbXBvcnQgeyBEYXRhVGFibGVEb3VibGVDbGlja0V2ZW50QXJncyB9IGZyb20gJy4uL21vZGVscy9kYXRhLXRhYmxlLWRvdWJsZS1jbGljay1ldmVudC1hcmdzLm1vZGVsJztcbmltcG9ydCB7IERhdGFUYWJsZUNlbGxCaW5kRXZlbnRBcmdzIH0gZnJvbSAnLi4vbW9kZWxzL2RhdGEtdGFibGUtY2VsbC1iaW5kLWV2ZW50LWFyZ3MubW9kZWwnO1xuaW1wb3J0IHsgRGF0YVRhYmxlQ2VsbENsaWNrRXZlbnRBcmdzIH0gZnJvbSAnLi4vbW9kZWxzL2RhdGEtdGFibGUtY2VsbC1jbGljay1ldmVudC1hcmdzLm1vZGVsJztcblxuaW1wb3J0IHsgRGF0YUZldGNoTW9kZSB9IGZyb20gJy4uL21vZGVscy9kYXRhLWZldGNoLW1vZGUuZW51bSc7XG5cbmltcG9ydCB7IERhdGFUYWJsZUNvbXBvbmVudCB9IGZyb20gJy4uL2NvbXBvbmVudHMvZGF0YS10YWJsZS9kYXRhLXRhYmxlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBEYXRhVGFibGVDb2x1bW5Db21wb25lbnQgfSBmcm9tICcuLi9jb21wb25lbnRzL2RhdGEtdGFibGUtY29sdW1uL2RhdGEtdGFibGUtY29sdW1uLmNvbXBvbmVudCc7XG5cbi8qKlxuICogRGF0YSB0YWJsZSBldmVudCBzdGF0ZSBzZXJ2aWNlOyBNYW5hZ2UgYWxsIGludGVybmFsIGRhdGEgdGFsZSBldmVudCBzdHJlYW1zLlxuICovXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRGF0YVRhYmxlRXZlbnRTdGF0ZVNlcnZpY2Uge1xuICBwdWJsaWMgYWxsUm93U2VsZWN0Q2hhbmdlU3RyZWFtID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xuICBwdWJsaWMgZGF0YUZldGNoU3RyZWFtID0gbmV3IEV2ZW50RW1pdHRlcjxEYXRhRmV0Y2hNb2RlPigpO1xuICBwdWJsaWMgaGVhZGVyQ2xpY2tTdHJlYW0gPSBuZXcgRXZlbnRFbWl0dGVyPERhdGFUYWJsZUhlYWRlckNsaWNrRXZlbnRBcmdzPigpO1xuICBwdWJsaWMgcm93QmluZFN0cmVhbSA9IG5ldyBFdmVudEVtaXR0ZXI8RGF0YVRhYmxlUm93PGFueT4+KCk7XG4gIHB1YmxpYyByb3dDbGlja1N0cmVhbSA9IG5ldyBFdmVudEVtaXR0ZXI8RGF0YVRhYmxlUm93Q2xpY2tFdmVudEFyZ3M8YW55Pj4oKTtcbiAgcHVibGljIHJvd0RvdWJsZUNsaWNrU3RyZWFtID0gbmV3IEV2ZW50RW1pdHRlcjxEYXRhVGFibGVEb3VibGVDbGlja0V2ZW50QXJnczxhbnk+PigpO1xuICBwdWJsaWMgcm93U2VsZWN0Q2hhbmdlU3RyZWFtID0gbmV3IEV2ZW50RW1pdHRlcjxhbnkgfCBhbnlbXT4oKTtcbiAgcHVibGljIGNlbGxCaW5kU3RyZWFtID0gbmV3IEV2ZW50RW1pdHRlcjxEYXRhVGFibGVDZWxsQmluZEV2ZW50QXJnczxhbnk+PigpO1xuICBwdWJsaWMgY2VsbENsaWNrU3RyZWFtID0gbmV3IEV2ZW50RW1pdHRlcjxEYXRhVGFibGVDZWxsQ2xpY2tFdmVudEFyZ3M8YW55Pj4oKTtcbiAgcHVibGljIGluaXRTdHJlYW0gPSBuZXcgRXZlbnRFbWl0dGVyPERhdGFUYWJsZUNvbXBvbmVudD4oKTtcbiAgcHVibGljIGRhdGFCb3VuZFN0cmVhbSA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcbiAgcHVibGljIGNvbHVtbkJpbmQgPSBuZXcgRXZlbnRFbWl0dGVyPERhdGFUYWJsZUNvbHVtbkNvbXBvbmVudD4oKTtcbiAgcHVibGljIGZldGNoRmlsdGVyT3B0aW9uc1N0cmVhbSA9IG5ldyBSZXBsYXlTdWJqZWN0KDEpO1xuICBwdWJsaWMgc3RhdGljRGF0YVNvdXJjZVN0cmVhbSA9IG5ldyBSZXBsYXlTdWJqZWN0PGFueVtdPigxKTtcbn1cbiJdfQ==