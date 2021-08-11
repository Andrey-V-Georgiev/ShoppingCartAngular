import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {NotificationService} from 'src/app/core/notification.service';
import {confirmPasswordValidator, emailValidator} from 'src/app/shared/validators/form.validators';
import {UserService} from '../user.service';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

    form: FormGroup;

    constructor(
        private formBuilder: FormBuilder,
        private userService: UserService,
        private router: Router,
        public notificationService: NotificationService
    ) {
        this.form = this.formBuilder.group({
            username: ['', [Validators.required, Validators.minLength(3)]],
            email: ['', [Validators.required, emailValidator]],
            password: ['', [Validators.required, Validators.minLength(3)]],
            confirmPassword: ['', [Validators.required, confirmPasswordValidator]]
        });
    }

    ngOnInit(): void {
    }

    submitHandler(): void {
        const data = this.form.value;
        this.userService.register(data).subscribe({
            next: (message) => {
                this.notificationService.setSuccessState(message);
                this.router.navigate(['/login']);
            },
            error: (err) => {
                const errorMessage: string = err.error;
                this.notificationService.setErrorState(errorMessage);
                this.router.navigate(['/']);
            }
        });
    }
}
