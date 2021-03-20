import { BookdetailsModule } from './bookdetails/bookdetails.module';
import { CategoryModule } from './category/category.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import routes from './route/routes';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    CategoryModule,
    BookdetailsModule
  ], 
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
