import { NestFactory } from '@nestjs/core';

import type { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app.module';
import { securityPolicyConfig } from './security';

declare const module: any;
async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  /* 为应用添加Web安全策略 */
  const safeApp = securityPolicyConfig(app);
  await safeApp.listen(3000);
  /* 配置应用热重载 */
  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
}
bootstrap();
