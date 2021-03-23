import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotFoundComponent } from './not-found/not-found.component'
import { HomeComponent } from './home/home.component';

import { RouterGuard } from './router.guard';
const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'category/:categoryId',
    component: HomeComponent,
  },
  {
    path: 'admin',
    loadChildren: "./admin/admin.module#AdminModule", // lazy loading module (Deprecated for say version 10)
    //loadChildren: () => import('./admin/admin.module').then(mod => mod.AdminModule), // lazy loading (Current but uses JSversion > ECMA Script 2015)
    canActivate: [RouterGuard]
  }, 
  {
    path: '**',
    component: NotFoundComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
