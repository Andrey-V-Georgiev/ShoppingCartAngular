import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {UserService} from '../user.service';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

    form: FormGroup;

    constructor(
        private fb: FormBuilder,
        private userService: UserService,
        private router: Router
    ) { 
        this.form = this.fb.group({
            username: ['', [Validators.required, Validators.minLength(3)]],
            email: ['', [Validators.required, Validators.minLength(3)]],
            password: ['', [Validators.required, Validators.minLength(3)]],
            confirmPassword: ['', [Validators.required, Validators.minLength(3)]]
        });
    }

    ngOnInit(): void {
    }

    submitHandler(): void {
        const data = this.form.value;
        console.log("Form data: ", data);

        this.userService.register(data).subscribe({
            next: () => {
                console.error(data);
            },
            error: (err) => {
                console.error(err);
            }
        });
    }
}
