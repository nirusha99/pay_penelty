import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PenaltySheetComponent } from './penalty-sheet.component';

describe('PenaltySheetComponent', () => {
  let component: PenaltySheetComponent;
  let fixture: ComponentFixture<PenaltySheetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PenaltySheetComponent]
    });
    fixture = TestBed.createComponent(PenaltySheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
