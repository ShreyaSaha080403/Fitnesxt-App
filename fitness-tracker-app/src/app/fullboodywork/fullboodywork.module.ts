import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FullboodyworkPageRoutingModule } from './fullboodywork-routing.module';

import { FullboodyworkPage } from './fullboodywork.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FullboodyworkPageRoutingModule
  ],
  declarations: [FullboodyworkPage]
})
export class FullboodyworkPageModule {}
