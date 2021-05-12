import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { DoLoginDto, DoSignUpDto } from './dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  doLogin(@Body() dto: DoLoginDto): Promise<boolean> {
    return this.authService.doLogin(dto);
  }

  @Post('signup')
  doSignUp(@Body() dto: DoSignUpDto): Promise<boolean> {
    return this.authService.doSignUp(dto);
  }
}
