import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { NavigationStart, Router } from '@angular/router';
import { StorageService } from './services/storage.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: false,
})
export class AppComponent {
  constructor(private router: Router,private platform:Platform,private storageService: StorageService) {
    this.setupGlobalFocusHandling();
  }


  async ngOnInit() {
    await this.storageService.init();
  }

  private setupGlobalFocusHandling() {
    // Handle router navigation
    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        this.blurAllFocusableElements();
      }
    });

    // Handle Ionic's hardware back button
    this.platform.backButton.subscribeWithPriority(9999, () => {
      this.blurAllFocusableElements();
    });
  }

  private blurAllFocusableElements() {
    requestAnimationFrame(() => {
      const activeElement = document.activeElement as HTMLElement;
      if (activeElement) {
        activeElement.blur();
      }
      
      // Blur all Ionic buttons
      document.querySelectorAll('.button-native').forEach(btn => {
        (btn as HTMLElement).blur();
      });
    });
  }
}
