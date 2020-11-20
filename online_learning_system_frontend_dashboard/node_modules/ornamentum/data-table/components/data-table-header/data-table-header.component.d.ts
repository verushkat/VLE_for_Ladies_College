import { Injector, OnDestroy, Renderer2 } from '@angular/core';
import { PopoverComponentLoaderFactoryService } from '../../../utility/utility.module';
import { DataTableColumnComponent } from '../data-table-column/data-table-column.component';
import { DataTableConfigService } from '../../services/data-table-config.service';
import { DataTableEventStateService } from '../../services/data-table-event.service';
import { DataTableDataStateService } from '../../services/data-table-data-state.service';
/**
 * Data table header component. Render table title header with column selector widget.
 */
export declare class DataTableHeaderComponent implements OnDestroy {
    private componentLoaderFactory;
    private injector;
    private eventStateService;
    private renderer;
    dataStateService: DataTableDataStateService;
    config: DataTableConfigService;
    private componentLoader;
    columns: DataTableColumnComponent[];
    constructor(componentLoaderFactory: PopoverComponentLoaderFactoryService, injector: Injector, eventStateService: DataTableEventStateService, renderer: Renderer2, dataStateService: DataTableDataStateService, config: DataTableConfigService);
    /**
     * Toggle column selector.
     * @param element DOM element reference.
     */
    toggleColumnSelector(element: HTMLElement): void;
    /**
     * On data reload click event handler.
     */
    onReload(): void;
    /**
     * Component destroy lifecycle event handler.
     */
    ngOnDestroy(): void;
}
