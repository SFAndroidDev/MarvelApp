import { TestBed } from '@angular/core/testing';

import { CharactersApi2Service } from './characters-api2.service';

describe('CharactersApi2Service', () => {
  let service: CharactersApi2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CharactersApi2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
