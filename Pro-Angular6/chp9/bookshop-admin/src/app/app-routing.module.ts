
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { NotFoundComponent } from './not-found/not-found.component'

import { RouterGuard } from './router.guard';
const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    canActivate: [RouterGuard],
  },
  {
    path: 'admin',
    loadChildren: "./admin/admin.module#AdminModule",
    canActivate: [RouterGuard]
  }, 
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [RouterGuard]
  },
  {
    path: '**',
    component: NotFoundComponent,
    canActivate:[RouterGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
