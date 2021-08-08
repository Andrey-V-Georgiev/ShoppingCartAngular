import {Injectable, Provider} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HTTP_INTERCEPTORS} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from 'src/environments/environment';


@Injectable()
export class AppInterceptor implements HttpInterceptor {
    
    /* Development url on localhost */
    baseUrl = environment.baseUrl;

    /* Add baseUrl as prefix to the req url */
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (!req.url.includes('http')) {
            req = req.clone({url: `${this.baseUrl}${req.url}` });
        }
        return next.handle(req);
    }
}

export const appInterceptorProvider: Provider = {
    provide: HTTP_INTERCEPTORS,
    useClass: AppInterceptor,
    multi: true
};
