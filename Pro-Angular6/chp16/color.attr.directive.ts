import { Directive, ElementRef, Attribute } from "@angular/core";

@Directive({
    selector: "[color-attr]",
})
export class ColorAttrDirective {
    constructor(element: ElementRef, @Attribute("color-attr") bgClass: string) {
        //element.nativeElement.classList.add("bg-success", "text-white");
        element.nativeElement.classList.add(bgClass || "bg-success", "text-white");
    }
}
/*
 * The ElementRef class defines a single property, nativeElement, which returns the object used by the browser to represent 
 * the element in the Domain Object Model.    
 * 
 * @Attribute is limited to static values.a
 * Directive recieved expressions using data-bound input properties also know as input prpperties or simple inputs
 * 
 */

 /*
  * The directive accepts only static inputs. It does not support expressions 
  */