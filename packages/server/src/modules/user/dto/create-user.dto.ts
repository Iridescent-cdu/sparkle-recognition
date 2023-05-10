import { IsNotEmpty, IsString } from 'class-validator'

/* User DTO验证 */
export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  username: string

  @IsString()
  @IsNotEmpty()
  password: string
}
