import { Directive, Input, Output, EventEmitter, SimpleChange, ContentChild, ContentChildren, QueryList } from "@angular/core";

import { PaCellColor } from './cellColor.directive';

@Directive({
    selector: "table"
})
export class PaCellColorSwitcher {
    @Input("paCellDarkColor")
    modelProperty: Boolean;

    // @ContentChild(PaCellColor)
    // contentChild: PaCellColor;

    @ContentChildren(PaCellColor)
    contentChildren: QueryList<PaCellColor>;

    ngOnChanges(changes: {[property: string]: SimpleChange}) {
        // if (this.contentChild != null) {
        //     this.contentChild.setColor(changes["modelProperty"].currentValue);
        // }
        this.updateContentChildren(changes["modelProperty"].currentValue);
    }

    ngAfterContentInit() {
        this.contentChildren.changes.subscribe(() => {
            setTimeout(() => this.updateContentChildren(this.modelProperty), 0);
            //this.updateContentChildren(this.modelProperty);
            // If this method call is not placed in the setTimeout(), Angular wil report an error because 
            // the directive tries to start a new content update before th existing one has been fully  processed.
        });
        // By subscribing to changes, the callback function will be invoked anytime there is a chaange in the contentChildren property. 
    }

    private updateContentChildren(dark: Boolean) {
        if (this.contentChildren != null && dark != undefined) {
            this.contentChildren.forEach((child, index) => {
                child.setColor(index % 2? dark : !dark);
            });
        }
    }
}

/*
 * The @ContentChild decorator tells Angular that the directive needs to query the host element't content and assign the first 
 * result of the query to the property.  
 * The argument to the @ContentChild decorator is one or more directive classes. In this case, it tells Angular to locate the 
 * first PaCellColor object contained wihtin the host element's content and assign it to the decorator property.  
 * If you want to receive all the directive objects that match the argument, then you can use the @ContentChildren decorator instead.
 * 
 * You can also query using template variable names, such that @ContentChild("myVariable") will find the first directive that
 * has been assigned to myVariable.
 * 
 * If you want to include the descendants of the children in the results, then you can configure the query, 
 * like this: @ContentChild(PaCellColor, { descendants: true}).
 * 
 * The QueryList provides access to the directive object using the methods and properties:
 * length, first, last, map(func), filter(func), reduce(func), forEach(func), some(func), changes.  
 * The map(), filter(), reduce(), forEach() and some() methods are quaivalent to the native Array equivaleny such as Array.map() etc.  
 * 
 * The value of the content child query property isn't set until the ngAfterContentInit lifecycle method is invoked.
 */