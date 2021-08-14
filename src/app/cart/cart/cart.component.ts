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
    ) { }

    ngOnInit(): void {
        this.cartService.findCart().subscribe({
            next: (data) => {
                console.log('DATA: ', data);
                
                this.router.navigate(['/cart']);
            },
            error: (err) => {
                console.log('ERR: ', err);

                const errorMessage: string = err.error;
                this.notificationService.setErrorState(errorMessage);
                this.router.navigate(['/cart']);
            }
        });
    }
}
