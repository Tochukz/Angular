import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoryModule } from './category/category.module';
import { ContactusModule } from './contactus/contactus.module';
import { BookdetailsModule } from './bookdetails/bookdetails.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    HttpClientModule,
    AppRoutingModule,
    CategoryModule,
    ContactusModule,
    BookdetailsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
