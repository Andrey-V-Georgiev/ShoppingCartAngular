import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { Error404Component } from './error404/error404.component'; 
import {UserModule} from '../user/user.module';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    Error404Component
  ],
  imports: [
    CommonModule,
    RouterModule,
    UserModule  
  ] 
})

export class CoreModule { }
