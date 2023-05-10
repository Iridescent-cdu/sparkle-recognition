import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import * as bcrypt from 'bcrypt'
import { User } from './user.entity'

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {
  }

  async create(username: string, password: string) {
    const salt = await bcrypt.genSalt()
    const hash = await bcrypt.hash(password, salt)
    return this.usersRepository.save({
      username,
      password: hash,
      salt,
    })
  }

  findAll(): Promise<User[]> {
    return this.usersRepository.find()
  }

  findOne(username: string): Promise<User> {
    return this.usersRepository.findOne({
      where: {
        username,
      },
    })
  }

  async remove(id: number): Promise<void> {
    await this.usersRepository.delete(id)
  }
}
