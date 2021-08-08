import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {environment} from 'src/environments/environment';
import {IUserLogin, IUserServiceState} from '../shared/interfaces/user-service';
import {distinctUntilChanged, map, tap} from 'rxjs/operators';

const initialState: IUserServiceState = {
    currentUser: undefined
};

@Injectable({
    providedIn: 'root'
})
export class UserService {

    private state$ = new BehaviorSubject(initialState);

    currentUser$ = this.state$.pipe(
        map(state => state.currentUser),
        distinctUntilChanged()
    );

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
                this.state$.next(newState);
            })
        );
    }
}
