import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {NotificationService} from 'src/app/core/services/notification.service';
import {IProduct} from 'src/app/shared/interfaces/product.interfaces';
import {priceValidator} from 'src/app/shared/validators/form.validators';
import {ProductService} from '../services/product.service';

@Component({
    selector: 'app-product-edit',
    templateUrl: './product-edit.component.html',
    styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

    productsDetails$: Observable<IProduct> = this.productService.getPruductDetails();
    productDetails: IProduct;
    form: FormGroup;

    constructor(
        private productService: ProductService,
        private notificationService: NotificationService,
        private router: Router,
        private formBuilder: FormBuilder,
        private route: ActivatedRoute
    ) {
        this.form = this.formBuilder.group({
            id: ['', []],
            name: ['', [Validators.required, Validators.minLength(3)]],
            description: ['', [Validators.required, Validators.minLength(3)]],
            pictureUrl: ['', [Validators.required, Validators.minLength(3)]],
            price: ['', [Validators.required , priceValidator]],
        });

        this.productsDetails$.subscribe({
            next: (product: IProduct) => {
                this.productDetails = product;
            }
        });

        this.form.setValue({
            id: this.productDetails.id,
            name: this.productDetails.name,
            description: this.productDetails.description,
            pictureUrl: this.productDetails.pictureUrl,
            price: this.productDetails.price,
        });
    }

    ngOnInit(): void {
        const id = this.route.snapshot.params['id'];
        this.productService.loadPruductById(id).subscribe({
            error: (err) => {
                const errorMessage: string = err.error;
                this.notificationService.setErrorState(errorMessage);
                this.router.navigate(['/product/all']);
            }
        });
    }

    productEdit(): void {
        const data = this.form.value;
        this.productService.productEdit(data).subscribe({
            next: (data: IProduct) => {
                this.router.navigate([`/product/details/${data.id}`]);
            },
            error: (err) => {
                const errorMessage: string = err.error;
                this.notificationService.setErrorState(errorMessage); 
            }
        });
    }
}
