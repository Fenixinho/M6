import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ApiService } from 'src/app/services/api.service';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { BottomVavigationComponent } from 'src/app/components/bottom-vavigation/bottom-vavigation.component';
import { DetallPage } from '../detall/detall.page';
import { RouterLink } from '@angular/router';



@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule,HeaderComponent,BottomVavigationComponent,RouterLink]
})
export class ProductsPage implements OnInit {
  //Llave estática para no complicarme
  key : string = "JEWNJ26VXU8GXS11K2YSCNJTME1WHUVL";

  //variable que recoge productos
  recojoProductos: any;
  constructor( private apiService: ApiService, ) {}

  ngOnInit(){
    this.getProductos();
    
  }
  getProductos() {
    this.apiService.getProducts().subscribe((response:any) => {
     
      this.recojoProductos = response.products;
      
    })
  }

}
