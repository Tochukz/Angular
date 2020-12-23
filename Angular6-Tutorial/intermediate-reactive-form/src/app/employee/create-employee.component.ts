import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from "@angular/forms";

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  employeeForm: FormGroup;

  constructor() { }

  ngOnInit() {
    this.employeeForm = new FormGroup({
      fullName: new FormControl(),
      email: new FormControl(),
      skills: new FormGroup({
        skillName: new FormControl(),
        experienceInYears: new FormControl(),
        proficiency: new FormControl()
      })
    })
  }

  onLoadData():void {
    this.employeeForm.setValue({
      fullName: 'Chucks Nwachukwu',
      email: 'chucks@tochukwu.xyz',
      skills: {
        skillName: 'JavaScript',
        experienceInYears: 5,
        proficiency: 'advanced'
      }
    })
  }

  onSubmit(): void {
    console.log(this.employeeForm);
  }
}


/**
 * We use setValue() method to update all form controls
 * We use patchValue() method to update a subset of the form controls or the entire form controls.
 */