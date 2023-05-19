import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-penalty-sheet',
  templateUrl: './admin-penalty-sheet.component.html',
  styleUrls: ['./admin-penalty-sheet.component.css']
})
export class AdminPenaltySheetComponent implements OnInit {
  penalties: any[] = [];// Replace with your penalty interface or class

  constructor() {}

  ngOnInit() {
    // Fetch the penalty sheet data from an API or service
    // Replace the dummy data below with your actual logic
    this.penalties = [
      { licenseNumber: 'ABC123', name: 'John Doe', address: '123 Main St', nature: 'Speeding', amount: 100 },
      { licenseNumber: 'XYZ456', name: 'Jane Smith', address: '456 Elm St', nature: 'Parking Violation', amount: 50 },
      { licenseNumber: 'DEF789', name: 'Alice Johnson', address: '789 Oak St', nature: 'Red Light Violation', amount: 75 }
    ];
  }
}
