import { TestBed } from '@angular/core/testing';

import { IwordServiceService } from './iword-service.service';

describe('IwordServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: IwordServiceService = TestBed.get(IwordServiceService);
    expect(service).toBeTruthy();
  });
});
