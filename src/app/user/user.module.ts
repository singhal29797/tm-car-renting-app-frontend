import { UserRoutingModule } from './user-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddVehicleComponent } from './add-vehicle/add-vehicle.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';



@NgModule({
  declarations: [AddVehicleComponent, AdminDashboardComponent],
  imports: [
    CommonModule,
    UserRoutingModule
  ],
  exports:[
    AddVehicleComponent,
    AdminDashboardComponent
  ]
})
export class UserModule { }
