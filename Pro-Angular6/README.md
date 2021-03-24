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

### Chapter 4: An HTML and CSS Primer   
Skipped...

### Chapter 5: JavaScript and TypeScript: Part 1
Skipped...

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
console.log(`It is ${weatherVars[2]} degrees centigrade and ${weatherVars[1]} in ${weatherVars[0]}`);  //It is 3.3 degrees centigrade and raining in London
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

### Chapter 8: SportsStore: Orders and Checkout
Completed.

## Chapter 9: SportsStore: Administration  
__Creating the Module__   
The admin module should be made to be self contained. The other parts of the application should not be dependent on the admin module. This is to ensure that users who do not use the admin section don't end up downloading that part of the JavaScript code.  
However, the dynamically loaded module is allowed to declare dependencies on the main part of the application.
The routing for the admin module is also setup in the `admin.module` file using the `RouteModule.forChild()` method to make it self contained.  

__Configure the URL Routing System__   
Dynamically loaded modules are managed through the routing configuration, which triggers the loading process when the application navigated to a specified URL.    

[The JWT Specification](https://tools.ietf.org/html/rfc7519)

### Chapter 10: SportsStore: Progressive Feature and Deployment
__Installing the PWA Package__  
The Angular team provides an NPM package that can be used to bring PWA feature to an Angular project. Use the Angular CLI to install the Angular PWA package  
```
$ ng add @angular/pwa@0.8.9
```  
The `ng add` command is used specifically to install packages, such as `@angular/pwa`, that have been designed to enhance or configure an Angular project.   
The version `0.8.9` is the version that supports Angular 6. Make sure to use the version that supports your Angular Version. See it's [version list](https://www.npmjs.com/package/@angular/pwa) on npmjs.com.  
This command will:
* install the `@angular/pwa` NPM package
* install a compatible version of `@angular/service-worker` package
* generate `manifest.json` file
* generate icons of different sizes which are referenced in the manifest file. See `src/assets/icons`.
* generate `ngsw-config.json` file
* update index.html to include the `manifest.json` and address non supporting browsers  
* update `app.module` to add `ServiceWorkerModule` module to it's `imports` array.

See [Angular PWA Guide](https://angular.io/guide/service-worker-intro)

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

### Chapter 13: Using the Built-in Directives  
To prevent template error, avoid modifying the application state as a side effect of a data binding expression.  
To avoid context error, ensure that data binding expressions use only the properties and methods provided by the template's component.  

__The Built-in Directives__  
1.
```
<div *ngIf="expr"></div>
```
 Used to include an element and its content in the HTML document if the expression evaluates to true.   
The asterisk indicates that this is a micro-template directive.  
2.
```
<div [ngSwitch]="expr">
  <span= *ngSwitchCase="expr"></span>
  <span *ngSwitchDefault></span>
</div>
```  
The _ngSwitch_ directive is used to choose between multiple elements to include in the HTML document based on the result of an expression.  
3.
```
<div *ngFor="#item of expr"></div>
```
The _ngFor_ directive is used to generate the same set of elements for each object in an array.  
4.
```
<ng-template [ngTemplateOutlet]="myTempl">
</ng-template>
```
The _ngTemplateOutlet_ directive is used to repeat a block of content in a template.  
5.
```
<div ngClass="expr"></div>
```
The _ngClass_ directive is used to manage class membership.   
6.
```
<div ngStyle="expr"><.div>
```  
The _ngStyle_ directive is used to manage styles applied directly to elements.  

Directive which are prefixed with asterisk are known as micro-template directives. The asterisk is a shorthand for using directives that rely on content provided as part of the template, known as a micro-template. Directives that use micro-templates are known as _structural directives._

This
```
<ng-template ngIf="expr">
  <div>Hello People</div>
</ng-template>
```
is the same as this  
```
<div *ngIf="expr">
  Hello People
</div>
```
The later is only a short-hand of the former.  

__The ngFor Local Template Values__  
* _index_ This number value is assigned to the position of the object.  
* _odd_ This boolean value returns true if the current object has an odd-numbered position in the data source.  
* _even_ This boolean value returns true if the current object has an even-numbered position in the data source.  
* _first_  This boolean value returns true if the current object is the first one in the data source.  
* _last_ This boolean value returns true if the current object is the last one in the data source.  

__One-Way Data Binding Restrictions__  
One-way data bonding must be _idemponent_, meaning that they can be evaluate repeatedly without changing the state of the application.  
Angular will report an error if a data binding expression contains an operator that can b used to perform an assignment such as =, +=, -=, ++, and --.

The attempt to change the application data binding produces an error by Angular.  

__The Expression Context__  
The expression context means that you can't access objects defined outside the template's component and in particular templates can't access the global namespace.  

### Chapter 14: Using Events and Forms  
The imports property of the `NgModule` decorator specifies the dependencies of the application.

__Event binding example__
```
<td (mouseover)="selectedProduct = item.name">
```
The expressions in event bindings are allowed to make changes to the state of the application and can contain assignment operators such as =.  

Although you can define properties dynamically, a safer approach is to define all the properties that a template uses in  the component.  

__Properties Common to All DOM events Objects__  
* _type_ returns a string that identifies the type of event that has been triggered.  
* _target_ returns the object that triggered the event, which will generally be the object that represents the HTML element in the DOM.  
* _timeStamp_ returns a number that contains the time that the event was triggered, expressed as milliseconds since Jan 1, 1970.  

__Using Template Reference Variables__  
Template _reference variables_ are a form of template variable that can be used to refer to elements within the template.  
_Reference variables_ are defined using the `#` character, followed by the variable name.  
```
<input #product class="form-control" (input)="false" />
```
The _product_ reference variable will be assigned the object that represents the input element in the DOM, that is the `HTMLInputElement` object.  

Angular won't update the data bindings in the template when the user edits the content of the `input` element unless there is an event binding on that element, hence the need for the `(input)="false"` event binding.

Reference variables can be used by other bindings in the same template.  
```
<p>select Product: {{ product.value || ' (None)' }}</p>
```
This isn't something you will need to do in most real projects. Most data bindings rely on variables defined by the template's component.

__Adding Form Validation__  
There are four attributes that you can add to input elements, each of which defined a validation rule in Angular:  
* _required_ This attribute is used to specify a value that must be provided.
* _minlength_ This attribute us used to specify a minimum number of characters.
* _maxlength_ This cannot be applied directly to form elements because it conflicts with the HTML5 attribute of the same name.  
* _pattern_ This attribute is used to specify a regular expression that the value provided by the user must match.  
* _email_ This attribute is used to specify an email input.  
These are part of the HTML specification, but Angular build on these properties with some additional features.  

__Angular Form Validation Classes__   
After adding the validation attribute to an input element, Angular will add one of each pair of the following CSS classes to the input element:  
* _ng-untouched_ & _ng-touched_: For not visited element & for visited element  
* _ng-prestine_ & _ng-dirty_: When content have not been changed & when content have been edited.  
* _ng-valid_ & _ng-invalid_: If content meets validation rules & if not.  

__Validation Object__  
To assign a template reference variable to a validation object do
```
<input #name="ngModel" [(ngModel)]="product.name" ... />
```
The properties of the validation object(`ngModel`) includes `path`, `valid`, `invalid`, `pristine`, `dirty`, `touched`, `untouched`, `errors` and `value`. The `path` property returns the name of the element.
The `errors` property is created only when there are validation errors.  

__The Validator Properties__  
* _Validators.required_  
* _Validators.minLength_  
* _Validators.maxLength_
* _Validators.pattern_  
Validators and be combined using the _Validators.compose_ method so that several checks are performed on a single element as shown below:
```
Validators.compose([Validator.required, Validators.patter("^[A-Za-z]+$")])
```

__Types of Form Validations__  
1. Attribute-based form validation.
2. Model-base form validation or Reactive Forms


### Chapter 15: Creating Attribute Directives
Attribute directives are classes that are able to modify the behavior or appearance of the element they are applied to. The style and class bindings are examples of attribute directives.  
Attribute directives are classes to which the @Directive decorator has been applied. They are enabled in the directives property of the component responsible for a template and applied using a CSS selector.  
Angular supports two other types of directive - structural directive and components.  

__The Directive Lifecycle Hook Methods__  
* _ngOnInit_  called after initial value of input properties of the directive are all set
* _ngOnChanges_ called when value of an input property changes and also before `ngOnInit`
* _ngDoCheck_ called during the change detection process. Directive can update any state that isn't directly associated with an input property.  
* _ngAfterContentInit_  called when the directive's content has been initialized.  
* _ngAfterContentChecked_ called after directive's content has been inspected as part of the change detection process.  
* _onDestroy_ class immediately before Angular destroys a directive.  

__Create Host Element Bindings__    
Angular is intended to be run in a range of different execution environments, and not all of then can be assumed to provide the DOM API.  
Bindings on the host element are defined using two decorators `@HostBinding` and `@HostListener` both of which are defined in the @angular/core module.  
The `@HostBinding` decorator is used to set up a property binding on the host element and is applied to a directive property.
The `@HostListener` decorator is used to set up an event binding on the host element and is applied to a method.  

### Chapter 16: Creating Structural Directive  
Structural directives change the layout of the HTML document by adding and removing elements. They are usually prefixed by an asterisk such as `*ngIf` and `*ngFor`.  They use micro-templates to add content to the HTML document.

To be continued...

### Chapter 17: Understanding Components    
Components are directives that define their own HTML content and, optionally, CSS styles.  

__Setting View Encapsulation__  
You can learn more about the shadow DOM at [Mozilla Network](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Shadow_DOM)

__Using the Shadow DOM CSS Selectors__  
With the Shadow DOM in place, there are boundaries that regular CSS selectors do not operate across.  
There are a number of special CSS selectors that are useful when using styles that rely on the shadow DOM(even when it is emulated):
* `:host` Used to match the component's host element.  
* `:host-context(classSelector)` Used to match the ancestors of the host element that are members of a specific class.  

* `/deep/` or `>>>` Used by the parent component to define styles that affect the elements in child component templates.     

### Chapter 18: Using and Creating Pipes  
Pipes should be simple and focused on preparing data. You can implement data preparation code in components directives, but that makes it header to reuse in other parts of the application.

To continue later...  

### Chapter 19: Using Services  
Services are classes to which the `@Injectable` decorator has been applied. Services can be used to distribute shared objects by declare the service as a constructor argument.

To continue later...
