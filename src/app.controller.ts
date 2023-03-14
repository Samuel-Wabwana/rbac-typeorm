import { Controller, Get, Post, UseGuards, Request } from '@nestjs/common';
import { from } from 'rxjs';
import { AppService } from './app.service';
import { AuthService } from './auth/auth.service';
import { LocalAuthGuard } from './auth/guards/local-auth.guard';
import { Request as IRequest } from 'express';
import { plainToInstance } from 'class-transformer';
import { LoginPayLoadDto } from './users/dto/login-payload.dto';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly authService: AuthService,
    ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Request() req: IRequest) {
    return this.authService.login(plainToInstance(LoginPayLoadDto, req.user))
  }
}
