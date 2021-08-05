import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {environment} from 'src/environments/environment';
import {tap} from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    currentUser: any; 

    constructor(
        private http: HttpClient
    ) { }

    register(data: any): Observable<any> {
        const url: string = `${environment.baseUrl}/auth/register`;
        return this.http.post(url, data);
    }

    login(data: any): Observable<any> {
        const url: string = `${environment.baseUrl}/auth/login`;
        return this.http.post(url, data).pipe(
            tap((user: any) => {
                this.currentUser = user
                console.log(user);
            })
        );
    }
}
