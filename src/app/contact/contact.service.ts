import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {IContact} from '../shared/interfaces/contact.interfaces';

@Injectable({
    providedIn: 'root'
})
export class ContactService {

    private _state: BehaviorSubject<IContact> = new BehaviorSubject(this.generateInitialState());
    private currentCity$: Observable<IContact> = this._state.asObservable();
    private url$: Observable<string> = this.currentCity$.pipe(map(c => String(c.url)));

    constructor() { }

    getCurrentCity(): Observable<IContact> {
        return this.currentCity$;
    }

    getUrl(): Observable<string> {
        return this.url$;
    }

    changeCity(cityName: string) {

        switch (cityName) {

            case "SOFIA":
                const sofia: IContact = {
                    cityName: 'Sofia',
                    url: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5429.967270557111!2d23.31745846586174!3d42.69642569520969!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40aa856bf5f0323d%3A0x39f00d2aee5c837e!2sSofia%20Court%20House!5e0!3m2!1sen!2sbg!4v1628716103543!5m2!1sen!2sbg',
                    address: 'gsopifgosighsd[ogh[',
                    tel: '0888 888 888',
                    email: 'fjapf@hfghf.com',
                    workingHours: '09:00-17:00'
                };
                this._state.next(sofia);
                break;

            case "PLOVDIV":
                const plovdiv: IContact = {
                    cityName: 'Plovdiv',
                    url: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23667.04529178637!2d24.728477227240308!3d42.14214034010406!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14acd1b0e2446a07%3A0x6f92c125661581aa!2sSinging%20Fountains!5e0!3m2!1sen!2sbg!4v1628716621218!5m2!1sen!2sbg',
                    address: 'gsopifgosighsd[ogh[',
                    tel: '0888 888 888',
                    email: 'fjapf@hfghf.com',
                    workingHours: '09:00-17:00'
                };
                this._state.next(plovdiv);
                break;
        }
    }

    generateInitialState(): IContact {
        const initialState: IContact = {
            cityName: 'Sofia',
            url: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5429.967270557111!2d23.31745846586174!3d42.69642569520969!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40aa856bf5f0323d%3A0x39f00d2aee5c837e!2sSofia%20Court%20House!5e0!3m2!1sen!2sbg!4v1628716103543!5m2!1sen!2sbg',
            address: 'gsopifgosighsd[ogh[',
            tel: '0888 888 888',
            email: 'fjapf@hfghf.com',
            workingHours: '09:00-17:00'
        };
        return initialState;
    }
}
