import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router'; import {ProductRoutingModule} from './product-routing.module';
import {ProductAllComponent} from './product-all/product-all.component';
import {ProductCreateComponent} from './product-create/product-create.component';
import {ProductDetailsComponent} from './product-details/product-details.component';
import {ProductEditComponent} from './product-edit/product-edit.component';
import {ReactiveFormsModule} from '@angular/forms';
import {ProductService} from './services/product.service';
import {SharedModule} from '../shared/shared.module';


@NgModule({
    declarations: [
        ProductAllComponent,
        ProductCreateComponent,
        ProductDetailsComponent,
        ProductEditComponent
    ],
    imports: [
        CommonModule,
        ProductRoutingModule,
        RouterModule,
        ReactiveFormsModule,
        SharedModule
    ],
    providers: [
        ProductService
    ]
})

export class ProductModule { }
