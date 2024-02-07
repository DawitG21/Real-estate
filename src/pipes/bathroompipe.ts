import { Pipe, PipeTransform } from '@angular/core';
import { Home } from '../models/IHome.model';

@Pipe({
    name: 'bathroomFilter',
    pure: false
})

export class BathroomFilterPipe implements PipeTransform {

    transform(values: any[], filter: Home): any {
        if (!values || !filter || !filter.bathrooms) {
            return values;
        }
        return values.filter(item => {
            return item.bathrooms === filter.bathrooms;
        });
    }

}
