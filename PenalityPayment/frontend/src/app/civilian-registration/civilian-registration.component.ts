import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-civilian-registration',
  templateUrl: './civilian-registration.component.html',
  styleUrls: ['./civilian-registration.component.css']
})
export class CivilianRegistrationComponent {
  civilianForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private http: HttpClient) {
    this.civilianForm = this.formBuilder.group({
      licenseNumber: ['', Validators.required],
      name: ['', Validators.required],
      address: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      mobileNumber: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]]
    });
  }

  submitForm() {
    if (this.civilianForm.valid) {
      this.http.post('/api/civilian/register', this.civilianForm.value).subscribe(
        (response) => {
          console.log('Civilian registered successfully:', response);
          // Add any additional logic or notifications for successful registration
        },
        (error) => {
          console.error('Error occurred during civilian registration:', error);
          // Add error handling
        }
      );
    }
  }
}
