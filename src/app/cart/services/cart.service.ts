import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {tap} from 'rxjs/operators';
import {ICart, ICartProductArg} from 'src/app/shared/interfaces/cart.interfaces';

@Injectable({
    providedIn: 'root'
})
export class CartService {

    private _stateCart: BehaviorSubject<ICart> = new BehaviorSubject(undefined);

    constructor(
        private http: HttpClient
    ) { }

    getCart(): Observable<ICart> {
        return this._stateCart.asObservable();
    }

    findCart(): Observable<ICart> {
        return this.http.get<ICart>('/cart/').pipe(
            tap((data: ICart) => this._stateCart.next(data))
        );
    }

    increaseProductQuantity(productId: string): Observable<string> {
        const addOneArg: ICartProductArg = {productId: productId, quantity: 1};
        return this.http.put<string>('/cart/add', addOneArg);
    }

    decreaseProductQuantity(productId: string): Observable<string> {
        const decreaseByOneArg: ICartProductArg = {productId: productId, quantity: 1};
        return this.http.put<string>('/cart/decrease', decreaseByOneArg);
    }

    removeProductFromCart(cartProductId: string): Observable<string> {
        return this.http.delete<string>(`/cart/remove/${cartProductId}`);
    }

    checkoutCart(): Observable<string>  {
        return this.http.delete<string>('/cart/checkout');
    }

    emptyCart(): Observable<string>  {
        return this.http.delete<string>('/cart/empty');
    }
}
