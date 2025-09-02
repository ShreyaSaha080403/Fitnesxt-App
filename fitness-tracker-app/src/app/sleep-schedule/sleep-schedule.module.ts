import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SleepSchedulePageRoutingModule } from './sleep-schedule-routing.module';

import { SleepSchedulePage } from './sleep-schedule.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SleepSchedulePageRoutingModule
  ],
  declarations: [SleepSchedulePage]
})
export class SleepSchedulePageModule {}
