import { Subject } from 'rxjs';
import { DataTableScrollPoint } from '../models/data-table-scroll-point.model';
/**
 * Scroll position stream service; Manage common scroll position observable.
 */
export declare class DataTableScrollPositionService {
    scrollPositionStream: Subject<DataTableScrollPoint>;
}
