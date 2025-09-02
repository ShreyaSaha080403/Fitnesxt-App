import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-onboard2',
  templateUrl: './onboard2.page.html',
  styleUrls: ['./onboard2.page.scss'],
  standalone:false
})
export class Onboard2Page implements OnInit {

  constructor(private navctrl:NavController) { }

  ngOnInit() {
  }
  goNext(){
     this.navctrl.navigateForward('/onboard3');
  }
}
