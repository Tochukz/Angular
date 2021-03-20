import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BaselayoutModule } from './../baselayout/baselayout.module';
import { UserComponent } from './user.component';
import { CurrentComponent as CurrentUserComponent } from './children/current/current.component';
import { ListComponent as UserListComponent } from './children/list/list.component';
import { AddComponent as AddUserComponent } from './children/add/add.component';

@NgModule({
  imports: [
    CommonModule,
    BaselayoutModule,
    RouterModule
  ],
  declarations: [UserComponent, CurrentUserComponent, UserListComponent, AddUserComponent]
})
export class UserModule { }
