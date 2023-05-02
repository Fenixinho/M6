import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [IonicModule, ExploreContainerComponent],
})
export class Tab1Page {
  constructor( private apiService: ApiService) {}

  ngOnInit(){
    this.getProductos();
    
  }
  getProductos() {
    this.apiService.getProducts().subscribe((response:any) => {
      console.log(response); //reponse.products
      
    })
  }

}


