import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullScreenMapDetailsComponent } from './full-screen-map-details.component';

describe('FullScreenMapDetailsComponent', () => {
  let component: FullScreenMapDetailsComponent;
  let fixture: ComponentFixture<FullScreenMapDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FullScreenMapDetailsComponent]
    });
    fixture = TestBed.createComponent(FullScreenMapDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
