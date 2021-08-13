import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {INotificationState} from '../../shared/interfaces/notification-state.interfaces';

@Injectable({
    providedIn: 'root'
})
export class NotificationService {

    private _stateNotification: BehaviorSubject<INotificationState> = new BehaviorSubject(this.generateInitialState()); 

    constructor(
    ) { }

    getNotificationState(): Observable<INotificationState> { 
        return this._stateNotification;
    }

    generateInitialState() {
        const initialState: INotificationState = {
            notificationMessage: null,
            className: "alert alert-light text-center col-6"
        } as INotificationState;

        return initialState;
    }

    setSuccessState(message: string) {

        let nextState: INotificationState = {
            notificationMessage: message,
            className: "alert alert-success text-center col-6"
        } as INotificationState;

        this._stateNotification.next(nextState);

        /* Hide the notification after few seconds */
        setTimeout(() => this._stateNotification.next(this.generateInitialState()), 3000);
    }

    setErrorState(message: string) {

        let nextState: INotificationState = {
            notificationMessage: message,
            className: "alert alert-danger text-center col-6"
        } as INotificationState;

        this._stateNotification.next(nextState);

        /* Hide the notification after few seconds */
        setTimeout(() => this._stateNotification.next(this.generateInitialState()), 3000);
    }
}
