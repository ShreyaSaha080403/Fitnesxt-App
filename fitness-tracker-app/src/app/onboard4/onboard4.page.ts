import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-onboard4',
  templateUrl: './onboard4.page.html',
  styleUrls: ['./onboard4.page.scss'],
  standalone: false
})
export class Onboard4Page implements OnInit {

  constructor(private navctrl: NavController) { }

  ngOnInit() {
  }

  goNext(){
    this.navctrl.navigateForward('/onboard5');
  }

}
