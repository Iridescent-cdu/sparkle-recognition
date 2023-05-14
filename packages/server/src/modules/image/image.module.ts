import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { UserModule } from '../user/user.module'
import { User } from '../user/user.entity'
import { ImageService } from './image.service'
import { ImageController } from './image.controller'
import { Image } from './image.entity'

@Module({
  imports: [TypeOrmModule.forFeature([Image, User]), UserModule],
  providers: [ImageService],
  controllers: [ImageController],
})
export class ImageModule {}
