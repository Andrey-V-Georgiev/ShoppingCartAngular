import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProductAllComponent} from './product-all/product-all.component';
import {ProductCreateComponent} from './product-create/product-create.component';
import {ProductDetailsComponent} from './product-details/product-details.component';
import {ProductEditComponent} from './product-edit/product-edit.component';

const routes: Routes = [
    {
        path: '',  
        children: [
            {
                path: '',
                pathMatch: 'full',
                component: ProductDetailsComponent 
            },
            {
                path: 'all',
                component: ProductAllComponent 
            },
            {
                path: 'add',
                component: ProductCreateComponent 
            },
            {
                path: 'edit/*',
                component: ProductEditComponent 
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class ProductRoutingModule { }
