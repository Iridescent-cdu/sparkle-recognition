import * as path from 'node:path'
import { Module } from '@nestjs/common'
import { ServeStaticModule } from '@nestjs/serve-static'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { configModuleRegister } from './config'
import { TypeOrmModuleRegister } from './database'

@Module({
  imports: [
    /* 注册配置模块 */
    configModuleRegister(),
    /* 配置静态资源目录 */
    ServeStaticModule.forRoot({
      rootPath: path.join(__dirname, '..', 'static'),
    }),
    /* 注册ORM模块 */
    TypeOrmModuleRegister(),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
