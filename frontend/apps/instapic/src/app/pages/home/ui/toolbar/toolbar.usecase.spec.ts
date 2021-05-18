import { TestBed } from '@angular/core/testing';
import { AppTestingModule } from '@app/app-testing.module';
import { HomeTestingModule } from '@app/pages/home/home-testing.module';
import { HomeUiTestingModule } from '@app/pages/home/ui/home-ui-testing.module';

import { ToolbarUsecase } from './toolbar.usecase';

describe('ToolbarUsecase', () => {
  let service: ToolbarUsecase;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AppTestingModule, HomeTestingModule, HomeUiTestingModule],
      providers: [ToolbarUsecase],
    });
    service = TestBed.inject(ToolbarUsecase);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
