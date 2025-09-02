import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-camera',
  templateUrl: './camera.page.html',
  styleUrls: ['./camera.page.scss'],
  standalone: false
})
export class CameraPage implements OnInit {

  imageGroups = [
  {
    date: '2 June',
    images: [
      'assets/images/Rectangle 5834.svg',
      'assets/images/Rectangle 5834.svg',
      'assets/images/Rectangle 5834.svg',
    ],
  },
  {
    date: '5 May',
    images: [
      'assets/images/Rectangle 5834.svg',
      'assets/images/Rectangle 5834.svg',
      'assets/images/Rectangle 5834.svg',
    ],
  },
];

  constructor() { }

  ngOnInit() {
  }

}
