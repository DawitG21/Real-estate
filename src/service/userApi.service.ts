import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import { IUser } from '../interfaces/IUser';
import { Response, RequestOptions, Headers} from '@angular/http';
import 'rxjs/add/operator/map'; 

@Injectable()

export class UserApiService {
    url =  'http://192.168.1.104/realestateapi/api';

    constructor(private _http: Http){}

    getAllUsers():Observable<IUser[]>{
        return this._http.get(this.url + '/users')
        .map((response :Response)=><IUser[]>response.json());
    }

    createUser(addUser): Observable<IUser>{
        return this._http.post(this.url + '/users/' , addUser)
        .map((res: Response)=><IUser> res.json());
    }
}
