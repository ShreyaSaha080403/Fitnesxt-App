import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-onboard3',
  templateUrl: './onboard3.page.html',
  styleUrls: ['./onboard3.page.scss'],
  standalone:false
})
export class Onboard3Page implements OnInit {

  constructor(private navctrl:NavController) { }

  ngOnInit() {
  }
  goNext(){
   this.navctrl.navigateForward('/onboard4');
  }
}
