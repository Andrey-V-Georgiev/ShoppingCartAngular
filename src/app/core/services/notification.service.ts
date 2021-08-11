import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {NotificationState} from '../../shared/interfaces/notification-state';

@Injectable({
    providedIn: 'root'
})
export class NotificationService {

    private _state: BehaviorSubject<NotificationState> = new BehaviorSubject(this.generateInitialState());
    private notificationState$: Observable<NotificationState> = this._state.asObservable();

    constructor(
    ) { }

    getNotificationState() { 
        return this.notificationState$;
    }

    generateInitialState() {
        const initialState: NotificationState = {
            notificationMessage: null,
            className: "alert alert-light text-center col-6"
        } as NotificationState;

        return initialState;
    }

    setSuccessState(message: string) {

        let nextState: NotificationState = {
            notificationMessage: message,
            className: "alert alert-success text-center col-6"
        } as NotificationState;

        this._state.next(nextState);

        /* Hide the notification after few seconds */
        setTimeout(() => this._state.next(this.generateInitialState()), 3000);
    }

    setErrorState(message: string) {

        let nextState: NotificationState = {
            notificationMessage: message,
            className: "alert alert-danger text-center col-6"
        } as NotificationState;

        this._state.next(nextState);

        /* Hide the notification after few seconds */
        setTimeout(() => this._state.next(this.generateInitialState()), 3000);
    }
}
