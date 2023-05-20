import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';



@Component({
  standalone:true,
  selector: 'app-bottom-vavigation',
  templateUrl: './bottom-vavigation.component.html',
  styleUrls: ['./bottom-vavigation.component.scss'],
  imports:[IonicModule,RouterModule],
})
export class BottomVavigationComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
