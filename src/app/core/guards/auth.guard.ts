import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router'; 
import {Observable} from 'rxjs';
import {AuthService} from '../services/auth.service';

@Injectable()
export class AuthGuard implements CanActivate {

    isLogged$: Observable<Boolean> = this.authService.isLogged();

    constructor(
        private authService: AuthService,
        private router: Router
    ) { }

    canActivate(): boolean {

        let isLogged: boolean = false;
        this.isLogged$.subscribe({
            next: (value) => {
                isLogged = Boolean(value);
            }
        });

        if (isLogged) {
            return true;
        } else {
            this.router.navigateByUrl(this.router.url);
            return false;
        }
    }
}
