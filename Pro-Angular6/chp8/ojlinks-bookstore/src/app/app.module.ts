import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { CartModule } from './cart/cart.module';
import { BookdetailsModule } from './bookdetails/bookdetails.module';
import { CategoryModule } from './category/category.module';
import { CheckoutModule } from './checkout/checkout.module';

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
    CartModule,
    BookdetailsModule,
    CheckoutModule
  ], 
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
