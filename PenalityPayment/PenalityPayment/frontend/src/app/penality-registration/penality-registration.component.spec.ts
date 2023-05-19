import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PenalityRegistrationComponent } from './penality-registration.component';

describe('PenalityRegistrationComponent', () => {
  let component: PenalityRegistrationComponent;
  let fixture: ComponentFixture<PenalityRegistrationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PenalityRegistrationComponent]
    });
    fixture = TestBed.createComponent(PenalityRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
