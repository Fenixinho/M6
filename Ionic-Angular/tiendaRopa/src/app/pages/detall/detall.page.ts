import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { BottomVavigationComponent } from 'src/app/components/bottom-vavigation/bottom-vavigation.component';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { StorageService } from 'src/app/services/storage.service';


@Component({
  selector: 'app-detall',
  templateUrl: './detall.page.html',
  styleUrls: ['./detall.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule,BottomVavigationComponent,HeaderComponent]
})
export class DetallPage implements OnInit {
  id: any;
  producto: any = {};
  key: string = "JEWNJ26VXU8GXS11K2YSCNJTME1WHUVL";

  constructor(private route: ActivatedRoute, private apiService: ApiService, private storageService: StorageService) { 
    this.id = this.route.snapshot.paramMap.get("id");

    //No acabo de ver es
  }

  ngOnInit() {
    this.getProducto();
  }

  getProducto() {
    this.apiService.getProduct(this.id).subscribe((response:any) => {
      //mantengo para control

      this.producto = response.products[0];
      this.producto.description = this.producto.description.replace('<p>', '').replace('</p>', '');
    })
  }

  async agregarAlCarrito(productoId: any) {
    // el carrito actual, recoge lo que haya o se crea vacío si no hay nada
    let carrito = await this.storageService.get('carrito');
    console.log('carrito inicial:',carrito);
    

     if (carrito == null || carrito.length == 0) {
      await this.storageService.set('carrito', [
        {
          productoId: productoId,
          cantidad: 1
        }
      ]);

    } else {
      let posicionEnCarrito = this.identificarProductoEnCarrito(carrito);
      console.log('esta es la posicion en el carrito',posicionEnCarrito);

      if (posicionEnCarrito === -1) {

        carrito.push({
          productoId: productoId,
          cantidad: 1
        });

      } else {
        carrito[posicionEnCarrito].cantidad++;

      }
      
    }
    setTimeout(async () => { 
      console.log(await this.storageService.get('carrito'))
    }, 500);

  }

  identificarProductoEnCarrito(carrito : any) {
    return carrito.findIndex((element : any) => element.productoId == this.id);
  }
}