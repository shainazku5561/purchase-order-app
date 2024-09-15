import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprovalWorkflowAdminComponent } from './approval-workflow-admin.component';

describe('ApprovalWorkflowAdminComponent', () => {
  let component: ApprovalWorkflowAdminComponent;
  let fixture: ComponentFixture<ApprovalWorkflowAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApprovalWorkflowAdminComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApprovalWorkflowAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
