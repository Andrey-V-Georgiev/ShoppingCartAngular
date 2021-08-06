import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeGuestComponent} from './home/home-guest/home-guest.component';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        component: HomeGuestComponent
    } 
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
