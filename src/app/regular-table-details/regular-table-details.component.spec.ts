import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegularTableDetailsComponent } from './regular-table-details.component';

describe('RegularTableDetailsComponent', () => {
  let component: RegularTableDetailsComponent;
  let fixture: ComponentFixture<RegularTableDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegularTableDetailsComponent]
    });
    fixture = TestBed.createComponent(RegularTableDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
