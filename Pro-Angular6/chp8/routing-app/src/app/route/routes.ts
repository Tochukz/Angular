import { HomeComponent } from '../home/home.component';
import { AboutusComponent } from '../aboutus/aboutus.component';
import { ContactusComponent } from '../contactus/contactus.component';
import { UserComponent } from '../user/user.component';
import { CurrentComponent as CurrentUser} from './../user/children/current/current.component';
import { AddComponent as AddUser } from './../user/children/add/add.component';
import { ListComponent as UserList } from './../user/children/list/list.component';
import { LoginComponent } from '../login/login.component';
import { NotfoundComponent } from '../notfound/notfound.component';

import { RouterGuard } from './router.guard';

export default [
    {
        path:'',
        component: HomeComponent,
        canActivate: [RouterGuard],
    },
    {
        path: 'about',
        component: AboutusComponent,
        canActivate: [RouterGuard],
    },
    {
        path: 'aboutus',
        redirectTo: 'about'
    },
    {
        path: 'contact',
        component: ContactusComponent,
        canActivate: [RouterGuard],
    },
    {
        path: 'contactus',
        redirectTo: 'contact'
    },
    {
        path: 'login',
        component: LoginComponent,
        canActivate: [RouterGuard],
    },
    {
        path: 'users',
        component: UserComponent,
        canActivate: [RouterGuard],        
        children: [
          {
            path: 'add',
            component: AddUser,
          },
          {
            path: 'list',
            component: UserList,
          },
          {
            path: 'current/:userId',
            component: CurrentUser,
          }         
        ]
    },
    {
        path: '**',
        component: NotfoundComponent,
        canActivate: [RouterGuard], 
    }
];