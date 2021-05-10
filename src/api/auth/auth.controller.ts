import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { DoLoginDto, DoSignUpDto } from './dto';
import { ApiResult } from '../interfaces';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  async doLogin(@Body() dto: DoLoginDto): Promise<ApiResult> {
    try {
      await this.authService.doLogin(dto);
    } catch (e) {
      return {
        errorMessage: e.message,
      };
    }
  }

  @Post('signup')
  async doSignUp(@Body() dto: DoSignUpDto): Promise<ApiResult> {
    try {
      await this.authService.doSignUp(dto);
    } catch (e) {
      return {
        errorMessage: e.essage,
      };
    }
  }
}
