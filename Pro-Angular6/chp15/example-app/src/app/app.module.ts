import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//import { AppComponent } from './app.component';
import { ProductComponent } from './product.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';  
import { ColorAttrDirective } from './color.attr.directive';
import { Color2AttrDirective } from './color2.attr.directive';
import { Color3AttrDirective } from './color3.attr.directive';
import { PaModel } from './twoway.directive';

@NgModule({
  declarations: [
    ProductComponent,
    ColorAttrDirective,
    Color2AttrDirective,
    Color3AttrDirective,
    PaModel
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [ProductComponent]
})
export class AppModule { }

/*
 * Adding FormsModule to the list of dependencies enables the form features and makes then available for use throughout te application.  
 * The ReactiveFormsModule is a dependency which is required for module-based forms.
 */