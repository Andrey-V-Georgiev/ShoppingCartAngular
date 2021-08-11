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

    private isLogged$: Observable<Boolean | null> = this.currentUser$.pipe(
        map(user => user == undefined ? null : Boolean(user))
    );
    private userUsername$: Observable<string | null> = this.currentUser$.pipe(
        map(user => user == undefined ? null : String(user.username))
    );
    private userRole$: Observable<string | null> = this.currentUser$.pipe(
        map(user => user == undefined ? null : String(user.role))
    );

    constructor(
        private userService: UserService
    ) { }

    getCurrentUser(): Observable<IUserLogin> {
        return this.currentUser$;
    }

    getCurrentUserRole(): Observable<string | null> {
        return this.userRole$;
    }

    getUsername(): Observable<string | null> {
        return this.userUsername$;
    }

    isLogged(): Observable<Boolean | null> {
        return this.isLogged$;
    }
}
