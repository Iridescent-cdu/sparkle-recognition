import { Body, Controller, Get, InternalServerErrorException, Post, Req, UseGuards } from '@nestjs/common'
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
    const image = await this.imageService.create(req.username, createImageDto.imageUrl)
    if (!image) {
      throw new InternalServerErrorException({
        message: '图片存储失败',
      })
    }
    else {
      return image
    }
  }

  /* 获取指定用户的所有图片 */
  @Get()
  @UseGuards(JwtAuthGuard)
  async getImagesByUsername(@Req() req) {
    const images = await this.imageService.findImagesByUser(req.userId)
    if (!images) {
      throw new InternalServerErrorException({
        message: '图片查询失败',
      })
    }
    else {
      return images
    }
  }
}
