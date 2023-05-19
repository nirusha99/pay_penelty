import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Stripe, StripeCardElement } from '@stripe/stripe-js';

@Component({
selector: 'app-penalty-form',
templateUrl: './penalty-form.component.html',
styleUrls: ['./penalty-form.component.css']
})
export class PenaltyFormComponent implements OnInit {
penaltyForm!: FormGroup;
stripe: Stripe | undefined;
cardElement!: StripeCardElement;

constructor(private http: HttpClient) {}

ngOnInit() {
this.penaltyForm = new FormGroup({
licenseNumber: new FormControl(),
name: new FormControl(),
address: new FormControl(),
nature: new FormControl(),
amount: new FormControl(),
cardNumber: new FormControl(),
expiryDate: new FormControl(),
cvv: new FormControl(),
});
this.loadStripe();
}

async loadStripe() {
// Load Stripe elements and create a card element
const stripe = await this.getStripeInstance();
const elements = stripe.elements();
this.cardElement = elements.create('card');
this.cardElement.mount('#card-element');
}

async getStripeInstance(): Promise<Stripe> {
if (!this.stripe) {
// Initialize Stripe
this.stripe = await new Promise<Stripe>((resolve) => {
const stripeScript = document.createElement('script');
stripeScript.src = 'https://js.stripe.com/v3/';
stripeScript.onload = () => {
resolve((window as any).Stripe('YOUR_PUBLISHABLE_KEY'));
};
document.body.appendChild(stripeScript);
});
}
return this.stripe;
}

payPenalty() {
const cardElement = this.cardElement;
// Confirm the payment with the card element
this.stripe!.confirmCardPayment('CLIENT_SECRET', {
  payment_method: {
    card: cardElement
  }
}).then((result) => {
  if (result.error) {
    // Payment error
    console.error(result.error.message);
    alert('Payment error. Please try again.');
  } else {
    // Payment succeeded
    console.log(result.paymentIntent);
    alert('Payment successful! Penalty paid.');
  }
}).catch((error) => {
  console.error(error);
  alert('An error occurred during payment. Please try again.');
});
}

submitPenalty() {
// Implement the logic to submit the penalty details
// ...
// Send an email to the user's email
const emailData = {
  to: 'user@example.com', // Replace with the user's email
  subject: 'Penalty Submitted',
  body: `Your penalty has been submitted successfully. Click the link below to log in and view your penalties.\n\nLogin Link: http://your-website.com/login`
};

this.sendEmail(emailData).subscribe(
  () => {
    // Email sent successfully
    alert('Penalty submitted successfully. An email has been sent to your registered email address.');
  },
  (error) => {
    console.error('Error sending email:', error);
    alert('Penalty submitted successfully, but there was an error sending the email. Please check your email later for the login link.');
  }
);
}

sendEmail(emailData: any) {
// Make a POST request to the backend API to send the email
return this.http.post('/api/send-email', emailData);
}
}
