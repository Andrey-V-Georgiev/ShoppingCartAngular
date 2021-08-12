import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {tap} from 'rxjs/operators';
import {IContact} from '../shared/interfaces/contact.interfaces';

@Injectable({
    providedIn: 'root'
})
export class ContactService {

    private _stateAll: BehaviorSubject<IContact[]> = new BehaviorSubject(undefined);
    private contactsAll$: Observable<IContact[]> = this._stateAll.asObservable();

    private _stateCity: BehaviorSubject<IContact> = new BehaviorSubject(undefined);
    private currentCity$: Observable<IContact> = this._stateCity.asObservable();

    constructor(
        private http: HttpClient
    ) { }

    getCityAll(): Observable<IContact[]> {
        return this.contactsAll$;
    }

    getCurrentCity(): Observable<IContact> {
        return this.currentCity$;
    }

    loadContacts(): Observable<IContact[]> {
        const contacts: Observable<IContact[]> = this.http.get('/contact/all').pipe(
            tap((data: IContact[]) => {
                this._stateAll.next(data)
                this._stateCity.next(data.find(c => c.cityName == 'Varna'))
            })
        );
        return contacts;
    }

    changeCity(cityName: string) {
        const nextCity: IContact = this._stateAll.value.find(c => c.cityName == cityName);
        this._stateCity.next(nextCity);
    }
}
