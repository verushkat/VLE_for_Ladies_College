import { TemplateRef } from '@angular/core';
import { DataTableConfigService } from '../../services/data-table-config.service';
import { DataTableDataStateService } from '../../services/data-table-data-state.service';
/**
 * Data loading spinner component. Displayed within table body while fetching data.
 */
export declare class DataTableLoadingSpinnerComponent {
    config: DataTableConfigService;
    dataStateService: DataTableDataStateService;
    loadingSpinnerTemplate: TemplateRef<any>;
    isLoading: boolean;
    showOverlay: boolean;
    constructor(config: DataTableConfigService, dataStateService: DataTableDataStateService);
}
