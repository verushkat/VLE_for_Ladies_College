import { DropdownOption } from '../../models/dropdown-option.model';
import { DropdownDataStateService } from '../../services/dropdown-data-state.service';
import { DropdownConfigService } from '../../services/dropdown-config.service';
import { DropdownEventStateService } from '../../services/dropdown-event-state.service';
/**
 * Dropdown options list component.
 */
export declare class DropdownOptionsComponent {
    config: DropdownConfigService;
    dataStateService: DropdownDataStateService;
    private eventStateService;
    constructor(config: DropdownConfigService, dataStateService: DropdownDataStateService, eventStateService: DropdownEventStateService);
    /**
     * Unique data row tracking callback.
     * @param index Current index.
     * @param option Dropdown option reference.
     */
    optionTrackBy(index: number, option: DropdownOption): number;
    /**
     * Get selected state by option identifier.
     * @param id Option select track by identifier.
     */
    getSelectedState(id: any): boolean;
    /**
     * Option click event handler.
     * @param option Option object reference.
     * @param event Click event arguments object.
     */
    onOptionClick(option: DropdownOption, event: MouseEvent): void;
    /**
     * Option checkbox click event handler.
     * @param option Option object reference.
     * @param event Click event arguments object.
     */
    onOptionCheckboxClick(option: DropdownOption, event: MouseEvent): void;
    /**
     * Toggle option select state and update selected items depending on select mode.
     * @param option Option object reference.
     */
    toggleOptionSelectedState(option: DropdownOption): void;
}
