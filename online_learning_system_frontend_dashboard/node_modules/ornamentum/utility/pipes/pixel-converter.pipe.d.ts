import { PipeTransform } from '@angular/core';
/**
 * Pixel converter pipe.
 * Append 'px' if value is number type, else return the same.
 */
export declare class PixelConverterPipe implements PipeTransform {
    /**
     * Pipe transform implementation.
     * @param value Source value.
     * @returns Converted pixel value.
     */
    transform(value: string | number): string;
}
