/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Dropdown list base configuration model.
 * @record
 */
export function DropdownConfig() { }
if (false) {
    /**
     * Base translation data object. Used to localize table static label text.
     * @type {?|undefined}
     */
    DropdownConfig.prototype.baseTranslations;
    /**
     * Select option track field path which is used to uniquely identify options for selection tracking.
     * This field support object paths expressions 'root[0].nest'.
     * @type {?|undefined}
     */
    DropdownConfig.prototype.selectTrackBy;
    /**
     * Display value track field path which is used to extract dropdown option display value.
     * This field support object paths expressions 'root[0].nest'.
     * @type {?|undefined}
     */
    DropdownConfig.prototype.displayTrackBy;
    /**
     * Option disable state field path which is used to disabled state dropdown options.
     * This field support object paths expressions 'root[0].nest'.
     * @type {?|undefined}
     */
    DropdownConfig.prototype.disabledTrackBy;
    /**
     * Popup options menu display position relative to dropdown component.
     * Support 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' values.
     * @type {?|undefined}
     */
    DropdownConfig.prototype.menuPosition;
    /**
     * Option select mode.
     * - 'multi' : Support selecting multiple options.
     * - 'single' : Support selecting a single option from options collection.
     * - 'single-toggle' : Support selecting a single option from options collection. Selection can not be removed but
     * only toggled by tapping on another option.
     * @type {?|undefined}
     */
    DropdownConfig.prototype.selectMode;
    /**
     * Show dropdown option search filter text-box if true.
     * @type {?|undefined}
     */
    DropdownConfig.prototype.filterable;
    /**
     * Time based filter debounce to optimize performance and avoid request flooding by reducing the filter
     * request frequency if true. Applicable only when dropdown filterable state is enabled.
     * @type {?|undefined}
     */
    DropdownConfig.prototype.filterDebounce;
    /**
     * Filter debounce time in milliseconds. Applicable only when searchDebounce is true
     * @type {?|undefined}
     */
    DropdownConfig.prototype.filterDebounceTime;
    /**
     * Options group field path which is used to group the dropdown options.
     * This field support object paths expressions 'root[0].nest'.
     * @type {?|undefined}
     */
    DropdownConfig.prototype.groupByField;
    /**
     * Wrap selected options in dropdown view and show the number of options selected instead when
     * limit is met or exceeded. Applicable only when multi select mode is enabled.
     * @type {?|undefined}
     */
    DropdownConfig.prototype.wrapDisplaySelectLimit;
    /**
     * Show selected option remove button if true.
     * Applicable only when multi select mode ios enabled.
     * @type {?|undefined}
     */
    DropdownConfig.prototype.showSelectedOptionRemoveButton;
    /**
     * Show all select options clear button if true.
     * Applicable only when multi select mode ios enabled.
     * @type {?|undefined}
     */
    DropdownConfig.prototype.showClearSelectionButton;
    /**
     * Options menu width in pixels.
     * @type {?|undefined}
     */
    DropdownConfig.prototype.menuWidth;
    /**
     * Options menu height in pixels.
     * @type {?|undefined}
     */
    DropdownConfig.prototype.menuHeight;
    /**
     * Set infinite scrollable state to load data on demand with scroll motion. Dropdown data fetch call is
     * initiated with limit and offset when user scroll to bottom hence loading the full data set on init.
     * @type {?|undefined}
     */
    DropdownConfig.prototype.loadOnScroll;
    /**
     * View height distance ratio to trigger data fetch on scroll.
     * Higher ratio will will increase the scroll sensitivity.
     * @type {?|undefined}
     */
    DropdownConfig.prototype.loadViewDistanceRatio;
    /**
     * Number of options to fetch on scroll to bottom action when load on scroll mode is enabled.
     * @type {?|undefined}
     */
    DropdownConfig.prototype.limit;
    /**
     * Load data on component initialize if true.
     * @type {?|undefined}
     */
    DropdownConfig.prototype.loadDataOnInit;
    /**
     * Close dropdown menu on option select if true.
     * @type {?|undefined}
     */
    DropdownConfig.prototype.closeMenuOnSelect;
    /**
     * Show dropdown option select checkbox if true.
     * @type {?|undefined}
     */
    DropdownConfig.prototype.showOptionSelectCheckbox;
    /**
     * Multi select option selected item maximum width. Apply ellipsis when selected option display text exceed the max width.
     * @type {?|undefined}
     */
    DropdownConfig.prototype.multiSelectOptionMaxWidth;
    /**
     * Set first dropdown option selected on data fetch if true.
     * @type {?|undefined}
     */
    DropdownConfig.prototype.setFirstOptionSelected;
    /**
     * Trigger select change event on init if true. Can be used to enable selectedOptions or selectedOption associated change trigger.
     * @type {?|undefined}
     */
    DropdownConfig.prototype.triggerSelectChangeOnInit;
    /**
     * Trigger select change on explicit model update if true. Applicable only when form binding is used.
     * @type {?|undefined}
     */
    DropdownConfig.prototype.triggerSelectChangeOnModelUpdate;
    /**
     * Trigger select change on first option select change if true. Applicable only when setFirstOptionSelected is true.
     * @type {?|undefined}
     */
    DropdownConfig.prototype.triggerSelectChangeOnFirstOptionSelect;
    /**
     * Dynamically calculate dropdown view dimensions relative to dropdown button width. menuWith and menuHeight values are ignored when true.
     * @type {?|undefined}
     */
    DropdownConfig.prototype.dynamicDimensionCalculation;
    /**
     * Dynamic dropdown options view dimensions calculation width ratio relative to dropdown selector.
     * @type {?|undefined}
     */
    DropdownConfig.prototype.dynamicWidthRatio;
    /**
     * Dynamic dropdown options view dimensions calculation height ratio relative to dropdown selector.
     * @type {?|undefined}
     */
    DropdownConfig.prototype.dynamicHeightRatio;
    /**
     * Relative parent element to render dropdown view container.
     * @type {?}
     */
    DropdownConfig.prototype.relativeParentElement;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcGRvd24tY29uZmlnLm1vZGVsLmpzIiwic291cmNlUm9vdCI6Im5nOi8vb3JuYW1lbnR1bS8iLCJzb3VyY2VzIjpbImRyb3Bkb3duL21vZGVscy9kcm9wZG93bi1jb25maWcubW9kZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFRQSxvQ0FxS0M7Ozs7OztJQWpLQywwQ0FBd0M7Ozs7OztJQU14Qyx1Q0FBdUI7Ozs7OztJQU12Qix3Q0FBd0I7Ozs7OztJQU14Qix5Q0FBeUI7Ozs7OztJQU16QixzQ0FBNEI7Ozs7Ozs7OztJQVM1QixvQ0FBZ0M7Ozs7O0lBS2hDLG9DQUFxQjs7Ozs7O0lBTXJCLHdDQUF5Qjs7Ozs7SUFLekIsNENBQTRCOzs7Ozs7SUFNNUIsc0NBQXNCOzs7Ozs7SUFNdEIsZ0RBQWdDOzs7Ozs7SUFNaEMsd0RBQXlDOzs7Ozs7SUFNekMsa0RBQW1DOzs7OztJQUtuQyxtQ0FBbUI7Ozs7O0lBS25CLG9DQUFvQjs7Ozs7O0lBTXBCLHNDQUF1Qjs7Ozs7O0lBTXZCLCtDQUErQjs7Ozs7SUFLL0IsK0JBQWU7Ozs7O0lBS2Ysd0NBQXlCOzs7OztJQUt6QiwyQ0FBNEI7Ozs7O0lBSzVCLGtEQUFtQzs7Ozs7SUFLbkMsbURBQW1DOzs7OztJQUtuQyxnREFBaUM7Ozs7O0lBS2pDLG1EQUFvQzs7Ozs7SUFLcEMsMERBQTJDOzs7OztJQUszQyxnRUFBaUQ7Ozs7O0lBS2pELHFEQUFzQzs7Ozs7SUFLdEMsMkNBQTJCOzs7OztJQUszQiw0Q0FBNEI7Ozs7O0lBSzVCLCtDQUFtQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERyb3Bkb3duVHJhbnNsYXRpb25zIH0gZnJvbSAnLi9kcm9wZG93bi10cmFuc2xhdGlvbnMubW9kZWwnO1xuXG5pbXBvcnQgeyBEcm9wZG93blNlbGVjdE1vZGUgfSBmcm9tICcuL2Ryb3Bkb3duLXNlbGVjdC1tb2RlLm1vZGVsJztcbmltcG9ydCB7IFZpZXdQb3NpdGlvbiB9IGZyb20gJy4uLy4uL3V0aWxpdHkvbW9kZWxzL3ZpZXctcG9zaXRpb24ubW9kZWwnO1xuXG4vKipcbiAqIERyb3Bkb3duIGxpc3QgYmFzZSBjb25maWd1cmF0aW9uIG1vZGVsLlxuICovXG5leHBvcnQgaW50ZXJmYWNlIERyb3Bkb3duQ29uZmlnIHtcbiAgLyoqXG4gICAqIEJhc2UgdHJhbnNsYXRpb24gZGF0YSBvYmplY3QuIFVzZWQgdG8gbG9jYWxpemUgdGFibGUgc3RhdGljIGxhYmVsIHRleHQuXG4gICAqL1xuICBiYXNlVHJhbnNsYXRpb25zPzogRHJvcGRvd25UcmFuc2xhdGlvbnM7XG5cbiAgLyoqXG4gICAqIFNlbGVjdCBvcHRpb24gdHJhY2sgZmllbGQgcGF0aCB3aGljaCBpcyB1c2VkIHRvIHVuaXF1ZWx5IGlkZW50aWZ5IG9wdGlvbnMgZm9yIHNlbGVjdGlvbiB0cmFja2luZy5cbiAgICogVGhpcyBmaWVsZCBzdXBwb3J0IG9iamVjdCBwYXRocyBleHByZXNzaW9ucyAncm9vdFswXS5uZXN0Jy5cbiAgICovXG4gIHNlbGVjdFRyYWNrQnk/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIERpc3BsYXkgdmFsdWUgdHJhY2sgZmllbGQgcGF0aCB3aGljaCBpcyB1c2VkIHRvIGV4dHJhY3QgZHJvcGRvd24gb3B0aW9uIGRpc3BsYXkgdmFsdWUuXG4gICAqIFRoaXMgZmllbGQgc3VwcG9ydCBvYmplY3QgcGF0aHMgZXhwcmVzc2lvbnMgJ3Jvb3RbMF0ubmVzdCcuXG4gICAqL1xuICBkaXNwbGF5VHJhY2tCeT86IHN0cmluZztcblxuICAvKipcbiAgICogT3B0aW9uIGRpc2FibGUgc3RhdGUgZmllbGQgcGF0aCB3aGljaCBpcyB1c2VkIHRvIGRpc2FibGVkIHN0YXRlIGRyb3Bkb3duIG9wdGlvbnMuXG4gICAqIFRoaXMgZmllbGQgc3VwcG9ydCBvYmplY3QgcGF0aHMgZXhwcmVzc2lvbnMgJ3Jvb3RbMF0ubmVzdCcuXG4gICAqL1xuICBkaXNhYmxlZFRyYWNrQnk/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFBvcHVwIG9wdGlvbnMgbWVudSBkaXNwbGF5IHBvc2l0aW9uIHJlbGF0aXZlIHRvIGRyb3Bkb3duIGNvbXBvbmVudC5cbiAgICogU3VwcG9ydCAndG9wLWxlZnQnIHwgJ3RvcC1yaWdodCcgfCAnYm90dG9tLWxlZnQnIHwgJ2JvdHRvbS1yaWdodCcgdmFsdWVzLlxuICAgKi9cbiAgbWVudVBvc2l0aW9uPzogVmlld1Bvc2l0aW9uO1xuXG4gIC8qKlxuICAgKiBPcHRpb24gc2VsZWN0IG1vZGUuXG4gICAqIC0gJ211bHRpJyA6IFN1cHBvcnQgc2VsZWN0aW5nIG11bHRpcGxlIG9wdGlvbnMuXG4gICAqIC0gJ3NpbmdsZScgOiBTdXBwb3J0IHNlbGVjdGluZyBhIHNpbmdsZSBvcHRpb24gZnJvbSBvcHRpb25zIGNvbGxlY3Rpb24uXG4gICAqIC0gJ3NpbmdsZS10b2dnbGUnIDogU3VwcG9ydCBzZWxlY3RpbmcgYSBzaW5nbGUgb3B0aW9uIGZyb20gb3B0aW9ucyBjb2xsZWN0aW9uLiBTZWxlY3Rpb24gY2FuIG5vdCBiZSByZW1vdmVkIGJ1dFxuICAgKiBvbmx5IHRvZ2dsZWQgYnkgdGFwcGluZyBvbiBhbm90aGVyIG9wdGlvbi5cbiAgICovXG4gIHNlbGVjdE1vZGU/OiBEcm9wZG93blNlbGVjdE1vZGU7XG5cbiAgLyoqXG4gICAqIFNob3cgZHJvcGRvd24gb3B0aW9uIHNlYXJjaCBmaWx0ZXIgdGV4dC1ib3ggaWYgdHJ1ZS5cbiAgICovXG4gIGZpbHRlcmFibGU/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBUaW1lIGJhc2VkIGZpbHRlciBkZWJvdW5jZSB0byBvcHRpbWl6ZSBwZXJmb3JtYW5jZSBhbmQgYXZvaWQgcmVxdWVzdCBmbG9vZGluZyBieSByZWR1Y2luZyB0aGUgZmlsdGVyXG4gICAqIHJlcXVlc3QgZnJlcXVlbmN5IGlmIHRydWUuIEFwcGxpY2FibGUgb25seSB3aGVuIGRyb3Bkb3duIGZpbHRlcmFibGUgc3RhdGUgaXMgZW5hYmxlZC5cbiAgICovXG4gIGZpbHRlckRlYm91bmNlPzogYm9vbGVhbjtcblxuICAvKipcbiAgICogRmlsdGVyIGRlYm91bmNlIHRpbWUgaW4gbWlsbGlzZWNvbmRzLiBBcHBsaWNhYmxlIG9ubHkgd2hlbiBzZWFyY2hEZWJvdW5jZSBpcyB0cnVlXG4gICAqL1xuICBmaWx0ZXJEZWJvdW5jZVRpbWU/OiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIE9wdGlvbnMgZ3JvdXAgZmllbGQgcGF0aCB3aGljaCBpcyB1c2VkIHRvIGdyb3VwIHRoZSBkcm9wZG93biBvcHRpb25zLlxuICAgKiBUaGlzIGZpZWxkIHN1cHBvcnQgb2JqZWN0IHBhdGhzIGV4cHJlc3Npb25zICdyb290WzBdLm5lc3QnLlxuICAgKi9cbiAgZ3JvdXBCeUZpZWxkPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBXcmFwIHNlbGVjdGVkIG9wdGlvbnMgaW4gZHJvcGRvd24gdmlldyBhbmQgc2hvdyB0aGUgbnVtYmVyIG9mIG9wdGlvbnMgc2VsZWN0ZWQgaW5zdGVhZCB3aGVuXG4gICAqIGxpbWl0IGlzIG1ldCBvciBleGNlZWRlZC4gQXBwbGljYWJsZSBvbmx5IHdoZW4gbXVsdGkgc2VsZWN0IG1vZGUgaXMgZW5hYmxlZC5cbiAgICovXG4gIHdyYXBEaXNwbGF5U2VsZWN0TGltaXQ/OiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIFNob3cgc2VsZWN0ZWQgb3B0aW9uIHJlbW92ZSBidXR0b24gaWYgdHJ1ZS5cbiAgICogQXBwbGljYWJsZSBvbmx5IHdoZW4gbXVsdGkgc2VsZWN0IG1vZGUgaW9zIGVuYWJsZWQuXG4gICAqL1xuICBzaG93U2VsZWN0ZWRPcHRpb25SZW1vdmVCdXR0b24/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBTaG93IGFsbCBzZWxlY3Qgb3B0aW9ucyBjbGVhciBidXR0b24gaWYgdHJ1ZS5cbiAgICogQXBwbGljYWJsZSBvbmx5IHdoZW4gbXVsdGkgc2VsZWN0IG1vZGUgaW9zIGVuYWJsZWQuXG4gICAqL1xuICBzaG93Q2xlYXJTZWxlY3Rpb25CdXR0b24/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBPcHRpb25zIG1lbnUgd2lkdGggaW4gcGl4ZWxzLlxuICAgKi9cbiAgbWVudVdpZHRoPzogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBPcHRpb25zIG1lbnUgaGVpZ2h0IGluIHBpeGVscy5cbiAgICovXG4gIG1lbnVIZWlnaHQ/OiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIFNldCBpbmZpbml0ZSBzY3JvbGxhYmxlIHN0YXRlIHRvIGxvYWQgZGF0YSBvbiBkZW1hbmQgd2l0aCBzY3JvbGwgbW90aW9uLiBEcm9wZG93biBkYXRhIGZldGNoIGNhbGwgaXNcbiAgICogaW5pdGlhdGVkIHdpdGggbGltaXQgYW5kIG9mZnNldCB3aGVuIHVzZXIgc2Nyb2xsIHRvIGJvdHRvbSBoZW5jZSBsb2FkaW5nIHRoZSBmdWxsIGRhdGEgc2V0IG9uIGluaXQuXG4gICAqL1xuICBsb2FkT25TY3JvbGw/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBWaWV3IGhlaWdodCBkaXN0YW5jZSByYXRpbyB0byB0cmlnZ2VyIGRhdGEgZmV0Y2ggb24gc2Nyb2xsLlxuICAgKiBIaWdoZXIgcmF0aW8gd2lsbCB3aWxsIGluY3JlYXNlIHRoZSBzY3JvbGwgc2Vuc2l0aXZpdHkuXG4gICAqL1xuICBsb2FkVmlld0Rpc3RhbmNlUmF0aW8/OiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIE51bWJlciBvZiBvcHRpb25zIHRvIGZldGNoIG9uIHNjcm9sbCB0byBib3R0b20gYWN0aW9uIHdoZW4gbG9hZCBvbiBzY3JvbGwgbW9kZSBpcyBlbmFibGVkLlxuICAgKi9cbiAgbGltaXQ/OiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIExvYWQgZGF0YSBvbiBjb21wb25lbnQgaW5pdGlhbGl6ZSBpZiB0cnVlLlxuICAgKi9cbiAgbG9hZERhdGFPbkluaXQ/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBDbG9zZSBkcm9wZG93biBtZW51IG9uIG9wdGlvbiBzZWxlY3QgaWYgdHJ1ZS5cbiAgICovXG4gIGNsb3NlTWVudU9uU2VsZWN0PzogYm9vbGVhbjtcblxuICAvKipcbiAgICogU2hvdyBkcm9wZG93biBvcHRpb24gc2VsZWN0IGNoZWNrYm94IGlmIHRydWUuXG4gICAqL1xuICBzaG93T3B0aW9uU2VsZWN0Q2hlY2tib3g/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBNdWx0aSBzZWxlY3Qgb3B0aW9uIHNlbGVjdGVkIGl0ZW0gbWF4aW11bSB3aWR0aC4gQXBwbHkgZWxsaXBzaXMgd2hlbiBzZWxlY3RlZCBvcHRpb24gZGlzcGxheSB0ZXh0IGV4Y2VlZCB0aGUgbWF4IHdpZHRoLlxuICAgKi9cbiAgbXVsdGlTZWxlY3RPcHRpb25NYXhXaWR0aD86IG51bWJlcjtcblxuICAvKipcbiAgICogU2V0IGZpcnN0IGRyb3Bkb3duIG9wdGlvbiBzZWxlY3RlZCBvbiBkYXRhIGZldGNoIGlmIHRydWUuXG4gICAqL1xuICBzZXRGaXJzdE9wdGlvblNlbGVjdGVkPzogYm9vbGVhbjtcblxuICAvKipcbiAgICogVHJpZ2dlciBzZWxlY3QgY2hhbmdlIGV2ZW50IG9uIGluaXQgaWYgdHJ1ZS4gQ2FuIGJlIHVzZWQgdG8gZW5hYmxlIHNlbGVjdGVkT3B0aW9ucyBvciBzZWxlY3RlZE9wdGlvbiBhc3NvY2lhdGVkIGNoYW5nZSB0cmlnZ2VyLlxuICAgKi9cbiAgdHJpZ2dlclNlbGVjdENoYW5nZU9uSW5pdD86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIFRyaWdnZXIgc2VsZWN0IGNoYW5nZSBvbiBleHBsaWNpdCBtb2RlbCB1cGRhdGUgaWYgdHJ1ZS4gQXBwbGljYWJsZSBvbmx5IHdoZW4gZm9ybSBiaW5kaW5nIGlzIHVzZWQuXG4gICAqL1xuICB0cmlnZ2VyU2VsZWN0Q2hhbmdlT25Nb2RlbFVwZGF0ZT86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIFRyaWdnZXIgc2VsZWN0IGNoYW5nZSBvbiBmaXJzdCBvcHRpb24gc2VsZWN0IGNoYW5nZSBpZiB0cnVlLiBBcHBsaWNhYmxlIG9ubHkgd2hlbiBzZXRGaXJzdE9wdGlvblNlbGVjdGVkIGlzIHRydWUuXG4gICAqL1xuICB0cmlnZ2VyU2VsZWN0Q2hhbmdlT25GaXJzdE9wdGlvblNlbGVjdD86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIER5bmFtaWNhbGx5IGNhbGN1bGF0ZSBkcm9wZG93biB2aWV3IGRpbWVuc2lvbnMgcmVsYXRpdmUgdG8gZHJvcGRvd24gYnV0dG9uIHdpZHRoLiBtZW51V2l0aCBhbmQgbWVudUhlaWdodCB2YWx1ZXMgYXJlIGlnbm9yZWQgd2hlbiB0cnVlLlxuICAgKi9cbiAgZHluYW1pY0RpbWVuc2lvbkNhbGN1bGF0aW9uPzogYm9vbGVhbjtcblxuICAvKipcbiAgICogRHluYW1pYyBkcm9wZG93biBvcHRpb25zIHZpZXcgZGltZW5zaW9ucyBjYWxjdWxhdGlvbiB3aWR0aCByYXRpbyByZWxhdGl2ZSB0byBkcm9wZG93biBzZWxlY3Rvci5cbiAgICovXG4gIGR5bmFtaWNXaWR0aFJhdGlvPzogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBEeW5hbWljIGRyb3Bkb3duIG9wdGlvbnMgdmlldyBkaW1lbnNpb25zIGNhbGN1bGF0aW9uIGhlaWdodCByYXRpbyByZWxhdGl2ZSB0byBkcm9wZG93biBzZWxlY3Rvci5cbiAgICovXG4gIGR5bmFtaWNIZWlnaHRSYXRpbz86IG51bWJlcjtcblxuICAvKipcbiAgICogUmVsYXRpdmUgcGFyZW50IGVsZW1lbnQgdG8gcmVuZGVyIGRyb3Bkb3duIHZpZXcgY29udGFpbmVyLlxuICAgKi9cbiAgcmVsYXRpdmVQYXJlbnRFbGVtZW50OiBIVE1MRWxlbWVudDtcbn1cbiJdfQ==