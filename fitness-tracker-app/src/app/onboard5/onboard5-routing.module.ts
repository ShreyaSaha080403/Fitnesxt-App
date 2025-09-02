import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Onboard5Page } from './onboard5.page';

const routes: Routes = [
  {
    path: '',
    component: Onboard5Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Onboard5PageRoutingModule {}
