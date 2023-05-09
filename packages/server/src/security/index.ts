import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import type { NestExpressApplication } from '@nestjs/platform-express';

/*  配置安全策略 */
export function securityPolicyConfig(app: NestExpressApplication) {
  // 1.设置与安全相关的 HTTP 头
  app.use(helmet());
  // 2.启用 CORS
  app.enableCors({});
  // 3.CSRF保护：一般情况下，使用JWT身份验证后，不需要再配置CSRF保护
  // app.use(csurf());
  // 4.限速，DDOS
  app.use(
    rateLimit({
      windowMs: 15 * 60 * 1000, // 15 minutes
      max: 100, // 限制每windowMs的时间内只允许每个IP发送100次请求
    }),
  );
  return app;
}
