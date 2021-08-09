import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import {AppComponent} from './app.component';
import {CoreModule} from './core/core.module';
import {FooterComponent} from './core/footer/footer.component';
import {HeaderComponent} from './core/header/header.component';
import {UserModule} from './user/user.module'; 
import {AppRoutingModule} from './app-routing.module';
import {HomeModule} from './home/home.module';  
import { HTTP_INTERCEPTORS } from '@angular/common/http'
import {appInterceptorProvider} from './core/interceptors/app.interceptor';
import {ProductModule} from './product/product.module';

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
        ProductModule,
        HttpClientModule, 
    ],
    providers: [ 
        appInterceptorProvider
    ],
    exports: [
        UserModule 
    ],
    bootstrap: [
        AppComponent,
        HeaderComponent,
        FooterComponent
    ]
})

export class AppModule { }
