import { Body, Controller, Delete, Get, InternalServerErrorException, Post, Req, UseGuards } from '@nestjs/common'
import { JwtAuthGuard } from '../auth/guard/jwt-auth.guard'
import { ImageService } from './image.service'
import { CreateImageDto } from './dto/create-image.dto'

@Controller('/api/image')
export class ImageController {
  constructor(private readonly imageService: ImageService) {
  }

  /* 上传图片 */
  @Post()
  @UseGuards(JwtAuthGuard)
  async create(@Req() req, @Body() createImageDto: CreateImageDto) {
    const image = await this.imageService.create(req.user.username, createImageDto)
    if (!image) {
      throw new InternalServerErrorException({
        message: '图片存储失败',
      })
    }
    else {
      return image
    }
  }

  /* 获取指定用户的所有图片和图片数量和排名 */
  @Get()
  @UseGuards(JwtAuthGuard)
  async getImagesByUsername(@Req() req) {
    const images = await this.imageService.findImagesByUser(req.user.userId)// 所有图片
    const rankUser = await this.imageService.getRankUserByImageCount(req.user.userId)// 图片数量和用户排名
    if (!images) {
      throw new InternalServerErrorException({
        message: '图片查询失败',
      })
    }
    else {
      return {
        images,
        rankUser,
      }
    }
  }

  @Delete()
  @UseGuards(JwtAuthGuard)
  async deleteImagesByImageId(@Body() body) {
    const res = await this.imageService.remove(body.imageId)
    return res
  }
}
