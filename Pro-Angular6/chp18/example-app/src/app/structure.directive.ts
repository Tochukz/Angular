import { Directive, SimpleChange, ViewContainerRef, TemplateRef, Input } from "@angular/core";

@Directive({
    selector: "[paIf]"
})
export class PaStructreDirective {
    constructor(private container: ViewContainerRef, private template: TemplateRef<Object>) {}

    @Input("paIf") 
    expressionResult: boolean

    ngOnChanges(changes: { [property: string]: SimpleChange}) {
        let change = changes["expressionResult"];
        if (!change.isFirstChange() && !change.currentValue) {
            this.container.clear();
        } else if (change.currentValue) {
          this.container.createEmbeddedView(this.template);
        }
    }
}

/*
 * The first indication that this is a structural directive comes from the injected types on the contructor: 
 * ViewContainerRef and TemplateRef     
 * 
 * The ViewContainerRef is responsible for managing a collection of views. 
 * The most useful properties and methods provided by the ViewContainerRef are:  
 *   element property which return an ElementREf object, 
 *   createEmbeddedView(template) whose results is a ViewRef object for the embeedded template, 
 *   clear() which removes all the view from the container,
 *   length property which returns the number of views in the container
 *   get(index) which returns the ViewRef representing the view at which the specified index
 *   indxOf(view) returns the index of the specified ViewRef object
 *   insert(view, index) insert a view at the specified index,
 *   remove(index) removes and destroys the view at the specified index
 *   detach(index) detaches the view without destroying to. view can be inserted later.
 *   
 * The ngOnChanges() method is invoked during initialization just before the ngOnInit() method is invoked
 * and again whenever the value of the directive's expression changes.
 */