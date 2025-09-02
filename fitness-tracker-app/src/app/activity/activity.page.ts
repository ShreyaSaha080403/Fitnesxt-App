import { Component, OnInit ,AfterViewInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Chart, BarController, BarElement, CategoryScale, LinearScale, Tooltip } from 'chart.js';

Chart.register(BarController, BarElement, CategoryScale, LinearScale, Tooltip);
@Component({
  selector: 'app-activity',
  templateUrl: './activity.page.html',
  styleUrls: ['./activity.page.scss'],
  standalone: false
})
export class ActivityPage implements OnInit, AfterViewInit {

  constructor(private navctrl:NavController) { }

  ngOnInit() {
  }
   goBack(){
     //this.navctrl.navigateRoot('/tabs/dashboard');
   }
  //graph
  ngAfterViewInit() {
   const canvas = document.getElementById('barChart') as HTMLCanvasElement | null;

  if (!canvas) {
    console.error('Canvas element not found');
    return;
  }

  const ctx = canvas.getContext('2d');
  if (!ctx) {
    console.error('2D context not available');
    return;
  }

  const dataValues = [20, 40, 30, 60, 50, 35, 55];
  const labels = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels,
      datasets: [
        {
          label: 'Activity',
          data: dataValues,
          borderRadius: 20,
          barThickness: 30,

          backgroundColor: function(context) {
             const chart = context.chart;
             const { ctx, chartArea } = chart;
             if (!chartArea || !ctx) return undefined;

             const labels = chart.data.labels ?? [];
             const labelCount = labels.length || 1;
              const barWidth = (chartArea.right - chartArea.left) / labelCount;
             const barLeft = chartArea.left + context.dataIndex * barWidth;
             const gradient = ctx.createLinearGradient(barLeft, 0, barLeft + barWidth, 0);

  
              if (context.dataIndex % 2 === 0) {
                gradient.addColorStop(0, '#9DCEFF');
                 gradient.addColorStop(1, '#92A3FD');
                } else {
                    gradient.addColorStop(0, '#EEA4CE');
                     gradient.addColorStop(1, '#C58BF2');
                      }
             return gradient;
           }
        },
      ],

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
          display: false,
        },
      },
      plugins: {
        legend: { display: false },
        tooltip: { enabled: false },
      },
    },
  });
  }

}
