import { TestBed } from '@angular/core/testing';

import { OpmetService } from './opmet.service';

describe('OpmetService', () => {
  let service: OpmetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OpmetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
