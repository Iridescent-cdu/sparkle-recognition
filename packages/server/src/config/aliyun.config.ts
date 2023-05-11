import * as process from 'node:process'
import { registerAs } from '@nestjs/config'

export default registerAs('aliyun', () => {
  return {
    accessKey: process.env.ALIYUN_ACCESS_KEY,
    accessSecret: process.env.ALIYUN_ACCESS_SECRET,
    roleArn: process.env.ALIYUN_ROLE_ARN,
    tokenExpireTime: process.env.ALIYUN_TOKEN_EXPIRETIME,
  }
})
