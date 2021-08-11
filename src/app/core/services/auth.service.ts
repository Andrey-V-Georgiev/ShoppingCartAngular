import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {IUserLogin} from 'src/app/shared/interfaces/user.interfaces';
import {UserService} from 'src/app/user/services/user.service';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    private currentUser$: Observable<IUserLogin> = this.userService.getCurrentUser();
    private isLogged$: Observable<Boolean> = this.currentUser$.pipe(map(user => Boolean(user)));
    private userUsername$: Observable<string> = this.currentUser$.pipe(map(user => String(user.username)));
    private userRole$: Observable<string> = this.currentUser$.pipe(map(user => String(user.role)));

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
}
