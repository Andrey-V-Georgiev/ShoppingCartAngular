import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {NotificationService} from 'src/app/core/services/notification.service';
import {ProductService} from '../services/product.service';
import {priceValidator} from 'src/app/shared/validators/form.validators';

@Component({
    selector: 'app-product-add',
    templateUrl: './product-add.component.html',
    styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {

    form: FormGroup;

    constructor(
        private formBuilder: FormBuilder,
        private productService: ProductService,
        private router: Router,
        private notificationService: NotificationService
    ) {
        this.form = this.formBuilder.group({
            name: ['', [Validators.required, Validators.minLength(3)]],
            description: ['', [Validators.required, Validators.minLength(3)]],
            pictureUrl: ['', [Validators.required, Validators.minLength(3)]],
            price: ['', [Validators.required, priceValidator]],
        });
    }

    ngOnInit(): void {
    }

    productAdd(): void {
        const data = this.form.value;
        this.productService.productAdd(data).subscribe({
            next: () => {
                this.router.navigate(['/product/all']);
            },
            error: (err) => {
                const errorMessage: string = err.error;
                this.notificationService.setErrorState(errorMessage);
                this.router.navigate(['/product/all']);
            }
        });
    }
}
