import { Component } from '@angular/core';
import { FormGroup,FormControl, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-penality-registration',
  templateUrl: './penality-registration.component.html',
  styleUrls: ['./penality-registration.component.css'],

  //imports: [FormsModule,FormBuilder, Validators]
})
export class PenalityRegistrationComponent {

  penaltyForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private http: HttpClient) {
    this.penaltyForm = this.formBuilder.group({
      date: ['', Validators.required],
      penaltyDescription: ['', Validators.required],
      policeStation: ['', Validators.required],
      vehicleNumber: ['', Validators.required],
      drivingLicense: ['', Validators.required],
      amount: ['', Validators.required]
    });


  }
  submitForm() {
    if (this.penaltyForm.valid) {
      this.http.post('/api/penalty/register', this.penaltyForm.value).subscribe(
        (response) => {
          console.log('Penalty registered successfully:', response);
          // Add any additional logic or notifications for successful registration
        },
        (error) => {
          console.error('Error occurred during penalty registration:', error);
          // Add error handling
        }
      );
    }
  }
}
