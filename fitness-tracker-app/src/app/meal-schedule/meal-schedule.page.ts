import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-meal-schedule',
  templateUrl: './meal-schedule.page.html',
  styleUrls: ['./meal-schedule.page.scss'],
  standalone:false
})
export class MealSchedulePage implements OnInit {

  constructor(private navctrl:NavController) { }

  ngOnInit() {
  }

  days = [
  { name: 'Mon', date: 10, active: false },
  { name: 'Tue', date: 11, active: false },
  { name: 'Wed', date: 12, active: false },
  { name: 'Thu', date: 13, active: false },
  { name: 'Fri', date: 14, active: true }, // default selected
  { name: 'Sat', date: 15, active: false },
  { name: 'Sun', date: 16, active: false },
];

selectDay(day: any) {
  this.days.forEach(d => d.active = false);
  day.active = true;
  // Trigger any change here (fetch meals, etc.)
}
goToPreviousWeek() {
  
}

goToNextWeek() {
 
}

goBack(){
  this.navctrl.navigateBack('meal-plan')
}

}
