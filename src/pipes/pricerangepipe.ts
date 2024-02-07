import { Pipe, PipeTransform } from '@angular/core';
import { Home } from '../models/IHome.model';

@Pipe({
    name: 'pricerangeFilter',
    pure: false
})

export class PricerangeFilterPipe implements PipeTransform {

    transform(values: any[], attr: string | number, min: number, max: number): any {
        const range = [];
        for (let i = 0, l = values.length; i < l; ++i) {
            const item = values[i];
            if (item[attr] <= max && item[attr] >= min) {
                range.push(item);
            }
        }
        return range;
    }
}
