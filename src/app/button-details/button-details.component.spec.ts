import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonDetailsComponent } from './button-details.component';

describe('ButtonDetailsComponent', () => {
  let component: ButtonDetailsComponent;
  let fixture: ComponentFixture<ButtonDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ButtonDetailsComponent]
    });
    fixture = TestBed.createComponent(ButtonDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
