import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {Observable} from 'rxjs'; 
import Constants from 'src/app/shared/constants/constants'; 
import {AuthService} from '../services/auth.service';

@Injectable()
export class AdminGuard implements CanActivate {

    userRole$: Observable<string>  = this.authService.getCurrentUserRole(); 

    constructor(
        private authService: AuthService,
        private router: Router
    ) { }

    canActivate(): boolean {

        let userRole: string = '';
        this.userRole$.subscribe({
            next: (role) => { 
                userRole = role;
            }
        });

        if (userRole == Constants.ROLE_ADMIN) {
            return true;
        } else {
            this.router.navigateByUrl(this.router.url);
            return false;
        }
    }
}
