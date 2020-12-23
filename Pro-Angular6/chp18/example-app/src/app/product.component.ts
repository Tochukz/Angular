import { Component } from "@angular/core";
import { ProductRepository } from "./product.repository";
import { Product } from "./product.model";

@Component({
   selector: "app",
   templateUrl: "product.template.html",
   //styles: ["/deep/ div { border: 2px black solid; font-style: italic"]
})
export class ProductComponent {
  productRepository: ProductRepository = new ProductRepository();


  addProduct(p: Product) {
    this.productRepository.saveProduct(p);
  }
}

/*
 * Some CSS style properties, such as font-style, are inherited by default. 
 * Setting such a property in a parent component will affect the elements in child component templates because the browser autmatically applies the style. 
 * Other properties, such as boarder, are not inherited by default. 
 * Setting such a property in a parent component has no effect on child component template unless the /deep/ or >>> selector are used.
 * 
 */
