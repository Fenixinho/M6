import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { BottomVavigationComponent } from 'src/app/components/bottom-vavigation/bottom-vavigation.component';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { HeaderComponent } from 'src/app/components/header/header.component';

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

  constructor(private route: ActivatedRoute, private apiService: ApiService) { 
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

}

