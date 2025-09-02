import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Onboard4PageRoutingModule } from './onboard4-routing.module';

import { Onboard4Page } from './onboard4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Onboard4PageRoutingModule
  ],
  declarations: [Onboard4Page]
})
export class Onboard4PageModule {}
