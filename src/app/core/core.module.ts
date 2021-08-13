import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router'; 
import {UserModule} from '../user/user.module';
import {NotificationService} from './services/notification.service';
import {AuthGuard} from './guards/auth.guard';
import {AdminGuard} from './guards/admin.guard';
import {AuthService} from './services/auth.service';
import {WeatherService} from './services/weather.service';
import {ProductModule} from '../product/product.module';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent 
  ],
  imports: [
    CommonModule,
    RouterModule,
    UserModule,
    ProductModule  
  ],
  providers: [
    NotificationService,
    AuthService,
    WeatherService,
    AuthGuard,
    AdminGuard
  ] 
})

export class CoreModule { }
