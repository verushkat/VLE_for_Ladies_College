import { AfterViewInit, ElementRef, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { DataTableScrollPoint } from '../models/data-table-scroll-point.model';
/**
 * Scroll element directive.
 * Used to set scroll position to target element.
 */
export declare class ScrollElementDirective implements AfterViewInit, OnDestroy {
    private el;
    private scrollPositionSubscription;
    ngScrollElement: Subject<DataTableScrollPoint>;
    constructor(el: ElementRef);
    /**
     * After component initialize lifecycle event handler.
     */
    ngAfterViewInit(): void;
    /**
     * Component destroy lifecycle event handler.
     */
    ngOnDestroy(): void;
}
