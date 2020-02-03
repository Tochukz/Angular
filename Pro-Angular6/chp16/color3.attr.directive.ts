import { ElementRef, Directive, Input, SimpleChange, Output, EventEmitter, HostListener, HostBinding } from "@angular/core";
import { Product } from './product.model';

@Directive({
    selector: '[color3-attr]'
})
export class Color3AttrDirective {
    constructor(private element: ElementRef) {
        this.element.nativeElement.addEventListener("click", e => {
          if (this.product != null) {
              this.customEvent.emit(this.product.category);
              //This argument will be represented in color2-category attribute as the $event variable
          }
        });
    }

    @Input("color3-attr")
    @HostBinding("class")
    bgClass: string
    // This sets up a binding between the class property on the host element and the decorator's bgClass property.

    @Input("color3-product")
    product: Product;

    @Output("color3-category")
    customEvent = new EventEmitter<string>();
    //The string type parameter indicates that listeners to the event will receive a string when the event is triggered.
    //Directives can provide any type of object to their event listeners, but common choices are string, number, data model and Event objects.

    @HostListener("click")
    triggerCustomEvent(){
      if (this.product != null) {
          this.customEvent.emit(this.product.category);
      }
    }

    ngOnInit() {
        this.element.nativeElement.classList.add(this.bgClass || "bg-success", "text-white");
    }

    ngOnChanges(changes: {[property: string]: SimpleChange}) {
        console.log(changes);
        let change = changes["bgClass"];
        let classList = this.element.nativeElement.classList;
        if (!change.isFirstChange() && classList.contains(change.previousValue)) {
            classList.remove(change.previousValue);
        } 
        if (!classList.contains(change.currentValue)) {
            classList.add(change.currentValue);
        }
    }

}


/*
 * The directive supports expressions by using the @Input decorator. 
 * @Input decorator is used to specify the name of the attribute that contains the expression.
 * 
 * You don't need to provide an argument to the @Input decorator if the name of the property corresponds to the name of 
 * the attribute on the host element. 
 * So if you apply @Input() to a property called nyVal, then Angular will look for a myVal attribute on the host element.
 * 
 * The constructor cannot access the input property value because its value will not be set by Angular until after the constructor 
 * has completed and the new directive object has been produced.  
 * To address this, directives can implement lifecycle hook methods., which Angular uses to provide directives with useful 
 * information after they have been created and while the application us running.
 * 
 * The directive lifecycle Hook methods includes: ngOnInit, ngOnChanges, ngDoCheck, ngAfterContentInit, ngAfterContentChecked, 
 * and ngOnDestroy
 *
 * Changing a property value doesn't automaticallu cause directives to respond. To handle changes, a directive must implement the 
 * ngOnChanges method to recieve notification when the value of an imput property changes.
 * 
 * The ngOnChange method is called once before the ngOnInit method and then called again each time there are changes to any of 
 * a directive's input properties.  
 * 
 * The ngOnChanges parameter is an object whoe property names refer to each changed input property and whose value 
 * are SimpleChange objects.  
 * 
 * The directive is able to refer to the value of the input property value in the constructor because Angular will have set the 
 * property value before the function assigned to handle the DOM event is invoked.  
 */