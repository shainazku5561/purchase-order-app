export interface Approver {
    splice: any;
    push(arg0: { role: string; assignedUser: string; }): unknown;
    id: number;
    role: string;
    level: number;
    assignedUser: string;
    
  }