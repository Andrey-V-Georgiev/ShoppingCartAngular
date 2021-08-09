import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {IUserLogin, IUserServiceState} from '../shared/interfaces/user-service';
import {distinctUntilChanged, map, tap} from 'rxjs/operators';


@Injectable({
    providedIn: 'root'
})
export class UserService {

    private _state: BehaviorSubject<any> = new BehaviorSubject(undefined);
    public currentUser$ = this._state.asObservable();
    public isLogged$ = this.currentUser$.pipe(map(user => Boolean(user)));

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
                const newState: IUserServiceState = {currentUser: user} as IUserServiceState;
                this._state.next(newState);
            })
        );
    }
}
