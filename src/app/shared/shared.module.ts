import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SafeIframe} from './pipes/safe-iframe.pipes';

@NgModule({
    declarations: [
        SafeIframe
    ],
    imports: [
        CommonModule
    ],
    exports: [
        SafeIframe
    ]
})
export class SharedModule { }
