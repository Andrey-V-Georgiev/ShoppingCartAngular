import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeGuestComponent } from './home-guest/home-guest.component';
import { RouterModule } from '@angular/router';
import { HomeUserComponent } from './home-user/home-user.component';
import {HomeRoutingModule} from './home-routing.module';


@NgModule({
  declarations: [
    HomeGuestComponent,
    HomeUserComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    HomeRoutingModule
  ],
  exports: [
    HomeGuestComponent,
    HomeUserComponent
  ]
})
export class HomeModule { }
