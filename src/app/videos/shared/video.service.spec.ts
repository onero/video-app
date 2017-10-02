import { TestBed, inject } from '@angular/core/testing';

import { VideoServiceService } from './video.service';

describe('VideoServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VideoServiceService]
    });
  });

  it('should be created', inject([VideoServiceService], (service: VideoServiceService) => {
    expect(service).toBeTruthy();
  }));
});
