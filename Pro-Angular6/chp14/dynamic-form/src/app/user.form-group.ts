import { FormGroup, Validators } from "@angular/forms";

import { UserFormControl } from './user.form-control';

export class UserFormGroup extends FormGroup {
  constructor() {
      super({
          firstname: new UserFormControl('Firstname', 'name', '', Validators.compose([
              Validators.required,
              Validators.pattern('^[A-Za-z ]+$'),
              Validators.minLength(2),
              Validators.maxLength(14)
            ])
          ),
          lastname: new UserFormControl('Lastname', 'lastname', '', Validators.compose([
              Validators.required,
              Validators.pattern('^[A-Za-z ]+$'),
              Validators.minLength(2),
              Validators.maxLength(14)
            ])
          ),
          email: new UserFormControl('Email', 'email', '', Validators.compose([
              Validators.required,
              Validators.email
            ])
          ),
          gender: new UserFormControl('Gender', 'gender', '', Validators.required),
          city: new UserFormControl('City', 'city', '',  Validators.required)
      })
  }

  get userControls(): UserFormControl[] {
      return Object.keys(this.controls)
                   .map(c => this.controls[c] as UserFormControl);
  }

  getFormValidationMessages(form: any) {
      let messages = [];
      this.userControls.forEach(c => c.getFieldValidationMessages()
                                      .forEach(m => messages.push(m))
                               );
      return messages;
  }
}

/*
 * The FormGroup  class is used to manage the form elements and its contents. 

 * The constructor for the FormGroup class, which is the superclass for the UserFormGroup, accepts an object whose property names 
 * correspond to the names of the input elements in the template, each of which is assgined a UserFormControl object that 
 * will represent it and that specifies the validation checks that are required. 
 * 
 * The FormGroup class provide a controls property that returns a collection of the FormControl objects that it is managing,
 * indexed by name. 
 */