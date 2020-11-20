import { EventEmitter, Injector, OnDestroy, OnInit, Renderer2, TemplateRef } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { Observable } from 'rxjs';
import { DropdownTranslations } from '../../models/dropdown-translations.model';
import { DropdownDataBindCallback } from '../../models/dropdown-data-bind-callback.model';
import { DropdownSelectMode } from '../../models/dropdown-select-mode.model';
import { PopoverComponentLoaderFactoryService } from '../../../utility/utility.module';
import { DropdownConfigService } from '../../services/dropdown-config.service';
import { DropdownDataStateService } from '../../services/dropdown-data-state.service';
import { DropdownEventStateService } from '../../services/dropdown-event-state.service';
import { DropdownResourceService } from '../../services/dropdown-resource.service';
import { ViewPosition } from '../../../utility/models/view-position.model';
/**
 * Dropdown main component.
 */
export declare class DropdownComponent implements OnInit, OnDestroy, ControlValueAccessor {
    private componentLoaderFactory;
    private injector;
    private eventStateService;
    private dropdownResourceService;
    private renderer;
    dataStateService: DropdownDataStateService;
    config: DropdownConfigService;
    private onSelectChangeSubscription;
    loadingSpinnerTemplate: TemplateRef<any>;
    optionTemplate: TemplateRef<any>;
    optionGroupHeaderTemplate: TemplateRef<any>;
    /**
     * Dropdown initialize event handler
     */
    init: EventEmitter<DropdownComponent>;
    /**
     * Dropdown option select change event handler
     */
    selectChange: EventEmitter<any[] | any>;
    /**
     * Dropdown data bind event handler
     */
    dataBound: EventEmitter<void>;
    /**
     * Set data bind callback. This handler is fired on each data fetch request.
     */
    onDataBind: DropdownDataBindCallback<any>;
    /**
     * Set dropdown loading spinner template reference object. Used by data table component to explicitly pass the template reference.
     */
    loadingSpinnerTemplateRef: TemplateRef<any>;
    /**
     * Set dropdown option template reference. Used by data table component to explicitly pass the template reference.
     */
    optionTemplateRef: TemplateRef<any>;
    /**
     * Set dropdown options group header template reference. Used by data table component to explicitly pass the template reference.
     */
    optionGroupHeaderTemplateRef: TemplateRef<any>;
    /**
     * Set static dropdown options collection. No need to set data source when static options collection is provided.
     */
    options: any[];
    /**
     * Set data source observable. This observable is used to retrieve dropdown options for data binding.
     */
    dataSource: Observable<any[]>;
    /**
     * Set dropdown unique identifier.
     */
    id: string;
    /**
     * Set translation data object. Used to localize table static label text.
     */
    translations: DropdownTranslations;
    /**
     * Set select option track by field path which is used to uniquely identify options for selection tracking.
     * This field support object paths expressions 'root[0].nest'.
     */
    selectTrackBy: string;
    /**
     * Set display value track by field path which is used to extract dropdown option display value.
     * This field support object paths expressions 'root[0].nest'.
     */
    displayTrackBy: string;
    /**
     * Set options group field path which is used to group the dropdown options.
     * This field support object paths expressions 'root[0].nest'.
     */
    groupByField: string;
    /**
     * Set dropdown option disable state field path which is used to disabled state dropdown options.
     * This field support object paths expressions 'root[0].nest'.
     */
    disabledTrackBy: string;
    /**
     * Set selected options collection. These options will be set selected by default on initial load.
     * Applicable only when multi select mode is enabled.
     */
    selectedOptions: any[];
    /**
     * Set selected option. This option is selected by default on initial load.
     * Applicable only when single select mode is enabled.
     */
    selectedOption: any;
    /**
     * Set number of options to fetch on scroll to bottom action when load on scroll mode is enabled.
     */
    limit: number;
    /**
     * Set wrap selected options in dropdown view and show the number of options selected instead when
     * limit is met or exceeded. Applicable only when multi select mode is enabled.
     */
    wrapDisplaySelectLimit: number;
    /**
     * Set infinite scrollable state to load data on demand with scroll motion. Dropdown data fetch call is
     * initiated with limit and offset when user scroll to bottom hence loading the full data set on init.
     */
    loadOnScroll: boolean;
    /**
     * Set view height ratio to trigger data fetch with infinite scrollable mode.
     * Higher ratio will will increase the scroll sensitivity.
     */
    loadViewDistanceRatio: number;
    /**
     * Set option select mode.
     * - 'multi' : Support selecting multiple options.
     * - 'single' : Support selecting a single option from options collection.
     * - 'single-toggle' : Support selecting a single option from options collection. Selection can not be removed but
     * only toggled by tapping on another option.
     */
    selectMode: DropdownSelectMode;
    /**
     * Show dropdown option search filter text-box if true.
     */
    filterable: boolean;
    /**
     * Set default filter value to be applied on initial load. All options are displayed when filter text value is
     * empty string. Applicable only when dropdown is filterable.
     */
    filterText: string;
    /**
     * Set time based filter debounce to optimize performance and avoid request flooding by reducing the filter
     * request frequency if true. Applicable only when dropdown filterable state is enabled.
     */
    filterDebounce: boolean;
    /**
     * Set filter debounce time in milliseconds. Applicable only when searchDebounce is true.
     */
    filterDebounceTime: number;
    /**
     * Set load data on component initialize if true.
     */
    loadDataOnInit: boolean;
    /**
     * Show selected option remove button if true.
     * Applicable only when multi select mode ios enabled.
     */
    showSelectedOptionRemoveButton: boolean;
    /**
     * Set show all select options clear button if true.
     * Applicable only when multi select mode ios enabled.
     */
    showClearSelectionButton: boolean;
    /**
     * Set options menu width in pixels.
     */
    menuWidth: number;
    /**
     * Set options menu height in pixels.
     */
    menuHeight: number;
    /**
     * Set popup options menu display position relative to dropdown component.
     * Support 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' values.
     */
    menuPosition: ViewPosition;
    /**
     * Set dropdown view disabled state.
     */
    disabled: boolean;
    /**
     * Set Close dropdown menu on option select if true.
     */
    closeMenuOnSelect: boolean;
    /**
     * Set show dropdown option select checkbox if true.
     */
    showOptionSelectCheckbox: boolean;
    /**
     * Set show dropdown option index checkbox if true.
     */
    showOptionIndex: boolean;
    /**
     * Set show dropdown option TrackBy id checkbox if true.
     */
    showOptionTrackBy: boolean;
    /**
     * Multi select option selected item maximum width. Apply ellipsis when selected option display text
     * exceed the max width.
     */
    multiSelectOptionMaxWidth: number;
    /**
     * Set first dropdown option selected on data fetch if true.
     */
    setFirstOptionSelected: boolean;
    /**
     * Trigger select change event on init if true.
     * Can be used to enable selectedOptions or selectedOption associated change trigger.
     */
    triggerSelectChangeOnInit: boolean;
    /**
     * Set trigger select change on explicit model update if true.
     * Applicable only when form binding is used.
     */
    triggerSelectChangeOnModelUpdate: boolean;
    /**
     * Set trigger select change on first option select change if true.
     * Applicable only when setFirstOptionSelected is true.
     */
    triggerSelectChangeOnFirstOptionSelect: boolean;
    /**
     * Set dynamically calculate dropdown view dimensions relative to dropdown button width.
     * MenuWith and menuHeight values are ignored when true.
     */
    dynamicDimensionCalculation: boolean;
    /**
     * Set dynamic dropdown options view dimensions calculation width ratio relative to dropdown selector.
     */
    dynamicWidthRatio: number;
    /**
     * Set dynamic dropdown options view dimensions calculation height ratio relative to dropdown selector.
     */
    dynamicHeightRatio: number;
    /**
     * Set relative parent element to render dropdown view container.
     */
    relativeParentElement: HTMLElement;
    constructor(componentLoaderFactory: PopoverComponentLoaderFactoryService, injector: Injector, eventStateService: DropdownEventStateService, dropdownResourceService: DropdownResourceService<any>, renderer: Renderer2, dataStateService: DropdownDataStateService, config: DropdownConfigService);
    /**
     * Initialize data source.
     * @param source Data source stream.
     */
    private initDataSource;
    /**
     * Performs dropdown toggle event.
     * @param event Mouse click event args.
     * @param element Dropdown button element.
     */
    toggleDropdown(event: MouseEvent, element: HTMLElement): void;
    /**
     * Get options wrapped state.
     */
    readonly wrapSelectedOptions: boolean;
    /**
     * Get wrapped option display text.
     */
    readonly wrappedOptionDisplayText: string;
    /**
     * Lifecycle hook that is called when component is destroyed.
     */
    ngOnDestroy(): void;
    /**
     * Get selected options availability state.
     */
    readonly hasSelectedOptions: boolean;
    /**
     * Trigger select change.
     */
    triggerSelectChange(): void;
    /**
     * Clear selected options.
     */
    clearSelectedOptions(): void;
    /**
     * Set disabled state.
     * ControlValueAccessor implementation.
     * @param isDisabled True if disabled.
     */
    setDisabledState?(isDisabled: boolean): void;
    /**
     * Called when value selected value gets updated.
     * ControlValueAccessor implementation.
     * @param value Selected value.
     */
    writeValue(value: any): void;
    /**
     * Register on change event.
     * ControlValueAccessor implementation.
     * @param onSelectChange On select change callback function.
     */
    registerOnChange(onSelectChange: (value: any[] | any) => void): void;
    /**
     * Register on touched event.
     * ControlValueAccessor implementation.
     * @param fn Function reference.
     */
    registerOnTouched(fn: any): void;
    /**
     * Lifecycle hook that is called when component is initialized.
     */
    ngOnInit(): void;
    /**
     * Map source data object to dropdown option model.
     * @param option Source dropdown option.
     * @param index Current index.
     */
    private mapDropdownOption;
    /**
     *
     * Set dropdown options data.
     * @param queryResult Query result object reference.
     */
    private setDropdownOptions;
    /**
     * On after data bind event handler.
     * @param queryResult Query result object reference.
     */
    private onAfterDataBind;
    /**
     * Fetch query results.
     * @param hardReload Hard reload state.
     */
    private fetchQueryResults;
    /**
     * Initialize data fetch event.
     */
    private initDataFetchEvent;
    /**
     * Trigger explicit data fetch.
     * @param hardReload Hard reload state.
     */
    fetchData(hardReload?: boolean): void;
    /**
     * On select option remove event handler.
     * @param index Selected option index.
     */
    onSelectOptionRemove(index: number): void;
    /**
     * Close dropdown options menu.
     */
    close(): void;
}
