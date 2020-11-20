import { Injector, ComponentFactoryResolver, ApplicationRef, Type, Renderer2 } from '@angular/core';
import { ComponentLoader } from './component-loader.interface';
import { GlobalRefService } from './global-ref.service';
import { ResizeService } from './resize.service';
import { ComponentLoaderOptions } from '../models/component-loader-options.model';
/**
 * Popover dynamic component loader; Responsible of dynamically rendering angular components to show popover layout.
 */
export declare class PopoverComponentLoader<T> implements ComponentLoader<T> {
    private componentFactoryResolver;
    private appRef;
    private globalRefService;
    private renderer;
    private resizeService;
    private componentReference;
    private isVisible;
    private clickListener;
    private touchStartListener;
    private resizeEventSubscription;
    constructor(componentFactoryResolver: ComponentFactoryResolver, appRef: ApplicationRef, globalRefService: GlobalRefService, renderer: Renderer2, resizeService: ResizeService);
    /**
     * Register close on click outside event; Hide event is triggered only if click target is not included in
     * exclusion elements collection.
     * @param exclude - Exclude DOM element reference collection.
     */
    private registerClickOutside;
    /**
     * Set dynamic popover position relative to parent.
     * @param parentElement Parent element reference.
     * @param options Component loader options.
     */
    private setPosition;
    /**
     * Render component if not available, else display hidden component.
     * @param component Component class type.
     * @param parentElement Parent element to append the target component.
     * @param injector Component injector reference.
     * @param options Component loader options object.
     * @return Rendered component reference.
     */
    show(component: Type<T>, parentElement: HTMLElement, injector: Injector, options: ComponentLoaderOptions): T;
    /**
     * Hide component if visible.
     * @return Rendered component reference.
     */
    hide(): T;
    /**
     * Toggle component display state or render if not available.
     * @param component Component class type.
     * @param parentElement Parent element to append the target component.
     * @param injector Component injector reference.
     * @param options Component loader options object.
     * @return Rendered component reference.
     */
    toggle(component: Type<T>, parentElement: HTMLElement, injector: Injector, options?: ComponentLoaderOptions): T;
    /**
     * Dispose rendered component reference and bindings.
     */
    dispose(): void;
}
