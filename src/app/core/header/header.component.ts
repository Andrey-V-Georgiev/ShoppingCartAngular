import {HttpResponse} from '@angular/common/http';
import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {UserService} from 'src/app/user/user.service';
import {NotificationService} from '../notification.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

    isLogged$ = this.userService.isLogged$;
    notificationState$ = this.notificationService.notificationState$;

    constructor(
        public userService: UserService,
        public notificationService: NotificationService,
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
