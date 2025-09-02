import { Component } from '@angular/core';
import { StorageService } from '../services/storage.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {
  username: string = '';

  constructor(private storageService:StorageService, private navctrl: NavController) {}

  async ngOnInit() {
  const name = await this.storageService.get('username');
  console.log('Username from storage:', name); 
  this.username = name ? name : 'User';
}
  goToNotifications() {
    this.navctrl.navigateForward('');
  }
    
}
