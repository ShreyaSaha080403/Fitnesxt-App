import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MealSchedulePage } from './meal-schedule.page';

const routes: Routes = [
  {
    path: '',
    component: MealSchedulePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MealSchedulePageRoutingModule {}
