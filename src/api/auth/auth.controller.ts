import { Controller, Get, Post, Body, Session } from '@nestjs/common';
import { AuthService } from './auth.service';
import { DoLoginDto, DoSignUpDto } from './dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Get('me')
  getMe(@Session() session: Record<string, any>) {
    const username = session.username;
    return username ? { username } : false;
  }

  @Post('login')
  async doLogin(
    @Body() dto: DoLoginDto,
    @Session() session: Record<string, any>,
  ): Promise<boolean> {
    session.username = await this.authService.doLogin(dto);
    return true;
  }

  @Post('signup')
  doSignUp(@Body() dto: DoSignUpDto): Promise<boolean> {
    return this.authService.doSignUp(dto);
  }
}
