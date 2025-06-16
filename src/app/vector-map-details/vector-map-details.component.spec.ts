import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VectorMapDetailsComponent } from './vector-map-details.component';

describe('VectorMapDetailsComponent', () => {
  let component: VectorMapDetailsComponent;
  let fixture: ComponentFixture<VectorMapDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VectorMapDetailsComponent]
    });
    fixture = TestBed.createComponent(VectorMapDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
