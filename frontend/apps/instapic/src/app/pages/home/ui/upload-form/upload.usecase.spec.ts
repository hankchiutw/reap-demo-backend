import { TestBed } from '@angular/core/testing';
import { AppTestingModule } from '@app/app-testing.module';
import { HomeTestingModule } from '@app/pages/home/home-testing.module';
import { HomeUiTestingModule } from '@app/pages/home/ui/home-ui-testing.module';

import { UploadUsecase } from './upload.usecase';

describe('UploadUsecase', () => {
  let service: UploadUsecase;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AppTestingModule, HomeTestingModule, HomeUiTestingModule],
      providers: [UploadUsecase],
    });
    service = TestBed.inject(UploadUsecase);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
