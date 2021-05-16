import { Controller, Get, Post, Body, Session, Req } from '@nestjs/common';
import { Request } from 'express';
import { User } from '@app/entities';
import { AuthService } from './auth.service';
import { DoLoginDto, DoSignUpDto } from './dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Get('me')
  getMe(@Session() session: Record<string, any>): Partial<User> {
    if (!session.user) {
      return null;
    }
    const user = { ...session.user };
    delete user.password;
    return user;
  }

  @Post('login')
  async doLogin(
    @Body() dto: DoLoginDto,
    @Session() session: Record<string, any>,
  ): Promise<boolean> {
    session.user = await this.authService.doLogin(dto);
    return true;
  }

  @Post('signup')
  doSignUp(@Body() dto: DoSignUpDto): Promise<boolean> {
    return this.authService.doSignUp(dto);
  }

  @Get('logout')
  doLogout(@Req() req: Request) {
    req.session.destroy(null);
    return true;
  }
}
