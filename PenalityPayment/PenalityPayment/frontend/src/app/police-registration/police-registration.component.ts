import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-police-registration',
  templateUrl: './police-registration.component.html',
  styleUrls: ['./police-registration.component.css'],

})
export class PoliceRegistrationComponent {
  domain: string = '';
  name: string = '';
  idNumber: string = '';
  registrationForm: FormGroup;


  constructor(private formBuilder: FormBuilder) {
    this.registrationForm = this.formBuilder.group({
      domain: ['', Validators.required],
      name: ['', Validators.required],
      idNumber: ['', Validators.required]
    });

  }

  submitForm() {
    // Perform any additional validation if needed

    // Display the submitted data
    console.log('Domain:', this.domain);
    console.log('Name:', this.name);
    console.log('ID Number:', this.idNumber);

    // Reset the form
    this.domain = '';
    this.name = '';
    this.idNumber = '';
  }
}
