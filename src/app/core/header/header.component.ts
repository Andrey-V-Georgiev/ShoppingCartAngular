import { Component, OnInit } from '@angular/core';
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
    public notificationService: NotificationService
  ) { }

  ngOnInit(): void {
  } 
}
