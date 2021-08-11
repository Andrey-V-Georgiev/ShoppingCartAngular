import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router'; 
import {AuthGuard} from '../core/guards/auth.guard';
import {CartComponent} from './cart/cart.component';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        component: CartComponent,
        canActivate: [AuthGuard]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class CartRoutingModule { }
