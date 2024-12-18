import { Body, Controller, Post } from '@nestjs/common';
import { RegisterService } from './register.service';
import { Prisma } from '@prisma/client';
@Controller('register')
export class RegisterController {
  constructor(private readonly regiterServices: RegisterService) {}

  @Post()
  register(@Body() user: Prisma.UserCreateInput) {
    return this.regiterServices.register(user);
  }
}
