import { Directive, ViewContainerRef, TemplateRef, Input, SimpleChange, IterableDiffer,  IterableDiffers, 
          ChangeDetectorRef, CollectionChangeRecord, DefaultIterableDiffer, ViewRef } from "@angular/core";
import { setRootDomAdapter } from "@angular/platform-browser/src/dom/dom_adapter";

@Directive({
    selector: "[paForOf]"
})
export class PaIteratorDirective {
    private differ: DefaultIterableDiffer<any>;
    private views: Map<any, PaIteratorContext> = new Map<any, PaIteratorContext>();

    constructor(
                private container: ViewContainerRef, 
                private template: TemplateRef<Object>,
                private differs: IterableDiffers,
                private changeDetector: ChangeDetectorRef
            ) {}

    @Input('paForOf')
    dataSource: any

    ngOnInit() {
      this.differ = <DefaultIterableDiffer<any>> this.differs.find(this.dataSource).create();
      /* The find() method of the IterableDiffers accepts an object and returns an IterableDifferFactory object taht is capable
       * of creating a differ class for the object. 
       * The IterableDifferFactory class defines a create method that returns an DefaultDiffer object that will perform that actual 
       * change detection using teh ChangeDetectorRef object that was received in the contstructor.
       */
    }

    /* This method is invoked each time an imput element is focus, a key event is triggered, a validation check is performed and so on
     * any where in the aplication.
     */
    ngDoCheck() {
        let changes = this.differ.diff(this.dataSource);
        if (changes != null) {
            console.log("ngDoCkeck called, changes detected");
            changes.forEachAddedItem(addition => {
                let context = new PaIteratorContext(addition.item, addition.currentIndex, changes.length);
                context.view = this.container.createEmbeddedView(this.template, context);
                this.views.set(addition.trackById, context);
            });
            let removals = false;
            changes.forEachRemovedItem(removal => {
                removals = true;
                let context = this.views.get(removal.trackById);
                if (context != null) {
                    this.container.remove(this.container.indexOf(context.view));
                    this.views.delete(removal.trackById);
                }
            });
            if (removals) {
                let index = 0;
                this.views.forEach(context => context.setData(index++, this.views.size));
            }
        }
        /* The DefaultIterableDiffer.diff method accepts an object for comparision and returns a list of changes or null if there have
         * been no changes.
         * 
         * The DefaultIterableDiff.diff() method returns an object which have the following properties and methods:  
         * collection, length, forEachItem(func), forEachPreviousItem(func), forEachAddedItem(func), forEachMovedItem(func),
         * forEachRemovedItem(func) and forEachIdentityChange(func).
         * The func passed to the methods above will receive a CollectionChangeRecord object. This CollectionChangeRecord object have
         * the following properties:
         * item(which returns the data item), trackById, currentIndex and previousIndex.  
         */
    }
}

class PaIteratorContext {
    index: number;
    odd: boolean;
    even: boolean;
    first: boolean;
    last: boolean;
    view: ViewRef;

    constructor(public $implicit: any, public position: number, total: number) {
        this.setData(position, total);
        // This is to show the reactive nature of the data binding to the implicit property and other properties of the iterative directive  
        // setInterval(() => {
        //   this.odd = !this.odd;
        //   this.even = !this.even;
        //   this.$implicit.price++;
        // }, 2000);
    }

    setData(index: number, total: number) {
        this.index = index;
        this.odd = index % 2 == 1;
        this.even = !this.odd;
        this.first = index == 0;
        this.last = index == total -1;
     } 
}

/*
 * Angular detects a change in the value of the implicit property and other properties of the iterative directive's context. 
 * A change in any of this property results in a change in the elements that are bounded to the properties.a
 * 
 * Angular does not detech change in te collection bounded to the iterative directive such as when objects are added, removed or 
 * replaced in the collection. This means that the ngOnChanges() method will not be invoked.  
 * 
 * Receiving notification about collection-level changes is done by imolementing the ngDoCheck() method, which is called whenever 
 * a data change is detected in the application, regardless of where that change occurs or what kind of change it is.  
 * 
 * Implementing the ngDoCheck method required caution, however, because it represents a pitfall that can destroy the performance of 
 * a web application.  
 */
