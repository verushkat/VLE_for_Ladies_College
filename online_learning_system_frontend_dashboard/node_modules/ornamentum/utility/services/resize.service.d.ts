import { Observable } from 'rxjs';
import { GlobalRefService } from './global-ref.service';
/**
 * Resize handler service; Window resize global event handler.
 */
export declare class ResizeService {
    private globalRefService;
    resize: Observable<Event>;
    constructor(globalRefService: GlobalRefService);
}
