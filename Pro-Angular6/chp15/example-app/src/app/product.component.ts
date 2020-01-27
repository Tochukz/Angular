import { ApplicationRef, Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { ProductRepository } from "./product.repository";
import { Product } from "./product.model";
import { ProductFormGroup } from "./product.form.model";

@Component({
   selector: "app",
   templateUrl: "product.template.html"
})
export class ProductComponent {
  productRepository: ProductRepository = new ProductRepository();

  // selectedProduct: string

  newProduct: Product = new Product();
  
  formSubmitted: boolean = false;

  productFormGroup: ProductFormGroup = new ProductFormGroup();

  getProduct(key: number): Product {
    return this.productRepository.getProduct(key);
  }

  getProducts(): Product[] {
    return this.productRepository.getProducts();
  }

  // getSelected(product: Product): boolean {
  //   return product.name == this.selectedProduct;
  // }

  // get jsonProduct() {
  //   return JSON.stringify(this.newProduct);
  // }

  addProduct(p: Product) {
    //console.log("New Product: " + this.jsonProduct);
    this.productRepository.saveProduct(p);
  }
  
  /**
   * This method can be used to produce validation messages for multiple elements. 
   */
  // getValidationMessages(state: any, thingName?: string) {
  //   let thing: string = state.path || thingName; //state.path returns the name of the element.
  //   let messages: string[] = [];
  //   if (state.errors) {
  //     for (let errorName in state.errors) {
  //       switch (errorName) {
  //         case "required": 
  //           messages.push(`You must enter a ${thing}`);
  //           break;
  //         case "minlength": 
  //           messages.push(`A ${thing} must be at least ${state.errors['minlength'].requiredLength} characters`);
  //           break;
  //         case "pattern":  
  //           if (state.errors.pattern.requiredPattern == '^[0-9\.]+$') {
  //             messages.push(`Only input digits 0-9 is permitted for the ${thing}`);
  //           } else if (state.errors.pattern.requiredPattern == "^[A-Za-z ]+$") {
  //             messages.push(`Only letters and spaced can be entered in the ${thing} field`);
  //           }
  //           break;
  //       }
  //     }
  //   }
  //   return messages;
  // }

  // getFormValidationMessages(form: NgForm): string[] {
  //   let messages: string[] = [];
  //   // form.controls returns an object that has properties for each of the individual element in the form.
  //   // for example, there is a name property that represents the input element in the example which is assigned an object that 
  //   // represents that element and defined the same validation properties that are available for individual elements
  //   Object.keys(form.controls).forEach(k => {
  //     this.getValidationMessages(form.controls[k], k)
  //         .forEach(m => messages.push(m));
  //   });
  //   return messages;
  // }

  submitForm(form: NgForm) {
    this.formSubmitted =  true;
    if (form.valid) {
      this.addProduct(this.newProduct);
      this.newProduct = new Product();
      form.reset();
      this.formSubmitted = false;
    }
  }
}