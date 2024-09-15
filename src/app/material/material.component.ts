import { Component, OnInit } from '@angular/core';
import { MaterialService } from '../services/material.service';


@Component({
  selector: 'app-material',
  template: `
    <h2>Materials</h2>
    <ul>
      <li *ngFor="let material of materials">{{ material.name }}</li>
    </ul>
  `
})
export class MaterialComponent implements OnInit {
  materials?: any[];

  constructor(private materialService: MaterialService) { }

  ngOnInit(): void {
    this.materialService.getMaterials().subscribe(materials => {
      this.materials = materials;
    });
  }
}