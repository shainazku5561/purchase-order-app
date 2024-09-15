import { ApprovalHistory } from "./Approval-History.model";
import { ApprovalStep } from "./Approval-step.model";
import { Approver } from "./Approver.model";
import { OfficeSupply } from "./Office-supply.model";

export interface PurchaseOrder {
    id: number;
    userId:number;
    status: string;
    items: OfficeSupply[];
   title : string;
   amount:number;
    approvers: Approver[];
    approvalSteps: ApprovalStep[];
    approvalHistory: ApprovalHistory[];
    pdfUrl?: string;
  }