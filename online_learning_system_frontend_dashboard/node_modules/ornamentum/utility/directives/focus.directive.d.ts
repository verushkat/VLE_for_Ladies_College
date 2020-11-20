import { ElementRef, OnInit } from '@angular/core';
/**
 * Element focus directive; Set focus to target element on initialize.
 */
export declare class FocusDirective implements OnInit {
    private el;
    constructor(el: ElementRef);
    /**
     * On directive initialize.
     */
    ngOnInit(): void;
}
