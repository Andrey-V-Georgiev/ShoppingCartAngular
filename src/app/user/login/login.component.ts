import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {UserService} from '../user.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    form: FormGroup;

    constructor(
        private formBuilder: FormBuilder,
        private userService: UserService,
        private router: Router
    ) {
        this.form = this.formBuilder.group({
            username: ['', [Validators.required, Validators.minLength(3)]],
            password: ['', [Validators.required, Validators.minLength(3)]],
        });
    }

    ngOnInit(): void {
    }

    submitHandler(): void {
        const formData = this.form.value;

        this.userService.login(formData).subscribe({
            next: (data) => {
                console.log('login data: ', data);
                this.router.navigate(['/home']);
            },
            error: (err) => {
                console.log("login err: ", err);
                this.router.navigate(['/']);
            }
        });
    }
}
