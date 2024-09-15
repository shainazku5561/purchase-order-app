import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray } from '@angular/forms';
import { ApprovalWorkflowService } from '../services/approval-workflow.service';
import { Approver } from '../models/Approver.model';
import { PurchaseOrderService } from '../services/purchase-order.service';
import { AdminService } from '../services/approval-workflow-admin.service';
//import { ApprovalWorkflowService } from '../approval-workflow/approval-workflow.service';
//import { ApprovalWorkflowService } from '../approval-workflow.service';

@Component({
  selector: 'app-approval-workflow-admin',
  templateUrl: './approval-workflow-admin.component.html',
  styleUrls: ['./approval-workflow-admin.component.css']
})
export class ApprovalWorkflowAdminComponent  {
 approvalLevels = [
    { level: 1, role: 'Team Lead', assignedUser: '' },
    { level: 2, role: 'Department Manager', assignedUser: '' },
    { level: 3, role: 'Finance Manager', assignedUser: '' }
  ];

  constructor(private adminService: AdminService, private  poService: PurchaseOrderService ) {
    // Initialize with one approval level by default
    this.addApprovalLevel();
  }

 // Add a new approval level dynamically
 addApprovalLevel() {
  const levelNumber = this.approvalLevels.length + 1;
  this.approvalLevels.push({ level: levelNumber, role: `Approval Level ${levelNumber}`, assignedUser: '' });
}

  // Remove the last approval level
  removeApprovalLevel() {
    if (this.approvalLevels.length > 1) {
      this.approvalLevels.pop();
    }
  }

  // Submit the workflow configuration
  onSubmitConfig() {
    this.adminService.saveApprovalWorkflow(this.approvalLevels).subscribe(
      response => {
        console.log('Approval workflow saved successfully', response);
        // You might want to show a success message or redirect the user
      },
      error => {
        console.error('Error saving approval workflow', error);
        // Handle the error, show an error message to the user
      }
    );
  }

  approvePO(poId: number, level: number) {
    this.poService.approvePO(poId, level).subscribe(
      response => {
        console.log('PO approved', response);
      },
      error => {
        console.error('Error approving PO', error);
      }
    );
  }
}