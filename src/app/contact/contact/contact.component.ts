import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {ContactService} from '../contact.service';

@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

    currentCity$: Observable<string> = this.contactService.getCurrentCity();

    constructor(
        private contactService: ContactService
    ) { }

    ngOnInit(): void {
    }

    changeCity(cityName: string) {
        this.contactService.changeCity(cityName);
    }
}
