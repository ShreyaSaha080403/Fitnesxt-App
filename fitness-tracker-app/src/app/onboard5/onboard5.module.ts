import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Onboard5PageRoutingModule } from './onboard5-routing.module';

import { Onboard5Page } from './onboard5.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Onboard5PageRoutingModule
  ],
  declarations: [Onboard5Page]
})
export class Onboard5PageModule {}
