import { OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { DropdownConfigService } from '../../services/dropdown-config.service';
import { DropdownDataStateService } from '../../services/dropdown-data-state.service';
import { DropdownEventStateService } from '../../services/dropdown-event-state.service';
/**
 * Dropdown options list view component
 */
export declare class DropdownViewComponent implements OnInit, OnDestroy {
    config: DropdownConfigService;
    dataStateService: DropdownDataStateService;
    private eventStateService;
    scrollEvent: Subject<any>;
    private scrollEventSubscription;
    constructor(config: DropdownConfigService, dataStateService: DropdownDataStateService, eventStateService: DropdownEventStateService);
    /**
     * Lifecycle hook that is called when component is initialized.
     */
    ngOnInit(): void;
    /**
     * Lifecycle hook that is called when component is destroyed.
     */
    ngOnDestroy(): void;
    /**
     * Performs data loading when scrolling when scroll threshold is met. This will be trigger only when load on scroll is enabled.
     * @param event Target event arguments reference.
     */
    checkScrollPosition(event: any): void;
}
