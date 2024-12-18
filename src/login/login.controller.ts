import { Body, Controller, Post } from '@nestjs/common';
import { LoginService } from './login.service';
import { Prisma } from '@prisma/client';
@Controller('login')
export class LoginController {
  constructor(private readonly loginServices: LoginService) {}

  @Post()
  login(@Body() user: Prisma.UserCreateInput) {
    return this.loginServices.login(user);
  }
}
