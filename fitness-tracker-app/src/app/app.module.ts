import { NgModule, Injectable } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy, Router, NavigationStart } from '@angular/router';
import { IonicModule, IonicRouteStrategy, Platform } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { IonicStorageModule } from '@ionic/storage-angular';
import { HttpClientModule } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class FocusManager {
  constructor(private router: Router, private platform: Platform) {
    this.setupFocusHandling();
  }

  private setupFocusHandling() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        setTimeout(() => this.blurActiveElements(), 50);
      }
    });

    this.platform.backButton.subscribeWithPriority(9999, () => {
      setTimeout(() => this.blurActiveElements(), 50);
    });
  }

  blurActiveElements() {
    const activeElement = document.activeElement as HTMLElement;
    activeElement?.blur();
    document.querySelectorAll('.button-native, #ion-sel-0').forEach(el => {
      (el as HTMLElement).blur();
    });
  }
}

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot({
      // Remove custom navAnimation and use default
      // or provide a proper animation builder
    }),
    AppRoutingModule,
    IonicStorageModule.forRoot()
  ],
  providers: [
    FocusManager,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}