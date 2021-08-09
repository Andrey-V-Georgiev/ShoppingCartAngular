import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeGuestComponent} from './home/home-guest/home-guest.component';
import {HomeUserComponent} from './home/home-user/home-user.component';

const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: '',
                pathMatch: 'full',
                component: HomeGuestComponent
            },
            {
                path: 'home',
                component: HomeUserComponent
            } 
        ]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
