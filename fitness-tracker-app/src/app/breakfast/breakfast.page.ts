import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-breakfast',
  templateUrl: './breakfast.page.html',
  styleUrls: ['./breakfast.page.scss'],
  standalone:false
})
export class BreakfastPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  categories = [
  { name: 'Salad', icon: 'assets/images/salad.svg' },
  { name: 'Cake', icon: 'assets/images/pieee.svg' },
  { name: 'Pie', icon: 'assets/images/pieee.svg' },
  { name: 'Smoothie', icon: 'assets/images/pieee.svg' },
];

recommended = [
  {
    title: 'Honey Pancake',
    desc: 'Easy | 30mins | 180kCal',
    image: 'assets/images/pancake3.svg',
  },
  {
    title: 'Canai Bread',
    desc: 'Easy | 20mins | 250kCal',
    image: 'assets/images/canai bread.svg',
  },
];


}
