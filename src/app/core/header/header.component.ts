import { Component, OnInit } from '@angular/core';
import {UserService} from 'src/app/user/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isLogged$ = this.userService.isLogged$;  

  constructor( 
    public userService: UserService
  ) { }

  ngOnInit(): void {
  } 
}
