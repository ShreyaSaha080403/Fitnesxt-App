import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
  standalone:false
})
export class WelcomePage implements OnInit {

  userName = 'Stefani';
  
  constructor(private navctrl: NavController, private storageService:StorageService) { }

  async ngOnInit() {
     this.userName = await this.storageService.get('username') || 'User';

  const storedUserId = await this.storageService.get('userId');
  console.log('📦 Stored userId in welcome page:', storedUserId);
  }

  goToHome(){
    this.navctrl.navigateForward('/tabs/dashboard');
  }
  
  connectGoogleFit() {
  const clientId = '736000953433-bce5t05g3a6n149l1tl3n9t9l6dovre8.apps.googleusercontent.com';
  const redirectUri = 'http://localhost:8100/oauth-callback'; // what you registered in Google Cloud Console
  const scope = encodeURIComponent('https://www.googleapis.com/auth/fitness.activity.read https://www.googleapis.com/auth/fitness.heart_rate.read https://www.googleapis.com/auth/fitness.nutrition.read https://www.googleapis.com/auth/fitness.sleep.read');
  const accessType = 'offline'; // Required for refresh token
  const responseType = 'code';
  const prompt = 'consent';

  const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=${responseType}&scope=${scope}&access_type=${accessType}&prompt=${prompt}`;
console.log("🔗 Redirecting to:", authUrl);
  window.location.href = authUrl;
}
}
