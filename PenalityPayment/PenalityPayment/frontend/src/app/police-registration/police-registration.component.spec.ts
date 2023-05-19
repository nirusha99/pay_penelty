import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoliceRegistrationComponent } from './police-registration.component';

describe('PoliceRegistrationComponent', () => {
  let component: PoliceRegistrationComponent;
  let fixture: ComponentFixture<PoliceRegistrationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PoliceRegistrationComponent]
    });
    fixture = TestBed.createComponent(PoliceRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
