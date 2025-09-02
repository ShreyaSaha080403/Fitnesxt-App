import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Onboard3Page } from './onboard3.page';

const routes: Routes = [
  {
    path: '',
    component: Onboard3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Onboard3PageRoutingModule {}
