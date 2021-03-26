import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { ContactusComponent } from './contactus/contactus.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  }, 
  {
    path: 'login',
    component: LoginPageComponent
  },
  {
    path: 'contactus',
    component: ContactusComponent
  },
  {  
    path: '**',
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
