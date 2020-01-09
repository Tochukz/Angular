import { ApplicationRef, Component } from "@angular/core";
import { ProductRepository } from "./product.repository";
import { Product } from "./product.model";

@Component({
   selector: "app",
   templateUrl: "product.template.html"
})
export class ProductComponent {
  productRepository: ProductRepository = new ProductRepository();
  fontSizeWithUnits: string = "30px";
  fontSizeWithoutUnits: string = "30";

  constructor(ref: ApplicationRef) {
    // Do not do these in a real project
    (<any>window).appRef = ref;
    (<any>window).productRepo = this.productRepository;
    /* 
      Exposing these objects in the global namespace allows them to be manipulated through the browser's 
      JavaScript console which is important for demonstration.

      Now open of the console and type - productRepo.products[0].name = "New Kayak"; and press enter
      This changes the name of the first object from the products object array.
      To tell Angular to check for changes, type the following to the console - appRef.tick() 

      The tick method starts the Angular change detection process, where Angular looks at the data in the
      application and the expressions in the data binding and processes any changes.
    */
  }

  getClasses(key: number): string {
    let product = this.productRepository.getProduct(key);
    return "p-2 " + (product.price > 50 ? "bg-info" : "bg-warning");
  }

  getClassMap(key: number) {
    let product = this.productRepository.getProduct(key);
    return {
      "text-center bg-danger": product.name == "Kayak",
      "bg-info": product.price < 50
    };
  }

  getStyles(key: number) {
    let product = this.productRepository.getProduct(key);
    return {
      fontSize: "30px",
      "margin.px": 100,
      color: product.price > 50 ? "red" : "green"
    }
  }
  
  getProductByPosition(position: number): Product {
    return this.productRepository.getProducts()[position];
  }

  getClassesByPosition(position: number): string {
    let product = this.getProductByPosition(position);
    return "p-2 " + (product.price < 50 ? "bg-info" : "bg-warning"); 
  }
}