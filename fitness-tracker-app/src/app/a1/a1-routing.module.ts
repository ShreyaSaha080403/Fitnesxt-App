import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { A1Page } from './a1.page';

const routes: Routes = [
  {
    path: '',
    component: A1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class A1PageRoutingModule {}
