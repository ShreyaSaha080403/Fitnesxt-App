import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Onboard2Page } from './onboard2.page';

const routes: Routes = [
  {
    path: '',
    component: Onboard2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Onboard2PageRoutingModule {}
