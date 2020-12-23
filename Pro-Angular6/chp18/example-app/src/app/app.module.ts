import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//import { AppComponent } from './app.component';
import { ProductComponent } from './product.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';  
import { PaStructreDirective } from './structure.directive'; 
import { PaIteratorDirective } from './iterator.directive';
import { PaCellColor } from "./cellColor.directive";
import { PaCellColorSwitcher } from "./cellColorSwitcher.directive";
import { ProductTableComponent } from './productTable.component';
import { ProductFormComponent } from './productForm.component';
import { PaToggleView } from './toggleView.component';

@NgModule({
  declarations: [
    ProductComponent,
    PaStructreDirective,
    PaIteratorDirective,
    PaCellColor,
    PaCellColorSwitcher,
    ProductTableComponent,
    ProductFormComponent,
    PaToggleView
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