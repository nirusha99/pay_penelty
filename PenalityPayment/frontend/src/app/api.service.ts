import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {}

  getProtectedData() {
    const token = localStorage.getItem('jwtToken');

    // Include the token in the Authorization header
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    // Make the API request with the headers
    return this.http.get('/api/protected', { headers });
  }
}
