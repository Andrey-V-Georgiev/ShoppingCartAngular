import {HttpResponse} from '@angular/common/http';
import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';
import {NotificationState} from 'src/app/shared/interfaces/notification-state';
import {UserService} from 'src/app/user/services/user.service';
import {AuthService} from '../services/auth.service';
import {NotificationService} from '../services/notification.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

    isLogged$: Observable<Boolean> = this.authService.isLogged();
    notificationState$: Observable<NotificationState> = this.notificationService.getNotificationState();

    constructor(
        private userService: UserService,
        private notificationService: NotificationService,
        private authService: AuthService,
        private router: Router
    ) { }

    ngOnInit(): void {
    }

    logout(): void {
        this.userService.logout().subscribe({
            next: (res: HttpResponse<any>) => {
                const message: string = String(res.body);
                this.notificationService.setSuccessState(message);
                this.router.navigate(['/']);
            },
            error: (err) => {
                const errorMessage: string = err.error;
                this.notificationService.setErrorState(errorMessage);
            }
        });
    }
}
