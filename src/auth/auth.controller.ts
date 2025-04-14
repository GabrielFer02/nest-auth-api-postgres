import { Body, Controller, Post } from '@nestjs/common';
import { SignInDTO, SignUpDTO } from './dtos/auth';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signin')
  async signin(@Body() body: SignInDTO) {
    return await this.authService.signIn(body);
  }

  @Post('signup')
  async signup(@Body() body: SignUpDTO) {
    return this.authService.signUp(body);
  }
}
