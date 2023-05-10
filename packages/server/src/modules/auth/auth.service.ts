import { Injectable } from '@nestjs/common'
import * as bcrypt from 'bcrypt'
import { JwtService } from '@nestjs/jwt'
import { UserService } from '../user/user.service'
import type { User } from '../user/user.entity'

@Injectable()
export class AuthService {
  constructor(private readonly usersService: UserService, private readonly jwtService: JwtService) {

  }

  /* auth密码验证 */
  async validateUser(username: string, password: string) {
    const user = await this.usersService.findOne(username)
    const hash = await bcrypt.hash(password, user.salt)
    // const isMatch = await bcrypt.compare(user.password, hash)
    const isMatch = user.password === hash
    if (isMatch)
      return user
    else
      return null
  }

  /* 登录服务生成jwt */
  async login(user: User) {
    const payload = { username: user.username, sub: user.userId }
    return {
      access_token: this.jwtService.sign(payload),
    }
  }
}
