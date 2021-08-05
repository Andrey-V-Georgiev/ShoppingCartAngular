import {RouterModule, Routes} from '@angular/router'; 
import {HomeGuestComponent} from './home-guest/home-guest.component';
import {HomeUserComponent} from './home-user/home-user.component';


const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: 'guest',
                component: HomeGuestComponent
            }, {
                path: 'home',
                component: HomeUserComponent
            }
        ]
    }
];

export const HomeRoutingModule = RouterModule.forRoot(routes);