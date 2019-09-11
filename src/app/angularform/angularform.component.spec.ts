import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularformComponent } from './angularform.component';

describe('AngularformComponent', () => {
  let component: AngularformComponent;
  let fixture: ComponentFixture<AngularformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
