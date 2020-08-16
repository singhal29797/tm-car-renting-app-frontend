import { CoreRoutingModule } from './core-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [NavBarComponent, FooterComponent],
  imports: [
    CommonModule,
    CoreRoutingModule
  ],
  exports:[
    NavBarComponent,
    FooterComponent
  ]
})
export class CoreModule { }
