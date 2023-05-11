import { Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { STS } from 'ali-oss'

@Injectable()
export class StsService {
  constructor(private readonly configService: ConfigService) {

  }

  getStsToken() {
    const client = new STS({
      accessKeyId: this.configService.get<string>('aliyun.accessKey'),
      accessKeySecret: this.configService.get<string>('aliyun.accessSecret'),
    })
    const policy = {
      Statement: [
        {
          Action: 'oss:*',
          Effect: 'Allow',
          Resource: '*',
        },
      ],
      Version: '1',
    }
    return client.assumeRole(this.configService.get<string>('aliyun.roleArn'), policy, this.configService.get<string>('aliyun.tokenExpireTime')).then((result) => {
      return {
        AccessKeyId: result.credentials.AccessKeyId,
        AccessKeySecret: result.credentials.AccessKeySecret,
        SecurityToken: result.credentials.SecurityToken,
        Expiration: result.credentials.Expiration,
      }
    }).catch((err) => {
      return err.message
    })
  }
}
