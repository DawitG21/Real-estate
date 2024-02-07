import { Pipe, PipeTransform } from '@angular/core';
import { Home } from '../models/IHome.model';

@Pipe({
    name: 'categoryFilter',
    pure: false
})

export class CategoryFilterPipe implements PipeTransform {

    transform(values: any[], filter: Home): any {
        if (!values || !filter || !filter.type) {
            return values;
        }
        return values.filter(item => {
            return item.type.toLowerCase().indexOf(filter.type.toLowerCase()) !== -1;
        });
    }

}
