import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegularFormsComponent } from './regular-forms.component';

describe('RegularFormsComponent', () => {
  let component: RegularFormsComponent;
  let fixture: ComponentFixture<RegularFormsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegularFormsComponent]
    });
    fixture = TestBed.createComponent(RegularFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
