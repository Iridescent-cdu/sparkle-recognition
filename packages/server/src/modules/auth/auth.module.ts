import { Module } from '@nestjs/common'
import { PassportModule } from '@nestjs/passport'
import { JwtModule } from '@nestjs/jwt'
import { UserModule } from '../user/user.module'
import { AuthService } from './auth.service'
import { LocalStrategy } from './strategy/local.strategy'
import { jwtConstants } from './constants'
import { JwtStrategy } from './strategy/jwt.strategy'

@Module({
  imports: [UserModule, PassportModule,
    /* 导入JwtModule配置Jwt秘钥 */
    JwtModule.register(
      {
        secret: jwtConstants.secret,
        signOptions: { expiresIn: '9999d' },
      },
    )],
  providers: [AuthService, LocalStrategy, JwtStrategy],
  exports: [AuthService],
})
export class AuthModule {}
