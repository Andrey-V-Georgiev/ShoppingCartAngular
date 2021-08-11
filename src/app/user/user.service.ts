import {HttpClient, HttpResponse} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {IUserLogin} from '../shared/interfaces/user-service';
import {map, tap} from 'rxjs/operators';
import {NotificationService} from '../core/notification.service';


@Injectable({
    providedIn: 'root'
})
export class UserService {

    private _state: BehaviorSubject<any> = new BehaviorSubject(undefined);
    public currentUser$: Observable<IUserLogin> = this._state.asObservable();
    public isLogged$: Observable<Boolean> = this.currentUser$.pipe(map(user => Boolean(user)));

    constructor(
        private http: HttpClient,
        public notificationService: NotificationService
    ) { }

    register(data: any): Observable<any> {
        return this.http.post<string>('/auth/register', data);
    }

    login(data: any): Observable<any> {
        return this.http.post('/auth/login', data, {observe: 'response'}).pipe(
            tap((res: HttpResponse<any>) => {
                this._state.next(res.body);
            })
        );
    }
}
