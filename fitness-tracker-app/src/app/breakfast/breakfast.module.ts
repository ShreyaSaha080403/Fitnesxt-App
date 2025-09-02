import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BreakfastPageRoutingModule } from './breakfast-routing.module';

import { BreakfastPage } from './breakfast.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BreakfastPageRoutingModule
  ],
  declarations: [BreakfastPage]
})
export class BreakfastPageModule {}
