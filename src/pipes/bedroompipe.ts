import { Pipe, PipeTransform } from '@angular/core';
import { Home } from '../models/IHome.model';

@Pipe({
    name: 'bedroomFilter',
    pure: false
})

export class BedroomFilterPipe implements PipeTransform {

    transform(values: any[], filter: Home): any {
        if (!values || !filter || !filter.bedrooms) {
            return values;
        }
        return values.filter(item => {
            return item.bedrooms === filter.bedrooms;
        });
    }

}
