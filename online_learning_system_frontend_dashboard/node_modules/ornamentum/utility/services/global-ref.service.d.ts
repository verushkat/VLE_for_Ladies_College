/**
 * Global reference service; List all global javascript references here.
 */
export declare class GlobalRefService {
    private scrollbarWidthValue;
    constructor();
    /**
     * Set scrollbar width of current browser environment; Ony set on browser environment to support SSR.
     */
    setScrollbarWidth(): void;
    /**
     * Get scrollbar width.
     * @returns Scroll bar width.
     */
    readonly scrollbarWidth: number;
    /**
     * Get window reference.
     * @return Window reference.
     */
    readonly window: Window;
    /**
     * Is browser environment.
     * @return True if current environment is browser.
     */
    readonly isBrowser: boolean;
}
