
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HomeModule } from './home/home.module';
import { AboutusModule } from './aboutus/aboutus.module';
import { ContactusModule } from './contactus/contactus.module';
import { UserModule } from './user/user.module';
import { LoginModule } from './login/login.module';
import { NotfoundModule } from './notfound/notfound.module';

import { AppComponent } from './app.component';
import  routes  from './route/routes';




@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HomeModule,
    ContactusModule,
    AboutusModule,
    LoginModule,
    UserModule,
    NotfoundModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
