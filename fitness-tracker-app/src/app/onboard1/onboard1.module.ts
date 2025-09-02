import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Onboard1PageRoutingModule } from './onboard1-routing.module';

import { Onboard1Page } from './onboard1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Onboard1PageRoutingModule
  ],
  declarations: [Onboard1Page]
})
export class Onboard1PageModule {}
