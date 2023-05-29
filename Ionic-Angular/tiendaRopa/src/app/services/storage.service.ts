import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  storage: any;

  constructor(private StorageService: StorageService) { }

  
  public async obtenerCarrito() {
    // Obtener el carrito actual
    let carrito = JSON.parse(await this.get('carrito') || '[]');

    return carrito;
  }

  public async vaciarCarrito() {
    // Vaciar el carrito
 await this.remove('carrito');
  }

  public async set(key: string, value: any){
    await this.storage.set(key, value);
  }
   
  public async get(key:string){
    return await this.storage.get(key);
  }

  public async remove(key:string){
    await this.storage.remove(key);
  }

  public async clear(){
    await this.storage.clear();
  }
}

