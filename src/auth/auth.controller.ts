import {
  Body,
  Controller,
  Get,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { SignInDTO, SignUpDTO } from './dtos/auth';
import { AuthService } from './auth.service';
import { AuthGuard } from './guard/auth.guard';
import { Request as Requestmodel } from 'express';

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

  @UseGuards(AuthGuard)
  @Get('me')
  me(@Request() request: Requestmodel) {
    return request;
  }
}
