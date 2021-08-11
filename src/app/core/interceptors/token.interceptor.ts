import {Injectable, Injector, Provider} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HTTP_INTERCEPTORS} from '@angular/common/http';
import {Observable} from 'rxjs'; 
import {IUserLogin} from 'src/app/shared/interfaces/user-service';
import Constants from 'src/app/shared/constants/constants';
import {AuthService} from '../services/auth.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
 
    isLogged$: Observable<Boolean> = this.authService.isLogged();
    currentUser$: Observable<IUserLogin> = this.authService.getCurrentUser();

    constructor( 
        private authService: AuthService,
    ) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let isLogged: Boolean = false;
        let jwtToken: string = '';

        this.isLogged$.subscribe(value => {
            isLogged = value
        });
        if (isLogged) {
            this.currentUser$.subscribe({
                next: (user) => {
                    if (user != undefined) {
                        jwtToken = user.token
                    }
                }
            });
            req = req.clone({
                headers: req.headers
                    .set(Constants.AUTHORIZATION_HEADER_KEY, jwtToken)
                    .set(Constants.CONTENT_TYPE_HEADER_KEY, Constants.APPLICATION_JSON_HEADER_VALUE)
            });
        }
        return next.handle(req);
    }
}

export const tokenInterceptorProvider: Provider = {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi: true
};
