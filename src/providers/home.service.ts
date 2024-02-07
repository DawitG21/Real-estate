import { Injectable } from '@angular/core';
import { Http} from '@angular/http';
/* import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/Observable/throw'; */

import { IHome } from '../interfaces/Ihome';

@Injectable({
  providedIn: 'root'
})

export class HomeService {

  homes: IHome[];
  private _url: any = '../data/home.json';

  constructor(public http: Http) { }

  /* getHomes() {
    return this.http.get(this._url)
      .map((response: Response) => response);
  } */

}
