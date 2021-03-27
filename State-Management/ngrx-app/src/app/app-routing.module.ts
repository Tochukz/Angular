import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RouterGuard } from './router.guard';
import { HomeComponent } from './home/home.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { CategoryComponent } from './category/category.component';
import { ContactusComponent } from './contactus/contactus.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [RouterGuard]
  }, 
  {
    path: 'login',
    component: LoginPageComponent,
    canActivate: [RouterGuard]
  },
  {
    path: 'category',
    component: CategoryComponent,
    canActivate: [RouterGuard]
  },
  {
    path: 'contactus',
    component: ContactusComponent,
    canActivate: [RouterGuard]
  },
  {  
    path: '**',
    component: HomeComponent,
    canActivate: [RouterGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
