import { ExtractJwt, Strategy } from 'passport-jwt'
import { PassportStrategy } from '@nestjs/passport'
import { Injectable } from '@nestjs/common'
import { jwtConstants } from '../constants'

/* JWT解析策略 */
@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      // 从请求的Authorization标头中提取令牌，令牌应该是Bearer <token>的格式
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: jwtConstants.secret,
    })
  }

  /* 对于 JWT 策略，Passport 首先验证 JWT 的签名并解码 JSON，然后自动调用 validate() 方法，该方法将解码后的 JSON 作为其单个参数payload传递 */
  async validate(payload: any) {
    return { userId: payload.sub, username: payload.username }
  }
}
