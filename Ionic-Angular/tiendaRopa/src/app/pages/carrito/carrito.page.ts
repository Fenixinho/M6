import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { StorageService } from 'src/app/services/storage.service';
import { BottomVavigationComponent } from 'src/app/components/bottom-vavigation/bottom-vavigation.component';
import { ApiService } from 'src/app/services/api.service';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { Router } from '@angular/router';


@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.page.html',
  styleUrls: ['./carrito.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, BottomVavigationComponent,HeaderComponent]
})
export class CarritoPage implements OnInit {

  productosCarrito : any = {};
  productosApi : any = [];
  key : string = "JEWNJ26VXU8GXS11K2YSCNJTME1WHUVL";

  constructor(private storageService: StorageService, private apiService: ApiService,private router: Router) { }

  async ngOnInit() {

    this.productosCarrito = await this.getProductosCarrito();
    //clave valor, recuerda
    console.log('productos id',this.productosCarrito);

        this.productosCarrito.forEach((itemCarrito: any) => {
          this.apiService.getProduct(itemCarrito.productoId).subscribe((product: any) => {
            console.log(product)
            this.productosApi.push(product.products[0]);
          }); 
        });
  }

  async getProductosCarrito() {
    return await this.storageService.get('carrito');

  }

  remove(producte:any) {
    const index = this.productosCarrito.indexOf(producte);
    if (index > -1) {
      this.productosCarrito.splice(index, 1);
      //borro pero no del prestashop (base de datos)
    }
  }
  realizarCompra() {
    // Aquí redirigimos al usuario a la página "check-out"
    this.router.navigate(['/check-out']);
  } 
}