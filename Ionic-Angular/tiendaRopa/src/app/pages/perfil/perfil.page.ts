import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { BottomVavigationComponent } from 'src/app/components/bottom-vavigation/bottom-vavigation.component';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { defineCustomElements } from '@ionic/pwa-elements/loader';
import { PhotoService } from '../../services/photo.service'
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule,BottomVavigationComponent,HeaderComponent]
})
export class PerfilPage implements OnInit {

  photoBase64 : string | null = null;

  constructor(public photoService: PhotoService, private storageService: StorageService) { }

  async addPhotoToGallery() {
    this.photoBase64 = await this.photoService.addNewToGallery();
    this.saveToStorage();
  }
  
  async saveToStorage() {
    await this.storageService.set('imagenPerfil', this.photoBase64);
  }

  async getCurrentPhoto() {
    this.photoBase64 = await this.storageService.get('imagenPerfil');
  }

  ngOnInit() {
    defineCustomElements(window);
    this.getCurrentPhoto();
  }
  
}
