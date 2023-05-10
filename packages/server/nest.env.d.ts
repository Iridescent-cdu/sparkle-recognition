declare global {
  namespace NodeJS {
    interface ProcessEnv {
      type: string,
      host: string,
      port: number,
      username: string,
      password: string,
      database: string,
      autoLoadEntities: boolean,
      synchronize: boolean,
    }
  }
}
export {};