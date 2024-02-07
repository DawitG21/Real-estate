import { Pipe, PipeTransform } from '@angular/core';
import { Home } from '../models/IHome.model';

@Pipe({
    name: 'parkspotFilter',
    pure: false
})

export class ParkingSpotFilterPipe implements PipeTransform {

    transform(values: any[], filter: Home): any {
        if (!values || !filter || !filter.park_spots) {
            return values;
        }
        return values.filter(item => {
            return item.park_spots === filter.park_spots;
        });
    }

}
