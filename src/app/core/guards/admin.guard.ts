import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {Observable} from 'rxjs';
import Constants from 'src/app/shared/constants/constants';
import {AuthService} from '../services/auth.service';

@Injectable()
export class AdminGuard implements CanActivate {

    private isAdmin$: Observable<Boolean> = this.authService.isAdmin();

    constructor(
        private authService: AuthService,
        private router: Router
    ) { }

    canActivate(): boolean {

        let isAdmin: boolean = false;
        this.isAdmin$.subscribe({
            next: (data: boolean) => {
                isAdmin = data;
            }
        });
        if (isAdmin) {
            return true;
        } else {
            this.router.navigateByUrl('/home');
            return false;
        }
    }
}
