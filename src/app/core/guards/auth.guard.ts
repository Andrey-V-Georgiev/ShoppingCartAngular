import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {UserService} from 'src/app/user/user.service';

@Injectable()
export class AuthGuard implements CanActivate {

    isLogged$ = this.userService.isLogged$;

    constructor(
        public userService: UserService,
        public router: Router
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
