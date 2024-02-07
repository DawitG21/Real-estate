/* import { Injectable } from '@angular/core';
import { IUpload } from '../interfaces/upload.Interface';
import { UPLOAD_ITEMS } from '../pages/upload/upload.data';
import { findIndex } from 'lodash';

@Injectable()
export class UploadService {

    private uploaditems = UPLOAD_ITEMS;

    getUploadsFromData(): IUpload[] {
        return this.uploaditems;
    }

    addUpload(uploads: IUpload) {
        this.uploaditems.push(uploads);
    }

    updateUpload(uploads: IUpload) {
        const index = findIndex(this.uploaditems, (u: IUpload) => {
            return u.Address === uploads.Address;
        });
        this.uploaditems[index] = uploads;
    }

    deleteUpload(applyupload: IUpload) {
        this.uploaditems.splice(this.uploaditems.indexOf(applyupload), 1);
        console.log(this.uploaditems);
    }
}
 */