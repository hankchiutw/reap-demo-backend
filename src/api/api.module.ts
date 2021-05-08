import { Module } from '@nestjs/common';
import { StorageModule } from '@app/storage';
import { AuthController, AuthService } from './auth';

@Module({
  imports: [StorageModule],
  controllers: [AuthController],
  providers: [AuthService],
})
export class ApiModule {}
