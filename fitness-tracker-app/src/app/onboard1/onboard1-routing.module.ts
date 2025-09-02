import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Onboard1Page } from './onboard1.page';

const routes: Routes = [
  {
    path: '',
    component: Onboard1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Onboard1PageRoutingModule {}
