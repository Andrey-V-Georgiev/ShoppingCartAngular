import {Injectable, EventEmitter} from '@angular/core';
import {Subscription} from 'rxjs/internal/Subscription';

@Injectable({
    providedIn: 'root'
})
export class EventEmitterProductService {

    invokeSearchProducts = new EventEmitter();
    subscription: Subscription;

    constructor() { }

    onProductEdit(id: string) {
        this.invokeSearchProducts.emit(id);
    }
}
