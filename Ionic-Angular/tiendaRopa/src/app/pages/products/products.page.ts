import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ApiService } from 'src/app/api.service';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { FooterComponent } from 'src/app/components/footer/footer.component';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule,HeaderComponent,FooterComponent]
})
export class ProductsPage implements OnInit {

  recojoProductos: any;
  constructor( private apiService: ApiService) {}

  ngOnInit(){
    this.getProductos();
    
  }
  getProductos() {
    this.apiService.getProducts().subscribe((response:any) => {
      console.log(response.products); //reponse.products
      this.recojoProductos = response.products;
      
    })
  }

 /*  remove() {
    
  } */

}
