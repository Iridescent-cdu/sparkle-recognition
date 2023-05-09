import { ConfigModule } from '@nestjs/config';
import databaseConfig from './database.config';

/* 统一导出：注册和配置ConfigModule，ConfigModule会提供一个ConfigService供模块内部使用 */
export function configModuleRegister() {
  return ConfigModule.forRoot({
    // 配置env文件解析的路径，默认项目根目录
    envFilePath: [
      './env/.env',
      './env/.env.development.local',
      './env/.env.production.local',
    ],
    // 配置为全局，会在根模块向全局依赖注入一个ConfigModule
    isGlobal: true,
    // 用于加载自定义配置文件，以提供ConfigService服务
    load: [databaseConfig],
  });
}
