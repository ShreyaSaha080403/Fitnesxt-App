import { Component, OnInit, AfterViewInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NavController } from '@ionic/angular';
import { StorageService } from '../services/storage.service';
import {
  Chart,
  LineElement,
  LineController,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Filler
} from 'chart.js';

Chart.register(LineElement, LineController, CategoryScale, LinearScale, PointElement, Tooltip, Filler);

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
  standalone: false
})
export class DashboardPage implements OnInit, AfterViewInit {

    constructor(private navctrl: NavController , private http: HttpClient,private storageService: StorageService) {}

  totalWaterIntakeMl: number = 0;
waterIntakePercentage: number = 0;

intakeData: { time: string; amount: string }[] = [];

  //calculate %bar water drank
  async loadWaterIntake() {
  const userId = await this.storageService.get('userId');
  if (!userId) {
    console.error('No userId found');
    return;
  }

  // 1. Sync from Google Fit
  this.http.post('http://localhost:3000/sync-hydration', { userId }).subscribe({
    next: () => {
      // 2. After sync, get today's water intake
      this.http.get<any>(`http://localhost:3000/water-intake/${userId}`).subscribe({
        next: (data) => {
          console.log('💧 Water data:', data);
          this.totalWaterIntakeMl = data.totalIntakeMl;
          const target = data.targetMl || 4000;

          this.waterIntakePercentage = Math.min((this.totalWaterIntakeMl / target) * 100, 100);

          // Optional: group intake by time (if needed)
          this.intakeData = data.intakeEntries.map((entry: any) => {
            console.log('⏱️ created_at raw:', entry.created_at); 
           const created = new Date(entry.created_at);

  // Defensive check
  if (isNaN(created.getTime())) {
    return {
      time: 'Invalid time',
      amount: `${entry.ml}ml`
    };
  }

  const hours = created.getHours();
  const minutes = created.getMinutes();

  const timeLabel = this.formatTimeRange(hours, minutes);

  return {
    time: timeLabel,
    amount: `${entry.ml}ml`
  };
          });
        },
        error: (err) => console.error('❌ Failed to fetch water intake:', err)
      });
    },
    error: (err) => console.error('❌ Sync hydration failed:', err)
  });
}

formatTimeRange(hour: number, minute: number): string {
  const h12 = hour % 12 || 12;
  const ampm = hour < 12 ? 'am' : 'pm';
  const paddedMin = minute.toString().padStart(2, '0');
  return `${h12}${ampm} (${hour}:${paddedMin})`;
}




   ngOnInit() {
  this.loadWaterIntake();
  this.loadDailySteps();
  this.loadHeartRate();
    this.loadSleepData();
  }


  currentSteps = 0;
  totalSteps = 10000;
  radius = 60;
  circumference = 2 * Math.PI * this.radius;

  async loadDailySteps(){
    const userId = await this.storageService.get('userId');
    if (!userId) {
      console.error('No userId found in storage');
      return;
    }
    
    this.http.post('http://localhost:3000/sync-steps', { userId }).subscribe({
    next: () => {
      console.log('✅ Step sync complete');

      // Now fetch updated data from DB
      this.http.get<{ totalStepsWalked: number, targetSteps: number }>(
        `http://localhost:3000/steps/${userId}`
      ).subscribe({
        next: (response) => {
          console.log('✅ Step fetch after sync:', response.totalStepsWalked);
          this.currentSteps = response.totalStepsWalked;
          this.totalSteps = response.targetSteps;
        },
        error: (err) => console.error('❌ Failed to fetch steps after sync:', err)
      });
    },
    error: (err) => console.error('❌ Sync error:', err)
  });

  }


heartrate: number = 0; 

async loadHeartRate() {
  const userId = await this.storageService.get('userId');
  if (!userId) {
    console.error('No userId found in storage');
    return;
  }
  this.http.post('http://localhost:3000/sync-heartrate', { userId }).subscribe({
    next: () => {
      // Step 2: Fetch from your DB after sync
      this.http.get<{ bpm: number, recorded_at: string }>(`http://localhost:3000/heartrate/${userId}`).subscribe({
        next: (response) => {
          console.log('❤️ Heart Rate Fetched:', response);
          this.heartrate = Math.round(response.bpm); // Round if needed
        },
        error: (err) => console.error('❌ Failed to fetch heart rate:', err)
      });
    },
    error: (err) => console.error('❌ Failed to sync heart rate:', err)
  });
}
  


totalSleep: number = 0;
sleepHours: number = 0;
sleepMinutes: number = 0;

async loadSleepData() {
  const userId = await this.storageService.get('userId');
  if (!userId) {
    console.error('No userId found in storage');
    return;
  }

  this.http.post('http://localhost:3000/sync-sleep', { userId }).subscribe({
    next: () => {
      this.http.get<any>(`http://localhost:3000/sleep/${userId}`).subscribe({
        next: (data) => {
          console.log('😴 Sleep data:', data);
          this.totalSleep = data.totalSleepHours;

          // ✅ Move conversion logic here, after totalSleep is updated
          this.sleepHours = Math.floor(this.totalSleep);
          this.sleepMinutes = Math.round((this.totalSleep - this.sleepHours) * 60);
        },
        error: (err) => console.error('❌ Failed to fetch sleep data:', err)
      });
    },
    error: (err) => console.error('❌ Failed to sync sleep data:', err)
  });
}

  

