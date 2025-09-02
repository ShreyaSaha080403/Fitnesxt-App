import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { NavController } from '@ionic/angular';
import { StorageService } from '../services/storage.service';
@Component({
  selector: 'app-oauth-callback',
  templateUrl: './oauth-callback.page.html',
  styleUrls: ['./oauth-callback.page.scss'],
  standalone:false
})
export class OauthCallbackPage implements OnInit {

  constructor(private route: ActivatedRoute,
    private http: HttpClient,
    private navCtrl: NavController,
    private storage: StorageService) { }

  async ngOnInit() {
    await this.storage.init(); 
    const code = this.route.snapshot.queryParamMap.get('code');
    console.log('📨 OAuth code from URL:', code);
    const userId = await this.storage.get('userId');
    console.log('📦 userId from storage:', userId);

    if (code && userId) {
      this.http.post('http://localhost:3000/exchange-code', {
        code,
        userId
      }).subscribe({
        next: () => {
          alert("✅ Google Fit connected successfully!");
          this.navCtrl.navigateForward('/tabs/dashboard');
        },
        error: (err) => {
          console.error("Exchange failed:", err);
          alert("❌ Google Fit linking failed.");
          this.navCtrl.navigateBack('/welcome');
        }
      });
    } else {
      alert("Missing authorization code or user.");
      this.navCtrl.navigateBack('/welcome');
    }
  }

}
