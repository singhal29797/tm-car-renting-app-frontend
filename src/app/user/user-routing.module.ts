import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AddVehicleComponent } from './add-vehicle/add-vehicle.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path:'add-vehicle',
    pathMatch:'full',
    component:AddVehicleComponent
  },
  {
    path:'admin-dashboard',
    pathMatch:'full',
    component:AdminDashboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
