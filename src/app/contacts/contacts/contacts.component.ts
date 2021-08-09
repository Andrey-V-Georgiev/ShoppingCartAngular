import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-contacts',
    templateUrl: './contacts.component.html',
    styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

    // mapOptions: google.maps.MapOptions = {
    //     center: {lat: 38.9987208, lng: -77.2538699},
    //     zoom: 14
    // }
    // marker = {
    //     position: {lat: 38.9987208, lng: -77.2538699},
    // }

    constructor() { }

    ngOnInit(): void {
    }

}
