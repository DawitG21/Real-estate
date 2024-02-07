import { IEnquiries } from '../interfaces/IEnquiries';

export class IEnquiriesModel implements IEnquiries{
    Id: number;
    Firstname : string;
    Lastname : string;
    Customeremail : string;
    Phonenumber : number;
    Message : string;
    ProductId :number;
}