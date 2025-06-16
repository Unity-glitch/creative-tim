import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidateFormDetailsComponent } from './validate-form-details.component';

describe('ValidateFormDetailsComponent', () => {
  let component: ValidateFormDetailsComponent;
  let fixture: ComponentFixture<ValidateFormDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ValidateFormDetailsComponent]
    });
    fixture = TestBed.createComponent(ValidateFormDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
