import { Component, OnInit , ViewChild, ElementRef, AfterViewInit} from '@angular/core';
import { IonContent, NavController } from '@ionic/angular';
import {
  Chart,
  LineController,
  LineElement,
  PointElement,
  LinearScale,
  Title,
  CategoryScale,
  Tooltip
} from 'chart.js';

Chart.register(LineController, LineElement, PointElement, LinearScale, Title, CategoryScale, Tooltip);

@Component({
  selector: 'app-workout-track',
  templateUrl: './workout-track.page.html',
  styleUrls: ['./workout-track.page.scss'],
  standalone:false
})
export class WorkoutTrackPage implements OnInit,AfterViewInit {


  constructor(private navctrl:NavController) { }

  ngOnInit() {
  }

  backDash(){
     this.navctrl.navigateRoot('tabs/dashboard');
  }

  ngAfterViewInit() {
    const ctx = document.getElementById('workoutChart') as HTMLCanvasElement;
  new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
      datasets: [{
        label: 'Workout %',
        data: [20, 40, 60, 50, 80, 95, 30],
        borderColor: '#fff',
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        tension: 0.4,
        fill: true,
        pointRadius: 4,
        pointBackgroundColor: '#fff',
        pointHoverRadius: 6,
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false }
      },
      scales: {
        y: {
          position: 'right',
          ticks: {
            color: '#fff',
            callback: (value) => value + '%'
          },
          grid: {
            color: 'rgba(255,255,255,0.1)'
          }
        },
        x: {
          ticks: {
            color: '#fff'
          },
          grid: {
            display: false
          }
        }
      }
    }
  });
  }
  fullbodWork(){
    this.navctrl.navigateForward('fullboodywork');
  }

  goWorkoutschedule(){
    this.navctrl.navigateForward('workout-schedule');
  }

}


  // presentingEl: HTMLElement | undefined;

  // @ViewChild(IonContent, { static: true }) content!: IonContent;

  // async ionViewDidEnter() {
  //   this.presentingEl = await this.content.getScrollElement();
  // }