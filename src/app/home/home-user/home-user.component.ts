import {Component, OnInit} from '@angular/core'; 
import {Observable} from 'rxjs';
import {AuthService} from 'src/app/core/services/auth.service';
import {IUserLogin} from 'src/app/shared/interfaces/user.interfaces'; 

@Component({
    selector: 'app-home-user',
    templateUrl: './home-user.component.html',
    styleUrls: ['./home-user.component.css']
})
export class HomeUserComponent implements OnInit {

    public currentUser$: Observable<IUserLogin> = this.authService.getCurrentUser();

    constructor(
        private authService: AuthService
    ) { }

    ngOnInit(): void {
    }
}
