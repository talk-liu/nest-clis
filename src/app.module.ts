import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
// 本地配置
import configuration from './config/configuration';

import { AppController } from './app.controller';
import { AppService } from './app.service';
// 文件引入
import { LoginModule } from './modules/login/login.module';
import { SharedModule } from './shared/shared.module';


@Module({
  imports: [
    /* 配置文件模块 */
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
    }),
    /* 公共模块 */
    SharedModule,
    /* 业务模块 */
    LoginModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
