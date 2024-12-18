import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RegisterModule } from './register/register.module';
import { LoginService } from './login/login.service';
import { LoginController } from './login/login.controller';
import { LoginModule } from './login/login.module';
import { ConfigModule } from '@nestjs/config';
@Module({
  imports: [
    RegisterModule,
    LoginModule,
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
  ],
  controllers: [AppController, LoginController],
  providers: [AppService, LoginService],
})
export class AppModule {}
