
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DashboardComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//import { PdfViewerComponent } from './pdf-generator/pdf-generator.component';
//import { userLoginComponent } from './user-login/user-login.component';
import { PurchaseOrderComponent } from './purchase-order/purchase-order.component';
import { ApprovalWorkflowComponent } from './approval-workflow/approval-workflow.component';
import { AuthService } from './services/auth.service';
import { PurchaseOrderService } from './services/purchase-order.service';
import { ApprovalWorkflowService } from './services/approval-workflow.service';
import { JwtInterceptorService } from './services/jwt-interceptor.service';
import { ApprovalWorkflowAdminComponent } from './approval-workflow-admin/approval-workflow-admin.component';
import { UserComponent } from './user/user.component';


const routes: Routes = [
  { path: 'user-login', component: UserComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'purchase-order', component: PurchaseOrderComponent },
  { path: 'approval-workflow', component: ApprovalWorkflowComponent },
  { path: 'approval-admin', component: ApprovalWorkflowAdminComponent}
  
];

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    DashboardComponent,
    PurchaseOrderComponent,
    ApprovalWorkflowComponent,
    //PdfViewerComponent,
    ApprovalWorkflowAdminComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    AuthService,
    PurchaseOrderService,
    ApprovalWorkflowService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptorService, multi: true }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
