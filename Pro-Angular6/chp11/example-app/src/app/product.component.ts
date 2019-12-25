import { Component } from "@angular/core";
import { ProductRepository } from "./product.repository";

@Component({
   selector: "app",
   templateUrl: "product.template.html"
})
export class ProductComponent {
  productRepository: ProductRepository = new ProductRepository();
}