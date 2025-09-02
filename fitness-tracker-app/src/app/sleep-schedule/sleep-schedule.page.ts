import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-sleep-schedule',
  templateUrl: './sleep-schedule.page.html',
  styleUrls: ['./sleep-schedule.page.scss'],
  standalone:false
})
export class SleepSchedulePage implements OnInit {
  sleepPercentage = 92; 

  constructor(private navctrl:NavController) { }

  ngOnInit() {
  }
  weekSchedule = [
  { day: 'Mon', date: '11', selected: false },
  { day: 'Tue', date: '12', selected: false },
  { day: 'Wed', date: '13', selected: false },
  { day: 'Thurs', date: '14', selected: true },
  { day: 'Fri', date: '15', selected: false },
  { day: 'Sat', date: '16', selected: false },
  { day: 'Sun', date: '17', selected: false },
];

selectDate(selectedDay: any) {
  this.weekSchedule.forEach((d) => (d.selected = false));
  selectedDay.selected = true;
}

add(){
this.navctrl.navigateForward('add-alarm');
}
goBack(){
  this.navctrl.navigateBack('sleep-track');
}
}
