import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.page.html',
  styleUrls: ['./carrito.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class CarritoPage implements OnInit {

  productosCarrito : any;
  
  constructor(private storageService: StorageService) { }

  ngOnInit() {

    this.productosCarrito = this.getProductosCarrito();
    //clave valor, recuerda
    console.log(this.productosCarrito);
    
  }

  async getProductosCarrito() {
    return await this.storageService.get('carrito');
  }
}

//await this.storageService.get('carrito');
//let carritoStorage = 

//necesitaré el get para recuperar o recoger lo que se ha "mandado" desde la página de detall
