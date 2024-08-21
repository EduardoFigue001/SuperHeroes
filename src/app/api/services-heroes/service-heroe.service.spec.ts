import { TestBed } from '@angular/core/testing';

import { ServiceHeroeService } from './service-heroe.service';

describe('ServiceHeroeService', () => {
  let service: ServiceHeroeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceHeroeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
