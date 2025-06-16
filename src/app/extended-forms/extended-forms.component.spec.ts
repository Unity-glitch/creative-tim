import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtendedFormsComponent } from './extended-forms.component';

describe('ExtendedFormsComponent', () => {
  let component: ExtendedFormsComponent;
  let fixture: ComponentFixture<ExtendedFormsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExtendedFormsComponent]
    });
    fixture = TestBed.createComponent(ExtendedFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
