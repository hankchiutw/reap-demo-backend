import { TestBed } from '@angular/core/testing';
import { AppTestingModule } from '@app/app-testing.module';
import { HomeTestingModule } from '@app/pages/home/home-testing.module';
import { HomeUiTestingModule } from '@app/pages/home/ui/home-ui-testing.module';

import { PhotoDaoUsecase } from './photo-dao.usecase';

describe('PhotoDaoUsecase', () => {
  let service: PhotoDaoUsecase;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AppTestingModule, HomeTestingModule, HomeUiTestingModule],
      providers: [PhotoDaoUsecase],
    });
    service = TestBed.inject(PhotoDaoUsecase);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
