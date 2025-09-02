import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddAlarmPage } from './add-alarm.page';

const routes: Routes = [
  {
    path: '',
    component: AddAlarmPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddAlarmPageRoutingModule {}
