import { Column, CreateDateColumn, Entity, Index, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm'
import { Image } from '../image/image.entity'

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  userId: number

  @Column(
    {
      length: 20,
    },
  )
  @Index({ unique: true })
  username: string

  @Column()
  salt: string

  @Column(
    {
      length: 100,
    },
  )
  password: string

  @CreateDateColumn()
  userCreatedAt: Date

  @UpdateDateColumn()
  userUpdatedAt: Date

  @OneToMany(() => Image, image => image.user)
  images: Image[]
}
