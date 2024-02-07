import { IUser } from '../interfaces/IUser';

export class IUserModel implements IUser{
    Id : number;
    UserName:  string;
    Email : string;
    Secret_Key : string;
}