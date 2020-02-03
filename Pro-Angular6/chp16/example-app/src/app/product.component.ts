import { ApplicationRef, Component } from "@angular/core";
import { ProductRepository } from "./product.repository";
import { Product } from "./product.model";
import { ProductFormGroup } from "./product.form.model";
import { NgForm } from "@angular/forms";

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

  showTable: boolean = true;

  getProduct(key: number): Product {
    return this.productRepository.getProduct(key);
  }

  getProducts(): Product[] {
    return this.productRepository.getProducts();
  }

  addProduct(p: Product) {
    //console.log("New Product: " + this.jsonProduct);
    this.productRepository.saveProduct(p);
  }
   
  deleteProduct(key: number) {
    this.productRepository.deleteProduct(key);
  }

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