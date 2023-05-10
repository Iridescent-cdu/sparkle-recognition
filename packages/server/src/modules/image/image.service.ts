import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { UserService } from '../user/user.service'
import { Image } from './image.entity'

@Injectable()
export class ImageService {
  constructor(
    @InjectRepository(Image)
    private imagesRepository: Repository<Image>,
    private userService: UserService,
  ) {}

  /* 新增图片 */
  async create(username: string, imageUrl: string) {
    const user = await this.userService.findOne(username)
    return this.imagesRepository.save({
      imageUrl,
      user,
    })
  }

  findAll(): Promise<Image[]> {
    return this.imagesRepository.find()
  }

  findOne(id: number): Promise<Image> {
    return this.imagesRepository.findOne({
      where: {
        imageId: id,
      },
    })
  }

  findImagesByUser(userId: number) {
    return this.imagesRepository.find({
      where: {
        user: {
          userId,
        },
      },
    })
  }

  async remove(id: number): Promise<void> {
    await this.imagesRepository.delete(id)
  }
}
