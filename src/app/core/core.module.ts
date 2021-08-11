import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router'; 
import {UserModule} from '../user/user.module';
import {NotificationService} from './notification.service';
import {AuthGuard} from './guards/auth.guard';
import {AdminGuard} from './guards/admin.guard';


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
    NotificationService,
    AuthGuard,
    AdminGuard
  ] 
})

export class CoreModule { }
