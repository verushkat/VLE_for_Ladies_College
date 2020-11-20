import {Injectable} from '@angular/core';

/**
 * Class representing local storage service.
 */
@Injectable()
export class LocalStorageService {

  /**
   * Get data from local storage.
   * @param key - local storage key name.
   */
  public getData(key: string): string {
    return localStorage.getItem(key);
  }

  /**
   * Set data to local storage.
   * @param key - local storage key name.
   * @param value - local storage key specific value.
   */
  public setData(key: string, value: string): void {
    localStorage.setItem(key, value);
  }

  /**
   * Delete data from local storage.
   * @param key - local storage key name.
   */
  public deleteData(key: string): void {
    localStorage.removeItem(key);
  }
}
