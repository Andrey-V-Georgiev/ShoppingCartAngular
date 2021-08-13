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
import {appInterceptorProvider} from './core/interceptors/app.interceptor';
import {tokenInterceptorProvider} from './core/interceptors/token.interceptor';
import {UserService} from './user/services/user.service';
import {ContactComponent} from './contact/contact/contact.component';
import {SharedModule} from './shared/shared.module';

@NgModule({
    declarations: [
        AppComponent,
        ContactComponent 
    ],
    imports: [ 
        BrowserModule,
        AppRoutingModule, 
        CoreModule,
        UserModule,
        HomeModule, 
        SharedModule, 
        HttpClientModule, 
    ],
    providers: [ 
        UserService,
        appInterceptorProvider,
        tokenInterceptorProvider
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
