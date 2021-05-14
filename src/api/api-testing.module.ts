import { Module } from '@nestjs/common';
import { OrmModule } from '@app/orm';
import { StorageModule } from '@app/storage';
import { AuthController, AuthService } from './auth';
import { PhotoController, PhotoService } from './photo';

@Module({
  imports: [StorageModule, OrmModule.forFeature()],
  controllers: [AuthController, PhotoController],
  providers: [AuthService, PhotoService],
})
export class ApiTestingModule {}
