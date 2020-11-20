/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ContentChild, EventEmitter, forwardRef, Injector, Input, Output, Renderer2, TemplateRef, } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { catchError, debounceTime, switchMap } from 'rxjs/operators';
import { get } from '../../../utility/services/object-utility.class';
import { DropdownViewComponent } from '../dropdown-view/dropdown-view.component';
import { PopoverComponentLoaderFactoryService } from '../../../utility/utility.module';
import { DropdownConfigService } from '../../services/dropdown-config.service';
import { DropdownDataStateService } from '../../services/dropdown-data-state.service';
import { DropdownEventStateService } from '../../services/dropdown-event-state.service';
import { DropdownResourceService } from '../../services/dropdown-resource.service';
import { ValidatorService } from '../../../utility/services/validator.service';
/**
 * Dropdown main component.
 */
export class DropdownComponent {
    /**
     * @param {?} componentLoaderFactory
     * @param {?} injector
     * @param {?} eventStateService
     * @param {?} dropdownResourceService
     * @param {?} renderer
     * @param {?} dataStateService
     * @param {?} config
     */
    constructor(componentLoaderFactory, injector, eventStateService, dropdownResourceService, renderer, dataStateService, config) {
        this.componentLoaderFactory = componentLoaderFactory;
        this.injector = injector;
        this.eventStateService = eventStateService;
        this.dropdownResourceService = dropdownResourceService;
        this.renderer = renderer;
        this.dataStateService = dataStateService;
        this.config = config;
        this.dataStateService.componentLoaderRef = this.componentLoaderFactory.createLoader(this.renderer);
        this.dataBound = this.eventStateService.dataBoundStream;
        this.selectChange = this.eventStateService.selectChangeStream;
        this.init = this.eventStateService.initStream;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set optionTemplate(value) {
        this.dataStateService.dropdownOptionTemplate = value;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set optionGroupHeaderTemplate(value) {
        this.dataStateService.dropdownOptionGroupHeaderTemplate = value;
    }
    // Input - Event handlers
    /**
     * Set data bind callback. This handler is fired on each data fetch request.
     * @param {?} value
     * @return {?}
     */
    set onDataBind(value) {
        this.dataStateService.onDataBind = value;
    }
    // Inputs
    /**
     * Set dropdown loading spinner template reference object. Used by data table component to explicitly pass the template reference.
     * @param {?} value
     * @return {?}
     */
    set loadingSpinnerTemplateRef(value) {
        this.loadingSpinnerTemplate = value;
    }
    /**
     * Set dropdown option template reference. Used by data table component to explicitly pass the template reference.
     * @param {?} value
     * @return {?}
     */
    set optionTemplateRef(value) {
        this.optionTemplate = value;
    }
    /**
     * Set dropdown options group header template reference. Used by data table component to explicitly pass the template reference.
     * @param {?} value
     * @return {?}
     */
    set optionGroupHeaderTemplateRef(value) {
        this.optionGroupHeaderTemplate = value;
    }
    /**
     * Set static dropdown options collection. No need to set data source when static options collection is provided.
     * @param {?} value
     * @return {?}
     */
    set options(value) {
        if (!value) {
            return;
        }
        this.eventStateService.staticDataSourceStream.next(value);
    }
    /**
     * Set data source observable. This observable is used to retrieve dropdown options for data binding.
     * @param {?} source
     * @return {?}
     */
    set dataSource(source) {
        this.initDataSource(source);
    }
    /**
     * Set dropdown unique identifier.
     * @param {?} value
     * @return {?}
     */
    set id(value) {
        if (!ValidatorService.idPatternValidatorExpression.test(value)) {
            throw Error('Invalid [id] input value. Unique identifier parameter only accept string begin with a letter ([A-Za-z]) and may be followed by any number of letters, digits ([0-9]), hyphens ("-"), underscores ("_").');
        }
        this.dataStateService.id = value;
    }
    /**
     * Set translation data object. Used to localize table static label text.
     * @param {?} value
     * @return {?}
     */
    set translations(value) {
        this.config.translations = value;
    }
    /**
     * Set select option track by field path which is used to uniquely identify options for selection tracking.
     * This field support object paths expressions 'root[0].nest'.
     * @param {?} value
     * @return {?}
     */
    set selectTrackBy(value) {
        this.config.selectTrackBy = value;
    }
    /**
     * Set display value track by field path which is used to extract dropdown option display value.
     * This field support object paths expressions 'root[0].nest'.
     * @param {?} value
     * @return {?}
     */
    set displayTrackBy(value) {
        this.config.displayTrackBy = value;
    }
    /**
     * Set options group field path which is used to group the dropdown options.
     * This field support object paths expressions 'root[0].nest'.
     * @param {?} value
     * @return {?}
     */
    set groupByField(value) {
        this.config.groupByField = value;
    }
    /**
     * Set dropdown option disable state field path which is used to disabled state dropdown options.
     * This field support object paths expressions 'root[0].nest'.
     * @param {?} value
     * @return {?}
     */
    set disabledTrackBy(value) {
        this.config.disabledTrackBy = value;
    }
    /**
     * Set selected options collection. These options will be set selected by default on initial load.
     * Applicable only when multi select mode is enabled.
     * @param {?} value
     * @return {?}
     */
    set selectedOptions(value) {
        this.dataStateService.selectedOptions = value || [];
    }
    /**
     * Set selected option. This option is selected by default on initial load.
     * Applicable only when single select mode is enabled.
     * @param {?} value
     * @return {?}
     */
    set selectedOption(value) {
        this.dataStateService.selectedOption = value;
    }
    /**
     * Set number of options to fetch on scroll to bottom action when load on scroll mode is enabled.
     * @param {?} value
     * @return {?}
     */
    set limit(value) {
        this.config.limit = value;
    }
    /**
     * Set wrap selected options in dropdown view and show the number of options selected instead when
     * limit is met or exceeded. Applicable only when multi select mode is enabled.
     * @param {?} value
     * @return {?}
     */
    set wrapDisplaySelectLimit(value) {
        this.config.wrapDisplaySelectLimit = value;
    }
    /**
     * Set infinite scrollable state to load data on demand with scroll motion. Dropdown data fetch call is
     * initiated with limit and offset when user scroll to bottom hence loading the full data set on init.
     * @param {?} value
     * @return {?}
     */
    set loadOnScroll(value) {
        this.config.loadOnScroll = value;
    }
    /**
     * Set view height ratio to trigger data fetch with infinite scrollable mode.
     * Higher ratio will will increase the scroll sensitivity.
     * @param {?} value
     * @return {?}
     */
    set loadViewDistanceRatio(value) {
        this.config.loadViewDistanceRatio = value;
    }
    /**
     * Set option select mode.
     * - 'multi' : Support selecting multiple options.
     * - 'single' : Support selecting a single option from options collection.
     * - 'single-toggle' : Support selecting a single option from options collection. Selection can not be removed but
     * only toggled by tapping on another option.
     * @param {?} value
     * @return {?}
     */
    set selectMode(value) {
        this.config.selectMode = value;
    }
    /**
     * Show dropdown option search filter text-box if true.
     * @param {?} value
     * @return {?}
     */
    set filterable(value) {
        this.config.filterable = value;
    }
    /**
     * Set default filter value to be applied on initial load. All options are displayed when filter text value is
     * empty string. Applicable only when dropdown is filterable.
     * @param {?} value
     * @return {?}
     */
    set filterText(value) {
        this.dataStateService.filterText = value;
    }
    /**
     * Set time based filter debounce to optimize performance and avoid request flooding by reducing the filter
     * request frequency if true. Applicable only when dropdown filterable state is enabled.
     * @param {?} value
     * @return {?}
     */
    set filterDebounce(value) {
        this.config.filterDebounce = value;
    }
    /**
     * Set filter debounce time in milliseconds. Applicable only when searchDebounce is true.
     * @param {?} value
     * @return {?}
     */
    set filterDebounceTime(value) {
        this.config.filterDebounceTime = value;
    }
    /**
     * Set load data on component initialize if true.
     * @param {?} value
     * @return {?}
     */
    set loadDataOnInit(value) {
        this.config.loadDataOnInit = value;
    }
    /**
     * Show selected option remove button if true.
     * Applicable only when multi select mode ios enabled.
     * @param {?} value
     * @return {?}
     */
    set showSelectedOptionRemoveButton(value) {
        this.config.showSelectedOptionRemoveButton = value;
    }
    /**
     * Set show all select options clear button if true.
     * Applicable only when multi select mode ios enabled.
     * @param {?} value
     * @return {?}
     */
    set showClearSelectionButton(value) {
        this.config.showClearSelectionButton = value;
    }
    /**
     * Set options menu width in pixels.
     * @param {?} value
     * @return {?}
     */
    set menuWidth(value) {
        this.config.menuWidth = value;
    }
    /**
     * Set options menu height in pixels.
     * @param {?} value
     * @return {?}
     */
    set menuHeight(value) {
        this.config.menuHeight = value;
    }
    /**
     * Set popup options menu display position relative to dropdown component.
     * Support 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' values.
     * @param {?} value
     * @return {?}
     */
    set menuPosition(value) {
        this.config.menuPosition = value;
    }
    /**
     * Set dropdown view disabled state.
     * @param {?} value
     * @return {?}
     */
    set disabled(value) {
        this.dataStateService.disabled = value;
    }
    /**
     * Set Close dropdown menu on option select if true.
     * @param {?} value
     * @return {?}
     */
    set closeMenuOnSelect(value) {
        this.config.closeMenuOnSelect = value;
    }
    /**
     * Set show dropdown option select checkbox if true.
     * @param {?} value
     * @return {?}
     */
    set showOptionSelectCheckbox(value) {
        this.config.showOptionSelectCheckbox = value;
    }
    /**
     * Set show dropdown option index checkbox if true.
     * @param {?} value
     * @return {?}
     */
    set showOptionIndex(value) {
        this.config.showOptionIndex = value;
    }
    /**
     * Set show dropdown option TrackBy id checkbox if true.
     * @param {?} value
     * @return {?}
     */
    set showOptionTrackBy(value) {
        this.config.showOptionTrackBy = value;
    }
    /**
     * Multi select option selected item maximum width. Apply ellipsis when selected option display text
     * exceed the max width.
     * @param {?} value
     * @return {?}
     */
    set multiSelectOptionMaxWidth(value) {
        this.config.multiSelectOptionMaxWidth = value;
    }
    /**
     * Set first dropdown option selected on data fetch if true.
     * @param {?} value
     * @return {?}
     */
    set setFirstOptionSelected(value) {
        this.config.setFirstOptionSelected = value;
    }
    /**
     * Trigger select change event on init if true.
     * Can be used to enable selectedOptions or selectedOption associated change trigger.
     * @param {?} value
     * @return {?}
     */
    set triggerSelectChangeOnInit(value) {
        this.config.triggerSelectChangeOnInit = value;
    }
    /**
     * Set trigger select change on explicit model update if true.
     * Applicable only when form binding is used.
     * @param {?} value
     * @return {?}
     */
    set triggerSelectChangeOnModelUpdate(value) {
        this.config.triggerSelectChangeOnModelUpdate = value;
    }
    /**
     * Set trigger select change on first option select change if true.
     * Applicable only when setFirstOptionSelected is true.
     * @param {?} value
     * @return {?}
     */
    set triggerSelectChangeOnFirstOptionSelect(value) {
        this.config.triggerSelectChangeOnFirstOptionSelect = value;
    }
    /**
     * Set dynamically calculate dropdown view dimensions relative to dropdown button width.
     * MenuWith and menuHeight values are ignored when true.
     * @param {?} value
     * @return {?}
     */
    set dynamicDimensionCalculation(value) {
        this.config.dynamicDimensionCalculation = value;
    }
    /**
     * Set dynamic dropdown options view dimensions calculation width ratio relative to dropdown selector.
     * @param {?} value
     * @return {?}
     */
    set dynamicWidthRatio(value) {
        this.config.dynamicWidthRatio = value;
    }
    /**
     * Set dynamic dropdown options view dimensions calculation height ratio relative to dropdown selector.
     * @param {?} value
     * @return {?}
     */
    set dynamicHeightRatio(value) {
        this.config.dynamicHeightRatio = value;
    }
    /**
     * Set relative parent element to render dropdown view container.
     * @param {?} value
     * @return {?}
     */
    set relativeParentElement(value) {
        this.config.relativeParentElement = value;
    }
    /**
     * Initialize data source.
     * @private
     * @param {?} source Data source stream.
     * @return {?}
     */
    initDataSource(source) {
        this.dropdownResourceService.setDataSource(source);
        this.dataStateService.onDataBind = (/**
         * @param {?} params
         * @return {?}
         */
        (params) => {
            if (params.hardReload) {
                this.dropdownResourceService.setDataSource(source);
            }
            return this.dropdownResourceService.query(params);
        });
    }
    /**
     * Performs dropdown toggle event.
     * @param {?} event Mouse click event args.
     * @param {?} element Dropdown button element.
     * @return {?}
     */
    toggleDropdown(event, element) {
        /** @type {?} */
        const target = (/** @type {?} */ (event.target));
        if (target && target.classList && target.classList.contains('ng-ignore-propagation')) {
            return;
        }
        this.dataStateService.componentLoaderRef.toggle(DropdownViewComponent, element, this.injector, {
            relativeParentElement: this.config.relativeParentElement,
            position: this.config.menuPosition
        });
        if (this.config.dynamicDimensionCalculation) {
            this.config.menuWidth = element.offsetWidth * this.config.dynamicWidthRatio;
            this.config.menuHeight = element.offsetWidth * this.config.dynamicHeightRatio;
        }
    }
    /**
     * Get options wrapped state.
     * @return {?}
     */
    get wrapSelectedOptions() {
        if (this.config.wrapDisplaySelectLimit !== undefined) {
            return this.dataStateService.selectedOptions.length > this.config.wrapDisplaySelectLimit;
        }
        return false;
    }
    /**
     * Get wrapped option display text.
     * @return {?}
     */
    get wrappedOptionDisplayText() {
        return `(${this.dataStateService.selectedOptions.length}) ${this.config.translations.selectedOptionWrapPlaceholder}`;
    }
    /**
     * Lifecycle hook that is called when component is destroyed.
     * @return {?}
     */
    ngOnDestroy() {
        if (this.onSelectChangeSubscription) {
            this.onSelectChangeSubscription.unsubscribe();
        }
        this.dataStateService.componentLoaderRef.dispose();
    }
    /**
     * Get selected options availability state.
     * @return {?}
     */
    get hasSelectedOptions() {
        if (this.config.selectMode === 'multi') {
            return !!this.dataStateService.selectedOptions.length;
        }
        return !!this.dataStateService.selectedOption;
    }
    /**
     * Trigger select change.
     * @return {?}
     */
    triggerSelectChange() {
        if (this.config.selectMode === 'multi') {
            this.eventStateService.selectChangeStream.emit(this.dataStateService.selectedOptions);
        }
        else {
            this.eventStateService.selectChangeStream.emit(this.dataStateService.selectedOption);
        }
    }
    /**
     * Clear selected options.
     * @return {?}
     */
    clearSelectedOptions() {
        if (this.config.selectMode === 'multi') {
            this.dataStateService.selectedOptions = [];
            this.eventStateService.selectChangeStream.emit(this.dataStateService.selectedOptions);
        }
        else {
            this.dataStateService.selectedOption = undefined;
            this.eventStateService.selectChangeStream.emit(this.dataStateService.selectedOption);
        }
    }
    /**
     * Set disabled state.
     * ControlValueAccessor implementation.
     * @param {?} isDisabled True if disabled.
     * @return {?}
     */
    setDisabledState(isDisabled) {
        this.dataStateService.disabled = isDisabled;
    }
    /**
     * Called when value selected value gets updated.
     * ControlValueAccessor implementation.
     * @param {?} value Selected value.
     * @return {?}
     */
    writeValue(value) {
        if (this.config.selectMode === 'multi') {
            this.dataStateService.selectedOptions = value || [];
        }
        else {
            this.dataStateService.selectedOption = value;
        }
        if (this.config.triggerSelectChangeOnModelUpdate) {
            this.triggerSelectChange();
        }
    }
    /**
     * Register on change event.
     * ControlValueAccessor implementation.
     * @param {?} onSelectChange On select change callback function.
     * @return {?}
     */
    registerOnChange(onSelectChange) {
        this.onSelectChangeSubscription = this.selectChange.subscribe((/**
         * @param {?} value
         * @return {?}
         */
        value => {
            onSelectChange(value);
        }));
    }
    /**
     * Register on touched event.
     * ControlValueAccessor implementation.
     * @param {?} fn Function reference.
     * @return {?}
     */
    registerOnTouched(fn) {
        // TODO: Implement touch event handler
    }
    /**
     * Lifecycle hook that is called when component is initialized.
     * @return {?}
     */
    ngOnInit() {
        if (!this.dataStateService.id) {
            throw Error('Missing required parameter value for [id] input.');
        }
        if (!this.dataStateService.onDataBind) {
            this.dataSource = this.eventStateService.staticDataSourceStream;
        }
        this.initDataFetchEvent();
        if (this.config.loadDataOnInit) {
            this.eventStateService.dataFetchStream.emit(false);
        }
        if (this.config.triggerSelectChangeOnInit) {
            this.triggerSelectChange();
        }
        this.eventStateService.initStream.emit(this);
    }
    /**
     * Map source data object to dropdown option model.
     * @private
     * @param {?} option Source dropdown option.
     * @param {?} index Current index.
     * @return {?}
     */
    mapDropdownOption(option, index) {
        /** @type {?} */
        const id = get(option, this.config.selectTrackBy);
        return {
            disabled: get(option, this.config.disabledTrackBy),
            id,
            index: index + this.dataStateService.offset + 1,
            option,
            text: get(option, this.config.displayTrackBy)
        };
    }
    /**
     *
     * Set dropdown options data.
     * @private
     * @param {?} queryResult Query result object reference.
     * @return {?}
     */
    setDropdownOptions(queryResult) {
        if (this.config.groupByField) {
            this.dataStateService.dropdownOptionGroups = queryResult.options.reduce((/**
             * @param {?} accumulator
             * @param {?} option
             * @param {?} index
             * @return {?}
             */
            (accumulator, option, index) => {
                /** @type {?} */
                const groupFieldValue = get(option, this.config.groupByField);
                /** @type {?} */
                const currentGroup = accumulator.find((/**
                 * @param {?} group
                 * @return {?}
                 */
                (group) => group.groupName === groupFieldValue));
                if (currentGroup) {
                    currentGroup.options.push(this.mapDropdownOption(option, index));
                }
                else {
                    accumulator.push({
                        groupName: groupFieldValue,
                        options: [this.mapDropdownOption(option, index)]
                    });
                }
                return accumulator;
            }), this.config.loadOnScroll && this.dataStateService.offset > 0 ? this.dataStateService.dropdownOptionGroups : []);
        }
        else {
            this.dataStateService.dropdownOptions = queryResult.options.reduce((/**
             * @param {?} accumulator
             * @param {?} option
             * @param {?} index
             * @return {?}
             */
            (accumulator, option, index) => {
                accumulator.push(this.mapDropdownOption(option, index));
                return accumulator;
            }), this.config.loadOnScroll && this.dataStateService.offset > 0 ? this.dataStateService.dropdownOptions : []);
        }
        if (this.config.setFirstOptionSelected && queryResult.options.length) {
            if (this.config.selectMode === 'multi') {
                this.dataStateService.selectedOptions = [queryResult.options[0]];
            }
            else {
                this.dataStateService.selectedOption = queryResult.options[0];
            }
            if (this.config.triggerSelectChangeOnFirstOptionSelect) {
                this.triggerSelectChange();
            }
        }
        this.dataStateService.totalOptionCount = queryResult.count;
        this.dataStateService.currentOptionCount += queryResult.options.length;
    }
    /**
     * On after data bind event handler.
     * @private
     * @param {?} queryResult Query result object reference.
     * @return {?}
     */
    onAfterDataBind(queryResult) {
        this.setDropdownOptions(queryResult);
        this.dataStateService.dataLoading = false;
        this.eventStateService.dataBoundStream.emit();
    }
    /**
     * Fetch query results.
     * @private
     * @param {?} hardReload Hard reload state.
     * @return {?}
     */
    fetchQueryResults(hardReload) {
        this.dataStateService.dataLoading = true;
        if (hardReload) {
            this.dataStateService.offset = 0;
            this.dataStateService.filterText = '';
        }
        /** @type {?} */
        const requestParams = {
            hardReload
        };
        if (this.config.loadOnScroll) {
            requestParams.limit = this.config.limit;
            requestParams.offset = this.dataStateService.offset;
        }
        if (this.config.filterable) {
            requestParams.filter = {
                key: this.config.displayTrackBy,
                value: this.dataStateService.filterText
            };
        }
        return this.dataStateService.onDataBind(requestParams);
    }
    /**
     * Initialize data fetch event.
     * @private
     * @return {?}
     */
    initDataFetchEvent() {
        /** @type {?} */
        const noop = {
            options: [],
            count: 0
        };
        this.eventStateService.dataFetchStream
            .pipe(debounceTime(20), switchMap((/**
         * @param {?} hardReload
         * @return {?}
         */
        (hardReload) => this.fetchQueryResults(hardReload))), catchError((/**
         * @return {?}
         */
        () => {
            return of(noop);
        })))
            .subscribe((/**
         * @param {?} queryResult
         * @return {?}
         */
        (queryResult) => {
            this.onAfterDataBind(queryResult);
        }), (/**
         * @return {?}
         */
        () => {
            this.onAfterDataBind(noop);
        }));
    }
    /**
     * Trigger explicit data fetch.
     * @param {?=} hardReload Hard reload state.
     * @return {?}
     */
    fetchData(hardReload = false) {
        this.eventStateService.dataFetchStream.emit(hardReload);
    }
    /**
     * On select option remove event handler.
     * @param {?} index Selected option index.
     * @return {?}
     */
    onSelectOptionRemove(index) {
        this.dataStateService.selectedOptions.splice(index, 1);
        this.eventStateService.selectChangeStream.emit(this.dataStateService.selectedOptions);
    }
    /**
     * Close dropdown options menu.
     * @return {?}
     */
    close() {
        this.dataStateService.componentLoaderRef.hide();
    }
}
DropdownComponent.decorators = [
    { type: Component, args: [{
                selector: 'ng-dropdown',
                template: "<div #dropdownElement class=\"ng-dropdown\">\n  <div class=\"ng-dropdown-toggle\" (click)=\"toggleDropdown($event, dropdownElement)\" [class.disabled]=\"dataStateService.disabled\">\n    <ng-container *ngIf=\"config.selectMode === 'multi'\">\n      <ng-container *ngIf=\"!wrapSelectedOptions\">\n        <span class=\"ng-dropdown-selected-value\"\n          *ngFor=\"let option of dataStateService.selectedOptions; let index = index\"\n          [style.max-width]=\"config.multiSelectOptionMaxWidth | ngPx\"\n          [class.ng-dropdown-option-close-enabled]=\"config.showSelectedOptionRemoveButton\">\n          {{ config.getDisplayText(option) }}\n          <i class=\"ng-dropdown-remove-selected-value ng-ignore-propagation\"\n            *ngIf=\"config.showSelectedOptionRemoveButton\"\n            (click)=\"onSelectOptionRemove(index)\"></i>\n        </span>\n      </ng-container>\n      <span class=\"ng-dropdown-selected-option\" *ngIf=\"wrapSelectedOptions\">\n        {{ wrappedOptionDisplayText }}\n      </span>\n      <span class=\"ng-dropdown-selected-placeholder\" *ngIf=\"!dataStateService.selectedOptions.length\">\n        {{ config.translations.selectPlaceholder }}\n      </span>\n    </ng-container>\n    <ng-container *ngIf=\"config.selectMode !== 'multi'\">\n      <span class=\"ng-dropdown-selected-option\" *ngIf=\"dataStateService.selectedOption\">\n        {{ config.getDisplayText(dataStateService.selectedOption) }}\n      </span>\n      <span class=\"ng-dropdown-selected-placeholder\" *ngIf=\"!dataStateService.selectedOption\">\n        {{ config.translations.selectPlaceholder }}\n      </span>\n    </ng-container>\n    <span class=\"ng-dropdown-input-group-btn\" [hidden]=\"!hasSelectedOptions\" *ngIf=\"config.showClearSelectionButton\">\n      <div class=\"ng-dropdown-delete-button ng-ignore-propagation\" (click)=\"clearSelectedOptions()\"></div>\n    </span>\n    <span class=\"ng-dropdown-down-arrow\" *ngIf=\"!dataStateService.dataLoading\"></span>\n    <span class=\"ng-dropdown-loading\" [hidden]=\"!dataStateService.dataLoading\">\n      <div class=\"ng-dropdown-loading-animation\" *ngIf=\"!loadingSpinnerTemplate\"></div>\n      <div *ngIf=\"loadingSpinnerTemplate\" [ngTemplateOutlet]=\"loadingSpinnerTemplate\"></div>\n    </span>\n  </div>\n</div>\n",
                providers: [
                    DropdownConfigService,
                    DropdownDataStateService,
                    DropdownEventStateService,
                    DropdownResourceService,
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef((/**
                         * @return {?}
                         */
                        () => DropdownComponent)),
                        multi: true
                    }
                ]
            }] }
];
/** @nocollapse */
DropdownComponent.ctorParameters = () => [
    { type: PopoverComponentLoaderFactoryService },
    { type: Injector },
    { type: DropdownEventStateService },
    { type: DropdownResourceService },
    { type: Renderer2 },
    { type: DropdownDataStateService },
    { type: DropdownConfigService }
];
DropdownComponent.propDecorators = {
    loadingSpinnerTemplate: [{ type: ContentChild, args: ['ngDropdownLoadingSpinner', { static: true },] }],
    optionTemplate: [{ type: ContentChild, args: ['ngDropdownOption', { static: true },] }],
    optionGroupHeaderTemplate: [{ type: ContentChild, args: ['ngDropdownOptionGroupHeader', { static: true },] }],
    init: [{ type: Output }],
    selectChange: [{ type: Output }],
    dataBound: [{ type: Output }],
    onDataBind: [{ type: Input }],
    loadingSpinnerTemplateRef: [{ type: Input }],
    optionTemplateRef: [{ type: Input }],
    optionGroupHeaderTemplateRef: [{ type: Input }],
    options: [{ type: Input }],
    dataSource: [{ type: Input }],
    id: [{ type: Input }],
    translations: [{ type: Input }],
    selectTrackBy: [{ type: Input }],
    displayTrackBy: [{ type: Input }],
    groupByField: [{ type: Input }],
    disabledTrackBy: [{ type: Input }],
    selectedOptions: [{ type: Input }],
    selectedOption: [{ type: Input }],
    limit: [{ type: Input }],
    wrapDisplaySelectLimit: [{ type: Input }],
    loadOnScroll: [{ type: Input }],
    loadViewDistanceRatio: [{ type: Input }],
    selectMode: [{ type: Input }],
    filterable: [{ type: Input }],
    filterText: [{ type: Input }],
    filterDebounce: [{ type: Input }],
    filterDebounceTime: [{ type: Input }],
    loadDataOnInit: [{ type: Input }],
    showSelectedOptionRemoveButton: [{ type: Input }],
    showClearSelectionButton: [{ type: Input }],
    menuWidth: [{ type: Input }],
    menuHeight: [{ type: Input }],
    menuPosition: [{ type: Input }],
    disabled: [{ type: Input }],
    closeMenuOnSelect: [{ type: Input }],
    showOptionSelectCheckbox: [{ type: Input }],
    showOptionIndex: [{ type: Input }],
    showOptionTrackBy: [{ type: Input }],
    multiSelectOptionMaxWidth: [{ type: Input }],
    setFirstOptionSelected: [{ type: Input }],
    triggerSelectChangeOnInit: [{ type: Input }],
    triggerSelectChangeOnModelUpdate: [{ type: Input }],
    triggerSelectChangeOnFirstOptionSelect: [{ type: Input }],
    dynamicDimensionCalculation: [{ type: Input }],
    dynamicWidthRatio: [{ type: Input }],
    dynamicHeightRatio: [{ type: Input }],
    relativeParentElement: [{ type: Input }]
};
if (false) {
    /**
     * @type {?}
     * @private
     */
    DropdownComponent.prototype.onSelectChangeSubscription;
    /** @type {?} */
    DropdownComponent.prototype.loadingSpinnerTemplate;
    /**
     * Dropdown initialize event handler
     * @type {?}
     */
    DropdownComponent.prototype.init;
    /**
     * Dropdown option select change event handler
     * @type {?}
     */
    DropdownComponent.prototype.selectChange;
    /**
     * Dropdown data bind event handler
     * @type {?}
     */
    DropdownComponent.prototype.dataBound;
    /**
     * @type {?}
     * @private
     */
    DropdownComponent.prototype.componentLoaderFactory;
    /**
     * @type {?}
     * @private
     */
    DropdownComponent.prototype.injector;
    /**
     * @type {?}
     * @private
     */
    DropdownComponent.prototype.eventStateService;
    /**
     * @type {?}
     * @private
     */
    DropdownComponent.prototype.dropdownResourceService;
    /**
     * @type {?}
     * @private
     */
    DropdownComponent.prototype.renderer;
    /** @type {?} */
    DropdownComponent.prototype.dataStateService;
    /** @type {?} */
    DropdownComponent.prototype.config;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcGRvd24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vb3JuYW1lbnR1bS8iLCJzb3VyY2VzIjpbImRyb3Bkb3duL2NvbXBvbmVudHMvZHJvcGRvd24vZHJvcGRvd24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULFlBQVksRUFDWixZQUFZLEVBQ1osVUFBVSxFQUNWLFFBQVEsRUFDUixLQUFLLEVBR0wsTUFBTSxFQUNOLFNBQVMsRUFDVCxXQUFXLEdBQ1osTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUF3QixpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXpFLE9BQU8sRUFBZ0IsVUFBVSxFQUFFLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNwRCxPQUFPLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVyRSxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0RBQWdELENBQUM7QUFXckUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFFakYsT0FBTyxFQUFFLG9DQUFvQyxFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDdkYsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFDL0UsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFDdEYsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFDeEYsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFFbkYsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sNkNBQTZDLENBQUM7Ozs7QUFvQi9FLE1BQU0sT0FBTyxpQkFBaUI7Ozs7Ozs7Ozs7SUE4WjVCLFlBQ1Usc0JBQTRELEVBQzVELFFBQWtCLEVBQ2xCLGlCQUE0QyxFQUM1Qyx1QkFBcUQs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O3lCQVNMLEtBQUs7NkJBU0wsS0FBSztpQ0FRTCxLQUFLOzZCQVFMLEtBQUs7NkNBU0wsS0FBSzt1Q0FTTCxLQUFLO3dCQVFMLEtBQUs7eUJBUUwsS0FBSzsyQkFTTCxLQUFLO3VCQVFMLEtBQUs7Z0NBUUwsS0FBSzt1Q0FRTCxLQUFLOzhCQVFMLEtBQUs7Z0NBUUwsS0FBSzt3Q0FTTCxLQUFLO3FDQVFMLEtBQUs7d0NBU0wsS0FBSzsrQ0FTTCxLQUFLO3FEQVNMLEtBQUs7MENBU0wsS0FBSztnQ0FRTCxLQUFLO2lDQVFMLEtBQUs7b0NBUUwsS0FBSzs7Ozs7OztJQXhaTix1REFBaUQ7O0lBRWpELG1EQUNnRDs7Ozs7SUFnQmhELGlDQUM2Qzs7Ozs7SUFLN0MseUNBQytDOzs7OztJQUsvQyxzQ0FDcUM7Ozs7O0lBOFhuQyxtREFBb0U7Ozs7O0lBQ3BFLHFDQUEwQjs7Ozs7SUFDMUIsOENBQW9EOzs7OztJQUNwRCxvREFBNkQ7Ozs7O0lBQzdELHFDQUEyQjs7SUFDM0IsNkNBQWlEOztJQUNqRCxtQ0FBb0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIENvbnRlbnRDaGlsZCxcbiAgRXZlbnRFbWl0dGVyLFxuICBmb3J3YXJkUmVmLFxuICBJbmplY3RvcixcbiAgSW5wdXQsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxuICBPdXRwdXQsXG4gIFJlbmRlcmVyMixcbiAgVGVtcGxhdGVSZWYsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciwgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmltcG9ydCB7IFN1YnNjcmlwdGlvbiwgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGNhdGNoRXJyb3IsIGRlYm91bmNlVGltZSwgc3dpdGNoTWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBnZXQgfSBmcm9tICcuLi8uLi8uLi91dGlsaXR5L3NlcnZpY2VzL29iamVjdC11dGlsaXR5LmNsYXNzJztcblxuaW1wb3J0IHsgRHJvcGRvd25UcmFuc2xhdGlvbnMgfSBmcm9tICcuLi8uLi9tb2RlbHMvZHJvcGRvd24tdHJhbnNsYXRpb25zLm1vZGVsJztcbmltcG9ydCB7IERyb3Bkb3duT3B0aW9uIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2Ryb3Bkb3duLW9wdGlvbi5tb2RlbCc7XG5pbXBvcnQgeyBEcm9wZG93bk9wdGlvbkdyb3VwIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2Ryb3Bkb3duLW9wdGlvbi1ncm91cC5tb2RlbCc7XG5pbXBvcnQgeyBEcm9wZG93blJlcXVlc3RQYXJhbXMgfSBmcm9tICcuLi8uLi9tb2RlbHMvZHJvcGRvd24tcmVxdWVzdC1wYXJhbXMubW9kZWwnO1xuaW1wb3J0IHsgRHJvcGRvd25EYXRhQmluZENhbGxiYWNrIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2Ryb3Bkb3duLWRhdGEtYmluZC1jYWxsYmFjay5tb2RlbCc7XG5pbXBvcnQgeyBEcm9wZG93blF1ZXJ5UmVzdWx0IH0gZnJvbSAnLi4vLi4vbW9kZWxzL2Ryb3Bkb3duLXF1ZXJ5LXJlc3VsdC5tb2RlbCc7XG5cbmltcG9ydCB7IERyb3Bkb3duU2VsZWN0TW9kZSB9IGZyb20gJy4uLy4uL21vZGVscy9kcm9wZG93bi1zZWxlY3QtbW9kZS5tb2RlbCc7XG5cbmltcG9ydCB7IERyb3Bkb3duVmlld0NvbXBvbmVudCB9IGZyb20gJy4uL2Ryb3Bkb3duLXZpZXcvZHJvcGRvd24tdmlldy5jb21wb25lbnQnO1xuXG5pbXBvcnQgeyBQb3BvdmVyQ29tcG9uZW50TG9hZGVyRmFjdG9yeVNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi91dGlsaXR5L3V0aWxpdHkubW9kdWxlJztcbmltcG9ydCB7IERyb3Bkb3duQ29uZmlnU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2Ryb3Bkb3duLWNvbmZpZy5zZXJ2aWNlJztcbmltcG9ydCB7IERyb3Bkb3duRGF0YVN0YXRlU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2Ryb3Bkb3duLWRhdGEtc3RhdGUuc2VydmljZSc7XG5pbXBvcnQgeyBEcm9wZG93bkV2ZW50U3RhdGVTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvZHJvcGRvd24tZXZlbnQtc3RhdGUuc2VydmljZSc7XG5pbXBvcnQgeyBEcm9wZG93blJlc291cmNlU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2Ryb3Bkb3duLXJlc291cmNlLnNlcnZpY2UnO1xuaW1wb3J0IHsgVmlld1Bvc2l0aW9uIH0gZnJvbSAnLi4vLi4vLi4vdXRpbGl0eS9tb2RlbHMvdmlldy1wb3NpdGlvbi5tb2RlbCc7XG5pbXBvcnQgeyBWYWxpZGF0b3JTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vdXRpbGl0eS9zZXJ2aWNlcy92YWxpZGF0b3Iuc2VydmljZSc7XG5cbi8qKlxuICogRHJvcGRvd24gbWFpbiBjb21wb25lbnQuXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25nLWRyb3Bkb3duJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2Ryb3Bkb3duLmNvbXBvbmVudC5odG1sJyxcbiAgcHJvdmlkZXJzOiBbXG4gICAgRHJvcGRvd25Db25maWdTZXJ2aWNlLFxuICAgIERyb3Bkb3duRGF0YVN0YXRlU2VydmljZSxcbiAgICBEcm9wZG93bkV2ZW50U3RhdGVTZXJ2aWNlLFxuICAgIERyb3Bkb3duUmVzb3VyY2VTZXJ2aWNlLFxuICAgIHtcbiAgICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gRHJvcGRvd25Db21wb25lbnQpLFxuICAgICAgbXVsdGk6IHRydWVcbiAgICB9XG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgRHJvcGRvd25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSwgQ29udHJvbFZhbHVlQWNjZXNzb3Ige1xuICBwcml2YXRlIG9uU2VsZWN0Q2hhbmdlU3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XG5cbiAgQENvbnRlbnRDaGlsZCgnbmdEcm9wZG93bkxvYWRpbmdTcGlubmVyJywgeyBzdGF0aWM6IHRydWUgfSlcbiAgcHVibGljIGxvYWRpbmdTcGlubmVyVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgQENvbnRlbnRDaGlsZCgnbmdEcm9wZG93bk9wdGlvbicsIHsgc3RhdGljOiB0cnVlIH0pXG4gIHB1YmxpYyBzZXQgb3B0aW9uVGVtcGxhdGUodmFsdWU6IFRlbXBsYXRlUmVmPGFueT4pIHtcbiAgICB0aGlzLmRhdGFTdGF0ZVNlcnZpY2UuZHJvcGRvd25PcHRpb25UZW1wbGF0ZSA9IHZhbHVlO1xuICB9XG5cbiAgQENvbnRlbnRDaGlsZCgnbmdEcm9wZG93bk9wdGlvbkdyb3VwSGVhZGVyJywgeyBzdGF0aWM6IHRydWUgfSlcbiAgcHVibGljIHNldCBvcHRpb25Hcm91cEhlYWRlclRlbXBsYXRlKHZhbHVlOiBUZW1wbGF0ZVJlZjxhbnk+KSB7XG4gICAgdGhpcy5kYXRhU3RhdGVTZXJ2aWNlLmRyb3Bkb3duT3B0aW9uR3JvdXBIZWFkZXJUZW1wbGF0ZSA9IHZhbHVlO1xuICB9XG5cbiAgLy8gT3V0cHV0cyA6IEV2ZW50IEhhbmRsZXJzXG4gIC8qKlxuICAgKiBEcm9wZG93biBpbml0aWFsaXplIGV2ZW50IGhhbmRsZXJcbiAgICovXG4gIEBPdXRwdXQoKVxuICBwdWJsaWMgaW5pdDogRXZlbnRFbWl0dGVyPERyb3Bkb3duQ29tcG9uZW50PjtcblxuICAvKipcbiAgICogRHJvcGRvd24gb3B0aW9uIHNlbGVjdCBjaGFuZ2UgZXZlbnQgaGFuZGxlclxuICAgKi9cbiAgQE91dHB1dCgpXG4gIHB1YmxpYyBzZWxlY3RDaGFuZ2U6IEV2ZW50RW1pdHRlcjxhbnlbXSB8IGFueT47XG5cbiAgLyoqXG4gICAqIERyb3Bkb3duIGRhdGEgYmluZCBldmVudCBoYW5kbGVyXG4gICAqL1xuICBAT3V0cHV0KClcbiAgcHVibGljIGRhdGFCb3VuZDogRXZlbnRFbWl0dGVyPHZvaWQ+O1xuXG4gIC8vIElucHV0IC0gRXZlbnQgaGFuZGxlcnNcblxuICAvKipcbiAgICogU2V0IGRhdGEgYmluZCBjYWxsYmFjay4gVGhpcyBoYW5kbGVyIGlzIGZpcmVkIG9uIGVhY2ggZGF0YSBmZXRjaCByZXF1ZXN0LlxuICAgKi9cbiAgQElucHV0KClcbiAgcHVibGljIHNldCBvbkRhdGFCaW5kKHZhbHVlOiBEcm9wZG93bkRhdGFCaW5kQ2FsbGJhY2s8YW55Pikge1xuICAgIHRoaXMuZGF0YVN0YXRlU2VydmljZS5vbkRhdGFCaW5kID0gdmFsdWU7XG4gIH1cblxuICAvLyBJbnB1dHNcblxuICAvKipcbiAgICogU2V0IGRyb3Bkb3duIGxvYWRpbmcgc3Bpbm5lciB0ZW1wbGF0ZSByZWZlcmVuY2Ugb2JqZWN0LiBVc2VkIGJ5IGRhdGEgdGFibGUgY29tcG9uZW50IHRvIGV4cGxpY2l0bHkgcGFzcyB0aGUgdGVtcGxhdGUgcmVmZXJlbmNlLlxuICAgKi9cbiAgQElucHV0KClcbiAgcHVibGljIHNldCBsb2FkaW5nU3Bpbm5lclRlbXBsYXRlUmVmKHZhbHVlOiBUZW1wbGF0ZVJlZjxhbnk+KSB7XG4gICAgdGhpcy5sb2FkaW5nU3Bpbm5lclRlbXBsYXRlID0gdmFsdWU7XG4gIH1cblxuICAvKipcbiAgICogU2V0IGRyb3Bkb3duIG9wdGlvbiB0ZW1wbGF0ZSByZWZlcmVuY2UuIFVzZWQgYnkgZGF0YSB0YWJsZSBjb21wb25lbnQgdG8gZXhwbGljaXRseSBwYXNzIHRoZSB0ZW1wbGF0ZSByZWZlcmVuY2UuXG4gICAqL1xuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IG9wdGlvblRlbXBsYXRlUmVmKHZhbHVlOiBUZW1wbGF0ZVJlZjxhbnk+KSB7XG4gICAgdGhpcy5vcHRpb25UZW1wbGF0ZSA9IHZhbHVlO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCBkcm9wZG93biBvcHRpb25zIGdyb3VwIGhlYWRlciB0ZW1wbGF0ZSByZWZlcmVuY2UuIFVzZWQgYnkgZGF0YSB0YWJsZSBjb21wb25lbnQgdG8gZXhwbGljaXRseSBwYXNzIHRoZSB0ZW1wbGF0ZSByZWZlcmVuY2UuXG4gICAqL1xuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IG9wdGlvbkdyb3VwSGVhZGVyVGVtcGxhdGVSZWYodmFsdWU6IFRlbXBsYXRlUmVmPGFueT4pIHtcbiAgICB0aGlzLm9wdGlvbkdyb3VwSGVhZGVyVGVtcGxhdGUgPSB2YWx1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgc3RhdGljIGRyb3Bkb3duIG9wdGlvbnMgY29sbGVjdGlvbi4gTm8gbmVlZCB0byBzZXQgZGF0YSBzb3VyY2Ugd2hlbiBzdGF0aWMgb3B0aW9ucyBjb2xsZWN0aW9uIGlzIHByb3ZpZGVkLlxuICAgKi9cbiAgQElucHV0KClcbiAgcHVibGljIHNldCBvcHRpb25zKHZhbHVlOiBhbnlbXSkge1xuICAgIGlmICghdmFsdWUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLmV2ZW50U3RhdGVTZXJ2aWNlLnN0YXRpY0RhdGFTb3VyY2VTdHJlYW0ubmV4dCh2YWx1ZSk7XG4gIH1cblxuICAvKipcbiAgICogU2V0IGRhdGEgc291cmNlIG9ic2VydmFibGUuIFRoaXMgb2JzZXJ2YWJsZSBpcyB1c2VkIHRvIHJldHJpZXZlIGRyb3Bkb3duIG9wdGlvbnMgZm9yIGRhdGEgYmluZGluZy5cbiAgICovXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgZGF0YVNvdXJjZShzb3VyY2U6IE9ic2VydmFibGU8YW55W10+KSB7XG4gICAgdGhpcy5pbml0RGF0YVNvdXJjZShzb3VyY2UpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCBkcm9wZG93biB1bmlxdWUgaWRlbnRpZmllci5cbiAgICovXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgaWQodmFsdWU6IHN0cmluZykge1xuICAgIGlmICghVmFsaWRhdG9yU2VydmljZS5pZFBhdHRlcm5WYWxpZGF0b3JFeHByZXNzaW9uLnRlc3QodmFsdWUpKSB7XG4gICAgICB0aHJvdyBFcnJvcignSW52YWxpZCBbaWRdIGlucHV0IHZhbHVlLiBVbmlxdWUgaWRlbnRpZmllciBwYXJhbWV0ZXIgb25seSBhY2NlcHQgc3RyaW5nIGJlZ2luIHdpdGggYSBsZXR0ZXIgKFtBLVphLXpdKSBhbmQgbWF5IGJlIGZvbGxvd2VkIGJ5IGFueSBudW1iZXIgb2YgbGV0dGVycywgZGlnaXRzIChbMC05XSksIGh5cGhlbnMgKFwiLVwiKSwgdW5kZXJzY29yZXMgKFwiX1wiKS4nKTtcbiAgICB9XG5cbiAgICB0aGlzLmRhdGFTdGF0ZVNlcnZpY2UuaWQgPSB2YWx1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgdHJhbnNsYXRpb24gZGF0YSBvYmplY3QuIFVzZWQgdG8gbG9jYWxpemUgdGFibGUgc3RhdGljIGxhYmVsIHRleHQuXG4gICAqL1xuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IHRyYW5zbGF0aW9ucyh2YWx1ZTogRHJvcGRvd25UcmFuc2xhdGlvbnMpIHtcbiAgICB0aGlzLmNvbmZpZy50cmFuc2xhdGlvbnMgPSB2YWx1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgc2VsZWN0IG9wdGlvbiB0cmFjayBieSBmaWVsZCBwYXRoIHdoaWNoIGlzIHVzZWQgdG8gdW5pcXVlbHkgaWRlbnRpZnkgb3B0aW9ucyBmb3Igc2VsZWN0aW9uIHRyYWNraW5nLlxuICAgKiBUaGlzIGZpZWxkIHN1cHBvcnQgb2JqZWN0IHBhdGhzIGV4cHJlc3Npb25zICdyb290WzBdLm5lc3QnLlxuICAgKi9cbiAgQElucHV0KClcbiAgcHVibGljIHNldCBzZWxlY3RUcmFja0J5KHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLmNvbmZpZy5zZWxlY3RUcmFja0J5ID0gdmFsdWU7XG4gIH1cblxuICAvKipcbiAgICogU2V0IGRpc3BsYXkgdmFsdWUgdHJhY2sgYnkgZmllbGQgcGF0aCB3aGljaCBpcyB1c2VkIHRvIGV4dHJhY3QgZHJvcGRvd24gb3B0aW9uIGRpc3BsYXkgdmFsdWUuXG4gICAqIFRoaXMgZmllbGQgc3VwcG9ydCBvYmplY3QgcGF0aHMgZXhwcmVzc2lvbnMgJ3Jvb3RbMF0ubmVzdCcuXG4gICAqL1xuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IGRpc3BsYXlUcmFja0J5KHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLmNvbmZpZy5kaXNwbGF5VHJhY2tCeSA9IHZhbHVlO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCBvcHRpb25zIGdyb3VwIGZpZWxkIHBhdGggd2hpY2ggaXMgdXNlZCB0byBncm91cCB0aGUgZHJvcGRvd24gb3B0aW9ucy5cbiAgICogVGhpcyBmaWVsZCBzdXBwb3J0IG9iamVjdCBwYXRocyBleHByZXNzaW9ucyAncm9vdFswXS5uZXN0Jy5cbiAgICovXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgZ3JvdXBCeUZpZWxkKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLmNvbmZpZy5ncm91cEJ5RmllbGQgPSB2YWx1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgZHJvcGRvd24gb3B0aW9uIGRpc2FibGUgc3RhdGUgZmllbGQgcGF0aCB3aGljaCBpcyB1c2VkIHRvIGRpc2FibGVkIHN0YXRlIGRyb3Bkb3duIG9wdGlvbnMuXG4gICAqIFRoaXMgZmllbGQgc3VwcG9ydCBvYmplY3QgcGF0aHMgZXhwcmVzc2lvbnMgJ3Jvb3RbMF0ubmVzdCcuXG4gICAqL1xuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IGRpc2FibGVkVHJhY2tCeSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5jb25maWcuZGlzYWJsZWRUcmFja0J5ID0gdmFsdWU7XG4gIH1cblxuICAvKipcbiAgICogU2V0IHNlbGVjdGVkIG9wdGlvbnMgY29sbGVjdGlvbi4gVGhlc2Ugb3B0aW9ucyB3aWxsIGJlIHNldCBzZWxlY3RlZCBieSBkZWZhdWx0IG9uIGluaXRpYWwgbG9hZC5cbiAgICogQXBwbGljYWJsZSBvbmx5IHdoZW4gbXVsdGkgc2VsZWN0IG1vZGUgaXMgZW5hYmxlZC5cbiAgICovXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgc2VsZWN0ZWRPcHRpb25zKHZhbHVlOiBhbnlbXSkge1xuICAgIHRoaXMuZGF0YVN0YXRlU2VydmljZS5zZWxlY3RlZE9wdGlvbnMgPSB2YWx1ZSB8fCBbXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgc2VsZWN0ZWQgb3B0aW9uLiBUaGlzIG9wdGlvbiBpcyBzZWxlY3RlZCBieSBkZWZhdWx0IG9uIGluaXRpYWwgbG9hZC5cbiAgICogQXBwbGljYWJsZSBvbmx5IHdoZW4gc2luZ2xlIHNlbGVjdCBtb2RlIGlzIGVuYWJsZWQuXG4gICAqL1xuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IHNlbGVjdGVkT3B0aW9uKHZhbHVlOiBhbnkpIHtcbiAgICB0aGlzLmRhdGFTdGF0ZVNlcnZpY2Uuc2VsZWN0ZWRPcHRpb24gPSB2YWx1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgbnVtYmVyIG9mIG9wdGlvbnMgdG8gZmV0Y2ggb24gc2Nyb2xsIHRvIGJvdHRvbSBhY3Rpb24gd2hlbiBsb2FkIG9uIHNjcm9sbCBtb2RlIGlzIGVuYWJsZWQuXG4gICAqL1xuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IGxpbWl0KHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLmNvbmZpZy5saW1pdCA9IHZhbHVlO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCB3cmFwIHNlbGVjdGVkIG9wdGlvbnMgaW4gZHJvcGRvd24gdmlldyBhbmQgc2hvdyB0aGUgbnVtYmVyIG9mIG9wdGlvbnMgc2VsZWN0ZWQgaW5zdGVhZCB3aGVuXG4gICAqIGxpbWl0IGlzIG1ldCBvciBleGNlZWRlZC4gQXBwbGljYWJsZSBvbmx5IHdoZW4gbXVsdGkgc2VsZWN0IG1vZGUgaXMgZW5hYmxlZC5cbiAgICovXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgd3JhcERpc3BsYXlTZWxlY3RMaW1pdCh2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5jb25maWcud3JhcERpc3BsYXlTZWxlY3RMaW1pdCA9IHZhbHVlO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCBpbmZpbml0ZSBzY3JvbGxhYmxlIHN0YXRlIHRvIGxvYWQgZGF0YSBvbiBkZW1hbmQgd2l0aCBzY3JvbGwgbW90aW9uLiBEcm9wZG93biBkYXRhIGZldGNoIGNhbGwgaXNcbiAgICogaW5pdGlhdGVkIHdpdGggbGltaXQgYW5kIG9mZnNldCB3aGVuIHVzZXIgc2Nyb2xsIHRvIGJvdHRvbSBoZW5jZSBsb2FkaW5nIHRoZSBmdWxsIGRhdGEgc2V0IG9uIGluaXQuXG4gICAqL1xuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IGxvYWRPblNjcm9sbCh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuY29uZmlnLmxvYWRPblNjcm9sbCA9IHZhbHVlO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCB2aWV3IGhlaWdodCByYXRpbyB0byB0cmlnZ2VyIGRhdGEgZmV0Y2ggd2l0aCBpbmZpbml0ZSBzY3JvbGxhYmxlIG1vZGUuXG4gICAqIEhpZ2hlciByYXRpbyB3aWxsIHdpbGwgaW5jcmVhc2UgdGhlIHNjcm9sbCBzZW5zaXRpdml0eS5cbiAgICovXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgbG9hZFZpZXdEaXN0YW5jZVJhdGlvKHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLmNvbmZpZy5sb2FkVmlld0Rpc3RhbmNlUmF0aW8gPSB2YWx1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgb3B0aW9uIHNlbGVjdCBtb2RlLlxuICAgKiAtICdtdWx0aScgOiBTdXBwb3J0IHNlbGVjdGluZyBtdWx0aXBsZSBvcHRpb25zLlxuICAgKiAtICdzaW5nbGUnIDogU3VwcG9ydCBzZWxlY3RpbmcgYSBzaW5nbGUgb3B0aW9uIGZyb20gb3B0aW9ucyBjb2xsZWN0aW9uLlxuICAgKiAtICdzaW5nbGUtdG9nZ2xlJyA6IFN1cHBvcnQgc2VsZWN0aW5nIGEgc2luZ2xlIG9wdGlvbiBmcm9tIG9wdGlvbnMgY29sbGVjdGlvbi4gU2VsZWN0aW9uIGNhbiBub3QgYmUgcmVtb3ZlZCBidXRcbiAgICogb25seSB0b2dnbGVkIGJ5IHRhcHBpbmcgb24gYW5vdGhlciBvcHRpb24uXG4gICAqL1xuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IHNlbGVjdE1vZGUodmFsdWU6IERyb3Bkb3duU2VsZWN0TW9kZSkge1xuICAgIHRoaXMuY29uZmlnLnNlbGVjdE1vZGUgPSB2YWx1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTaG93IGRyb3Bkb3duIG9wdGlvbiBzZWFyY2ggZmlsdGVyIHRleHQtYm94IGlmIHRydWUuXG4gICAqL1xuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IGZpbHRlcmFibGUodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLmNvbmZpZy5maWx0ZXJhYmxlID0gdmFsdWU7XG4gIH1cblxuICAvKipcbiAgICogU2V0IGRlZmF1bHQgZmlsdGVyIHZhbHVlIHRvIGJlIGFwcGxpZWQgb24gaW5pdGlhbCBsb2FkLiBBbGwgb3B0aW9ucyBhcmUgZGlzcGxheWVkIHdoZW4gZmlsdGVyIHRleHQgdmFsdWUgaXNcbiAgICogZW1wdHkgc3RyaW5nLiBBcHBsaWNhYmxlIG9ubHkgd2hlbiBkcm9wZG93biBpcyBmaWx0ZXJhYmxlLlxuICAgKi9cbiAgQElucHV0KClcbiAgcHVibGljIHNldCBmaWx0ZXJUZXh0KHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLmRhdGFTdGF0ZVNlcnZpY2UuZmlsdGVyVGV4dCA9IHZhbHVlO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCB0aW1lIGJhc2VkIGZpbHRlciBkZWJvdW5jZSB0byBvcHRpbWl6ZSBwZXJmb3JtYW5jZSBhbmQgYXZvaWQgcmVxdWVzdCBmbG9vZGluZyBieSByZWR1Y2luZyB0aGUgZmlsdGVyXG4gICAqIHJlcXVlc3QgZnJlcXVlbmN5IGlmIHRydWUuIEFwcGxpY2FibGUgb25seSB3aGVuIGRyb3Bkb3duIGZpbHRlcmFibGUgc3RhdGUgaXMgZW5hYmxlZC5cbiAgICovXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgZmlsdGVyRGVib3VuY2UodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLmNvbmZpZy5maWx0ZXJEZWJvdW5jZSA9IHZhbHVlO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCBmaWx0ZXIgZGVib3VuY2UgdGltZSBpbiBtaWxsaXNlY29uZHMuIEFwcGxpY2FibGUgb25seSB3aGVuIHNlYXJjaERlYm91bmNlIGlzIHRydWUuXG4gICAqL1xuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IGZpbHRlckRlYm91bmNlVGltZSh2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5jb25maWcuZmlsdGVyRGVib3VuY2VUaW1lID0gdmFsdWU7XG4gIH1cblxuICAvKipcbiAgICogU2V0IGxvYWQgZGF0YSBvbiBjb21wb25lbnQgaW5pdGlhbGl6ZSBpZiB0cnVlLlxuICAgKi9cbiAgQElucHV0KClcbiAgcHVibGljIHNldCBsb2FkRGF0YU9uSW5pdCh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuY29uZmlnLmxvYWREYXRhT25Jbml0ID0gdmFsdWU7XG4gIH1cblxuICAvKipcbiAgICogU2hvdyBzZWxlY3RlZCBvcHRpb24gcmVtb3ZlIGJ1dHRvbiBpZiB0cnVlLlxuICAgKiBBcHBsaWNhYmxlIG9ubHkgd2hlbiBtdWx0aSBzZWxlY3QgbW9kZSBpb3MgZW5hYmxlZC5cbiAgICovXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgc2hvd1NlbGVjdGVkT3B0aW9uUmVtb3ZlQnV0dG9uKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5jb25maWcuc2hvd1NlbGVjdGVkT3B0aW9uUmVtb3ZlQnV0dG9uID0gdmFsdWU7XG4gIH1cblxuICAvKipcbiAgICogU2V0IHNob3cgYWxsIHNlbGVjdCBvcHRpb25zIGNsZWFyIGJ1dHRvbiBpZiB0cnVlLlxuICAgKiBBcHBsaWNhYmxlIG9ubHkgd2hlbiBtdWx0aSBzZWxlY3QgbW9kZSBpb3MgZW5hYmxlZC5cbiAgICovXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgc2hvd0NsZWFyU2VsZWN0aW9uQnV0dG9uKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5jb25maWcuc2hvd0NsZWFyU2VsZWN0aW9uQnV0dG9uID0gdmFsdWU7XG4gIH1cblxuICAvKipcbiAgICogU2V0IG9wdGlvbnMgbWVudSB3aWR0aCBpbiBwaXhlbHMuXG4gICAqL1xuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IG1lbnVXaWR0aCh2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5jb25maWcubWVudVdpZHRoID0gdmFsdWU7XG4gIH1cblxuICAvKipcbiAgICogU2V0IG9wdGlvbnMgbWVudSBoZWlnaHQgaW4gcGl4ZWxzLlxuICAgKi9cbiAgQElucHV0KClcbiAgcHVibGljIHNldCBtZW51SGVpZ2h0KHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLmNvbmZpZy5tZW51SGVpZ2h0ID0gdmFsdWU7XG4gIH1cblxuICAvKipcbiAgICogU2V0IHBvcHVwIG9wdGlvbnMgbWVudSBkaXNwbGF5IHBvc2l0aW9uIHJlbGF0aXZlIHRvIGRyb3Bkb3duIGNvbXBvbmVudC5cbiAgICogU3VwcG9ydCAndG9wLWxlZnQnIHwgJ3RvcC1yaWdodCcgfCAnYm90dG9tLWxlZnQnIHwgJ2JvdHRvbS1yaWdodCcgdmFsdWVzLlxuICAgKi9cbiAgQElucHV0KClcbiAgcHVibGljIHNldCBtZW51UG9zaXRpb24odmFsdWU6IFZpZXdQb3NpdGlvbikge1xuICAgIHRoaXMuY29uZmlnLm1lbnVQb3NpdGlvbiA9IHZhbHVlO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCBkcm9wZG93biB2aWV3IGRpc2FibGVkIHN0YXRlLlxuICAgKi9cbiAgQElucHV0KClcbiAgcHVibGljIHNldCBkaXNhYmxlZCh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuZGF0YVN0YXRlU2VydmljZS5kaXNhYmxlZCA9IHZhbHVlO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCBDbG9zZSBkcm9wZG93biBtZW51IG9uIG9wdGlvbiBzZWxlY3QgaWYgdHJ1ZS5cbiAgICovXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgY2xvc2VNZW51T25TZWxlY3QodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLmNvbmZpZy5jbG9zZU1lbnVPblNlbGVjdCA9IHZhbHVlO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCBzaG93IGRyb3Bkb3duIG9wdGlvbiBzZWxlY3QgY2hlY2tib3ggaWYgdHJ1ZS5cbiAgICovXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgc2hvd09wdGlvblNlbGVjdENoZWNrYm94KHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5jb25maWcuc2hvd09wdGlvblNlbGVjdENoZWNrYm94ID0gdmFsdWU7XG4gIH1cblxuICAvKipcbiAgICogU2V0IHNob3cgZHJvcGRvd24gb3B0aW9uIGluZGV4IGNoZWNrYm94IGlmIHRydWUuXG4gICAqL1xuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IHNob3dPcHRpb25JbmRleCh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuY29uZmlnLnNob3dPcHRpb25JbmRleCA9IHZhbHVlO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCBzaG93IGRyb3Bkb3duIG9wdGlvbiBUcmFja0J5IGlkIGNoZWNrYm94IGlmIHRydWUuXG4gICAqL1xuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IHNob3dPcHRpb25UcmFja0J5KHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5jb25maWcuc2hvd09wdGlvblRyYWNrQnkgPSB2YWx1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBNdWx0aSBzZWxlY3Qgb3B0aW9uIHNlbGVjdGVkIGl0ZW0gbWF4aW11bSB3aWR0aC4gQXBwbHkgZWxsaXBzaXMgd2hlbiBzZWxlY3RlZCBvcHRpb24gZGlzcGxheSB0ZXh0XG4gICAqIGV4Y2VlZCB0aGUgbWF4IHdpZHRoLlxuICAgKi9cbiAgQElucHV0KClcbiAgcHVibGljIHNldCBtdWx0aVNlbGVjdE9wdGlvbk1heFdpZHRoKHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLmNvbmZpZy5tdWx0aVNlbGVjdE9wdGlvbk1heFdpZHRoID0gdmFsdWU7XG4gIH1cblxuICAvKipcbiAgICogU2V0IGZpcnN0IGRyb3Bkb3duIG9wdGlvbiBzZWxlY3RlZCBvbiBkYXRhIGZldGNoIGlmIHRydWUuXG4gICAqL1xuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IHNldEZpcnN0T3B0aW9uU2VsZWN0ZWQodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLmNvbmZpZy5zZXRGaXJzdE9wdGlvblNlbGVjdGVkID0gdmFsdWU7XG4gIH1cblxuICAvKipcbiAgICogVHJpZ2dlciBzZWxlY3QgY2hhbmdlIGV2ZW50IG9uIGluaXQgaWYgdHJ1ZS5cbiAgICogQ2FuIGJlIHVzZWQgdG8gZW5hYmxlIHNlbGVjdGVkT3B0aW9ucyBvciBzZWxlY3RlZE9wdGlvbiBhc3NvY2lhdGVkIGNoYW5nZSB0cmlnZ2VyLlxuICAgKi9cbiAgQElucHV0KClcbiAgcHVibGljIHNldCB0cmlnZ2VyU2VsZWN0Q2hhbmdlT25Jbml0KHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5jb25maWcudHJpZ2dlclNlbGVjdENoYW5nZU9uSW5pdCA9IHZhbHVlO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCB0cmlnZ2VyIHNlbGVjdCBjaGFuZ2Ugb24gZXhwbGljaXQgbW9kZWwgdXBkYXRlIGlmIHRydWUuXG4gICAqIEFwcGxpY2FibGUgb25seSB3aGVuIGZvcm0gYmluZGluZyBpcyB1c2VkLlxuICAgKi9cbiAgQElucHV0KClcbiAgcHVibGljIHNldCB0cmlnZ2VyU2VsZWN0Q2hhbmdlT25Nb2RlbFVwZGF0ZSh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuY29uZmlnLnRyaWdnZXJTZWxlY3RDaGFuZ2VPbk1vZGVsVXBkYXRlID0gdmFsdWU7XG4gIH1cblxuICAvKipcbiAgICogU2V0IHRyaWdnZXIgc2VsZWN0IGNoYW5nZSBvbiBmaXJzdCBvcHRpb24gc2VsZWN0IGNoYW5nZSBpZiB0cnVlLlxuICAgKiBBcHBsaWNhYmxlIG9ubHkgd2hlbiBzZXRGaXJzdE9wdGlvblNlbGVjdGVkIGlzIHRydWUuXG4gICAqL1xuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IHRyaWdnZXJTZWxlY3RDaGFuZ2VPbkZpcnN0T3B0aW9uU2VsZWN0KHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5jb25maWcudHJpZ2dlclNlbGVjdENoYW5nZU9uRmlyc3RPcHRpb25TZWxlY3QgPSB2YWx1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgZHluYW1pY2FsbHkgY2FsY3VsYXRlIGRyb3Bkb3duIHZpZXcgZGltZW5zaW9ucyByZWxhdGl2ZSB0byBkcm9wZG93biBidXR0b24gd2lkdGguXG4gICAqIE1lbnVXaXRoIGFuZCBtZW51SGVpZ2h0IHZhbHVlcyBhcmUgaWdub3JlZCB3aGVuIHRydWUuXG4gICAqL1xuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IGR5bmFtaWNEaW1lbnNpb25DYWxjdWxhdGlvbih2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuY29uZmlnLmR5bmFtaWNEaW1lbnNpb25DYWxjdWxhdGlvbiA9IHZhbHVlO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCBkeW5hbWljIGRyb3Bkb3duIG9wdGlvbnMgdmlldyBkaW1lbnNpb25zIGNhbGN1bGF0aW9uIHdpZHRoIHJhdGlvIHJlbGF0aXZlIHRvIGRyb3Bkb3duIHNlbGVjdG9yLlxuICAgKi9cbiAgQElucHV0KClcbiAgcHVibGljIHNldCBkeW5hbWljV2lkdGhSYXRpbyh2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5jb25maWcuZHluYW1pY1dpZHRoUmF0aW8gPSB2YWx1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgZHluYW1pYyBkcm9wZG93biBvcHRpb25zIHZpZXcgZGltZW5zaW9ucyBjYWxjdWxhdGlvbiBoZWlnaHQgcmF0aW8gcmVsYXRpdmUgdG8gZHJvcGRvd24gc2VsZWN0b3IuXG4gICAqL1xuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IGR5bmFtaWNIZWlnaHRSYXRpbyh2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5jb25maWcuZHluYW1pY0hlaWdodFJhdGlvID0gdmFsdWU7XG4gIH1cblxuICAvKipcbiAgICogU2V0IHJlbGF0aXZlIHBhcmVudCBlbGVtZW50IHRvIHJlbmRlciBkcm9wZG93biB2aWV3IGNvbnRhaW5lci5cbiAgICovXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgcmVsYXRpdmVQYXJlbnRFbGVtZW50KHZhbHVlOiBIVE1MRWxlbWVudCkge1xuICAgIHRoaXMuY29uZmlnLnJlbGF0aXZlUGFyZW50RWxlbWVudCA9IHZhbHVlO1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBjb21wb25lbnRMb2FkZXJGYWN0b3J5OiBQb3BvdmVyQ29tcG9uZW50TG9hZGVyRmFjdG9yeVNlcnZpY2UsXG4gICAgcHJpdmF0ZSBpbmplY3RvcjogSW5qZWN0b3IsXG4gICAgcHJpdmF0ZSBldmVudFN0YXRlU2VydmljZTogRHJvcGRvd25FdmVudFN0YXRlU2VydmljZSxcbiAgICBwcml2YXRlIGRyb3Bkb3duUmVzb3VyY2VTZXJ2aWNlOiBEcm9wZG93blJlc291cmNlU2VydmljZTxhbnk+LFxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBwdWJsaWMgZGF0YVN0YXRlU2VydmljZTogRHJvcGRvd25EYXRhU3RhdGVTZXJ2aWNlLFxuICAgIHB1YmxpYyBjb25maWc6IERyb3Bkb3duQ29uZmlnU2VydmljZVxuICApIHtcbiAgICB0aGlzLmRhdGFTdGF0ZVNlcnZpY2UuY29tcG9uZW50TG9hZGVyUmVmID0gdGhpcy5jb21wb25lbnRMb2FkZXJGYWN0b3J5LmNyZWF0ZUxvYWRlcih0aGlzLnJlbmRlcmVyKTtcblxuICAgIHRoaXMuZGF0YUJvdW5kID0gdGhpcy5ldmVudFN0YXRlU2VydmljZS5kYXRhQm91bmRTdHJlYW07XG4gICAgdGhpcy5zZWxlY3RDaGFuZ2UgPSB0aGlzLmV2ZW50U3RhdGVTZXJ2aWNlLnNlbGVjdENoYW5nZVN0cmVhbTtcbiAgICB0aGlzLmluaXQgPSB0aGlzLmV2ZW50U3RhdGVTZXJ2aWNlLmluaXRTdHJlYW07XG4gIH1cblxuICAvKipcbiAgICogSW5pdGlhbGl6ZSBkYXRhIHNvdXJjZS5cbiAgICogQHBhcmFtIHNvdXJjZSBEYXRhIHNvdXJjZSBzdHJlYW0uXG4gICAqL1xuICBwcml2YXRlIGluaXREYXRhU291cmNlKHNvdXJjZTogT2JzZXJ2YWJsZTxhbnk+KTogdm9pZCB7XG4gICAgdGhpcy5kcm9wZG93blJlc291cmNlU2VydmljZS5zZXREYXRhU291cmNlKHNvdXJjZSk7XG5cbiAgICB0aGlzLmRhdGFTdGF0ZVNlcnZpY2Uub25EYXRhQmluZCA9IChwYXJhbXM6IERyb3Bkb3duUmVxdWVzdFBhcmFtcyk6IE9ic2VydmFibGU8RHJvcGRvd25RdWVyeVJlc3VsdDxhbnk+PiA9PiB7XG4gICAgICBpZiAocGFyYW1zLmhhcmRSZWxvYWQpIHtcbiAgICAgICAgdGhpcy5kcm9wZG93blJlc291cmNlU2VydmljZS5zZXREYXRhU291cmNlKHNvdXJjZSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLmRyb3Bkb3duUmVzb3VyY2VTZXJ2aWNlLnF1ZXJ5KHBhcmFtcyk7XG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBQZXJmb3JtcyBkcm9wZG93biB0b2dnbGUgZXZlbnQuXG4gICAqIEBwYXJhbSBldmVudCBNb3VzZSBjbGljayBldmVudCBhcmdzLlxuICAgKiBAcGFyYW0gZWxlbWVudCBEcm9wZG93biBidXR0b24gZWxlbWVudC5cbiAgICovXG4gIHB1YmxpYyB0b2dnbGVEcm9wZG93bihldmVudDogTW91c2VFdmVudCwgZWxlbWVudDogSFRNTEVsZW1lbnQpOiB2b2lkIHtcbiAgICBjb25zdCB0YXJnZXQgPSBldmVudC50YXJnZXQgYXMgSFRNTEVsZW1lbnQ7XG4gICAgaWYgKHRhcmdldCAmJiB0YXJnZXQuY2xhc3NMaXN0ICYmIHRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ25nLWlnbm9yZS1wcm9wYWdhdGlvbicpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5kYXRhU3RhdGVTZXJ2aWNlLmNvbXBvbmVudExvYWRlclJlZi50b2dnbGUoRHJvcGRvd25WaWV3Q29tcG9uZW50LCBlbGVtZW50LCB0aGlzLmluamVjdG9yLCB7XG4gICAgICByZWxhdGl2ZVBhcmVudEVsZW1lbnQ6IHRoaXMuY29uZmlnLnJlbGF0aXZlUGFyZW50RWxlbWVudCxcbiAgICAgIHBvc2l0aW9uOiB0aGlzLmNvbmZpZy5tZW51UG9zaXRpb25cbiAgICB9KTtcblxuICAgIGlmICh0aGlzLmNvbmZpZy5keW5hbWljRGltZW5zaW9uQ2FsY3VsYXRpb24pIHtcbiAgICAgIHRoaXMuY29uZmlnLm1lbnVXaWR0aCA9IGVsZW1lbnQub2Zmc2V0V2lkdGggKiB0aGlzLmNvbmZpZy5keW5hbWljV2lkdGhSYXRpbztcbiAgICAgIHRoaXMuY29uZmlnLm1lbnVIZWlnaHQgPSBlbGVtZW50Lm9mZnNldFdpZHRoICogdGhpcy5jb25maWcuZHluYW1pY0hlaWdodFJhdGlvO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgb3B0aW9ucyB3cmFwcGVkIHN0YXRlLlxuICAgKi9cbiAgcHVibGljIGdldCB3cmFwU2VsZWN0ZWRPcHRpb25zKCk6IGJvb2xlYW4ge1xuICAgIGlmICh0aGlzLmNvbmZpZy53cmFwRGlzcGxheVNlbGVjdExpbWl0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiB0aGlzLmRhdGFTdGF0ZVNlcnZpY2Uuc2VsZWN0ZWRPcHRpb25zLmxlbmd0aCA+IHRoaXMuY29uZmlnLndyYXBEaXNwbGF5U2VsZWN0TGltaXQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB3cmFwcGVkIG9wdGlvbiBkaXNwbGF5IHRleHQuXG4gICAqL1xuICBwdWJsaWMgZ2V0IHdyYXBwZWRPcHRpb25EaXNwbGF5VGV4dCgpOiBzdHJpbmcge1xuICAgIHJldHVybiBgKCR7dGhpcy5kYXRhU3RhdGVTZXJ2aWNlLnNlbGVjdGVkT3B0aW9ucy5sZW5ndGh9KSAke3RoaXMuY29uZmlnLnRyYW5zbGF0aW9ucy5zZWxlY3RlZE9wdGlvbldyYXBQbGFjZWhvbGRlcn1gO1xuICB9XG5cbiAgLyoqXG4gICAqIExpZmVjeWNsZSBob29rIHRoYXQgaXMgY2FsbGVkIHdoZW4gY29tcG9uZW50IGlzIGRlc3Ryb3llZC5cbiAgICovXG4gIHB1YmxpYyBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5vblNlbGVjdENoYW5nZVN1YnNjcmlwdGlvbikge1xuICAgICAgdGhpcy5vblNlbGVjdENoYW5nZVN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgIH1cblxuICAgIHRoaXMuZGF0YVN0YXRlU2VydmljZS5jb21wb25lbnRMb2FkZXJSZWYuZGlzcG9zZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBzZWxlY3RlZCBvcHRpb25zIGF2YWlsYWJpbGl0eSBzdGF0ZS5cbiAgICovXG4gIHB1YmxpYyBnZXQgaGFzU2VsZWN0ZWRPcHRpb25zKCk6IGJvb2xlYW4ge1xuICAgIGlmICh0aGlzLmNvbmZpZy5zZWxlY3RNb2RlID09PSAnbXVsdGknKSB7XG4gICAgICByZXR1cm4gISF0aGlzLmRhdGFTdGF0ZVNlcnZpY2Uuc2VsZWN0ZWRPcHRpb25zLmxlbmd0aDtcbiAgICB9XG5cbiAgICByZXR1cm4gISF0aGlzLmRhdGFTdGF0ZVNlcnZpY2Uuc2VsZWN0ZWRPcHRpb247XG4gIH1cblxuICAvKipcbiAgICogVHJpZ2dlciBzZWxlY3QgY2hhbmdlLlxuICAgKi9cbiAgcHVibGljIHRyaWdnZXJTZWxlY3RDaGFuZ2UoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuY29uZmlnLnNlbGVjdE1vZGUgPT09ICdtdWx0aScpIHtcbiAgICAgIHRoaXMuZXZlbnRTdGF0ZVNlcnZpY2Uuc2VsZWN0Q2hhbmdlU3RyZWFtLmVtaXQodGhpcy5kYXRhU3RhdGVTZXJ2aWNlLnNlbGVjdGVkT3B0aW9ucyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZXZlbnRTdGF0ZVNlcnZpY2Uuc2VsZWN0Q2hhbmdlU3RyZWFtLmVtaXQodGhpcy5kYXRhU3RhdGVTZXJ2aWNlLnNlbGVjdGVkT3B0aW9uKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ2xlYXIgc2VsZWN0ZWQgb3B0aW9ucy5cbiAgICovXG4gIHB1YmxpYyBjbGVhclNlbGVjdGVkT3B0aW9ucygpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5jb25maWcuc2VsZWN0TW9kZSA9PT0gJ211bHRpJykge1xuICAgICAgdGhpcy5kYXRhU3RhdGVTZXJ2aWNlLnNlbGVjdGVkT3B0aW9ucyA9IFtdO1xuICAgICAgdGhpcy5ldmVudFN0YXRlU2VydmljZS5zZWxlY3RDaGFuZ2VTdHJlYW0uZW1pdCh0aGlzLmRhdGFTdGF0ZVNlcnZpY2Uuc2VsZWN0ZWRPcHRpb25zKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5kYXRhU3RhdGVTZXJ2aWNlLnNlbGVjdGVkT3B0aW9uID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5ldmVudFN0YXRlU2VydmljZS5zZWxlY3RDaGFuZ2VTdHJlYW0uZW1pdCh0aGlzLmRhdGFTdGF0ZVNlcnZpY2Uuc2VsZWN0ZWRPcHRpb24pO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgZGlzYWJsZWQgc3RhdGUuXG4gICAqIENvbnRyb2xWYWx1ZUFjY2Vzc29yIGltcGxlbWVudGF0aW9uLlxuICAgKiBAcGFyYW0gaXNEaXNhYmxlZCBUcnVlIGlmIGRpc2FibGVkLlxuICAgKi9cbiAgcHVibGljIHNldERpc2FibGVkU3RhdGU/KGlzRGlzYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICB0aGlzLmRhdGFTdGF0ZVNlcnZpY2UuZGlzYWJsZWQgPSBpc0Rpc2FibGVkO1xuICB9XG5cbiAgLyoqXG4gICAqIENhbGxlZCB3aGVuIHZhbHVlIHNlbGVjdGVkIHZhbHVlIGdldHMgdXBkYXRlZC5cbiAgICogQ29udHJvbFZhbHVlQWNjZXNzb3IgaW1wbGVtZW50YXRpb24uXG4gICAqIEBwYXJhbSB2YWx1ZSBTZWxlY3RlZCB2YWx1ZS5cbiAgICovXG4gIHB1YmxpYyB3cml0ZVZhbHVlKHZhbHVlOiBhbnkpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5jb25maWcuc2VsZWN0TW9kZSA9PT0gJ211bHRpJykge1xuICAgICAgdGhpcy5kYXRhU3RhdGVTZXJ2aWNlLnNlbGVjdGVkT3B0aW9ucyA9IHZhbHVlIHx8IFtdO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmRhdGFTdGF0ZVNlcnZpY2Uuc2VsZWN0ZWRPcHRpb24gPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5jb25maWcudHJpZ2dlclNlbGVjdENoYW5nZU9uTW9kZWxVcGRhdGUpIHtcbiAgICAgIHRoaXMudHJpZ2dlclNlbGVjdENoYW5nZSgpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZWdpc3RlciBvbiBjaGFuZ2UgZXZlbnQuXG4gICAqIENvbnRyb2xWYWx1ZUFjY2Vzc29yIGltcGxlbWVudGF0aW9uLlxuICAgKiBAcGFyYW0gb25TZWxlY3RDaGFuZ2UgT24gc2VsZWN0IGNoYW5nZSBjYWxsYmFjayBmdW5jdGlvbi5cbiAgICovXG4gIHB1YmxpYyByZWdpc3Rlck9uQ2hhbmdlKG9uU2VsZWN0Q2hhbmdlOiAodmFsdWU6IGFueVtdIHwgYW55KSA9PiB2b2lkKTogdm9pZCB7XG4gICAgdGhpcy5vblNlbGVjdENoYW5nZVN1YnNjcmlwdGlvbiA9IHRoaXMuc2VsZWN0Q2hhbmdlLnN1YnNjcmliZSh2YWx1ZSA9PiB7XG4gICAgICBvblNlbGVjdENoYW5nZSh2YWx1ZSk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogUmVnaXN0ZXIgb24gdG91Y2hlZCBldmVudC5cbiAgICogQ29udHJvbFZhbHVlQWNjZXNzb3IgaW1wbGVtZW50YXRpb24uXG4gICAqIEBwYXJhbSBmbiBGdW5jdGlvbiByZWZlcmVuY2UuXG4gICAqL1xuICBwdWJsaWMgcmVnaXN0ZXJPblRvdWNoZWQoZm46IGFueSk6IHZvaWQge1xuICAgIC8vIFRPRE86IEltcGxlbWVudCB0b3VjaCBldmVudCBoYW5kbGVyXG4gIH1cblxuICAvKipcbiAgICogTGlmZWN5Y2xlIGhvb2sgdGhhdCBpcyBjYWxsZWQgd2hlbiBjb21wb25lbnQgaXMgaW5pdGlhbGl6ZWQuXG4gICAqL1xuICBwdWJsaWMgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLmRhdGFTdGF0ZVNlcnZpY2UuaWQpIHtcbiAgICAgIHRocm93IEVycm9yKCdNaXNzaW5nIHJlcXVpcmVkIHBhcmFtZXRlciB2YWx1ZSBmb3IgW2lkXSBpbnB1dC4nKTtcbiAgICB9XG5cbiAgICBpZiAoIXRoaXMuZGF0YVN0YXRlU2VydmljZS5vbkRhdGFCaW5kKSB7XG4gICAgICB0aGlzLmRhdGFTb3VyY2UgPSB0aGlzLmV2ZW50U3RhdGVTZXJ2aWNlLnN0YXRpY0RhdGFTb3VyY2VTdHJlYW07XG4gICAgfVxuXG4gICAgdGhpcy5pbml0RGF0YUZldGNoRXZlbnQoKTtcblxuICAgIGlmICh0aGlzLmNvbmZpZy5sb2FkRGF0YU9uSW5pdCkge1xuICAgICAgdGhpcy5ldmVudFN0YXRlU2VydmljZS5kYXRhRmV0Y2hTdHJlYW0uZW1pdChmYWxzZSk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuY29uZmlnLnRyaWdnZXJTZWxlY3RDaGFuZ2VPbkluaXQpIHtcbiAgICAgIHRoaXMudHJpZ2dlclNlbGVjdENoYW5nZSgpO1xuICAgIH1cblxuICAgIHRoaXMuZXZlbnRTdGF0ZVNlcnZpY2UuaW5pdFN0cmVhbS5lbWl0KHRoaXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIE1hcCBzb3VyY2UgZGF0YSBvYmplY3QgdG8gZHJvcGRvd24gb3B0aW9uIG1vZGVsLlxuICAgKiBAcGFyYW0gb3B0aW9uIFNvdXJjZSBkcm9wZG93biBvcHRpb24uXG4gICAqIEBwYXJhbSBpbmRleCBDdXJyZW50IGluZGV4LlxuICAgKi9cbiAgcHJpdmF0ZSBtYXBEcm9wZG93bk9wdGlvbihvcHRpb246IGFueSwgaW5kZXg6IG51bWJlcik6IERyb3Bkb3duT3B0aW9uIHtcbiAgICBjb25zdCBpZCA9IGdldChvcHRpb24sIHRoaXMuY29uZmlnLnNlbGVjdFRyYWNrQnkpO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIGRpc2FibGVkOiBnZXQob3B0aW9uLCB0aGlzLmNvbmZpZy5kaXNhYmxlZFRyYWNrQnkpLFxuICAgICAgaWQsXG4gICAgICBpbmRleDogaW5kZXggKyB0aGlzLmRhdGFTdGF0ZVNlcnZpY2Uub2Zmc2V0ICsgMSxcbiAgICAgIG9wdGlvbixcbiAgICAgIHRleHQ6IGdldChvcHRpb24sIHRoaXMuY29uZmlnLmRpc3BsYXlUcmFja0J5KVxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogU2V0IGRyb3Bkb3duIG9wdGlvbnMgZGF0YS5cbiAgICogQHBhcmFtIHF1ZXJ5UmVzdWx0IFF1ZXJ5IHJlc3VsdCBvYmplY3QgcmVmZXJlbmNlLlxuICAgKi9cbiAgcHJpdmF0ZSBzZXREcm9wZG93bk9wdGlvbnMocXVlcnlSZXN1bHQ6IERyb3Bkb3duUXVlcnlSZXN1bHQ8YW55Pikge1xuICAgIGlmICh0aGlzLmNvbmZpZy5ncm91cEJ5RmllbGQpIHtcbiAgICAgIHRoaXMuZGF0YVN0YXRlU2VydmljZS5kcm9wZG93bk9wdGlvbkdyb3VwcyA9IHF1ZXJ5UmVzdWx0Lm9wdGlvbnMucmVkdWNlKFxuICAgICAgICAoYWNjdW11bGF0b3I6IERyb3Bkb3duT3B0aW9uR3JvdXBbXSwgb3B0aW9uOiBhbnksIGluZGV4OiBudW1iZXIpID0+IHtcbiAgICAgICAgICBjb25zdCBncm91cEZpZWxkVmFsdWUgPSBnZXQob3B0aW9uLCB0aGlzLmNvbmZpZy5ncm91cEJ5RmllbGQpO1xuICAgICAgICAgIGNvbnN0IGN1cnJlbnRHcm91cCA9IGFjY3VtdWxhdG9yLmZpbmQoKGdyb3VwOiBEcm9wZG93bk9wdGlvbkdyb3VwKSA9PiBncm91cC5ncm91cE5hbWUgPT09IGdyb3VwRmllbGRWYWx1ZSk7XG5cbiAgICAgICAgICBpZiAoY3VycmVudEdyb3VwKSB7XG4gICAgICAgICAgICBjdXJyZW50R3JvdXAub3B0aW9ucy5wdXNoKHRoaXMubWFwRHJvcGRvd25PcHRpb24ob3B0aW9uLCBpbmRleCkpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBhY2N1bXVsYXRvci5wdXNoKHtcbiAgICAgICAgICAgICAgZ3JvdXBOYW1lOiBncm91cEZpZWxkVmFsdWUsXG4gICAgICAgICAgICAgIG9wdGlvbnM6IFt0aGlzLm1hcERyb3Bkb3duT3B0aW9uKG9wdGlvbiwgaW5kZXgpXVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIGFjY3VtdWxhdG9yO1xuICAgICAgICB9LFxuICAgICAgICB0aGlzLmNvbmZpZy5sb2FkT25TY3JvbGwgJiYgdGhpcy5kYXRhU3RhdGVTZXJ2aWNlLm9mZnNldCA+IDAgPyB0aGlzLmRhdGFTdGF0ZVNlcnZpY2UuZHJvcGRvd25PcHRpb25Hcm91cHMgOiBbXVxuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5kYXRhU3RhdGVTZXJ2aWNlLmRyb3Bkb3duT3B0aW9ucyA9IHF1ZXJ5UmVzdWx0Lm9wdGlvbnMucmVkdWNlKFxuICAgICAgICAoYWNjdW11bGF0b3I6IERyb3Bkb3duT3B0aW9uW10sIG9wdGlvbjogYW55LCBpbmRleDogbnVtYmVyKSA9PiB7XG4gICAgICAgICAgYWNjdW11bGF0b3IucHVzaCh0aGlzLm1hcERyb3Bkb3duT3B0aW9uKG9wdGlvbiwgaW5kZXgpKTtcbiAgICAgICAgICByZXR1cm4gYWNjdW11bGF0b3I7XG4gICAgICAgIH0sXG4gICAgICAgIHRoaXMuY29uZmlnLmxvYWRPblNjcm9sbCAmJiB0aGlzLmRhdGFTdGF0ZVNlcnZpY2Uub2Zmc2V0ID4gMCA/IHRoaXMuZGF0YVN0YXRlU2VydmljZS5kcm9wZG93bk9wdGlvbnMgOiBbXVxuICAgICAgKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5jb25maWcuc2V0Rmlyc3RPcHRpb25TZWxlY3RlZCAmJiBxdWVyeVJlc3VsdC5vcHRpb25zLmxlbmd0aCkge1xuICAgICAgaWYgKHRoaXMuY29uZmlnLnNlbGVjdE1vZGUgPT09ICdtdWx0aScpIHtcbiAgICAgICAgdGhpcy5kYXRhU3RhdGVTZXJ2aWNlLnNlbGVjdGVkT3B0aW9ucyA9IFtxdWVyeVJlc3VsdC5vcHRpb25zWzBdXTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuZGF0YVN0YXRlU2VydmljZS5zZWxlY3RlZE9wdGlvbiA9IHF1ZXJ5UmVzdWx0Lm9wdGlvbnNbMF07XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLmNvbmZpZy50cmlnZ2VyU2VsZWN0Q2hhbmdlT25GaXJzdE9wdGlvblNlbGVjdCkge1xuICAgICAgICB0aGlzLnRyaWdnZXJTZWxlY3RDaGFuZ2UoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLmRhdGFTdGF0ZVNlcnZpY2UudG90YWxPcHRpb25Db3VudCA9IHF1ZXJ5UmVzdWx0LmNvdW50O1xuICAgIHRoaXMuZGF0YVN0YXRlU2VydmljZS5jdXJyZW50T3B0aW9uQ291bnQgKz0gcXVlcnlSZXN1bHQub3B0aW9ucy5sZW5ndGg7XG4gIH1cblxuICAvKipcbiAgICogT24gYWZ0ZXIgZGF0YSBiaW5kIGV2ZW50IGhhbmRsZXIuXG4gICAqIEBwYXJhbSBxdWVyeVJlc3VsdCBRdWVyeSByZXN1bHQgb2JqZWN0IHJlZmVyZW5jZS5cbiAgICovXG4gIHByaXZhdGUgb25BZnRlckRhdGFCaW5kKHF1ZXJ5UmVzdWx0OiBEcm9wZG93blF1ZXJ5UmVzdWx0PGFueT4pOiB2b2lkIHtcbiAgICB0aGlzLnNldERyb3Bkb3duT3B0aW9ucyhxdWVyeVJlc3VsdCk7XG4gICAgdGhpcy5kYXRhU3RhdGVTZXJ2aWNlLmRhdGFMb2FkaW5nID0gZmFsc2U7XG4gICAgdGhpcy5ldmVudFN0YXRlU2VydmljZS5kYXRhQm91bmRTdHJlYW0uZW1pdCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIEZldGNoIHF1ZXJ5IHJlc3VsdHMuXG4gICAqIEBwYXJhbSBoYXJkUmVsb2FkIEhhcmQgcmVsb2FkIHN0YXRlLlxuICAgKi9cbiAgcHJpdmF0ZSBmZXRjaFF1ZXJ5UmVzdWx0cyhoYXJkUmVsb2FkOiBib29sZWFuKTogT2JzZXJ2YWJsZTxEcm9wZG93blF1ZXJ5UmVzdWx0PGFueT4+IHtcbiAgICB0aGlzLmRhdGFTdGF0ZVNlcnZpY2UuZGF0YUxvYWRpbmcgPSB0cnVlO1xuXG4gICAgaWYgKGhhcmRSZWxvYWQpIHtcbiAgICAgIHRoaXMuZGF0YVN0YXRlU2VydmljZS5vZmZzZXQgPSAwO1xuICAgICAgdGhpcy5kYXRhU3RhdGVTZXJ2aWNlLmZpbHRlclRleHQgPSAnJztcbiAgICB9XG5cbiAgICBjb25zdCByZXF1ZXN0UGFyYW1zOiBEcm9wZG93blJlcXVlc3RQYXJhbXMgPSB7XG4gICAgICBoYXJkUmVsb2FkXG4gICAgfTtcblxuICAgIGlmICh0aGlzLmNvbmZpZy5sb2FkT25TY3JvbGwpIHtcbiAgICAgIHJlcXVlc3RQYXJhbXMubGltaXQgPSB0aGlzLmNvbmZpZy5saW1pdDtcbiAgICAgIHJlcXVlc3RQYXJhbXMub2Zmc2V0ID0gdGhpcy5kYXRhU3RhdGVTZXJ2aWNlLm9mZnNldDtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5jb25maWcuZmlsdGVyYWJsZSkge1xuICAgICAgcmVxdWVzdFBhcmFtcy5maWx0ZXIgPSB7XG4gICAgICAgIGtleTogdGhpcy5jb25maWcuZGlzcGxheVRyYWNrQnksXG4gICAgICAgIHZhbHVlOiB0aGlzLmRhdGFTdGF0ZVNlcnZpY2UuZmlsdGVyVGV4dFxuICAgICAgfTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5kYXRhU3RhdGVTZXJ2aWNlLm9uRGF0YUJpbmQocmVxdWVzdFBhcmFtcyk7XG4gIH1cblxuICAvKipcbiAgICogSW5pdGlhbGl6ZSBkYXRhIGZldGNoIGV2ZW50LlxuICAgKi9cbiAgcHJpdmF0ZSBpbml0RGF0YUZldGNoRXZlbnQoKTogdm9pZCB7XG4gICAgY29uc3Qgbm9vcCA9IHtcbiAgICAgIG9wdGlvbnM6IFtdLFxuICAgICAgY291bnQ6IDBcbiAgICB9O1xuXG4gICAgdGhpcy5ldmVudFN0YXRlU2VydmljZS5kYXRhRmV0Y2hTdHJlYW1cbiAgICAgIC5waXBlKFxuICAgICAgICBkZWJvdW5jZVRpbWUoMjApLFxuICAgICAgICBzd2l0Y2hNYXAoKGhhcmRSZWxvYWQ6IGJvb2xlYW4pID0+IHRoaXMuZmV0Y2hRdWVyeVJlc3VsdHMoaGFyZFJlbG9hZCkpLFxuICAgICAgICBjYXRjaEVycm9yKCgpID0+IHtcbiAgICAgICAgICByZXR1cm4gb2Yobm9vcCk7XG4gICAgICAgIH0pXG4gICAgICApXG4gICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAocXVlcnlSZXN1bHQ6IERyb3Bkb3duUXVlcnlSZXN1bHQ8YW55PikgPT4ge1xuICAgICAgICAgIHRoaXMub25BZnRlckRhdGFCaW5kKHF1ZXJ5UmVzdWx0KTtcbiAgICAgICAgfSxcbiAgICAgICAgKCkgPT4ge1xuICAgICAgICAgIHRoaXMub25BZnRlckRhdGFCaW5kKG5vb3ApO1xuICAgICAgICB9XG4gICAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFRyaWdnZXIgZXhwbGljaXQgZGF0YSBmZXRjaC5cbiAgICogQHBhcmFtIGhhcmRSZWxvYWQgSGFyZCByZWxvYWQgc3RhdGUuXG4gICAqL1xuICBwdWJsaWMgZmV0Y2hEYXRhKGhhcmRSZWxvYWQ6IGJvb2xlYW4gPSBmYWxzZSk6IHZvaWQge1xuICAgIHRoaXMuZXZlbnRTdGF0ZVNlcnZpY2UuZGF0YUZldGNoU3RyZWFtLmVtaXQoaGFyZFJlbG9hZCk7XG4gIH1cblxuICAvKipcbiAgICogT24gc2VsZWN0IG9wdGlvbiByZW1vdmUgZXZlbnQgaGFuZGxlci5cbiAgICogQHBhcmFtIGluZGV4IFNlbGVjdGVkIG9wdGlvbiBpbmRleC5cbiAgICovXG4gIHB1YmxpYyBvblNlbGVjdE9wdGlvblJlbW92ZShpbmRleDogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy5kYXRhU3RhdGVTZXJ2aWNlLnNlbGVjdGVkT3B0aW9ucy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIHRoaXMuZXZlbnRTdGF0ZVNlcnZpY2Uuc2VsZWN0Q2hhbmdlU3RyZWFtLmVtaXQodGhpcy5kYXRhU3RhdGVTZXJ2aWNlLnNlbGVjdGVkT3B0aW9ucyk7XG4gIH1cblxuICAvKipcbiAgICogQ2xvc2UgZHJvcGRvd24gb3B0aW9ucyBtZW51LlxuICAgKi9cbiAgcHVibGljIGNsb3NlKCk6IHZvaWQge1xuICAgIHRoaXMuZGF0YVN0YXRlU2VydmljZS5jb21wb25lbnRMb2FkZXJSZWYuaGlkZSgpO1xuICB9XG59XG4iXX0=