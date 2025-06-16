import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegularFormDetailsComponent } from './regular-form-details.component';

describe('RegularFormDetailsComponent', () => {
  let component: RegularFormDetailsComponent;
  let fixture: ComponentFixture<RegularFormDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegularFormDetailsComponent]
    });
    fixture = TestBed.createComponent(RegularFormDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
