import { Component, OnInit } from '@angular/core';
//import { UserService } from './user.service';
//import { PurchaseOrderService } from './purchase-order.service';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { PurchaseOrderService } from '../services/purchase-order.service';
import { PurchaseOrder } from '../models/purchase-order.model';
import { User } from '../models/user.model';

@Component({
  selector: 'app-user',
  template: './user.component.html'
})
export class UserComponent implements OnInit {
  user: User | undefined;
  newPO: PurchaseOrder = {
    title: '', amount: 0,
    id: 0,
    userId: 0,
    status: '',
    items: [],
    approvers: [],
    approvalSteps: [],
    approvalHistory: []
  }; // Initialize new PO object
  purchaseOrder!: PurchaseOrder;
  successMessage: string='';
  errorMessage: string = '';

  
  constructor(
    private userService: UserService,
    private poService: PurchaseOrderService // Inject the PO service
  ) { }

 ngOnInit(): void {
  this.getUserDetails();
}



getUserDetails() {
  const username = localStorage.getItem('username');
  if (username) {
    this.userService.getUserByUsername(username).subscribe(
      (data: User) => {
        this.user = data;
      },
      (error) => {
        console.error('Error fetching user details:', error);
      }
    );
  } else {
    console.error('No username found in localStorage');
  }
}

createPo() {
  if (this.newPO.title && this.newPO.amount > 0) {
    this.poService.createPo(this.newPO).subscribe(
      response => {
        this.successMessage = 'Purchase Order created successfully!';
        // this.newPO = { title: '', amount: 0 }; // Reset form after successful submission
      },
      error => {
        this.errorMessage = 'Error creating Purchase Order. Please try again.';
        console.error('Error creating PO:', error);
      }
    );
  } else {
    this.errorMessage = 'Please enter a valid title and amount.';
  }
}
}