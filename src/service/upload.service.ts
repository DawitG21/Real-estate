import { Injectable } from '@angular/core';
import { IUpload } from '../interfaces/upload.interface';
import { UPLOAD_ITEMS } from '../pages/upload/upload.data';
import { findIndex } from 'lodash';



@Injectable()
export class UploadService {

    private uploaditems = UPLOAD_ITEMS;


    getUploadsFromData():IUpload[]{
        console.log(this.uploaditems);
        return this.uploaditems;
    }

    addUpload(uploads: IUpload){
        this.uploaditems.push(uploads);
        console.log(this.uploaditems);
    }

    updateUpload(uploads: IUpload){
        let index = findIndex(this.uploaditems,(u:IUpload)=>{
            return u.Address === uploads.Address;
        });
        this.uploaditems[index]= uploads;
    }

    deleteUpload(applyupload: IUpload){
        this.uploaditems.splice(this.uploaditems.indexOf(applyupload),1)
        console.log(this.uploaditems);
    }


/*     getUploadsFromService(): IUpload[] {
        return [{
            types : 'Appartement',
            location : 'Bole',
            area : 1000,
            bedrooms: 4,
            bathrooms: 5,
            parkingarea:'Sport utility vehicles',
            parkingspots:'4 Parking Spots',
            price:500000,
            currency:'USD',
            description:'Holiday house heated in-door swimming basin'

        },{
            types : 'Villa',
            location : 'CMC',
            area : 1000,
            bedrooms: 5,
            bathrooms: 7,
            parkingarea:'Pickup trucks',
            parkingspots:'2 Parking Spots',
            price:900000,
            currency:'USD',
            description:'Holiday house is a perfect hideaway for your recreation'
        }]
    } */
}