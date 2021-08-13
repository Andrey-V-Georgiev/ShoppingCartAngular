import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';
import {AuthService} from 'src/app/core/services/auth.service';
import {EventEmitterCoreService} from 'src/app/core/services/event-emmiter-core.service';
import {NotificationService} from 'src/app/core/services/notification.service'; 
import {IProduct} from 'src/app/shared/interfaces/product.interfaces';
import {ProductService} from '../services/product.service';

@Component({
    selector: 'app-product-search',
    templateUrl: './product-search.component.html',
    styleUrls: ['./product-search.component.css']
})
export class ProductSearchComponent implements OnInit {

    productsSearch$: Observable<IProduct[]> = this.productService.getProductsSearch();
    isLogged$: Observable<Boolean | null> = this.authService.isLogged();

    constructor(
        private productService: ProductService,
        private router: Router,
        private notificationService: NotificationService,
        private authService: AuthService,
        private eventEmitterService: EventEmitterCoreService
    ) { }

    ngOnInit(): void {
        if (this.eventEmitterService.subscription == undefined) {
            this.eventEmitterService.subscription = this.eventEmitterService.invokeSearchProducts.subscribe(
                (keyword: string) => this.searchProducts(keyword)
            );
        }
    }

    searchProducts(keyword: string) {
        this.productService.searchProducts(keyword).subscribe({
            error: (err) => {
                const errorMessage: string = err.error;
                this.notificationService.setErrorState(errorMessage);
                this.router.navigateByUrl('/product/all');
            }
        });
    }
}
