import { registerAs } from '@nestjs/config';

/**
 * database配置文件
 * 使用registerAs注册带命名空间的配置文件
 */
export default registerAs('', () => {
  return {};
});
