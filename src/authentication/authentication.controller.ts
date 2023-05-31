import {
  Body,
  Req,
  Controller,
  HttpCode,
  Post,
  UseGuards,
} from '@nestjs/common';
import { AuthenticationService } from './authentication.service';
import RegisterDto from '../user/dto/register-dto/register-dto';
import RequestWithUser from './request-with-user.interface';
import { LocalAuthenticationGuard } from './local-authentication.guard';
import LoginDto from 'src/user/dto/login-dto/login-dto';

@Controller('authentication')
export class AuthenticationController {
  constructor(private readonly authenticationService: AuthenticationService) {}

  @Post('register')
  async register(@Body() registrationData: RegisterDto) {
    return this.authenticationService.register(registrationData);
  }

  @HttpCode(200)
  @UseGuards(LocalAuthenticationGuard)
  @Post('log-in')
  async logIn(@Req() request: RequestWithUser) {
    const user = request.user;
    user.password = undefined;
    return user;
  }
  @Post('login')
  async login(@Body() account: LoginDto) {
    return this.authenticationService.getAuthenticatedUser(
      account.email,
      account.password,
    );
  }
}
