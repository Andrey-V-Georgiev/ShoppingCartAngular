import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CartComponent} from './cart/cart.component';
import {CartRoutingModule} from './cart-routing.module';
import {ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';

@NgModule({
    declarations: [
        CartComponent
    ],
    imports: [
        CommonModule,
        CartRoutingModule,
        RouterModule,
        ReactiveFormsModule
    ]
})
export class CartModule { }
