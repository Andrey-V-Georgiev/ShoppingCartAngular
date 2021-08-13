import { TestBed } from '@angular/core/testing';

import { EventEmitterCoreService } from './event-emmiter-core.service';

describe('EventEmitterCoreService', () => {
  let service: EventEmitterCoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EventEmitterCoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
