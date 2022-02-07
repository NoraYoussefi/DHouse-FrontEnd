import { TestBed } from '@angular/core/testing';

import { NAuthGuard } from './nauth.guard';

describe('NAuthGuard', () => {
  let guard: NAuthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(NAuthGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
