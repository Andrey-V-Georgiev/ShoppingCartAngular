import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact/contact.component'; 
import {ContactRoutingModule} from './contact-routing.module';
import {ContactService} from './services/contact.service';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  declarations: [
    ContactComponent
  ],
  imports: [
    CommonModule,
    ContactRoutingModule,
    SharedModule 
  ],
  providers: [
    ContactService
  ]
})
export class ContactModule { }
