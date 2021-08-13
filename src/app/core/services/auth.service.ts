import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import Constants from 'src/app/shared/constants/constants';
import {IUserLogin} from 'src/app/shared/interfaces/user.interfaces';
import {UserService} from 'src/app/user/services/user.service';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    private currentUser$: Observable<IUserLogin> = this.userService.getCurrentUser();

    private isLogged$: Observable<Boolean> = this.currentUser$.pipe(
        map(user => user == undefined ? null : Boolean(user))
    );
    private userUsername$: Observable<string> = this.currentUser$.pipe(
        map(user => user == undefined ? null : String(user.username))
    );
    private userRole$: Observable<string> = this.currentUser$.pipe(
        map(user => user == undefined ? null : String(user.role))
    );
    private isAdmin$: Observable<boolean> = this.currentUser$.pipe(map(user => {
        if (user == undefined) {
            return null;
        } else {
            return String(user.role) == Constants.ROLE_ADMIN;
        }
    }));

    constructor(
        private userService: UserService
    ) { }

    getCurrentUser(): Observable<IUserLogin> {
        return this.currentUser$;
    }

    getCurrentUserRole(): Observable<string> {
        return this.userRole$;
    }

    getUsername(): Observable<string> {
        return this.userUsername$;
    }

    isLogged(): Observable<Boolean> {
        return this.isLogged$;
    }

    isAdmin(): Observable<Boolean> {
        return this.isAdmin$;
    }
}
