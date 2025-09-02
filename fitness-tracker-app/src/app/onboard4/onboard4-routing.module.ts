import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Onboard4Page } from './onboard4.page';

const routes: Routes = [
  {
    path: '',
    component: Onboard4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Onboard4PageRoutingModule {}
