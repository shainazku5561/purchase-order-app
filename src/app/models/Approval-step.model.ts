import { Approver } from "./Approver.model";

export interface ApprovalStep {
    id: number;
    level: number;
    approver: Approver[];
    status: string;
    //name:string;
  }