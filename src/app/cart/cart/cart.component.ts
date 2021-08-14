import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';
import {NotificationService} from 'src/app/core/services/notification.service';
import {ICart} from 'src/app/shared/interfaces/cart.interfaces';
import {CartService} from '../services/cart.service';

@Component({
    selector: 'app-cart',
    templateUrl: './cart.component.html',
    styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

    cart$: Observable<ICart> = this.cartService.getCart();

    constructor(
        private cartService: CartService,
        private router: Router,
        private notificationService: NotificationService
    ) {
        this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    }

    ngOnInit(): void {
        this.findCart();
    }

    findCart(): void {
        this.cartService.findCart().subscribe({
            next: () => {
                this.router.navigate(['/cart']);
            },
            error: (err) => {
                const errorMessage: string = err.error;
                this.notificationService.setErrorState(errorMessage);
                this.findCart();
            }
        });
    }

    increaseProductQuantity(productId: string): void {
        this.cartService.increaseProductQuantity(productId).subscribe({
            next: (message) => {
                this.notificationService.setSuccessState(message);
                this.findCart();
            },
            error: (err) => {
                console.log("ERR: ", err);
                
                const errorMessage: string = err.error;
                this.notificationService.setErrorState(errorMessage);
                this.findCart();
            }
        });
    }

    decreaseProductQuantity(productId: string): void {
        this.cartService.decreaseProductQuantity(productId).subscribe({
            next: (message) => {
                this.notificationService.setSuccessState(message);
                this.findCart();
            },
            error: (err) => {
                const errorMessage: string = err.error;
                this.notificationService.setErrorState(errorMessage);
                this.findCart();
            }
        });
    }

    removeProductFromCart(cartProductId: string): void {
        this.cartService.removeProductFromCart(cartProductId).subscribe({
            next: (message) => {
                this.notificationService.setSuccessState(message);
                this.findCart();
            },
            error: (err) => {
                const errorMessage: string = err.error;
                this.notificationService.setErrorState(errorMessage);
                this.findCart();
            }
        });
    }
}
