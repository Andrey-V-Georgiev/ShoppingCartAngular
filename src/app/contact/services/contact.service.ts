import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {tap} from 'rxjs/operators';
import {IContact} from '../../shared/interfaces/contact.interfaces';

@Injectable({
    providedIn: 'root'
})
export class ContactService {

    private _stateAll: BehaviorSubject<IContact[]> = new BehaviorSubject(undefined); 
    private _stateCity: BehaviorSubject<IContact> = new BehaviorSubject(undefined); 

    constructor(
        private http: HttpClient
    ) { }

    getCityAll(): Observable<IContact[]> {
        return this._stateAll;
    }

    getCurrentCity(): Observable<IContact> {
        return this._stateCity;
    }

    loadContacts(): Observable<IContact[]> {
        return this.http.get('/contact/all').pipe(
            tap((data: IContact[]) => {
                this._stateAll.next(data)
                this._stateCity.next(data.find(c => c.cityName == 'Varna'))
            })
        ); 
    }

    changeCity(cityName: string) {
        const nextCity: IContact = this._stateAll.value.find(c => c.cityName == cityName);
        this._stateCity.next(nextCity);
    }
}
