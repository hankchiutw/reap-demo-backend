import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { DoLoginDto, DoSignUpDto } from './dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  async doLogin(@Body() dto: DoLoginDto): Promise<void> {
    await this.authService.doLogin(dto);
  }

  @Post('signup')
  async doSignUp(@Body() dto: DoSignUpDto): Promise<void> {
    await this.authService.doSignUp(dto);
  }
}
