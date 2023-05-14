import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'

import { User } from '../user/user.entity'

@Entity()
export class Image {
  @PrimaryGeneratedColumn()
  imageId: number

  @Column(
    {
      length: 100,
    },
  )
  imageUrl: string

  @Column()
  recognitionResult: string

  @CreateDateColumn()
  imageCreatedAt: Date

  @ManyToOne(() => User, user => user.images)
  user: User
}
