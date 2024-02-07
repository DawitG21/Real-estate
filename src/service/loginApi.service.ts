import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import { IUser } from '../interfaces/IUser';
import { Response, RequestOptions, Headers} from '@angular/http';
import 'rxjs/add/operator/map'; 

@Injectable()

export class LoginService{
    url =  'http://192.168.1.104/realestateapi/api';
    constructor( public _http: Http){}

    sendUser(cheekUser): Observable<IUser>{
        return this._http.post(this.url + '/login/' , cheekUser)
        .map((res: Response)=><IUser> res.json());
    }
}