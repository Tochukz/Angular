import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  employeeForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.employeeForm = this.formBuilder.group({
      fullName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(10)]],
      email: [''],
      skills: this.formBuilder.group({
        skillName: [''],
        experienceInYears: [''],
        proficiency: ['advanced'] //the default value becomes 'advanced'
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
 * 
 * The FormBuilder class is exposed as a service, therefore it must be injected using the constructor
 */