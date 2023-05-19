import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-penalty-history',
  templateUrl: './penalty-history.component.html',
  styleUrls: ['./penalty-history.component.css']
})
export class PenaltyHistoryComponent implements OnInit {
  penalties: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.fetchPenalties();
  }

  fetchPenalties() {
    this.http.get<any[]>('/api/penalties').subscribe(
      (penalties) => {
        this.penalties = penalties;
      },
      (error) => {
        console.error('Error fetching penalties:', error);
      }
    );
  }
}
