# Pro Angular 6 (3rd Edition)
[Pro Angular 6 Github Repo](https://github.com/Apress/pro-angular-6)
[Angular6 CLI Github ](https://github.com/angular/angular-cli/wiki)
## PART I: Getting Started with Angular  

### Chapter 1: Getting Ready  

### Chapter 2: Your First Angular App  
Installing the angular-cli tool  
`$ npm install --global @angular/cli@6.0.8`  

Create a todo app with angular-cli  
`$ ng new todo`  

Adding Bootstrap package to the application  
`$ npm install bootstrap@4.1.1`  

Starting the development tool    
`$ ng serve --port 3000 --open`

Angular applications require a module. There are two types of module used in Angular development:
* _Javascript module_: It is a file that contains JavaScript functionality that is used through the import keyword.  
* _Angular module_: It is a group of related features.
Every Angular application has a _root module_.

### Chapter 3: Putting Angular in Context   
Angular excels in single-page applications and especially in complex round-trip applications.

There are two broad types of model: _view model_ and _domain models_.  
_view models_ represents the data passed from the component to the template.  
_domain models_ contain the data in a business domain, along with the operations, transformations, and rules for creating, storing and manipulating that data, collectively referred to as the _model logic_.   

__Models__  
A model in an application built using the MVC pattern should:  
* Contain the domain data
* Contain the logic for creating, managing, and modifying the domain data (even if
that means executing remote logic via web services)
* Provide a clean API that exposes the model data and operations on it  

The model should NOT:  
* Expose details of how the model data is obtained or managed (in other words, details
of the data storage mechanism or the remote web service should not be exposed to
controllers and views)
* Contain logic that transforms the model based on user interaction (because this is
the component’s job)
* Contain logic for displaying data to the user (this is the template’s job)  

__Controllers__  
A component that follows the MVC pattern should:  
* Contain the logic required to set up the initial state of the template
* Contain the logic/behaviors required by the template to present data from the model
* Contain the logic/behaviors required to update the model based on user interaction  

A component should NOT:     
* Contain logic that manipulates the DOM (that is the job of the template)
* Contain logic that manages the persistence of data (that is the job of the model)

__Views__  
Templates should:  
* Contain the logic and markup required to present data to the user  

Templates should NOT:  
* Contain complex logic (this is better placed in a component or one of the other
Angular building blocks, such as directives, services, or pipes)
* Contain logic that creates, stores, or manipulates the domain model  
Templates can contain logic, but it should be simple and used sparingly.

__Restful Webservice__  
* Create URLs that are self-explanatory and simple  
* Do not expose the internal structure of the data store through the URL i.e no coupling
* Keep the mapping between the URL format and the structure of the data within the server.  

__HTTP Methods__  
* The GET method is _nullipotent_, which means the operations you perform in response to this method should only retrieve data and not modify it.  
* The PUT and DELETE methods are _idempotent_, which means that multiple identical requests should have the same effect as a single request.  
* The POST method is neither _nullipotent_ nor _idempotent_.    

__Common Design Pitfalls__  
Here are the rules for knowing where to put logic:  
* Template logic should prepare data only for display and never modify the model.
* Component logic should never directly create, update, or delete data from the
model.
* The templates and components should never directly access the data store.

__Adopting the Data Store Data Format__  
Decide how the client needs to represent data, and then ensure you use the format within the data store - and if the data store can't support that format natively, then it is the job of the server to perform the translation.  

### Chapter 6: JavaScript and TypeScript: Part 2  
```
let value: number = (<number>temp).toPrecision ? <number>temp : parseFloat(<string>temp);
```
The angle bracket (<, >) are to declare a type assertion which will attempt to convert an object to the specified type.  You can also achieve the same result using the `as` keyword.  
```
let value: number = (temp as number).toPrecision ? temp as number : parseFloat(<string> temp);
```  

__Using Tuples__  
Tuples are defined as a fixed-length array of types, and individual elements are accessed using array indexers.
```
let weatherVars: [string, string, string];
weatherVars = ["London", "raining", TempConverter.convertFtoC("38")]
console.log(`It is ${weatherVars[2]} degrees C and ${weatherVars[1]} in ${weatherVars[0]}`);  //It is 3.3 degrees C and raining in London
```
__Using Indexable Types__  
Indexable types associate a key with a value, creating a map-like collection that can be used to gather related data items together.   
```
let cities: { [index: string]: [string, string]};
cities["London"] = ["raining", TempConverter.convertFtoC("39")];  
cities["Paris"] = ["sunny", TempConverter.convertFtoC("52")];
cities["Berlin"] = ["snowing", TempConverter.convertFtoC("23")];

for (let key in cities) {
  console.log(`${key}: ${cities[key][0]}, ${cities[key][1]}`);  
}
```
The `cities` variable is defined as an indexable type, with key as a string and the data value as a `[string, string]` tuple.  Only `number` and `string` values can be used for the keys for indexable types.  
The console display result of the for loop is
```
London: raining, 3.3
Paris: sunny, 11.1
Berlin: snowing, -5.0
```  

### Chapter 7: SportsStore: A Real Application  
Creating the project   
`$ ng new SportsStore`  
Installing the Additional NPM Packages  
```
npm install bootstrap@4.1.1  
npm install font-awesome@4.7.0  
npm install --save-dev json-server@0.12.1  
npm install --save-dev jsonwebtoken@8.1.1
```

There are two types of Angular module: feature modules and the root module. Feature modules are used to group related application functionality to make the application easier to manage. The root module is used to describe the application to Angular.   

An `Observable` class is provided by the Reactive Extension package  
An `Observable` object represents an asynchronous task that will produce a result at some point in the future.  

__NgModule decorator__
```
@NgModule({imports, declaration, exports, providers })
```
* _imports_ houses an array of dependencies used by the module
* _declaration_ configures the set of components and other features in the application.
* _exports_ contains an array of classes from the module that should be made available in other parts of the application.
* _providers_ tells Angular which classes should be used as services for the dependency injection feature.
__Pipes__
```
{{ product.price | currency: "USD":"symbol":"2.2-2" }}
```
Angular includes a feature called _pipes_, which are classes used to transform or prepare a data value for its use in a data binding.

## PART II: Angular in Details  

### Chapter 11: Creating an Angular Project  
To create a new Angular project  
`$ ng new example-app`  
You may use the `--routing` flag to generate a routing module in the project.  
Learn end-to-end testing using [Protractor](http://protractortest.org)  

To configure the `angular-cli` package to use `yarn` run   
`$ ng set --global packageManager=yarn`     

To start the development tool  
`$ ng serve`  

The most common use for linting is to check for potential problems before committing changes to a version control system. Another good practice is toe run your code through the linter after completing a major application feature.
Running the TypeScript Linter  
`$ ng lint`  

Tell the linter to ignore the next line using a comment  
```
// tslint:disable-next-line
```  

Disable linting for the entire file by adding this comment to the to of the page:  
```
/* tslint:disable */
```

The development tool must be restarted to reflect the changes made to the `angular.json` file.  

__Creating a Model__  
The model can be broken into three different parts:  
* A class that describes the data in the model e.g `product.model.ts`  
* A data source that loads and saves data, typically to a server e.g `datasource.model.ts`  
* A repository that allows the data in the model to be manipulated e.g `product.repostory.ts`


If a method returns a different object each time it is returned, even if they are different arrays containing the same objects, then Angular will report an error.  

### Chapter 12: Using Data Bindings  
Data binding expressions should be as simple as possible and rely on components and other Angular features such as pipes to provide complex application logic.  

__One-Way Data Bindings__  
Example:  
```
<div [ngClass]="getClasses()">Hello World</div>
```
One way data binding wraps square bracket over the target. The value could be a JavaScript expression, a property or method of the template's component class.  If the value is an expression it should be as simple as possible and, ideally, used only to retrieve data from the component and format it for display.   
There are two different types of target: a _directive_ or a _property_. The target in the example above is a directive.  
If you omit the brackets and the target is a directive the expression won't be evaluated but will be passed to the directive as a literal value.  

__The Basic Built-in Angular Directives__  
* ngClass
* ngStyle  
* ngIf  
* ngFor  
* ngSwitch ngSwitchCase ngSwitchDefault
* ngTemplateOutlet

__The Angular Property Bindings__  
* [property]
* [attr.name]
* [class.name]  
* [style.name]  

__The Angular Brackets__  
* `[target]="expr"`   : One-way data binding. Data flows from the expression to the target.  
* `{{expression}}`    : String interpolation binding.  
* `(target)="expr"`   : One-way binding. Data flows from the target to the destination specified by the expression. It is used to handle events.  
* `[(target)]="expr"` : Also known as the _banana-in-a-box_. A two way binding. Data flows in both directions between the target and the destination specified by the expression.  

__Using the Standard Property Binding__  
If the target of a binding doesn't match a directive, Angular will try to apply a property binding.   
The standard property binding lets you set the value of a property for the object that represents the host element, using the result of an expression.  
```
<input class="form-control" [value]="model.getProduct(1)?.name || 'None'" />
```

[HTML element DOM](developer.mozilla.org/en-US/docs/Web/API)  

The `textContent` property is used to set the content of HTML elements  
```
<div [textContent]="'ProductName'"></div>
```

Not all HTML element attributes have equivalent properties in the DOM API. For these situations, Angular provides the _attribute binding_ which is used to set an attribute on the host element rather than setting the value of the JavaScript object that represents it in the DOM.  
```
<td [attr.colspan]="productRepository.getProducts().length"]> </td>
```
__The Angular Class Bindings__  
* `[class]="expr"`: The standard property binding evaluates the expression and replaces any exiting class with the result.  
* `[class.myClass]="expr"`: The special class binding evaluates the Boolean expression and adds `myClass` to the HTML element if true. We can have multiple special class binding defined on a host element.
* `[ngClass]="[string|array|object]"`: The ngClass directive sets multiple classes using a string of multiple classes, an array of class elements or an object with key of classes and Boolean values.  

__The Angular Style Bindings__  
* `[style.myStyle]="expr"`: The standard property binding is used to set a single style property to the result of the expression.  
* `[style.myStyle.unit]="expre"`: The special style binding allows the units for the style value to be specified in the binding target.  
* `[ngStyle]="map"`: The ngStyle directive sets multiple style properties using the data in a map object.  

__Caution__ Do not try to use the standard property binding to target the style property to set multiple style values. Some browsers will ignore this and allow changes to be made, but the results are unpredictable and cannot be relied on. If you want to set multiple style properties, then create a binding for each of them or use the _ngStyle_ directive.

Standard property binding example:    
`[style.fontSize]="fontSizeWithUnit"`  
You can specify style properties using the JavaScript property name format `[style.fontSize]` or using the CSS property format `[style.font-size]`  
If expressions of bindings are re-evaluated when the data they depend on changes.  

Special property binding example:  
`[style.fontSize.px]="fontSizeWithoutUnit"`  
