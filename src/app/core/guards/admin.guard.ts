import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import Constants from 'src/app/shared/constants/constants';
import {IUserLogin} from 'src/app/shared/interfaces/user-service';
import {UserService} from 'src/app/user/user.service';

@Injectable()
export class AdminGuard implements CanActivate {

    userRole$  = this.userService.userRole$; 

    constructor(
        public userService: UserService,
        public router: Router
    ) { }

    canActivate(): boolean {

        let userRole: string = '';
        this.userRole$.subscribe({
            next: (role) => {
                console.log("role: ", role);
                
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
