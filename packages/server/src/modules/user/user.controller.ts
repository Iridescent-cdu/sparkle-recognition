import { Body, Controller, Delete, Get, Patch, Post } from '@nestjs/common'
import { UserService } from './user.service'
import { CreateUserDto } from './dto/create-user.dto'

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {

  }

  @Post()
  async create(@Body() createUserDto: CreateUserDto) {

  }

  @Get()
  findAll() {}

  @Get()
  findOne() {}

  @Patch()
  update() {}

  @Delete()
  remove() {}
}
