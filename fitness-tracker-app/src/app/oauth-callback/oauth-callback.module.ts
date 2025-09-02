import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OauthCallbackPageRoutingModule } from './oauth-callback-routing.module';

import { OauthCallbackPage } from './oauth-callback.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OauthCallbackPageRoutingModule
  ],
  declarations: [OauthCallbackPage]
})
export class OauthCallbackPageModule {}
