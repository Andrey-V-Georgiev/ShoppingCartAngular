import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {UserService} from './user.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {UserRoutingModule} from './user-routing.module';
import {RouterModule} from '@angular/router';

@NgModule({
    declarations: [
        LoginComponent,
        RegisterComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        UserRoutingModule,
        RouterModule
    ],
    providers: [
        UserService
    ]
})

export class UserModule { }
