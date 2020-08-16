import { HomeRoutingModule } from './home-routing.moudule';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';



@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule
  ],
  exports:[
    HomeComponent
  ]
})
export class HomeModule { }
