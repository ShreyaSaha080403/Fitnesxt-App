import { Component, OnInit, AfterViewInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import {
  Chart,
  LineController,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Filler,
  Tooltip,
  ChartType,
  PluginChartOptions,
  ChartTypeRegistry,
} from 'chart.js';

Chart.register(LineController, LineElement, PointElement, LinearScale, CategoryScale, Filler, Tooltip);

@Component({
  selector: 'app-sleep-track',
  templateUrl: './sleep-track.page.html',
  styleUrls: ['./sleep-track.page.scss'],
  standalone: false,
})
export class SleepTrackPage implements OnInit, AfterViewInit {
  lastNightSleep = '8h 17m';
  bedtime = '09:00pm';
  bedtimeCountdown = 'in 6 hours 22 minutes';
  alarm = '05:10am';
  alarmCountdown = 'in 14 hours 30 minutes';

  constructor(private navctrl: NavController) {}

  ngOnInit() {}

  ngAfterViewInit() {
    const canvas = document.getElementById('lineChartt') as HTMLCanvasElement;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

  const verticalLinePlugin = {
  id: 'verticalLinePlugin',
  afterDatasetsDraw(
    chart:  Chart<'line'>,
    args: unknown, // You can also replace 'unknown' with the correct type if needed
    pluginOptions: PluginChartOptions<keyof ChartTypeRegistry>
  ) {
    const { ctx, tooltip, chartArea: { top, bottom } } = chart as any; // 'as any' to suppress errors if needed

    if (!tooltip || !tooltip.dataPoints || tooltip.dataPoints.length === 0) return;

    const x = tooltip.dataPoints[0].element.x;

    ctx.save();
    ctx.beginPath();
    ctx.setLineDash([4, 4]); // dotted line
    ctx.moveTo(x, top);
    ctx.lineTo(x, bottom);
    ctx.lineWidth = 1;
    ctx.strokeStyle = '#9DCEFF';
    ctx.stroke();
    ctx.restore();
  }
};

    const data = [2, 5, 2.5, 5, 4, 4.5, 8];
    const labels = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    new Chart(ctx, {
      type: 'line',
      data: {
        labels,
        datasets: [
          {
            data,
            fill: true,
            tension: 0.4,
            borderColor: '#9DCEFF',
            borderWidth: 2,
            pointRadius: 0,
            backgroundColor: (context) => {
              const chart = context.chart;
              const { ctx, chartArea } = chart;
              if (!chartArea) return undefined;

              const gradient = ctx.createLinearGradient(0, chartArea.top, 0, chartArea.bottom);
              gradient.addColorStop(0, 'rgb(134,171,254)');
              gradient.addColorStop(1, 'rgba(157, 206, 255, 0)');
              return gradient;
            },
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
                weight: 'normal',
              },
            },
            border: { display: false },
          },
          y: {
            position: 'right',
            min: 0,
            max: 10,
            ticks: {
              stepSize: 2,
              callback: (tickValue) => `${tickValue}h`,
              color: '#7B6F72',
              font: {
                family: 'Poppins',
                size: 12,
              },
            },
            grid: {
              color: '#E0E0E0',
              drawTicks: false,
            },
            border: { display: false },
          },
        },
        plugins: {
          legend: { display: false },
          tooltip: { enabled: true,mode: 'index',      
                      intersect: false },
          
        },
      },
      plugins: [verticalLinePlugin]
    });
  }

  backDash() {
    this.navctrl.navigateRoot('/tabs/dashboard');
  }

  goSchedule() {
    this.navctrl.navigateForward('sleep-schedule');
  }
}
