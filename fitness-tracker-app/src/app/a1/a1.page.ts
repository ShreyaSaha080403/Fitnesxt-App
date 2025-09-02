import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { Chart } from 'chart.js/auto';

@Component({
  selector: 'app-a1',
  templateUrl: './a1.page.html',
  styleUrls: ['./a1.page.scss'],
  standalone:false
})
export class A1Page implements OnInit, AfterViewInit{

  constructor() { }
  
  ngOnInit() {
  }

  @ViewChild('myChart') myChartRef!: ElementRef;
  ngAfterViewInit(){
     const ctx = this.myChartRef.nativeElement;
      
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
          label: '# of Votes',
          data: [12, 19, 3, 5, 2, 3],
          backgroundColor: [
            '#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF', '#FF9F40'
          ],
          borderWidth: 1
        }]
      },
      options: {
        layout:{  padding: 20 },
        responsive: true,
        scales: {
          y: {
            beginAtZero: true
          }
        }
        
      }
    });
  }
  
}
