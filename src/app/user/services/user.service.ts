import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {IUserLogin} from '../../shared/interfaces/user.interfaces';
import {tap} from 'rxjs/operators';


@Injectable({
    providedIn: 'root'
})
export class UserService {

    private _stateUser: BehaviorSubject<IUserLogin> = new BehaviorSubject(undefined);

    constructor(
        private http: HttpClient
    ) { }

    getCurrentUser(): Observable<IUserLogin> {
        return this._stateUser;
    }

    register(data: any): Observable<any> {
        return this.http.post<string>('/auth/register', data);
    }

    login(data: any): Observable<IUserLogin> {
        return this.http.post<IUserLogin>('/auth/login', data).pipe(
            tap((data: IUserLogin) => this._stateUser.next(data))
        );
    }

    logout(): Observable<any> {
        const jwtToken = this._stateUser.value?.token;
        return this.http.post('/auth/logout', jwtToken).pipe(
            tap(() => this._stateUser.next(undefined))
        );
    }
}
