

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { employeeAddComponent } from './employee-add.component';

describe('employeeAddComponent', () => {
  let component: employeeAddComponent;
  let fixture: ComponentFixture<employeeAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ employeeAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(employeeAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

