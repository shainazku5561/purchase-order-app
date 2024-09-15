import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, FormArray } from '@angular/forms';

//import { PurchaseOrder } from './models';
import { PurchaseOrderService } from '../services/purchase-order.service';
import { OfficeSupply } from '../models/Office-supply.model';
import { PurchaseOrder } from '../models/purchase-order.model';

@Component({
  selector: 'app-purchase-order',
  templateUrl: './purchase-order.component.html',
})
export class PurchaseOrderComponent implements OnInit {
  poForm!: FormGroup;
  
  materials = [
    { id: 1, name: 'Material 1' },
    { id: 2, name: 'Material 2' },
    { id: 3, name: 'Material 3' }
  ];
  http: any;
  private pdfUrl = 'https://localhost:8080/api/purchase-orders/api/pdfs';

  constructor(private fb: FormBuilder,private purchaseOrderService: PurchaseOrderService) { }
  
  ngOnInit(): void {
    this.poForm = this.fb.group({
      description: ['', Validators.required],
      amount: ['', [Validators.required, Validators.min(1)]],
      materials: this.fb.array([])
    });
  }

  get materialForms() {
    return this.poForm.get('materials') as FormArray;
  }

  addMaterial() {
    const material = this.fb.group({
      materialId: ['', Validators.required],
      quantity: ['', [Validators.required, Validators.min(1)]]
    });
    this.materialForms.push(material);
  }

  removeMaterial(i: number) {
    this.materialForms.removeAt(i);
  }

  createPo() {
    if (this.poForm.valid) {
      this.purchaseOrderService.createPo(this.poForm.value).subscribe(
        (response) => {
          console.log('PO Created Successfully', response);
        },
        (error) => {
          console.error('Error creating PO', error);
        }
      );
    }
  }

  submitPO() {
    if (this.poForm.valid) {
      this.purchaseOrderService.submitPO(this.poForm.value).subscribe(
        (response) => {
          console.log('PO Submitted Successfully', response);
        },
        (error) => {
          console.error('Error submitting PO', error);
        }
      );
    }
  }

  generatePdf(po: PurchaseOrder): void {
    return this.http.post(`${this.pdfUrl}/generate-po`, po);
    window.open(this.pdfUrl, '_blank');
  }
}
    

  
