import { FormControl } from "@angular/forms";

export class UserFormControl extends FormControl {
  label: string;

  modelProperty: string;

  constructor(label: string, property:  string, value: any, validator: any) {
    super(value, validator);
    this.label = label;
    this.modelProperty = property;   
  }

  getFieldValidationMessages(): string[] {
    let messages: string[] = [];
    if (this.errors) {
        for (let errorName in this.errors) {
            switch (errorName) {
                case 'required': 
                  messages.push(`The ${this.label} field is required`);
                  break;
                case 'minlength': 
                  messages.push(`The ${this.label} field must be at least ${this.errors.minlength.requiredLength} characters`);
                  break;
                case 'maxlength': 
                  messages.push(`The ${this.label} field  must not be more than ${this.errors.maxlength.requiredLength} characters long`);
                  break;
                case 'pattern':
                 if(this.errors.pattern.requiredPattern == '^[A-Za-z ]+$') {
                     messages.push(`Only alphabets are allowed in the ${this.label} feild`);
                 } else if (this.errors.pattern.requiredPattern == '^[0-9]+$') {
                     messages.push(`Only numbers are allowed in the ${this.label} field`);
                 }
                 break;
                case 'email': 
                  messages.push(`The input ${this.label} field is not a valid email address`)
                  break;
                  
            }
        }
    }
    return messages;
  }
}

/*
 * The FormControl class is used to represent a single element in a form, such as an input element. 
 *
 * Indivudual FormControl object can be retrived from the collection and either inpsected to get te validation state 
 * or used to generate validation messages.  
 */