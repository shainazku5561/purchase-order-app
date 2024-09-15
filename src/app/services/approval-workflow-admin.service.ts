import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private apiUrl = 'http://localhost:8080/purchase-order-app/admin'; // Replace with your backend URL

  constructor(private http: HttpClient) {}

  // Method to save the approval workflow configuration
  saveApprovalWorkflow(config: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/configure-approval-workflow`, config);
  }
}
