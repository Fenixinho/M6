import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  ws_Key : string = "JEWNJ26VXU8GXS11K2YSCNJTME1WHUVL";
  baseURL: string = "https://tonigomila.cat/shop/api";

  //Para ver lo que tenemos:nombre, precio...
  /* https://tonigomila.cat/shop/api//products/?display=[name,price,%20description,id,id_default_image]&output%20format=JSON */

  /* https://tonigomila.cat/shop/api//products/?display=full&output_format=JSON */
  //Este lo veo todo

  //Antes acceder a baseURL, y poner como usuario ws_Key
  
  constructor(public http: HttpClient) { 

  }

  getProducts(){
    return this.http.get(`${this.baseURL}/products/?display=[name,price,id,id_default_image,description]&output_format=JSON&ws_key=${this.ws_Key}`);
  }

  getProduct(id:string){
    return this.http.get(`${this.baseURL}/products/${id}?display=[name,price,id,id_default_image,description]&output_format=JSON&ws_key=${this.ws_Key}`);
  }

}


