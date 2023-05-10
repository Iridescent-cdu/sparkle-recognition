import { registerAs } from '@nestjs/config'

/**
 * database配置文件
 * 使用registerAs注册带命名空间的配置文件
 */
export default registerAs('', () => {
  return {
    host: process.env.DATABASE_HOST,
    port: process.env.DATABASE_PORT,
    username: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    autoLoadEntities: process.env.DATABASE_AUTOLOADENTITIES,
    synchronize: process.env.DATABASE_SYNCHRONIZE,
  }
})
