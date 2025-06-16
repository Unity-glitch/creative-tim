import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtendedTableDetailsComponent } from './extended-table-details.component';

describe('ExtendedTableDetailsComponent', () => {
  let component: ExtendedTableDetailsComponent;
  let fixture: ComponentFixture<ExtendedTableDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExtendedTableDetailsComponent]
    });
    fixture = TestBed.createComponent(ExtendedTableDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
