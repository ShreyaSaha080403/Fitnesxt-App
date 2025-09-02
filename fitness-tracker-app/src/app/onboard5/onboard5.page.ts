import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-onboard5',
  templateUrl: './onboard5.page.html',
  styleUrls: ['./onboard5.page.scss'],
  standalone:false
})
export class Onboard5Page implements OnInit {

  constructor(private navctrl: NavController) { }

  ngOnInit() {
  }
  goNext(){
    this.navctrl.navigateForward('/register');
  }
}
