import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact/contact.component'; 
import {ContactRoutingModule} from './contact-routing.module';
import {ContactService} from './contact.service';

@NgModule({
  declarations: [
    ContactComponent
  ],
  imports: [
    CommonModule,
    ContactRoutingModule 
  ],
  providers: [
    ContactService
  ]
})
export class ContactModule { }
