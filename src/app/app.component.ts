import { Component, OnInit } from '@angular/core';
import { PurchaseOrderComponent } from './purchase-order/purchase-order.component';
import { userLoginComponent } from './user-login/user-login.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  items = [
    { name: 'Item 1', quantity: 2, price: 10.99 },
    { name: 'Item 2', quantity: 3, price: 5.99 },
    { name: 'Item 3', quantity: 1, price: 7.99 }
  ];
  purchaseOrder: any;
  isAdmin = false;

  constructor(private purchaseOrderComponent: PurchaseOrderComponent, private loginComponent: userLoginComponent) { }
  ngOnInit(): void {
    this.loginComponent.checkAdmin().subscribe((response: any) => {
      this.isAdmin = response.isAdmin;
    });
  }

  createPurchaseOrder(): void {
    this.purchaseOrderComponent.createPurchaseOrder(this.items).subscribe((response: any) => {
      this.purchaseOrder = response;
    });
  }

  approvePurchaseOrder(): void {
    this.purchaseOrderComponent.approvePurchaseOrder(this.purchaseOrder.id, 1).subscribe((response: any) => {
      this.purchaseOrder = response;
    });
  }

  rejectPurchaseOrder(): void {
    this.purchaseOrderComponent.rejectPurchaseOrder(this.purchaseOrder.id, 1).subscribe((response: any) => {
      this.purchaseOrder = response;
    });
  }

  configureApprovalWorkflow(): void {
    this.purchaseOrderComponent.configureApprovalWorkflow().subscribe((response: any) => {
      console.log(response);
    });
  }

  viewPurchaseOrders(): void {
    this.purchaseOrderComponent.viewPurchaseOrders().subscribe((response: any) => {
      console.log(response);
    });
  }
}