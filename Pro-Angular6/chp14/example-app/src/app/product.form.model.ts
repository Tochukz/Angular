import { FormControl, FormGroup, Validators } from "@angular/forms";
import { LimitValidator } from "./limit.formvalidator";

export class ProductFormControl extends FormControl {
    label: string;

    modelProperty: string

    constructor(label: string, property: string, value: any, validator: any) {
        super(value, validator);
        this.label = label;
        this.modelProperty = property;
    }

    getValidationMessages() {
        let messages: string[] = [];
        if (this.errors) {
            for ( let errorName in this.errors) {
                switch (errorName) {
                  case "required":
                    messages.push(`You must enter a ${this.label}`);
                    break;
                  case "minLength":
                    messages.push(`A ${this.label} must be at least ${this.errors['minLength'].requiredLength} charachters`);
                    break;
                  case "maxLength":
                    messages.push(`A ${this.label} must be no more than ${this.errors['maxLength'].requiredLength} characters`);
                    break;
                  case "limit":
                    messages.push(`A ${this.label} cannot be more than ${this.errors['limit'].limit}`);
                    break;
                  case "pattern":
                    messages.push(`The ${this.label} contains illegal charaters`);
                    break;
                }
            }
        }
        return messages;
    }
}

export class ProductFormGroup extends FormGroup {
    constructor() {
        super({
            name: new ProductFormControl("Name", "name", "", Validators.required),
            category: new ProductFormControl("Category", "category", "", Validators.compose([
                Validators.required,
                Validators.pattern("^[A-Za-z ]+$"),
                Validators.minLength(3),
                Validators.maxLength(10)
            ])),
            price: new ProductFormControl("Price", "price", "", Validators.compose([
                Validators.required,
                LimitValidator.Limit(100),
                Validators.pattern("^[0-9\.]+$")
            ]))
        });
    }

    get productControls(): ProductFormControl[] {
        return Object.keys(this.controls)
                     .map(k => this.controls[k] as ProductFormControl);
    }

    getFormValidationMessages(form: any): string[] {
        let messages: string[] = [];
        this.productControls.forEach(c => c.getValidationMessages()
                                            .forEach(m => messages.push(m))
                                    );
        return messages;
    }
}


/*
 * The FormControl class is used to represent a single element in a form, such as an input element.
 *
 * The FormGroup  class is used to manage a form element and its contents.
 *
 * The constructor for the FormGroup class, which is the superclass for the ProductFormGroup, accepts an object whose property names
 * correspond to the names of the input elements in the template, each of which is assgined a ProductFormControl object that
 * will represent it and that specifies the validation checks that are required. 
 *
 * The FormGroup class provide a controls property that returns a collection of the FormControl objects that it is managing,
 * indexed by name.
 * Indivudual FormControl object can be retrived from the collection and either inpsected to get te validation state
 * or used to generate validation messages.
 */
