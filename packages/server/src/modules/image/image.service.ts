import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { Image } from './image.entity'

@Injectable()
export class ImageService {
  constructor(
    @InjectRepository(Image)
    private usersRepository: Repository<Image>,
  ) {}

  findAll(): Promise<Image[]> {
    return this.usersRepository.find()
  }

  findOne(id: number): Promise<Image> {
    return this.usersRepository.findOne({
      where: {
        imageId: id,
      },
    })
  }

  async remove(id: number): Promise<void> {
    await this.usersRepository.delete(id)
  }
}
