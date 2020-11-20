import { DataTableColumnComponent } from '../data-table-column/data-table-column.component';
import { DataTableConfigService } from '../../services/data-table-config.service';
/**
 * Data table column group component. This component wraps data table column groups.
 */
export declare class DataTableColGroupComponent {
    config: DataTableConfigService;
    columns: DataTableColumnComponent;
    constructor(config: DataTableConfigService);
}
