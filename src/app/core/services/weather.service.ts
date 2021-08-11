import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {Observable} from 'rxjs'; 
import Constants from 'src/app/shared/constants/constants';
import {IWeather} from 'src/app/shared/interfaces/weather.interfaces';

@Injectable({
    providedIn: 'root'
})
export class WeatherService {

    private _state: BehaviorSubject<any> = new BehaviorSubject(undefined);
    private weather$: Observable<IWeather> = this._state.asObservable();

    constructor(
        private http: HttpClient
    ) { }

    getWeather(): Observable<IWeather> {
        return this.weather$;
    }

    setWeather(): void {
        this.http.get(Constants.WEATHER_API_URL).subscribe({
            next: (data) => {
                this._state.next(data);
            }
        });
    }
}
