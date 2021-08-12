import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';
import {NotificationService} from 'src/app/core/services/notification.service';
import {IContact} from 'src/app/shared/interfaces/contact.interfaces';
import {ContactService} from '../contact.service';

@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

    contactsAll$: Observable<IContact[]> = this.contactService.getCityAll();
    currentCity$: Observable<IContact> = this.contactService.getCurrentCity(); 

    constructor(
        private contactService: ContactService,
        private router: Router,
        private notificationService: NotificationService
    ) { }

    ngOnInit(): void {
        this.contactService.loadContacts().subscribe({
            error: (err) => {
                const errorMessage: string = err.error;
                this.notificationService.setErrorState(errorMessage);
                this.router.navigateByUrl(this.router.url);
            }
        })
    }

    changeCity(cityName: string) {
        this.contactService.changeCity(cityName);
    }
}
