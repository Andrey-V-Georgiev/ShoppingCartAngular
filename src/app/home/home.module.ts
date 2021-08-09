import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeGuestComponent} from './home-guest/home-guest.component';
import {RouterModule} from '@angular/router';
import {HomeUserComponent} from './home-user/home-user.component';


@NgModule({
    declarations: [
        HomeGuestComponent,
        HomeUserComponent
    ],
    imports: [
        CommonModule,
        RouterModule 
    ] 
})

export class HomeModule { }
