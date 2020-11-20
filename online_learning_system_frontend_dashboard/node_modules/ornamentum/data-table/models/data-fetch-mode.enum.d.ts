/**
 * Data table export mode model.
 */
export declare enum DataFetchMode {
    /**
     * Re-fetch data from source and load data after resetting table state.
     */
    HARD_RELOAD = 0,
    /**
     * Re-fetch data from source and load data without resetting table state.
     */
    SOFT_RELOAD = 1,
    /**
     * Load data without changing table state state.
     */
    SOFT_LOAD = 2
}
