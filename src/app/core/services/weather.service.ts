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

    private _stateWeather: BehaviorSubject<IWeather> = new BehaviorSubject(undefined); 

    constructor(
        private http: HttpClient
    ) { }

    getWeather(): Observable<IWeather> {
        return this._stateWeather;
    }

    setWeather(): void {
        this.http.get(Constants.WEATHER_API_URL).subscribe({
            next: (data: IWeather) => {
                this._stateWeather.next(data);
            }
        });
    }
}
