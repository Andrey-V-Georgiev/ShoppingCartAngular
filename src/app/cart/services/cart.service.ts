import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {tap} from 'rxjs/operators';
import {ICart} from 'src/app/shared/interfaces/cart.interfaces';

@Injectable({
    providedIn: 'root'
})
export class CartService {

    private _stateCart: BehaviorSubject<ICart> = new BehaviorSubject(undefined);

    constructor(
        private http: HttpClient
    ) { }

    getCart(): Observable<ICart> {
        return this._stateCart;
    }

    findCart(): Observable<ICart> {
        return this.http.get<ICart>('/cart/').pipe(
            tap((data: ICart) => this._stateCart.next(data))
        );
    }
}
