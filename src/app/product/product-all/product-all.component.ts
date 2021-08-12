import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';
import {AuthService} from 'src/app/core/services/auth.service';
import {NotificationService} from 'src/app/core/services/notification.service';
import {IProduct} from 'src/app/shared/interfaces/product.interfaces';
import {ProductService} from '../services/product.service';

@Component({
    selector: 'app-product-all',
    templateUrl: './product-all.component.html',
    styleUrls: ['./product-all.component.css']
})
export class ProductAllComponent implements OnInit {

    productsAll$: Observable<IProduct[]> = this.productService.getAllProducts();
    isLogged$: Observable<Boolean | null> = this.authService.isLogged();

    constructor(
        private productService: ProductService,
        private router: Router,
        private notificationService: NotificationService,
        private authService: AuthService
    ) {
    }

    ngOnInit(): void {
        this.productService.loadAllProducts().subscribe({
            error: (err) => {
                const errorMessage: string = err.error;
                this.notificationService.setErrorState(errorMessage);
                this.router.navigateByUrl(this.router.url);
            }
        });
    }
}
