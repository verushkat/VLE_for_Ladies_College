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
var DropdownComponent = /** @class */ (function () {
    function DropdownComponent(componentLoaderFactory, injector, eventStateService, dropdownResourceService, renderer, dataStateService, config) {
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
    Object.defineProperty(DropdownComponent.prototype, "optionTemplate", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.dataStateService.dropdownOptionTemplate = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DropdownComponent.prototype, "optionGroupHeaderTemplate", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.dataStateService.dropdownOptionGroupHeaderTemplate = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DropdownComponent.prototype, "onDataBind", {
        // Input - Event handlers
        /**
         * Set data bind callback. This handler is fired on each data fetch request.
         */
        set: 
        // Input - Event handlers
        /**
         * Set data bind callback. This handler is fired on each data fetch request.
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.dataStateService.onDataBind = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DropdownComponent.prototype, "loadingSpinnerTemplateRef", {
        // Inputs
        /**
         * Set dropdown loading spinner template reference object. Used by data table component to explicitly pass the template reference.
         */
        set: 
        // Inputs
        /**
         * Set dropdown loading spinner template reference object. Used by data table component to explicitly pass the template reference.
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.loadingSpinnerTemplate = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DropdownComponent.prototype, "optionTemplateRef", {
        /**
         * Set dropdown option template reference. Used by data table component to explicitly pass the template reference.
         */
        set: /**
         * Set dropdown option template reference. Used by data table component to explicitly pass the template reference.
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.optionTemplate = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DropdownComponent.prototype, "optionGroupHeaderTemplateRef", {
        /**
         * Set dropdown options group header template reference. Used by data table component to explicitly pass the template reference.
         */
        set: /**
         * Set dropdown options group header template reference. Used by data table component to explicitly pass the template reference.
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.optionGroupHeaderTemplate = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DropdownComponent.prototype, "options", {
        /**
         * Set static dropdown options collection. No need to set data source when static options collection is provided.
         */
        set: /**
         * Set static dropdown options collection. No need to set data source when static options collection is provided.
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (!value) {
                return;
            }
            this.eventStateService.staticDataSourceStream.next(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DropdownComponent.prototype, "dataSource", {
        /**
         * Set data source observable. This observable is used to retrieve dropdown options for data binding.
         */
        set: /**
         * Set data source observable. This observable is used to retrieve dropdown options for data binding.
         * @param {?} source
         * @return {?}
         */
        function (source) {
            this.initDataSource(source);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DropdownComponent.prototype, "id", {
        /**
         * Set dropdown unique identifier.
         */
        set: /**
         * Set dropdown unique identifier.
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (!ValidatorService.idPatternValidatorExpression.test(value)) {
                throw Error('Invalid [id] input value. Unique identifier parameter only accept string begin with a letter ([A-Za-z]) and may be followed by any number of letters, digits ([0-9]), hyphens ("-"), underscores ("_").');
            }
            this.dataStateService.id = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DropdownComponent.prototype, "translations", {
        /**
         * Set translation data object. Used to localize table static label text.
         */
        set: /**
         * Set translation data object. Used to localize table static label text.
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.config.translations = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DropdownComponent.prototype, "selectTrackBy", {
        /**
         * Set select option track by field path which is used to uniquely identify options for selection tracking.
         * This field support object paths expressions 'root[0].nest'.
         */
        set: /**
         * Set select option track by field path which is used to uniquely identify options for selection tracking.
         * This field support object paths expressions 'root[0].nest'.
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.config.selectTrackBy = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DropdownComponent.prototype, "displayTrackBy", {
        /**
         * Set display value track by field path which is used to extract dropdown option display value.
         * This field support object paths expressions 'root[0].nest'.
         */
        set: /**
         * Set display value track by field path which is used to extract dropdown option display value.
         * This field support object paths expressions 'root[0].nest'.
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.config.displayTrackBy = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DropdownComponent.prototype, "groupByField", {
        /**
         * Set options group field path which is used to group the dropdown options.
         * This field support object paths expressions 'root[0].nest'.
         */
        set: /**
         * Set options group field path which is used to group the dropdown options.
         * This field support object paths expressions 'root[0].nest'.
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.config.groupByField = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DropdownComponent.prototype, "disabledTrackBy", {
        /**
         * Set dropdown option disable state field path which is used to disabled state dropdown options.
         * This field support object paths expressions 'root[0].nest'.
         */
        set: /**
         * Set dropdown option disable state field path which is used to disabled state dropdown options.
         * This field support object paths expressions 'root[0].nest'.
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.config.disabledTrackBy = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DropdownComponent.prototype, "selectedOptions", {
        /**
         * Set selected options collection. These options will be set selected by default on initial load.
         * Applicable only when multi select mode is enabled.
         */
        set: /**
         * Set selected options collection. These options will be set selected by default on initial load.
         * Applicable only when multi select mode is enabled.
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.dataStateService.selectedOptions = value || [];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DropdownComponent.prototype, "selectedOption", {
        /**
         * Set selected option. This option is selected by default on initial load.
         * Applicable only when single select mode is enabled.
         */
        set: /**
         * Set selected option. This option is selected by default on initial load.
         * Applicable only when single select mode is enabled.
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.dataStateService.selectedOption = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DropdownComponent.prototype, "limit", {
        /**
         * Set number of options to fetch on scroll to bottom action when load on scroll mode is enabled.
         */
        set: /**
         * Set number of options to fetch on scroll to bottom action when load on scroll mode is enabled.
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.config.limit = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DropdownComponent.prototype, "wrapDisplaySelectLimit", {
        /**
         * Set wrap selected options in dropdown view and show the number of options selected instead when
         * limit is met or exceeded. Applicable only when multi select mode is enabled.
         */
        set: /**
         * Set wrap selected options in dropdown view and show the number of options selected instead when
         * limit is met or exceeded. Applicable only when multi select mode is enabled.
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.config.wrapDisplaySelectLimit = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DropdownComponent.prototype, "loadOnScroll", {
        /**
         * Set infinite scrollable state to load data on demand with scroll motion. Dropdown data fetch call is
         * initiated with limit and offset when user scroll to bottom hence loading the full data set on init.
         */
        set: /**
         * Set infinite scrollable state to load data on demand with scroll motion. Dropdown data fetch call is
         * initiated with limit and offset when user scroll to bottom hence loading the full data set on init.
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.config.loadOnScroll = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DropdownComponent.prototype, "loadViewDistanceRatio", {
        /**
         * Set view height ratio to trigger data fetch with infinite scrollable mode.
         * Higher ratio will will increase the scroll sensitivity.
         */
        set: /**
         * Set view height ratio to trigger data fetch with infinite scrollable mode.
         * Higher ratio will will increase the scroll sensitivity.
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.config.loadViewDistanceRatio = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DropdownComponent.prototype, "selectMode", {
        /**
         * Set option select mode.
         * - 'multi' : Support selecting multiple options.
         * - 'single' : Support selecting a single option from options collection.
         * - 'single-toggle' : Support selecting a single option from options collection. Selection can not be removed but
         * only toggled by tapping on another option.
         */
        set: /**
         * Set option select mode.
         * - 'multi' : Support selecting multiple options.
         * - 'single' : Support selecting a single option from options collection.
         * - 'single-toggle' : Support selecting a single option from options collection. Selection can not be removed but
         * only toggled by tapping on another option.
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.config.selectMode = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DropdownComponent.prototype, "filterable", {
        /**
         * Show dropdown option search filter text-box if true.
         */
        set: /**
         * Show dropdown option search filter text-box if true.
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.config.filterable = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DropdownComponent.prototype, "filterText", {
        /**
         * Set default filter value to be applied on initial load. All options are displayed when filter text value is
         * empty string. Applicable only when dropdown is filterable.
         */
        set: /**
         * Set default filter value to be applied on initial load. All options are displayed when filter text value is
         * empty string. Applicable only when dropdown is filterable.
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.dataStateService.filterText = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DropdownComponent.prototype, "filterDebounce", {
        /**
         * Set time based filter debounce to optimize performance and avoid request flooding by reducing the filter
         * request frequency if true. Applicable only when dropdown filterable state is enabled.
         */
        set: /**
         * Set time based filter debounce to optimize performance and avoid request flooding by reducing the filter
         * request frequency if true. Applicable only when dropdown filterable state is enabled.
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.config.filterDebounce = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DropdownComponent.prototype, "filterDebounceTime", {
        /**
         * Set filter debounce time in milliseconds. Applicable only when searchDebounce is true.
         */
        set: /**
         * Set filter debounce time in milliseconds. Applicable only when searchDebounce is true.
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.config.filterDebounceTime = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DropdownComponent.prototype, "loadDataOnInit", {
        /**
         * Set load data on component initialize if true.
         */
        set: /**
         * Set load data on component initialize if true.
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.config.loadDataOnInit = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DropdownComponent.prototype, "showSelectedOptionRemoveButton", {
        /**
         * Show selected option remove button if true.
         * Applicable only when multi select mode ios enabled.
         */
        set: /**
         * Show selected option remove button if true.
         * Applicable only when multi select mode ios enabled.
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.config.showSelectedOptionRemoveButton = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DropdownComponent.prototype, "showClearSelectionButton", {
        /**
         * Set show all select options clear button if true.
         * Applicable only when multi select mode ios enabled.
         */
        set: /**
         * Set show all select options clear button if true.
         * Applicable only when multi select mode ios enabled.
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.config.showClearSelectionButton = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DropdownComponent.prototype, "menuWidth", {
        /**
         * Set options menu width in pixels.
         */
        set: /**
         * Set options menu width in pixels.
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.config.menuWidth = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DropdownComponent.prototype, "menuHeight", {
        /**
         * Set options menu height in pixels.
         */
        set: /**
         * Set options menu height in pixels.
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.config.menuHeight = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DropdownComponent.prototype, "menuPosition", {
        /**
         * Set popup options menu display position relative to dropdown component.
         * Support 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' values.
         */
        set: /**
         * Set popup options menu display position relative to dropdown component.
         * Support 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' values.
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.config.menuPosition = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DropdownComponent.prototype, "disabled", {
        /**
         * Set dropdown view disabled state.
         */
        set: /**
         * Set dropdown view disabled state.
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.dataStateService.disabled = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DropdownComponent.prototype, "closeMenuOnSelect", {
        /**
         * Set Close dropdown menu on option select if true.
         */
        set: /**
         * Set Close dropdown menu on option select if true.
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.config.closeMenuOnSelect = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DropdownComponent.prototype, "showOptionSelectCheckbox", {
        /**
         * Set show dropdown option select checkbox if true.
         */
        set: /**
         * Set show dropdown option select checkbox if true.
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.config.showOptionSelectCheckbox = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DropdownComponent.prototype, "showOptionIndex", {
        /**
         * Set show dropdown option index checkbox if true.
         */
        set: /**
         * Set show dropdown option index checkbox if true.
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.config.showOptionIndex = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DropdownComponent.prototype, "showOptionTrackBy", {
        /**
         * Set show dropdown option TrackBy id checkbox if true.
         */
        set: /**
         * Set show dropdown option TrackBy id checkbox if true.
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.config.showOptionTrackBy = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DropdownComponent.prototype, "multiSelectOptionMaxWidth", {
        /**
         * Multi select option selected item maximum width. Apply ellipsis when selected option display text
         * exceed the max width.
         */
        set: /**
         * Multi select option selected item maximum width. Apply ellipsis when selected option display text
         * exceed the max width.
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.config.multiSelectOptionMaxWidth = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DropdownComponent.prototype, "setFirstOptionSelected", {
        /**
         * Set first dropdown option selected on data fetch if true.
         */
        set: /**
         * Set first dropdown option selected on data fetch if true.
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.config.setFirstOptionSelected = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DropdownComponent.prototype, "triggerSelectChangeOnInit", {
        /**
         * Trigger select change event on init if true.
         * Can be used to enable selectedOptions or selectedOption associated change trigger.
         */
        set: /**
         * Trigger select change event on init if true.
         * Can be used to enable selectedOptions or selectedOption associated change trigger.
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.config.triggerSelectChangeOnInit = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DropdownComponent.prototype, "triggerSelectChangeOnModelUpdate", {
        /**
         * Set trigger select change on explicit model update if true.
         * Applicable only when form binding is used.
         */
        set: /**
         * Set trigger select change on explicit model update if true.
         * Applicable only when form binding is used.
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.config.triggerSelectChangeOnModelUpdate = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DropdownComponent.prototype, "triggerSelectChangeOnFirstOptionSelect", {
        /**
         * Set trigger select change on first option select change if true.
         * Applicable only when setFirstOptionSelected is true.
         */
        set: /**
         * Set trigger select change on first option select change if true.
         * Applicable only when setFirstOptionSelected is true.
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.config.triggerSelectChangeOnFirstOptionSelect = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DropdownComponent.prototype, "dynamicDimensionCalculation", {
        /**
         * Set dynamically calculate dropdown view dimensions relative to dropdown button width.
         * MenuWith and menuHeight values are ignored when true.
         */
        set: /**
         * Set dynamically calculate dropdown view dimensions relative to dropdown button width.
         * MenuWith and menuHeight values are ignored when true.
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.config.dynamicDimensionCalculation = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DropdownComponent.prototype, "dynamicWidthRatio", {
        /**
         * Set dynamic dropdown options view dimensions calculation width ratio relative to dropdown selector.
         */
        set: /**
         * Set dynamic dropdown options view dimensions calculation width ratio relative to dropdown selector.
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.config.dynamicWidthRatio = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DropdownComponent.prototype, "dynamicHeightRatio", {
        /**
         * Set dynamic dropdown options view dimensions calculation height ratio relative to dropdown selector.
         */
        set: /**
         * Set dynamic dropdown options view dimensions calculation height ratio relative to dropdown selector.
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.config.dynamicHeightRatio = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DropdownComponent.prototype, "relativeParentElement", {
        /**
         * Set relative parent element to render dropdown view container.
         */
        set: /**
         * Set relative parent element to render dropdown view container.
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.config.relativeParentElement = value;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Initialize data source.
     * @param source Data source stream.
     */
    /**
     * Initialize data source.
     * @private
     * @param {?} source Data source stream.
     * @return {?}
     */
    DropdownComponent.prototype.initDataSource = /**
     * Initialize data source.
     * @private
     * @param {?} source Data source stream.
     * @return {?}
     */
    function (source) {
        var _this = this;
        this.dropdownResourceService.setDataSource(source);
        this.dataStateService.onDataBind = (/**
         * @param {?} params
         * @return {?}
         */
        function (params) {
            if (params.hardReload) {
                _this.dropdownResourceService.setDataSource(source);
            }
            return _this.dropdownResourceService.query(params);
        });
    };
    /**
     * Performs dropdown toggle event.
     * @param event Mouse click event args.
     * @param element Dropdown button element.
     */
    /**
     * Performs dropdown toggle event.
     * @param {?} event Mouse click event args.
     * @param {?} element Dropdown button element.
     * @return {?}
     */
    DropdownComponent.prototype.toggleDropdown = /**
     * Performs dropdown toggle event.
     * @param {?} event Mouse click event args.
     * @param {?} element Dropdown button element.
     * @return {?}
     */
    function (event, element) {
        /** @type {?} */
        var target = (/** @type {?} */ (event.target));
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
    };
    Object.defineProperty(DropdownComponent.prototype, "wrapSelectedOptions", {
        /**
         * Get options wrapped state.
         */
        get: /**
         * Get options wrapped state.
         * @return {?}
         */
        function () {
            if (this.config.wrapDisplaySelectLimit !== undefined) {
                return this.dataStateService.selectedOptions.length > this.config.wrapDisplaySelectLimit;
            }
            return false;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DropdownComponent.prototype, "wrappedOptionDisplayText", {
        /**
         * Get wrapped option display text.
         */
        get: /**
         * Get wrapped option display text.
         * @return {?}
         */
        function () {
            return "(" + this.dataStateService.selectedOptions.length + ") " + this.config.translations.selectedOptionWrapPlaceholder;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Lifecycle hook that is called when component is destroyed.
     */
    /**
     * Lifecycle hook that is called when component is destroyed.
     * @return {?}
     */
    DropdownComponent.prototype.ngOnDestroy = /**
     * Lifecycle hook that is called when component is destroyed.
     * @return {?}
     */
    function () {
        if (this.onSelectChangeSubscription) {
            this.onSelectChangeSubscription.unsubscribe();
        }
        this.dataStateService.componentLoaderRef.dispose();
    };
    Object.defineProperty(DropdownComponent.prototype, "hasSelectedOptions", {
        /**
         * Get selected options availability state.
         */
        get: /**
         * Get selected options availability state.
         * @return {?}
         */
        function () {
            if (this.config.selectMode === 'multi') {
                return !!this.dataStateService.selectedOptions.length;
            }
            return !!this.dataStateService.selectedOption;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Trigger select change.
     */
    /**
     * Trigger select change.
     * @return {?}
     */
    DropdownComponent.prototype.triggerSelectChange = /**
     * Trigger select change.
     * @return {?}
     */
    function () {
        if (this.config.selectMode === 'multi') {
            this.eventStateService.selectChangeStream.emit(this.dataStateService.selectedOptions);
        }
        else {
            this.eventStateService.selectChangeStream.emit(this.dataStateService.selectedOption);
        }
    };
    /**
     * Clear selected options.
     */
    /**
     * Clear selected options.
     * @return {?}
     */
    DropdownComponent.prototype.clearSelectedOptions = /**
     * Clear selected options.
     * @return {?}
     */
    function () {
        if (this.config.selectMode === 'multi') {
            this.dataStateService.selectedOptions = [];
            this.eventStateService.selectChangeStream.emit(this.dataStateService.selectedOptions);
        }
        else {
            this.dataStateService.selectedOption = undefined;
            this.eventStateService.selectChangeStream.emit(this.dataStateService.selectedOption);
        }
    };
    /**
     * Set disabled state.
     * ControlValueAccessor implementation.
     * @param isDisabled True if disabled.
     */
    /**
     * Set disabled state.
     * ControlValueAccessor implementation.
     * @param {?} isDisabled True if disabled.
     * @return {?}
     */
    DropdownComponent.prototype.setDisabledState = /**
     * Set disabled state.
     * ControlValueAccessor implementation.
     * @param {?} isDisabled True if disabled.
     * @return {?}
     */
    function (isDisabled) {
        this.dataStateService.disabled = isDisabled;
    };
    /**
     * Called when value selected value gets updated.
     * ControlValueAccessor implementation.
     * @param value Selected value.
     */
    /**
     * Called when value selected value gets updated.
     * ControlValueAccessor implementation.
     * @param {?} value Selected value.
     * @return {?}
     */
    DropdownComponent.prototype.writeValue = /**
     * Called when value selected value gets updated.
     * ControlValueAccessor implementation.
     * @param {?} value Selected value.
     * @return {?}
     */
    function (value) {
        if (this.config.selectMode === 'multi') {
            this.dataStateService.selectedOptions = value || [];
        }
        else {
            this.dataStateService.selectedOption = value;
        }
        if (this.config.triggerSelectChangeOnModelUpdate) {
            this.triggerSelectChange();
        }
    };
    /**
     * Register on change event.
     * ControlValueAccessor implementation.
     * @param onSelectChange On select change callback function.
     */
    /**
     * Register on change event.
     * ControlValueAccessor implementation.
     * @param {?} onSelectChange On select change callback function.
     * @return {?}
     */
    DropdownComponent.prototype.registerOnChange = /**
     * Register on change event.
     * ControlValueAccessor implementation.
     * @param {?} onSelectChange On select change callback function.
     * @return {?}
     */
    function (onSelectChange) {
        this.onSelectChangeSubscription = this.selectChange.subscribe((/**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            onSelectChange(value);
        }));
    };
    /**
     * Register on touched event.
     * ControlValueAccessor implementation.
     * @param fn Function reference.
     */
    /**
     * Register on touched event.
     * ControlValueAccessor implementation.
     * @param {?} fn Function reference.
     * @return {?}
     */
    DropdownComponent.prototype.registerOnTouched = /**
     * Register on touched event.
     * ControlValueAccessor implementation.
     * @param {?} fn Function reference.
     * @return {?}
     */
    function (fn) {
        // TODO: Implement touch event handler
    };
    /**
     * Lifecycle hook that is called when component is initialized.
     */
    /**
     * Lifecycle hook that is called when component is initialized.
     * @return {?}
     */
    DropdownComponent.prototype.ngOnInit = /**
     * Lifecycle hook that is called when component is initialized.
     * @return {?}
     */
    function () {
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
    };
    /**
     * Map source data object to dropdown option model.
     * @param option Source dropdown option.
     * @param index Current index.
     */
    /**
     * Map source data object to dropdown option model.
     * @private
     * @param {?} option Source dropdown option.
     * @param {?} index Current index.
     * @return {?}
     */
    DropdownComponent.prototype.mapDropdownOption = /**
     * Map source data object to dropdown option model.
     * @private
     * @param {?} option Source dropdown option.
     * @param {?} index Current index.
     * @return {?}
     */
    function (option, index) {
        /** @type {?} */
        var id = get(option, this.config.selectTrackBy);
        return {
            disabled: get(option, this.config.disabledTrackBy),
            id: id,
            index: index + this.dataStateService.offset + 1,
            option: option,
            text: get(option, this.config.displayTrackBy)
        };
    };
    /**
     *
     * Set dropdown options data.
     * @param queryResult Query result object reference.
     */
    /**
     *
     * Set dropdown options data.
     * @private
     * @param {?} queryResult Query result object reference.
     * @return {?}
     */
    DropdownComponent.prototype.setDropdownOptions = /**
     *
     * Set dropdown options data.
     * @private
     * @param {?} queryResult Query result object reference.
     * @return {?}
     */
    function (queryResult) {
        var _this = this;
        if (this.config.groupByField) {
            this.dataStateService.dropdownOptionGroups = queryResult.options.reduce((/**
             * @param {?} accumulator
             * @param {?} option
             * @param {?} index
             * @return {?}
             */
            function (accumulator, option, index) {
                /** @type {?} */
                var groupFieldValue = get(option, _this.config.groupByField);
                /** @type {?} */
                var currentGroup = accumulator.find((/**
                 * @param {?} group
                 * @return {?}
                 */
                function (group) { return group.groupName === groupFieldValue; }));
                if (currentGroup) {
                    currentGroup.options.push(_this.mapDropdownOption(option, index));
                }
                else {
                    accumulator.push({
                        groupName: groupFieldValue,
                        options: [_this.mapDropdownOption(option, index)]
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
            function (accumulator, option, index) {
                accumulator.push(_this.mapDropdownOption(option, index));
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
    };
    /**
     * On after data bind event handler.
     * @param queryResult Query result object reference.
     */
    /**
     * On after data bind event handler.
     * @private
     * @param {?} queryResult Query result object reference.
     * @return {?}
     */
    DropdownComponent.prototype.onAfterDataBind = /**
     * On after data bind event handler.
     * @private
     * @param {?} queryResult Query result object reference.
     * @return {?}
     */
    function (queryResult) {
        this.setDropdownOptions(queryResult);
        this.dataStateService.dataLoading = false;
        this.eventStateService.dataBoundStream.emit();
    };
    /**
     * Fetch query results.
     * @param hardReload Hard reload state.
     */
    /**
     * Fetch query results.
     * @private
     * @param {?} hardReload Hard reload state.
     * @return {?}
     */
    DropdownComponent.prototype.fetchQueryResults = /**
     * Fetch query results.
     * @private
     * @param {?} hardReload Hard reload state.
     * @return {?}
     */
    function (hardReload) {
        this.dataStateService.dataLoading = true;
        if (hardReload) {
            this.dataStateService.offset = 0;
            this.dataStateService.filterText = '';
        }
        /** @type {?} */
        var requestParams = {
            hardReload: hardReload
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
    };
    /**
     * Initialize data fetch event.
     */
    /**
     * Initialize data fetch event.
     * @private
     * @return {?}
     */
    DropdownComponent.prototype.initDataFetchEvent = /**
     * Initialize data fetch event.
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var noop = {
            options: [],
            count: 0
        };
        this.eventStateService.dataFetchStream
            .pipe(debounceTime(20), switchMap((/**
         * @param {?} hardReload
         * @return {?}
         */
        function (hardReload) { return _this.fetchQueryResults(hardReload); })), catchError((/**
         * @return {?}
         */
        function () {
            return of(noop);
        })))
            .subscribe((/**
         * @param {?} queryResult
         * @return {?}
         */
        function (queryResult) {
            _this.onAfterDataBind(queryResult);
        }), (/**
         * @return {?}
         */
        function () {
            _this.onAfterDataBind(noop);
        }));
    };
    /**
     * Trigger explicit data fetch.
     * @param hardReload Hard reload state.
     */
    /**
     * Trigger explicit data fetch.
     * @param {?=} hardReload Hard reload state.
     * @return {?}
     */
    DropdownComponent.prototype.fetchData = /**
     * Trigger explicit data fetch.
     * @param {?=} hardReload Hard reload state.
     * @return {?}
     */
    function (hardReload) {
        if (hardReload === void 0) { hardReload = false; }
        this.eventStateService.dataFetchStream.emit(hardReload);
    };
    /**
     * On select option remove event handler.
     * @param index Selected option index.
     */
    /**
     * On select option remove event handler.
     * @param {?} index Selected option index.
     * @return {?}
     */
    DropdownComponent.prototype.onSelectOptionRemove = /**
     * On select option remove event handler.
     * @param {?} index Selected option index.
     * @return {?}
     */
    function (index) {
        this.dataStateService.selectedOptions.splice(index, 1);
        this.eventStateService.selectChangeStream.emit(this.dataStateService.selectedOptions);
    };
    /**
     * Close dropdown options menu.
     */
    /**
     * Close dropdown options menu.
     * @return {?}
     */
    DropdownComponent.prototype.close = /**
     * Close dropdown options menu.
     * @return {?}
     */
    function () {
        this.dataStateService.componentLoaderRef.hide();
    };
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
                            function () { return DropdownComponent; })),
                            multi: true
                        }
                    ]
                }] }
    ];
    /** @nocollapse */
    DropdownComponent.ctorParameters = function () { return [
        { type: PopoverComponentLoaderFactoryService },
        { type: Injector },
        { type: DropdownEventStateService },
        { type: DropdownResourceService },
        { type: Renderer2 },
        { type: DropdownDataStateService },
        { type: DropdownConfigService }
    ]; };
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
    return DropdownComponent;
}());
export { DropdownComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcGRvd24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vb3JuYW1lbnR1bS8iLCJzb3VyY2VzIjpbImRyb3Bkb3duL2NvbXBvbmVudHMvZHJvcGRvd24vZHJvcGRvd24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULFlBQVksRUFDWixZQUFZLEVBQ1osVUFBVSxFQUNWLFFBQVEsRUFDUixLQUFLLEVBR0wsTUFBTSxFQUNOLFNBQVMsRUFDVCxXQUFXLEdBQ1osTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUF3QixpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXpFLE9BQU8sRUFBZ0IsVUFBVSxFQUFFLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNwRCxPQUFPLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVyRSxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0RBQWdELENBQUM7QUFXckUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFFakYsT0FBTyxFQUFFLG9DQUFvQyxFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDdkYsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFDL0UsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFDdEYsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFDeEYsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFFbkYsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sNkNBQTZDLENBQUM7Ozs7QUFLL0U7SUE2YUUsMkJBQ1Usc0JBQTRELEVBQzVELFFBQWtCLEVBQ2xCLGlCQUE0QyxFQUM1Qyx1QkFBcUQsRUFDckQsUUFBbUIsRUFDcEIsZ0JBQTBDLEVB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QUs7K0JBU0wsS0FBSzsyQkFRTCxLQUFLO29DQVFMLEtBQUs7MkNBUUwsS0FBSztrQ0FRTCxLQUFLO29DQVFMLEtBQUs7NENBU0wsS0FBSzt5Q0FRTCxLQUFLOzRDQVNMLEtBQUs7bURBU0wsS0FBSzt5REFTTCxLQUFLOzhDQVNMLEtBQUs7b0NBUUwsS0FBSztxQ0FRTCxLQUFLO3dDQVFMLEtBQUs7O0lBaVdSLHdCQUFDO0NBQUEsQUF6d0JELElBeXdCQztTQTF2QlksaUJBQWlCOzs7Ozs7SUFDNUIsdURBQWlEOztJQUVqRCxtREFDZ0Q7Ozs7O0lBZ0JoRCxpQ0FDNkM7Ozs7O0lBSzdDLHlDQUMrQzs7Ozs7SUFLL0Msc0NBQ3FDOzs7OztJQThYbkMsbURBQW9FOzs7OztJQUNwRSxxQ0FBMEI7Ozs7O0lBQzFCLDhDQUFvRDs7Ozs7SUFDcEQsb0RBQTZEOzs7OztJQUM3RCxxQ0FBMkI7O0lBQzNCLDZDQUFpRDs7SUFDakQsbUNBQW9DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBDb250ZW50Q2hpbGQsXG4gIEV2ZW50RW1pdHRlcixcbiAgZm9yd2FyZFJlZixcbiAgSW5qZWN0b3IsXG4gIElucHV0LFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbiAgT3V0cHV0LFxuICBSZW5kZXJlcjIsXG4gIFRlbXBsYXRlUmVmLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5pbXBvcnQgeyBTdWJzY3JpcHRpb24sIE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBjYXRjaEVycm9yLCBkZWJvdW5jZVRpbWUsIHN3aXRjaE1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgZ2V0IH0gZnJvbSAnLi4vLi4vLi4vdXRpbGl0eS9zZXJ2aWNlcy9vYmplY3QtdXRpbGl0eS5jbGFzcyc7XG5cbmltcG9ydCB7IERyb3Bkb3duVHJhbnNsYXRpb25zIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2Ryb3Bkb3duLXRyYW5zbGF0aW9ucy5tb2RlbCc7XG5pbXBvcnQgeyBEcm9wZG93bk9wdGlvbiB9IGZyb20gJy4uLy4uL21vZGVscy9kcm9wZG93bi1vcHRpb24ubW9kZWwnO1xuaW1wb3J0IHsgRHJvcGRvd25PcHRpb25Hcm91cCB9IGZyb20gJy4uLy4uL21vZGVscy9kcm9wZG93bi1vcHRpb24tZ3JvdXAubW9kZWwnO1xuaW1wb3J0IHsgRHJvcGRvd25SZXF1ZXN0UGFyYW1zIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2Ryb3Bkb3duLXJlcXVlc3QtcGFyYW1zLm1vZGVsJztcbmltcG9ydCB7IERyb3Bkb3duRGF0YUJpbmRDYWxsYmFjayB9IGZyb20gJy4uLy4uL21vZGVscy9kcm9wZG93bi1kYXRhLWJpbmQtY2FsbGJhY2subW9kZWwnO1xuaW1wb3J0IHsgRHJvcGRvd25RdWVyeVJlc3VsdCB9IGZyb20gJy4uLy4uL21vZGVscy9kcm9wZG93bi1xdWVyeS1yZXN1bHQubW9kZWwnO1xuXG5pbXBvcnQgeyBEcm9wZG93blNlbGVjdE1vZGUgfSBmcm9tICcuLi8uLi9tb2RlbHMvZHJvcGRvd24tc2VsZWN0LW1vZGUubW9kZWwnO1xuXG5pbXBvcnQgeyBEcm9wZG93blZpZXdDb21wb25lbnQgfSBmcm9tICcuLi9kcm9wZG93bi12aWV3L2Ryb3Bkb3duLXZpZXcuY29tcG9uZW50JztcblxuaW1wb3J0IHsgUG9wb3ZlckNvbXBvbmVudExvYWRlckZhY3RvcnlTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vdXRpbGl0eS91dGlsaXR5Lm1vZHVsZSc7XG5pbXBvcnQgeyBEcm9wZG93bkNvbmZpZ1NlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9kcm9wZG93bi1jb25maWcuc2VydmljZSc7XG5pbXBvcnQgeyBEcm9wZG93bkRhdGFTdGF0ZVNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9kcm9wZG93bi1kYXRhLXN0YXRlLnNlcnZpY2UnO1xuaW1wb3J0IHsgRHJvcGRvd25FdmVudFN0YXRlU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2Ryb3Bkb3duLWV2ZW50LXN0YXRlLnNlcnZpY2UnO1xuaW1wb3J0IHsgRHJvcGRvd25SZXNvdXJjZVNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9kcm9wZG93bi1yZXNvdXJjZS5zZXJ2aWNlJztcbmltcG9ydCB7IFZpZXdQb3NpdGlvbiB9IGZyb20gJy4uLy4uLy4uL3V0aWxpdHkvbW9kZWxzL3ZpZXctcG9zaXRpb24ubW9kZWwnO1xuaW1wb3J0IHsgVmFsaWRhdG9yU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL3V0aWxpdHkvc2VydmljZXMvdmFsaWRhdG9yLnNlcnZpY2UnO1xuXG4vKipcbiAqIERyb3Bkb3duIG1haW4gY29tcG9uZW50LlxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduZy1kcm9wZG93bicsXG4gIHRlbXBsYXRlVXJsOiAnLi9kcm9wZG93bi5jb21wb25lbnQuaHRtbCcsXG4gIHByb3ZpZGVyczogW1xuICAgIERyb3Bkb3duQ29uZmlnU2VydmljZSxcbiAgICBEcm9wZG93bkRhdGFTdGF0ZVNlcnZpY2UsXG4gICAgRHJvcGRvd25FdmVudFN0YXRlU2VydmljZSxcbiAgICBEcm9wZG93blJlc291cmNlU2VydmljZSxcbiAgICB7XG4gICAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IERyb3Bkb3duQ29tcG9uZW50KSxcbiAgICAgIG11bHRpOiB0cnVlXG4gICAgfVxuICBdXG59KVxuZXhwb3J0IGNsYXNzIERyb3Bkb3duQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3ksIENvbnRyb2xWYWx1ZUFjY2Vzc29yIHtcbiAgcHJpdmF0ZSBvblNlbGVjdENoYW5nZVN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuXG4gIEBDb250ZW50Q2hpbGQoJ25nRHJvcGRvd25Mb2FkaW5nU3Bpbm5lcicsIHsgc3RhdGljOiB0cnVlIH0pXG4gIHB1YmxpYyBsb2FkaW5nU3Bpbm5lclRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG4gIEBDb250ZW50Q2hpbGQoJ25nRHJvcGRvd25PcHRpb24nLCB7IHN0YXRpYzogdHJ1ZSB9KVxuICBwdWJsaWMgc2V0IG9wdGlvblRlbXBsYXRlKHZhbHVlOiBUZW1wbGF0ZVJlZjxhbnk+KSB7XG4gICAgdGhpcy5kYXRhU3RhdGVTZXJ2aWNlLmRyb3Bkb3duT3B0aW9uVGVtcGxhdGUgPSB2YWx1ZTtcbiAgfVxuXG4gIEBDb250ZW50Q2hpbGQoJ25nRHJvcGRvd25PcHRpb25Hcm91cEhlYWRlcicsIHsgc3RhdGljOiB0cnVlIH0pXG4gIHB1YmxpYyBzZXQgb3B0aW9uR3JvdXBIZWFkZXJUZW1wbGF0ZSh2YWx1ZTogVGVtcGxhdGVSZWY8YW55Pikge1xuICAgIHRoaXMuZGF0YVN0YXRlU2VydmljZS5kcm9wZG93bk9wdGlvbkdyb3VwSGVhZGVyVGVtcGxhdGUgPSB2YWx1ZTtcbiAgfVxuXG4gIC8vIE91dHB1dHMgOiBFdmVudCBIYW5kbGVyc1xuICAvKipcbiAgICogRHJvcGRvd24gaW5pdGlhbGl6ZSBldmVudCBoYW5kbGVyXG4gICAqL1xuICBAT3V0cHV0KClcbiAgcHVibGljIGluaXQ6IEV2ZW50RW1pdHRlcjxEcm9wZG93bkNvbXBvbmVudD47XG5cbiAgLyoqXG4gICAqIERyb3Bkb3duIG9wdGlvbiBzZWxlY3QgY2hhbmdlIGV2ZW50IGhhbmRsZXJcbiAgICovXG4gIEBPdXRwdXQoKVxuICBwdWJsaWMgc2VsZWN0Q2hhbmdlOiBFdmVudEVtaXR0ZXI8YW55W10gfCBhbnk+O1xuXG4gIC8qKlxuICAgKiBEcm9wZG93biBkYXRhIGJpbmQgZXZlbnQgaGFuZGxlclxuICAgKi9cbiAgQE91dHB1dCgpXG4gIHB1YmxpYyBkYXRhQm91bmQ6IEV2ZW50RW1pdHRlcjx2b2lkPjtcblxuICAvLyBJbnB1dCAtIEV2ZW50IGhhbmRsZXJzXG5cbiAgLyoqXG4gICAqIFNldCBkYXRhIGJpbmQgY2FsbGJhY2suIFRoaXMgaGFuZGxlciBpcyBmaXJlZCBvbiBlYWNoIGRhdGEgZmV0Y2ggcmVxdWVzdC5cbiAgICovXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgb25EYXRhQmluZCh2YWx1ZTogRHJvcGRvd25EYXRhQmluZENhbGxiYWNrPGFueT4pIHtcbiAgICB0aGlzLmRhdGFTdGF0ZVNlcnZpY2Uub25EYXRhQmluZCA9IHZhbHVlO1xuICB9XG5cbiAgLy8gSW5wdXRzXG5cbiAgLyoqXG4gICAqIFNldCBkcm9wZG93biBsb2FkaW5nIHNwaW5uZXIgdGVtcGxhdGUgcmVmZXJlbmNlIG9iamVjdC4gVXNlZCBieSBkYXRhIHRhYmxlIGNvbXBvbmVudCB0byBleHBsaWNpdGx5IHBhc3MgdGhlIHRlbXBsYXRlIHJlZmVyZW5jZS5cbiAgICovXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgbG9hZGluZ1NwaW5uZXJUZW1wbGF0ZVJlZih2YWx1ZTogVGVtcGxhdGVSZWY8YW55Pikge1xuICAgIHRoaXMubG9hZGluZ1NwaW5uZXJUZW1wbGF0ZSA9IHZhbHVlO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCBkcm9wZG93biBvcHRpb24gdGVtcGxhdGUgcmVmZXJlbmNlLiBVc2VkIGJ5IGRhdGEgdGFibGUgY29tcG9uZW50IHRvIGV4cGxpY2l0bHkgcGFzcyB0aGUgdGVtcGxhdGUgcmVmZXJlbmNlLlxuICAgKi9cbiAgQElucHV0KClcbiAgcHVibGljIHNldCBvcHRpb25UZW1wbGF0ZVJlZih2YWx1ZTogVGVtcGxhdGVSZWY8YW55Pikge1xuICAgIHRoaXMub3B0aW9uVGVtcGxhdGUgPSB2YWx1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgZHJvcGRvd24gb3B0aW9ucyBncm91cCBoZWFkZXIgdGVtcGxhdGUgcmVmZXJlbmNlLiBVc2VkIGJ5IGRhdGEgdGFibGUgY29tcG9uZW50IHRvIGV4cGxpY2l0bHkgcGFzcyB0aGUgdGVtcGxhdGUgcmVmZXJlbmNlLlxuICAgKi9cbiAgQElucHV0KClcbiAgcHVibGljIHNldCBvcHRpb25Hcm91cEhlYWRlclRlbXBsYXRlUmVmKHZhbHVlOiBUZW1wbGF0ZVJlZjxhbnk+KSB7XG4gICAgdGhpcy5vcHRpb25Hcm91cEhlYWRlclRlbXBsYXRlID0gdmFsdWU7XG4gIH1cblxuICAvKipcbiAgICogU2V0IHN0YXRpYyBkcm9wZG93biBvcHRpb25zIGNvbGxlY3Rpb24uIE5vIG5lZWQgdG8gc2V0IGRhdGEgc291cmNlIHdoZW4gc3RhdGljIG9wdGlvbnMgY29sbGVjdGlvbiBpcyBwcm92aWRlZC5cbiAgICovXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgb3B0aW9ucyh2YWx1ZTogYW55W10pIHtcbiAgICBpZiAoIXZhbHVlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5ldmVudFN0YXRlU2VydmljZS5zdGF0aWNEYXRhU291cmNlU3RyZWFtLm5leHQodmFsdWUpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCBkYXRhIHNvdXJjZSBvYnNlcnZhYmxlLiBUaGlzIG9ic2VydmFibGUgaXMgdXNlZCB0byByZXRyaWV2ZSBkcm9wZG93biBvcHRpb25zIGZvciBkYXRhIGJpbmRpbmcuXG4gICAqL1xuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IGRhdGFTb3VyY2Uoc291cmNlOiBPYnNlcnZhYmxlPGFueVtdPikge1xuICAgIHRoaXMuaW5pdERhdGFTb3VyY2Uoc291cmNlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgZHJvcGRvd24gdW5pcXVlIGlkZW50aWZpZXIuXG4gICAqL1xuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IGlkKHZhbHVlOiBzdHJpbmcpIHtcbiAgICBpZiAoIVZhbGlkYXRvclNlcnZpY2UuaWRQYXR0ZXJuVmFsaWRhdG9yRXhwcmVzc2lvbi50ZXN0KHZhbHVlKSkge1xuICAgICAgdGhyb3cgRXJyb3IoJ0ludmFsaWQgW2lkXSBpbnB1dCB2YWx1ZS4gVW5pcXVlIGlkZW50aWZpZXIgcGFyYW1ldGVyIG9ubHkgYWNjZXB0IHN0cmluZyBiZWdpbiB3aXRoIGEgbGV0dGVyIChbQS1aYS16XSkgYW5kIG1heSBiZSBmb2xsb3dlZCBieSBhbnkgbnVtYmVyIG9mIGxldHRlcnMsIGRpZ2l0cyAoWzAtOV0pLCBoeXBoZW5zIChcIi1cIiksIHVuZGVyc2NvcmVzIChcIl9cIikuJyk7XG4gICAgfVxuXG4gICAgdGhpcy5kYXRhU3RhdGVTZXJ2aWNlLmlkID0gdmFsdWU7XG4gIH1cblxuICAvKipcbiAgICogU2V0IHRyYW5zbGF0aW9uIGRhdGEgb2JqZWN0LiBVc2VkIHRvIGxvY2FsaXplIHRhYmxlIHN0YXRpYyBsYWJlbCB0ZXh0LlxuICAgKi9cbiAgQElucHV0KClcbiAgcHVibGljIHNldCB0cmFuc2xhdGlvbnModmFsdWU6IERyb3Bkb3duVHJhbnNsYXRpb25zKSB7XG4gICAgdGhpcy5jb25maWcudHJhbnNsYXRpb25zID0gdmFsdWU7XG4gIH1cblxuICAvKipcbiAgICogU2V0IHNlbGVjdCBvcHRpb24gdHJhY2sgYnkgZmllbGQgcGF0aCB3aGljaCBpcyB1c2VkIHRvIHVuaXF1ZWx5IGlkZW50aWZ5IG9wdGlvbnMgZm9yIHNlbGVjdGlvbiB0cmFja2luZy5cbiAgICogVGhpcyBmaWVsZCBzdXBwb3J0IG9iamVjdCBwYXRocyBleHByZXNzaW9ucyAncm9vdFswXS5uZXN0Jy5cbiAgICovXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgc2VsZWN0VHJhY2tCeSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5jb25maWcuc2VsZWN0VHJhY2tCeSA9IHZhbHVlO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCBkaXNwbGF5IHZhbHVlIHRyYWNrIGJ5IGZpZWxkIHBhdGggd2hpY2ggaXMgdXNlZCB0byBleHRyYWN0IGRyb3Bkb3duIG9wdGlvbiBkaXNwbGF5IHZhbHVlLlxuICAgKiBUaGlzIGZpZWxkIHN1cHBvcnQgb2JqZWN0IHBhdGhzIGV4cHJlc3Npb25zICdyb290WzBdLm5lc3QnLlxuICAgKi9cbiAgQElucHV0KClcbiAgcHVibGljIHNldCBkaXNwbGF5VHJhY2tCeSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5jb25maWcuZGlzcGxheVRyYWNrQnkgPSB2YWx1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgb3B0aW9ucyBncm91cCBmaWVsZCBwYXRoIHdoaWNoIGlzIHVzZWQgdG8gZ3JvdXAgdGhlIGRyb3Bkb3duIG9wdGlvbnMuXG4gICAqIFRoaXMgZmllbGQgc3VwcG9ydCBvYmplY3QgcGF0aHMgZXhwcmVzc2lvbnMgJ3Jvb3RbMF0ubmVzdCcuXG4gICAqL1xuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IGdyb3VwQnlGaWVsZCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5jb25maWcuZ3JvdXBCeUZpZWxkID0gdmFsdWU7XG4gIH1cblxuICAvKipcbiAgICogU2V0IGRyb3Bkb3duIG9wdGlvbiBkaXNhYmxlIHN0YXRlIGZpZWxkIHBhdGggd2hpY2ggaXMgdXNlZCB0byBkaXNhYmxlZCBzdGF0ZSBkcm9wZG93biBvcHRpb25zLlxuICAgKiBUaGlzIGZpZWxkIHN1cHBvcnQgb2JqZWN0IHBhdGhzIGV4cHJlc3Npb25zICdyb290WzBdLm5lc3QnLlxuICAgKi9cbiAgQElucHV0KClcbiAgcHVibGljIHNldCBkaXNhYmxlZFRyYWNrQnkodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuY29uZmlnLmRpc2FibGVkVHJhY2tCeSA9IHZhbHVlO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCBzZWxlY3RlZCBvcHRpb25zIGNvbGxlY3Rpb24uIFRoZXNlIG9wdGlvbnMgd2lsbCBiZSBzZXQgc2VsZWN0ZWQgYnkgZGVmYXVsdCBvbiBpbml0aWFsIGxvYWQuXG4gICAqIEFwcGxpY2FibGUgb25seSB3aGVuIG11bHRpIHNlbGVjdCBtb2RlIGlzIGVuYWJsZWQuXG4gICAqL1xuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IHNlbGVjdGVkT3B0aW9ucyh2YWx1ZTogYW55W10pIHtcbiAgICB0aGlzLmRhdGFTdGF0ZVNlcnZpY2Uuc2VsZWN0ZWRPcHRpb25zID0gdmFsdWUgfHwgW107XG4gIH1cblxuICAvKipcbiAgICogU2V0IHNlbGVjdGVkIG9wdGlvbi4gVGhpcyBvcHRpb24gaXMgc2VsZWN0ZWQgYnkgZGVmYXVsdCBvbiBpbml0aWFsIGxvYWQuXG4gICAqIEFwcGxpY2FibGUgb25seSB3aGVuIHNpbmdsZSBzZWxlY3QgbW9kZSBpcyBlbmFibGVkLlxuICAgKi9cbiAgQElucHV0KClcbiAgcHVibGljIHNldCBzZWxlY3RlZE9wdGlvbih2YWx1ZTogYW55KSB7XG4gICAgdGhpcy5kYXRhU3RhdGVTZXJ2aWNlLnNlbGVjdGVkT3B0aW9uID0gdmFsdWU7XG4gIH1cblxuICAvKipcbiAgICogU2V0IG51bWJlciBvZiBvcHRpb25zIHRvIGZldGNoIG9uIHNjcm9sbCB0byBib3R0b20gYWN0aW9uIHdoZW4gbG9hZCBvbiBzY3JvbGwgbW9kZSBpcyBlbmFibGVkLlxuICAgKi9cbiAgQElucHV0KClcbiAgcHVibGljIHNldCBsaW1pdCh2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5jb25maWcubGltaXQgPSB2YWx1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgd3JhcCBzZWxlY3RlZCBvcHRpb25zIGluIGRyb3Bkb3duIHZpZXcgYW5kIHNob3cgdGhlIG51bWJlciBvZiBvcHRpb25zIHNlbGVjdGVkIGluc3RlYWQgd2hlblxuICAgKiBsaW1pdCBpcyBtZXQgb3IgZXhjZWVkZWQuIEFwcGxpY2FibGUgb25seSB3aGVuIG11bHRpIHNlbGVjdCBtb2RlIGlzIGVuYWJsZWQuXG4gICAqL1xuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IHdyYXBEaXNwbGF5U2VsZWN0TGltaXQodmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuY29uZmlnLndyYXBEaXNwbGF5U2VsZWN0TGltaXQgPSB2YWx1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgaW5maW5pdGUgc2Nyb2xsYWJsZSBzdGF0ZSB0byBsb2FkIGRhdGEgb24gZGVtYW5kIHdpdGggc2Nyb2xsIG1vdGlvbi4gRHJvcGRvd24gZGF0YSBmZXRjaCBjYWxsIGlzXG4gICAqIGluaXRpYXRlZCB3aXRoIGxpbWl0IGFuZCBvZmZzZXQgd2hlbiB1c2VyIHNjcm9sbCB0byBib3R0b20gaGVuY2UgbG9hZGluZyB0aGUgZnVsbCBkYXRhIHNldCBvbiBpbml0LlxuICAgKi9cbiAgQElucHV0KClcbiAgcHVibGljIHNldCBsb2FkT25TY3JvbGwodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLmNvbmZpZy5sb2FkT25TY3JvbGwgPSB2YWx1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgdmlldyBoZWlnaHQgcmF0aW8gdG8gdHJpZ2dlciBkYXRhIGZldGNoIHdpdGggaW5maW5pdGUgc2Nyb2xsYWJsZSBtb2RlLlxuICAgKiBIaWdoZXIgcmF0aW8gd2lsbCB3aWxsIGluY3JlYXNlIHRoZSBzY3JvbGwgc2Vuc2l0aXZpdHkuXG4gICAqL1xuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IGxvYWRWaWV3RGlzdGFuY2VSYXRpbyh2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5jb25maWcubG9hZFZpZXdEaXN0YW5jZVJhdGlvID0gdmFsdWU7XG4gIH1cblxuICAvKipcbiAgICogU2V0IG9wdGlvbiBzZWxlY3QgbW9kZS5cbiAgICogLSAnbXVsdGknIDogU3VwcG9ydCBzZWxlY3RpbmcgbXVsdGlwbGUgb3B0aW9ucy5cbiAgICogLSAnc2luZ2xlJyA6IFN1cHBvcnQgc2VsZWN0aW5nIGEgc2luZ2xlIG9wdGlvbiBmcm9tIG9wdGlvbnMgY29sbGVjdGlvbi5cbiAgICogLSAnc2luZ2xlLXRvZ2dsZScgOiBTdXBwb3J0IHNlbGVjdGluZyBhIHNpbmdsZSBvcHRpb24gZnJvbSBvcHRpb25zIGNvbGxlY3Rpb24uIFNlbGVjdGlvbiBjYW4gbm90IGJlIHJlbW92ZWQgYnV0XG4gICAqIG9ubHkgdG9nZ2xlZCBieSB0YXBwaW5nIG9uIGFub3RoZXIgb3B0aW9uLlxuICAgKi9cbiAgQElucHV0KClcbiAgcHVibGljIHNldCBzZWxlY3RNb2RlKHZhbHVlOiBEcm9wZG93blNlbGVjdE1vZGUpIHtcbiAgICB0aGlzLmNvbmZpZy5zZWxlY3RNb2RlID0gdmFsdWU7XG4gIH1cblxuICAvKipcbiAgICogU2hvdyBkcm9wZG93biBvcHRpb24gc2VhcmNoIGZpbHRlciB0ZXh0LWJveCBpZiB0cnVlLlxuICAgKi9cbiAgQElucHV0KClcbiAgcHVibGljIHNldCBmaWx0ZXJhYmxlKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5jb25maWcuZmlsdGVyYWJsZSA9IHZhbHVlO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCBkZWZhdWx0IGZpbHRlciB2YWx1ZSB0byBiZSBhcHBsaWVkIG9uIGluaXRpYWwgbG9hZC4gQWxsIG9wdGlvbnMgYXJlIGRpc3BsYXllZCB3aGVuIGZpbHRlciB0ZXh0IHZhbHVlIGlzXG4gICAqIGVtcHR5IHN0cmluZy4gQXBwbGljYWJsZSBvbmx5IHdoZW4gZHJvcGRvd24gaXMgZmlsdGVyYWJsZS5cbiAgICovXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgZmlsdGVyVGV4dCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5kYXRhU3RhdGVTZXJ2aWNlLmZpbHRlclRleHQgPSB2YWx1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgdGltZSBiYXNlZCBmaWx0ZXIgZGVib3VuY2UgdG8gb3B0aW1pemUgcGVyZm9ybWFuY2UgYW5kIGF2b2lkIHJlcXVlc3QgZmxvb2RpbmcgYnkgcmVkdWNpbmcgdGhlIGZpbHRlclxuICAgKiByZXF1ZXN0IGZyZXF1ZW5jeSBpZiB0cnVlLiBBcHBsaWNhYmxlIG9ubHkgd2hlbiBkcm9wZG93biBmaWx0ZXJhYmxlIHN0YXRlIGlzIGVuYWJsZWQuXG4gICAqL1xuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IGZpbHRlckRlYm91bmNlKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5jb25maWcuZmlsdGVyRGVib3VuY2UgPSB2YWx1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgZmlsdGVyIGRlYm91bmNlIHRpbWUgaW4gbWlsbGlzZWNvbmRzLiBBcHBsaWNhYmxlIG9ubHkgd2hlbiBzZWFyY2hEZWJvdW5jZSBpcyB0cnVlLlxuICAgKi9cbiAgQElucHV0KClcbiAgcHVibGljIHNldCBmaWx0ZXJEZWJvdW5jZVRpbWUodmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuY29uZmlnLmZpbHRlckRlYm91bmNlVGltZSA9IHZhbHVlO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCBsb2FkIGRhdGEgb24gY29tcG9uZW50IGluaXRpYWxpemUgaWYgdHJ1ZS5cbiAgICovXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgbG9hZERhdGFPbkluaXQodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLmNvbmZpZy5sb2FkRGF0YU9uSW5pdCA9IHZhbHVlO1xuICB9XG5cbiAgLyoqXG4gICAqIFNob3cgc2VsZWN0ZWQgb3B0aW9uIHJlbW92ZSBidXR0b24gaWYgdHJ1ZS5cbiAgICogQXBwbGljYWJsZSBvbmx5IHdoZW4gbXVsdGkgc2VsZWN0IG1vZGUgaW9zIGVuYWJsZWQuXG4gICAqL1xuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IHNob3dTZWxlY3RlZE9wdGlvblJlbW92ZUJ1dHRvbih2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuY29uZmlnLnNob3dTZWxlY3RlZE9wdGlvblJlbW92ZUJ1dHRvbiA9IHZhbHVlO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCBzaG93IGFsbCBzZWxlY3Qgb3B0aW9ucyBjbGVhciBidXR0b24gaWYgdHJ1ZS5cbiAgICogQXBwbGljYWJsZSBvbmx5IHdoZW4gbXVsdGkgc2VsZWN0IG1vZGUgaW9zIGVuYWJsZWQuXG4gICAqL1xuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IHNob3dDbGVhclNlbGVjdGlvbkJ1dHRvbih2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuY29uZmlnLnNob3dDbGVhclNlbGVjdGlvbkJ1dHRvbiA9IHZhbHVlO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCBvcHRpb25zIG1lbnUgd2lkdGggaW4gcGl4ZWxzLlxuICAgKi9cbiAgQElucHV0KClcbiAgcHVibGljIHNldCBtZW51V2lkdGgodmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuY29uZmlnLm1lbnVXaWR0aCA9IHZhbHVlO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCBvcHRpb25zIG1lbnUgaGVpZ2h0IGluIHBpeGVscy5cbiAgICovXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgbWVudUhlaWdodCh2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5jb25maWcubWVudUhlaWdodCA9IHZhbHVlO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCBwb3B1cCBvcHRpb25zIG1lbnUgZGlzcGxheSBwb3NpdGlvbiByZWxhdGl2ZSB0byBkcm9wZG93biBjb21wb25lbnQuXG4gICAqIFN1cHBvcnQgJ3RvcC1sZWZ0JyB8ICd0b3AtcmlnaHQnIHwgJ2JvdHRvbS1sZWZ0JyB8ICdib3R0b20tcmlnaHQnIHZhbHVlcy5cbiAgICovXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgbWVudVBvc2l0aW9uKHZhbHVlOiBWaWV3UG9zaXRpb24pIHtcbiAgICB0aGlzLmNvbmZpZy5tZW51UG9zaXRpb24gPSB2YWx1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgZHJvcGRvd24gdmlldyBkaXNhYmxlZCBzdGF0ZS5cbiAgICovXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgZGlzYWJsZWQodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLmRhdGFTdGF0ZVNlcnZpY2UuZGlzYWJsZWQgPSB2YWx1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgQ2xvc2UgZHJvcGRvd24gbWVudSBvbiBvcHRpb24gc2VsZWN0IGlmIHRydWUuXG4gICAqL1xuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IGNsb3NlTWVudU9uU2VsZWN0KHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5jb25maWcuY2xvc2VNZW51T25TZWxlY3QgPSB2YWx1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgc2hvdyBkcm9wZG93biBvcHRpb24gc2VsZWN0IGNoZWNrYm94IGlmIHRydWUuXG4gICAqL1xuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IHNob3dPcHRpb25TZWxlY3RDaGVja2JveCh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuY29uZmlnLnNob3dPcHRpb25TZWxlY3RDaGVja2JveCA9IHZhbHVlO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCBzaG93IGRyb3Bkb3duIG9wdGlvbiBpbmRleCBjaGVja2JveCBpZiB0cnVlLlxuICAgKi9cbiAgQElucHV0KClcbiAgcHVibGljIHNldCBzaG93T3B0aW9uSW5kZXgodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLmNvbmZpZy5zaG93T3B0aW9uSW5kZXggPSB2YWx1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgc2hvdyBkcm9wZG93biBvcHRpb24gVHJhY2tCeSBpZCBjaGVja2JveCBpZiB0cnVlLlxuICAgKi9cbiAgQElucHV0KClcbiAgcHVibGljIHNldCBzaG93T3B0aW9uVHJhY2tCeSh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuY29uZmlnLnNob3dPcHRpb25UcmFja0J5ID0gdmFsdWU7XG4gIH1cblxuICAvKipcbiAgICogTXVsdGkgc2VsZWN0IG9wdGlvbiBzZWxlY3RlZCBpdGVtIG1heGltdW0gd2lkdGguIEFwcGx5IGVsbGlwc2lzIHdoZW4gc2VsZWN0ZWQgb3B0aW9uIGRpc3BsYXkgdGV4dFxuICAgKiBleGNlZWQgdGhlIG1heCB3aWR0aC5cbiAgICovXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgbXVsdGlTZWxlY3RPcHRpb25NYXhXaWR0aCh2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5jb25maWcubXVsdGlTZWxlY3RPcHRpb25NYXhXaWR0aCA9IHZhbHVlO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCBmaXJzdCBkcm9wZG93biBvcHRpb24gc2VsZWN0ZWQgb24gZGF0YSBmZXRjaCBpZiB0cnVlLlxuICAgKi9cbiAgQElucHV0KClcbiAgcHVibGljIHNldCBzZXRGaXJzdE9wdGlvblNlbGVjdGVkKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5jb25maWcuc2V0Rmlyc3RPcHRpb25TZWxlY3RlZCA9IHZhbHVlO1xuICB9XG5cbiAgLyoqXG4gICAqIFRyaWdnZXIgc2VsZWN0IGNoYW5nZSBldmVudCBvbiBpbml0IGlmIHRydWUuXG4gICAqIENhbiBiZSB1c2VkIHRvIGVuYWJsZSBzZWxlY3RlZE9wdGlvbnMgb3Igc2VsZWN0ZWRPcHRpb24gYXNzb2NpYXRlZCBjaGFuZ2UgdHJpZ2dlci5cbiAgICovXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgdHJpZ2dlclNlbGVjdENoYW5nZU9uSW5pdCh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuY29uZmlnLnRyaWdnZXJTZWxlY3RDaGFuZ2VPbkluaXQgPSB2YWx1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgdHJpZ2dlciBzZWxlY3QgY2hhbmdlIG9uIGV4cGxpY2l0IG1vZGVsIHVwZGF0ZSBpZiB0cnVlLlxuICAgKiBBcHBsaWNhYmxlIG9ubHkgd2hlbiBmb3JtIGJpbmRpbmcgaXMgdXNlZC5cbiAgICovXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgdHJpZ2dlclNlbGVjdENoYW5nZU9uTW9kZWxVcGRhdGUodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLmNvbmZpZy50cmlnZ2VyU2VsZWN0Q2hhbmdlT25Nb2RlbFVwZGF0ZSA9IHZhbHVlO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCB0cmlnZ2VyIHNlbGVjdCBjaGFuZ2Ugb24gZmlyc3Qgb3B0aW9uIHNlbGVjdCBjaGFuZ2UgaWYgdHJ1ZS5cbiAgICogQXBwbGljYWJsZSBvbmx5IHdoZW4gc2V0Rmlyc3RPcHRpb25TZWxlY3RlZCBpcyB0cnVlLlxuICAgKi9cbiAgQElucHV0KClcbiAgcHVibGljIHNldCB0cmlnZ2VyU2VsZWN0Q2hhbmdlT25GaXJzdE9wdGlvblNlbGVjdCh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuY29uZmlnLnRyaWdnZXJTZWxlY3RDaGFuZ2VPbkZpcnN0T3B0aW9uU2VsZWN0ID0gdmFsdWU7XG4gIH1cblxuICAvKipcbiAgICogU2V0IGR5bmFtaWNhbGx5IGNhbGN1bGF0ZSBkcm9wZG93biB2aWV3IGRpbWVuc2lvbnMgcmVsYXRpdmUgdG8gZHJvcGRvd24gYnV0dG9uIHdpZHRoLlxuICAgKiBNZW51V2l0aCBhbmQgbWVudUhlaWdodCB2YWx1ZXMgYXJlIGlnbm9yZWQgd2hlbiB0cnVlLlxuICAgKi9cbiAgQElucHV0KClcbiAgcHVibGljIHNldCBkeW5hbWljRGltZW5zaW9uQ2FsY3VsYXRpb24odmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLmNvbmZpZy5keW5hbWljRGltZW5zaW9uQ2FsY3VsYXRpb24gPSB2YWx1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgZHluYW1pYyBkcm9wZG93biBvcHRpb25zIHZpZXcgZGltZW5zaW9ucyBjYWxjdWxhdGlvbiB3aWR0aCByYXRpbyByZWxhdGl2ZSB0byBkcm9wZG93biBzZWxlY3Rvci5cbiAgICovXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgZHluYW1pY1dpZHRoUmF0aW8odmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuY29uZmlnLmR5bmFtaWNXaWR0aFJhdGlvID0gdmFsdWU7XG4gIH1cblxuICAvKipcbiAgICogU2V0IGR5bmFtaWMgZHJvcGRvd24gb3B0aW9ucyB2aWV3IGRpbWVuc2lvbnMgY2FsY3VsYXRpb24gaGVpZ2h0IHJhdGlvIHJlbGF0aXZlIHRvIGRyb3Bkb3duIHNlbGVjdG9yLlxuICAgKi9cbiAgQElucHV0KClcbiAgcHVibGljIHNldCBkeW5hbWljSGVpZ2h0UmF0aW8odmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuY29uZmlnLmR5bmFtaWNIZWlnaHRSYXRpbyA9IHZhbHVlO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCByZWxhdGl2ZSBwYXJlbnQgZWxlbWVudCB0byByZW5kZXIgZHJvcGRvd24gdmlldyBjb250YWluZXIuXG4gICAqL1xuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IHJlbGF0aXZlUGFyZW50RWxlbWVudCh2YWx1ZTogSFRNTEVsZW1lbnQpIHtcbiAgICB0aGlzLmNvbmZpZy5yZWxhdGl2ZVBhcmVudEVsZW1lbnQgPSB2YWx1ZTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgY29tcG9uZW50TG9hZGVyRmFjdG9yeTogUG9wb3ZlckNvbXBvbmVudExvYWRlckZhY3RvcnlTZXJ2aWNlLFxuICAgIHByaXZhdGUgaW5qZWN0b3I6IEluamVjdG9yLFxuICAgIHByaXZhdGUgZXZlbnRTdGF0ZVNlcnZpY2U6IERyb3Bkb3duRXZlbnRTdGF0ZVNlcnZpY2UsXG4gICAgcHJpdmF0ZSBkcm9wZG93blJlc291cmNlU2VydmljZTogRHJvcGRvd25SZXNvdXJjZVNlcnZpY2U8YW55PixcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgcHVibGljIGRhdGFTdGF0ZVNlcnZpY2U6IERyb3Bkb3duRGF0YVN0YXRlU2VydmljZSxcbiAgICBwdWJsaWMgY29uZmlnOiBEcm9wZG93bkNvbmZpZ1NlcnZpY2VcbiAgKSB7XG4gICAgdGhpcy5kYXRhU3RhdGVTZXJ2aWNlLmNvbXBvbmVudExvYWRlclJlZiA9IHRoaXMuY29tcG9uZW50TG9hZGVyRmFjdG9yeS5jcmVhdGVMb2FkZXIodGhpcy5yZW5kZXJlcik7XG5cbiAgICB0aGlzLmRhdGFCb3VuZCA9IHRoaXMuZXZlbnRTdGF0ZVNlcnZpY2UuZGF0YUJvdW5kU3RyZWFtO1xuICAgIHRoaXMuc2VsZWN0Q2hhbmdlID0gdGhpcy5ldmVudFN0YXRlU2VydmljZS5zZWxlY3RDaGFuZ2VTdHJlYW07XG4gICAgdGhpcy5pbml0ID0gdGhpcy5ldmVudFN0YXRlU2VydmljZS5pbml0U3RyZWFtO1xuICB9XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemUgZGF0YSBzb3VyY2UuXG4gICAqIEBwYXJhbSBzb3VyY2UgRGF0YSBzb3VyY2Ugc3RyZWFtLlxuICAgKi9cbiAgcHJpdmF0ZSBpbml0RGF0YVNvdXJjZShzb3VyY2U6IE9ic2VydmFibGU8YW55Pik6IHZvaWQge1xuICAgIHRoaXMuZHJvcGRvd25SZXNvdXJjZVNlcnZpY2Uuc2V0RGF0YVNvdXJjZShzb3VyY2UpO1xuXG4gICAgdGhpcy5kYXRhU3RhdGVTZXJ2aWNlLm9uRGF0YUJpbmQgPSAocGFyYW1zOiBEcm9wZG93blJlcXVlc3RQYXJhbXMpOiBPYnNlcnZhYmxlPERyb3Bkb3duUXVlcnlSZXN1bHQ8YW55Pj4gPT4ge1xuICAgICAgaWYgKHBhcmFtcy5oYXJkUmVsb2FkKSB7XG4gICAgICAgIHRoaXMuZHJvcGRvd25SZXNvdXJjZVNlcnZpY2Uuc2V0RGF0YVNvdXJjZShzb3VyY2UpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5kcm9wZG93blJlc291cmNlU2VydmljZS5xdWVyeShwYXJhbXMpO1xuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogUGVyZm9ybXMgZHJvcGRvd24gdG9nZ2xlIGV2ZW50LlxuICAgKiBAcGFyYW0gZXZlbnQgTW91c2UgY2xpY2sgZXZlbnQgYXJncy5cbiAgICogQHBhcmFtIGVsZW1lbnQgRHJvcGRvd24gYnV0dG9uIGVsZW1lbnQuXG4gICAqL1xuICBwdWJsaWMgdG9nZ2xlRHJvcGRvd24oZXZlbnQ6IE1vdXNlRXZlbnQsIGVsZW1lbnQ6IEhUTUxFbGVtZW50KTogdm9pZCB7XG4gICAgY29uc3QgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0IGFzIEhUTUxFbGVtZW50O1xuICAgIGlmICh0YXJnZXQgJiYgdGFyZ2V0LmNsYXNzTGlzdCAmJiB0YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCduZy1pZ25vcmUtcHJvcGFnYXRpb24nKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuZGF0YVN0YXRlU2VydmljZS5jb21wb25lbnRMb2FkZXJSZWYudG9nZ2xlKERyb3Bkb3duVmlld0NvbXBvbmVudCwgZWxlbWVudCwgdGhpcy5pbmplY3Rvciwge1xuICAgICAgcmVsYXRpdmVQYXJlbnRFbGVtZW50OiB0aGlzLmNvbmZpZy5yZWxhdGl2ZVBhcmVudEVsZW1lbnQsXG4gICAgICBwb3NpdGlvbjogdGhpcy5jb25maWcubWVudVBvc2l0aW9uXG4gICAgfSk7XG5cbiAgICBpZiAodGhpcy5jb25maWcuZHluYW1pY0RpbWVuc2lvbkNhbGN1bGF0aW9uKSB7XG4gICAgICB0aGlzLmNvbmZpZy5tZW51V2lkdGggPSBlbGVtZW50Lm9mZnNldFdpZHRoICogdGhpcy5jb25maWcuZHluYW1pY1dpZHRoUmF0aW87XG4gICAgICB0aGlzLmNvbmZpZy5tZW51SGVpZ2h0ID0gZWxlbWVudC5vZmZzZXRXaWR0aCAqIHRoaXMuY29uZmlnLmR5bmFtaWNIZWlnaHRSYXRpbztcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogR2V0IG9wdGlvbnMgd3JhcHBlZCBzdGF0ZS5cbiAgICovXG4gIHB1YmxpYyBnZXQgd3JhcFNlbGVjdGVkT3B0aW9ucygpOiBib29sZWFuIHtcbiAgICBpZiAodGhpcy5jb25maWcud3JhcERpc3BsYXlTZWxlY3RMaW1pdCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gdGhpcy5kYXRhU3RhdGVTZXJ2aWNlLnNlbGVjdGVkT3B0aW9ucy5sZW5ndGggPiB0aGlzLmNvbmZpZy53cmFwRGlzcGxheVNlbGVjdExpbWl0O1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgd3JhcHBlZCBvcHRpb24gZGlzcGxheSB0ZXh0LlxuICAgKi9cbiAgcHVibGljIGdldCB3cmFwcGVkT3B0aW9uRGlzcGxheVRleHQoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gYCgke3RoaXMuZGF0YVN0YXRlU2VydmljZS5zZWxlY3RlZE9wdGlvbnMubGVuZ3RofSkgJHt0aGlzLmNvbmZpZy50cmFuc2xhdGlvbnMuc2VsZWN0ZWRPcHRpb25XcmFwUGxhY2Vob2xkZXJ9YDtcbiAgfVxuXG4gIC8qKlxuICAgKiBMaWZlY3ljbGUgaG9vayB0aGF0IGlzIGNhbGxlZCB3aGVuIGNvbXBvbmVudCBpcyBkZXN0cm95ZWQuXG4gICAqL1xuICBwdWJsaWMgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgaWYgKHRoaXMub25TZWxlY3RDaGFuZ2VTdWJzY3JpcHRpb24pIHtcbiAgICAgIHRoaXMub25TZWxlY3RDaGFuZ2VTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICB9XG5cbiAgICB0aGlzLmRhdGFTdGF0ZVNlcnZpY2UuY29tcG9uZW50TG9hZGVyUmVmLmRpc3Bvc2UoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgc2VsZWN0ZWQgb3B0aW9ucyBhdmFpbGFiaWxpdHkgc3RhdGUuXG4gICAqL1xuICBwdWJsaWMgZ2V0IGhhc1NlbGVjdGVkT3B0aW9ucygpOiBib29sZWFuIHtcbiAgICBpZiAodGhpcy5jb25maWcuc2VsZWN0TW9kZSA9PT0gJ211bHRpJykge1xuICAgICAgcmV0dXJuICEhdGhpcy5kYXRhU3RhdGVTZXJ2aWNlLnNlbGVjdGVkT3B0aW9ucy5sZW5ndGg7XG4gICAgfVxuXG4gICAgcmV0dXJuICEhdGhpcy5kYXRhU3RhdGVTZXJ2aWNlLnNlbGVjdGVkT3B0aW9uO1xuICB9XG5cbiAgLyoqXG4gICAqIFRyaWdnZXIgc2VsZWN0IGNoYW5nZS5cbiAgICovXG4gIHB1YmxpYyB0cmlnZ2VyU2VsZWN0Q2hhbmdlKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmNvbmZpZy5zZWxlY3RNb2RlID09PSAnbXVsdGknKSB7XG4gICAgICB0aGlzLmV2ZW50U3RhdGVTZXJ2aWNlLnNlbGVjdENoYW5nZVN0cmVhbS5lbWl0KHRoaXMuZGF0YVN0YXRlU2VydmljZS5zZWxlY3RlZE9wdGlvbnMpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmV2ZW50U3RhdGVTZXJ2aWNlLnNlbGVjdENoYW5nZVN0cmVhbS5lbWl0KHRoaXMuZGF0YVN0YXRlU2VydmljZS5zZWxlY3RlZE9wdGlvbik7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENsZWFyIHNlbGVjdGVkIG9wdGlvbnMuXG4gICAqL1xuICBwdWJsaWMgY2xlYXJTZWxlY3RlZE9wdGlvbnMoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuY29uZmlnLnNlbGVjdE1vZGUgPT09ICdtdWx0aScpIHtcbiAgICAgIHRoaXMuZGF0YVN0YXRlU2VydmljZS5zZWxlY3RlZE9wdGlvbnMgPSBbXTtcbiAgICAgIHRoaXMuZXZlbnRTdGF0ZVNlcnZpY2Uuc2VsZWN0Q2hhbmdlU3RyZWFtLmVtaXQodGhpcy5kYXRhU3RhdGVTZXJ2aWNlLnNlbGVjdGVkT3B0aW9ucyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZGF0YVN0YXRlU2VydmljZS5zZWxlY3RlZE9wdGlvbiA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuZXZlbnRTdGF0ZVNlcnZpY2Uuc2VsZWN0Q2hhbmdlU3RyZWFtLmVtaXQodGhpcy5kYXRhU3RhdGVTZXJ2aWNlLnNlbGVjdGVkT3B0aW9uKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogU2V0IGRpc2FibGVkIHN0YXRlLlxuICAgKiBDb250cm9sVmFsdWVBY2Nlc3NvciBpbXBsZW1lbnRhdGlvbi5cbiAgICogQHBhcmFtIGlzRGlzYWJsZWQgVHJ1ZSBpZiBkaXNhYmxlZC5cbiAgICovXG4gIHB1YmxpYyBzZXREaXNhYmxlZFN0YXRlPyhpc0Rpc2FibGVkOiBib29sZWFuKTogdm9pZCB7XG4gICAgdGhpcy5kYXRhU3RhdGVTZXJ2aWNlLmRpc2FibGVkID0gaXNEaXNhYmxlZDtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYWxsZWQgd2hlbiB2YWx1ZSBzZWxlY3RlZCB2YWx1ZSBnZXRzIHVwZGF0ZWQuXG4gICAqIENvbnRyb2xWYWx1ZUFjY2Vzc29yIGltcGxlbWVudGF0aW9uLlxuICAgKiBAcGFyYW0gdmFsdWUgU2VsZWN0ZWQgdmFsdWUuXG4gICAqL1xuICBwdWJsaWMgd3JpdGVWYWx1ZSh2YWx1ZTogYW55KTogdm9pZCB7XG4gICAgaWYgKHRoaXMuY29uZmlnLnNlbGVjdE1vZGUgPT09ICdtdWx0aScpIHtcbiAgICAgIHRoaXMuZGF0YVN0YXRlU2VydmljZS5zZWxlY3RlZE9wdGlvbnMgPSB2YWx1ZSB8fCBbXTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5kYXRhU3RhdGVTZXJ2aWNlLnNlbGVjdGVkT3B0aW9uID0gdmFsdWU7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuY29uZmlnLnRyaWdnZXJTZWxlY3RDaGFuZ2VPbk1vZGVsVXBkYXRlKSB7XG4gICAgICB0aGlzLnRyaWdnZXJTZWxlY3RDaGFuZ2UoKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmVnaXN0ZXIgb24gY2hhbmdlIGV2ZW50LlxuICAgKiBDb250cm9sVmFsdWVBY2Nlc3NvciBpbXBsZW1lbnRhdGlvbi5cbiAgICogQHBhcmFtIG9uU2VsZWN0Q2hhbmdlIE9uIHNlbGVjdCBjaGFuZ2UgY2FsbGJhY2sgZnVuY3Rpb24uXG4gICAqL1xuICBwdWJsaWMgcmVnaXN0ZXJPbkNoYW5nZShvblNlbGVjdENoYW5nZTogKHZhbHVlOiBhbnlbXSB8IGFueSkgPT4gdm9pZCk6IHZvaWQge1xuICAgIHRoaXMub25TZWxlY3RDaGFuZ2VTdWJzY3JpcHRpb24gPSB0aGlzLnNlbGVjdENoYW5nZS5zdWJzY3JpYmUodmFsdWUgPT4ge1xuICAgICAgb25TZWxlY3RDaGFuZ2UodmFsdWUpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlZ2lzdGVyIG9uIHRvdWNoZWQgZXZlbnQuXG4gICAqIENvbnRyb2xWYWx1ZUFjY2Vzc29yIGltcGxlbWVudGF0aW9uLlxuICAgKiBAcGFyYW0gZm4gRnVuY3Rpb24gcmVmZXJlbmNlLlxuICAgKi9cbiAgcHVibGljIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiBhbnkpOiB2b2lkIHtcbiAgICAvLyBUT0RPOiBJbXBsZW1lbnQgdG91Y2ggZXZlbnQgaGFuZGxlclxuICB9XG5cbiAgLyoqXG4gICAqIExpZmVjeWNsZSBob29rIHRoYXQgaXMgY2FsbGVkIHdoZW4gY29tcG9uZW50IGlzIGluaXRpYWxpemVkLlxuICAgKi9cbiAgcHVibGljIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5kYXRhU3RhdGVTZXJ2aWNlLmlkKSB7XG4gICAgICB0aHJvdyBFcnJvcignTWlzc2luZyByZXF1aXJlZCBwYXJhbWV0ZXIgdmFsdWUgZm9yIFtpZF0gaW5wdXQuJyk7XG4gICAgfVxuXG4gICAgaWYgKCF0aGlzLmRhdGFTdGF0ZVNlcnZpY2Uub25EYXRhQmluZCkge1xuICAgICAgdGhpcy5kYXRhU291cmNlID0gdGhpcy5ldmVudFN0YXRlU2VydmljZS5zdGF0aWNEYXRhU291cmNlU3RyZWFtO1xuICAgIH1cblxuICAgIHRoaXMuaW5pdERhdGFGZXRjaEV2ZW50KCk7XG5cbiAgICBpZiAodGhpcy5jb25maWcubG9hZERhdGFPbkluaXQpIHtcbiAgICAgIHRoaXMuZXZlbnRTdGF0ZVNlcnZpY2UuZGF0YUZldGNoU3RyZWFtLmVtaXQoZmFsc2UpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmNvbmZpZy50cmlnZ2VyU2VsZWN0Q2hhbmdlT25Jbml0KSB7XG4gICAgICB0aGlzLnRyaWdnZXJTZWxlY3RDaGFuZ2UoKTtcbiAgICB9XG5cbiAgICB0aGlzLmV2ZW50U3RhdGVTZXJ2aWNlLmluaXRTdHJlYW0uZW1pdCh0aGlzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBNYXAgc291cmNlIGRhdGEgb2JqZWN0IHRvIGRyb3Bkb3duIG9wdGlvbiBtb2RlbC5cbiAgICogQHBhcmFtIG9wdGlvbiBTb3VyY2UgZHJvcGRvd24gb3B0aW9uLlxuICAgKiBAcGFyYW0gaW5kZXggQ3VycmVudCBpbmRleC5cbiAgICovXG4gIHByaXZhdGUgbWFwRHJvcGRvd25PcHRpb24ob3B0aW9uOiBhbnksIGluZGV4OiBudW1iZXIpOiBEcm9wZG93bk9wdGlvbiB7XG4gICAgY29uc3QgaWQgPSBnZXQob3B0aW9uLCB0aGlzLmNvbmZpZy5zZWxlY3RUcmFja0J5KTtcblxuICAgIHJldHVybiB7XG4gICAgICBkaXNhYmxlZDogZ2V0KG9wdGlvbiwgdGhpcy5jb25maWcuZGlzYWJsZWRUcmFja0J5KSxcbiAgICAgIGlkLFxuICAgICAgaW5kZXg6IGluZGV4ICsgdGhpcy5kYXRhU3RhdGVTZXJ2aWNlLm9mZnNldCArIDEsXG4gICAgICBvcHRpb24sXG4gICAgICB0ZXh0OiBnZXQob3B0aW9uLCB0aGlzLmNvbmZpZy5kaXNwbGF5VHJhY2tCeSlcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIFNldCBkcm9wZG93biBvcHRpb25zIGRhdGEuXG4gICAqIEBwYXJhbSBxdWVyeVJlc3VsdCBRdWVyeSByZXN1bHQgb2JqZWN0IHJlZmVyZW5jZS5cbiAgICovXG4gIHByaXZhdGUgc2V0RHJvcGRvd25PcHRpb25zKHF1ZXJ5UmVzdWx0OiBEcm9wZG93blF1ZXJ5UmVzdWx0PGFueT4pIHtcbiAgICBpZiAodGhpcy5jb25maWcuZ3JvdXBCeUZpZWxkKSB7XG4gICAgICB0aGlzLmRhdGFTdGF0ZVNlcnZpY2UuZHJvcGRvd25PcHRpb25Hcm91cHMgPSBxdWVyeVJlc3VsdC5vcHRpb25zLnJlZHVjZShcbiAgICAgICAgKGFjY3VtdWxhdG9yOiBEcm9wZG93bk9wdGlvbkdyb3VwW10sIG9wdGlvbjogYW55LCBpbmRleDogbnVtYmVyKSA9PiB7XG4gICAgICAgICAgY29uc3QgZ3JvdXBGaWVsZFZhbHVlID0gZ2V0KG9wdGlvbiwgdGhpcy5jb25maWcuZ3JvdXBCeUZpZWxkKTtcbiAgICAgICAgICBjb25zdCBjdXJyZW50R3JvdXAgPSBhY2N1bXVsYXRvci5maW5kKChncm91cDogRHJvcGRvd25PcHRpb25Hcm91cCkgPT4gZ3JvdXAuZ3JvdXBOYW1lID09PSBncm91cEZpZWxkVmFsdWUpO1xuXG4gICAgICAgICAgaWYgKGN1cnJlbnRHcm91cCkge1xuICAgICAgICAgICAgY3VycmVudEdyb3VwLm9wdGlvbnMucHVzaCh0aGlzLm1hcERyb3Bkb3duT3B0aW9uKG9wdGlvbiwgaW5kZXgpKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYWNjdW11bGF0b3IucHVzaCh7XG4gICAgICAgICAgICAgIGdyb3VwTmFtZTogZ3JvdXBGaWVsZFZhbHVlLFxuICAgICAgICAgICAgICBvcHRpb25zOiBbdGhpcy5tYXBEcm9wZG93bk9wdGlvbihvcHRpb24sIGluZGV4KV1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiBhY2N1bXVsYXRvcjtcbiAgICAgICAgfSxcbiAgICAgICAgdGhpcy5jb25maWcubG9hZE9uU2Nyb2xsICYmIHRoaXMuZGF0YVN0YXRlU2VydmljZS5vZmZzZXQgPiAwID8gdGhpcy5kYXRhU3RhdGVTZXJ2aWNlLmRyb3Bkb3duT3B0aW9uR3JvdXBzIDogW11cbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZGF0YVN0YXRlU2VydmljZS5kcm9wZG93bk9wdGlvbnMgPSBxdWVyeVJlc3VsdC5vcHRpb25zLnJlZHVjZShcbiAgICAgICAgKGFjY3VtdWxhdG9yOiBEcm9wZG93bk9wdGlvbltdLCBvcHRpb246IGFueSwgaW5kZXg6IG51bWJlcikgPT4ge1xuICAgICAgICAgIGFjY3VtdWxhdG9yLnB1c2godGhpcy5tYXBEcm9wZG93bk9wdGlvbihvcHRpb24sIGluZGV4KSk7XG4gICAgICAgICAgcmV0dXJuIGFjY3VtdWxhdG9yO1xuICAgICAgICB9LFxuICAgICAgICB0aGlzLmNvbmZpZy5sb2FkT25TY3JvbGwgJiYgdGhpcy5kYXRhU3RhdGVTZXJ2aWNlLm9mZnNldCA+IDAgPyB0aGlzLmRhdGFTdGF0ZVNlcnZpY2UuZHJvcGRvd25PcHRpb25zIDogW11cbiAgICAgICk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuY29uZmlnLnNldEZpcnN0T3B0aW9uU2VsZWN0ZWQgJiYgcXVlcnlSZXN1bHQub3B0aW9ucy5sZW5ndGgpIHtcbiAgICAgIGlmICh0aGlzLmNvbmZpZy5zZWxlY3RNb2RlID09PSAnbXVsdGknKSB7XG4gICAgICAgIHRoaXMuZGF0YVN0YXRlU2VydmljZS5zZWxlY3RlZE9wdGlvbnMgPSBbcXVlcnlSZXN1bHQub3B0aW9uc1swXV07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmRhdGFTdGF0ZVNlcnZpY2Uuc2VsZWN0ZWRPcHRpb24gPSBxdWVyeVJlc3VsdC5vcHRpb25zWzBdO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5jb25maWcudHJpZ2dlclNlbGVjdENoYW5nZU9uRmlyc3RPcHRpb25TZWxlY3QpIHtcbiAgICAgICAgdGhpcy50cmlnZ2VyU2VsZWN0Q2hhbmdlKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5kYXRhU3RhdGVTZXJ2aWNlLnRvdGFsT3B0aW9uQ291bnQgPSBxdWVyeVJlc3VsdC5jb3VudDtcbiAgICB0aGlzLmRhdGFTdGF0ZVNlcnZpY2UuY3VycmVudE9wdGlvbkNvdW50ICs9IHF1ZXJ5UmVzdWx0Lm9wdGlvbnMubGVuZ3RoO1xuICB9XG5cbiAgLyoqXG4gICAqIE9uIGFmdGVyIGRhdGEgYmluZCBldmVudCBoYW5kbGVyLlxuICAgKiBAcGFyYW0gcXVlcnlSZXN1bHQgUXVlcnkgcmVzdWx0IG9iamVjdCByZWZlcmVuY2UuXG4gICAqL1xuICBwcml2YXRlIG9uQWZ0ZXJEYXRhQmluZChxdWVyeVJlc3VsdDogRHJvcGRvd25RdWVyeVJlc3VsdDxhbnk+KTogdm9pZCB7XG4gICAgdGhpcy5zZXREcm9wZG93bk9wdGlvbnMocXVlcnlSZXN1bHQpO1xuICAgIHRoaXMuZGF0YVN0YXRlU2VydmljZS5kYXRhTG9hZGluZyA9IGZhbHNlO1xuICAgIHRoaXMuZXZlbnRTdGF0ZVNlcnZpY2UuZGF0YUJvdW5kU3RyZWFtLmVtaXQoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBGZXRjaCBxdWVyeSByZXN1bHRzLlxuICAgKiBAcGFyYW0gaGFyZFJlbG9hZCBIYXJkIHJlbG9hZCBzdGF0ZS5cbiAgICovXG4gIHByaXZhdGUgZmV0Y2hRdWVyeVJlc3VsdHMoaGFyZFJlbG9hZDogYm9vbGVhbik6IE9ic2VydmFibGU8RHJvcGRvd25RdWVyeVJlc3VsdDxhbnk+PiB7XG4gICAgdGhpcy5kYXRhU3RhdGVTZXJ2aWNlLmRhdGFMb2FkaW5nID0gdHJ1ZTtcblxuICAgIGlmIChoYXJkUmVsb2FkKSB7XG4gICAgICB0aGlzLmRhdGFTdGF0ZVNlcnZpY2Uub2Zmc2V0ID0gMDtcbiAgICAgIHRoaXMuZGF0YVN0YXRlU2VydmljZS5maWx0ZXJUZXh0ID0gJyc7XG4gICAgfVxuXG4gICAgY29uc3QgcmVxdWVzdFBhcmFtczogRHJvcGRvd25SZXF1ZXN0UGFyYW1zID0ge1xuICAgICAgaGFyZFJlbG9hZFxuICAgIH07XG5cbiAgICBpZiAodGhpcy5jb25maWcubG9hZE9uU2Nyb2xsKSB7XG4gICAgICByZXF1ZXN0UGFyYW1zLmxpbWl0ID0gdGhpcy5jb25maWcubGltaXQ7XG4gICAgICByZXF1ZXN0UGFyYW1zLm9mZnNldCA9IHRoaXMuZGF0YVN0YXRlU2VydmljZS5vZmZzZXQ7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuY29uZmlnLmZpbHRlcmFibGUpIHtcbiAgICAgIHJlcXVlc3RQYXJhbXMuZmlsdGVyID0ge1xuICAgICAgICBrZXk6IHRoaXMuY29uZmlnLmRpc3BsYXlUcmFja0J5LFxuICAgICAgICB2YWx1ZTogdGhpcy5kYXRhU3RhdGVTZXJ2aWNlLmZpbHRlclRleHRcbiAgICAgIH07XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuZGF0YVN0YXRlU2VydmljZS5vbkRhdGFCaW5kKHJlcXVlc3RQYXJhbXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemUgZGF0YSBmZXRjaCBldmVudC5cbiAgICovXG4gIHByaXZhdGUgaW5pdERhdGFGZXRjaEV2ZW50KCk6IHZvaWQge1xuICAgIGNvbnN0IG5vb3AgPSB7XG4gICAgICBvcHRpb25zOiBbXSxcbiAgICAgIGNvdW50OiAwXG4gICAgfTtcblxuICAgIHRoaXMuZXZlbnRTdGF0ZVNlcnZpY2UuZGF0YUZldGNoU3RyZWFtXG4gICAgICAucGlwZShcbiAgICAgICAgZGVib3VuY2VUaW1lKDIwKSxcbiAgICAgICAgc3dpdGNoTWFwKChoYXJkUmVsb2FkOiBib29sZWFuKSA9PiB0aGlzLmZldGNoUXVlcnlSZXN1bHRzKGhhcmRSZWxvYWQpKSxcbiAgICAgICAgY2F0Y2hFcnJvcigoKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIG9mKG5vb3ApO1xuICAgICAgICB9KVxuICAgICAgKVxuICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgKHF1ZXJ5UmVzdWx0OiBEcm9wZG93blF1ZXJ5UmVzdWx0PGFueT4pID0+IHtcbiAgICAgICAgICB0aGlzLm9uQWZ0ZXJEYXRhQmluZChxdWVyeVJlc3VsdCk7XG4gICAgICAgIH0sXG4gICAgICAgICgpID0+IHtcbiAgICAgICAgICB0aGlzLm9uQWZ0ZXJEYXRhQmluZChub29wKTtcbiAgICAgICAgfVxuICAgICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUcmlnZ2VyIGV4cGxpY2l0IGRhdGEgZmV0Y2guXG4gICAqIEBwYXJhbSBoYXJkUmVsb2FkIEhhcmQgcmVsb2FkIHN0YXRlLlxuICAgKi9cbiAgcHVibGljIGZldGNoRGF0YShoYXJkUmVsb2FkOiBib29sZWFuID0gZmFsc2UpOiB2b2lkIHtcbiAgICB0aGlzLmV2ZW50U3RhdGVTZXJ2aWNlLmRhdGFGZXRjaFN0cmVhbS5lbWl0KGhhcmRSZWxvYWQpO1xuICB9XG5cbiAgLyoqXG4gICAqIE9uIHNlbGVjdCBvcHRpb24gcmVtb3ZlIGV2ZW50IGhhbmRsZXIuXG4gICAqIEBwYXJhbSBpbmRleCBTZWxlY3RlZCBvcHRpb24gaW5kZXguXG4gICAqL1xuICBwdWJsaWMgb25TZWxlY3RPcHRpb25SZW1vdmUoaW5kZXg6IG51bWJlcik6IHZvaWQge1xuICAgIHRoaXMuZGF0YVN0YXRlU2VydmljZS5zZWxlY3RlZE9wdGlvbnMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICB0aGlzLmV2ZW50U3RhdGVTZXJ2aWNlLnNlbGVjdENoYW5nZVN0cmVhbS5lbWl0KHRoaXMuZGF0YVN0YXRlU2VydmljZS5zZWxlY3RlZE9wdGlvbnMpO1xuICB9XG5cbiAgLyoqXG4gICAqIENsb3NlIGRyb3Bkb3duIG9wdGlvbnMgbWVudS5cbiAgICovXG4gIHB1YmxpYyBjbG9zZSgpOiB2b2lkIHtcbiAgICB0aGlzLmRhdGFTdGF0ZVNlcnZpY2UuY29tcG9uZW50TG9hZGVyUmVmLmhpZGUoKTtcbiAgfVxufVxuIl19