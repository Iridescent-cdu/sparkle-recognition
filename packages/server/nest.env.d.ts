declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: string;
      DATABASE_HOST: string;
      DATABASE_PORT: number;
      DATABASE_USER: string;
      DATABASE_PASSWORD: string;
      DATABASE_NAME: string;
      DATABASE_AUTOLOADENTITIES: boolean;
      DATABASE_SYNCHRONIZE: boolean;
      ALIYUN_ACCESS_KEY: string;
      ALIYUN_ACCESS_SECRET: string;
      ALIYUN_TOKEN_EXPIRETIME: string;
      ALIYUN_ROLE_ARN: string;
    }
  }
}
export {};