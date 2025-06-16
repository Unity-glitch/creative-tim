import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WizardFormDetailsComponent } from './wizard-form-details.component';

describe('WizardFormDetailsComponent', () => {
  let component: WizardFormDetailsComponent;
  let fixture: ComponentFixture<WizardFormDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WizardFormDetailsComponent]
    });
    fixture = TestBed.createComponent(WizardFormDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
