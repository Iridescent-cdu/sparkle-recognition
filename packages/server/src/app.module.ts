import * as path from 'node:path'
import { Module } from '@nestjs/common'
import { ServeStaticModule } from '@nestjs/serve-static'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { configModuleRegister } from './config'
import { TypeOrmModuleRegister } from './database'
import { AuthModule } from './modules/auth/auth.module'
import { UserModule } from './modules/user/user.module'
import { ImageModule } from './modules/image/image.module'

/* 自定义模块注册统一管理 */
function customModuleRegister() {
  return [
    AuthModule,
    UserModule,
    ImageModule,
  ] as const
}

@Module({
  controllers: [AppController],
  imports: [
    /* 注册配置模块 */
    configModuleRegister(),
    /* 配置静态资源目录 */
    ServeStaticModule.forRoot({
      rootPath: path.join(__dirname, '..', 'static'),
    }),
    /* 注册ORM模块 */
    TypeOrmModuleRegister(),
    /* 注册自定义模块 */
    ...customModuleRegister(),
  ],
  providers: [AppService],
})
export class AppModule {}
