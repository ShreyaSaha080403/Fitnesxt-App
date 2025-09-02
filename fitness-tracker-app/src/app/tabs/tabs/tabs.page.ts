import { Component, OnInit,ViewChild } from '@angular/core';
import { IonTabs } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
  standalone: false
})
export class TabsPage implements OnInit {

  constructor(private router: Router) { }
   activeTab: string = 'dashboard';
  ionViewWillEnter() {
    const currentRoute = this.router.url.split('/tabs/')[1];
    this.activeTab = currentRoute || 'dashboard';
  }

  setActiveTab(tab: string) {
    this.activeTab = tab;
  }

  ngOnInit() {
  }

  showSearchPopup = false;
  searchOptions = [{ label: 'Workout Tracker', route: '/workout-track' },
  { label: 'Meal Planner', route: '/meal-plan' },
  { label: 'Sleep Tracker', route: '/sleep-track' }];
  navigateTo(route: string) {
  this.router.navigateByUrl(route);
  this.showSearchPopup = false; // Close popup
}
  toggleSearchPopup(){
     this.showSearchPopup = !this.showSearchPopup;
  }
}
