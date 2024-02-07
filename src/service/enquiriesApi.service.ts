import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import { Response, RequestOptions, Headers} from '@angular/http';
import 'rxjs/add/operator/map'; 
import { IEnquiries } from 'src/interfaces/IEnquiries';

@Injectable()

export class EnquiriesService {

    url =  'http://192.168.1.104/realestateapi/api';

    constructor(public _http:Http){}

    
    getAllEnquiries():Observable<IEnquiries[]>{
        return this._http.get(this.url + '/enquiries')
        .map((response :Response)=><IEnquiries[]>response.json());
    }

}