import { Test, TestingModule } from '@nestjs/testing';
import { Connection } from 'typeorm';
import { AppTestingModule } from '@app/app-testing.module';
import { ApiTestingModule } from '@app/api/api-testing.module';
import { AuthService } from './auth.service';
import { User } from '@app/entities';

describe('AuthService', () => {
  let service: AuthService;
  let connection: Connection;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [AppTestingModule, ApiTestingModule],
    }).compile();

    service = module.get<AuthService>(AuthService);
    connection = module.get<Connection>(Connection);
  });

  afterEach(async () => {
    await connection.close();
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('doLogin', () => {
    it('should invoke exception for wrong username/password', async () => {
      await expect(
        service.doLogin({
          username: 'x',
          password: 'x',
        }),
      ).rejects.toThrow();
    });

    it('should return truthy', async () => {
      const mockUser = {
        username: 'user1',
        password: 'password1',
      };
      await connection
        .createQueryBuilder()
        .insert()
        .into(User)
        .values([mockUser])
        .execute();
      const result = await service.doLogin(mockUser);
      expect(result).toBeTruthy();
    });
  });

  describe('doSignUp', () => {
    it('should invoke exception if user existed', async () => {
      const mockUser = {
        username: 'user1',
        password: 'password1',
      };
      await connection
        .createQueryBuilder()
        .insert()
        .into(User)
        .values([mockUser])
        .execute();

      await expect(service.doSignUp(mockUser)).rejects.toThrow();
    });

    it('should return truthy', async () => {
      const mockUser = {
        username: 'user1',
        password: 'password1',
      };
      const result = await service.doSignUp(mockUser);
      expect(result).toBeTruthy();
    });
  });
});
