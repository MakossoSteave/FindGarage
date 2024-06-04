import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {GarageDetailComponent } from './garage-detail.component'

const routes: Routes = [
  {
    path: '',
    component: GarageDetailComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GarageDetailRoutingModule {}
