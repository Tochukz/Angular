import { Component } from '@angular/core';
import {  NgForm } from '@angular/forms';
import { UserRepository } from './user.repository';
import { User, Gender } from './user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  gender = Gender;

  newUser: User = new User();
  
  userRepository: UserRepository;

  submitted: boolean = false;

  constructor() {
    this.userRepository =  new UserRepository();
  }

  get users(): User[] {
    return this.userRepository.getUsers();
  }

  register(form: NgForm) {
    this.submitted = true;
    if (form.valid) {
      this.userRepository.register(this.newUser);
      this.newUser = new User();
      form.reset();
      this.submitted = false;
    }  
  }
}
