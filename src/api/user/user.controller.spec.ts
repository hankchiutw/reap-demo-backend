import { Test, TestingModule } from '@nestjs/testing';
import { AppTestingModule } from '@app/app-testing.module';
import { ApiTestingModule } from '@app/api/api-testing.module';
import { UserController } from './user.controller';

describe('UserController', () => {
  let controller: UserController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [AppTestingModule, ApiTestingModule],
    }).compile();

    controller = module.get<UserController>(UserController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
