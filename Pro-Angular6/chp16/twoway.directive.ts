import { Input, Output, EventEmitter, Directive, HostBinding, HostListener, SimpleChange } from "@angular/core";

@Directive({
    selector: "input[paModel]",
    exportAs: "paModel"
})
export class PaModel {

  direction: string = "None"

  @Input("paModel")
  modelProperty: string;

  @HostBinding("value")
  fieldValue: string = "";

  ngOnChanges(changes: { [propert: string]: SimpleChange }) {
      let change = changes["modelProperty"];
      if (change.currentValue != this.fieldValue) {
          this.fieldValue = changes["modelProperty"].currentValue || "";
          this.direction = "Model";
      }
  }

  @Output("paModelChange")
  update = new EventEmitter<string>();

  @HostListener("input", ["$event.target.value"]) 
  updateValue(newValue: string) {
      this.fieldValue = newValue;
      this.update.emit(newValue);
      this.direction = "Element";
  }
}

/*
 * The exportAs property of the @Directive decorator specifies a name that will be used 
 * to refer to the directive in template variables. 
 * When you use the exportAs decorator, you are providing access to all the methods and
 * properties defiend by the directive to be used in template expressions and data bindings. 
 */