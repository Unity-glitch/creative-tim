import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypographyDetailsComponent } from './typography-details.component';

describe('TypographyDetailsComponent', () => {
  let component: TypographyDetailsComponent;
  let fixture: ComponentFixture<TypographyDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TypographyDetailsComponent]
    });
    fixture = TestBed.createComponent(TypographyDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
