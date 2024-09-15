import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApprovalStep } from '../models/Approval-step.model';

@Injectable({
  providedIn: 'root'
})
export class ApprovalWorkflowService {

  private apiUrl = 'http://localhost:8080/api/approval-workflow';

  constructor(private http: HttpClient) { }

  getWorkflow(id: number): Observable<ApprovalStep> {
    return this.http.get<ApprovalStep>(`${this.apiUrl}/${id}`);
  }

  createWorkflow(workflow: ApprovalStep): Observable<ApprovalStep> {
    return this.http.post<ApprovalStep>(this.apiUrl, workflow);
  }

  updateWorkflow(id: number, workflow: ApprovalStep): Observable<ApprovalStep> {
    return this.http.put<ApprovalStep>(`${this.apiUrl}/${id}`, workflow);
  }

  getPendingApprovals(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/pending-approvals`);
  }

  

  approve(poId: number, approvalStepId: number): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/approve`, { poId, approvalStepId });
  }

  reject(poId: number, approvalStepId: number): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/reject`, { poId, approvalStepId });
  }

  getConfiguredApprovalLevels(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/configured-approval-levels`);
  }

  saveConfiguredApprovalLevels(approvalLevels: any[]): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/configured-approval-levels`, approvalLevels);
  }

  getApprovalHistory(poId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/approval-history/${poId}`);
  }
}