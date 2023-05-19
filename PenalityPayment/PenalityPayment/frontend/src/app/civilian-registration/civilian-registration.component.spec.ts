import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CivilianRegistrationComponent } from './civilian-registration.component';

describe('CivilianRegistrationComponent', () => {
  let component: CivilianRegistrationComponent;
  let fixture: ComponentFixture<CivilianRegistrationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CivilianRegistrationComponent]
    });
    fixture = TestBed.createComponent(CivilianRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
