import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Observable} from 'rxjs';
import {AuthService} from 'src/app/core/services/auth.service';
import {NotificationService} from 'src/app/core/services/notification.service';
import {IProduct} from 'src/app/shared/interfaces/product.interfaces';
import {ProductService} from '../services/product.service';

@Component({
    selector: 'app-product-details',
    templateUrl: './product-details.component.html',
    styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

    productsDetails$: Observable<IProduct> = this.productService.getPruductDetails();
    isLogged$: Observable<Boolean | null> = this.authService.isLogged();
    isAdmin$: Observable<Boolean> = this.authService.isAdmin();

    constructor(
        private productService: ProductService,
        private router: Router,
        private notificationService: NotificationService,
        private authService: AuthService,
        private route: ActivatedRoute
    ) { }

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

    productRemove(id: string) { 
        this.productService.productRemove(id).subscribe({
            next: (message: string) => {
                this.notificationService.setSuccessState(message);
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
