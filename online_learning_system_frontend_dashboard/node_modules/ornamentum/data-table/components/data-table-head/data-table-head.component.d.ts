import { DataTableColumnComponent } from '../data-table-column/data-table-column.component';
/**
 * Data table header component. Render data table column title and filter header rows.
 */
export declare class DataTableHeadComponent {
    columns: DataTableColumnComponent[];
    /**
     * Get filter column availability status.
     * @return True if there is at least one filter column.
     */
    readonly hasFilterColumns: boolean;
}
