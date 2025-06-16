import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoogleMapDetailsComponent } from './google-map-details.component';

describe('GoogleMapDetailsComponent', () => {
  let component: GoogleMapDetailsComponent;
  let fixture: ComponentFixture<GoogleMapDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GoogleMapDetailsComponent]
    });
    fixture = TestBed.createComponent(GoogleMapDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
