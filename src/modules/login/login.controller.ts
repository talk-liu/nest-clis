import {
  Body,
  Controller,
  Get,
  Post,
  Req,
  UseGuards,
  Headers,
} from '@nestjs/common';
import { LoginService } from './login.service';
import { Public } from 'src/common/decorators/public.decorator';


@Controller()
export class LoginController {
  constructor(private readonly loginService: LoginService) { }
  /* 用户登录 */
  @Get('/login')
  @Public()
  async login() {
    return 1
  }
}