  ngAfterViewInit() {
    const canvas = document.getElementById('lineChart') as HTMLCanvasElement;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    //const dataPoints = [72, 69, 76, 78, 74, 76, 78];
    //const labels = ['1m', '2m', '3m', '4m', '5m', '6m', '7m'];
    const dataPoints = Array.from({ length: 50 }, () => Math.floor(Math.random() * 40) + 60);

    const labels = Array.from({ length: 70 }, (_, i) => `${i + 1}m`);


    new Chart(ctx, {
      type: 'line',
      data: {
        labels,
        datasets: [{
          label: 'Heart Rate',
          data: dataPoints,
          borderColor: '#92A3FD',
          backgroundColor: 'rgba(146, 163, 253, 0.3)',
          fill: true,
          tension: 0,
          pointBackgroundColor: '#C58BF2',
          pointBorderColor: '#fff',
          pointBorderWidth: 0,
          pointRadius: 0,
          pointHoverRadius: 5
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          x: {
            display:false,
            grid: { display: false },
            ticks: {
              display: false
            }
          },
          y: { display: false }
        },
        plugins: {
          legend: { display: false },
          tooltip: {
            enabled: true,
            backgroundColor: '#C58BF2',
            titleFont: { family: 'Poppins', size: 12, weight: 'bold' },
            bodyFont: { family: 'Poppins', size: 12 },
            displayColors: false,
            callbacks: {
              label: function (context) {
                return `${context.raw} BPM`;
              }
            }
          }
        },
        elements: {
          point: { hoverBackgroundColor: '#fff' }
        }
      }
    });




    //chart2
    const weeklyCanvas = document.getElementById('weeklyChart') as HTMLCanvasElement;
if (!weeklyCanvas) return;

const wctx = weeklyCanvas.getContext('2d');
if (!wctx) return;

const weekLabels = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const blueLine = [20, 60, 100, 50, 70, 80, 60];
const redLine = [50, 40, 60, 30, 80, 70, 90];

new Chart(wctx, {
  type: 'line',
  data: {
    labels: weekLabels,
    datasets: [
      {
        data: blueLine,
        borderColor: '#92A3FD',
        backgroundColor: 'rgba(146, 163, 253, 0.1)',
        fill: false,
        tension: 0.5,
        pointBackgroundColor: '#ccd6fd',
        pointRadius: 0,
        pointHoverRadius: 0
      },
      {
        data: redLine,
        borderColor: '#C58BF2',
        backgroundColor: 'rgba(197, 139, 242, 0.1)',
        fill: false,
        tension: 0.5,
        pointBackgroundColor: '#C58BF2',
        pointRadius: 0,
        pointHoverRadius: 0
      }
    ]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        grid: { display: false },
        ticks: {
          font: {
            family: 'Poppins',
            size: 12,
            weight: 'bold'
          },
          color: (ctx) => (ctx.tick.label === 'Fri' ? '#92A3FD' : '#7B6F72')
        }
      },
      y: {
        position: 'right',
        min: 0,
        max: 100,
        ticks: {
          stepSize: 20,
          callback: value => `${value}%`,
          font: {
            family: 'Poppins',
            size: 12
          },
          color: '#C5C5C5'
        },
        grid: {
        drawTicks: false,
       color: '#f0f0f0',
        }
      }
    },
    plugins: {
      legend: { display: false },
      tooltip: {
        backgroundColor: '#92A3FD',
        displayColors: false,
        callbacks: {
          label: ctx => `${ctx.raw}%`
        }
      }
    },
    elements: {
      line: {
        borderWidth: 2
      }
    }
  }
});
  } 

  goToNotifications() {
    this.navctrl.navigateForward('/notification');
  }

  goTo() {}
}
