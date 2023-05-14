import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { UserService } from '../user/user.service'
import { User } from '../user/user.entity'
import { Image } from './image.entity'
import type { CreateImageDto } from './dto/create-image.dto'

@Injectable()
export class ImageService {
  constructor(
    @InjectRepository(Image)
    private imagesRepository: Repository<Image>,
    @InjectRepository(User)
    private usersRepository: Repository<User>,
    private userService: UserService,
  ) {
  }

  /* 新增图片 */
  async create(username: string, createImageDto: CreateImageDto) {
    const user = await this.userService.findOne(username)
    return this.imagesRepository.save({
      imageUrl: createImageDto.imageUrl,
      recognitionResult: createImageDto.recognitionResult,
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

  /* 获取指定用户的所有图片 */
  async findImagesByUser(userId: number) {
    const images = await this.imagesRepository.find({
      where: {
        user: {
          userId,
        },
      },
    })
    const imagesCopy: any = [...images]
    imagesCopy.forEach((item) => {
      item.key = item.imageId
    })

    return imagesCopy
  }

  countImagesByUser(userId: number) {
    return this.imagesRepository.createQueryBuilder('image')
      .select('COUNT(*)', 'count')
      .where('image.userUserId = :userId', { userId })
      .getRawOne()
  }

  /* 获取指定用户的所有图片数量 */
  async getRankUserByImageCount(userId: number) {
    // 找出指定用户
    const user = await this.usersRepository.findOne({
      where: {
        userId,
      },
    })

    // 找出所有用户的图片数量，并按照数量降序排列
    const userImages = await this.imagesRepository
      .createQueryBuilder('image')
      .select('image.userUserId', 'userId')
      .addSelect('COALESCE(COUNT(*), 0)', 'count')
      .groupBy('image.userUserId')
      .orderBy('count', 'DESC')
      .getRawMany()

    const users = await this.usersRepository.find()
    const result = users.map((user) => {
      const image = userImages.find(image => image.userId === user.userId)
      const count = image ? image.count : 0
      return { ...user, count }
    })
    // 找出指定用户的图片数量，并计算排名
    const { count } = result?.find(i => i.userId === userId) || {
      count: 0,
    }

    const currentUserRank = result?.findIndex(i => i.userId === userId) + 1

    return {
      rank: currentUserRank,
      count,
    }
  }

  remove(id: number) {
    return this.imagesRepository.delete(id)
  }
}
