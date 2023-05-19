import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-penalty-details',
  templateUrl: './penalty-details.component.html',
  styleUrls: ['./penalty-details.component.css']
})
export class PenaltyDetailsComponent implements OnInit {
  penalty: any; // Replace with your penalty interface or class

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    // Retrieve the penalty ID from the route parameters
    this.route.params.subscribe(params => {
      const penaltyId = +params['id']; // Assuming the parameter is named 'id'

      // Fetch the penalty details using the penalty ID
      // You can call an API or use a service to fetch the details
      // Replace the dummy data below with your actual logic
      this.penalty = {
        id: penaltyId,
        description: 'Penalty ' + penaltyId,
        details: 'Details for Penalty ' + penaltyId
      };
    });
  }

  redirectToPenaltyForm(penalty: any) {
    // Redirect to the penalty form and pass the penalty details as query parameters
    this.router.navigate(['/penalty-form'], { queryParams: penalty });
  }
}
