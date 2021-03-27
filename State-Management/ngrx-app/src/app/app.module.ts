import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppRoutingModule } from './app-routing.module';
import { HomeModule } from './home/home.module';
import { LoginPageModule } from './login-page/login-page.module';
import { CategoryModule } from './category/category.module';
import { ContactusModule } from './contactus/contactus.module';
import { AppComponent } from './app.component';

import { counterReducer } from './store/reducers/counter.reducer';
import { CategoryEffets } from './store/effects/category.effets';
import { environment } from '../environments/environment';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HomeModule,
    LoginPageModule,
    ContactusModule,
    CategoryModule,
    StoreModule.forRoot({
      count: counterReducer
    }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    EffectsModule.forRoot([ CategoryEffets ]), // The EffectsModule.forRoot() method must be added to your AppModule imports even if you don't register any root-level effects.
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
