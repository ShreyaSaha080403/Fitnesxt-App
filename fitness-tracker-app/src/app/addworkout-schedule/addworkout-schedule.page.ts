import { Component, OnInit,ViewChild } from '@angular/core';
import { NavController } from '@ionic/angular';
import { IonDatetime } from '@ionic/angular';


@Component({
  selector: 'app-addworkout-schedule',
  templateUrl: './addworkout-schedule.page.html',
  styleUrls: ['./addworkout-schedule.page.scss'],
  standalone:false
})
export class AddworkoutSchedulePage implements OnInit {

  hours = Array.from({ length: 12 }, (_, i) => i + 1);
minutes = Array.from({ length: 60 }, (_, i) => i.toString().padStart(2, '0'));
meridians = ['AM', 'PM'];

@ViewChild('datePicker', { static: false }) datePicker!: IonDatetime;

  selectedDate: string = new Date().toISOString();
  showDatePicker = false;

  constructor(private navctrl:NavController) { }

  ngOnInit() {
  }
   goBack(){
     this.navctrl.navigateBack('workout-schedule');
   }

  openDatePicker() {
    this.showDatePicker = true;
  }

  onDateChange(event: any) {
    this.selectedDate = event.detail.value;
    this.showDatePicker = false;
  }
}
