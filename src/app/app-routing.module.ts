import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { userLoginComponent } from './user-login/user-login.component';
import { DashboardComponent } from './home/home.component';
import { PurchaseOrderComponent } from './purchase-order/purchase-order.component';
import { ApprovalWorkflowComponent } from './approval-workflow/approval-workflow.component';
import { PdfViewerComponent } from './pdf-generator/pdf-generator.component';

const routes: Routes = [
  { path: '', component: userLoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'purchase-order', component: PurchaseOrderComponent },
  { path: 'approval-workflow', component: ApprovalWorkflowComponent },
  { path: 'pdf-viewer', component: PdfViewerComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}