import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Onboard2PageRoutingModule } from './onboard2-routing.module';

import { Onboard2Page } from './onboard2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Onboard2PageRoutingModule
  ],
  declarations: [Onboard2Page]
})
export class Onboard2PageModule {}
