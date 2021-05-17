import { Test, TestingModule } from '@nestjs/testing';
import { AppTestingModule } from '@app/app-testing.module';
import { ApiTestingModule } from '@app/api/api-testing.module';
import { PhotoService } from './photo.service';

describe('PhotoService', () => {
  let service: PhotoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [AppTestingModule, ApiTestingModule],
    }).compile();

    service = await module.resolve<PhotoService>(PhotoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
