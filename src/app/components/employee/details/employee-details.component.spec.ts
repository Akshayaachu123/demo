
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { employeeDetailsComponent } from './employee-details.component';

describe('employeeDetailsComponent', () => {
  let component: employeeDetailsComponent;
  let fixture: ComponentFixture<employeeDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ employeeDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(employeeDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

