import { Body, Controller, InternalServerErrorException, Post, Req, UseGuards } from '@nestjs/common'
import { AppService } from './app.service'
import { CreateUserDto } from './modules/user/dto/create-user.dto'
import { UserService } from './modules/user/user.service'
import { AuthService } from './modules/auth/auth.service'
import { LocalAuthGuard } from './modules/auth/guard/local-auth.guard'

@Controller('/api')
export class AppController {
  constructor(private readonly appService: AppService, private readonly userService: UserService, private readonly authService: AuthService) {

  }

  /* 登录接口 */
  @Post('/login')
  @UseGuards(LocalAuthGuard)
  async login(@Req() req) {
    return this.authService.login(req.user)
  }

  /* 注册接口 */
  @Post('/register')

  async register(@Body()createUserDto: CreateUserDto) {
    const user = await this.userService.create(createUserDto.username, createUserDto.password)
    if (!user)
      throw new InternalServerErrorException()
    return {
      statusCode: 200,
      message: 'success',
      data: user,
    }
  }
}
