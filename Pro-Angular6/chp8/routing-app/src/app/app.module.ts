import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { NotfoundComponent } from './notfound/notfound.component';

import { HomeModule } from './home/home.module';
import { AboutusModule } from './aboutus/aboutus.module';
import { ContactusModule } from './contactus/contactus.module';
import { NotfoundModule } from './notfound/notfound.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path:'',
        component: HomeComponent,
      },
      {
        path: 'about',
        component: AboutusComponent
      },
      {
        path: 'aboutus',
        redirectTo: 'about'
      },
      {
        path: 'contact',
        component: ContactusComponent
      },
      {
        path: 'contactus',
        redirectTo: 'contact'
      },
      {
        path: '**',
        component: NotfoundComponent
      }
    ]),
    HomeModule,
    ContactusModule,
    AboutusModule,
    NotfoundModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
