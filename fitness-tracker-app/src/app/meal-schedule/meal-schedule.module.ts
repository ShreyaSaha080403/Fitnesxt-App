import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MealSchedulePageRoutingModule } from './meal-schedule-routing.module';

import { MealSchedulePage } from './meal-schedule.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MealSchedulePageRoutingModule
  ],
  declarations: [MealSchedulePage]
})
export class MealSchedulePageModule {}
