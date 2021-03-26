import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';
import { HomeModule } from './home/home.module';
import { LoginPageModule } from './login-page/login-page.module';
import { ContactusModule } from './contactus/contactus.module';
import { AppComponent } from './app.component';

import { counterReducer } from './reducers/counter.reducer';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    LoginPageModule,
    ContactusModule,
    StoreModule.forRoot({count: counterReducer}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
