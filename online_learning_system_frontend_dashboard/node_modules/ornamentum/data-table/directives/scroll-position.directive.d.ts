import { ElementRef, AfterViewInit, NgZone, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { DataTableScrollPoint } from '../models/data-table-scroll-point.model';
/**
 * Scroll position directive.
 * Track current scroll position of target element.
 */
export declare class ScrollPositionDirective implements AfterViewInit, OnDestroy {
    private el;
    private zone;
    private scrollEventSubscription;
    ngScrollPosition: Subject<DataTableScrollPoint>;
    constructor(el: ElementRef, zone: NgZone);
    /**
     * After component initialize lifecycle event handler.
     */
    ngAfterViewInit(): void;
    /**
     * Component destroy lifecycle event handler.
     */
    ngOnDestroy(): void;
}
