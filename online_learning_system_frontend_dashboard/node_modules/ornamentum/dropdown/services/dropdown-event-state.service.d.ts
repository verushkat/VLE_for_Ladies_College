import { EventEmitter } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { DropdownComponent } from '../components/dropdown/dropdown.component';
/**
 * Dropdown event state service; Manage dropdown event handler state.
 */
export declare class DropdownEventStateService {
    dataFetchStream: EventEmitter<boolean>;
    dataBoundStream: EventEmitter<void>;
    selectChangeStream: EventEmitter<any>;
    initStream: EventEmitter<DropdownComponent>;
    staticDataSourceStream: ReplaySubject<any[]>;
}
