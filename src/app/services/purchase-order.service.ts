import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { ApprovalWorkflowAdminComponent } from '../approval-workflow-admin/approval-workflow-admin.component';
import { PurchaseOrder } from '../models/purchase-order.model';
import { Approver } from '../models/Approver.model';

@Injectable({
  providedIn: 'root'
})
export class PurchaseOrderService {
 
  private apiUrl = 'https://localhost:8080/purchase-order-app';
  purchaseOrderForm: any;
 
  po: any;

  constructor(private http: HttpClient) { }

  createPo(po: PurchaseOrder): Observable<any> {
    return this.http.post(`${this.apiUrl}/create`, po);
  }
  submitPO(poData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/submit`, poData);
  }
  submitPOForApproval(poId: number): Observable<void> {
    return this.http.post<void>(this.apiUrl, ApprovalWorkflowAdminComponent);
  }


  getApprovalWorkflow(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/approval-workflow`);
  }

  approvePO(poId: number, level: number): Observable<void> {
    return this.http.post<void>(`${this.apiUrl}/${poId}/approve`, { level });
  }
}