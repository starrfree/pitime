import { TestBed } from '@angular/core/testing';

import { PiService } from './pi.service';

describe('PiService', () => {
  let service: PiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
