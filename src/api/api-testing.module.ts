import { Module } from '@nestjs/common';
import { OrmModule } from '@app/orm';
import { StorageModule } from '@app/storage';
import { AuthController, AuthService } from './auth';
import { PhotoController, PhotoService } from './photo';
import { UserController, UserService } from './user';

@Module({
  imports: [StorageModule, OrmModule.forFeature()],
  controllers: [AuthController, PhotoController, UserController],
  providers: [AuthService, PhotoService, UserService],
})
export class ApiTestingModule {}
