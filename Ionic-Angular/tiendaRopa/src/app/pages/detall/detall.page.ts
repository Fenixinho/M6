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
  producto:any = {name: 'josemari'}
  key : string = "JEWNJ26VXU8GXS11K2YSCNJTME1WHUVL";

  constructor(private route: ActivatedRoute, private apiService: ApiService, private storageService: StorageService) { 
    this.id = this.route.snapshot.paramMap.get("id");
    console.log(this.id);

    //No acabo de ver es
  }

  ngOnInit() {

    this.getProducto();
  }

  getProducto() {
    this.apiService.getProduct(this.id).subscribe((response:any) => {
      //mantengo para control
      console.log(response); 
      this.producto = response.products[0];
      
    })
  }
  
  async agregarAlCarrito(producto: any) {
    // el carrito actual, recoge lo que haya o se crea vacío si no hay nada
    let carrito = JSON.parse(await this.storageService.get('carrito') || '[]');

    // Agregar el producto actual al carrito
    carrito.push(producto);

    // Guardar el carrito actualizado en el almacenamiento
    await this.storageService.set('carrito', JSON.stringify(carrito));
  }


}

