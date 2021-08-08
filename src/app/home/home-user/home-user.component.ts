import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {UserService} from 'src/app/user/user.service';

@Component({
    selector: 'app-home-user',
    templateUrl: './home-user.component.html',
    styleUrls: ['./home-user.component.css']
})
export class HomeUserComponent implements OnInit {

    public currentUser$ = this.userService.currentUser$;

    constructor(
        private userService: UserService
    ) { }

    ngOnInit(): void {
    }
}
