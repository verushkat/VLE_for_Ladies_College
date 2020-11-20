export declare type MoveHandler = (event: MouseEvent, dx: number, dy: number, x: number, y: number) => void;
export declare type UpHandler = (event: MouseEvent, x: number, y: number, moved: boolean) => void;
/**
 * Element drag and drop service.
 */
export declare class DragAndDropService {
    /**
     * Register drag and drop event.
     * @param event Mouse event reference.
     * @param move Mouse move event handler.
     * @param up Mouse up Event handler.
     */
    drag(event: MouseEvent, { move, up }: {
        move: MoveHandler;
        up?: UpHandler;
    }): void;
}
