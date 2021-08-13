import { TestBed } from '@angular/core/testing';

import { EventEmitterProductService } from './event-emitter-product.service';

describe('EventEmitterProductService', () => {
  let service: EventEmitterProductService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EventEmitterProductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
