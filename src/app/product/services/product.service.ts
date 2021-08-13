import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {tap} from 'rxjs/operators';
import Constants from 'src/app/shared/constants/constants';
import {IProduct} from 'src/app/shared/interfaces/product.interfaces';

@Injectable({
    providedIn: 'root'
})
export class ProductService {

    private _stateAll: BehaviorSubject<IProduct[]> = new BehaviorSubject(undefined);
    private _stateDetails: BehaviorSubject<IProduct> = new BehaviorSubject(undefined);
    private _stateSearch = new BehaviorSubject(undefined);

    constructor(
        private http: HttpClient
    ) { }

    getAllProducts(): Observable<IProduct[]> {
        return this._stateAll;
    }

    getPruductDetails(): Observable<IProduct> {
        return this._stateDetails;
    }

    getProductsSearch(): Observable<IProduct[]> {
        return this._stateSearch;
    }

    loadPruductById(id: string): Observable<IProduct> {
        return this.http.get<IProduct>(`/product/details/${id}`).pipe(
            tap((data: IProduct) => this._stateDetails.next(data))
        );
    }

    loadAllProducts(): Observable<IProduct[]> {
        return this.http.get<IProduct[]>('/product/all').pipe(
            tap((data: IProduct[]) => this._stateAll.next(data))
        );
    }

    searchProducts(keyword: string): Observable<IProduct[]> {
        const safeKeyword: string = keyword.length == 0 ? Constants.STAR : keyword
        return this.http.get<IProduct[]>(`/product/search/${safeKeyword}`).pipe(
            tap((data: IProduct[]) => this._stateSearch.next(data))
        );
    }

    productAdd(data: any): Observable<IProduct> {
        return this.http.post<IProduct>('/product/add', data);
    }

    productRemove(id: string): Observable<string> {
        return this.http.delete<string>(`/product/remove/${id}`);
    }
}
