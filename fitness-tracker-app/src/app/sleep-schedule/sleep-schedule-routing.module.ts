import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SleepSchedulePage } from './sleep-schedule.page';

const routes: Routes = [
  {
    path: '',
    component: SleepSchedulePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SleepSchedulePageRoutingModule {}
