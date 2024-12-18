import { Injectable } from '@nestjs/common';
import { PrismaClient, Prisma } from '@prisma/client';
import * as bcrypt from 'bcrypt';
const prisma = new PrismaClient();
@Injectable()
export class RegisterService {
  async register(user: Prisma.UserCreateInput) {
    const hashedPassword = await bcrypt.hash(user.password, 10);
    const newUser = await prisma.user.create({
      data: {
        username: user.username,
        email: user.email,
        password: hashedPassword,
      },
    });
    console.log(newUser);
    return newUser;
  }
}
