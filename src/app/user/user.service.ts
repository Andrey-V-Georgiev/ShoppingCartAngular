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
    public userRole$: Observable<string> = this.currentUser$.pipe(map(user => String(user.role)));

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
                console.log("LOGIN BODY: ", res.body);
                
                this._state.next(res.body);
            })
        );
    }

    logout(): Observable<any> {

        let jwtToken: string = '';
        this.currentUser$.subscribe({
            next: (user) => {
                if (user != undefined) {
                    jwtToken = user.token
                }
            }
        });

        return this.http.post('/auth/logout', jwtToken, {observe: 'response'}).pipe(
            tap((res: HttpResponse<any>) => {
                this._state.next(undefined);
            })
        );;
    }
}
