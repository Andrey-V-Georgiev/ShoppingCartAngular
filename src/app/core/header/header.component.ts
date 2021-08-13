import {HttpResponse} from '@angular/common/http';
import {Component, OnInit} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
import {Observable, Subscription} from 'rxjs'; 
import {INotificationState} from 'src/app/shared/interfaces/notification-state.interfaces';
import {IWeather} from 'src/app/shared/interfaces/weather.interfaces';
import {UserService} from 'src/app/user/services/user.service';
import {AuthService} from '../services/auth.service';
import {NotificationService} from '../services/notification.service';
import {WeatherService} from '../services/weather.service'; 
import {filter} from 'rxjs/operators';
import Constants from 'src/app/shared/constants/constants';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

    isLogged$: Observable<Boolean | null> = this.authService.isLogged();
    userUsername$: Observable<string | null> = this.authService.getUsername();
    notificationState$: Observable<INotificationState> = this.notificationService.getNotificationState();
    weather$: Observable<IWeather> = this.weatherService.getWeather();

    showSearchBar: boolean = false;
    subscriber: Subscription = this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe((event: NavigationEnd) => {
        this.showSearchBar = event.url == Constants.PRODUCTS_ALL_URL
    });

    constructor(
        private userService: UserService,
        private notificationService: NotificationService,
        private authService: AuthService,
        private weatherService: WeatherService,
        private router: Router 
    ) { }

    ngOnInit(): void {
        this.weatherService.setWeather();
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
                this.router.navigateByUrl(this.router.url);
            }
        });
    }
}
