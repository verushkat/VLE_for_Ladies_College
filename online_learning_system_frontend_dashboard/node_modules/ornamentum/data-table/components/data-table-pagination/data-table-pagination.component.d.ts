import { OnInit } from '@angular/core';
import { DataTableConfigService } from '../../services/data-table-config.service';
import { DataTableDataStateService } from '../../services/data-table-data-state.service';
import { DataTableEventStateService } from '../../services/data-table-event.service';
import { ResizeService } from '../../../utility/services/resize.service';
/**
 * Data table pagination component. Render data table paginator widget.
 */
export declare class DataTablePaginationComponent implements OnInit {
    config: DataTableConfigService;
    dataStateService: DataTableDataStateService;
    private eventStateService;
    private resizeService;
    private paginationContainer;
    isMobile: boolean;
    constructor(config: DataTableConfigService, dataStateService: DataTableDataStateService, eventStateService: DataTableEventStateService, resizeService: ResizeService);
    /**
     * Set mobile mode state.
     */
    private setMobileModeState;
    /**
     * First page click event handler.
     */
    firstPageClick(): void;
    /**
     * Previous page click event handler.
     */
    previousPageClick(): void;
    /**
     * Next page click event handler.
     */
    nextPageClick(): void;
    /**
     * Last page click event handler.
     */
    lastPageClick(): void;
    /**
     * Get maximum page count.
     */
    readonly maxPage: number;
    /**
     * Get page number.
     */
    readonly page: number;
    /**
     * Check limit invalid status. True if limit is invalid.
     * @param element Limit input DOM element.
     * @return Invalid status.
     */
    isInvalidLimit(element: HTMLInputElement): boolean;
    /**
     * On page size change event handler.
     * @param element HTML input element.
     */
    onPageSizeChange(element: HTMLInputElement): void;
    /**
     * On page size revert event handler.
     * @param element HTML input element.
     */
    onPageSizeRevert(element: HTMLInputElement): void;
    /**
     * Is invalid page index; True if page index is invalid.
     * @param element Page index DOM element.
     * @return Invalid status.
     */
    isInvalidPageIndex(element: HTMLInputElement): boolean;
    /**
     * On page size change event handler.
     * @param element HTML input element.
     */
    onPageIndexChange(element: HTMLInputElement): void;
    /**
     * On page size revert event handler.
     * @param element HTML input element.
     */
    onPageIndexRevert(element: HTMLInputElement): void;
    /**
     * Get previous page availability status.
     */
    readonly hasPrevious: boolean;
    /**
     * Get next page availability status.
     */
    readonly hasNext: boolean;
    /**
     * Get start row index.
     */
    readonly startRowIndex: number;
    /**
     * Get end row index.
     */
    readonly endRowIndex: number;
    /**
     * Prevent invalid key press.
     * @param event Keyboard event argument object.
     */
    preventInvalidKeyPress(event: KeyboardEvent): void;
    /**
     * component init lifecycle event handler.
     */
    ngOnInit(): void;
}
