import { AfterViewInit, ElementRef, EventEmitter } from '@angular/core';
/**
 * Element width directive.
 * Used to emit target element width after view init.
 */
export declare class ElementWidthDirective implements AfterViewInit {
    private el;
    ngElementWidth: EventEmitter<{}>;
    constructor(el: ElementRef);
    /**
     * After component view initialize lifecycle event handler.
     */
    ngAfterViewInit(): void;
}
