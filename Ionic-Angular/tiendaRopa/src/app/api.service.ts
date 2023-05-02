import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  ws_Key : string = "JEWNJ26VXU8GXS11K2YSCNJTME1WHUVL";
  baseURL: string = "https://tonigomila.cat/shop/api";
  

  constructor(public http: HttpClient) { 

  }

  getProducts(){
    return this.http.get(`${this.baseURL}/products/?display=[name,price]&output_format=JSON&ws_key=${this.ws_Key}`);
  }

}


