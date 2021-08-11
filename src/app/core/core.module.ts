import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router'; 
import {UserModule} from '../user/user.module';
import {NotificationService} from './notification.service';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent 
  ],
  imports: [
    CommonModule,
    RouterModule,
    UserModule  
  ],
  providers: [
    NotificationService
  ] 
})

export class CoreModule { }
