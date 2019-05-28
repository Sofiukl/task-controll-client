import { TestBed } from '@angular/core/testing';

import { CountService } from './count-service.service';

describe('CountServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CountService = TestBed.get(CountService);
    expect(service).toBeTruthy();
  });
});
