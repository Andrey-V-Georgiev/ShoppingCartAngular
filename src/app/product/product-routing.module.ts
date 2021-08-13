import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AdminGuard} from '../core/guards/admin.guard';
import {AuthGuard} from '../core/guards/auth.guard';
import {ProductAddComponent} from './product-add/product-add.component';
import {ProductAllComponent} from './product-all/product-all.component'; 
import {ProductDetailsComponent} from './product-details/product-details.component';
import {ProductEditComponent} from './product-edit/product-edit.component'; 
import {ProductSearchComponent} from './product-search/product-search.component';

const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: 'details/:id', 
                component: ProductDetailsComponent 
            },
            {
                path: 'all',
                component: ProductAllComponent
            }, 
            {
                path: 'add',
                component: ProductAddComponent,
                canActivate: [AuthGuard, AdminGuard]
            },
            {
                path: 'edit/:id',
                component: ProductEditComponent,
                canActivate: [AuthGuard, AdminGuard]
            },
            {
                path: 'search',
                component: ProductSearchComponent 
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class ProductRoutingModule { }
