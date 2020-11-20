import { OnDestroy, OnInit } from '@angular/core';
import { DropdownConfigService } from '../../services/dropdown-config.service';
import { DropdownDataStateService } from '../../services/dropdown-data-state.service';
import { DropdownEventStateService } from '../../services/dropdown-event-state.service';
/**
 * Dropdown filter component.
 */
export declare class DropdownFilterComponent implements OnDestroy, OnInit {
    config: DropdownConfigService;
    dataStateService: DropdownDataStateService;
    eventStateService: DropdownEventStateService;
    private dataFilterStream;
    private dataFilterSubscription;
    constructor(config: DropdownConfigService, dataStateService: DropdownDataStateService, eventStateService: DropdownEventStateService);
    /**
     * Clear applied filter value.
     */
    clearFilter(): void;
    /**
     * Filter key up event handler.
     */
    filterKeyUp(): void;
    /**
     * Initialize filter stream debounce.
     */
    private initFilterDebounceEvent;
    /**
     * Lifecycle hook that is called when component is destroyed.
     */
    ngOnDestroy(): void;
    /**
     * Lifecycle hook that is called when component is initialized.
     */
    ngOnInit(): void;
}
