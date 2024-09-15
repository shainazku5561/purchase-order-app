import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormControl } from '@angular/forms';
import { ApprovalWorkflowService } from './approval-workflow.service.js';
import { ApprovalStep } from '../models/Approval-step.model.js';

@Component({
  selector: 'app-approval-workflow',
  templateUrl: './approval-workflow.component.html',
  styleUrls: ['./approval-workflow.component.css']
})
export class ApprovalWorkflowComponent implements OnInit {
  workflow: ApprovalStep = {
    id: 0, level: 1, status: '',
    approver:[]
  };
  newStage = { level: 0, role: '' };
  users: any;

  constructor(private approvalWorkflowService: ApprovalWorkflowService) { }

  ngOnInit(): void {
    // Example: Fetch existing workflow with ID 1
    this.workflowService.getWorkflow(1).subscribe(workflow => this.workflow = workflow);
  }
    this.approvalWorkflowService.getUsers().subscribe(users => {
      this.users = users;
    });
  }

  addApprovalLevel(): void {
    (this.approvalWorkflowForm.get('approvalLevels') as FormArray).push(new FormGroup({
      user: new FormControl('')
    }));
  }

  removeApprovalLevel(index: number): void {
    (this.approvalWorkflowForm.get('approvalLevels') as FormArray).removeAt(index);
  }

  saveApprovalWorkflow(): void {
    const approvalWorkflow = this.approvalWorkflowForm.value;
    this.approvalWorkflowService.saveApprovalWorkflow(approvalWorkflow).subscribe(() => {
      console.log('Approval workflow saved successfully');
    });
  }
}