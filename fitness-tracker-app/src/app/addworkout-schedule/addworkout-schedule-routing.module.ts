import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddworkoutSchedulePage } from './addworkout-schedule.page';

const routes: Routes = [
  {
    path: '',
    component: AddworkoutSchedulePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddworkoutSchedulePageRoutingModule {}
