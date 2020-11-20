import { EventEmitter, OnInit } from '@angular/core';
/**
 * Element initialize directive; Notify on target element initialize.
 */
export declare class InitDirective implements OnInit {
    ngInit: EventEmitter<{}>;
    /**
     * On directive initialize.
     */
    ngOnInit(): void;
}
