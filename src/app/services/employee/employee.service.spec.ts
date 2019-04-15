

import { TestBed, inject } from '@angular/core/testing';

import { employeeService } from './employee.service';

describe('employeeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [employeeService]
    });
  });

  it('should be created', inject([employeeService], (service: employeeService) => {
    expect(service).toBeTruthy();
  }));
});


