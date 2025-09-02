import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddworkoutSchedulePageRoutingModule } from './addworkout-schedule-routing.module';

import { AddworkoutSchedulePage } from './addworkout-schedule.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddworkoutSchedulePageRoutingModule
  ],
  declarations: [AddworkoutSchedulePage]
})
export class AddworkoutSchedulePageModule {}
