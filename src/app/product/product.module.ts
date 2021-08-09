import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductAllComponent } from './product-all/product-all.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductCreateComponent } from './product-create/product-create.component';
import { ProductEditComponent } from './product-edit/product-edit.component';



@NgModule({
  declarations: [
    ProductAllComponent,
    ProductDetailsComponent,
    ProductCreateComponent,
    ProductEditComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ProductModule { }
