import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveydemoComponent } from './surveydemo.component';

describe('SurveydemoComponent', () => {
  let component: SurveydemoComponent;
  let fixture: ComponentFixture<SurveydemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SurveydemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SurveydemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
