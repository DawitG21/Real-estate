import { Pipe, PipeTransform } from '@angular/core';
import { Home } from '../models/IHome.model';

@Pipe({
    name: 'amenitiesFilter',
    pure: false
})

export class AmenitiesFilterPipe implements PipeTransform {

    transform(values: any[], filter: Home): any {
        /* console.log('amenities', values, filter); */
        if (!values || !filter || !filter.amenity) {
            return values;
        }
        return values.filter(item => {
            return item.amenity.indexOf(filter.amenity) !== -1;
        });
    }
}
