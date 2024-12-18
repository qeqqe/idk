import { Injectable } from '@nestjs/common';
import { PrismaClient, Prisma } from '@prisma/client';
import * as bcrypt from 'bcrypt';

const prisma = new PrismaClient();
@Injectable()
export class LoginService {
  async login(user: Prisma.UserCreateInput) {
    const theUser = await prisma.user.findUnique({
      where: { email: user.email },
    });
    if (!theUser) {
      return { message: 'user not found!' };
    }
    if (!(await bcrypt.compare(user.password, theUser.password))) {
      return { message: 'Incorrect password' };
    }
    return { message: 'Logged in successfully', theUser };
  }
}
