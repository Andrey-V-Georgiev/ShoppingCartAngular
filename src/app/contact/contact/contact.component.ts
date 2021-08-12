import {Component, OnInit} from '@angular/core';
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';
import {Observable} from 'rxjs';
import {IContact} from 'src/app/shared/interfaces/contact.interfaces';
import {ContactService} from '../contact.service';

@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

    currentCity$: Observable<IContact> = this.contactService.getCurrentCity();
    url$: Observable<string> = this.contactService.getUrl();

    constructor(
        private contactService: ContactService
    ) { }

    ngOnInit(): void {
    }

    changeCity(cityName: string) {
        this.contactService.changeCity(cityName);
    }
}
