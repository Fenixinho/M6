import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { BottomVavigationComponent } from 'src/app/components/bottom-vavigation/bottom-vavigation.component';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { defineCustomElements } from '@ionic/pwa-elements/loader';
import { PhotoService } from '../../services/photo.service'


@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule,BottomVavigationComponent,HeaderComponent]
})
export class PerfilPage implements OnInit {

  photoBase64 : any = null;

  constructor(public photoService: PhotoService) { }

  async addPhotoToGallery() {
    this.photoBase64 = await this.photoService.addNewToGallery();
    console.log(this.photoBase64);
  }
  
  saveToStorage() {

  }

  ngOnInit() {
    defineCustomElements(window);
  }
  
}
