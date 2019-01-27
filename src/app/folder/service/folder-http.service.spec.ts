import { TestBed } from '@angular/core/testing';

import { FolderHttpService } from './folder-http.service';

describe('FolderHttpService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FolderHttpService = TestBed.get(FolderHttpService);
    expect(service).toBeTruthy();
  });
});
