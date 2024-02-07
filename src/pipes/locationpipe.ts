import { Pipe, PipeTransform } from '@angular/core';
import { Home } from '../models/IHome.model';

@Pipe({
    name: 'locationFilter',
    pure: false
})

export class LocationFilterPipe implements PipeTransform {

    transform(values: any[], filter: Home): any {
        if (!values || !filter || !filter.address) {
            return values;
        }
        return values.filter(item => {
            return item.address.toLowerCase().indexOf(filter.address.toLowerCase()) !== -1;
        });
    }
}
