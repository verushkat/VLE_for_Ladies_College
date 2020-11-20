import { TemplateRef } from '@angular/core';
import { DropdownOption } from '../models/dropdown-option.model';
import { DropdownDataBindCallback } from '../models/dropdown-data-bind-callback.model';
import { DropdownOptionGroup } from '../models/dropdown-option-group.model';
import { ComponentLoader } from '../../utility/utility.module';
/**
 * Dropdown data state service; Manage dropdown state data.
 */
export declare class DropdownDataStateService {
    id: string;
    dataLoading: boolean;
    selectedOption: any;
    selectedOptions: any[];
    offset: number;
    totalOptionCount: number;
    currentOptionCount: number;
    dropdownOptions: DropdownOption[];
    dropdownOptionGroups: DropdownOptionGroup[];
    filterText: string;
    disabled: boolean;
    componentLoaderRef: ComponentLoader<any>;
    dropdownOptionTemplate: TemplateRef<any>;
    dropdownOptionGroupHeaderTemplate: TemplateRef<any>;
    onDataBind: DropdownDataBindCallback<any>;
    /**
     * Get dropdown option unique id.
     * @param append Target identifier.
     * @param index Target index.
     */
    getUniqueId(append: string, index: number): string;
}
