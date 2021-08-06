import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeGuestComponent} from './home-guest/home-guest.component';
import {HomeUserComponent} from './home-user/home-user.component';


const routes: Routes = [
    {
        path: '',
        children: [ 
            {
                path: 'home',
                component: HomeUserComponent
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class HomeRoutingModule { }