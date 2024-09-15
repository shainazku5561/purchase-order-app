import { Approver } from "./Approver.model";

export interface ApprovalHistory {
    level: number;
    approvers: Approver[];
    status: string;
    date: Date;
  }