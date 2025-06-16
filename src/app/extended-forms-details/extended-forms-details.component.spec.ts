import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtendedFormsDetailsComponent } from './extended-forms-details.component';

describe('ExtendedFormsDetailsComponent', () => {
  let component: ExtendedFormsDetailsComponent;
  let fixture: ComponentFixture<ExtendedFormsDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExtendedFormsDetailsComponent]
    });
    fixture = TestBed.createComponent(ExtendedFormsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
