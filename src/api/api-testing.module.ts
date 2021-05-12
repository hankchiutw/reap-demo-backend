import { Module } from '@nestjs/common';
import { OrmModule } from '@app/orm';
import { User } from '@app/entities';
import { StorageModule } from '@app/storage';
import { AuthController, AuthService } from './auth';

@Module({
  imports: [StorageModule, OrmModule.forFeature([User])],
  controllers: [AuthController],
  providers: [AuthService],
})
export class ApiTestingModule {}
