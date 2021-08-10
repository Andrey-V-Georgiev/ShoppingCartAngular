import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {IUserLogin} from '../shared/interfaces/user-service';
import {map, tap} from 'rxjs/operators';


@Injectable({
    providedIn: 'root'
})
export class UserService {

    private _state: BehaviorSubject<any> = new BehaviorSubject(undefined);
    public currentUser$: Observable<IUserLogin> = this._state.asObservable();
    public isLogged$: Observable<Boolean> = this.currentUser$.pipe(map(user => Boolean(user)));

    constructor(
        private http: HttpClient,
    ) { }

    register(data: any): Observable<any> {
        const url: string = `/auth/register`;
        return this.http.post<string>(url, data);
    }

    login(data: any): Observable<any> {
        const url: string = `/auth/login`;

        return this.http.post(url, data).pipe(
            tap((user) => {
                const newState: IUserLogin = user as IUserLogin;
                this._state.next(newState);
            })
        );
    }
}
