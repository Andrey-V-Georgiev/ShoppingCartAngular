import {Injectable, EventEmitter} from '@angular/core';
import {Subscription} from 'rxjs/internal/Subscription';

@Injectable({
    providedIn: 'root'
})
export class EventEmitterCoreService {

    invokeSearchProducts = new EventEmitter();
    subscription: Subscription;

    constructor() { }

    onSearchProducts(keyword: string) {
        this.invokeSearchProducts.emit(keyword);
    }
}