import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-fullboodywork',
  templateUrl: './fullboodywork.page.html',
  styleUrls: ['./fullboodywork.page.scss'],
  standalone:false
})
export class FullboodyworkPage implements OnInit {

  constructor(private navctrl:NavController) { }

  ngOnInit() {
  }

  exercises = [
  { name: 'Warm Up', subtitle: '05:00', image: 'assets/images/warmup.svg' },
  { name: 'Jumping Jack', subtitle: '12x', image: 'assets/images/jumpingJack.svg' },
  { name: 'Skipping', subtitle: '15x', image: 'assets/images/skipgirl.svg' },
  { name: 'Squats', subtitle: '20x', image: 'assets/images/warmup.svg' },
  { name: 'Arm Raises', subtitle: '00:53', image: 'assets/images/jumpingJack.svg' },
  { name: 'Rest and Drink', subtitle: '02:00', image: 'assets/images/warmup.svg' },
];

goback(){
   this.navctrl.navigateBack('workout-track');
}
goNext(){
  this.navctrl.navigateForward('workout-schedule');
}
}
