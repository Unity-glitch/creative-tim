import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SweetalertDetailsComponent } from './sweetalert-details.component';

describe('SweetalertDetailsComponent', () => {
  let component: SweetalertDetailsComponent;
  let fixture: ComponentFixture<SweetalertDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SweetalertDetailsComponent]
    });
    fixture = TestBed.createComponent(SweetalertDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
