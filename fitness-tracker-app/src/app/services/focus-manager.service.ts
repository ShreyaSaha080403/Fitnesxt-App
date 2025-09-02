import { Injectable } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { Platform } from '@ionic/angular';

@Injectable({ providedIn: 'root' })
export class FocusManagerService {
  constructor(private router: Router, private platform: Platform) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        this.blurActiveElement();
      }
    });
  }

  blurActiveElement() {
    setTimeout(() => {
      (document.activeElement as HTMLElement)?.blur();
    }, 50);
  }
}