import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-add-alarm',
  templateUrl: './add-alarm.page.html',
  styleUrls: ['./add-alarm.page.scss'],
  standalone:false
})
export class AddAlarmPage implements OnInit {

  constructor(private navctrl:NavController) { }

  ngOnInit() {
  }
  goBack(){
    this.navctrl.navigateBack('sleep-schedule')
  }
}
