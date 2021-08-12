import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SafeIframe} from './pipes/safe-iframe.pipes';
import {ShortenTextPipe} from './pipes/shorten-text.pipes';

@NgModule({
    declarations: [
        SafeIframe,
        ShortenTextPipe
    ],
    imports: [
        CommonModule
    ],
    exports: [
        SafeIframe,
        ShortenTextPipe
    ]
})
export class SharedModule { }
