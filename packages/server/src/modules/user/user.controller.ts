import { Controller, Get, UseGuards } from '@nestjs/common'
import { JwtAuthGuard } from '../auth/guard/jwt-auth.guard'
import { UserService } from './user.service'

@Controller('/api/user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  /* 获取图片数最高的四个用户信息 */
  @Get()
  @UseGuards(JwtAuthGuard)
  async getRankUserByImagesCount() {
    const rankUser = await this.userService.getRankUserByImagesCount()
    rankUser.forEach((item) => {
      item.count = +item.count - 1
    })
    return {
      rankUser,
    }
  }
}
