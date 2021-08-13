import {Component, OnInit} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {Router} from '@angular/router';
import {AuthService} from 'src/app/core/services/auth.service';
import {NotificationService} from 'src/app/core/services/notification.service';
import {WeatherService} from 'src/app/core/services/weather.service';
import {UserService} from 'src/app/user/services/user.service';
import {EventEmitterProductService} from '../services/event-emitter-product.service';

@Component({
    selector: 'app-product-edit',
    templateUrl: './product-edit.component.html',
    styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

    constructor(
        private userService: UserService,
        private notificationService: NotificationService,
        private authService: AuthService,
        private weatherService: WeatherService,
        private router: Router,
        private formBuilder: FormBuilder,
        private eventEmitterService: EventEmitterProductService
    ) { }

    ngOnInit(): void {
    }

}
