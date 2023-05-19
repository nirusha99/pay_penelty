import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {
  policeUsername: string;
  policePassword: string;
  civilianUsername: string;
  civilianPassword: string;
  policeLoginForm: any;
  civilianLoginForm: any;

  constructor(private http: HttpClient,private formBuilder: FormBuilder){

      this.policeUsername = '';
      this.policePassword = '';
    this.civilianUsername= '';
    this.civilianPassword= '';
    this.policeLoginForm = this.formBuilder.group({
      // Define your form controls and validators here
      policeUsername: ['', Validators.required],
      policePassword: ['', Validators.required]
    });

    this.civilianLoginForm = this.formBuilder.group({
      // Define your form controls and validators here
      civilianUsername: ['', Validators.required],
      civilianPassword: ['', Validators.required]
    });
  }

  loginPolice() {
    // Perform login logic for police
    const policeCredentials = {
      username: this.policeUsername,
      password: this.policePassword
    };

    this.http.post('/api/police/login', policeCredentials).subscribe(
      (response) => {
        // Handle successful police login
        console.log('Police login successful:', response);
      },
      (error) => {
        // Handle police login error
        console.error('Error occurred during police login:', error);
      }
    );
  }

  loginCivilian() {
    // Perform login logic for civilians
    const civilianCredentials = {
      username: this.civilianUsername,
      password: this.civilianPassword
    };

    this.http.post('/api/civilian/login', civilianCredentials).subscribe(
      (response) => {
        // Handle successful civilian login
        console.log('Civilian login successful:', response);
      },
      (error) => {
        // Handle civilian login error
        console.error('Error occurred during civilian login:', error);
      }
    );
  }
}
