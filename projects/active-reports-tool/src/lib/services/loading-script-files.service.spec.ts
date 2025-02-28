import { TestBed } from '@angular/core/testing';
import { LoadingScriptFilesService } from './loading-script-files.service';

describe('LoadingScriptFilesService', () => {
  let service: LoadingScriptFilesService;
  beforeEach(async () => {
   
    // Create a new instance of the service, injecting the mocked document
    TestBed.configureTestingModule({
      providers: [ ],
    });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
 
})
})