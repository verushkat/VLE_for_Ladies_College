/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { take } from 'rxjs/operators';
/**
 * Popover dynamic component loader; Responsible of dynamically rendering angular components to show popover layout.
 * @template T
 */
export class PopoverComponentLoader {
    /**
     * @param {?} componentFactoryResolver
     * @param {?} appRef
     * @param {?} globalRefService
     * @param {?} renderer
     * @param {?} resizeService
     */
    constructor(componentFactoryResolver, appRef, globalRefService, renderer, resizeService) {
        this.componentFactoryResolver = componentFactoryResolver;
        this.appRef = appRef;
        this.globalRefService = globalRefService;
        this.renderer = renderer;
        this.resizeService = resizeService;
        this.isVisible = false;
    }
    /**
     * Register close on click outside event; Hide event is triggered only if click target is not included in
     * exclusion elements collection.
     * @private
     * @param {...?} exclude - Exclude DOM element reference collection.
     * @return {?}
     */
    registerClickOutside(...exclude) {
        /** @type {?} */
        const trackOutsideClick = (/**
         * @param {?} event
         * @return {?}
         */
        (event) => {
            if (!exclude.some((/**
             * @param {?} el
             * @return {?}
             */
            el => {
                return el.contains((/** @type {?} */ (event.target)));
            }))) {
                this.hide();
            }
        });
        this.clickListener = this.renderer.listen('document', 'click', trackOutsideClick);
        this.touchStartListener = this.renderer.listen('document', 'touchstart', trackOutsideClick);
    }
    /**
     * Set dynamic popover position relative to parent.
     * @private
     * @param {?} parentElement Parent element reference.
     * @param {?} options Component loader options.
     * @return {?}
     */
    setPosition(parentElement, options) {
        /** @type {?} */
        const holderElement = options.relativeParentElement || parentElement;
        /** @type {?} */
        const bodyClientRect = holderElement.getBoundingClientRect();
        /** @type {?} */
        const elementClientRect = parentElement.getBoundingClientRect();
        /** @type {?} */
        let left = 0;
        /** @type {?} */
        let top = 0;
        if (options.position.includes('right')) {
            left = parentElement.offsetWidth;
        }
        if (options.position.includes('bottom')) {
            top = parentElement.offsetHeight;
        }
        /** @type {?} */
        const componentElement = (/** @type {?} */ (this.componentReference.location.nativeElement));
        componentElement.style.top = `${elementClientRect.top - bodyClientRect.top + top + options.floatTop}px`;
        componentElement.style.left = `${elementClientRect.left - bodyClientRect.left + left + options.floatLeft}px`;
        componentElement.style.position = 'absolute';
        componentElement.style.display = 'block';
        /** @type {?} */
        const childElement = (/** @type {?} */ (componentElement.firstElementChild));
        if (childElement) {
            if (options.position.includes('right')) {
                childElement.style.right = '0px';
            }
            if (options.position.includes('top')) {
                childElement.style.bottom = '0px';
            }
            childElement.style.position = 'absolute';
        }
        this.resizeEventSubscription = this.resizeService.resize.pipe(take(1)).subscribe((/**
         * @return {?}
         */
        () => {
            this.hide();
        }));
    }
    /**
     * Render component if not available, else display hidden component.
     * @param {?} component Component class type.
     * @param {?} parentElement Parent element to append the target component.
     * @param {?} injector Component injector reference.
     * @param {?} options Component loader options object.
     * @return {?} Rendered component reference.
     */
    show(component, parentElement, injector, options) {
        options = Object.assign({
            closeOnOutsideClick: true,
            floatLeft: 0,
            floatTop: 0,
            position: 'bottom-left'
        }, options);
        if (this.componentReference) {
            this.setPosition(parentElement, options);
            this.isVisible = true;
            return;
        }
        // 1. Create a component reference from the component
        this.componentReference = this.componentFactoryResolver.resolveComponentFactory(component).create(injector);
        if (options.context) {
            Object.assign(this.componentReference.instance, options.context);
        }
        // 2. Attach component to the appRef so that it's inside the ng component tree
        this.appRef.attachView(this.componentReference.hostView);
        // 3. Get DOM element from component
        /** @type {?} */
        const domElem = (/** @type {?} */ (((/** @type {?} */ (this.componentReference.hostView))).rootNodes[0]));
        this.setPosition(parentElement, options);
        // 4. Append DOM element to the body
        (options.relativeParentElement || parentElement).appendChild(domElem);
        // Trigger change detection
        this.componentReference.changeDetectorRef.markForCheck();
        this.componentReference.changeDetectorRef.detectChanges();
        this.isVisible = true;
        if (options.closeOnOutsideClick) {
            this.registerClickOutside(parentElement, this.componentReference.location.nativeElement);
        }
        return this.componentReference.instance;
    }
    /**
     * Hide component if visible.
     * @return {?} Rendered component reference.
     */
    hide() {
        if (this.componentReference) {
            this.componentReference.location.nativeElement.style.display = 'none';
            this.isVisible = false;
            return this.componentReference.instance;
        }
    }
    /**
     * Toggle component display state or render if not available.
     * @param {?} component Component class type.
     * @param {?} parentElement Parent element to append the target component.
     * @param {?} injector Component injector reference.
     * @param {?=} options Component loader options object.
     * @return {?} Rendered component reference.
     */
    toggle(component, parentElement, injector, options) {
        return this.isVisible ? this.hide() : this.show(component, parentElement, injector, options);
    }
    /**
     * Dispose rendered component reference and bindings.
     * @return {?}
     */
    dispose() {
        if (this.resizeEventSubscription) {
            this.resizeEventSubscription.unsubscribe();
        }
        if (this.componentReference) {
            this.appRef.detachView(this.componentReference.hostView);
            this.componentReference.destroy();
        }
        if (this.clickListener) {
            this.clickListener();
            this.clickListener = null;
        }
        if (this.touchStartListener) {
            this.touchStartListener();
            this.touchStartListener = null;
        }
        this.componentReference = null;
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    PopoverComponentLoader.prototype.componentReference;
    /**
     * @type {?}
     * @private
     */
    PopoverComponentLoader.prototype.isVisible;
    /**
     * @type {?}
     * @private
     */
    PopoverComponentLoader.prototype.clickListener;
    /**
     * @type {?}
     * @private
     */
    PopoverComponentLoader.prototype.touchStartListener;
    /**
     * @type {?}
     * @private
     */
    PopoverComponentLoader.prototype.resizeEventSubscription;
    /**
     * @type {?}
     * @private
     */
    PopoverComponentLoader.prototype.componentFactoryResolver;
    /**
     * @type {?}
     * @private
     */
    PopoverComponentLoader.prototype.appRef;
    /**
     * @type {?}
     * @private
     */
    PopoverComponentLoader.prototype.globalRefService;
    /**
     * @type {?}
     * @private
     */
    PopoverComponentLoader.prototype.renderer;
    /**
     * @type {?}
     * @private
     */
    PopoverComponentLoader.prototype.resizeService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9wb3Zlci1jb21wb25lbnQtbG9hZGVyLmNsYXNzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vb3JuYW1lbnR1bS8iLCJzb3VyY2VzIjpbInV0aWxpdHkvc2VydmljZXMvcG9wb3Zlci1jb21wb25lbnQtbG9hZGVyLmNsYXNzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFFQSxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7Ozs7O0FBY3RDLE1BQU0sT0FBTyxzQkFBc0I7Ozs7Ozs7O0lBT2pDLFlBQ1Usd0JBQWtELEVBQ2xELE1BQXNCLEVBQ3RCLGdCQUFrQyxFQUNsQyxRQUFtQixFQUNuQixhQUE0QjtRQUo1Qiw2QkFBd0IsR0FBeEIsd0JBQXdCLENBQTBCO1FBQ2xELFdBQU0sR0FBTixNQUFNLENBQWdCO1FBQ3RCLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFDbEMsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUNuQixrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUVwQyxJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztJQUN6QixDQUFDOzs7Ozs7OztJQU9PLG9CQUFvQixDQUFDLEdBQUcsT0FBc0I7O2NBQzlDLGlCQUFpQjs7OztRQUFHLENBQUMsS0FBWSxFQUFFLEVBQUU7WUFDekMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJOzs7O1lBQUMsRUFBRSxDQUFDLEVBQUU7Z0JBQ3JCLE9BQU8sRUFBRSxDQUFDLFFBQVEsQ0FBQyxtQkFBQSxLQUFLLENBQUMsTUFBTSxFQUFlLENBQUMsQ0FBQztZQUNsRCxDQUFDLEVBQUMsRUFBRTtnQkFDRixJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7YUFDYjtRQUNILENBQUMsQ0FBQTtRQUVELElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsVUFBVSxFQUFFLE9BQU8sRUFBRSxpQkFBaUIsQ0FBQyxDQUFDO1FBQ2xGLElBQUksQ0FBQyxrQkFBa0Is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QTRDOzs7OztJQUM1QywyQ0FBMkI7Ozs7O0lBQzNCLCtDQUFrQzs7Ozs7SUFDbEMsb0RBQXVDOzs7OztJQUN2Qyx5REFBOEM7Ozs7O0lBRzVDLDBEQUEwRDs7Ozs7SUFDMUQsd0NBQThCOzs7OztJQUM5QixrREFBMEM7Ozs7O0lBQzFDLDBDQUEyQjs7Ozs7SUFDM0IsK0NBQW9DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0b3IsIENvbXBvbmVudEZhY3RvcnlSZXNvbHZlciwgRW1iZWRkZWRWaWV3UmVmLCBBcHBsaWNhdGlvblJlZiwgQ29tcG9uZW50UmVmLCBUeXBlLCBSZW5kZXJlcjIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgdGFrZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IENvbXBvbmVudExvYWRlciB9IGZyb20gJy4vY29tcG9uZW50LWxvYWRlci5pbnRlcmZhY2UnO1xuXG5pbXBvcnQgeyBHbG9iYWxSZWZTZXJ2aWNlIH0gZnJvbSAnLi9nbG9iYWwtcmVmLnNlcnZpY2UnO1xuaW1wb3J0IHsgUmVzaXplU2VydmljZSB9IGZyb20gJy4vcmVzaXplLnNlcnZpY2UnO1xuXG5pbXBvcnQgeyBDb21wb25lbnRMb2FkZXJPcHRpb25zIH0gZnJvbSAnLi4vbW9kZWxzL2NvbXBvbmVudC1sb2FkZXItb3B0aW9ucy5tb2RlbCc7XG5cbi8qKlxuICogUG9wb3ZlciBkeW5hbWljIGNvbXBvbmVudCBsb2FkZXI7IFJlc3BvbnNpYmxlIG9mIGR5bmFtaWNhbGx5IHJlbmRlcmluZyBhbmd1bGFyIGNvbXBvbmVudHMgdG8gc2hvdyBwb3BvdmVyIGxheW91dC5cbiAqL1xuZXhwb3J0IGNsYXNzIFBvcG92ZXJDb21wb25lbnRMb2FkZXI8VD4gaW1wbGVtZW50cyBDb21wb25lbnRMb2FkZXI8VD4ge1xuICBwcml2YXRlIGNvbXBvbmVudFJlZmVyZW5jZTogQ29tcG9uZW50UmVmPFQ+O1xuICBwcml2YXRlIGlzVmlzaWJsZTogYm9vbGVhbjtcbiAgcHJpdmF0ZSBjbGlja0xpc3RlbmVyOiAoKSA9PiB2b2lkO1xuICBwcml2YXRlIHRvdWNoU3RhcnRMaXN0ZW5lcjogKCkgPT4gdm9pZDtcbiAgcHJpdmF0ZSByZXNpemVFdmVudFN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgY29tcG9uZW50RmFjdG9yeVJlc29sdmVyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXG4gICAgcHJpdmF0ZSBhcHBSZWY6IEFwcGxpY2F0aW9uUmVmLFxuICAgIHByaXZhdGUgZ2xvYmFsUmVmU2VydmljZTogR2xvYmFsUmVmU2VydmljZSxcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgcHJpdmF0ZSByZXNpemVTZXJ2aWNlOiBSZXNpemVTZXJ2aWNlXG4gICkge1xuICAgIHRoaXMuaXNWaXNpYmxlID0gZmFsc2U7XG4gIH1cblxuICAvKipcbiAgICogUmVnaXN0ZXIgY2xvc2Ugb24gY2xpY2sgb3V0c2lkZSBldmVudDsgSGlkZSBldmVudCBpcyB0cmlnZ2VyZWQgb25seSBpZiBjbGljayB0YXJnZXQgaXMgbm90IGluY2x1ZGVkIGluXG4gICAqIGV4Y2x1c2lvbiBlbGVtZW50cyBjb2xsZWN0aW9uLlxuICAgKiBAcGFyYW0gZXhjbHVkZSAtIEV4Y2x1ZGUgRE9NIGVsZW1lbnQgcmVmZXJlbmNlIGNvbGxlY3Rpb24uXG4gICAqL1xuICBwcml2YXRlIHJlZ2lzdGVyQ2xpY2tPdXRzaWRlKC4uLmV4Y2x1ZGU6IEhUTUxFbGVtZW50W10pOiB2b2lkIHtcbiAgICBjb25zdCB0cmFja091dHNpZGVDbGljayA9IChldmVudDogRXZlbnQpID0+IHtcbiAgICAgIGlmICghZXhjbHVkZS5zb21lKGVsID0+IHtcbiAgICAgICAgcmV0dXJuIGVsLmNvbnRhaW5zKGV2ZW50LnRhcmdldCBhcyBIVE1MRWxlbWVudCk7XG4gICAgICB9KSkge1xuICAgICAgICB0aGlzLmhpZGUoKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgdGhpcy5jbGlja0xpc3RlbmVyID0gdGhpcy5yZW5kZXJlci5saXN0ZW4oJ2RvY3VtZW50JywgJ2NsaWNrJywgdHJhY2tPdXRzaWRlQ2xpY2spO1xuICAgIHRoaXMudG91Y2hTdGFydExpc3RlbmVyID0gdGhpcy5yZW5kZXJlci5saXN0ZW4oJ2RvY3VtZW50JywgJ3RvdWNoc3RhcnQnLCB0cmFja091dHNpZGVDbGljayk7XG4gIH1cblxuICAvKipcbiAgICogU2V0IGR5bmFtaWMgcG9wb3ZlciBwb3NpdGlvbiByZWxhdGl2ZSB0byBwYXJlbnQuXG4gICAqIEBwYXJhbSBwYXJlbnRFbGVtZW50IFBhcmVudCBlbGVtZW50IHJlZmVyZW5jZS5cbiAgICogQHBhcmFtIG9wdGlvbnMgQ29tcG9uZW50IGxvYWRlciBvcHRpb25zLlxuICAgKi9cbiAgcHJpdmF0ZSBzZXRQb3NpdGlvbihwYXJlbnRFbGVtZW50OiBIVE1MRWxlbWVudCwgb3B0aW9uczogQ29tcG9uZW50TG9hZGVyT3B0aW9ucyk6IHZvaWQge1xuICAgIGNvbnN0IGhvbGRlckVsZW1lbnQgPSAgb3B0aW9ucy5yZWxhdGl2ZVBhcmVudEVsZW1lbnQgfHwgcGFyZW50RWxlbWVudDtcbiAgICBjb25zdCBib2R5Q2xpZW50UmVjdCA9IGhvbGRlckVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgY29uc3QgZWxlbWVudENsaWVudFJlY3QgPSBwYXJlbnRFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXG4gICAgbGV0IGxlZnQgPSAwO1xuICAgIGxldCB0b3AgPSAwO1xuXG4gICAgaWYgKG9wdGlvbnMucG9zaXRpb24uaW5jbHVkZXMoJ3JpZ2h0JykpIHtcbiAgICAgIGxlZnQgPSBwYXJlbnRFbGVtZW50Lm9mZnNldFdpZHRoO1xuICAgIH1cblxuICAgIGlmIChvcHRpb25zLnBvc2l0aW9uLmluY2x1ZGVzKCdib3R0b20nKSkge1xuICAgICAgdG9wID0gcGFyZW50RWxlbWVudC5vZmZzZXRIZWlnaHQ7XG4gICAgfVxuXG4gICAgY29uc3QgY29tcG9uZW50RWxlbWVudCA9IHRoaXMuY29tcG9uZW50UmVmZXJlbmNlLmxvY2F0aW9uLm5hdGl2ZUVsZW1lbnQgYXMgSFRNTEVsZW1lbnQ7XG4gICAgY29tcG9uZW50RWxlbWVudC5zdHlsZS50b3AgPSBgJHtlbGVtZW50Q2xpZW50UmVjdC50b3AgLSBib2R5Q2xpZW50UmVjdC50b3AgKyB0b3AgKyBvcHRpb25zLmZsb2F0VG9wfXB4YDtcbiAgICBjb21wb25lbnRFbGVtZW50LnN0eWxlLmxlZnQgPSBgJHtlbGVtZW50Q2xpZW50UmVjdC5sZWZ0IC0gYm9keUNsaWVudFJlY3QubGVmdCArIGxlZnQgKyBvcHRpb25zLmZsb2F0TGVmdH1weGA7XG4gICAgY29tcG9uZW50RWxlbWVudC5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XG4gICAgY29tcG9uZW50RWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcblxuICAgIGNvbnN0IGNoaWxkRWxlbWVudCA9IGNvbXBvbmVudEVsZW1lbnQuZmlyc3RFbGVtZW50Q2hpbGQgYXMgSFRNTEVsZW1lbnQ7XG4gICAgaWYgKGNoaWxkRWxlbWVudCkge1xuICAgICAgaWYgKG9wdGlvbnMucG9zaXRpb24uaW5jbHVkZXMoJ3JpZ2h0JykpIHtcbiAgICAgICAgY2hpbGRFbGVtZW50LnN0eWxlLnJpZ2h0ID0gJzBweCc7XG4gICAgICB9XG5cbiAgICAgIGlmIChvcHRpb25zLnBvc2l0aW9uLmluY2x1ZGVzKCd0b3AnKSkge1xuICAgICAgICBjaGlsZEVsZW1lbnQuc3R5bGUuYm90dG9tID0gJzBweCc7XG4gICAgICB9XG5cbiAgICAgIGNoaWxkRWxlbWVudC5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XG4gICAgfVxuXG4gICAgdGhpcy5yZXNpemVFdmVudFN1YnNjcmlwdGlvbiA9IHRoaXMucmVzaXplU2VydmljZS5yZXNpemUucGlwZSh0YWtlKDEpKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgdGhpcy5oaWRlKCk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogUmVuZGVyIGNvbXBvbmVudCBpZiBub3QgYXZhaWxhYmxlLCBlbHNlIGRpc3BsYXkgaGlkZGVuIGNvbXBvbmVudC5cbiAgICogQHBhcmFtIGNvbXBvbmVudCBDb21wb25lbnQgY2xhc3MgdHlwZS5cbiAgICogQHBhcmFtIHBhcmVudEVsZW1lbnQgUGFyZW50IGVsZW1lbnQgdG8gYXBwZW5kIHRoZSB0YXJnZXQgY29tcG9uZW50LlxuICAgKiBAcGFyYW0gaW5qZWN0b3IgQ29tcG9uZW50IGluamVjdG9yIHJlZmVyZW5jZS5cbiAgICogQHBhcmFtIG9wdGlvbnMgQ29tcG9uZW50IGxvYWRlciBvcHRpb25zIG9iamVjdC5cbiAgICogQHJldHVybiBSZW5kZXJlZCBjb21wb25lbnQgcmVmZXJlbmNlLlxuICAgKi9cbiAgcHVibGljIHNob3coY29tcG9uZW50OiBUeXBlPFQ+LCBwYXJlbnRFbGVtZW50OiBIVE1MRWxlbWVudCwgaW5qZWN0b3I6IEluamVjdG9yLCBvcHRpb25zOiBDb21wb25lbnRMb2FkZXJPcHRpb25zKTogVCB7XG4gICAgb3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oXG4gICAgICB7XG4gICAgICAgIGNsb3NlT25PdXRzaWRlQ2xpY2s6IHRydWUsXG4gICAgICAgIGZsb2F0TGVmdDogMCxcbiAgICAgICAgZmxvYXRUb3A6IDAsXG4gICAgICAgIHBvc2l0aW9uOiAnYm90dG9tLWxlZnQnXG4gICAgICB9LFxuICAgICAgb3B0aW9uc1xuICAgICk7XG5cbiAgICBpZiAodGhpcy5jb21wb25lbnRSZWZlcmVuY2UpIHtcbiAgICAgIHRoaXMuc2V0UG9zaXRpb24ocGFyZW50RWxlbWVudCwgb3B0aW9ucyk7XG4gICAgICB0aGlzLmlzVmlzaWJsZSA9IHRydWU7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gMS4gQ3JlYXRlIGEgY29tcG9uZW50IHJlZmVyZW5jZSBmcm9tIHRoZSBjb21wb25lbnRcbiAgICB0aGlzLmNvbXBvbmVudFJlZmVyZW5jZSA9IHRoaXMuY29tcG9uZW50RmFjdG9yeVJlc29sdmVyLnJlc29sdmVDb21wb25lbnRGYWN0b3J5KGNvbXBvbmVudCkuY3JlYXRlKGluamVjdG9yKTtcblxuICAgIGlmIChvcHRpb25zLmNvbnRleHQpIHtcbiAgICAgIE9iamVjdC5hc3NpZ24odGhpcy5jb21wb25lbnRSZWZlcmVuY2UuaW5zdGFuY2UsIG9wdGlvbnMuY29udGV4dCk7XG4gICAgfVxuXG4gICAgLy8gMi4gQXR0YWNoIGNvbXBvbmVudCB0byB0aGUgYXBwUmVmIHNvIHRoYXQgaXQncyBpbnNpZGUgdGhlIG5nIGNvbXBvbmVudCB0cmVlXG4gICAgdGhpcy5hcHBSZWYuYXR0YWNoVmlldyh0aGlzLmNvbXBvbmVudFJlZmVyZW5jZS5ob3N0Vmlldyk7XG5cbiAgICAvLyAzLiBHZXQgRE9NIGVsZW1lbnQgZnJvbSBjb21wb25lbnRcbiAgICBjb25zdCBkb21FbGVtID0gKHRoaXMuY29tcG9uZW50UmVmZXJlbmNlLmhvc3RWaWV3IGFzIEVtYmVkZGVkVmlld1JlZjxhbnk+KS5yb290Tm9kZXNbMF0gYXMgSFRNTEVsZW1lbnQ7XG5cbiAgICB0aGlzLnNldFBvc2l0aW9uKHBhcmVudEVsZW1lbnQsIG9wdGlvbnMpO1xuXG4gICAgLy8gNC4gQXBwZW5kIERPTSBlbGVtZW50IHRvIHRoZSBib2R5XG4gICAgKG9wdGlvbnMucmVsYXRpdmVQYXJlbnRFbGVtZW50IHx8IHBhcmVudEVsZW1lbnQpLmFwcGVuZENoaWxkKGRvbUVsZW0pO1xuXG4gICAgLy8gVHJpZ2dlciBjaGFuZ2UgZGV0ZWN0aW9uXG4gICAgdGhpcy5jb21wb25lbnRSZWZlcmVuY2UuY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gICAgdGhpcy5jb21wb25lbnRSZWZlcmVuY2UuY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuXG4gICAgdGhpcy5pc1Zpc2libGUgPSB0cnVlO1xuXG4gICAgaWYgKG9wdGlvbnMuY2xvc2VPbk91dHNpZGVDbGljaykge1xuICAgICAgdGhpcy5yZWdpc3RlckNsaWNrT3V0c2lkZShwYXJlbnRFbGVtZW50LCB0aGlzLmNvbXBvbmVudFJlZmVyZW5jZS5sb2NhdGlvbi5uYXRpdmVFbGVtZW50KTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5jb21wb25lbnRSZWZlcmVuY2UuaW5zdGFuY2U7XG4gIH1cblxuICAvKipcbiAgICogSGlkZSBjb21wb25lbnQgaWYgdmlzaWJsZS5cbiAgICogQHJldHVybiBSZW5kZXJlZCBjb21wb25lbnQgcmVmZXJlbmNlLlxuICAgKi9cbiAgcHVibGljIGhpZGUoKTogVCB7XG4gICAgaWYgKHRoaXMuY29tcG9uZW50UmVmZXJlbmNlKSB7XG4gICAgICB0aGlzLmNvbXBvbmVudFJlZmVyZW5jZS5sb2NhdGlvbi5uYXRpdmVFbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICB0aGlzLmlzVmlzaWJsZSA9IGZhbHNlO1xuICAgICAgcmV0dXJuIHRoaXMuY29tcG9uZW50UmVmZXJlbmNlLmluc3RhbmNlO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBUb2dnbGUgY29tcG9uZW50IGRpc3BsYXkgc3RhdGUgb3IgcmVuZGVyIGlmIG5vdCBhdmFpbGFibGUuXG4gICAqIEBwYXJhbSBjb21wb25lbnQgQ29tcG9uZW50IGNsYXNzIHR5cGUuXG4gICAqIEBwYXJhbSBwYXJlbnRFbGVtZW50IFBhcmVudCBlbGVtZW50IHRvIGFwcGVuZCB0aGUgdGFyZ2V0IGNvbXBvbmVudC5cbiAgICogQHBhcmFtIGluamVjdG9yIENvbXBvbmVudCBpbmplY3RvciByZWZlcmVuY2UuXG4gICAqIEBwYXJhbSBvcHRpb25zIENvbXBvbmVudCBsb2FkZXIgb3B0aW9ucyBvYmplY3QuXG4gICAqIEByZXR1cm4gUmVuZGVyZWQgY29tcG9uZW50IHJlZmVyZW5jZS5cbiAgICovXG4gIHB1YmxpYyB0b2dnbGUoY29tcG9uZW50OiBUeXBlPFQ+LCBwYXJlbnRFbGVtZW50OiBIVE1MRWxlbWVudCwgaW5qZWN0b3I6IEluamVjdG9yLCBvcHRpb25zPzogQ29tcG9uZW50TG9hZGVyT3B0aW9ucyk6IFQge1xuICAgIHJldHVybiB0aGlzLmlzVmlzaWJsZSA/IHRoaXMuaGlkZSgpIDogdGhpcy5zaG93KGNvbXBvbmVudCwgcGFyZW50RWxlbWVudCwgaW5qZWN0b3IsIG9wdGlvbnMpO1xuICB9XG5cbiAgLyoqXG4gICAqIERpc3Bvc2UgcmVuZGVyZWQgY29tcG9uZW50IHJlZmVyZW5jZSBhbmQgYmluZGluZ3MuXG4gICAqL1xuICBwdWJsaWMgZGlzcG9zZSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5yZXNpemVFdmVudFN1YnNjcmlwdGlvbikge1xuICAgICAgdGhpcy5yZXNpemVFdmVudFN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmNvbXBvbmVudFJlZmVyZW5jZSkge1xuICAgICAgdGhpcy5hcHBSZWYuZGV0YWNoVmlldyh0aGlzLmNvbXBvbmVudFJlZmVyZW5jZS5ob3N0Vmlldyk7XG4gICAgICB0aGlzLmNvbXBvbmVudFJlZmVyZW5jZS5kZXN0cm95KCk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuY2xpY2tMaXN0ZW5lcikge1xuICAgICAgdGhpcy5jbGlja0xpc3RlbmVyKCk7XG4gICAgICB0aGlzLmNsaWNrTGlzdGVuZXIgPSBudWxsO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnRvdWNoU3RhcnRMaXN0ZW5lcikge1xuICAgICAgdGhpcy50b3VjaFN0YXJ0TGlzdGVuZXIoKTtcbiAgICAgIHRoaXMudG91Y2hTdGFydExpc3RlbmVyID0gbnVsbDtcbiAgICB9XG5cbiAgICB0aGlzLmNvbXBvbmVudFJlZmVyZW5jZSA9IG51bGw7XG4gIH1cbn1cbiJdfQ==