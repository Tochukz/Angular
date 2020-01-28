import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

import { UserRepository } from './users.repository';
import { User, Gender } from './user.model';
import { UserFormGroup } from './user.form-group';

@Component({
  selector: 'user-component',
  templateUrl: './user.component.html'
})
export class UserComponent {
  private userRepo: UserRepository

  public userFormGroup: UserFormGroup;

  public gender = Gender;

  public formSubmitted = false;

  constructor() {
      this.userRepo = new UserRepository();
      this.userFormGroup = new UserFormGroup();
  }

  get users(): Array<User> {
    return this.userRepo.getUsers();
  }

  getUser(id): User {
      return this.userRepo.getUser(id)
  }

  register(form: NgForm) {
    this.formSubmitted = true;
    if (form.valid) {
        let fields = Object.keys(form.controls);
        let newUser = new User();
        fields.forEach(field => { 
            newUser[field] = form.controls[field].value;
        });
        this.userRepo.addUser(newUser);
        this.formSubmitted = false;
        form.reset();
    } else {
        console.log('Form Invalid');
    }
  }
}