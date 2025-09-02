import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Onboard3PageRoutingModule } from './onboard3-routing.module';

import { Onboard3Page } from './onboard3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Onboard3PageRoutingModule
  ],
  declarations: [Onboard3Page]
})
export class Onboard3PageModule {}
