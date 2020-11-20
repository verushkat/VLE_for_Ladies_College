import { DataTableColumnComponent } from '../data-table-column/data-table-column.component';
import { DataTableDataStateService } from '../../services/data-table-data-state.service';
import { DataTableConfigService } from '../../services/data-table-config.service';
/**
 * Data table column selector component. Toggle display state of columns via this popup component.
 */
export declare class DataTableColumnSelectorComponent {
    dataStateService: DataTableDataStateService;
    config: DataTableConfigService;
    constructor(dataStateService: DataTableDataStateService, config: DataTableConfigService);
    columns: DataTableColumnComponent[];
    width: number | string;
}
