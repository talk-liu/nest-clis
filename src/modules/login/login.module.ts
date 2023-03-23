import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';

import { LoginController } from './login.controller';
import { LoginService } from './login.service';
@Module({
  imports: [
    JwtModule.register({
      secret: 'Jiang Sheng is the best',
      signOptions: { expiresIn: '168h' },
    }),
  ],
  controllers: [LoginController],
  providers: [LoginService],
})
export class LoginModule { }