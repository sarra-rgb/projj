import { TestBed } from '@angular/core/testing';

import { Home2Service } from './home2.service';

describe('Home2Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Home2Service = TestBed.get(Home2Service);
    expect(service).toBeTruthy();
  });
});
