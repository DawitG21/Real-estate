import { Pipe, PipeTransform } from '@angular/core';
import { Home } from '../models/IHome.model';

@Pipe({
    name: 'parkingFilter',
    pure: false
})

export class ParkingFilterPipe implements PipeTransform {

    transform(values: any[], filter: Home): any {
        if (!values || !filter || !filter.car_type) {
            return values;
        }
        return values.filter(item => {
            return item.car_type.toLowerCase().indexOf(filter.car_type.toLowerCase()) !== -1;
        });
    }

}
