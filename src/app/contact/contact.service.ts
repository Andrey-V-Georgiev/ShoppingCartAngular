import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import Constants from '../shared/constants/constants';

@Injectable({
    providedIn: 'root'
})
export class ContactService {

    private _state: BehaviorSubject<string> = new BehaviorSubject('SOFIA');
    private currentCity$: Observable<string> = this._state.asObservable();

    constructor() { }

    getCurrentCity() {
        return this.currentCity$;
    }

    changeCity(cityName: string) {

        switch (cityName) {

            case "SOFIA":
                this._state.next('SOFIA');
                break;

            case "PLOVDIV":
                this._state.next('PLOVDIV');
                break;
        }
    }
}
