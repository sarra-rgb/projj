import { TestBed } from '@angular/core/testing';

import { Home3Service } from './home3.service';

describe('Home3Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Home3Service = TestBed.get(Home3Service);
    expect(service).toBeTruthy();
  });
});
