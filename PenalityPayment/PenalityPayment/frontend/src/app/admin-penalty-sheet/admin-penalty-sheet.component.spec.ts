import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPenaltySheetComponent } from './admin-penalty-sheet.component';

describe('AdminPenaltySheetComponent', () => {
  let component: AdminPenaltySheetComponent;
  let fixture: ComponentFixture<AdminPenaltySheetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminPenaltySheetComponent]
    });
    fixture = TestBed.createComponent(AdminPenaltySheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
