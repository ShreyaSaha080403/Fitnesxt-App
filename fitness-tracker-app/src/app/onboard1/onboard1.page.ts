import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-onboard1',
  templateUrl: './onboard1.page.html',
  styleUrls: ['./onboard1.page.scss'],
  standalone:false
})
export class Onboard1Page implements OnInit {

  constructor(private navctrl: NavController) { }

  ngOnInit() {
  }
  next(){
    this.navctrl.navigateForward('/onboard2');
  }

}
