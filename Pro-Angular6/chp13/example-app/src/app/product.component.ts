import { ApplicationRef, Component } from "@angular/core";
import { ProductRepository } from "./product.repository";
import { Product } from "./product.model";

@Component({
   selector: "app",
   templateUrl: "product.template.html"
})
export class ProductComponent {
  productRepository: ProductRepository = new ProductRepository();

  constructor(ref: ApplicationRef) {
    // Do not do these in a real project
    (<any>window).appRef = ref;
    (<any>window).productRepo = this.productRepository;
    /* 
      Exposing these objects in the global namespace allows them to be manipulated through the browser's 
      JavaScript console which is important for demonstration.

      Now open of the console and type - productRepo.products.shift(); and press enter
      This removes the first object form the products object array.  
      To tell Angular to check for changes, type the following to the console - appRef.tick() 

      The tick method starts the Angular change detection process, where Angular looks at the data in the
      application and the expressions in the data binding and processes any changes.
    */
  }
  
  getProductByPosition(position: number): Product {
    return this.productRepository.getProducts()[position];
  }

 getProduct(key: number): Product {
   return this.productRepository.getProduct(key);
 }

 getProducts(): Product[] {
   return this.productRepository.getProducts();
 }

 getProductCount(): number {
   console.log("getProductCount invoked");
   return this.getProducts().length;
 }
 
/* The result of the method uniquely identifies an object, and two objects are considered to be equal if they produce the same result. */
 getKey(index: number, product: Product) {
   return product.id;
 }

 /* This will result in an error when used in the template because the template will then be making changes to the application's state */
 get nextProduct(): Product {
   return this.productRepository.getProducts().shift();
 }

 /* Accessing classes in the global namespace on behalf of the template */
 getProductPrice(index: number): number {
    return Math.floor(this.getProduct(index).price);
 }

 targetName: string = "Kayak";

 counter: number  = 1;
}