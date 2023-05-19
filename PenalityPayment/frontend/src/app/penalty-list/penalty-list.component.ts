import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-penalty-list',
  templateUrl: './penalty-list.component.html',
  styleUrls: ['./penalty-list.component.css']
})
export class PenaltyListComponent implements OnInit {
  penalties: any[] = []; // Replace with your penalty interface or class

  constructor(private router: Router) {}

  ngOnInit() {
    // Retrieve penalties associated with the user
    // You can fetch the penalties from an API or use a service
    // Replace the dummy data below with your actual logic
    this.penalties = [
      { id: 1, description: 'Penalty 1', details: 'Details for Penalty 1' },
      { id: 2, description: 'Penalty 2', details: 'Details for Penalty 2' },
      { id: 3, description: 'Penalty 3', details: 'Details for Penalty 3' }
    ];
  }

  viewPenaltyDetails(penalty: any) {
    // Navigate to the penalty details page using the penalty ID
    this.router.navigate(['/penalty-list', penalty.id]);
  }
}
