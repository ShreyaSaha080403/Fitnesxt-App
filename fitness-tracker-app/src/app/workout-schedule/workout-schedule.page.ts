import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-workout-schedule',
  templateUrl: './workout-schedule.page.html',
  styleUrls: ['./workout-schedule.page.scss'],
  standalone:false
})
export class WorkoutSchedulePage implements OnInit {

  selectedDate = new Date(); // today
  days: { label: string; date: number; isActive: boolean }[] = [];
  timeline = [
  { time: '06:00 AM', workout: null },
  { time: '07:00 AM', workout: { name: 'Ab Workout', time: '7:30am', color: 'purple' } },
  { time: '08:00 AM', workout: null },
  { time: '09:00 AM', workout: { name: 'Upperbody Workout', time: '9am', color: 'purple' }, isCurrent: true },
  { time: '10:00 AM', workout: null },
  { time: '11:00 AM', workout: null },
  { time: '12:00 AM', workout: null },
  { time: '01:00 PM', workout: null },
  { time: '02:00 PM', workout: null },
  { time: '03:00 PM', workout: { name: 'Lowerbody Workout', time: '3pm', color: 'gray' } },
  { time: '04:00 PM', workout: null },
  { time: '05:00 PM', workout: null },
  { time: '06:00 PM', workout: null },
  { time: '07:00 PM', workout: null },
  { time: '08:00 PM', workout: null },
];


  constructor(private navctrl:NavController) { }

  ngOnInit() {
    this.generateWeekDays(this.selectedDate);
  }

  generateWeekDays(baseDate: Date) {
  const startOfWeek = new Date(baseDate);
  startOfWeek.setDate(baseDate.getDate() - baseDate.getDay() + 2); // starting from Tuesday
  this.days = [];

  for (let i = 0; i < 6; i++) {
    const day = new Date(startOfWeek);
    day.setDate(startOfWeek.getDate() + i);
    this.days.push({
      label: day.toLocaleDateString('en-US', { weekday: 'short' }),
      date: day.getDate(),
      isActive: i === 3, // mock active on Friday
    });
  }
}

goToPreviousMonth() {
  this.selectedDate.setMonth(this.selectedDate.getMonth() - 1);
  this.generateWeekDays(this.selectedDate);
}

goToNextMonth() {
  this.selectedDate.setMonth(this.selectedDate.getMonth() + 1);
  this.generateWeekDays(this.selectedDate);
}
   goBack(){
      this.navctrl.navigateBack('fullboodywork');
   }
   goNext(){
    this.navctrl.navigateForward('addworkout-schedule')
   }
}
