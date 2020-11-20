import { EventEmitter, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { DataTableFilterEventArgs } from '../../models/data-table-filter-event-args.model';
import { DataTableFilterOption } from '../../models/data-table-filter-option.model';
import { DataTableColumnComponent } from '../data-table-column/data-table-column.component';
import { DropdownComponent } from '../../../dropdown/components/dropdown/dropdown.component';
import { DataTableConfigService } from '../../services/data-table-config.service';
import { DataTableEventStateService } from '../../services/data-table-event.service';
import { DataTableDataStateService } from '../../services/data-table-data-state.service';
import { DataTableScrollPositionService } from '../../services/data-table-scroll-position.service';
/**
 * Column filter template component. Render column filter template via this component.
 */
export declare class DataTableColumnFilterTemplateComponent implements OnInit, OnDestroy {
    config: DataTableConfigService;
    dataStateService: DataTableDataStateService;
    private eventStateService;
    private scrollPositionService;
    column: DataTableColumnComponent;
    customFilterStream: Observable<DataTableFilterEventArgs>;
    index: number;
    filter: EventEmitter<{}>;
    filterDataStream: Subject<DataTableFilterOption[]>;
    private fetchFilterOptionsStreamSubscription;
    private scrollPositionStreamSubscription;
    private filterDropdown;
    constructor(config: DataTableConfigService, dataStateService: DataTableDataStateService, eventStateService: DataTableEventStateService, scrollPositionService: DataTableScrollPositionService);
    /**
     * Component initialize lifecycle event.
     */
    ngOnInit(): void;
    /**
     * Component destroy lifecycle event.
     */
    ngOnDestroy(): void;
    onFilterDropdownInit(filterDropdown: DropdownComponent): void;
    /**
     * Clear current column filter value.
     */
    clearFilter(): void;
}
