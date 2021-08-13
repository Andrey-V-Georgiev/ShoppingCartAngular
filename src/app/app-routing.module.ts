import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router'; 
import {ContactComponent} from './contact/contact/contact.component';
import {AuthGuard} from './core/guards/auth.guard';
import {HomeGuestComponent} from './home/home-guest/home-guest.component';
import {HomeUserComponent} from './home/home-user/home-user.component';

const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: '', 
                component: HomeGuestComponent
            },
            {
                path: 'home',
                component: HomeUserComponent,
                canActivate: [AuthGuard]
            },
            { 
                path: 'product',
                loadChildren: () => import('./product/product.module').then(m => m.ProductModule)
            }, 
            { 
                path: 'cart',
                loadChildren: () => import('./cart/cart.module').then(m => m.CartModule)
            },
            { 
                path: 'contact', 
                component: ContactComponent
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
