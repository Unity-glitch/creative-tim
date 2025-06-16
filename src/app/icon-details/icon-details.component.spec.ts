import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconDetailsComponent } from './icon-details.component';

describe('IconDetailsComponent', () => {
  let component: IconDetailsComponent;
  let fixture: ComponentFixture<IconDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IconDetailsComponent]
    });
    fixture = TestBed.createComponent(IconDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
