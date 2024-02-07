import { Injectable } from '@angular/core';  
import {  Http } from '@angular/http';  
import { Observable, Subject } from 'rxjs'; 
import { IUpload } from '../interfaces/upload.interface';
import { Response, RequestOptions, Headers} from '@angular/http';
import 'rxjs/add/operator/map'; 


@Injectable()

export class UploadApiService {
  subject= new Subject<any>();
  url =  'http://192.168.1.104/realestateapi/api';
  products :IUpload[];


  constructor( private _http: Http){
  }

  broadcastTask(addproduct:IUpload):void{
    this.subject.next(addproduct);
  }

  subscribeTask():Observable<any>{
    return this.subject.asObservable();
  }

      getAllCategories():Observable<IUpload[]>{
        return this._http.get(this.url +'/categories/')
        .map((response: Response) => <IUpload[]>response.json());
      }

      getAllProducts(): Observable<IUpload[]>{
          return this._http.get(this.url + '/products/')
          .map((response: Response) => <IUpload[]>response.json());
      }
      
      getAllAmenities():Observable<IUpload[]>{
        return this._http.get(this.url + '/amenities')
        .map((response: Response) => <IUpload[]>response.json());
      }

      createProduct(addproduct): Observable<IUpload[]>{
        return this._http.post(this.url + '/products/', addproduct)
        .map((res : Response)=> <IUpload[]> res.json());
      }

      deleteProduct(product: IUpload) {
        const headers = new Headers({ 'Content-Type': 'application/json' });
        const options = new RequestOptions({ headers: headers });
        return this._http.delete(this.url + '/products/', { body: product })
        .map((response => response));
        }
}