import { Component, Input, ViewChildren, QueryList } from "@angular/core";
import { ProductRepository } from './product.repository';
import { Product } from "./product.model";
import { PaCellColor } from "./cellColor.directive"''

@Component({
    selector: "paProductTable",
    templateUrl:"productTable.component.html"
})
export class ProductTableComponent {
  @Input('repository')
  productRepo: ProductRepository;

  getProduct(key: number): Product {
    return this.productRepo.getProduct(key);
  }

  getProducts(): Product[] {
      return this.productRepo.getProducts();
  }

  deleteProduct(key: number): void {
      return this.productRepo.deleteProduct(key);
  }

  showTable: boolean = true;

  /** Query to select all the PaCellColor objects in the template */
  @ViewChildren(PaCellColor)
  viewChildren: QueryList<PaCellColor>;

  ngAfterViewInit() {
    this.viewChildren.changes.subscribe(() => {
      this.updateViewChildren();
    });
    this.updateViewChildren();
  }

  private updateViewChildren() {
    setTimeout(() => {
      this.viewChildren.forEach((child, index) => {
        child.setColor(index % 2 ? true : false);
      })
    }, 0);
  }
}

/*
 * The Component decorator describes and configure the component. The properties of the decorator includes: 
 * animations, encapsulation, selector, styles, styleUrls, template, templateUrl, providers and viewProviders.
 * 
 * There are two property decorator that can be used to query for directives or components defined in a template: 
 * @ViewChild(class) Tells Angular to query for the first directive or component object of the specfified type and assign it to 
 * the property. The class name can be replaced with a ttemplate variable. Multple classed or template can be separated by commas.
 * 
 * @ViewChildren(class) Assigns all the directive and component object of the specified type to the property. Template variable 
 * can e used instead of classes, and multiple values can be separated by commas. 
 * 
 * Components have two different lifecu=ycle methods that are used to provide information about how template has been processed: 
 * ngAfterViewInit - Is called when the component's view has been initialized. The results of the view queries are set before this method is invoked.  
 * ngAfterViewChecked - Is called after the component's view has been checked as part of the change detection process.  
 */