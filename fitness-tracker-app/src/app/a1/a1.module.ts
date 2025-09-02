import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { A1PageRoutingModule } from './a1-routing.module';

import { A1Page } from './a1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    A1PageRoutingModule
  ],
  declarations: [A1Page]
})
export class A1PageModule {}
