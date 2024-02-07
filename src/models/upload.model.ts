import { IUpload } from '../interfaces/upload.interface';

export class IUploadModel implements IUpload {
    Id : any;
    Category : string;
    Address : string;
    Amount :any;
    Beds : any;
    Baths : any;
    Area : number;
    Parking : string;
    ParkingSpot : number;
    Description : string;
    Term : string;
    UserId : number;
    Amenities: any[];
    Images: string[];
    Categoryname : string;
}