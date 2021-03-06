import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CartComponent} from './cart/cart.component';
import {CartRoutingModule} from './cart-routing.module'; 
import {CartService} from './services/cart.service';

@NgModule({
    declarations: [
        CartComponent
    ],
    imports: [
        CommonModule,
        CartRoutingModule 
    ],
    providers: [
        CartService
    ]
})
export class CartModule { }
