import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { IonRouterOutlet } from '@ionic/angular';

@Component({
  selector: 'app-moreinfo',
  templateUrl: './moreinfo.page.html',
  styleUrls: ['./moreinfo.page.scss'],
  standalone:false
})
export class MoreinfoPage implements OnInit {
  showDatePicker = false;
  dob: string | undefined;
   weight: number | null = null;
  height: number | null = null;
  gender: string = '';

  constructor(private navctrl:NavController,private routerOutlet: IonRouterOutlet) { }
  ionViewWillLeave() {
    // Blur any focused elements when leaving the page
    const focusedButton = document.querySelector('#ion-sel-0') as HTMLElement;
    if (focusedButton) {
      focusedButton.blur();
    }
    
    // Alternative: Blur all potentially focused elements
    document.querySelectorAll('button, [tabindex], input').forEach(el => {
      if (el === document.activeElement) (el as HTMLElement).blur();
    });
  }

  ngOnInit() {
  }
   toggleDatePicker() {
    this.showDatePicker = !this.showDatePicker;
  }
  onDateSelected() {
    this.showDatePicker = false;
  }
  next(){
     this.navctrl.navigateForward('/login');
  }


}
