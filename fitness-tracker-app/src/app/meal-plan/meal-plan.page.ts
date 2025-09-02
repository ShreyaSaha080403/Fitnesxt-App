import { Component, OnInit, AfterViewInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import type { ChartType } from 'chart.js';

import {
  Chart,
  LineElement,
  LineController,
  PointElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Filler,
} from 'chart.js';
Chart.register(LineElement, LineController, PointElement, CategoryScale, LinearScale, Tooltip, Filler);

@Component({
  selector: 'app-meal-plan',
  templateUrl: './meal-plan.page.html',
  styleUrls: ['./meal-plan.page.scss'],
  standalone:false
})
export class MealPlanPage implements OnInit,AfterViewInit {

  constructor(private navctrl: NavController) { }

  ngOnInit() {
  }
  
  backDash(){
     this.navctrl.navigateRoot('tabs/dashboard');
  }

  mealschedule(){
    this.navctrl.navigateForward('meal-schedule')
  }

  foodOptions = [
  {
    title: 'Breakfast',
    subtitle: '120+ Foods',
    image: 'assets/images/Breakfastpie.svg',
    bgColor: '#e6ebff'
  },
  {
    title: 'Lunch',
    subtitle: '130+ Foods',
    image: 'assets/images/LunchChicken.svg',
    bgColor: '#f8e7f7'
  }
];

//graph
 ngAfterViewInit() {
    
    const canvas = document.getElementById('mealChart') as HTMLCanvasElement;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const labels = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const dataValues = [70, 50, 65, 40, 90, 30, 60];

    // Determine max and min indexes
    const maxIndex = dataValues.indexOf(Math.max(...dataValues));
    const minIndex = dataValues.indexOf(Math.min(...dataValues));

    new Chart(ctx, {
      type: 'line',
      data: {
        labels,
        datasets: [{
          data: dataValues,
          borderColor: '#86abfe',
          backgroundColor: 'transparent',
          borderWidth: 2,
          tension: 0.5,
          pointRadius: 5,
          pointBackgroundColor: '#9DCEFF',
          pointBorderColor: '#fff',
          pointBorderWidth: 2,
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          x: {
            grid: { display: false },
            ticks: {
              color: '#7B6F72',
              font: {
                family: 'Poppins',
                size: 12,
                weight: 'bold',
              },
            },
          },
          y: {
            position: 'right',
             border: {
    display: false
  },
  grid: {
    color: '#eee'
  },
            min: 0,
            max: 100,
            ticks: {
              stepSize: 20,
              callback: (val) => `${val}%`,
              color: '#7B6F72',
              font: {
                family: 'Poppins',
                size: 12,
              },
            },
          },
        },
        plugins: {
          tooltip: { enabled: false },
          legend: { display: false },
        },
        elements: {
          line: {
            borderJoinStyle: 'round',
          },
        },
      },
      plugins: [{
        id: 'line-blur',
        beforeDraw: (chart) => {
          const ctx = chart.ctx;
          const dataset = chart.data.datasets[0];
          const meta = chart.getDatasetMeta(0);
           if (!meta || !meta.dataset) return;

          ctx.save();
          ctx.shadowColor = 'rgba(157, 206, 255, 0.6)';
          ctx.shadowBlur = 10;
          ctx.lineWidth = dataset.borderWidth as number;
          ctx.strokeStyle ='transparent';

          const points = meta.data;
          ctx.beginPath();
          points.forEach((point, i) => {
            const x = point.x;
            const y = point.y;
            if (i === 0) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);
          });
          ctx.stroke();
          ctx.restore();
          //(meta.dataset as any).draw = () => {};
        }
      }]
    });
  }


}
