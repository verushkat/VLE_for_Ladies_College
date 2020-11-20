/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Dynamic component loader; Responsible of dynamically rendering angular components.
 * @record
 * @template T
 */
export function ComponentLoader() { }
if (false) {
    /**
     * Hide component if visible.
     * @return {?} Rendered component reference.
     */
    ComponentLoader.prototype.hide = function () { };
    /**
     * Render component if not available, else display hidden component.
     * @param {?} component Component class type.
     * @param {?} parentElement Parent element to append the target component.
     * @param {?} injector Component injector reference.
     * @param {?=} options Component loader options object.
     * @return {?} Rendered component reference.
     */
    ComponentLoader.prototype.show = function (component, parentElement, injector, options) { };
    /**
     * Toggle component display state or render if not available.
     * @param {?} component Component class type.
     * @param {?} parentElement Parent element to append the target component.
     * @param {?} injector Component injector reference.
     * @param {?=} options Component loader options object.
     * @return {?} Rendered component reference.
     */
    ComponentLoader.prototype.toggle = function (component, parentElement, injector, options) { };
    /**
     * Dispose rendered component reference and bindings.
     * @return {?}
     */
    ComponentLoader.prototype.dispose = function () { };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50LWxvYWRlci5pbnRlcmZhY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9vcm5hbWVudHVtLyIsInNvdXJjZXMiOlsidXRpbGl0eS9zZXJ2aWNlcy9jb21wb25lbnQtbG9hZGVyLmludGVyZmFjZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFNQSxxQ0ErQkM7Ozs7OztJQTFCQyxpREFBVTs7Ozs7Ozs7O0lBVVYsNEZBQThHOzs7Ozs7Ozs7SUFVOUcsOEZBQWdIOzs7OztJQUtoSCxvREFBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RvciwgVHlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tcG9uZW50TG9hZGVyT3B0aW9ucyB9IGZyb20gJy4uL21vZGVscy9jb21wb25lbnQtbG9hZGVyLW9wdGlvbnMubW9kZWwnO1xuXG4vKipcbiAqIER5bmFtaWMgY29tcG9uZW50IGxvYWRlcjsgUmVzcG9uc2libGUgb2YgZHluYW1pY2FsbHkgcmVuZGVyaW5nIGFuZ3VsYXIgY29tcG9uZW50cy5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBDb21wb25lbnRMb2FkZXI8VD4ge1xuICAvKipcbiAgICogSGlkZSBjb21wb25lbnQgaWYgdmlzaWJsZS5cbiAgICogQHJldHVybiBSZW5kZXJlZCBjb21wb25lbnQgcmVmZXJlbmNlLlxuICAgKi9cbiAgaGlkZSgpOiBUO1xuXG4gIC8qKlxuICAgKiBSZW5kZXIgY29tcG9uZW50IGlmIG5vdCBhdmFpbGFibGUsIGVsc2UgZGlzcGxheSBoaWRkZW4gY29tcG9uZW50LlxuICAgKiBAcGFyYW0gY29tcG9uZW50IENvbXBvbmVudCBjbGFzcyB0eXBlLlxuICAgKiBAcGFyYW0gcGFyZW50RWxlbWVudCBQYXJlbnQgZWxlbWVudCB0byBhcHBlbmQgdGhlIHRhcmdldCBjb21wb25lbnQuXG4gICAqIEBwYXJhbSBpbmplY3RvciBDb21wb25lbnQgaW5qZWN0b3IgcmVmZXJlbmNlLlxuICAgKiBAcGFyYW0gb3B0aW9ucyBDb21wb25lbnQgbG9hZGVyIG9wdGlvbnMgb2JqZWN0LlxuICAgKiBAcmV0dXJuIFJlbmRlcmVkIGNvbXBvbmVudCByZWZlcmVuY2UuXG4gICAqL1xuICBzaG93KGNvbXBvbmVudDogVHlwZTxUPiwgcGFyZW50RWxlbWVudDogSFRNTEVsZW1lbnQsIGluamVjdG9yOiBJbmplY3Rvciwgb3B0aW9ucz86IENvbXBvbmVudExvYWRlck9wdGlvbnMpOiBUO1xuXG4gIC8qKlxuICAgKiBUb2dnbGUgY29tcG9uZW50IGRpc3BsYXkgc3RhdGUgb3IgcmVuZGVyIGlmIG5vdCBhdmFpbGFibGUuXG4gICAqIEBwYXJhbSBjb21wb25lbnQgQ29tcG9uZW50IGNsYXNzIHR5cGUuXG4gICAqIEBwYXJhbSBwYXJlbnRFbGVtZW50IFBhcmVudCBlbGVtZW50IHRvIGFwcGVuZCB0aGUgdGFyZ2V0IGNvbXBvbmVudC5cbiAgICogQHBhcmFtIGluamVjdG9yIENvbXBvbmVudCBpbmplY3RvciByZWZlcmVuY2UuXG4gICAqIEBwYXJhbSBvcHRpb25zIENvbXBvbmVudCBsb2FkZXIgb3B0aW9ucyBvYmplY3QuXG4gICAqIEByZXR1cm4gUmVuZGVyZWQgY29tcG9uZW50IHJlZmVyZW5jZS5cbiAgICovXG4gIHRvZ2dsZShjb21wb25lbnQ6IFR5cGU8VD4sIHBhcmVudEVsZW1lbnQ6IEhUTUxFbGVtZW50LCBpbmplY3RvcjogSW5qZWN0b3IsIG9wdGlvbnM/OiBDb21wb25lbnRMb2FkZXJPcHRpb25zKTogVDtcblxuICAvKipcbiAgICogRGlzcG9zZSByZW5kZXJlZCBjb21wb25lbnQgcmVmZXJlbmNlIGFuZCBiaW5kaW5ncy5cbiAgICovXG4gIGRpc3Bvc2UoKTogdm9pZDtcbn1cbiJdfQ==