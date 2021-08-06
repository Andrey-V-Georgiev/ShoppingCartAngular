import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import {AppComponent} from './app.component';
import {CoreModule} from './core/core.module';
import {FooterComponent} from './core/footer/footer.component';
import {HeaderComponent} from './core/header/header.component';
import {UserModule} from './user/user.module';
import {UserService} from './user/user.service';
import {AppRoutingModule} from './app-routing.module';
import {HomeModule} from './home/home.module'; 
import {HomeGuestComponent} from './home/home-guest/home-guest.component';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';

@NgModule({
    declarations: [
        AppComponent 
    ],
    imports: [ 
        BrowserModule,
        AppRoutingModule, 
        CoreModule,
        UserModule,
        HomeModule,
        HttpClientModule,
    ],
    providers: [  
    ],
    bootstrap: [
        AppComponent,
        HeaderComponent,
        FooterComponent
    ]
})

export class AppModule { }
