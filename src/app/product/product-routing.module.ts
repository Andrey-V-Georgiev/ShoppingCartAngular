import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AdminGuard} from '../core/guards/admin.guard';
import {AuthGuard} from '../core/guards/auth.guard';
import {ProductAllComponent} from './product-all/product-all.component';
import {ProductCreateComponent} from './product-create/product-create.component';
import {ProductDetailsComponent} from './product-details/product-details.component';
import {ProductEditComponent} from './product-edit/product-edit.component';

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
                component: ProductCreateComponent,
                canActivate: [AuthGuard, AdminGuard]
            },
            {
                path: 'edit',
                component: ProductEditComponent,
                canActivate: [AuthGuard, AdminGuard]
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class ProductRoutingModule { }
