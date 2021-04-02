# Angular 6 Tutorial  
## Part 1: Creating Angular6 Project  
Install Angular CLI 6 or later  
`$ npm install -g @angular/cli` (If installing first time)  
`$ npm install -g @angular/cli@latest`  (To update)

See what files Angular project will create without actually creating them:
`$ ng new MyApp -d`

Spec files are used for Unit Testing.  
To skip the generation of spec files do:
`ng new MyApp --skip-tests`

To start he development server:
`$ ng serve --open`
Using the shortcut  
`$ ng s -o`  
--open and -o will make the application open automatically in the browser.
Prior to Angular6 the Angular CLI configuration file is called `angular-cli.json`, now it is called `angular.json` and the file format is slightly different.  

## Part 2: Installing Bootstrap For Angular 6
Install bootstrap and JQuery  
`$ npm install bootstrap@3  jquery --save`  

__Configure Bootstrap and Jquery__
Add the path to the `bootstrap.min.css` file to the first `styles` array of the `angular.json` file and add the path to the `jquery.min.js` and `bootstrap.min.js` to the first `scripts` array of the `angular.json` file.    
```
"styles": [
  "src/styles.css",
  "node_modules/bootstrap/dist/css/bootstrap.min.css"
],
"scripts": [
  "node_modules/jquery/dist/jquery.min.js",
  "node_modules/bootstrap/dist/js/bootstrap.min.js"
]
```

## Part 3: Angular6 Routing Tutorial  
Using Angular CLI to generate a component  
`$ ng generate component employee/create-employee --spec=false --flat-true`    
`--spec=false` means to test file will be created and `--flat=true` means that no dedicated folder will be created for the component.  
We can create another component using the shortcut:
`$ ng g c employee/list-employee --spec=false --flat=true`

Create a routing module  
`$ ng generate module app-routing --flat=true --module=app`
With `--module=app` this generated module will imported into the root application module.  
To use the shortcut we could have done  
`$ ng g m app-router --flat=true --module=app`  

## Part 4: Angular Reactive Forms Tutorial  
There are two ways to create forms in Angular:  
* Template Driven Forms  
* Reactive Forms (Also called Model Driven Forms)  

We use classes to create the form control tree  
* _FormGroup_
* _FormControl_  

Both _FormGroup_ and _FormControl_ are subclasses of the _AbstractControl_ abstract class.
The _AbstractControl_ class has the following properties: `value`,  `errors`, `valid`, `invalid`, `dirty`, `pristine`, `touched`, and `untouched`.      

The _AbstractControl_ class also have the following useful methods: `setValidator()`, `clearValidators()`, `updateValueAndValidity()`, `setValue()`, `patchValue()` and `reset()`.  

The _AbstractControl_ class has the `valueChange` Observable property.     

_FormControl_ tracks the value and state of an individual HTML input element.
_FormGroup_ instance tracks the value and state of all the form Controls in that form group.  

You can access the control instances from the form group in two ways:
* `formGroup.controls.formControlName.value`    
* `formGroup.get('formControlName').value`  
For example:
* `employeeForm.controls.fullName.value`
* `employeeForm.get('fullName').value`  

__The FormBuilder class__
The Form Builder class has 3 methods:  
* control()
* group()  
* array()  

__Reactive Form Validators__  
We have the following validators:  
`required`, `requiredTrue`, `email`, `pattern`, `min`, `max`, `minLength`, `maxLength`.
