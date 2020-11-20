/**
 * Filter field mapper callback model.
 * @param value Data item.
 * @param index Item index.
 * @param array Data items.
 * @return Mapped filter value.
 */
import { DataTableFilterOption } from './data-table-filter-option.model';
export declare type DataTableFilterFieldMapperCallback = (value: any, index: number) => DataTableFilterOption[];
