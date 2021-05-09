import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { DoLoginDto } from './dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  doLogin(dto: DoLoginDto): void {
    return this.authService.doLogin(dto);
  }
}
