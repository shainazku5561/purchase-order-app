import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PurchaseOrderComponent } from '../purchase-order/purchase-order.component';
import { UserService } from '../services/user.service';
import { ApprovalWorkflowService } from '../services/approval-workflow.service';
import { PurchaseOrderService } from '../services/purchase-order.service';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  pendingApprovals?: any[];
  purchaseOrders?: any[];

  constructor(private approvalWorkflowService: ApprovalWorkflowService, private purchaseOrderService: PurchaseOrderService) { }

  ngOnInit(): void {
    this.approvalWorkflowService.getPendingApprovals().subscribe((approvals) => {
      this.pendingApprovals = approvals;
    });

    this.purchaseOrderService.getPurchaseOrders().subscribe((pos) => {
      this.purchaseOrders = pos;
    });
  }

  approve(poId: number, approvalStepId: number): void {
    this.approvalWorkflowService.approve(poId, approvalStepId).subscribe((response) => {
      console.log(`Approved PO ${poId} - Approval Step ${approvalStepId}`);
      this.ngOnInit(); // Refresh the dashboard
    });
  }

  reject(poId: number, approvalStepId: number): void {
    this.approvalWorkflowService.reject(poId, approvalStepId).subscribe((response) => {
      console.log(`Rejected PO ${poId} - Approval Step ${approvalStepId}`);
      this.ngOnInit(); // Refresh the dashboard
    });
  }
}